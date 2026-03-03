const mongoose = require('mongoose');

/**
 * Service/Treatment Model
 * Represents treatments and services offered by AAYNA Clinic
 */

const serviceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Service title is required'],
        trim: true,
        maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    slug: {
        type: String,
        required: [true, 'Slug is required'],
        unique: true,
        lowercase: true,
        trim: true,
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        enum: {
            values: ['Facials', 'Laser', 'Skin', 'Anti-Aging', 'Hair', 'Body', 'AAYNA Exclusive', 'New Launches'],
            message: 'Category {VALUE} is not supported',
        },
    },
    categorySlug: {
        type: String,
        required: true,
        lowercase: true,
    },
    shortDescription: {
        type: String,
        required: [true, 'Short description is required'],
        maxlength: [300, 'Short description cannot exceed 300 characters'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    duration: {
        type: String,
        required: [true, 'Duration is required'],
    },
    price: {
        type: String,
        required: [true, 'Price is required'],
    },
    priceValue: {
        type: Number,
        min: 0,
    },
    image: {
        type: String,
        required: [true, 'Image URL is required'],
    },
    gallery: [{
        type: String,
    }],
    benefits: [{
        type: String,
        trim: true,
    }],
    idealFor: [{
        type: String,
        trim: true,
    }],
    contraindications: [{
        type: String,
        trim: true,
    }],
    aftercare: [{
        type: String,
        trim: true,
    }],
    relatedConcerns: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Concern',
    }],
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
    metaTitle: {
        type: String,
        maxlength: 60,
    },
    metaDescription: {
        type: String,
        maxlength: 160,
    },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

// Indexes for performance
serviceSchema.index({ slug: 1 });
serviceSchema.index({ category: 1 });
serviceSchema.index({ categorySlug: 1 });
serviceSchema.index({ isActive: 1 });
serviceSchema.index({ isFeatured: 1 });
serviceSchema.index({ order: 1 });
serviceSchema.index({ title: 'text', shortDescription: 'text', description: 'text' });

// Compound indexes
serviceSchema.index({ category: 1, isActive: 1 });
serviceSchema.index({ isFeatured: 1, order: 1 });

// Virtual for related services
serviceSchema.virtual('relatedServices', {
    ref: 'Service',
    localField: 'category',
    foreignField: 'category',
    justOne: false,
});

// Pre-save middleware to generate priceValue from price string
serviceSchema.pre('save', function (next) {
    if (this.price && !this.priceValue) {
        // Extract numeric value from price string (e.g., "₹5,500" -> 5500)
        const numericValue = parseInt(this.price.replace(/[^0-9]/g, ''));
        if (!isNaN(numericValue)) {
            this.priceValue = numericValue;
        }
    }
    next();
});

module.exports = mongoose.model('Service', serviceSchema);
