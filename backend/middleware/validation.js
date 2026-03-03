/**
 * Validation Middleware using express-validator
 * Validates request data for various endpoints
 */

const { body, param, query, validationResult } = require('express-validator');
const { AppError } = require('./errorHandler');

// Helper to check validation results
const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(err => err.msg).join(', ');
        return next(new AppError(`Validation Error: ${errorMessages}`, 400));
    }
    next();
};

// Booking validation rules
const validateBooking = [
    body('name')
        .trim()
        .notEmpty().withMessage('Name is required')
        .isLength({ max: 100 }).withMessage('Name cannot exceed 100 characters'),
    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please enter a valid email')
        .normalizeEmail(),
    body('phone')
        .trim()
        .notEmpty().withMessage('Phone number is required')
        .matches(/^\+?[0-9\s-]{10,}$/).withMessage('Please enter a valid phone number'),
    body('service')
        .notEmpty().withMessage('Service is required'),
    body('location')
        .notEmpty().withMessage('Location is required'),
    body('date')
        .notEmpty().withMessage('Date is required')
        .isISO8601().withMessage('Please enter a valid date'),
    body('time')
        .notEmpty().withMessage('Time is required')
        .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]\s*(AM|PM)$/i)
        .withMessage('Please enter a valid time format (e.g., 10:30 AM)'),
    body('notes')
        .optional()
        .trim()
        .isLength({ max: 1000 }).withMessage('Notes cannot exceed 1000 characters'),
    handleValidationErrors,
];

// Contact form validation rules
const validateContact = [
    body('name')
        .trim()
        .notEmpty().withMessage('Name is required')
        .isLength({ max: 100 }).withMessage('Name cannot exceed 100 characters'),
    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please enter a valid email')
        .normalizeEmail(),
    body('phone')
        .optional()
        .trim()
        .matches(/^\+?[0-9\s-]{10,}$/).withMessage('Please enter a valid phone number'),
    body('subject')
        .trim()
        .notEmpty().withMessage('Subject is required')
        .isLength({ max: 200 }).withMessage('Subject cannot exceed 200 characters'),
    body('message')
        .trim()
        .notEmpty().withMessage('Message is required')
        .isLength({ max: 5000 }).withMessage('Message cannot exceed 5000 characters'),
    handleValidationErrors,
];

// Service validation rules (for admin)
const validateService = [
    body('title')
        .trim()
        .notEmpty().withMessage('Title is required')
        .isLength({ max: 100 }).withMessage('Title cannot exceed 100 characters'),
    body('slug')
        .trim()
        .notEmpty().withMessage('Slug is required')
        .isSlug().withMessage('Slug must be URL-friendly'),
    body('category')
        .notEmpty().withMessage('Category is required')
        .isIn(['Facials', 'Laser', 'Skin', 'Anti-Aging', 'Hair', 'Body', 'AAYNA Exclusive', 'New Launches'])
        .withMessage('Invalid category'),
    body('shortDescription')
        .trim()
        .notEmpty().withMessage('Short description is required')
        .isLength({ max: 300 }).withMessage('Short description cannot exceed 300 characters'),
    body('description')
        .trim()
        .notEmpty().withMessage('Description is required'),
    body('duration')
        .trim()
        .notEmpty().withMessage('Duration is required'),
    body('price')
        .trim()
        .notEmpty().withMessage('Price is required'),
    body('image')
        .trim()
        .notEmpty().withMessage('Image URL is required')
        .isURL().withMessage('Please enter a valid image URL'),
    handleValidationErrors,
];

// Location validation rules (for admin)
const validateLocation = [
    body('name')
        .trim()
        .notEmpty().withMessage('Name is required'),
    body('slug')
        .trim()
        .notEmpty().withMessage('Slug is required'),
    body('address')
        .trim()
        .notEmpty().withMessage('Address is required'),
    body('city')
        .trim()
        .notEmpty().withMessage('City is required'),
    body('state')
        .trim()
        .notEmpty().withMessage('State is required'),
    body('phone')
        .trim()
        .notEmpty().withMessage('Phone is required'),
    body('hours')
        .optional()
        .isObject().withMessage('Hours must be an object'),
    handleValidationErrors,
];

// Patient validation rules
const validatePatient = [
    body('firstName')
        .trim()
        .notEmpty().withMessage('First name is required')
        .isLength({ max: 50 }).withMessage('First name cannot exceed 50 characters'),
    body('lastName')
        .trim()
        .notEmpty().withMessage('Last name is required')
        .isLength({ max: 50 }).withMessage('Last name cannot exceed 50 characters'),
    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please enter a valid email')
        .normalizeEmail(),
    body('phone')
        .trim()
        .notEmpty().withMessage('Phone number is required')
        .matches(/^\+?[0-9\s-]{10,}$/).withMessage('Please enter a valid phone number'),
    body('dateOfBirth')
        .optional()
        .isISO8601().withMessage('Please enter a valid date of birth'),
    body('gender')
        .optional()
        .isIn(['male', 'female', 'other', 'prefer-not-to-say'])
        .withMessage('Invalid gender value'),
    handleValidationErrors,
];

// ID parameter validation
const validateId = [
    param('id')
        .notEmpty().withMessage('ID is required')
        .isMongoId().withMessage('Invalid ID format'),
    handleValidationErrors,
];

// Slug parameter validation
const validateSlug = [
    param('slug')
        .trim()
        .notEmpty().withMessage('Slug is required'),
    handleValidationErrors,
];

// Query validation for pagination
const validatePagination = [
    query('page')
        .optional()
        .isInt({ min: 1 }).withMessage('Page must be a positive integer'),
    query('limit')
        .optional()
        .isInt({ min: 1, max: 100 }).withMessage('Limit must be between 1 and 100'),
    handleValidationErrors,
];

// Login validation
const validateLogin = [
    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please enter a valid email'),
    body('password')
        .notEmpty().withMessage('Password is required'),
    handleValidationErrors,
];

module.exports = {
    validateBooking,
    validateContact,
    validateService,
    validateLocation,
    validatePatient,
    validateId,
    validateSlug,
    validatePagination,
    validateLogin,
    handleValidationErrors,
};
