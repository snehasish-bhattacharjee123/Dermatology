/**
 * Concern Routes
 * RESTful API endpoints for skin/hair concerns
 */

const express = require('express')
const router = express.Router()
const { Concern } = require('../models')
const { asyncHandler, validateSlug, AppError } = require('../middleware')

// Get all concerns
router.get('/', asyncHandler(async (req, res) => {
    const { category } = req.query

    const filter = { isActive: true }
    if (category) filter.category = category

    const concerns = await Concern.find(filter)
        .sort({ order: 1 })

    res.json({
        status: 'success',
        results: concerns.length,
        data: { concerns }
    })
}))

// Get featured concerns
router.get('/featured', asyncHandler(async (req, res) => {
    const concerns = await Concern.find({ isActive: true, isFeatured: true })
        .sort({ order: 1 })
        .limit(8)

    res.json({
        status: 'success',
        results: concerns.length,
        data: { concerns }
    })
}))

// Get concern by slug
router.get('/slug/:slug', validateSlug, asyncHandler(async (req, res) => {
    const concern = await Concern.findOne({ slug: req.params.slug, isActive: true })
        .populate('treatments', 'title slug shortDescription price image')

    if (!concern) {
        throw new AppError('Concern not found', 404)
    }

    // Increment view count
    await concern.incrementViewCount()

    res.json({
        status: 'success',
        data: { concern }
    })
}))

// Get single concern by ID
router.get('/:id', asyncHandler(async (req, res) => {
    const concern = await Concern.findById(req.params.id)
        .populate('treatments', 'title slug shortDescription price image')

    if (!concern) {
        throw new AppError('Concern not found', 404)
    }

    res.json({
        status: 'success',
        data: { concern }
    })
}))

module.exports = router
