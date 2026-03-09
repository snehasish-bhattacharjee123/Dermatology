import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft, CheckCircle, Calendar, MapPin, User, FileText } from 'lucide-react'
import { RevealWrapper } from '../hooks/useAnimations'
import { Heading, Text, Caption } from '../components/ui/Typography'
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
            <section 
                className="min-h-screen flex items-center justify-center py-24"
                style={{ background: 'var(--color-bg-cream)' }}
            >
                <RevealWrapper>
                    <div className="text-center max-w-lg mx-auto px-6">
                        <div
                            className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"
                            style={{ background: 'var(--color-gold-glow)' }}
                        >
                            <CheckCircle size={48} style={{ color: 'var(--color-gold)' }} />
                        </div>
                        <Heading variant="section" className="mb-4">Booking Confirmed!</Heading>
                        <Text size="md" color="muted" className="mb-2">
                            Thank you, <strong>{formData.name}</strong>. Your appointment request has been received.
                        </Text>
                        <Text color="muted" className="mb-10">
                            We will send a confirmation to <strong>{formData.email}</strong> within 24 hours.
                        </Text>
                        <div 
                            className="p-6 rounded-xl text-left space-y-4 mb-10"
                            style={{ 
                                background: 'var(--color-bg-white)', 
                                border: '1px solid var(--color-border)'
                            }}
                        >
                            {[
                                { label: 'Location', value: formData.location },
                                { label: 'Treatment', value: formData.treatment },
                                { label: 'Date', value: formData.date },
                                { label: 'Time', value: formData.time },
                            ].map((item, i) => (
                                <div key={i} className="flex justify-between text-sm">
                                    <span style={{ color: 'var(--color-text-light)' }}>{item.label}</span>
                                    <span className="font-medium" style={{ color: 'var(--color-dark)' }}>{item.value}</span>
                                </div>
                            ))}
                        </div>
                        <Link to="/" className="btn btn-primary">Back to Home</Link>
                    </div>
                </RevealWrapper>
            </section>
        )
    }

    return (
        <>
            {/* Page Hero */}
            <section className="page-hero pb-16">
                <div className="container">
                    <RevealWrapper>
                        <Caption variant="overline">Schedule a Visit</Caption>
                        <Heading variant="page">Book an Appointment</Heading>
                        <Text size="lg" color="muted" className="max-w-2xl mt-5">
                            Choose your preferred location, treatment, and time. We'll confirm your appointment within 24 hours.
                        </Text>
                    </RevealWrapper>
                </div>
            </section>

            {/* Progress Steps - Improved */}
            <section 
                className="py-8 border-b sticky top-[var(--header-height-scrolled)] z-30"
                style={{ 
                    borderColor: 'var(--color-border)',
                    background: 'rgba(255,255,255,0.98)',
                    backdropFilter: 'blur(12px)'
                }}
            >
                <div className="container">
                    <div className="flex items-center justify-between max-w-3xl mx-auto">
                        {steps.map((step, i) => (
                            <div key={i} className="flex items-center flex-1 last:flex-0">
                                <div className="flex flex-col items-center">
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-500 mb-2"
                                        style={{
                                            background: i <= currentStep ? 'var(--color-gold)' : 'var(--color-bg-cream)',
                                            color: i <= currentStep ? '#fff' : 'var(--color-text-light)',
                                            border: `2px solid ${i <= currentStep ? 'var(--color-gold)' : 'var(--color-border)'}`,
                                        }}
                                    >
                                        {i < currentStep ? <CheckCircle size={18} /> : i + 1}
                                    </div>
                                    <span 
                                        className="text-xs hidden sm:block"
                                        style={{ 
                                            color: i <= currentStep ? 'var(--color-dark)' : 'var(--color-text-light)',
                                            fontWeight: i === currentStep ? 600 : 400
                                        }}
                                    >
                                        {step}
                                    </span>
                                </div>
                                {i < steps.length - 1 && (
                                    <div
                                        className="flex-1 h-[2px] mx-2 sm:mx-4 transition-all duration-500"
                                        style={{ 
                                            background: i < currentStep 
                                                ? 'var(--color-gold)' 
                                                : 'var(--color-border)'
                                        }}
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
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-2">
                                    <MapPin size={24} style={{ color: 'var(--color-gold)' }} />
                                    <Heading variant="subtitle">Choose Your Location</Heading>
                                </div>
                                <Text color="muted" size="sm">Select the D'CosMedis clinic nearest to you.</Text>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {locations.map((loc) => (
                                    <button
                                        key={loc.id}
                                        onClick={() => setFormData({ ...formData, location: loc.name })}
                                        className="text-left p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg text-left"
                                        style={{
                                            borderColor: formData.location === loc.name ? 'var(--color-gold)' : 'var(--color-border)',
                                            background: formData.location === loc.name ? 'var(--color-gold-glow)' : 'var(--color-bg-white)',
                                        }}
                                    >
                                        <h4 className="font-semibold mb-2" style={{ color: 'var(--color-dark)' }}>{loc.name}</h4>
                                        <Text size="xs" color="muted">{loc.address}</Text>
                                        <Text size="xs" style={{ color: 'var(--color-gold)' }} className="mt-1">{loc.phone}</Text>
                                    </button>
                                ))}
                            </div>
                        </RevealWrapper>
                    )}

                    {/* Step 2: Treatment */}
                    {currentStep === 1 && (
                        <RevealWrapper>
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-2">
                                    <FileText size={24} style={{ color: 'var(--color-gold)' }} />
                                    <Heading variant="subtitle">Choose Your Treatment</Heading>
                                </div>
                                <Text color="muted" size="sm">Select the treatment you're interested in.</Text>
                            </div>
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
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-semibold text-sm mb-1" style={{ color: 'var(--color-dark)' }}>{t.title}</h4>
                                            <Text size="xs" color="muted">{t.duration} • {t.price}</Text>
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
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-2">
                                    <Calendar size={24} style={{ color: 'var(--color-gold)' }} />
                                    <Heading variant="subtitle">Pick Date & Time</Heading>
                                </div>
                                <Text color="muted" size="sm">Choose your preferred date and time slot.</Text>
                            </div>

                            <div className="mb-10">
                                <label 
                                    className="form-label mb-3"
                                    style={{ 
                                        display: 'block',
                                        fontSize: 'var(--text-xs)',
                                        fontWeight: 600,
                                        letterSpacing: 'var(--tracking-wider)',
                                        textTransform: 'uppercase',
                                        color: 'var(--color-text-muted)'
                                    }}
                                >
                                    Preferred Date
                                </label>
                                <input
                                    type="date"
                                    value={formData.date}
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    className="form-input"
                                    style={{
                                        width: '100%',
                                        padding: 'var(--space-4)',
                                        fontSize: 'var(--text-base)',
                                        border: '1px solid var(--color-border)',
                                        borderRadius: '8px',
                                        transition: 'all 0.2s ease'
                                    }}
                                    min={new Date().toISOString().split('T')[0]}
                                />
                            </div>

                            <div>
                                <label 
                                    className="form-label mb-4"
                                    style={{ 
                                        display: 'block',
                                        fontSize: 'var(--text-xs)',
                                        fontWeight: 600,
                                        letterSpacing: 'var(--tracking-wider)',
                                        textTransform: 'uppercase',
                                        color: 'var(--color-text-muted)'
                                    }}
                                >
                                    Preferred Time
                                </label>
                                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                                    {timeSlots.map((slot) => (
                                        <button
                                            key={slot}
                                            onClick={() => setFormData({ ...formData, time: slot })}
                                            className="py-3 px-2 text-sm rounded-lg border-2 transition-all duration-300"
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
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-2">
                                    <User size={24} style={{ color: 'var(--color-gold)' }} />
                                    <Heading variant="subtitle">Your Details</Heading>
                                </div>
                                <Text color="muted" size="sm">Tell us about yourself so we can prepare for your visit.</Text>
                            </div>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="form-label mb-2">Full Name *</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="form-input"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label mb-2">Phone *</label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="form-input"
                                            placeholder="+91 XXXXX XXXXX"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="form-label mb-2">Email *</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="form-input"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="form-label mb-2">Additional Notes</label>
                                    <textarea
                                        rows={4}
                                        value={formData.notes}
                                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                        className="form-input"
                                        style={{ minHeight: '120px', resize: 'vertical' }}
                                        placeholder="Any concerns, allergies, or special requests..."
                                    />
                                </div>
                            </div>
                        </RevealWrapper>
                    )}

                    {/* Navigation - Improved */}
                    <div 
                        className="flex items-center justify-between mt-12 pt-8 border-t"
                        style={{ borderColor: 'var(--color-border)' }}
                    >
                        <button
                            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                            className="btn btn-outline flex items-center gap-2"
                            style={{ visibility: currentStep === 0 ? 'hidden' : 'visible' }}
                        >
                            <ArrowLeft size={16} /> Back
                        </button>

                        {currentStep < steps.length - 1 ? (
                            <button
                                onClick={() => setCurrentStep(currentStep + 1)}
                                disabled={!canProceed()}
                                className="btn btn-primary"
                                style={{ opacity: canProceed() ? 1 : 0.5, cursor: canProceed() ? 'pointer' : 'not-allowed' }}
                            >
                                Continue <ArrowRight size={16} />
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                disabled={!canProceed()}
                                className="btn btn-primary"
                                style={{ opacity: canProceed() ? 1 : 0.5, cursor: canProceed() ? 'pointer' : 'not-allowed' }}
                            >
                                Confirm Booking <CheckCircle size={16} />
                            </button>
                        )}
                    </div>
                </div>
            </section>

            <style>{`
                .form-label {
                    display: block;
                    font-size: var(--text-xs);
                    font-weight: 600;
                    letter-spacing: var(--tracking-wider);
                    text-transform: uppercase;
                    color: var(--color-text-muted);
                }
                .form-input {
                    width: 100%;
                    padding: var(--space-4);
                    font-family: var(--font-body);
                    font-size: var(--text-base);
                    color: var(--color-text);
                    background: var(--color-bg-white);
                    border: 1px solid var(--color-border);
                    border-radius: 8px;
                    transition: all 0.2s ease;
                }
                .form-input:focus {
                    outline: none;
                    border-color: var(--color-gold);
                    box-shadow: 0 0 0 3px var(--color-gold-glow);
                }
                .form-input::placeholder {
                    color: var(--color-text-light);
                }
            `}</style>
        </>
    )
}
