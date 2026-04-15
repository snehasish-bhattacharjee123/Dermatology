import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, Instagram, Youtube, Facebook, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { RevealWrapper } from '../hooks/useAnimations'

const contactInfo = [
    {
        icon: Phone,
        label: 'Call Us',
        value: '+91 11 2634 7890',
        sub: 'Mon – Sat, 10am – 7pm',
        href: 'tel:+911126347890',
        color: 'rgba(135,91,108,0.12)',
    },
    {
        icon: Mail,
        label: 'Email Us',
        value: 'info@dcosmedisclinic.com',
        sub: 'We respond within 24 hours',
        href: 'mailto:info@dcosmedisclinic.com',
        color: 'rgba(135,91,108,0.12)',
    },
    {
        icon: MapPin,
        label: 'Main Clinic',
        value: 'SDA Market, Hauz Khas',
        sub: 'New Delhi – 110016',
        href: 'https://maps.google.com',
        color: 'rgba(135,91,108,0.12)',
    },
    {
        icon: Clock,
        label: 'Working Hours',
        value: 'Mon – Sat: 10am – 7pm',
        sub: 'Sunday by appointment',
        color: 'rgba(135,91,108,0.12)',
    },
]

const inquiryTypes = ['Consultation Booking', 'Treatment Information', 'Pricing & Packages', 'Complaint / Feedback', 'Other']

