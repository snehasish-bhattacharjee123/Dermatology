/**
 * Patient Routes
 * RESTful API endpoints for patient management
 */

const express = require('express')
const router = express.Router()
const { Patient } = require('../models')
const { asyncHandler, validatePatient, validateId, AppError, protect, restrictTo } = require('../middleware')

// Get all patients (admin/doctor only)
router.get('/', protect, restrictTo('admin', 'doctor', 'manager'), asyncHandler(async (req, res) => {
    const patients = await Patient.find()
        .select('-password')
        .sort({ createdAt: -1 })

    res.json({
        status: 'success',
        results: patients.length,
        data: { patients }
    })
}))

// Get single patient
router.get('/:id', protect, validateId, asyncHandler(async (req, res) => {
    const patient = await Patient.findById(req.params.id)
        .select('-password')
        .populate('bookings')

    if (!patient) {
        throw new AppError('Patient not found', 404)
    }

    res.json({
        status: 'success',
        data: { patient }
    })
}))

// Create new patient
router.post('/', validatePatient, asyncHandler(async (req, res) => {
    const patient = await Patient.create(req.body)

    res.status(201).json({
        status: 'success',
        message: 'Patient created successfully',
        data: { patient }
    })
}))

// Update patient
router.put('/:id', protect, validateId, validatePatient, asyncHandler(async (req, res) => {
    const patient = await Patient.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    ).select('-password')

    if (!patient) {
        throw new AppError('Patient not found', 404)
    }

    res.json({
        status: 'success',
        message: 'Patient updated successfully',
        data: { patient }
    })
}))

// Search patients
router.get('/search/:query', protect, asyncHandler(async (req, res) => {
    const { query } = req.params

    const patients = await Patient.find({
        $text: { $search: query }
    }).select('-password').limit(20)

    res.json({
        status: 'success',
        results: patients.length,
        data: { patients }
    })
}))

module.exports = router
