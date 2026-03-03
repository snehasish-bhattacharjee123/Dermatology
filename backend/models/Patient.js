const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

/**
 * Patient Model
 * Stores patient information and medical history
 */

const patientSchema = new mongoose.Schema({
    // Personal Information
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        trim: true,
        maxlength: [50, 'First name cannot exceed 50 characters'],
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
        trim: true,
        maxlength: [50, 'Last name cannot exceed 50 characters'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
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
    alternatePhone: {
        type: String,
        trim: true,
    },
    dateOfBirth: {
        type: Date,
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other', 'prefer-not-to-say'],
    },

    // Authentication (optional - for patient portal)
    password: {
        type: String,
        minlength: [6, 'Password must be at least 6 characters'],
        select: false,
    },
    isRegistered: {
        type: Boolean,
        default: false,
    },

    // Address
    address: {
        street: String,
        city: String,
        state: String,
        zipCode: String,
        country: { type: String, default: 'India' },
    },

    // Emergency Contact
    emergencyContact: {
        name: String,
        relationship: String,
        phone: String,
    },

    // Medical History
    medicalHistory: {
        allergies: [{
            type: String,
            trim: true,
        }],
        medications: [{
            name: String,
            dosage: String,
            frequency: String,
        }],
        conditions: [{
            type: String,
            trim: true,
        }],
        previousSurgeries: [{
            procedure: String,
            date: Date,
            notes: String,
        }],
        skinType: {
            type: String,
            enum: ['normal', 'dry', 'oily', 'combination', 'sensitive'],
        },
        skinConcerns: [{
            type: String,
            trim: true,
        }],
    },

    // Treatment History
    treatments: [{
        service: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Service',
        },
        serviceName: String,
        date: Date,
        location: String,
        doctor: String,
        notes: String,
        results: String,
        satisfaction: {
            type: Number,
            min: 1,
            max: 5,
        },
    }],

    // Preferences
    preferredLocation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location',
    },
    communicationPreference: {
        email: { type: Boolean, default: true },
        sms: { type: Boolean, default: true },
        whatsapp: { type: Boolean, default: false },
        phone: { type: Boolean, default: false },
    },

    // Referral
    referredBy: {
        type: String,
        trim: true,
    },

    // Status
    status: {
        type: String,
        enum: ['active', 'inactive', 'blacklisted'],
        default: 'active',
    },

    // Meta
    lastVisit: Date,
    totalVisits: {
        type: Number,
        default: 0,
    },
    totalSpent: {
        type: Number,
        default: 0,
    },
    notes: {
        type: String,
        maxlength: [2000, 'Notes cannot exceed 2000 characters'],
    },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

// Indexes for performance
patientSchema.index({ email: 1 });
patientSchema.index({ phone: 1 });
patientSchema.index({ lastName: 1 });
patientSchema.index({ status: 1 });
patientSchema.index({ createdAt: -1 });
patientSchema.index({ 'medicalHistory.skinConcerns': 1 });

// Compound indexes
patientSchema.index({ email: 1, status: 1 });
patientSchema.index({ lastName: 1, firstName: 1 });

// Text index for search
patientSchema.index({
    firstName: 'text',
    lastName: 'text',
    email: 'text',
    phone: 'text',
});

// Virtual for full name
patientSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`;
});

// Virtual for age
patientSchema.virtual('age').get(function () {
    if (!this.dateOfBirth) return null;
    const today = new Date();
    const birthDate = new Date(this.dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
});

// Virtual for bookings
patientSchema.virtual('bookings', {
    ref: 'Booking',
    localField: '_id',
    foreignField: 'patient',
});

// Hash password before saving
patientSchema.pre('save', async function (next) {
    if (!this.isModified('password') || !this.password) return next();

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Compare password method
patientSchema.methods.comparePassword = async function (candidatePassword) {
    if (!this.password) return false;
    return await bcrypt.compare(candidatePassword, this.password);
};

// Method to update last visit
patientSchema.methods.updateLastVisit = async function () {
    this.lastVisit = new Date();
    this.totalVisits += 1;
    return this.save();
};

// Static method to find or create patient
patientSchema.statics.findOrCreate = async function (patientData) {
    let patient = await this.findOne({
        $or: [
            { email: patientData.email },
            { phone: patientData.phone },
        ],
    });

    if (!patient) {
        patient = await this.create({
            firstName: patientData.name.split(' ')[0],
            lastName: patientData.name.split(' ').slice(1).join(' ') || '',
            email: patientData.email,
            phone: patientData.phone,
        });
    }

    return patient;
};

module.exports = mongoose.model('Patient', patientSchema);
