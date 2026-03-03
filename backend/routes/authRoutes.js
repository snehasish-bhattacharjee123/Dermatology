/**
 * Auth Routes
 * Authentication endpoints for staff/admin
 */

const express = require('express')
const router = express.Router()
const { Staff } = require('../models')
const { asyncHandler, validateLogin, generateToken, AppError } = require('../middleware')

// Login
router.post('/login', validateLogin, asyncHandler(async (req, res) => {
    const { email, password } = req.body

    // Check if staff exists and password is correct
    const staff = await Staff.findOne({ email }).select('+password')

    if (!staff || !(await staff.comparePassword(password))) {
        throw new AppError('Invalid email or password', 401)
    }

    // Check if staff is active
    if (!staff.isActive) {
        throw new AppError('Your account has been deactivated', 401)
    }

    // Update last login
    staff.lastLogin = new Date()
    await staff.save()

    // Generate token
    const token = generateToken(staff._id)

    res.json({
        status: 'success',
        message: 'Logged in successfully',
        data: {
            token,
            user: {
                id: staff._id,
                firstName: staff.firstName,
                lastName: staff.lastName,
                email: staff.email,
                role: staff.role,
                permissions: staff.permissions,
            }
        }
    })
}))

// Get current user
router.get('/me', asyncHandler(async (req, res) => {
    // This would require the protect middleware
    // For now, just return a placeholder
    res.json({
        status: 'success',
        message: 'Use with protect middleware'
    })
}))

module.exports = router
