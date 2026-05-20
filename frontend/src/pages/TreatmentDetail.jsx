import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronDown, Play, MessageCircle, Calendar, Instagram, Facebook, Youtube } from 'lucide-react'
import { RevealWrapper } from '../hooks/useAnimations'
import { treatments } from '../data/siteData'

const faqs = [
    {
        q: "How do I know if this treatment is right for me?",
        a: "During your initial consultation, our aesthetic doctors will thoroughly assess your condition, discuss your concerns, and recommend the most effective treatment plan tailored specifically for you."
    },
    {
        q: "Are the treatments painful?",
        a: "Patient comfort is our priority. Most treatments involve minimal discomfort. For procedures that might be sensitive, we use medical-grade topical numbing creams to ensure a comfortable, pain-free experience."
    },
    {
        q: "Is there any downtime?",
        a: "Downtime varies by treatment. Many of our advanced procedures have zero to minimal downtime, allowing you to return to normal activities immediately. We will provide specific post-care instructions during your visit."
    },
    {
        q: "How many sessions will I need?",
        a: "The number of sessions depends on the specific treatment and your individual goals. We typically recommend a personalised course of treatments for optimal, long-lasting results."
    },
    {
        q: "Are your treatments safe?",
        a: "All treatments offered at D'CosMedis use only USFDA-approved technology administered by board-certified dermatologists. Your safety, comfort, and satisfaction are our absolute top priorities."
    },
]

