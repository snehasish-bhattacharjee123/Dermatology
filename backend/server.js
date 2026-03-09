const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
require('dotenv').config()

// Database connection
const connectDB = require('./config/database')

// Middleware
const {
    errorHandler,
    notFound,
    apiLimiter,
    bookingLimiter,
    contactLimiter,
} = require('./middleware')

// Routes
const serviceRoutes = require('./routes/serviceRoutes')
const bookingRoutes = require('./routes/bookingRoutes')
const contactRoutes = require('./routes/contactRoutes')
const locationRoutes = require('./routes/locationRoutes')
const concernRoutes = require('./routes/concernRoutes')
const patientRoutes = require('./routes/patientRoutes')
const authRoutes = require('./routes/authRoutes')

const app = express()
const PORT = process.env.PORT || 5000

// Connect to MongoDB
connectDB()

// Security middleware
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            imgSrc: ["'self'", "data:", "https:"],
            scriptSrc: ["'self'"],
        },
    },
    crossOriginEmbedderPolicy: false,
}))

// CORS configuration
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
}))

// Body parsing middleware
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))

// Rate limiting
app.use('/api/', apiLimiter)
app.use('/api/bookings', bookingLimiter)
app.use('/api/contact', contactLimiter)

// ===== ROUTES =====
app.use('/api/services', serviceRoutes)
app.use('/api/bookings', bookingRoutes)
app.use('/api/contact', contactRoutes)
app.use('/api/locations', locationRoutes)
app.use('/api/concerns', concernRoutes)
app.use('/api/patients', patientRoutes)
app.use('/api/auth', authRoutes)

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development',
    })
})

// API documentation endpoint
app.get('/api', (req, res) => {
    res.json({
        message: 'D\'CosMedis Clinic API',
        version: '1.0.0',
        endpoints: {
            services: '/api/services',
            bookings: '/api/bookings',
            contact: '/api/contact',
            locations: '/api/locations',
            concerns: '/api/concerns',
            patients: '/api/patients',
            auth: '/api/auth',
            health: '/api/health',
        },
    })
})

// 404 handler
app.use(notFound)

// Error handling middleware
app.use(errorHandler)

// ===== START SERVER =====
app.listen(PORT, () => {
    console.log(`✅ D'CosMedis Clinic API running on http://localhost:${PORT}`)
    console.log(`📚 API Documentation: http://localhost:${PORT}/api`)
    console.log(`🏥 Health Check: http://localhost:${PORT}/api/health`)
    console.log('')
    console.log('Available Endpoints:')
    console.log('  GET  /api/services          - List all services')
    console.log('  GET  /api/services/:slug    - Get service by slug')
    console.log('  POST /api/bookings          - Create new booking')
    console.log('  POST /api/contact           - Submit contact form')
    console.log('  GET  /api/locations         - List all locations')
    console.log('  GET  /api/concerns          - List all concerns')
    console.log('')
    console.log('🔒 Security enabled: Helmet, CORS, Rate Limiting')
    console.log('📊 Database: MongoDB with Mongoose ODM')
})

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.error('UNHANDLED REJECTION! 💥 Shutting down...')
    console.error(err.name, err.message)
    process.exit(1)
})

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error('UNCAUGHT EXCEPTION! 💥 Shutting down...')
    console.error(err.name, err.message)
    process.exit(1)
})
