const mongoose = require('mongoose');

/**
 * Location Model
 * Represents AAYNA Clinic locations
 */

const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Location name is required'],
        trim: true,
        maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    slug: {
        type: String,
        required: [true, 'Slug is required'],
        unique: true,
        lowercase: true,
        trim: true,
    },

    // Address
    address: {
        type: String,
        required: [true, 'Address is required'],
    },
    city: {
        type: String,
        required: [true, 'City is required'],
    },
    state: {
        type: String,
        required: [true, 'State is required'],
    },
    zipCode: {
        type: String,
        required: [true, 'ZIP code is required'],
    },
    country: {
        type: String,
        default: 'India',
    },

    // Coordinates for map
    coordinates: {
        latitude: Number,
        longitude: Number,
    },
    mapUrl: {
        type: String,
    },

    // Contact
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
    },

    // Operating Hours
    hours: {
        monday: { open: String, close: String, isClosed: { type: Boolean, default: false } },
        tuesday: { open: String, close: String, isClosed: { type: Boolean, default: false } },
        wednesday: { open: String, close: String, isClosed: { type: Boolean, default: false } },
        thursday: { open: String, close: String, isClosed: { type: Boolean, default: false } },
        friday: { open: String, close: String, isClosed: { type: Boolean, default: false } },
        saturday: { open: String, close: String, isClosed: { type: Boolean, default: false } },
        sunday: { open: String, close: String, isClosed: { type: Boolean, default: true } },
    },

    // Display
    image: {
        type: String,
        required: [true, 'Image URL is required'],
    },
    gallery: [{
        type: String,
    }],

    // Description
    description: {
        type: String,
        maxlength: [1000, 'Description cannot exceed 1000 characters'],
    },

    // Features/Amenities
    features: [{
        type: String,
        trim: true,
    }],

    // Services offered at this location
    services: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
    }],

    // Staff at this location
    staff: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staff',
    }],

    // SEO
    metaTitle: {
        type: String,
        maxlength: 60,
    },
    metaDescription: {
        type: String,
        maxlength: 160,
    },

    // Status
    isActive: {
        type: Boolean,
        default: true,
    },
    isPrimary: {
        type: Boolean,
        default: false,
    },
    order: {
        type: Number,
        default: 0,
    },

    // Parking Information
    parkingInfo: {
        type: String,
        maxlength: [500, 'Parking info cannot exceed 500 characters'],
    },

    // Public Transport
    nearestMetro: String,
    busRoutes: [String],
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

// Indexes for performance
locationSchema.index({ slug: 1 });
locationSchema.index({ city: 1 });
locationSchema.index({ isActive: 1 });
locationSchema.index({ isPrimary: 1 });
locationSchema.index({ order: 1 });
locationSchema.index({ name: 'text', address: 'text', city: 'text' });

// Compound indexes
locationSchema.index({ city: 1, isActive: 1 });

// Virtual for full address
locationSchema.virtual('fullAddress').get(function () {
    return `${this.address}, ${this.city}, ${this.state} - ${this.zipCode}`;
});

// Virtual for formatted hours
locationSchema.virtual('formattedHours').get(function () {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const formatted = {};

    days.forEach(day => {
        const dayData = this.hours[day];
        if (dayData.isClosed) {
            formatted[day] = 'Closed';
        } else {
            formatted[day] = `${dayData.open} - ${dayData.close}`;
        }
    });

    return formatted;
});

// Method to check if location is open now
locationSchema.methods.isOpenNow = function () {
    const now = new Date();
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const currentDay = days[now.getDay()];
    const dayData = this.hours[currentDay];

    if (dayData.isClosed) return false;

    const currentTime = now.getHours() * 60 + now.getMinutes();
    const [openHour, openMin] = dayData.open.split(':').map(Number);
    const [closeHour, closeMin] = dayData.close.split(':').map(Number);

    const openTime = openHour * 60 + openMin;
    const closeTime = closeHour * 60 + closeMin;

    return currentTime >= openTime && currentTime < closeTime;
};

module.exports = mongoose.model('Location', locationSchema);
