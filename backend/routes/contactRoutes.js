/**
 * Contact Routes
 * RESTful API endpoints for contact form submissions
 */

const express = require('express')
const router = express.Router()
const { Contact } = require('../models')
const { asyncHandler, validateContact, AppError } = require('../middleware')

// Get all contacts (admin only)
router.get('/', asyncHandler(async (req, res) => {
    const contacts = await Contact.find()
        .populate('assignedTo', 'firstName lastName')
        .sort({ createdAt: -1 })

    res.json({
        status: 'success',
        results: contacts.length,
        data: { contacts }
    })
}))

// Get contact stats
router.get('/stats', asyncHandler(async (req, res) => {
    const stats = await Contact.getStats()

    res.json({
        status: 'success',
        data: { stats }
    })
}))

// Get single contact
router.get('/:id', asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
        .populate('assignedTo', 'firstName lastName')
        .populate('patient', 'firstName lastName email')

    if (!contact) {
        throw new AppError('Contact not found', 404)
    }

    res.json({
        status: 'success',
        data: { contact }
    })
}))

// Create new contact submission
router.post('/', validateContact, asyncHandler(async (req, res) => {
    const { name, email, phone, subject, message, category } = req.body

    const contact = await Contact.create({
        name,
        email,
        phone,
        subject,
        message,
        category: category || 'general',
    })

    res.status(201).json({
        status: 'success',
        message: 'Message sent successfully. We will respond within 24 hours.',
        data: { contact }
    })
}))

// Update contact status
router.patch('/:id/status', asyncHandler(async (req, res) => {
    const { status } = req.body
    const contact = await Contact.findById(req.params.id)

    if (!contact) {
        throw new AppError('Contact not found', 404)
    }

    await contact.updateStatus(status)

    res.json({
        status: 'success',
        message: 'Contact status updated',
        data: { contact }
    })
}))

module.exports = router
