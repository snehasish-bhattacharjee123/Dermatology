const mongoose = require('mongoose');

/**
 * Booking/Appointment Model
 * Manages appointment bookings with status workflow
 */

const bookingSchema = new mongoose.Schema({
    // Patient Information
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: false, // Optional for guest bookings
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email'],
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true,
        match: [/^\+?[0-9\s-]{10,}$/, 'Please enter a valid phone number'],
    },

    // Appointment Details
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: false,
    },
    serviceName: {
        type: String,
        required: true,
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location',
        required: false,
    },
    locationName: {
        type: String,
        required: true,
    },
    appointmentDate: {
        type: Date,
        required: [true, 'Appointment date is required'],
    },
    appointmentTime: {
        type: String,
        required: [true, 'Appointment time is required'],
        match: [/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]\s*(AM|PM)$/i, 'Please enter a valid time format (e.g., 10:30 AM)'],
    },

    // Status Workflow
    status: {
        type: String,
        enum: {
            values: ['pending', 'confirmed', 'completed', 'cancelled', 'no-show', 'rescheduled'],
            message: 'Status {VALUE} is not valid',
        },
        default: 'pending',
    },
    statusHistory: [{
        status: {
            type: String,
            enum: ['pending', 'confirmed', 'completed', 'cancelled', 'no-show', 'rescheduled'],
        },
        changedAt: {
            type: Date,
            default: Date.now,
        },
        changedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Staff',
        },
        notes: String,
    }],

    // Additional Information
    notes: {
        type: String,
        maxlength: [1000, 'Notes cannot exceed 1000 characters'],
    },
    concerns: [{
        type: String,
        trim: true,
    }],
    allergies: [{
        type: String,
        trim: true,
    }],
    previousTreatments: {
        type: String,
        maxlength: [500, 'Previous treatments cannot exceed 500 characters'],
    },

    // Communication
    emailSent: {
        confirmation: { type: Boolean, default: false },
        reminder: { type: Boolean, default: false },
        followUp: { type: Boolean, default: false },
    },
    smsSent: {
        confirmation: { type: Boolean, default: false },
        reminder: { type: Boolean, default: false },
    },

    // Payment (for future implementation)
    payment: {
        status: {
            type: String,
            enum: ['pending', 'paid', 'refunded', 'failed'],
            default: 'pending',
        },
        amount: Number,
        currency: { type: String, default: 'INR' },
        transactionId: String,
        paidAt: Date,
    },

    // Source tracking
    source: {
        type: String,
        enum: ['website', 'phone', 'walk-in', 'referral', 'social-media'],
        default: 'website',
    },
    utmSource: String,
    utmMedium: String,
    utmCampaign: String,

    // Admin notes
    adminNotes: {
        type: String,
        maxlength: [1000, 'Admin notes cannot exceed 1000 characters'],
    },
    assignedDoctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staff',
    },
}, {
    timestamps: true,
});

// Indexes for performance
bookingSchema.index({ email: 1 });
bookingSchema.index({ phone: 1 });
bookingSchema.index({ status: 1 });
bookingSchema.index({ appointmentDate: 1 });
bookingSchema.index({ location: 1 });
bookingSchema.index({ service: 1 });
bookingSchema.index({ patient: 1 });
bookingSchema.index({ createdAt: -1 });

// Compound indexes
bookingSchema.index({ status: 1, appointmentDate: 1 });
bookingSchema.index({ location: 1, appointmentDate: 1 });
bookingSchema.index({ email: 1, status: 1 });

// Virtual for appointment date formatted
bookingSchema.virtual('formattedDate').get(function () {
    return this.appointmentDate ? this.appointmentDate.toDateString() : null;
});

// Method to update status with history
bookingSchema.methods.updateStatus = async function (newStatus, changedBy, notes = '') {
    // Add current status to history
    this.statusHistory.push({
        status: this.status,
        changedAt: new Date(),
        changedBy,
        notes,
    });

    // Update status
    this.status = newStatus;
    return this.save();
};

// Static method to find available time slots
bookingSchema.statics.findAvailableSlots = async function (locationId, date, duration = 30) {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    // Get all bookings for the location and date
    const bookings = await this.find({
        location: locationId,
        appointmentDate: { $gte: startOfDay, $lte: endOfDay },
        status: { $nin: ['cancelled', 'no-show'] },
    }).select('appointmentTime');

    const bookedSlots = bookings.map(b => b.appointmentTime);

    // Generate all possible time slots (10 AM to 7 PM, 30 min intervals)
    const allSlots = [];
    const startTime = 10; // 10 AM
    const endTime = 19; // 7 PM

    for (let hour = startTime; hour < endTime; hour++) {
        allSlots.push(`${hour}:00 AM`);
        allSlots.push(`${hour}:30 AM`);
    }

    // Filter out booked slots
    return allSlots.filter(slot => !bookedSlots.includes(slot));
};

// Pre-save middleware to add initial status to history
bookingSchema.pre('save', function (next) {
    if (this.isNew) {
        this.statusHistory.push({
            status: 'pending',
            changedAt: new Date(),
            notes: 'Booking created',
        });
    }
    next();
});

module.exports = mongoose.model('Booking', bookingSchema);
