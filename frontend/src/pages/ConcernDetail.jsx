import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronDown, ArrowRight, Calendar, Phone } from 'lucide-react'
import { RevealWrapper } from '../hooks/useAnimations'
import { Heading, Text, Caption } from '../components/ui/Typography'
import { concerns, treatments } from '../data/siteData'
import CtaBanner from '../components/ui/CtaBanner'

export default function ConcernDetail() {
    const { slug } = useParams()
    const [openFaq, setOpenFaq] = useState(0)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const concern = concerns.find((c) => c.slug === slug)

    if (!concern) {
        return (
            <div style={{ background: '#fff', paddingTop: '12rem', paddingBottom: '8rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '70vh' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--color-dark)', marginBottom: '1.5rem' }}>Concern Not Found</h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem', marginBottom: '2.5rem' }}>
                    The skin/hair concern you're looking for doesn't exist or has been moved.
                </p>
                <Link to="/concerns" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-wine)', color: '#fff', padding: '1rem 2rem', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>
                    Back to Concerns
                </Link>
            </div>
        )
    }

    const relatedTreatments = treatments.filter((t) => concern.treatments.includes(t.slug))

    const faqs = [
        {
            q: `What causes ${concern.name.toLowerCase()}?`,
            a: "This condition can be triggered by a variety of factors including genetics, hormonal changes, environmental stress, and lifestyle habits. During your consultation, our doctors will perform a detailed assessment to identify the root cause of your specific concern."
        },
        {
            q: "How soon can I expect to see results?",
            a: "Results timeline depends on the severity of the condition and the customized treatment plan we formulate. Some patients notice improvements after their very first session, while deeper concerns may require a few weeks for optimal visible changes."
        },
        {
            q: "Are the treatments customizable?",
            a: "Absolutely. We do not believe in a one-size-fits-all approach. Every treatment protocol is meticulously tailored to your unique skin type, sensitivity levels, and aesthetic goals."
        },
        {
            q: "Is it safe for sensitive skin?",
            a: "Yes. Our expert dermatologists carefully evaluate your skin's barrier function before recommending any procedure, ensuring the utmost safety and efficacy without compromising patient comfort."
        }
    ]

    const firstSentence = concern.description.split('.')[0] + '.'
    const restOfDescription = concern.description.substring(concern.description.indexOf('.') + 1).trim()

    return (
        <div style={{ background: '#fff' }}>
            {/* Shared styles for this page */}
            <style>{`
                .cd-wine { color: var(--color-wine); }
                .cd-dark { color: var(--color-dark); }
                .cd-muted { color: var(--color-text-muted); }
                .cd-cream { background-color: var(--color-bg-cream); }
                .cd-dark-bg { background-color: var(--color-bg-dark); }
                .cd-white-bg { background-color: #fff; }
                .cd-wine-bg { background-color: var(--color-wine); }
                .cd-border-wine { border-color: var(--color-wine); }
                .cd-faq-btn { width: 2rem; height: 2rem; border-radius: 9999px; border: 1px solid #ddd; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: all 0.3s; }
                .cd-faq-btn.open { border-color: var(--color-wine); background: var(--color-wine); color: #fff; transform: rotate(180deg); }
                .cd-faq-q { font-size: 1.125rem; font-family: var(--font-heading); transition: color 0.3s; color: var(--color-dark); }
                .cd-faq-q.open { color: var(--color-wine); }
                .cd-treatment-card { display: block; background: #fff; border: 1px solid #f0ede8; overflow: hidden; transition: all 0.5s; }
                .cd-treatment-card:hover { box-shadow: 0 25px 50px rgba(0,0,0,0.12); transform: translateY(-8px); }
                .cd-treatment-card:hover .cd-card-title { color: var(--color-wine); }
                .cd-tag { position: absolute; top: 1.5rem; left: 1.5rem; padding: 0.35rem 1rem; font-size: 0.625rem; letter-spacing: 2px; text-transform: uppercase; color: #fff; font-weight: 700; background: var(--color-dark); }
                .cd-discover { display: flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; letter-spacing: 2px; text-transform: uppercase; font-weight: 700; color: var(--color-dark); transition: color 0.3s; }
                .cd-treatment-card:hover .cd-discover { color: var(--color-wine); }
                .cd-view-all { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: var(--color-dark); border-bottom: 2px solid var(--color-dark); padding-bottom: 0.5rem; transition: all 0.3s; }
                .cd-view-all:hover { color: var(--color-wine); border-color: var(--color-wine); }
                .cd-book-btn { display: inline-flex; align-items: center; justify-content: center; background: var(--color-wine); color: #fff; padding: 1.25rem 2.5rem; font-size: 0.75rem; letter-spacing: 2px; text-transform: uppercase; font-weight: 600; transition: all 0.3s; }
                .cd-book-btn:hover { background: var(--color-wine); opacity: 0.9; transform: scale(1.03); }
                @media (max-width: 640px) {
                    .cd-book-btn { width: 100%; }
                }

                /* ── Hero ── */
                .cd-hero {
                    position: relative;
                    min-height: clamp(340px, 60vw, 540px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }
                @media (max-width: 640px) {
                    .cd-hero {
                        min-height: clamp(280px, 65vw, 400px);
                        align-items: flex-end;
                        padding-bottom: 2rem;
                    }
                }
                @media (min-width: 768px) {
                    .cd-hero {
                        min-height: clamp(480px, 55vw, 600px);
                    }
                }
                .cd-hero-bg {
                    position: absolute; inset: 0; z-index: 0;
                }
                .cd-hero-bg img {
                    width: 100%; height: 100%; object-fit: cover; object-position: center;
                }
                .cd-hero-overlay {
                    position: absolute; inset: 0; background: rgba(0,0,0,0.48);
                }
                .cd-hero-content {
                    position: relative; z-index: 1; text-align: center; color: #fff;
                    width: 100%;
                    padding: calc(var(--header-total-height) + 1.5rem) 1rem 2rem;
                }
            `}</style>

            {/* Hero Section */}
            <section className="cd-hero">
                <div className="cd-hero-bg">
                    <img src={concern.image} alt={concern.name} />
                    <div className="cd-hero-overlay" />
                </div>

                <div className="cd-hero-content container">
                    <RevealWrapper direction="up" className="max-w-3xl" style={{ margin: '0 auto' }}>
                        {/* Breadcrumb */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                            <Link to="/" style={{ fontSize: 'clamp(0.55rem, 1.5vw, 0.65rem)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Home</Link>
                            <span style={{ color: 'rgba(255,255,255,0.25)' }}>/</span>
                            <Link to="/concerns" style={{ fontSize: 'clamp(0.55rem, 1.5vw, 0.65rem)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Concerns</Link>
                            <span style={{ color: 'rgba(255,255,255,0.25)' }}>/</span>
                            <span style={{ fontSize: 'clamp(0.55rem, 1.5vw, 0.65rem)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, color: 'var(--color-wine)' }}>{concern.name}</span>
                        </div>

                        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.4rem 1rem', border: '1px solid rgba(114,47,55,0.4)', borderRadius: '9999px', marginBottom: '1.5rem', backdropFilter: 'blur(8px)', background: 'rgba(0,0,0,0.2)' }}>
                            <span className="cd-wine" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{concern.icon}</span>
                            <span style={{ fontSize: '0.625rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700, color: '#fff' }}>Targeted Solution</span>
                        </div>

                        <h1 style={{ fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '4px', color: '#fff', marginBottom: '1rem', fontSize: 'clamp(1.85rem, 7vw, 4.5rem)', lineHeight: 1.05 }}>
                            {(() => {
                                const words = concern.name.split(' ')
                                if (words.length === 1) return <span style={{ fontWeight: 300 }}>{words[0]}</span>
                                const firstWord = words[0]
                                const restWords = words.slice(1).join(' ')
                                return (
                                    <>
                                        <span style={{ fontWeight: 300, color: 'rgba(255,255,255,0.9)' }}>{firstWord} </span>
                                        <span style={{ fontWeight: 700, color: 'var(--color-wine)', fontStyle: 'italic' }}>{restWords}</span>
                                    </>
                                )
                            })()}
                        </h1>

                        <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 'clamp(0.82rem, 2vw, 1.1rem)', fontWeight: 300, maxWidth: '38rem', margin: '0 auto 2rem', lineHeight: 1.75 }}>
                            {concern.shortDescription}
                        </p>

                        <Link to="/book" className="cd-book-btn">
                            Book Consultation
                        </Link>
                    </RevealWrapper>
                </div>
            </section>

            {/* Overview */}
            <section className="cd-cream" style={{ padding: '6rem 0' }}>
                <div className="container" style={{ maxWidth: '56rem' }}>
                    <RevealWrapper>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <span style={{ display: 'inline-block', fontSize: '0.625rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-wine)', marginBottom: '1rem' }}>
                                Understanding The Condition
                            </span>
                            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-dark)' }}>
                                <span style={{ fontStyle: 'italic', color: 'var(--color-wine)' }}>About</span> The Concern
                            </h2>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', color: 'var(--color-dark)', marginBottom: '2rem', lineHeight: 1.7, fontStyle: 'italic' }}>
                                "{firstSentence}"
                            </p>
                            <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-muted)', lineHeight: 1.85, fontWeight: 300 }}>
                                {restOfDescription}
                            </p>
                        </div>
                    </RevealWrapper>
                </div>
            </section>

            {/* Recommended Treatments */}
            {relatedTreatments.length > 0 && (
                <section style={{ padding: '6rem 0', background: '#fff' }}>
                    <div className="container" style={{ maxWidth: '90rem' }}>
                        <RevealWrapper>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem' }}>
                                <span style={{ fontSize: '0.625rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700, color: '#888' }}>
                                    Tailored Solutions
                                </span>
                                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem' }}>
                                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-dark)' }}>
                                        Recommended <span style={{ fontStyle: 'italic', color: 'var(--color-wine)' }}>Treatments</span>
                                    </h2>
                                    <Link to="/treatments" className="cd-view-all">
                                        View All Treatments <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </RevealWrapper>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                            {relatedTreatments.map((t, i) => (
                                <RevealWrapper key={t.id} direction="up" delay={i * 0.1}>
                                    <Link to={`/treatments/${t.slug}`} className="cd-treatment-card">
                                        <div style={{ overflow: 'hidden', position: 'relative', height: '300px' }}>
                                            <img
                                                src={t.image}
                                                alt={t.title}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1s ease-out' }}
                                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
                                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                            />
                                            <span className="cd-tag">{t.category}</span>
                                        </div>
                                        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                            <h3 className="cd-card-title" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.375rem', color: 'var(--color-dark)', transition: 'color 0.3s' }}>
                                                {t.title}
                                            </h3>
                                            <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--color-text-muted)', fontWeight: 300 }}>
                                                {t.shortDescription.slice(0, 120)}…
                                            </p>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1.5rem', borderTop: '1px solid #f0ede8', marginTop: '0.5rem' }}>
                                                <span className="cd-discover">
                                                    Discover More <ArrowRight size={14} />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </RevealWrapper>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* D'CosMedis Advantage */}
            <section style={{ padding: '6rem 0', background: 'var(--color-bg-dark)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.08, filter: 'blur(60px)' }}>
                    <img src={concern.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="container" style={{ maxWidth: '60rem', position: 'relative', zIndex: 1 }}>
                    <RevealWrapper delay={0.1}>
                        <span style={{ display: 'inline-block', padding: '0.25rem 1rem', fontSize: '0.625rem', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '2rem', color: 'var(--color-wine)', border: '1px solid rgba(114,47,55,0.35)', borderRadius: '9999px' }}>
                            Why Choose Us
                        </span>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', color: '#EDE8D0', marginBottom: '2rem', lineHeight: 1.2 }}>
                            The D'CosMedis <br /><span style={{ fontStyle: 'italic', color: 'var(--color-wine)' }}>Advantage</span>
                        </h2>
                        <p style={{ fontSize: '1.125rem', color: 'rgba(237,232,208,0.8)', fontWeight: 300, maxWidth: '48rem', margin: '0 auto 2.5rem', lineHeight: 1.85 }}>
                            We treat true causes, not simply masking symptoms. With over 15 years of expertise, Dr. Dolly Gupta and our expert team will recommend a tailored blend of treatments based on your specific needs. Our aim is to achieve a natural, enhanced result safely and effectively.
                        </p>
                        <Link to="/book" className="cd-book-btn">
                            Book a Consultation
                        </Link>
                    </RevealWrapper>
                </div>
            </section>

            {/* FAQs */}
            <section className="cd-cream" style={{ padding: '6rem 0' }}>
                <div className="container" style={{ maxWidth: '56rem' }}>
                    <RevealWrapper>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <span style={{ display: 'inline-block', fontSize: '0.625rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700, color: '#888', marginBottom: '1rem' }}>
                                Ask The Experts
                            </span>
                            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-dark)' }}>
                                Frequently Asked <span style={{ fontStyle: 'italic', color: 'var(--color-wine)' }}>Questions</span>
                            </h2>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {faqs.map((faq, i) => (
                                <div key={i} style={{ background: '#fff', border: '1px solid #f0ede8', overflow: 'hidden', transition: 'box-shadow 0.3s' }}>
                                    <button
                                        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left', padding: '1.75rem 2rem', cursor: 'pointer', background: 'none', border: 'none' }}
                                        onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                                    >
                                        <span style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: openFaq === i ? 'var(--color-wine)' : 'var(--color-dark)', transition: 'color 0.3s', paddingRight: '1rem' }}>
                                            {faq.q}
                                        </span>
                                        <div style={{ width: '2rem', height: '2rem', borderRadius: '9999px', border: `1px solid ${openFaq === i ? 'var(--color-wine)' : '#ddd'}`, background: openFaq === i ? 'var(--color-wine)' : 'transparent', color: openFaq === i ? '#fff' : 'var(--color-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.3s', transform: openFaq === i ? 'rotate(180deg)' : 'none' }}>
                                            <ChevronDown size={16} />
                                        </div>
                                    </button>
                                    <div style={{ display: 'grid', gridTemplateRows: openFaq === i ? '1fr' : '0fr', opacity: openFaq === i ? 1 : 0, transition: 'grid-template-rows 0.45s ease, opacity 0.35s ease' }}>
                                        <div style={{ overflow: 'hidden' }}>
                                            <div style={{ padding: '0 2rem 2rem' }}>
                                                <div style={{ width: '3rem', height: '2px', background: 'var(--color-wine)', marginBottom: '1rem' }} />
                                                <p style={{ color: 'var(--color-text-muted)', fontWeight: 300, lineHeight: 1.85, fontSize: '1rem' }}>
                                                    {faq.a}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealWrapper>
                </div>
            </section>

            {/* CTA Banner */}
            <CtaBanner
                primaryLabel="Book Your Consultation"
                primaryTo="/book"
                secondaryLabel="Browse Treatments"
                secondaryTo="/treatments"
            />
        </div>
    )
}
