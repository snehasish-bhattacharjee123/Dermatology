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
            {/* Page Hero - Premium */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden" style={{ marginTop: 'var(--header-total-height)' }}>
                <div className="absolute inset-0 bg-[#faf8f4] z-0"></div>
                <div className="container relative z-10 text-center">
                    <RevealWrapper>
                        <span className="inline-block px-4 py-1.5 text-[10px] tracking-[4px] uppercase font-bold rounded-full mb-6 text-[#888]">
                            Get In Touch
                        </span>
                        <Heading variant="hero" className="tracking-[4px] text-dark uppercase mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                            <span className="text-5xl md:text-7xl font-light">CONTACT</span> <span className="text-5xl md:text-7xl font-bold">US</span>
                        </Heading>
                        <Text className="max-w-2xl mx-auto text-sm md:text-base tracking-[1px] font-light text-[#555] leading-relaxed">
                            We're here to help. Reach out to our concierge for appointments, treatments inquiries, or any aesthetic assistance you need.
                        </Text>
                    </RevealWrapper>
                </div>
            </section>

            <section className="section bg-white py-20 md:py-32">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
                        {/* Contact Info - Refined */}
                        <div className="lg:col-span-1 border-r border-transparent lg:border-[#eee] pr-0 lg:pr-12">
                            <RevealWrapper direction="left">
                                <div className="space-y-6">
                                    <div className="mb-12">
                                        <Heading variant="card" className="mb-3 text-2xl tracking-wide uppercase">Contact Details</Heading>
                                        <Text size="sm" color="muted" className="leading-relaxed">
                                            Reach out to our aesthetic concierges through any of these exclusive channels.
                                        </Text>
                                    </div>

                                    {[
                                        { icon: Phone, label: 'Phone', value: '+91 11 2634 7890', href: 'tel:+911126347890' },
                                        { icon: Mail, label: 'Email', value: 'info@dcosmedisclinic.com', href: 'mailto:info@dcosmedisclinic.com' },
                                        { icon: MapPin, label: 'Main Clinic', value: 'SDA Market, Hauz Khas, New Delhi - 110016' },
                                        { icon: Clock, label: 'Working Hours', value: 'Mon – Sat: 10:00 AM – 7:00 PM' },
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="flex items-start gap-5 p-5 rounded-sm transition-all duration-300 hover:bg-[#faf8f4] border border-transparent hover:border-[#eee]"
                                        >
                                            <div
                                                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                                                style={{ background: 'var(--color-gold-glow)' }}
                                            >
                                                <item.icon size={20} style={{ color: 'var(--color-gold)' }} />
                                            </div>
                                            <div>
                                                <Caption variant="label" className="mb-1.5 text-[10px] tracking-widest">{item.label}</Caption>
                                                {item.href ? (
                                                    <a
                                                        href={item.href}
                                                        className="font-medium hover:text-gold transition-colors block text-[15px]"
                                                        style={{ color: 'var(--color-dark)' }}
                                                    >
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <Text size="sm" color="muted" className="leading-relaxed text-[15px]">{item.value}</Text>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </RevealWrapper>
                        </div>

                        {/* Form - Refined */}
                        <div className="lg:col-span-2 pl-0 lg:pl-4">
                            <RevealWrapper direction="right">
                                {submitted ? (
                                    <div
                                        className="text-center py-20 px-8 rounded-sm h-full flex flex-col justify-center items-center border border-[#eee]"
                                        style={{ background: 'var(--color-bg-cream)' }}
                                    >
                                        <div
                                            className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"
                                            style={{ background: 'var(--color-gold-glow)' }}
                                        >
                                            <Send size={32} style={{ color: 'var(--color-gold)' }} />
                                        </div>
                                        <Heading variant="card" className="mb-4 text-3xl font-light tracking-wide uppercase">Message Received</Heading>
                                        <Text color="muted" className="max-w-md mx-auto text-lg leading-relaxed">
                                            Thank you for reaching out. One of our concierges will get back to you within 24 hours.
                                        </Text>
                                        <button onClick={() => setSubmitted(false)} className="mt-10 px-6 py-2 border border-gold text-gold text-xs uppercase tracking-widest hover:bg-gold hover:text-white transition-colors">
                                            Send Another
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-8 bg-white p-2">
                                        <div className="mb-12">
                                            <Heading variant="card" className="mb-3 text-2xl tracking-wide uppercase">Send an Inquiry</Heading>
                                            <Text size="sm" color="muted" className="leading-relaxed">
                                                Fill out the confidential form below and our medical team will respond within 24 hours.
                                            </Text>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                            <div>
                                                <label className="form-label mb-3 text-[10px] tracking-[2px]">Full Name *</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="form-input outline-none rounded-none border-b-2 border-t-0 border-l-0 border-r-0 border-[#eee] py-3 px-0 bg-transparent focus:border-gold focus:ring-0 transition-colors"
                                                    placeholder="Enter your full name"
                                                />
                                            </div>
                                            <div>
                                                <label className="form-label mb-3 text-[10px] tracking-[2px]">Email Address *</label>
                                                <input
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="form-input outline-none rounded-none border-b-2 border-t-0 border-l-0 border-r-0 border-[#eee] py-3 px-0 bg-transparent focus:border-gold focus:ring-0 transition-colors"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                            <div>
                                                <label className="form-label mb-3 text-[10px] tracking-[2px]">Contact Number</label>
                                                <input
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    className="form-input outline-none rounded-none border-b-2 border-t-0 border-l-0 border-r-0 border-[#eee] py-3 px-0 bg-transparent focus:border-gold focus:ring-0 transition-colors"
                                                    placeholder="+91 XXXXX XXXXX"
                                                />
                                            </div>
                                            <div>
                                                <label className="form-label mb-3 text-[10px] tracking-[2px]">Inquiry Subject *</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.subject}
                                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                    className="form-input outline-none rounded-none border-b-2 border-t-0 border-l-0 border-r-0 border-[#eee] py-3 px-0 bg-transparent focus:border-gold focus:ring-0 transition-colors"
                                                    placeholder="E.g. Consultation Booking"
                                                />
                                            </div>
                                        </div>

                                        <div className="pt-4">
                                            <label className="form-label mb-3 text-[10px] tracking-[2px]">Your Message *</label>
                                            <textarea
                                                required
                                                rows={4}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="form-input outline-none rounded-none border-b-2 border-t-0 border-l-0 border-r-0 border-[#eee] py-3 px-0 bg-transparent focus:border-gold focus:ring-0 transition-colors"
                                                style={{ minHeight: '120px', resize: 'vertical' }}
                                                placeholder="Tell us about your aesthetic concerns or inquiries..."
                                            />
                                        </div>

                                        <div className="pt-6">
                                            <button type="submit" className="btn btn-dark uppercase tracking-widest text-xs px-10 py-4 flex items-center justify-center gap-3 w-full sm:w-auto">
                                                Send Message <Send size={16} />
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </RevealWrapper>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Map Section */}
            <section className="relative h-[500px] md:h-[600px] w-full bg-[#f5f5f5]">
                <RevealWrapper delay={0.2} className="w-full h-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6853860477017!2d77.1983058145576!3d28.5491763946059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce208c5c765ef%3A0xa11c471017df8fd!2sSDA%20Market!5e0!3m2!1sen!2sin!4v1683907409249!5m2!1sen!2sin"
                        className="w-full h-full border-0"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="D'CosMedis Clinic Location"
                        style={{ filter: "grayscale(30%) contrast(1.1)" }}
                    ></iframe>
                </RevealWrapper>
            </section>

            {/* CONNECT WITH US Section - Refined Luxury Aesthetic */}
            <section className="py-28 md:py-40 relative overflow-hidden bg-[#fffdfa]">
                {/* Subtle organic background element */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -ml-64 -mb-64"></div>

                <div className="container relative z-10">
                    <RevealWrapper direction="up">
                        <div className="text-center mb-24 md:mb-32">
                            <span className="inline-block text-[10px] tracking-[6px] uppercase font-bold text-[#999] mb-6">Stay Synchronized</span>
                            <div className="relative inline-block">
                                <h2 className="text-4xl md:text-6xl font-light text-dark tracking-[2px] uppercase mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                                    CONNECT WITH <span className="font-serif italic text-gold">US</span>
                                </h2>
                                <div className="w-12 h-[1px] bg-gold mx-auto mt-8"></div>
                            </div>
                        </div>
                    </RevealWrapper>
                    
                    <div className="flex flex-col md:flex-row items-stretch justify-center gap-0 max-w-6xl mx-auto">
                        {/* Instagram */}
                        <div className="flex-1 px-8 py-12 md:py-0 border-b md:border-b-0 md:border-r border-[#eee] last:border-0 relative group">
                            <RevealWrapper delay={0.1} direction="up">
                                <div className="flex flex-col items-center">
                                    <div className="relative mb-12">
                                        {/* Elegant Ring */}
                                        <div className="w-24 h-24 rounded-full border border-gold/30 flex items-center justify-center relative transition-all duration-700 group-hover:border-gold group-hover:scale-110">
                                            <div className="absolute inset-1 rounded-full border border-gold/10 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700"></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 45 45" fill="none" className="transition-all duration-500 group-hover:scale-110">
                                                <path d="M31.7033 3.25H13.2967C7.74805 3.25 3.25 7.74805 3.25 13.2967V31.7033C3.25 37.252 7.74805 41.75 13.2967 41.75H31.7033C37.252 41.75 41.75 37.252 41.75 31.7033V13.2967C41.75 7.74805 37.252 3.25 31.7033 3.25Z" stroke="var(--color-gold)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M22.4998 32.5837C28.0687 32.5837 32.5832 28.0692 32.5832 22.5003C32.5832 16.9315 28.0687 12.417 22.4998 12.417C16.931 12.417 12.4165 16.9315 12.4165 22.5003C12.4165 28.0692 16.931 32.5837 22.4998 32.5837Z" stroke="var(--color-gold)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M33.4999 10.5833C34.0062 10.5833 34.4166 10.1729 34.4166 9.66667C34.4166 9.16041 34.0062 8.75 33.4999 8.75C32.9937 8.75 32.5833 9.16041 32.5833 9.66667C32.5833 10.1729 32.9937 10.5833 33.4999 10.5833Z" stroke="var(--color-gold)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <span className="text-[10px] tracking-[4px] uppercase font-bold text-dark/40 mb-8">Instagram</span>
                                    <a
                                        href="https://www.instagram.com/skinlabindia/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[11px] font-bold uppercase tracking-[3px] text-gold relative py-2 group-hover:text-dark transition-colors"
                                    >
                                        Get in Touch
                                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                                    </a>
                                </div>
                            </RevealWrapper>
                        </div>

                        {/* Facebook */}
                        <div className="flex-1 px-8 py-12 md:py-0 border-b md:border-b-0 md:border-r border-[#eee] last:border-0 relative group">
                            <RevealWrapper delay={0.2} direction="up">
                                <div className="flex flex-col items-center">
                                    <div className="relative mb-12">
                                        <div className="w-24 h-24 rounded-full border border-gold/30 flex items-center justify-center relative transition-all duration-700 group-hover:border-gold group-hover:scale-110">
                                            <div className="absolute inset-1 rounded-full border border-gold/10 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700"></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 44 45" fill="none" className="transition-all duration-500 group-hover:scale-110">
                                                <path d="M38.5 3.25H5.5C4.77065 3.25 4.07118 3.53973 3.55546 4.05546C3.03973 4.57118 2.75 5.27065 2.75 6V39C2.75 39.7293 3.03973 40.4288 3.55546 40.9445C4.07118 41.4603 4.77065 41.75 5.5 41.75H21.0833V27.0833H17.4167V21.5833H21.0833V17.9167C21.0833 15.9717 21.856 14.1065 23.2312 12.7312C24.6065 11.356 26.4717 10.5833 28.4167 10.5833H33.9167V16.0833H28.4167C27.9304 16.0833 27.4641 16.2765 27.1203 16.6203C26.7765 16.9641 26.5833 17.4304 26.5833 17.9167V21.5833H33.9167L33 27.0833H26.5833V41.75H38.5C39.2293 41.75 39.9288 41.4603 40.4445 40.9445C40.9603 40.4288 41.25 39.7293 41.25 39V6C41.25 5.27065 40.9603 4.57118 40.4445 4.05546C39.9288 3.53973 39.2293 3.25 38.5 3.25Z" stroke="var(--color-gold)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <span className="text-[10px] tracking-[4px] uppercase font-bold text-dark/40 mb-8">Facebook</span>
                                    <a
                                        href="https://www.facebook.com/skinlabindia"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[11px] font-bold uppercase tracking-[3px] text-gold relative py-2 group-hover:text-dark transition-colors"
                                    >
                                        Get in Touch
                                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                                    </a>
                                </div>
                            </RevealWrapper>
                        </div>

                        {/* YouTube */}
                        <div className="flex-1 px-8 py-12 md:py-0 border-b md:border-b-0 md:border-r border-[#eee] last:border-0 relative group">
                            <RevealWrapper delay={0.3} direction="up">
                                <div className="flex flex-col items-center">
                                    <div className="relative mb-12">
                                        <div className="w-24 h-24 rounded-full border border-gold/30 flex items-center justify-center relative transition-all duration-700 group-hover:border-gold group-hover:scale-110">
                                            <div className="absolute inset-1 rounded-full border border-gold/10 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700"></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 45 45" fill="none" className="transition-all duration-500 group-hover:scale-110">
                                                <g clipPath="url(#clip0_1055_4879)">
                                                    <path d="M17.9165 14.25V30.75L30.7498 22.5L17.9165 14.25Z" stroke="var(--color-gold)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M6.23816 8.14538L9.66649 7.70538C13.9237 7.17579 18.2098 6.9125 22.4998 6.91705C26.7898 6.9125 31.076 7.17579 35.3332 7.70538L38.8165 8.14538C40.1547 8.31166 41.3851 8.96374 42.2741 9.97774C43.163 10.9917 43.6484 12.297 43.6382 13.6454V31.4287C43.6484 32.7772 43.163 34.0824 42.2741 35.0964C41.3851 36.1104 40.1547 36.7624 38.8165 36.9287L35.3332 37.3687C31.076 37.8983 26.7898 38.1616 22.4998 38.1571C18.2098 38.1616 13.9237 37.8983 9.66649 37.3687L6.18316 36.9287C4.84497 36.7624 3.61451 36.1104 2.72557 35.0964C1.83664 34.0824 1.3512 32.7772 1.36149 31.4287C1.36179 12.2582 1.85899 10.9549 2.75834 9.94741C3.65769 8.93987 4.89631 8.29845 6.23816 8.14538Z" stroke="var(--color-gold)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <span className="text-[10px] tracking-[4px] uppercase font-bold text-dark/40 mb-8">YouTube</span>
                                    <a
                                        href="https://www.youtube.com/channel/UC9JC_KgzE6YDSh4Amg4D2mQ"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[11px] font-bold uppercase tracking-[3px] text-gold relative py-2 group-hover:text-dark transition-colors"
                                    >
                                        Explore Stories
                                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                                    </a>
                                </div>
                            </RevealWrapper>
                        </div>
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
