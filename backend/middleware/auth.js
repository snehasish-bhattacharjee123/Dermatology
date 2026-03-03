/**
 * Authentication Middleware
 * JWT token verification and role-based access control
 */

const jwt = require('jsonwebtoken');
const { Staff } = require('../models');
const { AppError } = require('./errorHandler');

// Protect routes - verify JWT token
const protect = async (req, res, next) => {
    try {
        let token;

        // Check for token in Authorization header
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }

        // Check if token exists
        if (!token) {
            return next(new AppError('Not authorized to access this route', 401));
        }

        try {
            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');

            // Check if user still exists
            const staff = await Staff.findById(decoded.id);
            if (!staff) {
                return next(new AppError('User no longer exists', 401));
            }

            // Check if user changed password after token was issued
            if (staff.passwordChangedAt && decoded.iat) {
                const changedTimestamp = parseInt(staff.passwordChangedAt.getTime() / 1000, 10);
                if (decoded.iat < changedTimestamp) {
                    return next(new AppError('User recently changed password. Please log in again.', 401));
                }
            }

            // Grant access to protected route
            req.user = staff;
            next();
        } catch (error) {
            return next(new AppError('Not authorized to access this route', 401));
        }
    } catch (error) {
        next(error);
    }
};

// Restrict to specific roles
const restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new AppError('You do not have permission to perform this action', 403));
        }
        next();
    };
};

// Check specific permission
const hasPermission = (...permissions) => {
    return (req, res, next) => {
        const hasRequiredPermission = permissions.some(permission =>
            req.user.permissions.includes(permission) || req.user.permissions.includes('admin')
        );

        if (!hasRequiredPermission) {
            return next(new AppError('You do not have permission to perform this action', 403));
        }
        next();
    };
};

// Optional authentication - doesn't fail if no token
const optionalAuth = async (req, res, next) => {
    try {
        let token;

        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }

        if (token) {
            try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
                const staff = await Staff.findById(decoded.id);
                if (staff) {
                    req.user = staff;
                }
            } catch (error) {
                // Silently fail for optional auth
            }
        }

        next();
    } catch (error) {
        next(error);
    }
};

// Generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'your-secret-key', {
        expiresIn: process.env.JWT_EXPIRES_IN || '30d',
    });
};

module.exports = {
    protect,
    restrictTo,
    hasPermission,
    optionalAuth,
    generateToken,
};
