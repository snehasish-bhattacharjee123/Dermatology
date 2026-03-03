const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// ===== IN-MEMORY DATA STORE =====
// (Replace with a real DB like PostgreSQL/MongoDB in production)

const bookings = []
const contacts = []

// ===== ROUTES =====

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// ===== BOOKINGS =====
app.post('/api/bookings', (req, res) => {
    try {
        const { name, email, phone, location, treatment, date, time, notes } = req.body

        if (!name || !email || !phone || !location || !treatment) {
            return res.status(400).json({ error: 'Missing required fields' })
        }

        const booking = {
            id: bookings.length + 1,
            name,
            email,
            phone,
            location,
            treatment,
            date,
            time,
            notes: notes || '',
            status: 'pending',
            createdAt: new Date().toISOString(),
        }

        bookings.push(booking)

        res.status(201).json({
            booking_id: booking.id,
            status: 'pending',
            message: 'Booking received successfully. We will confirm within 24 hours.',
        })
    } catch (err) {
        console.error('Booking error:', err)
        res.status(500).json({ error: 'Internal server error' })
    }
})

app.get('/api/bookings', (req, res) => {
    res.json({ bookings, total: bookings.length })
})

// ===== CONTACT =====
app.post('/api/contact', (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: 'Missing required fields' })
        }

        const contact = {
            id: contacts.length + 1,
            name,
            email,
            phone: phone || '',
            subject,
            message,
            createdAt: new Date().toISOString(),
        }

        contacts.push(contact)

        res.status(201).json({
            message: 'Message received successfully. We will respond within 24 hours.',
        })
    } catch (err) {
        console.error('Contact error:', err)
        res.status(500).json({ error: 'Internal server error' })
    }
})

app.get('/api/contacts', (req, res) => {
    res.json({ contacts, total: contacts.length })
})

// ===== SERVICES (static data endpoints) =====
const servicesData = [
    { id: 1, title: 'AAYNA Glass Skin Facial', slug: 'glass-skin-facial', category: 'Facials', duration: '60 minutes', price: '₹5,500' },
    { id: 2, title: 'Laser Hair Removal', slug: 'laser-hair-removal', category: 'Laser', duration: '30–90 minutes', price: '₹3,000 onwards' },
    { id: 3, title: 'Chemical Peels', slug: 'chemical-peels', category: 'Skin', duration: '30–45 minutes', price: '₹2,500 onwards' },
    { id: 4, title: 'Anti-Aging Therapy', slug: 'anti-aging-therapy', category: 'Anti-Aging', duration: '45–90 minutes', price: '₹8,000 onwards' },
    { id: 5, title: 'HydraFacial', slug: 'hydrafacial', category: 'Facials', duration: '45 minutes', price: '₹4,500' },
    { id: 6, title: 'PRP Hair Treatment', slug: 'prp-treatment', category: 'Hair', duration: '45 minutes', price: '₹6,000' },
]

app.get('/api/services', (req, res) => {
    const { category } = req.query
    let result = servicesData
    if (category && category !== 'all') {
        result = result.filter((s) => s.category.toLowerCase() === category.toLowerCase())
    }
    res.json({ services: result, total: result.length })
})

app.get('/api/services/:slug', (req, res) => {
    const service = servicesData.find((s) => s.slug === req.params.slug)
    if (!service) {
        return res.status(404).json({ error: 'Service not found' })
    }
    res.json(service)
})

// ===== LOCATIONS =====
const locationsData = [
    { id: 1, name: 'AAYNA SDA', slug: 'aayna-sda', address: 'SDA Market, Hauz Khas, New Delhi', phone: '+91 11 2634 7890' },
    { id: 2, name: 'AAYNA Khan Market', slug: 'aayna-khan-market', address: 'Khan Market, New Delhi', phone: '+91 11 2634 7891' },
    { id: 3, name: 'AAYNA Gurugram', slug: 'aayna-gurugram', address: 'Sector 28, Gurugram', phone: '+91 124 234 5678' },
    { id: 4, name: 'AAYNA Ludhiana', slug: 'aayna-ludhiana', address: 'Sarabha Nagar, Ludhiana', phone: '+91 161 234 5678' },
]

app.get('/api/locations', (req, res) => {
    res.json({ locations: locationsData })
})

app.get('/api/locations/:slug', (req, res) => {
    const location = locationsData.find((l) => l.slug === req.params.slug)
    if (!location) {
        return res.status(404).json({ error: 'Location not found' })
    }
    res.json(location)
})

// ===== TESTIMONIALS =====
const testimonialsData = [
    { id: 1, name: 'Priya Sharma', content: 'AAYNA has completely transformed my skin!', rating: 5, treatment: 'Glass Skin Facial' },
    { id: 2, name: 'Rahul Kapoor', content: 'The PRP results have been remarkable.', rating: 5, treatment: 'PRP Hair Treatment' },
    { id: 3, name: 'Anjali Menon', content: 'I look 10 years younger!', rating: 5, treatment: 'Anti-Aging Therapy' },
    { id: 4, name: 'Vikram Singh', content: 'Best laser hair removal in Delhi.', rating: 5, treatment: 'Laser Hair Removal' },
]

app.get('/api/testimonials', (req, res) => {
    res.json({ testimonials: testimonialsData })
})

// ===== START SERVER =====
app.listen(PORT, () => {
    console.log(`✅ AAYNA Clinic API running on http://localhost:${PORT}`)
    console.log(`📋 Endpoints:`)
    console.log(`   GET  /api/health`)
    console.log(`   GET  /api/services`)
    console.log(`   GET  /api/locations`)
    console.log(`   GET  /api/testimonials`)
    console.log(`   POST /api/bookings`)
    console.log(`   POST /api/contact`)
})
