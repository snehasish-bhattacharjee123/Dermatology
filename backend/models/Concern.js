const mongoose = require('mongoose');

/**
 * Concern Model
 * Represents skin, hair, and aesthetic concerns treated at AAYNA
 */

const concernSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Concern name is required'],
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
    icon: {
        type: String,
        default: '🔹',
    },
    shortDescription: {
        type: String,
        required: [true, 'Short description is required'],
        maxlength: [200, 'Short description cannot exceed 200 characters'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    image: {
        type: String,
        required: [true, 'Image URL is required'],
    },
    gallery: [{
        type: String,
    }],

    // Categorization
    category: {
        type: String,
        required: true,
        enum: {
            values: ['skin', 'hair', 'anti-aging', 'body', 'general'],
            message: 'Category {VALUE} is not supported',
        },
    },

    // Related treatments
    treatments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
    }],

    // Symptoms
    symptoms: [{
        type: String,
        trim: true,
    }],

    // Causes
    causes: [{
        type: String,
        trim: true,
    }],

    // Prevention tips
    prevention: [{
        type: String,
        trim: true,
    }],

    // When to see a doctor
    whenToSeeDoctor: {
        type: String,
        maxlength: [500, 'Content cannot exceed 500 characters'],
    },

    // FAQs
    faqs: [{
        question: {
            type: String,
            required: true,
        },
        answer: {
            type: String,
            required: true,
        },
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
    isFeatured: {
        type: Boolean,
        default: false,
    },
    order: {
        type: Number,
        default: 0,
    },

    // Statistics
    viewCount: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

// Indexes for performance
concernSchema.index({ slug: 1 });
concernSchema.index({ category: 1 });
concernSchema.index({ isActive: 1 });
concernSchema.index({ isFeatured: 1 });
concernSchema.index({ order: 1 });
concernSchema.index({ name: 'text', shortDescription: 'text', description: 'text' });

// Compound indexes
concernSchema.index({ category: 1, isActive: 1 });
concernSchema.index({ isFeatured: 1, order: 1 });

// Virtual for related concerns (same category)
concernSchema.virtual('relatedConcerns', {
    ref: 'Concern',
    localField: 'category',
    foreignField: 'category',
    justOne: false,
});

// Method to increment view count
concernSchema.methods.incrementViewCount = async function () {
    this.viewCount += 1;
    return this.save();
};

module.exports = mongoose.model('Concern', concernSchema);
