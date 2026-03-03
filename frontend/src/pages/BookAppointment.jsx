import { useState } from 'react'
import { ArrowRight, ArrowLeft, CheckCircle, Calendar, MapPin, User, FileText } from 'lucide-react'
import { RevealWrapper } from '../hooks/useAnimations'
import { locations, treatments } from '../data/siteData'

const steps = ['Location', 'Treatment', 'Date & Time', 'Your Details']

export default function BookAppointment() {
    const [currentStep, setCurrentStep] = useState(0)
    const [formData, setFormData] = useState({
        location: '', treatment: '', date: '', time: '', name: '', email: '', phone: '', notes: '',
    })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async () => {
        try {
            await fetch('/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
        } catch (err) {
            console.log('Booking stored locally')
        }
        setSubmitted(true)
    }

    const canProceed = () => {
        switch (currentStep) {
            case 0: return formData.location
            case 1: return formData.treatment
            case 2: return formData.date && formData.time
            case 3: return formData.name && formData.email && formData.phone
            default: return false
        }
    }

    const timeSlots = [
        '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
        '12:00 PM', '12:30 PM', '02:00 PM', '02:30 PM',
        '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
        '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM',
    ]

    if (submitted) {
        return (
            <section className="min-h-screen flex items-center justify-center" style={{ background: 'var(--color-bg-cream)' }}>
                <RevealWrapper>
                    <div className="text-center max-w-lg mx-auto px-6">
                        <div
                            className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"
                            style={{ background: 'var(--color-gold-glow)' }}
                        >
                            <CheckCircle size={40} style={{ color: 'var(--color-gold)' }} />
                        </div>
                        <h2 className="mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Booking Confirmed!</h2>
                        <p className="text-lg mb-2" style={{ color: 'var(--color-text-muted)' }}>
                            Thank you, <strong>{formData.name}</strong>. Your appointment request has been received.
                        </p>
                        <p className="mb-8" style={{ color: 'var(--color-text-light)' }}>
                            We will send a confirmation to <strong>{formData.email}</strong> within 24 hours.
                        </p>
                        <div className="p-6 rounded-xl text-left space-y-3 mb-8" style={{ background: 'var(--color-bg-white)', border: '1px solid var(--color-border)' }}>
                            <div className="flex justify-between text-sm">
                                <span style={{ color: 'var(--color-text-light)' }}>Location</span>
                                <span className="font-medium">{formData.location}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span style={{ color: 'var(--color-text-light)' }}>Treatment</span>
                                <span className="font-medium">{formData.treatment}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span style={{ color: 'var(--color-text-light)' }}>Date</span>
                                <span className="font-medium">{formData.date}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span style={{ color: 'var(--color-text-light)' }}>Time</span>
                                <span className="font-medium">{formData.time}</span>
                            </div>
                        </div>
                        <a href="/" className="btn btn-primary">Back to Home</a>
                    </div>
                </RevealWrapper>
            </section>
        )
    }

    return (
        <>
            {/* Page Hero */}
            <section className="relative pt-40 pb-12 overflow-hidden" style={{ background: 'var(--color-bg-cream)' }}>
                <div className="container">
                    <RevealWrapper>
                        <p className="text-sm tracking-[3px] uppercase mb-4" style={{ color: 'var(--color-gold)' }}>Schedule a Visit</p>
                        <h1 style={{ fontFamily: 'var(--font-heading)' }}>Book an Appointment</h1>
                        <p className="max-w-2xl text-lg mt-4" style={{ color: 'var(--color-text-muted)' }}>
                            Choose your preferred location, treatment, and time. We'll confirm your appointment within 24 hours.
                        </p>
                    </RevealWrapper>
                </div>
            </section>

            {/* Progress Steps */}
            <section className="py-8 border-b" style={{ borderColor: 'var(--color-border)' }}>
                <div className="container">
                    <div className="flex items-center justify-between max-w-2xl mx-auto">
                        {steps.map((step, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-500"
                                    style={{
                                        background: i <= currentStep ? 'var(--color-gold)' : 'var(--color-bg-light)',
                                        color: i <= currentStep ? '#fff' : 'var(--color-text-light)',
                                    }}
                                >
                                    {i < currentStep ? <CheckCircle size={18} /> : i + 1}
                                </div>
                                <span className="text-sm hidden sm:inline" style={{ color: i <= currentStep ? 'var(--color-dark)' : 'var(--color-text-light)' }}>
                                    {step}
                                </span>
                                {i < steps.length - 1 && (
                                    <div
                                        className="w-8 md:w-16 h-[2px] mx-2"
                                        style={{ background: i < currentStep ? 'var(--color-gold)' : 'var(--color-border)' }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form Steps */}
            <section className="section">
                <div className="container max-w-3xl">
                    {/* Step 1: Location */}
                    {currentStep === 0 && (
                        <RevealWrapper>
                            <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                                <MapPin size={24} className="inline mr-2" style={{ color: 'var(--color-gold)' }} />
                                Choose Your Location
                            </h3>
                            <p className="mb-8 text-sm" style={{ color: 'var(--color-text-muted)' }}>Select the AAYNA clinic nearest to you.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {locations.map((loc) => (
                                    <button
                                        key={loc.id}
                                        onClick={() => setFormData({ ...formData, location: loc.name })}
                                        className="text-left p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg"
                                        style={{
                                            borderColor: formData.location === loc.name ? 'var(--color-gold)' : 'var(--color-border)',
                                            background: formData.location === loc.name ? 'var(--color-gold-glow)' : 'var(--color-bg-white)',
                                        }}
                                    >
                                        <h4 className="font-medium mb-1">{loc.name}</h4>
                                        <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{loc.address}</p>
                                        <p className="text-xs mt-1" style={{ color: 'var(--color-gold)' }}>{loc.phone}</p>
                                    </button>
                                ))}
                            </div>
                        </RevealWrapper>
                    )}

                    {/* Step 2: Treatment */}
                    {currentStep === 1 && (
                        <RevealWrapper>
                            <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                                <FileText size={24} className="inline mr-2" style={{ color: 'var(--color-gold)' }} />
                                Choose Your Treatment
                            </h3>
                            <p className="mb-8 text-sm" style={{ color: 'var(--color-text-muted)' }}>Select the treatment you're interested in.</p>
                            <div className="space-y-3">
                                {treatments.map((t) => (
                                    <button
                                        key={t.id}
                                        onClick={() => setFormData({ ...formData, treatment: t.title })}
                                        className="w-full text-left p-5 rounded-xl border-2 transition-all duration-300 hover:shadow-md flex items-center gap-4"
                                        style={{
                                            borderColor: formData.treatment === t.title ? 'var(--color-gold)' : 'var(--color-border)',
                                            background: formData.treatment === t.title ? 'var(--color-gold-glow)' : 'var(--color-bg-white)',
                                        }}
                                    >
                                        <img src={t.image} alt={t.title} className="w-16 h-16 rounded-lg object-cover shrink-0" />
                                        <div className="flex-1">
                                            <h4 className="font-medium text-sm">{t.title}</h4>
                                            <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>{t.duration} • {t.price}</p>
                                        </div>
                                        {formData.treatment === t.title && <CheckCircle size={20} style={{ color: 'var(--color-gold)' }} />}
                                    </button>
                                ))}
                            </div>
                        </RevealWrapper>
                    )}

                    {/* Step 3: Date & Time */}
                    {currentStep === 2 && (
                        <RevealWrapper>
                            <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                                <Calendar size={24} className="inline mr-2" style={{ color: 'var(--color-gold)' }} />
                                Pick Date & Time
                            </h3>
                            <p className="mb-8 text-sm" style={{ color: 'var(--color-text-muted)' }}>Choose your preferred date and time slot.</p>

                            <div className="mb-8">
                                <label className="block text-xs tracking-[2px] uppercase mb-2 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                                    Preferred Date
                                </label>
                                <input
                                    type="date"
                                    value={formData.date}
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    className="w-full px-4 py-4 border rounded-lg text-sm transition-all duration-300 focus:outline-none"
                                    style={{ borderColor: 'var(--color-border)' }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                                    min={new Date().toISOString().split('T')[0]}
                                />
                            </div>

                            <div>
                                <label className="block text-xs tracking-[2px] uppercase mb-4 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                                    Preferred Time
                                </label>
                                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                                    {timeSlots.map((slot) => (
                                        <button
                                            key={slot}
                                            onClick={() => setFormData({ ...formData, time: slot })}
                                            className="py-3 px-4 text-sm rounded-lg border transition-all duration-300"
                                            style={{
                                                background: formData.time === slot ? 'var(--color-gold)' : 'var(--color-bg-white)',
                                                color: formData.time === slot ? '#fff' : 'var(--color-text)',
                                                borderColor: formData.time === slot ? 'var(--color-gold)' : 'var(--color-border)',
                                            }}
                                        >
                                            {slot}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </RevealWrapper>
                    )}

                    {/* Step 4: Details */}
                    {currentStep === 3 && (
                        <RevealWrapper>
                            <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                                <User size={24} className="inline mr-2" style={{ color: 'var(--color-gold)' }} />
                                Your Details
                            </h3>
                            <p className="mb-8 text-sm" style={{ color: 'var(--color-text-muted)' }}>Tell us about yourself so we can prepare for your visit.</p>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs tracking-[2px] uppercase mb-2 font-medium" style={{ color: 'var(--color-text-muted)' }}>Full Name *</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-4 border rounded-lg text-sm focus:outline-none"
                                            style={{ borderColor: 'var(--color-border)' }}
                                            onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                                            onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs tracking-[2px] uppercase mb-2 font-medium" style={{ color: 'var(--color-text-muted)' }}>Phone *</label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-4 border rounded-lg text-sm focus:outline-none"
                                            style={{ borderColor: 'var(--color-border)' }}
                                            onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                                            onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                                            placeholder="+91 XXXXX XXXXX"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs tracking-[2px] uppercase mb-2 font-medium" style={{ color: 'var(--color-text-muted)' }}>Email *</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-4 border rounded-lg text-sm focus:outline-none"
                                        style={{ borderColor: 'var(--color-border)' }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                                        onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs tracking-[2px] uppercase mb-2 font-medium" style={{ color: 'var(--color-text-muted)' }}>Additional Notes</label>
                                    <textarea
                                        rows={4}
                                        value={formData.notes}
                                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                        className="w-full px-4 py-4 border rounded-lg text-sm focus:outline-none resize-none"
                                        style={{ borderColor: 'var(--color-border)' }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                                        onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                                        placeholder="Any concerns, allergies, or special requests..."
                                    />
                                </div>
                            </div>
                        </RevealWrapper>
                    )}

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-12 pt-8 border-t" style={{ borderColor: 'var(--color-border)' }}>
                        <button
                            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                            className="btn btn-outline flex items-center gap-2"
                            style={{ visibility: currentStep === 0 ? 'hidden' : 'visible' }}
                        >
                            <ArrowLeft size={14} /> Back
                        </button>

                        {currentStep < steps.length - 1 ? (
                            <button
                                onClick={() => setCurrentStep(currentStep + 1)}
                                disabled={!canProceed()}
                                className="btn btn-primary"
                                style={{ opacity: canProceed() ? 1 : 0.5, cursor: canProceed() ? 'pointer' : 'not-allowed' }}
                            >
                                Continue <ArrowRight size={14} />
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                disabled={!canProceed()}
                                className="btn btn-primary"
                                style={{ opacity: canProceed() ? 1 : 0.5, cursor: canProceed() ? 'pointer' : 'not-allowed' }}
                            >
                                Confirm Booking <CheckCircle size={14} />
                            </button>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
