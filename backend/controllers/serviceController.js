/**
 * Service Controller
 * Business logic for service/treatment endpoints
 */

const { Service } = require('../models')
const { AppError } = require('../middleware')

// Get all services with filtering
exports.getServices = async (req, res) => {
    const { category, featured, search, page = 1, limit = 10 } = req.query

    const filter = { isActive: true }

    if (category && category !== 'all') {
        filter.category = category
    }

    if (featured === 'true') {
        filter.isFeatured = true
    }

    if (search) {
        filter.$text = { $search: search }
    }

    const skip = (parseInt(page) - 1) * parseInt(limit)

    const services = await Service.find(filter)
        .sort({ order: 1, createdAt: -1 })
        .skip(skip)
        .limit(parseInt(limit))

    const total = await Service.countDocuments(filter)

    res.json({
        status: 'success',
        results: services.length,
        total,
        page: parseInt(page),
        pages: Math.ceil(total / parseInt(limit)),
        data: { services }
    })
}

// Get single service by ID
exports.getService = async (req, res) => {
    const service = await Service.findById(req.params.id)
        .populate('relatedConcerns', 'name slug icon')

    if (!service) {
        throw new AppError('Service not found', 404)
    }

    res.json({
        status: 'success',
        data: { service }
    })
}

// Get service by slug
exports.getServiceBySlug = async (req, res) => {
    const service = await Service.findOne({ slug: req.params.slug, isActive: true })
        .populate('relatedConcerns', 'name slug icon shortDescription')

    if (!service) {
        throw new AppError('Service not found', 404)
    }

    res.json({
        status: 'success',
        data: { service }
    })
}

// Get featured services
exports.getFeaturedServices = async (req, res) => {
    const services = await Service.find({ isActive: true, isFeatured: true })
        .sort({ order: 1 })
        .limit(6)

    res.json({
        status: 'success',
        results: services.length,
        data: { services }
    })
}

// Get services by category
exports.getServicesByCategory = async (req, res) => {
    const { category } = req.params

    const services = await Service.find({ category, isActive: true })
        .sort({ order: 1 })

    res.json({
        status: 'success',
        results: services.length,
        data: { services }
    })
}

// Create new service (admin only)
exports.createService = async (req, res) => {
    const service = await Service.create(req.body)

    res.status(201).json({
        status: 'success',
        message: 'Service created successfully',
        data: { service }
    })
}

// Update service (admin only)
exports.updateService = async (req, res) => {
    const service = await Service.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )

    if (!service) {
        throw new AppError('Service not found', 404)
    }

    res.json({
        status: 'success',
        message: 'Service updated successfully',
        data: { service }
    })
}

// Delete service (admin only)
exports.deleteService = async (req, res) => {
    const service = await Service.findByIdAndDelete(req.params.id)

    if (!service) {
        throw new AppError('Service not found', 404)
    }

    res.json({
        status: 'success',
        message: 'Service deleted successfully',
        data: null
    })
}
