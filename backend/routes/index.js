/**
 * Routes Index
 * Central export for all route modules
 */

const serviceRoutes = require('./serviceRoutes')
const bookingRoutes = require('./bookingRoutes')
const contactRoutes = require('./contactRoutes')
const locationRoutes = require('./locationRoutes')
const concernRoutes = require('./concernRoutes')
const patientRoutes = require('./patientRoutes')
const authRoutes = require('./authRoutes')

module.exports = {
    serviceRoutes,
    bookingRoutes,
    contactRoutes,
    locationRoutes,
    concernRoutes,
    patientRoutes,
    authRoutes,
}
