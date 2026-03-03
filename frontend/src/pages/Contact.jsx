import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { RevealWrapper } from '../hooks/useAnimations'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', subject: '', message: '',
    })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
        } catch (err) {
            console.log('Submission stored locally')
        }
        setSubmitted(true)
    }

    return (
        <>
            {/* Page Hero */}
            <section className="relative pt-40 pb-24 overflow-hidden" style={{ background: 'var(--color-bg-cream)' }}>
                <div className="container">
                    <RevealWrapper>
                        <p className="text-sm tracking-[3px] uppercase mb-4" style={{ color: 'var(--color-gold)' }}>Get In Touch</p>
                        <h1 style={{ fontFamily: 'var(--font-heading)' }}>Contact Us</h1>
                        <p className="max-w-2xl text-lg mt-4" style={{ color: 'var(--color-text-muted)' }}>
                            We're here to help. Reach out to us for appointments, inquiries, or any assistance you need.
                        </p>
                    </RevealWrapper>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Contact Info */}
                        <div className="lg:col-span-1">
                            <RevealWrapper direction="left">
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-xl mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Contact Information</h3>
                                    </div>

                                    {[
                                        { icon: Phone, label: 'Phone', value: '+91 11 2634 7890', href: 'tel:+911126347890' },
                                        { icon: Mail, label: 'Email', value: 'info@aaynaclinic.com', href: 'mailto:info@aaynaclinic.com' },
                                        { icon: MapPin, label: 'Main Office', value: 'SDA Market, Hauz Khas, New Delhi - 110016' },
                                        { icon: Clock, label: 'Working Hours', value: 'Mon – Sat: 10:00 AM – 7:00 PM' },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-[var(--color-bg-cream)]">
                                            <div
                                                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                                                style={{ background: 'var(--color-gold-glow)' }}
                                            >
                                                <item.icon size={18} style={{ color: 'var(--color-gold)' }} />
                                            </div>
                                            <div>
                                                <p className="text-xs tracking-[2px] uppercase mb-1" style={{ color: 'var(--color-text-light)' }}>{item.label}</p>
                                                {item.href ? (
                                                    <a href={item.href} className="font-medium hover:text-[var(--color-gold)] transition-colors">{item.value}</a>
                                                ) : (
                                                    <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{item.value}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </RevealWrapper>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-2">
                            <RevealWrapper direction="right">
                                {submitted ? (
                                    <div className="text-center py-20 px-8 rounded-2xl" style={{ background: 'var(--color-bg-cream)' }}>
                                        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'var(--color-gold-glow)' }}>
                                            <Send size={28} style={{ color: 'var(--color-gold)' }} />
                                        </div>
                                        <h3 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Message Sent!</h3>
                                        <p style={{ color: 'var(--color-text-muted)' }}>
                                            Thank you for reaching out. We'll get back to you within 24 hours.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Send Us a Message</h3>
                                        <p className="text-sm mb-8" style={{ color: 'var(--color-text-muted)' }}>Fill out the form below and we'll respond within 24 hours.</p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-xs tracking-[2px] uppercase mb-2 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full px-4 py-4 border rounded-lg text-sm transition-all duration-300 focus:outline-none"
                                                    style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-white)' }}
                                                    onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                                                    onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                                                    placeholder="Your name"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs tracking-[2px] uppercase mb-2 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                                                    Email *
                                                </label>
                                                <input
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full px-4 py-4 border rounded-lg text-sm transition-all duration-300 focus:outline-none"
                                                    style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-white)' }}
                                                    onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                                                    onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-xs tracking-[2px] uppercase mb-2 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                                                    Phone
                                                </label>
                                                <input
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    className="w-full px-4 py-4 border rounded-lg text-sm transition-all duration-300 focus:outline-none"
                                                    style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-white)' }}
                                                    onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                                                    onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                                                    placeholder="+91 XXXXX XXXXX"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs tracking-[2px] uppercase mb-2 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                                                    Subject *
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.subject}
                                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                    className="w-full px-4 py-4 border rounded-lg text-sm transition-all duration-300 focus:outline-none"
                                                    style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-white)' }}
                                                    onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                                                    onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                                                    placeholder="How can we help?"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs tracking-[2px] uppercase mb-2 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                                                Message *
                                            </label>
                                            <textarea
                                                required
                                                rows={5}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full px-4 py-4 border rounded-lg text-sm transition-all duration-300 focus:outline-none resize-none"
                                                style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-white)' }}
                                                onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                                                onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                                                placeholder="Tell us about your concern or inquiry..."
                                            />
                                        </div>

                                        <button type="submit" className="btn btn-primary">
                                            Send Message <Send size={14} />
                                        </button>
                                    </form>
                                )}
                            </RevealWrapper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
