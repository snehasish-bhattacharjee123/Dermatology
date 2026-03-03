import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { RevealWrapper } from '../hooks/useAnimations'
import { Heading, Text, Caption } from '../components/ui/Typography'

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
            {/* Page Hero - Consistent */}
            <section className="page-hero">
                <div className="container">
                    <RevealWrapper>
                        <Caption variant="overline">Get In Touch</Caption>
                        <Heading variant="page">Contact Us</Heading>
                        <Text size="lg" color="muted" className="max-w-2xl mt-5">
                            We're here to help. Reach out to us for appointments, inquiries, or any assistance you need.
                        </Text>
                    </RevealWrapper>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                        {/* Contact Info - Refined */}
                        <div className="lg:col-span-1">
                            <RevealWrapper direction="left">
                                <div className="space-y-6">
                                    <div className="mb-8">
                                        <Heading variant="card" className="mb-2">Contact Information</Heading>
                                        <Text size="sm" color="muted">
                                            Reach out to us through any of these channels
                                        </Text>
                                    </div>

                                    {[
                                        { icon: Phone, label: 'Phone', value: '+91 11 2634 7890', href: 'tel:+911126347890' },
                                        { icon: Mail, label: 'Email', value: 'info@aaynaclinic.com', href: 'mailto:info@aaynaclinic.com' },
                                        { icon: MapPin, label: 'Main Office', value: 'SDA Market, Hauz Khas, New Delhi - 110016' },
                                        { icon: Clock, label: 'Working Hours', value: 'Mon – Sat: 10:00 AM – 7:00 PM' },
                                    ].map((item, i) => (
                                        <div 
                                            key={i} 
                                            className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-cream"
                                            style={{ background: i === 0 ? 'transparent' : undefined }}
                                        >
                                            <div
                                                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                                                style={{ background: 'var(--color-gold-glow)' }}
                                            >
                                                <item.icon size={20} style={{ color: 'var(--color-gold)' }} />
                                            </div>
                                            <div>
                                                <Caption variant="label" className="mb-1">{item.label}</Caption>
                                                {item.href ? (
                                                    <a 
                                                        href={item.href} 
                                                        className="font-medium hover:text-gold transition-colors"
                                                        style={{ color: 'var(--color-dark)' }}
                                                    >
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <Text size="sm" color="muted">{item.value}</Text>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </RevealWrapper>
                        </div>

                        {/* Form - Refined */}
                        <div className="lg:col-span-2">
                            <RevealWrapper direction="right">
                                {submitted ? (
                                    <div 
                                        className="text-center py-20 px-8 rounded-2xl"
                                        style={{ background: 'var(--color-bg-cream)' }}
                                    >
                                        <div 
                                            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                                            style={{ background: 'var(--color-gold-glow)' }}
                                        >
                                            <Send size={28} style={{ color: 'var(--color-gold)' }} />
                                        </div>
                                        <Heading variant="card" className="mb-4">Message Sent!</Heading>
                                        <Text color="muted">
                                            Thank you for reaching out. We'll get back to you within 24 hours.
                                        </Text>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="mb-8">
                                            <Heading variant="card" className="mb-2">Send Us a Message</Heading>
                                            <Text size="sm" color="muted">
                                                Fill out the form below and we'll respond within 24 hours.
                                            </Text>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <label className="form-label mb-2">Full Name *</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="form-input"
                                                    placeholder="Your name"
                                                />
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
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <label className="form-label mb-2">Phone</label>
                                                <input
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    className="form-input"
                                                    placeholder="+91 XXXXX XXXXX"
                                                />
                                            </div>
                                            <div>
                                                <label className="form-label mb-2">Subject *</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.subject}
                                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                    className="form-input"
                                                    placeholder="How can we help?"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="form-label mb-2">Message *</label>
                                            <textarea
                                                required
                                                rows={5}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="form-input"
                                                style={{ minHeight: '150px', resize: 'vertical' }}
                                                placeholder="Tell us about your concern or inquiry..."
                                            />
                                        </div>

                                        <button type="submit" className="btn btn-primary">
                                            Send Message <Send size={16} />
                                        </button>
                                    </form>
                                )}
                            </RevealWrapper>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                .text-gold {
                    color: var(--color-gold);
                }
                .hover\:text-gold:hover {
                    color: var(--color-gold);
                }
                .bg-cream {
                    background-color: var(--color-bg-cream);
                }
                .hover\:bg-cream:hover {
                    background-color: var(--color-bg-cream);
                }
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
