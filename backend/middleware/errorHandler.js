/**
 * Error Handling Middleware
 * Centralized error handling with MongoDB error mapping
 */

class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}

// MongoDB error code mapping
const mongoErrorMap = {
    11000: {
        statusCode: 409,
        message: 'Duplicate field value entered',
    },
    121: {
        statusCode: 400,
        message: 'Document validation failed',
    },
    50: {
        statusCode: 504,
        message: 'Database operation timed out',
    },
};

const handleMongoError = (err) => {
    const errorCode = err.code;
    const mappedError = mongoErrorMap[errorCode];

    if (mappedError) {
        // Handle duplicate key error
        if (errorCode === 11000) {
            const field = Object.keys(err.keyValue)[0];
            return new AppError(
                `${mappedError.message}: ${field} already exists`,
                mappedError.statusCode
            );
        }
        return new AppError(mappedError.message, mappedError.statusCode);
    }

    return new AppError('Database error occurred', 500);
};

const handleValidationError = (err) => {
    const errors = Object.values(err.errors).map(el => el.message);
    const message = `Invalid input data. ${errors.join('. ')}`;
    return new AppError(message, 400);
};

const handleCastError = (err) => {
    const message = `Invalid ${err.path}: ${err.value}`;
    return new AppError(message, 400);
};

const handleJWTError = () =>
    new AppError('Invalid token. Please log in again.', 401);

const handleJWTExpiredError = () =>
    new AppError('Your token has expired. Please log in again.', 401);

const sendErrorDev = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack,
    });
};

const sendErrorProd = (err, res) => {
    // Operational, trusted error: send message to client
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
    } else {
        // Programming or other unknown error: don't leak error details
        console.error('ERROR 💥', err);
        res.status(500).json({
            status: 'error',
            message: 'Something went wrong',
        });
    }
};

const errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    if (process.env.NODE_ENV === 'development') {
        sendErrorDev(err, res);
    } else {
        let error = { ...err };
        error.message = err.message;

        // MongoDB errors
        if (err.name === 'CastError') error = handleCastError(err);
        if (err.code === 11000) error = handleMongoError(err);
        if (err.name === 'ValidationError') error = handleValidationError(err);
        if (err.name === 'JsonWebTokenError') error = handleJWTError();
        if (err.name === 'TokenExpiredError') error = handleJWTExpiredError();

        sendErrorProd(error, res);
    }
};

// Async handler wrapper
const asyncHandler = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};

// Not found handler
const notFound = (req, res, next) => {
    const error = new AppError(`Not Found - ${req.originalUrl}`, 404);
    next(error);
};

module.exports = {
    AppError,
    errorHandler,
    asyncHandler,
    notFound,
};
