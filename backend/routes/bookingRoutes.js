/**
 * Booking Routes
 * RESTful API endpoints for appointments/bookings
 */

const express = require('express')
const router = express.Router()
const { Booking, Patient, Service, Location } = require('../models')
const { asyncHandler, validateBooking, AppError } = require('../middleware')

// Get all bookings (admin only)
router.get('/', asyncHandler(async (req, res) => {
    const bookings = await Booking.find()
        .populate('service', 'title slug')
        .populate('location', 'name')
        .populate('patient', 'firstName lastName email phone')
        .sort({ createdAt: -1 })

    res.json({
        status: 'success',
        results: bookings.length,
        data: { bookings }
    })
}))

// Get single booking
router.get('/:id', asyncHandler(async (req, res) => {
    const booking = await Booking.findById(req.params.id)
        .populate('service', 'title slug duration price')
        .populate('location', 'name address phone')
        .populate('patient', 'firstName lastName email phone')

    if (!booking) {
        throw new AppError('Booking not found', 404)
    }

    res.json({
        status: 'success',
        data: { booking }
    })
}))

// Create new booking
router.post('/', asyncHandler(async (req, res) => {
    const { name, email, phone, treatment, location, date, time, notes } = req.body

    // Find or create patient
    let patient = await Patient.findOne({ $or: [{ email }, { phone }] })
    if (!patient) {
        patient = await Patient.create({
            firstName: name.split(' ')[0],
            lastName: name.split(' ').slice(1).join(' ') || '',
            email,
            phone,
        })
    }

    // Try to find service and location by name, or use provided strings
    let serviceObj = null
    let locationObj = null
    
    if (treatment) {
        serviceObj = await Service.findOne({ title: { $regex: new RegExp(treatment, 'i') } })
    }
    if (location) {
        locationObj = await Location.findOne({ name: { $regex: new RegExp(location, 'i') } })
    }

    const booking = await Booking.create({
        patient: patient._id,
        name,
        email,
        phone,
        service: serviceObj ? serviceObj._id : null,
        serviceName: treatment || 'General Consultation',
        location: locationObj ? locationObj._id : null,
        locationName: location || 'Not specified',
        appointmentDate: date ? new Date(date) : new Date(),
        appointmentTime: time || '10:00 AM',
        notes: notes || '',
        source: 'website',
    })

    res.status(201).json({
        status: 'success',
        message: 'Booking created successfully',
        data: { booking }
    })
}))

// Update booking status
router.patch('/:id/status', asyncHandler(async (req, res) => {
    const { status, notes } = req.body
    const booking = await Booking.findById(req.params.id)

    if (!booking) {
        throw new AppError('Booking not found', 404)
    }

    await booking.updateStatus(status, null, notes)

    res.json({
        status: 'success',
        message: 'Booking status updated',
        data: { booking }
    })
}))

// Get available time slots
router.get('/slots/:locationId', asyncHandler(async (req, res) => {
    const { locationId } = req.params
    const { date } = req.query

    const slots = await Booking.findAvailableSlots(locationId, date)

    res.json({
        status: 'success',
        data: { slots }
    })
}))

module.exports = router
