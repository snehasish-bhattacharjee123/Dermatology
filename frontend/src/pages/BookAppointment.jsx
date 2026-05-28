import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft, CheckCircle, Calendar, MapPin, User, FileText, Clock, Star, Check } from 'lucide-react'
import { RevealWrapper } from '../hooks/useAnimations'
import { locations, treatments } from '../data/siteData'

const steps = ['Location', 'Treatment', 'Schedule', 'Details']

export default function BookAppointment() {
    const [currentStep, setCurrentStep] = useState(0)
    const [formData, setFormData] = useState({
        location: '', treatment: '', date: '', time: '', name: '', email: '', phone: '', notes: '',
    })
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async () => {
        setLoading(true)
        try {
            await fetch('/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
        } catch (err) { }
        setTimeout(() => { setLoading(false); setSubmitted(true) }, 1000)
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

    const selectedLoc = locations.find(l => l.name === formData.location)
    const selectedTreat = treatments.find(t => t.title === formData.treatment)

    if (submitted) {
        return (
            <div style={{ background: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 'var(--header-total-height)' }}>
                <RevealWrapper>
                    <div style={{ textAlign: 'center', maxWidth: '32rem', padding: '3rem 2rem', background: 'var(--color-bg-cream)', border: '1px solid #f0ede8', borderRadius: '4px' }}>
                        <div style={{ width: '5rem', height: '5rem', borderRadius: '50%', background: 'rgba(114,47,55,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                            <CheckCircle size={40} style={{ color: 'var(--color-wine)' }} />
                        </div>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--color-dark)', marginBottom: '1rem' }}>Request Received</h2>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                            Thank you, <strong style={{ color: 'var(--color-dark)' }}>{formData.name}</strong>. Your consultation request for <strong>{formData.treatment}</strong> at <strong>{formData.location}</strong> has been logged. Our concierge will contact you shortly to confirm the appointment.
                        </p>
                        
                        <div style={{ background: '#fff', padding: '1.5rem', border: '1px solid #e0dbd5', textAlign: 'left', marginBottom: '3rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#999', marginBottom: '0.2rem' }}>Date & Time</span>
                                    <strong style={{ display: 'block', color: 'var(--color-dark)', fontSize: '0.9rem' }}>{formData.date}<br/>{formData.time}</strong>
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#999', marginBottom: '0.2rem' }}>Contact</span>
                                    <strong style={{ display: 'block', color: 'var(--color-dark)', fontSize: '0.9rem' }}>{formData.phone}<br/>{formData.email}</strong>
                                </div>
                            </div>
                        </div>

                        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--color-wine)', color: '#fff', padding: '1rem 3rem', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700 }}>
                            Return Home
                        </Link>
                    </div>
                </RevealWrapper>
            </div>
        )
    }

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#fff' }}>
            <style>{`
                .bk-left { width: 45%; background: var(--color-dark); position: fixed; left: 0; top: 0; bottom: 0; display: flex; flex-direction: column; overflow: hidden; z-index: 10; }
                .bk-right { width: 55%; margin-left: 45%; background: #fff; min-height: 100vh; display: flex; flex-direction: column; padding-top: var(--header-total-height); }
                
                @media (max-width: 991px) {
                    .bk-left { display: none; }
                    .bk-right { width: 100%; margin-left: 0; padding-top: calc(var(--header-total-height) + 2rem); }
                }

                /* ── Left Sidebar Styles ── */
                .bk-left-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.4; mix-blend-mode: luminosity; }
                .bk-left-content { position: relative; z-index: 2; display: flex; flex-direction: column; height: 100%; padding: 4rem 4rem 4rem; justify-content: space-between; }
                
                /* ── Steps ── */
                .bk-step-nav { display: flex; alignItems: center; gap: 0.5rem; border-bottom: 1px solid #f0ede8; padding: 2rem 4rem; position: sticky; top: var(--header-height-scrolled); background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); z-index: 20; justify-content: space-between; }
                @media (max-width: 991px) { .bk-step-nav { padding: 1rem 1.5rem; top: var(--header-total-height); } }
                .bk-step-line { flex: 1; height: 2px; background: #eee; position: relative; border-radius: 2px; }
                .bk-step-line-fill { position: absolute; left: 0; top: 0; bottom: 0; background: var(--color-wine); transition: width 0.4s ease; }

                /* ── Forms / Selections ── */
                .bk-body { padding: 4rem; max-width: 48rem; margin: 0 auto; width: 100%; flex-grow: 1; }
                @media (max-width: 991px) { .bk-body { padding: 2rem 1.5rem; } }

                /* Generic Choice Card */
                .bk-choice { display: block; width: 100%; text-align: left; background: #fff; border: 1px solid #e0dbd5; padding: 1.5rem; border-radius: 4px; cursor: pointer; transition: all 0.3s; position: relative; overflow: hidden; }
                .bk-choice:hover { border-color: var(--color-wine); box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
                .bk-choice.active { border-color: var(--color-wine); background: rgba(114,47,55,0.03); box-shadow: 0 0 0 1px var(--color-wine); }
                .bk-choice-check { position: absolute; right: 1.5rem; top: 50%; transform: translateY(-50%); color: var(--color-wine); opacity: 0; transition: opacity 0.3s; }
                .bk-choice.active .bk-choice-check { opacity: 1; }

                /* Forms */
                .bk-label { display: block; font-size: 0.65rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--color-text-muted); margin-bottom: 0.6rem; }
                .bk-input { width: 100%; padding: 1rem 1.25rem; font-family: var(--font-body); font-size: 0.95rem; color: var(--color-dark); background: #f9f8f6; border: 1px solid #e0dbd5; outline: none; transition: all 0.3s; }
                .bk-input:focus { border-color: var(--color-wine); background: #fff; box-shadow: 0 0 0 3px rgba(114,47,55,0.1); }
                
                /* Footer nav */
                .bk-footer { display: flex; justify-content: space-between; align-items: center; padding: 2rem 4rem; border-top: 1px solid #f0ede8; background: #fff; }
                @media (max-width: 991px) { .bk-footer { padding: 1.5rem; } }
            `}</style>

            {/* ─── LEFT SIDEBAR (Desktop Only) ─── */}
            <div className="bk-left">
                <img src="https://images.unsplash.com/photo-1542848284-8afa78a08ccb?w=1200&q=80" alt="Clinic Ambience" className="bk-left-img" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(114,47,55,0.8), rgba(30,18,25,0.95))', zIndex: 1 }} />
                
                <div className="bk-left-content">
                    <div>
                        <Link to="/" style={{ display: 'inline-block', marginBottom: '3rem' }}>
                            {/* Logo stand-in */}
                            <span style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: '#EDE8D0', letterSpacing: '4px' }}>D'COSMEDIS</span>
                        </Link>
                        
                        <span style={{ display: 'inline-block', fontSize: '0.625rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-wine)', marginBottom: '1.25rem' }}>
                            Concierge Services
                        </span>
                        <h1 style={{ fontFamily: 'var(--font-heading)', color: '#EDE8D0', fontSize: '3.5rem', lineHeight: 1.1, marginBottom: '2rem' }}>
                            <span style={{ display: 'block', fontWeight: 300 }}>Request</span>
                            <span style={{ display: 'block', fontWeight: 700, color: 'var(--color-wine)' }}>Consultation</span>
                        </h1>
                        <p style={{ color: 'rgba(237,232,208,0.7)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '24rem', fontWeight: 300 }}>
                            Experience clinical excellence and tailored aesthetic treatments in a setting designed for absolute comfort and privacy.
                        </p>
                    </div>

                    {/* Trust indicator */}
                    <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                        <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                            {[...Array(5)].map((_, j) => <Star key={j} size={14} style={{ color: 'var(--color-wine)', fill: 'var(--color-wine)' }} />)}
                        </div>
                        <p style={{ color: '#EDE8D0', fontSize: '0.95rem', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '1rem' }}>
                            "From the moment you walk in, the level of care is exceptional. A truly premium clinical experience."
                        </p>
                        <span style={{ fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-wine)' }}>— Verified Patient</span>
                    </div>
                </div>
            </div>

            {/* ─── RIGHT SIDE ─── */}
            <div className="bk-right">
                
                {/* Step Progress */}
                <div className="bk-step-nav">
                    {steps.map((st, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', flex: i === steps.length - 1 ? 'none' : '1' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <div style={{ 
                                    width: '1.75rem', height: '1.75rem', borderRadius: '50%', 
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', 
                                    fontSize: '0.7rem', fontWeight: 700, transition: 'all 0.3s',
                                    background: i < currentStep ? 'var(--color-wine)' : i === currentStep ? 'transparent' : '#f0ede8',
                                    color: i < currentStep ? '#fff' : i === currentStep ? 'var(--color-wine)' : '#aaa',
                                    border: i === currentStep ? '2px solid var(--color-wine)' : 'none'
                                }}>
                                    {i < currentStep ? <Check size={12} strokeWidth={3} /> : (i + 1)}
                                </div>
                                <span style={{ 
                                    fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', 
                                    fontWeight: i === currentStep ? 700 : 500,
                                    color: i <= currentStep ? 'var(--color-dark)' : '#aaa',
                                    display: 'none', /* Hide text on very small screens, let media queries handle if we wanted */
                                }} className="sm:block">
                                    {st}
                                </span>
                            </div>
                            {i < steps.length - 1 && (
                                <div style={{ flex: 1, margin: '0 1rem', height: '2px', background: '#f0ede8', position: 'relative' }}>
                                    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, background: 'var(--color-wine)', width: i < currentStep ? '100%' : '0%', transition: 'width 0.4s ease' }} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Main Body */}
                <div className="bk-body">
                    <RevealWrapper key={currentStep} direction="left">
                        
                        {/* ── 1. LOCATION ── */}
                        {currentStep === 0 && (
                            <div>
                                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', color: 'var(--color-dark)', marginBottom: '0.5rem' }}>Select Clinic</h2>
                                <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem' }}>Please select the clinic location you'd like to visit.</p>
                                
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {locations.map(loc => (
                                        <button key={loc.id} className={`bk-choice ${formData.location === loc.name ? 'active' : ''}`} onClick={() => setFormData({...formData, location: loc.name})}>
                                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                                <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: 'rgba(114,47,55,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-wine)' }}>
                                                    <MapPin size={20} />
                                                </div>
                                                <div>
                                                    <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', color: 'var(--color-dark)', marginBottom: '0.2rem' }}>{loc.name}</h3>
                                                    <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{loc.address}</span>
                                                </div>
                                            </div>
                                            <CheckCircle className="bk-choice-check" size={24} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* ── 2. TREATMENT ── */}
                        {currentStep === 1 && (
                            <div>
                                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', color: 'var(--color-dark)', marginBottom: '0.5rem' }}>Select Treatment</h2>
                                <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem' }}>Choose your primary concern or intended treatment.</p>
                                
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {treatments.map(t => (
                                        <button key={t.id} className={`bk-choice ${formData.treatment === t.title ? 'active' : ''}`} onClick={() => setFormData({...formData, treatment: t.title})}>
                                            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                                                <img src={t.image} alt={t.title} style={{ width: '4rem', height: '4rem', objectFit: 'cover', borderRadius: '4px' }} />
                                                <div>
                                                    <h3 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-heading)', color: 'var(--color-dark)', marginBottom: '0.2rem' }}>{t.title}</h3>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
                                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={12}/> {t.duration}</span>
                                                        <span style={{ color: 'var(--color-wine)', fontWeight: 600 }}>{t.price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <CheckCircle className="bk-choice-check" size={24} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* ── 3. DATE & TIME ── */}
                        {currentStep === 2 && (
                            <div>
                                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', color: 'var(--color-dark)', marginBottom: '0.5rem' }}>Schedule Visit</h2>
                                <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem' }}>Pick a suitable date and time for your consultation.</p>

                                <div style={{ marginBottom: '2.5rem' }}>
                                    <label className="bk-label">Select Date</label>
                                    <input 
                                        type="date" 
                                        className="bk-input" 
                                        value={formData.date} 
                                        onChange={e => setFormData({...formData, date: e.target.value})}
                                        min={new Date().toISOString().split('T')[0]}
                                    />
                                </div>

                                <div>
                                    <label className="bk-label">Select Time</label>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '0.75rem' }}>
                                        {timeSlots.map(slot => (
                                            <button 
                                                key={slot} 
                                                onClick={() => setFormData({...formData, time: slot})}
                                                style={{
                                                    padding: '0.85rem 0.5rem', fontSize: '0.8rem', fontWeight: 600, border: '1px solid', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.3s',
                                                    background: formData.time === slot ? 'var(--color-wine)' : '#fff',
                                                    color: formData.time === slot ? '#fff' : 'var(--color-dark)',
                                                    borderColor: formData.time === slot ? 'var(--color-wine)' : '#e0dbd5'
                                                }}
                                            >
                                                {slot}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ── 4. DETAILS ── */}
                        {currentStep === 3 && (
                            <div>
                                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', color: 'var(--color-dark)', marginBottom: '0.5rem' }}>Your Details</h2>
                                <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem' }}>How can our concierge reach you to confirm the booking?</p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                        <div>
                                            <label className="bk-label">Full Name *</label>
                                            <input type="text" className="bk-input" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Jane Doe" />
                                        </div>
                                        <div>
                                            <label className="bk-label">Phone *</label>
                                            <input type="tel" className="bk-input" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="+91 XXXXX XXXX" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="bk-label">Email Address *</label>
                                        <input type="email" className="bk-input" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="jane@example.com" />
                                    </div>
                                    <div>
                                        <label className="bk-label">Additional Notes</label>
                                        <textarea className="bk-input" rows={4} value={formData.notes} onChange={e => setFormData({...formData, notes: e.target.value})} placeholder="Medical history, specific concerns..." style={{ resize: 'vertical' }} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </RevealWrapper>
                </div>

                {/* Footer Controls */}
                <div className="bk-footer">
                    <div>
                        {currentStep > 0 && (
                            <button 
                                onClick={() => setCurrentStep(prev => prev - 1)}
                                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', color: '#888', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, cursor: 'pointer' }}
                            >
                                <ArrowLeft size={16} /> Back
                            </button>
                        )}
                    </div>
                    
                    <button
                        onClick={currentStep === steps.length - 1 ? handleSubmit : () => setCurrentStep(prev => prev + 1)}
                        disabled={!canProceed() || loading}
                        style={{
                            display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 3rem', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, border: 'none', cursor: canProceed() && !loading ? 'pointer' : 'not-allowed', transition: 'all 0.3s',
                            background: canProceed() ? 'var(--color-dark)' : '#f0ede8',
                            color: canProceed() ? '#fff' : '#aaa'
                        }}
                    >
                        {loading ? 'Processing...' : currentStep === steps.length - 1 ? 'Confirm Request' : 'Next Step'} 
                        {!loading && (currentStep === steps.length - 1 ? <Check size={16} /> : <ArrowRight size={16} />)}
                    </button>
                </div>

            </div>
        </div>
    )
}
