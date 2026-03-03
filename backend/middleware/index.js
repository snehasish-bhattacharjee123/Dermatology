/**
 * Middleware Index
 * Central export for all middleware
 */

const { errorHandler, asyncHandler, notFound, AppError } = require('./errorHandler');
const {
    validateBooking,
    validateContact,
    validateService,
    validateLocation,
    validatePatient,
    validateId,
    validateSlug,
    validatePagination,
    validateLogin,
} = require('./validation');
const { protect, restrictTo, hasPermission, optionalAuth, generateToken } = require('./auth');
const { apiLimiter, bookingLimiter, contactLimiter, authLimiter, adminLimiter } = require('./rateLimiter');

module.exports = {
    // Error handling
    errorHandler,
    asyncHandler,
    notFound,
    AppError,

    // Validation
    validateBooking,
    validateContact,
    validateService,
    validateLocation,
    validatePatient,
    validateId,
    validateSlug,
    validatePagination,
    validateLogin,

    // Authentication
    protect,
    restrictTo,
    hasPermission,
    optionalAuth,
    generateToken,

    // Rate limiting
    apiLimiter,
    bookingLimiter,
    contactLimiter,
    authLimiter,
    adminLimiter,
};
