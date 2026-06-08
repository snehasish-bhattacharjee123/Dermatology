import { useState } from 'react'
import { Phone, Mail, Send, Instagram, Youtube, Facebook, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { RevealWrapper } from '../../hooks/useAnimations'

const socials = [
    {
        name: 'Instagram',
        handle: '@dcosmedis',
        href: 'https://www.instagram.com/dcosmedicsindia/',
        icon: Instagram,
        bg: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
        cta: 'Get in Touch',
    },
    {
        name: 'Facebook',
        handle: '/dcosmedis',
        href: 'https://www.facebook.com/dcosmedicsindia',
        icon: Facebook,
        bg: 'linear-gradient(135deg, #1877f2, #42a5f5)',
        cta: 'Get in Touch',
    },
    {
        name: 'YouTube',
        handle: "D'CosMedis TV",
        href: 'https://www.youtube.com/channel/UC9JC_KgzE6YDSh4Amg4D2mQ',
        icon: Youtube,
        bg: 'linear-gradient(135deg, #ff0000, #ff6b6b)',
        cta: 'Explore Stories',
    },
]

// Award images — using Dr Jamuna Pai / clinic award placeholders
const awards = [
    {
        image: 'https://dcosmedics.in/wp-content/uploads/2025/01/award-elle-beauty.webp',
        alt: 'ELLE Beauty Award',
        title: 'ELLE Beauty Award',
        year: '2024',
    },
    {
        image: 'https://dcosmedics.in/wp-content/uploads/2025/01/award-femina.webp',
        alt: 'Femina Beauty Award',
        title: 'Femina Beauty Award',
        year: '2023',
    },
    {
        image: 'https://dcosmedics.in/wp-content/uploads/2025/01/award-vogue.webp',
        alt: 'Vogue Beauty Award',
        title: 'Vogue Beauty Award',
        year: '2023',
    },
]

// ===== CONTACT FORM HOME SECTION =====
export function HomeContactSection() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
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
        <section style={{ background: '#EDE8D0', padding: '4rem 0' }}>
            <style>{`
                .hct-input {
                    width: 100%;
                    padding: 0.9rem 1rem;
                    font-family: var(--font-body);
                    font-size: 0.9375rem;
                    color: var(--color-dark);
                    background: #F5F0DC;
                    border: 1px solid #c8bc9c;
                    outline: none;
                    border-radius: 0;
                    transition: border-color 0.3s, box-shadow 0.3s;
                }
                .hct-input:focus { border-color: #5A262C; box-shadow: 0 0 0 3px rgba(149, 71, 149, 0.12); }
                .hct-input::placeholder { color: #a09880; }
                .hct-submit {
                    width: 100%;
                    padding: 1rem;
                    background: var(--color-wine);
                    color: var(--color-accent);
                    font-size: 0.7rem;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    font-weight: 700;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.75rem;
                    transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
                    margin-top: 0.5rem;
                }
                .hct-submit:hover { 
                    background: var(--color-wine-dark); 
                    transform: translateY(-2px);
                    box-shadow: 0 6px 16px rgba(90, 38, 44, 0.25);
                }
                .hct-submit:disabled { opacity: 0.6; cursor: not-allowed; }
                
                .hct-reset-btn {
                    background: transparent;
                    border: 1px solid var(--color-wine);
                    color: var(--color-wine);
                    padding: 0.65rem 1.75rem;
                    font-size: 0.65rem;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
                }
                .hct-reset-btn:hover {
                    background: var(--color-wine);
                    color: var(--color-accent);
                    transform: translateY(-1px);
                    box-shadow: 0 4px 10px rgba(90, 38, 44, 0.15);
                }

                .hct-book-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: var(--color-wine);
                    color: var(--color-accent);
                    padding: 0.85rem 2.25rem;
                    font-size: 0.7rem;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    font-weight: 700;
                    transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
                    border: none;
                    cursor: pointer;
                    text-decoration: none;
                }
                .hct-book-btn:hover {
                    background: var(--color-wine-dark);
                    color: var(--color-accent);
                    transform: translateY(-2px);
                    box-shadow: 0 6px 16px rgba(90, 38, 44, 0.25);
                }
            `}</style>
            <div className="container max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                    {/* Left Side: Image (hidden on mobile) */}
                    <RevealWrapper className="hidden md:block h-full">
                        <div className="w-full h-full min-h-[500px] rounded-2xl overflow-hidden shadow-lg border border-[#c8bc9c]">
                            <img 
                                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80" 
                                alt="Contact Clinic" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </RevealWrapper>

                    {/* Right Side: Form */}
                    <div className="w-full max-w-[44rem] mx-auto">
                        <RevealWrapper>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <span style={{ display: 'block', fontSize: '0.625rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700, color: '#5A262C', marginBottom: '0.75rem' }}>
                            Get In Touch
                        </span>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 2.75rem)', color: 'var(--color-dark)', marginBottom: '0.5rem', lineHeight: 1.15 }}>
                            CONTACT US
                        </h2>
                    </div>
                </RevealWrapper>

                {submitted ? (
                    <RevealWrapper>
                        <div style={{ textAlign: 'center', padding: '3rem 2rem', background: '#F5F0DC', border: '1px solid #c8bc9c' }}>
                            <div style={{ width: '4rem', height: '4rem', borderRadius: '50%', background: 'rgba(149, 71, 149,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                                <CheckCircle size={28} style={{ color: '#5A262C' }} />
                            </div>
                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--color-dark)', marginBottom: '0.5rem' }}>Message Received!</h3>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                                Thank you! Our team will get back to you within 24 hours.
                            </p>
                             <button onClick={() => setSubmitted(false)} className="hct-reset-btn">
                                Send Another
                             </button>
                        </div>
                    </RevealWrapper>
                ) : (
                    <RevealWrapper>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                                    Name
                                </label>
                                <input className="hct-input" type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Enter your full name" />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                                    Email
                                </label>
                                <input className="hct-input" type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Enter your email address" />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                                    Phone Number
                                </label>
                                <input className="hct-input" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />
                            </div>
                            <button type="submit" className="hct-submit" disabled={loading}>
                                {loading ? 'Sending…' : <><Send size={14} /> Submit</>}
                            </button>
                        </form>

                        {/* Quick contact info */}
                        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', alignItems: 'center' }}>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
                                <a href="tel:+918080125874" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-dark)', fontWeight: 500 }}>
                                    <Phone size={14} style={{ color: '#5A262C' }} /> +91 8080 125 874
                                </a>
                                <a href="tel:+917738891858" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-dark)', fontWeight: 500 }}>
                                    <MessageCircle size={14} style={{ color: '#5A262C' }} /> +91 7738 891 858
                                </a>
                            </div>
                            <a href="mailto:query@dcosmedics.in" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-dark)', fontWeight: 500 }}>
                                <Mail size={14} style={{ color: '#5A262C' }} /> query@dcosmedics.in
                            </a>
                        </div>

                        {/* Book Appointment CTA */}
                        <div style={{ marginTop: '2rem', textAlign: 'center', padding: '2rem', background: '#F5F0DC', border: '1px solid #c8bc9c' }}>
                            <p style={{ fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, color: '#5A262C', marginBottom: '0.5rem' }}>
                                Interested in consulting with Dcosmedics Clinic
                            </p>
                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: 'var(--color-dark)', marginBottom: '1.25rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                                BOOK AN<br />APPOINTMENT
                            </h3>
                             <Link to="/book" className="hct-book-btn">
                                 Book An Appointment <ArrowRight size={13} />
                             </Link>
                        </div>
                    </RevealWrapper>
                )}
                    </div>
                </div>
            </div>
        </section>
    )
}

