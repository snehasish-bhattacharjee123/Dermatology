/**
 * Service Routes
 * RESTful API endpoints for services/treatments
 */

const express = require('express')
const router = express.Router()
const {
    getServices,
    getService,
    getServiceBySlug,
    createService,
    updateService,
    deleteService,
    getFeaturedServices,
    getServicesByCategory,
} = require('../controllers/serviceController')
const {
    asyncHandler,
    validateService,
    validateId,
    validateSlug,
    protect,
    restrictTo,
} = require('../middleware')

// Public routes
router.get('/', asyncHandler(getServices))
router.get('/featured', asyncHandler(getFeaturedServices))
router.get('/category/:category', asyncHandler(getServicesByCategory))
router.get('/slug/:slug', validateSlug, asyncHandler(getServiceBySlug))
router.get('/:id', validateId, asyncHandler(getService))

// Protected admin routes
router.post('/', protect, restrictTo('admin', 'manager'), validateService, asyncHandler(createService))
router.put('/:id', protect, restrictTo('admin', 'manager'), validateId, validateService, asyncHandler(updateService))
router.delete('/:id', protect, restrictTo('admin'), validateId, asyncHandler(deleteService))

module.exports = router
