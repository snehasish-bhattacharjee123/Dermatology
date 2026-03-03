/**
 * Rate Limiting Middleware
 * Prevents abuse and DDoS attacks
 */

const rateLimit = require('express-rate-limit');

// General API rate limiter
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: {
        status: 'error',
        message: 'Too many requests from this IP, please try again later.',
    },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    // Skip successful requests for GET endpoints
    skip: (req) => req.method === 'GET' && req.path.startsWith('/api/services'),
});

// Stricter limiter for booking endpoints
const bookingLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5, // Limit each IP to 5 booking requests per hour
    message: {
        status: 'error',
        message: 'Too many booking attempts from this IP, please try again later.',
    },
    standardHeaders: true,
    legacyHeaders: false,
});

// Contact form limiter
const contactLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 3, // Limit each IP to 3 contact submissions per hour
    message: {
        status: 'error',
        message: 'Too many contact submissions from this IP, please try again later.',
    },
    standardHeaders: true,
    legacyHeaders: false,
});

// Authentication endpoints limiter
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 login attempts per 15 minutes
    message: {
        status: 'error',
        message: 'Too many login attempts from this IP, please try again later.',
    },
    standardHeaders: true,
    legacyHeaders: false,
});

// Admin endpoints limiter (stricter)
const adminLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 50, // Limit each IP to 50 admin requests per 15 minutes
    message: {
        status: 'error',
        message: 'Too many admin requests from this IP, please try again later.',
    },
    standardHeaders: true,
    legacyHeaders: false,
});

module.exports = {
    apiLimiter,
    bookingLimiter,
    contactLimiter,
    authLimiter,
    adminLimiter,
};
