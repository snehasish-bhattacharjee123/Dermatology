const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

/**
 * Staff Model
 * Represents doctors, aestheticians, and administrative staff
 */

const staffSchema = new mongoose.Schema({
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
    },

    // Authentication
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters'],
        select: false,
    },

    // Professional Information
    role: {
        type: String,
        required: true,
        enum: {
            values: ['doctor', 'aesthetician', 'admin', 'receptionist', 'manager'],
            message: 'Role {VALUE} is not supported',
        },
    },
    title: {
        type: String,
        required: [true, 'Professional title is required'],
        trim: true,
    },
    specialization: [{
        type: String,
        trim: true,
    }],
    qualifications: [{
        type: String,
        trim: true,
    }],
    experience: {
        type: Number,
        min: 0,
    },

    // Bio
    bio: {
        type: String,
        maxlength: [2000, 'Bio cannot exceed 2000 characters'],
    },
    shortBio: {
        type: String,
        maxlength: [300, 'Short bio cannot exceed 300 characters'],
    },

    // Images
    image: {
        type: String,
        required: [true, 'Profile image is required'],
    },

    // Location
    primaryLocation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location',
        required: true,
    },
    workingLocations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location',
    }],

    // Schedule
    workingHours: {
        monday: { start: String, end: String, isAvailable: { type: Boolean, default: true } },
        tuesday: { start: String, end: String, isAvailable: { type: Boolean, default: true } },
        wednesday: { start: String, end: String, isAvailable: { type: Boolean, default: true } },
        thursday: { start: String, end: String, isAvailable: { type: Boolean, default: true } },
        friday: { start: String, end: String, isAvailable: { type: Boolean, default: true } },
        saturday: { start: String, end: String, isAvailable: { type: Boolean, default: true } },
        sunday: { start: String, end: String, isAvailable: { type: Boolean, default: false } },
    },

    // Services they provide
    services: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
    }],

    // Status
    isActive: {
        type: Boolean,
        default: true,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    order: {
        type: Number,
        default: 0,
    },

    // Permissions (for admin roles)
    permissions: [{
        type: String,
        enum: ['read', 'write', 'delete', 'admin', 'view-bookings', 'manage-bookings', 'view-patients', 'manage-patients'],
    }],

    // Meta
    joinedDate: {
        type: Date,
        default: Date.now,
    },
    lastLogin: Date,
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

// Indexes for performance
staffSchema.index({ email: 1 });
staffSchema.index({ role: 1 });
staffSchema.index({ primaryLocation: 1 });
staffSchema.index({ isActive: 1 });
staffSchema.index({ isFeatured: 1 });
staffSchema.index({ order: 1 });

// Compound indexes
staffSchema.index({ role: 1, isActive: 1 });
staffSchema.index({ primaryLocation: 1, isActive: 1 });

// Virtual for full name
staffSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`;
});

// Virtual for assigned bookings
staffSchema.virtual('assignedBookings', {
    ref: 'Booking',
    localField: '_id',
    foreignField: 'assignedDoctor',
});

// Hash password before saving
staffSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Compare password method
staffSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

// Check if staff has permission
staffSchema.methods.hasPermission = function (permission) {
    return this.permissions.includes(permission) || this.permissions.includes('admin');
};

module.exports = mongoose.model('Staff', staffSchema);
