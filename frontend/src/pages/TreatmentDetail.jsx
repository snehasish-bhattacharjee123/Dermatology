import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronDown, ArrowRight, Clock, DollarSign, ShieldCheck, Star, Phone, Play, X } from 'lucide-react'
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

const trustPillars = [
    { icon: ShieldCheck, label: 'USFDA Approved', sub: 'Only certified technologies' },
    { icon: Star, label: '30+ Years', sub: 'Of clinical excellence' },
    { icon: Clock, label: 'Zero Downtime', sub: 'For most procedures' },
    { icon: Phone, label: 'Free Consultation', sub: 'Book a session today' },
]

const treatmentVideos = [
    {
        id: 'ZYlhFKxT9dg',
        title: 'Advanced Skin Treatment at D\'CosMedis',
        subtitle: 'See the transformation journey',
        thumb: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
    },
    {
        id: 'xjLDPQXAHiE',
        title: 'Laser Facial – What to Expect',
        subtitle: 'Step-by-step procedure walkthrough',
        thumb: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80',
    },
    {
        id: 'YqKUuFGRBLo',
        title: 'Anti-Aging & Skin Rejuvenation',
        subtitle: 'Real patient results & testimonials',
        thumb: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80',
    },
]

function VideoGallery() {
    const [active, setActive] = useState(0)
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [playing, setPlaying] = useState(false)

    const featured = treatmentVideos[active]

    const openLightbox = () => { setLightboxOpen(true); setPlaying(true) }
    const closeLightbox = () => { setLightboxOpen(false); setPlaying(false) }

    return (
        <section style={{ padding: '7rem 0', background: '#fff' }}>
            <style>{`
                .vg-thumb { position: relative; cursor: pointer; overflow: hidden; border: 2px solid transparent; transition: border-color 0.3s, transform 0.3s; }
                .vg-thumb.active { border-color: var(--color-gold); }
                .vg-thumb:hover { transform: translateX(4px); }
                .vg-thumb img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
                .vg-thumb:hover img { transform: scale(1.05); }
                .vg-thumb-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.45); display: flex; align-items: center; justify-content: center; transition: background 0.3s; }
                .vg-thumb:hover .vg-thumb-overlay { background: rgba(0,0,0,0.25); }
                .vg-play-sm { width: 2.25rem; height: 2.25rem; border-radius: 50%; background: rgba(255,255,255,0.85); display: flex; align-items: center; justify-content: center; transition: transform 0.3s, background 0.3s; }
                .vg-thumb:hover .vg-play-sm { background: var(--color-gold); transform: scale(1.15); }
                .vg-featured-play { width: 5rem; height: 5rem; border-radius: 50%; background: rgba(255,255,255,0.15); border: 2px solid rgba(255,255,255,0.6); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s; backdrop-filter: blur(6px); }
                .vg-featured-play:hover { background: var(--color-gold); border-color: var(--color-gold); transform: scale(1.1); box-shadow: 0 0 40px rgba(135,91,108,0.6); }
                .vg-lightbox { position: fixed; inset: 0; z-index: 9999; background: rgba(0,0,0,0.92); display: flex; align-items: center; justify-content: center; backdrop-filter: blur(8px); animation: vg-fade-in 0.3s ease; }
                @keyframes vg-fade-in { from { opacity: 0; } to { opacity: 1; } }
                .vg-lightbox-inner { position: relative; width: 90vw; max-width: 64rem; }
                .vg-lightbox-close { position: absolute; top: -3rem; right: 0; background: none; border: none; color: #fff; cursor: pointer; opacity: 0.7; transition: opacity 0.2s; }
                .vg-lightbox-close:hover { opacity: 1; }
                .vg-iframe-wrap { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); }
                .vg-iframe-wrap iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; }
            `}</style>

            <div className="container" style={{ maxWidth: '80rem' }}>
                <RevealWrapper>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <span style={{ display: 'block', fontSize: '0.625rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 800, color: 'var(--color-gold)', marginBottom: '1rem' }}>
                            Watch &amp; Learn
                        </span>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-dark)', textTransform: 'uppercase', letterSpacing: '3px' }}>
                            Treatment Videos
                        </h2>
                        <div style={{ width: '3.5rem', height: '2px', background: 'var(--color-gold)', margin: '1.25rem auto 0' }} />
                        <p style={{ color: 'var(--color-text-muted)', maxWidth: '36rem', margin: '1.25rem auto 0', lineHeight: 1.75, fontSize: '1rem' }}>
                            Watch our expert dermatologists in action. Learn what to expect before, during, and after your treatment.
                        </p>
                    </div>
                </RevealWrapper>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                    {/* Featured large player */}
                    <RevealWrapper direction="up">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>

                            {/* Large featured thumbnail */}
                            <div style={{ position: 'relative', overflow: 'hidden', gridColumn: 'span 2', minHeight: '380px', cursor: 'pointer' }} onClick={openLightbox}>
                                <img src={featured.thumb} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '380px', transition: 'transform 0.8s ease' }} />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(30,18,25,0.75) 0%, rgba(0,0,0,0.35) 100%)' }} />

                                {/* Play button */}
                                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1.5rem' }}>
                                    <button className="vg-featured-play" aria-label="Play video" onClick={openLightbox}>
                                        <Play size={22} fill="white" style={{ color: '#fff', marginLeft: '3px' }} />
                                    </button>
                                </div>

                                {/* Caption overlay */}
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)' }}>
                                    <span style={{ display: 'block', fontSize: '0.6rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-gold)', marginBottom: '0.4rem' }}>
                                        {featured.subtitle}
                                    </span>
                                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', color: '#fff', fontWeight: 500 }}>
                                        {featured.title}
                                    </h3>
                                </div>

                                {/* YouTube badge */}
                                <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: '#ff0000', padding: '0.3rem 0.75rem', borderRadius: '4px' }}>
                                    <span style={{ fontSize: '0.6rem', fontWeight: 800, color: '#fff', letterSpacing: '1px' }}>▶ YOUTUBE</span>
                                </div>
                            </div>

                            {/* Thumbnail sidebar */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {treatmentVideos.map((v, i) => (
                                    <div
                                        key={v.id}
                                        className={`vg-thumb${active === i ? ' active' : ''}`}
                                        style={{ height: '110px', borderRadius: '2px' }}
                                        onClick={() => { setActive(i); setPlaying(false) }}
                                    >
                                        <img src={v.thumb} alt={v.title} />
                                        <div className="vg-thumb-overlay">
                                            <div className="vg-play-sm">
                                                <Play size={13} style={{ color: active === i ? '#fff' : 'var(--color-dark)', marginLeft: '2px' }} fill={active === i ? '#fff' : 'var(--color-dark)'} />
                                            </div>
                                        </div>
                                        {/* Active indicator */}
                                        {active === i && (
                                            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: 'var(--color-gold)' }} />
                                        )}
                                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0.5rem 0.75rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)' }}>
                                            <p style={{ fontSize: '0.7rem', color: '#fff', fontWeight: 500, lineHeight: 1.3 }}>{v.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </RevealWrapper>
                </div>

                {/* Counter */}
                <RevealWrapper>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginTop: '2rem' }}>
                        {treatmentVideos.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                style={{
                                    width: active === i ? '2rem' : '0.5rem',
                                    height: '0.5rem',
                                    borderRadius: '9999px',
                                    background: active === i ? 'var(--color-gold)' : '#ddd',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.4s ease',
                                    padding: 0,
                                }}
                            />
                        ))}
                    </div>
                </RevealWrapper>
            </div>

            {/* Lightbox */}
            {lightboxOpen && (
                <div className="vg-lightbox" onClick={closeLightbox}>
                    <div className="vg-lightbox-inner" onClick={e => e.stopPropagation()}>
                        <button className="vg-lightbox-close" onClick={closeLightbox}>
                            <X size={28} />
                        </button>
                        <div className="vg-iframe-wrap">
                            {playing && (
                                <iframe
                                    src={`https://www.youtube-nocookie.com/embed/${featured.id}?autoplay=1&rel=0&modestbranding=1`}
                                    title={featured.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            )}
                        </div>
                        <div style={{ padding: '1rem 0' }}>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase' }}>{featured.subtitle}</p>
                            <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.375rem', marginTop: '0.25rem' }}>{featured.title}</h3>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

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

    const words = treatment.title.split(' ')
    const firstWord = words[0]
    const restWords = words.slice(1).join(' ')

    return (
        <div style={{ background: '#fff' }}>
            <style>{`
                /* ── Hero gradient ── */
                .td-hero-gradient {
                    position: absolute; inset: 0;
                    background: linear-gradient(100deg, rgba(30,18,25,0.95) 0%, rgba(57,33,47,0.75) 45%, rgba(0,0,0,0.15) 100%);
                }
                /* ── Dynamic HTML content ── */
                .td-content { font-family: var(--font-body); }
                .td-content p { margin-bottom: 1.75rem; font-weight: 300; line-height: 1.9; color: #555; font-size: 1.0625rem; }
                .td-content h3 { font-size: 0.65rem; font-weight: 800; letter-spacing: 3px; color: var(--color-gold); text-transform: uppercase; margin-top: 2.5rem; margin-bottom: 1rem; }
                .td-content ul { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2.5rem; padding-left: 0; list-style: none; }
                .td-content ul li { display: flex; align-items: flex-start; gap: 1rem; font-size: 1rem; font-weight: 300; color: #555; line-height: 1.65; }
                .td-content ul li::before { content: ''; display: block; width: 7px; height: 7px; background-color: var(--color-gold); flex-shrink: 0; transform: rotate(45deg); margin-top: 7px; }
                .td-content strong, .td-content b { font-weight: 600; color: var(--color-dark); }
                /* ── FAQ ── */
                .td-faq-item { border-bottom: 1px solid rgba(135,91,108,0.15); }
                .td-faq-btn { width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 1.5rem 0; cursor: pointer; background: none; border: none; text-align: left; }
                .td-chevron { width: 2rem; height: 2rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: all 0.35s; }
                /* ── Trust pillars ── */
                .td-pillar { display: flex; flex-direction: column; align-items: center; gap: 0.75rem; padding: 2rem 1rem; border-right: 1px solid rgba(255,255,255,0.12); }
                .td-pillar:last-child { border-right: none; }
                /* ── Sticky CTA bar ── */
                .td-sticky-bar { position: sticky; bottom: 0; left: 0; right: 0; z-index: 50; background: var(--color-dark); padding: 0.75rem 1.5rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
                @media (max-width: 640px) {
                    .td-pillars-grid { grid-template-columns: repeat(2, 1fr) !important; }
                    .td-pillar { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.12); }
                    .td-pillar:last-child, .td-pillar:nth-child(2n) { border-right: none; }
                    .td-sticky-bar { flex-direction: column; }
                }
            `}</style>

            {/* ─── HERO ─── */}
            <section style={{ position: 'relative', height: '90vh', minHeight: '640px', display: 'flex', alignItems: 'center', overflow: 'hidden', marginTop: 'var(--header-total-height)' }}>
                <div style={{ position: 'absolute', inset: 0 }}>
                    <img src={treatment.image} alt={treatment.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                    <div className="td-hero-gradient" />
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 2, paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
                    <RevealWrapper direction="left">
                        {/* Breadcrumb */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                            <Link to="/treatments" style={{ fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, color: 'rgba(255,255,255,0.5)', transition: 'color 0.3s' }}>Treatments</Link>
                            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>/</span>
                            <span style={{ fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, color: 'var(--color-gold)' }}>{treatment.category}</span>
                        </div>

                        {/* Title */}
                        <h1 style={{ fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '4px', lineHeight: 1.05, marginBottom: '1.5rem', fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}>
                            {words.length === 1 ? (
                                <span style={{ display: 'block', fontWeight: 300, color: '#fff' }}>{firstWord}</span>
                            ) : (
                                <>
                                    <span style={{ display: 'block', fontWeight: 300, color: 'rgba(255,255,255,0.9)' }}>{firstWord}</span>
                                    <span style={{ display: 'block', fontWeight: 700, color: 'var(--color-gold)' }}>{restWords}</span>
                                </>
                            )}
                        </h1>

                        {/* Description */}
                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(0.9375rem, 2vw, 1.125rem)', fontWeight: 300, maxWidth: '36rem', lineHeight: 1.8, marginBottom: '2.5rem', borderLeft: '2px solid var(--color-gold)', paddingLeft: '1.25rem' }}>
                            {treatment.shortDescription}
                        </p>

                        {/* CTA row */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.5rem' }}>
                            <Link to="/book" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--color-gold)', color: '#fff', padding: '1rem 2.25rem', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, transition: 'all 0.3s', boxShadow: '0 8px 30px rgba(135,91,108,0.4)' }}>
                                Book Consultation <ArrowRight size={14} />
                            </Link>

                            {/* Meta pills */}
                            {treatment.duration && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.25rem', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '9999px' }}>
                                    <Clock size={13} style={{ color: 'var(--color-gold)' }} />
                                    <span style={{ fontSize: '0.7rem', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 600, color: '#fff' }}>{treatment.duration}</span>
                                </div>
                            )}
                            {treatment.price && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.25rem', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '9999px' }}>
                                    <DollarSign size={13} style={{ color: 'var(--color-gold)' }} />
                                    <span style={{ fontSize: '0.7rem', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 600, color: '#fff' }}>{treatment.price}</span>
                                </div>
                            )}
                        </div>
                    </RevealWrapper>
                </div>

                {/* Scroll cue */}
                <div style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '1px', height: '3rem', background: 'linear-gradient(to bottom, transparent, var(--color-gold))', animation: 'td-scroll-cue 2s ease infinite' }} />
                </div>
                <style>{`
                    @keyframes td-scroll-cue {
                        0%, 100% { opacity: 0.2; transform: scaleY(0.5); }
                        50% { opacity: 1; transform: scaleY(1); }
                    }
                `}</style>
            </section>

            {/* ─── OVERVIEW ─── */}
            <section style={{ padding: '7rem 0', background: 'var(--color-bg-cream)' }}>
                <div className="container" style={{ maxWidth: '72rem' }}>
                    <RevealWrapper>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <span style={{ display: 'block', fontSize: '0.625rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 800, color: 'var(--color-gold)', marginBottom: '1rem' }}>Overview</span>
                            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-dark)', textTransform: 'uppercase', letterSpacing: '4px' }}>
                                About This Treatment
                            </h2>
                            <div style={{ width: '3.5rem', height: '2px', background: 'var(--color-gold)', margin: '1.5rem auto 0' }} />
                        </div>

                        <div className="td-content" dangerouslySetInnerHTML={{ __html: treatment.description }} />
                    </RevealWrapper>
                </div>
            </section>

            {/* ─── ADVANTAGE ─── */}
            <section style={{ padding: '7rem 0', background: 'var(--color-bg-dark)', position: 'relative', overflow: 'hidden' }}>
                {/* Ambient glow */}
                <div style={{ position: 'absolute', top: '-10rem', right: '-10rem', width: '35rem', height: '35rem', borderRadius: '50%', background: 'radial-gradient(circle, rgba(135,91,108,0.18) 0%, transparent 65%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: '-8rem', left: '-8rem', width: '28rem', height: '28rem', borderRadius: '50%', background: 'radial-gradient(circle, rgba(135,91,108,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />

                <div className="container" style={{ maxWidth: '60rem', position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <RevealWrapper>
                        <span style={{ display: 'inline-block', fontSize: '0.625rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 800, color: 'var(--color-gold)', background: 'rgba(135,91,108,0.12)', border: '1px solid rgba(135,91,108,0.3)', borderRadius: '9999px', padding: '0.4rem 1.25rem', marginBottom: '2rem' }}>
                            Why Choose Us
                        </span>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', marginBottom: '2rem', lineHeight: 1.15 }}>
                            The D'CosMedis <br />
                            <span style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>Advantage</span>
                        </h2>
                        <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.75)', fontWeight: 300, lineHeight: 1.9, marginBottom: '3rem', maxWidth: '48rem', margin: '0 auto 3rem' }}>
                            We treat true causes, not simply masking symptoms. With over 30 years of expertise, Dr. Dolly Gupta and our expert team recommend a tailored blend of treatments based on your specific needs. Our aim is to achieve natural, enhanced results safely and effectively.
                        </p>
                        <Link to="/book" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--color-gold)', color: '#fff', padding: '1.1rem 2.5rem', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, transition: 'all 0.3s' }}>
                            Book a Consultation <ArrowRight size={14} />
                        </Link>
                    </RevealWrapper>
                </div>
            </section>

            {/* ─── TRUST PILLARS ─── */}
            <section style={{ background: 'var(--color-dark)', padding: '3rem 0' }}>
                <div className="container">
                    <div className="td-pillars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
                        {trustPillars.map(({ icon: Icon, label, sub }, i) => (
                            <div key={i} className="td-pillar">
                                <Icon size={22} style={{ color: 'var(--color-gold)' }} />
                                <div style={{ textAlign: 'center' }}>
                                    <span style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, color: '#fff' }}>{label}</span>
                                    <span style={{ display: 'block', fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.2rem' }}>{sub}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── VIDEO GALLERY ─── */}
            <VideoGallery />

            {/* ─── CLINIC BANNER ─── */}
            <section style={{ position: 'relative', height: '520px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0 }}>
                    <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80" alt="D'CosMedis Clinic" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(30,18,25,0.88) 0%, rgba(57,33,47,0.65) 100%)' }} />
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '48rem' }}>
                    <RevealWrapper>
                        <span style={{ display: 'block', fontSize: '0.625rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-gold)', marginBottom: '1.25rem' }}>
                            At D'CosMedis
                        </span>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.25rem, 5vw, 4rem)', color: '#fff', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.2, marginBottom: '1.5rem' }}>
                            Transforming Lives,<br />One Treatment at a Time
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem', fontWeight: 300 }}>
                            Experience the highest standard of medical aesthetic care in a luxurious, clinical environment. Every treatment is administered with precision, artistry, and deep respect for your unique needs.
                        </p>
                        <Link to="/book" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(255,255,255,0.4)', color: '#fff', padding: '0.9rem 2rem', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, transition: 'all 0.3s', backdropFilter: 'blur(4px)', background: 'rgba(255,255,255,0.05)' }}>
                            Book Your Visit <ArrowRight size={13} />
                        </Link>
                    </RevealWrapper>
                </div>
            </section>

            {/* ─── FAQs ─── */}
            <section style={{ padding: '7rem 0', background: 'var(--color-bg-cream)' }}>
                <div className="container" style={{ maxWidth: '56rem' }}>
                    <RevealWrapper>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <span style={{ display: 'block', fontSize: '0.625rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 800, color: '#888', marginBottom: '1rem' }}>Ask The Experts</span>
                            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-dark)' }}>
                                Frequently Asked <span style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>Questions</span>
                            </h2>
                        </div>

                        <div>
                            {faqs.map((faq, i) => (
                                <div key={i} className="td-faq-item">
                                    <button className="td-faq-btn" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                                        <span style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: openFaq === i ? 'var(--color-gold)' : 'var(--color-dark)', transition: 'color 0.3s', paddingRight: '1rem' }}>
                                            {faq.q}
                                        </span>
                                        <div className="td-chevron" style={{ border: `1px solid ${openFaq === i ? 'var(--color-gold)' : '#ddd'}`, background: openFaq === i ? 'var(--color-gold)' : 'transparent', color: openFaq === i ? '#fff' : 'var(--color-dark)', transform: openFaq === i ? 'rotate(180deg)' : 'none' }}>
                                            <ChevronDown size={15} />
                                        </div>
                                    </button>
                                    <div style={{ display: 'grid', gridTemplateRows: openFaq === i ? '1fr' : '0fr', opacity: openFaq === i ? 1 : 0, transition: 'grid-template-rows 0.45s ease, opacity 0.35s ease' }}>
                                        <div style={{ overflow: 'hidden' }}>
                                            <div style={{ padding: '0 0 1.75rem' }}>
                                                <div style={{ width: '3rem', height: '2px', background: 'var(--color-gold)', marginBottom: '1rem' }} />
                                                <p style={{ color: 'var(--color-text-muted)', fontWeight: 300, lineHeight: 1.85, fontSize: '1rem' }}>{faq.a}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealWrapper>
                </div>
            </section>

            {/* ─── BOTTOM CTA ─── */}
            <section style={{ background: 'var(--color-gold)', padding: '5rem 0', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '44rem' }}>
                    <RevealWrapper>
                        <span style={{ display: 'block', fontSize: '0.625rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700, color: 'rgba(255,255,255,0.7)', marginBottom: '1rem' }}>Ready to Begin?</span>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: '#fff', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                            Start Your Skin Journey Today
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2.5rem', fontWeight: 300 }}>
                            Book a consultation with our expert dermatologists and discover treatments tailored to your unique needs.
                        </p>
                        <Link to="/book" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: '#fff', color: 'var(--color-gold)', padding: '1rem 2.5rem', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700 }}>
                            BOOK YOUR CONSULTATION →
                        </Link>
                    </RevealWrapper>
                </div>
            </section>
        </div>
    )
}