// ===== CONNECT WITH US SECTION =====
export function ConnectWithUsSection() {
    return (
        <section style={{ background: '#5A262C', padding: '4.5rem 0', color: '#EDE8D0' }}>
            <div className="container" style={{ maxWidth: '50rem' }}>
                <RevealWrapper>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ display: 'block', fontSize: '0.6rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700, color: 'rgba(237, 232, 208, 0.8)', marginBottom: '1rem' }}>
                            Stay Connected
                        </span>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 2.75rem)', color: '#EDE8D0', marginBottom: '1rem', lineHeight: 1.15 }}>
                            CONNECT WITH US
                        </h2>
                        <p style={{ fontSize: '0.95rem', color: 'rgba(237, 232, 208, 0.9)', maxWidth: '400px', margin: '0 auto', lineHeight: 1.6 }}>
                            Follow us for skincare tips, before-and-after stories, and exclusive offers.
                        </p>
                    </div>

                    {/* Social Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {socials.map((s, i) => (
                            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                                className="group flex flex-row md:flex-col items-center md:justify-center p-5 md:p-8 rounded-xl transition-all duration-500 overflow-hidden relative"
                                style={{ background: 'rgba(237, 232, 208, 0.05)', border: '1px solid rgba(237, 232, 208, 0.2)' }}
                                aria-label={s.name}
                            >
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" style={{ background: s.bg }}></div>
                                <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mr-4 md:mr-0 md:mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-[#5A262C]" style={{ background: 'rgba(237, 232, 208, 0.1)', color: '#EDE8D0' }}>
                                    <s.icon size={22} strokeWidth={1.5} />
                                </div>
                                <div className="relative z-10 flex flex-col items-start md:items-center flex-1">
                                    <span className="text-white group-hover:text-white transition-colors" style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '1px', marginBottom: '0.15rem' }}>{s.name}</span>
                                    <span className="text-white/60 group-hover:text-white/90 transition-colors" style={{ fontSize: '0.75rem' }}>{s.handle}</span>
                                </div>
                                <div className="relative z-10 md:mt-4 flex items-center justify-center gap-2 group-hover:translate-x-1 transition-transform group-hover:text-white text-[#EDE8D0]" style={{ fontSize: '0.7rem', letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: 700 }}>
                                    <span className="hidden md:inline">{s.cta}</span> <ArrowRight size={14} />
                                </div>
                            </a>
                        ))}
                    </div>
                </RevealWrapper>
            </div>
        </section>
    )
}

// ===== AWARDS & RECOGNITION SECTION =====
export function AwardsSection() {
    return (
        <section style={{ background: '#EDE8D0', padding: '4rem 0' }}>
            <div className="container" style={{ maxWidth: '50rem' }}>
                <RevealWrapper>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <span style={{ display: 'block', fontSize: '0.625rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700, color: '#5A262C', marginBottom: '0.75rem' }}>
                            Our Achievements
                        </span>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', color: 'var(--color-dark)', letterSpacing: '3px', textTransform: 'uppercase', lineHeight: 1.15 }}>
                            AWARDS AND<br />RECOGNITION
                        </h2>
                        <div style={{ width: '50px', height: '2px', background: '#5A262C', margin: '1.25rem auto 0' }} />
                    </div>
                </RevealWrapper>

                {/* Award Image Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
                    {awards.map((award, i) => (
                        <RevealWrapper key={i} direction="up" delay={i * 0.1}>
                            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                                <img
                                    src={award.image}
                                    alt={award.alt}
                                    loading="lazy"
                                    decoding="async"
                                    style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
                                    onError={(e) => {
                                        // Fallback if image fails to load
                                        e.target.style.display = 'none'
                                        e.target.parentElement.style.background = '#F5F0DC'
                                        e.target.parentElement.style.display = 'flex'
                                        e.target.parentElement.style.alignItems = 'center'
                                        e.target.parentElement.style.justifyContent = 'center'
                                        e.target.parentElement.style.height = '220px'
                                    }}
                                />
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)', padding: '1rem 0.75rem 0.75rem' }}>
                                    <p style={{ color: '#EDE8D0', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', margin: 0 }}>{award.title}</p>
                                    <p style={{ color: 'rgba(237,232,208,0.7)', fontSize: '0.6rem', margin: '0.15rem 0 0' }}>{award.year}</p>
                                </div>
                            </div>
                        </RevealWrapper>
                    ))}
                </div>

                {/* Full-width Doctor Award Photo */}
                <RevealWrapper>
                    <div style={{ marginTop: '1.5rem', position: 'relative', overflow: 'hidden', borderRadius: '4px', boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }}>
                        <img
                            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
                            alt="Doctor with award"
                            loading="lazy"
                            decoding="async"
                            style={{ width: '100%', height: '300px', objectFit: 'cover', objectPosition: 'top center' }}
                        />
                        <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)', padding: '0.5rem 1rem', borderRadius: '4px' }}>
                            <p style={{ color: '#EDE8D0', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', margin: 0 }}>Winner • ELLE Beauty Expert</p>
                        </div>
                    </div>
                </RevealWrapper>
            </div>
        </section>
    )
}
