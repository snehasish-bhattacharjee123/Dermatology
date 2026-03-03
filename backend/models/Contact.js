const mongoose = require('mongoose');

/**
 * Contact/Inquiry Model
 * Stores contact form submissions and inquiries
 */

const contactSchema = new mongoose.Schema({
    // Contact Information
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
        trim: true,
    },

    // Inquiry Details
    subject: {
        type: String,
        required: [true, 'Subject is required'],
        trim: true,
        maxlength: [200, 'Subject cannot exceed 200 characters'],
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
        maxlength: [5000, 'Message cannot exceed 5000 characters'],
    },

    // Categorization
    category: {
        type: String,
        enum: {
            values: ['general', 'appointment', 'feedback', 'complaint', 'partnership', 'career', 'other'],
            message: 'Category {VALUE} is not supported',
        },
        default: 'general',
    },

    // Related to existing patient/booking
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
    },
    relatedBooking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
    },

    // Status Workflow
    status: {
        type: String,
        enum: {
            values: ['new', 'in-progress', 'resolved', 'spam', 'archived'],
            message: 'Status {VALUE} is not valid',
        },
        default: 'new',
    },

    // Priority
    priority: {
        type: String,
        enum: ['low', 'medium', 'high', 'urgent'],
        default: 'medium',
    },

    // Assigned to staff member
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staff',
    },

    // Internal notes
    internalNotes: [{
        note: String,
        addedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Staff',
        },
        addedAt: {
            type: Date,
            default: Date.now,
        },
    }],

    // Response
    response: {
        message: String,
        sentBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Staff',
        },
        sentAt: Date,
    },

    // Communication tracking
    emailSent: {
        confirmation: { type: Boolean, default: false },
        response: { type: Boolean, default: false },
    },

    // Source tracking
    source: {
        type: String,
        enum: ['website', 'phone', 'email', 'social-media', 'referral'],
        default: 'website',
    },
    pageUrl: String,

    // UTM parameters
    utmSource: String,
    utmMedium: String,
    utmCampaign: String,

    // Resolution
    resolvedAt: Date,
    resolvedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staff',
    },
}, {
    timestamps: true,
});

// Indexes for performance
contactSchema.index({ email: 1 });
contactSchema.index({ status: 1 });
contactSchema.index({ priority: 1 });
contactSchema.index({ category: 1 });
contactSchema.index({ assignedTo: 1 });
contactSchema.index({ createdAt: -1 });

// Compound indexes
contactSchema.index({ status: 1, priority: 1 });
contactSchema.index({ status: 1, createdAt: -1 });

// Text index for search
contactSchema.index({
    name: 'text',
    email: 'text',
    subject: 'text',
    message: 'text',
});

// Method to update status
contactSchema.methods.updateStatus = async function (newStatus, updatedBy) {
    this.status = newStatus;

    if (newStatus === 'resolved') {
        this.resolvedAt = new Date();
        this.resolvedBy = updatedBy;
    }

    return this.save();
};

// Method to add internal note
contactSchema.methods.addNote = async function (note, staffId) {
    this.internalNotes.push({
        note,
        addedBy: staffId,
        addedAt: new Date(),
    });
    return this.save();
};

// Method to send response
contactSchema.methods.sendResponse = async function (message, staffId) {
    this.response = {
        message,
        sentBy: staffId,
        sentAt: new Date(),
    };
    this.emailSent.response = true;
    this.status = 'resolved';
    this.resolvedAt = new Date();
    this.resolvedBy = staffId;
    return this.save();
};

// Static method to get statistics
contactSchema.statics.getStats = async function () {
    const stats = await this.aggregate([
        {
            $group: {
                _id: '$status',
                count: { $sum: 1 },
            },
        },
    ]);

    const result = {
        new: 0,
        'in-progress': 0,
        resolved: 0,
        spam: 0,
        archived: 0,
        total: 0,
    };

    stats.forEach(stat => {
        result[stat._id] = stat.count;
        result.total += stat.count;
    });

    return result;
};

module.exports = mongoose.model('Contact', contactSchema);