const socials = [
    {
        name: 'Instagram',
        handle: '@dcosmedis',
        href: 'https://www.instagram.com/skinlabindia/',
        bg: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
        icon: Instagram,
    },
    {
        name: 'Facebook',
        handle: '/dcosmedis',
        href: 'https://www.facebook.com/skinlabindia',
        bg: 'linear-gradient(135deg, #1877f2, #42a5f5)',
        icon: Facebook,
    },
    {
        name: 'YouTube',
        handle: 'D\'CosMedis TV',
        href: 'https://www.youtube.com/channel/UC9JC_KgzE6YDSh4Amg4D2mQ',
        bg: 'linear-gradient(135deg, #ff0000, #ff6b6b)',
        icon: Youtube,
    },
]

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', inquiryType: '', message: '' })
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
        } catch (_) { }
        setTimeout(() => { setLoading(false); setSubmitted(true) }, 800)
    }

    return (
        <div style={{ background: '#fff' }}>
            <style>{`
                /* ── Hero ── */
                .ct-hero-gradient { display: none; }

                /* ── Info cards ── */
                .ct-info-card { display: flex; align-items: flex-start; gap: 1.25rem; padding: 1.5rem; border: 1px solid #f0ede8; background: #fff; transition: all 0.35s ease; }
                .ct-info-card:hover { border-color: var(--color-wine); box-shadow: 0 12px 40px rgba(86, 58, 86, 0.12); transform: translateY(-3px); }
                .ct-info-icon { width: 3rem; height: 3rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; background: rgba(86, 58, 86, 0.1); transition: background 0.3s; }
                .ct-info-card:hover .ct-info-icon { background: var(--color-wine); }
                .ct-info-card:hover .ct-info-icon svg { color: #fff !important; }

                /* ── Form ── */
                .ct-label { display: block; font-size: 0.6rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--color-text-muted); margin-bottom: 0.6rem; }
                .ct-input { width: 100%; padding: 0.875rem 1rem; font-family: var(--font-body); font-size: 0.9375rem; color: var(--color-dark); background: #fff; border: 1px solid #e0dbd5; outline: none; transition: border-color 0.3s, box-shadow 0.3s; }
                .ct-input:focus { border-color: var(--color-wine); box-shadow: 0 0 0 3px rgba(86, 58, 86, 0.1); }
                .ct-input::placeholder { color: #bbb; }
                .ct-select { appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23888' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 1rem center; cursor: pointer; }
                .ct-submit { width: 100%; padding: 1.1rem; background: var(--color-dark); color: #fff; font-size: 0.75rem; letter-spacing: 3px; text-transform: uppercase; font-weight: 700; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.75rem; transition: all 0.3s; }
                .ct-submit:hover { background: var(--color-wine); }
                .ct-submit:disabled { opacity: 0.6; cursor: not-allowed; }

                /* ── Social cards ── */
                .ct-social { position: relative; overflow: hidden; border-radius: 4px; padding: 2.5rem 2rem; display: flex; flex-direction: column; align-items: center; gap: 1rem; transition: transform 0.35s, box-shadow 0.35s; }
                .ct-social:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(0,0,0,0.2); }
                .ct-social-icon { width: 4rem; height: 4rem; border-radius: 50%; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); display: flex; align-items: center; justify-content: center; transition: all 0.3s; }
                .ct-social:hover .ct-social-icon { background: rgba(255,255,255,0.25); transform: scale(1.1); }

                /* ── Map ── */
                .ct-map-wrapper { position: relative; }
                .ct-map-label { position: absolute; left: 1.5rem; bottom: 1.5rem; z-index: 2; background: var(--color-dark); color: #fff; padding: 0.75rem 1.5rem; font-size: 0.65rem; letter-spacing: 2px; text-transform: uppercase; font-weight: 700; display: flex; align-items: center; gap: 0.5rem; }
            `}</style>

            {/* ─── HERO ─── */}
            <section style={{ position: 'relative', height: '62vh', minHeight: '460px', display: 'flex', alignItems: 'center', overflow: 'hidden', marginTop: 'var(--header-total-height)' }}>
                <div style={{ position: 'absolute', inset: 0 }}>
                    <img src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80" alt="D'CosMedis Clinic" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
                    <div className="ct-hero-gradient" />
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                    <RevealWrapper direction="up">
                        <span style={{ display: 'inline-block', fontSize: '0.625rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-wine)', background: 'rgba(86, 58, 86, 0.12)', border: '1px solid rgba(86, 58, 86, 0.3)', borderRadius: '9999px', padding: '0.4rem 1.25rem', marginBottom: '1.5rem' }}>
                            Get In Touch
                        </span>
                        <h1 style={{ fontFamily: 'var(--font-heading)', color: '#fff', letterSpacing: '6px', textTransform: 'uppercase', fontSize: 'clamp(2.75rem, 8vw, 6rem)', lineHeight: 1.05, marginBottom: '1.5rem' }}>
                            <span style={{ fontWeight: 300 }}>CONTACT </span>
                            <span style={{ fontWeight: 700, color: 'var(--color-wine)' }}>US</span>
                        </h1>
                        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontWeight: 300, maxWidth: '38rem', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
                            We're here to help. Reach out for appointments, treatment inquiries, or any aesthetic assistance you need.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="tel:+911126347890" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--color-wine)', color: '#fff', padding: '0.9rem 2rem', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, boxShadow: '0 8px 28px rgba(86, 58, 86, 0.4)' }}>
                                <Phone size={14} /> Call Now
                            </a>
                            <a href="https://wa.me/911126347890" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.08)', color: '#fff', padding: '0.9rem 2rem', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                                <MessageCircle size={14} /> WhatsApp
                            </a>
                        </div>
                    </RevealWrapper>
                </div>

                <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', width: '1px', height: '2.5rem', background: 'linear-gradient(to bottom, transparent, var(--color-wine))' }} />
            </section>

            {/* ─── INFO CARDS ─── */}
            <section style={{ background: 'var(--color-bg-cream)', padding: '5rem 0' }}>
                <div className="container" style={{ maxWidth: '80rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                        {contactInfo.map((item, i) => (
                            <RevealWrapper key={i} direction="up" delay={i * 0.1}>
                                <div className="ct-info-card">
                                    <div className="ct-info-icon">
                                        <item.icon size={18} style={{ color: 'var(--color-wine)', transition: 'color 0.3s' }} />
                                    </div>
                                    <div>
                                        <span style={{ display: 'block', fontSize: '0.55rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, color: '#aaa', marginBottom: '0.35rem' }}>{item.label}</span>
                                        {item.href ? (
                                            <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: 'var(--color-dark)', fontWeight: 500, marginBottom: '0.2rem', transition: 'color 0.3s' }}>
                                                {item.value}
                                            </a>
                                        ) : (
                                            <span style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: 'var(--color-dark)', fontWeight: 500, marginBottom: '0.2rem' }}>
                                                {item.value}
                                            </span>
                                        )}
                                        <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>{item.sub}</span>
                                    </div>
                                </div>
                            </RevealWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── FORM + MAP SPLIT ─── */}
            <section style={{ background: '#fff', padding: '6rem 0' }}>
                <div className="container" style={{ maxWidth: '80rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>

                        {/* ── FORM ── */}
                        <RevealWrapper direction="left">
                            <div>
                                <span style={{ display: 'block', fontSize: '0.625rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700, color: '#888', marginBottom: '1rem' }}>
                                    Reach Out
                                </span>
                                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: 'var(--color-dark)', marginBottom: '0.75rem', lineHeight: 1.2 }}>
                                    Send an <span style={{ fontStyle: 'italic', color: 'var(--color-wine)' }}>Inquiry</span>
                                </h2>
                                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: '2.5rem', fontSize: '0.9375rem' }}>
                                    Fill out the form and our team will respond within 24 hours. All enquiries are handled with complete discretion.
                                </p>

                                {submitted ? (
                                    <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--color-bg-cream)', border: '1px solid #f0ede8' }}>
                                        <div style={{ width: '4.5rem', height: '4.5rem', borderRadius: '50%', background: 'rgba(86, 58, 86, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                                            <CheckCircle size={32} style={{ color: 'var(--color-wine)' }} />
                                        </div>
                                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', color: 'var(--color-dark)', marginBottom: '0.75rem' }}>Message Received!</h3>
                                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: 1.75 }}>
                                            Thank you for reaching out. One of our concierges will get back to you within 24 hours.
                                        </p>
                                        <button onClick={() => setSubmitted(false)} style={{ background: 'none', border: '1px solid var(--color-wine)', color: 'var(--color-wine)', padding: '0.75rem 2rem', fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s' }}>
                                            Send Another
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                        {/* Name + Email */}
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                                            <div>
                                                <label className="ct-label">Full Name *</label>
                                                <input className="ct-input" type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Your full name" />
                                            </div>
                                            <div>
                                                <label className="ct-label">Email Address *</label>
                                                <input className="ct-input" type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="your@email.com" />
                                            </div>
                                        </div>

                                        {/* Phone + Type */}
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                                            <div>
                                                <label className="ct-label">Phone Number</label>
                                                <input className="ct-input" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
                                            </div>
                                            <div>
                                                <label className="ct-label">Inquiry Type</label>
                                                <select className="ct-input ct-select" name="inquiryType" value={formData.inquiryType} onChange={handleChange}>
                                                    <option value="">Select a topic</option>
                                                    {inquiryTypes.map(t => <option key={t} value={t}>{t}</option>)}
                                                </select>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label className="ct-label">Your Message *</label>
                                            <textarea className="ct-input" name="message" required rows={5} value={formData.message} onChange={handleChange} placeholder="Tell us about your concerns or what you'd like to book..." style={{ resize: 'vertical', minHeight: '130px' }} />
                                        </div>

                                        <button type="submit" className="ct-submit" disabled={loading}>
                                            {loading ? 'Sending…' : <><Send size={14} /> Send Message</>}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </RevealWrapper>

                        {/* ── RIGHT SIDE: Map + quick stats ── */}
                        <RevealWrapper direction="right">
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                {/* Map */}
                                <div className="ct-map-wrapper" style={{ position: 'relative', overflow: 'hidden', height: '380px' }}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6853860477017!2d77.1983058145576!3d28.5491763946059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce208c5c765ef%3A0xa11c471017df8fd!2sSDA%20Market!5e0!3m2!1sen!2sin!4v1683907409249!5m2!1sen!2sin"
                                        title="D'CosMedis Clinic Location"
                                        style={{ width: '100%', height: '100%', border: 0, filter: 'grayscale(20%) contrast(1.1)' }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                    <div className="ct-map-label">
                                        <MapPin size={12} style={{ color: 'var(--color-wine)' }} />
                                        SDA Market, Hauz Khas, New Delhi
                                    </div>
                                </div>

                                {/* Quick facts */}
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    {[
                                        { label: 'Clinic Locations', val: '15+' },
                                        { label: 'Years of Excellence', val: '30+' },
                                        { label: 'Happy Patients', val: '50K+' },
                                        { label: 'Expert Doctors', val: '10+' },
                                    ].map((f, i) => (
                                        <div key={i} style={{ background: 'var(--color-bg-cream)', padding: '1.5rem', textAlign: 'center', border: '1px solid #f0ede8' }}>
                                            <span style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--color-dark)', fontWeight: 600, lineHeight: 1 }}>{f.val}</span>
                                            <span style={{ display: 'block', fontSize: '0.6rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-wine)', opacity: 0.8, marginTop: '0.5rem' }}>{f.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </RevealWrapper>
                    </div>
                </div>
            </section>

            {/* ─── SOCIAL SECTION ─── */}
            <section style={{ background: 'var(--color-bg-dark)', padding: '6rem 0', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '70rem' }}>
                    <RevealWrapper>
                        <span style={{ display: 'block', fontSize: '0.625rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700, color: '#888', marginBottom: '1rem' }}>Stay Connected</span>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '0.75rem' }}>
                            Connect With <span style={{ fontStyle: 'italic', color: 'var(--color-wine)' }}>Us</span>
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', marginBottom: '3.5rem' }}>
                            Follow us for skincare tips, before-and-after stories, and exclusive offers.
                        </p>
                    </RevealWrapper>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                        {socials.map((s, i) => (
                            <RevealWrapper key={i} direction="up" delay={i * 0.1}>
                                <a href={s.href} target="_blank" rel="noopener noreferrer" className="ct-social" style={{ background: s.bg, textDecoration: 'none' }}>
                                    <div className="ct-social-icon">
                                        <s.icon size={22} style={{ color: '#fff' }} />
                                    </div>
                                    <div>
                                        <span style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: '#fff', fontWeight: 600, marginBottom: '0.2rem' }}>{s.name}</span>
                                        <span style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>{s.handle}</span>
                                    </div>
                                    <span style={{ fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, color: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                        Follow Us <ArrowRight size={11} />
                                    </span>
                                </a>
                            </RevealWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section style={{ background: 'var(--color-wine)', padding: '5rem 0', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '44rem' }}>
                    <RevealWrapper>
                        <span style={{ display: 'block', fontSize: '0.625rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700, color: 'rgba(255,255,255,0.7)', marginBottom: '1rem' }}>Ready to Begin?</span>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: '#fff', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                            Ready to Begin Your Skin Journey?
                        </h2>
                        <p style={{ color: 'var(--color-bg-cream)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2.5rem', fontWeight: 400 }}>
                            Book a consultation with our expert dermatologists and discover treatments tailored to your unique needs.
                        </p>
                        <Link to="/book" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#fff', color: 'var(--color-wine)', padding: '1rem 2.5rem', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, transition: 'all 0.3s' }}>
                            BOOK YOUR CONSULTATION →
                        </Link>
                    </RevealWrapper>
                </div>
            </section>
        </div>
    )
}
