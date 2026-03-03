/**
 * Location Routes
 * RESTful API endpoints for clinic locations
 */

const express = require('express')
const router = express.Router()
const { Location } = require('../models')
const { asyncHandler, validateSlug, AppError } = require('../middleware')

// Get all locations
router.get('/', asyncHandler(async (req, res) => {
    const locations = await Location.find({ isActive: true })
        .sort({ order: 1 })

    res.json({
        status: 'success',
        results: locations.length,
        data: { locations }
    })
}))

// Get location by slug
router.get('/slug/:slug', validateSlug, asyncHandler(async (req, res) => {
    const location = await Location.findOne({ slug: req.params.slug, isActive: true })
        .populate('services', 'title slug price')
        .populate('staff', 'firstName lastName title')

    if (!location) {
        throw new AppError('Location not found', 404)
    }

    res.json({
        status: 'success',
        data: { location }
    })
}))

// Get single location by ID
router.get('/:id', asyncHandler(async (req, res) => {
    const location = await Location.findById(req.params.id)
        .populate('services', 'title slug price')
        .populate('staff', 'firstName lastName title')

    if (!location) {
        throw new AppError('Location not found', 404)
    }

    res.json({
        status: 'success',
        data: { location }
    })
}))

module.exports = router