export default function TreatmentDetail() {
    const { slug } = useParams()
    const [openFaq, setOpenFaq] = useState(0)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [slug])

    const treatment = treatments.find((t) => t.slug === slug)

    if (!treatment) {
        return (
            <div style={{ background: '#fff', paddingTop: '10rem', paddingBottom: '8rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '60vh' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--color-dark)', marginBottom: '1.5rem' }}>Treatment Not Found</h2>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>The treatment you're looking for doesn't exist.</p>
                <Link to="/treatments" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--color-dark)', color: '#fff', padding: '1rem 2rem', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700 }}>
                    Back to Treatments
                </Link>
            </div>
        )
    }

    return (
        <div style={{ background: '#fff' }}>
            <style>{`
                .td-container { max-width: 1400px; margin: 0 auto; padding: 0 5%; }
                .td-container-sm { max-width: 1000px; margin: 0 auto; padding: 0 5%; }
                .td-section { padding: clamp(4rem, 8vw, 6rem) 0; }
                
                .td-heading-sm { font-size: 0.65rem; letter-spacing: 3px; color: var(--color-wine); text-transform: uppercase; margin-bottom: 0.75rem; font-weight: 600; text-align: center; }
                .td-heading-lg { font-size: clamp(2.25rem, 5vw, 4rem); font-family: var(--font-heading); color: var(--color-dark); text-transform: uppercase; margin-bottom: 1.5rem; font-weight: 300; line-height: 1.1; text-align: center; letter-spacing: 2px; }
                .td-text-center { font-size: clamp(1rem, 1.5vw, 1.125rem); line-height: 1.85; color: #555; font-weight: 300; text-align: center; max-width: 900px; margin: 0 auto; }
                
                .td-content p { font-size: clamp(1rem, 1.5vw, 1.125rem); line-height: 1.85; color: #555; font-weight: 300; margin-bottom: 1.5rem; text-align: center; }
                .td-content ul { padding-left: 1.5rem; margin-bottom: 1.5rem; display: inline-block; text-align: left; }
                .td-content li { font-size: clamp(1rem, 1.5vw, 1.125rem); line-height: 1.8; color: #555; font-weight: 300; margin-bottom: 0.5rem; }
                
                .td-sub-title { font-size: clamp(1.5rem, 3vw, 2.25rem); font-family: var(--font-heading); color: var(--color-dark); text-transform: uppercase; margin-bottom: 0.5rem; letter-spacing: 1px; font-weight: 300; }
                .td-sub-text { font-size: clamp(0.9375rem, 1.5vw, 1.0625rem); line-height: 1.85; color: #555; font-weight: 300; text-align: left; }
                .td-sub-text p { margin-bottom: 1.25rem; text-align: left; }
                .td-sub-text ul { padding-left: 1.5rem; margin-bottom: 1.5rem; color: var(--color-wine); }
                .td-sub-text li { color: #555; margin-bottom: 0.5rem; }
                .td-sub-text strong { color: var(--color-dark); font-weight: 500; }

                /* FAQ Styles */
                .td-faq-item { border-bottom: 1px solid rgba(114,47,55,0.15); }
                .td-faq-btn { width: 100%; display: flex; align-items: center; justify-content: space-between; padding: clamp(1.25rem, 2vw, 1.75rem) 0; cursor: pointer; background: none; border: none; text-align: left; }
                .td-chevron { width: 2.5rem; height: 2.5rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: transform 0.3s; color: var(--color-wine); }
                
                /* Video Play Hover */
                .td-play-btn { width: clamp(4rem, 8vw, 5.5rem); height: clamp(4rem, 8vw, 5.5rem); background: rgba(255,255,255,0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s; }
                .td-play-btn:hover { transform: scale(1.1); background: var(--color-wine); }
                .td-play-btn:hover svg { fill: #fff !important; color: #fff !important; }

                /* ── Hero ── */
                .td-hero {
                    position: relative;
                    min-height: clamp(340px, 60vw, 540px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }
                @media (max-width: 640px) {
                    .td-hero {
                        min-height: clamp(280px, 65vw, 400px);
                        align-items: flex-end;
                        padding-bottom: 2rem;
                    }
                }
                @media (min-width: 768px) {
                    .td-hero {
                        min-height: clamp(480px, 55vw, 600px);
                    }
                }
                .td-hero-bg {
                    position: absolute; inset: 0; z-index: 0;
                }
                .td-hero-bg img {
                    width: 100%; height: 100%; object-fit: cover; object-position: center;
                }
                .td-hero-overlay {
                    position: absolute; inset: 0; background: rgba(0,0,0,0.48);
                }
                .td-hero-content {
                    position: relative; z-index: 1; text-align: center; color: #fff;
                    width: 100%;
                    padding: calc(var(--header-total-height) + 1.5rem) 1rem 2rem;
                }
            `}</style>

            {/* 1. HERO SECTION */}
            <section className="td-hero">
                <div className="td-hero-bg">
                    <img src={treatment.image} alt={treatment.title} />
                    <div className="td-hero-overlay" />
                </div>

                <div className="td-hero-content container">
                    <RevealWrapper direction="up">
                        {/* Breadcrumb */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                            <Link to="/" style={{ fontSize: 'clamp(0.55rem, 1.5vw, 0.65rem)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Home</Link>
                            <span style={{ color: 'rgba(255,255,255,0.25)' }}>/</span>
                            <Link to="/treatments" style={{ fontSize: 'clamp(0.55rem, 1.5vw, 0.65rem)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Treatments</Link>
                            <span style={{ color: 'rgba(255,255,255,0.25)' }}>/</span>
                            <span style={{ fontSize: 'clamp(0.55rem, 1.5vw, 0.65rem)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, color: 'var(--color-wine)' }}>{treatment.title}</span>
                        </div>

                        <span style={{ display: 'inline-block', fontSize: 'clamp(0.5rem, 1.3vw, 0.625rem)', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-wine)', background: 'rgba(114,47,55,0.12)', border: '1px solid rgba(114,47,55,0.3)', borderRadius: '9999px', padding: '0.4rem 1.25rem', marginBottom: '1rem' }}>
                            {treatment.category}
                        </span>

                        <h1 style={{ fontFamily: 'var(--font-heading)', color: '#fff', letterSpacing: 'clamp(2px, 1.5vw, 4px)', textTransform: 'uppercase', fontSize: 'clamp(1.85rem, 7vw, 4.5rem)', lineHeight: 1.05, marginBottom: '1rem', fontStyle: 'italic', fontWeight: 700 }}>
                            {treatment.title}
                        </h1>

                        <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 'clamp(0.82rem, 2vw, 1.1rem)', fontWeight: 300, maxWidth: '38rem', margin: '0 auto', lineHeight: 1.75 }}>
                            {treatment.shortDescription}
                        </p>
                    </RevealWrapper>
                </div>
            </section>

            {/* 2. WHAT IS SECTION */}
            <section className="td-section">
                <div className="td-container-sm">
                    <RevealWrapper direction="up">
                        <h2 className="td-heading-lg" style={{ marginBottom: '2rem' }}>{treatment.category}</h2>
                        <div className="td-content" dangerouslySetInnerHTML={{ __html: treatment.description }} />
                    </RevealWrapper>
                </div>
            </section>

            {/* 3. THE ADVANTAGE SECTION */}
            <section className="td-section" style={{ background: 'var(--color-bg-cream)' }}>
                <div className="td-container-sm">
                    <RevealWrapper direction="up">
                        <div className="td-heading-sm">The D'CosMedis New Image</div>
                        <h2 className="td-heading-lg">SkinLab <span style={{ color: 'var(--color-wine)', fontStyle: 'italic' }}>Advantage</span></h2>
                        <p className="td-text-center">
                            With over 30 years of experience, D'CosMedis offers science-led solutions that deliver results. We work to identify the underlying cause before treatment. We combine medical-grade treatments with advanced technologies tailored specifically for your skin. Every treatment plan is customised for visible, long-lasting results—with minimal downtime and maximum care.
                        </p>
                    </RevealWrapper>
                </div>
            </section>

            {/* 4. VIDEO SECTION (Full Width Layout) */}
            <section className="td-section" style={{ paddingTop: 'clamp(2rem, 5vw, 4rem)' }}>
                <div className="td-container">
                    <RevealWrapper direction="up">
                        <div style={{ position: 'relative', width: '100%', height: 'clamp(400px, 50vw, 600px)', borderRadius: '4px', overflow: 'hidden' }}>
                            <img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1600&q=80" alt="Dr Dolly Gupta" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.1) 100%)' }} />
                            
                            {/* Play Button Center */}
                            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <a href="https://www.youtube.com/@dcosmedis" target="_blank" rel="noopener noreferrer" className="td-play-btn">
                                    <Play size={32} fill="var(--color-wine)" style={{ color: 'var(--color-wine)', marginLeft: '6px', transition: 'all 0.3s' }} />
                                </a>
                            </div>

                            {/* Text Overlay Bottom Left */}
                            <div style={{ position: 'absolute', bottom: '0', left: '0', padding: 'clamp(1.5rem, 4vw, 4rem)', width: '100%', maxWidth: '800px' }}>
                                <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontStyle: 'italic', marginBottom: '0.75rem', lineHeight: 1.1 }}>
                                    All you need to know with Dr. Dolly Gupta
                                </h3>
                                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)', lineHeight: 1.6, fontWeight: 300, marginBottom: '1.5rem' }}>
                                    Dr. Dolly Gupta, India's leading Cosmetic Physician and Dermatologist, shares her expert insights on how to get and maintain the best skin of your life.
                                </p>
                                <a href="https://www.youtube.com/@dcosmedis" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', color: '#fff', border: '1px solid rgba(255,255,255,0.4)', padding: '0.75rem 1.5rem', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', transition: 'background 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-wine)'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}>
                                    Visit Channel
                                </a>
                            </div>
                        </div>
                    </RevealWrapper>
                </div>
            </section>

            {/* 5. SUB TREATMENTS SECTION (Left Aligned, Full Width Text) */}
            {treatment.subTreatments && treatment.subTreatments.length > 0 && (
                <section className="td-section" style={{ paddingTop: '2rem' }}>
                    <div className="td-container">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(3rem, 6vw, 5rem)' }}>
                            {treatment.subTreatments.map((sub, idx) => (
                                <RevealWrapper key={idx} direction="up" delay={0.1}>
                                    <div style={{ paddingBottom: 'clamp(2rem, 4vw, 4rem)', borderBottom: idx !== treatment.subTreatments.length - 1 ? '1px solid #eaeaea' : 'none' }}>
                                        <h3 className="td-sub-title">{sub.title}</h3>
                                        {/* Optional Subtitle if we wanted to parse it, but for now we just render description */}
                                        <div className="td-sub-text" dangerouslySetInnerHTML={{ __html: `<p>${sub.description}</p>` }} />
                                    </div>
                                </RevealWrapper>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 6. FAQs */}
            <section className="td-section" style={{ background: 'var(--color-bg-cream)' }}>
                <div className="td-container-sm">
                    <RevealWrapper direction="up">
                        <div className="td-heading-sm">Ask Us Anything</div>
                        <h2 className="td-heading-lg">Frequently Asked Questions</h2>
                        
                        <div style={{ marginTop: '3rem' }}>
                            {faqs.map((faq, i) => (
                                <div key={i} className="td-faq-item">
                                    <button className="td-faq-btn" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                                        <span style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', color: openFaq === i ? 'var(--color-wine)' : 'var(--color-dark)', transition: 'color 0.3s', paddingRight: '1rem', fontWeight: 400 }}>
                                            {faq.q}
                                        </span>
                                        <div className="td-chevron" style={{ transform: openFaq === i ? 'rotate(180deg)' : 'none' }}>
                                            <ChevronDown size={24} />
                                        </div>
                                    </button>
                                    <div style={{ display: 'grid', gridTemplateRows: openFaq === i ? '1fr' : '0fr', opacity: openFaq === i ? 1 : 0, transition: 'all 0.3s ease' }}>
                                        <div style={{ overflow: 'hidden' }}>
                                            <div style={{ padding: '0 0 2rem 0' }}>
                                                <p className="td-sub-text">{faq.a}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealWrapper>
                </div>
            </section>

            {/* 7. CTA BANNER (Image Background like screenshot) */}
            <section style={{ position: 'relative', padding: 'clamp(4rem, 8vw, 6rem) 0', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0 }}>
                    <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1920&q=80" alt="Consultation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.65)' }} />
                </div>
                
                <div className="td-container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                    <RevealWrapper direction="up">
                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#fff', marginBottom: '2.5rem', fontWeight: 300, fontStyle: 'italic', letterSpacing: '1px' }}>
                            Interested in consulting with D'CosMedis Clinic? We have great deals for you.
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                            <a href="https://wa.me/917738891858" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.6)', padding: '1rem 2rem', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', backdropFilter: 'blur(4px)', transition: 'background 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                                Chat on WhatsApp
                            </a>
                            <Link to="/book" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.6)', padding: '1rem 2rem', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', backdropFilter: 'blur(4px)', transition: 'background 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                                Get your Appointment
                            </Link>
                        </div>
                    </RevealWrapper>
                </div>
            </section>
        </div>
    )
}


