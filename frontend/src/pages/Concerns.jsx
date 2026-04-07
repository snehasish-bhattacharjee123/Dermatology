import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Search, Stethoscope } from 'lucide-react'
import { RevealWrapper } from '../hooks/useAnimations'
import { concerns } from '../data/siteData'

export default function Concerns() {
    const [searchQuery, setSearchQuery] = useState('')

    const filtered = concerns.filter(c => 
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        c.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div style={{ background: '#fff' }}>
            <style>{`
                /* ── Hero ── */
                .cn-hero-overlay { position: absolute; inset: 0; background: linear-gradient(100deg, rgba(30,18,25,0.95) 0%, rgba(57,33,47,0.85) 45%, rgba(0,0,0,0.4) 100%); }

                /* ── Search ── */
                .cn-search { display: flex; align-items: center; gap: 0.75rem; background: #fff; border: 1px solid #e0dbd5; padding: 0.85rem 1.5rem; width: 100%; max-width: 28rem; transition: all 0.3s; margin-top: 2rem; border-radius: 4px; box-shadow: 0 10px 30px rgba(0,0,0,0.15); }
                .cn-search:focus-within { border-color: var(--color-gold); box-shadow: 0 10px 40px rgba(0,0,0,0.3); transform: translateY(-2px); }
                .cn-search input { border: none; outline: none; font-size: 0.9375rem; color: var(--color-dark); background: transparent; width: 100%; font-family: var(--font-body); }
                .cn-search input::placeholder { color: #888; }

                /* ── Card ── */
                .cn-card { display: flex; flex-direction: column; background: #fff; border: 1px solid #f0ede8; transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); overflow: hidden; position: relative; height: 100%; }
                .cn-card:hover { transform: translateY(-8px); box-shadow: 0 30px 60px rgba(0,0,0,0.08); border-color: transparent; }
                .cn-card-img-wrap { position: relative; width: 100%; height: 320px; overflow: hidden; }
                .cn-card-img { width: 100%; height: 100%; object-fit: cover; transition: transform 1.5s cubic-bezier(0.4, 0, 0.2, 1); }
                .cn-card:hover .cn-card-img { transform: scale(1.08); }
                .cn-card-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(30,18,25,0.8) 0%, transparent 60%); opacity: 0; transition: opacity 0.5s; display: flex; align-items: flex-end; padding: 2rem; }
                .cn-card:hover .cn-card-overlay { opacity: 1; }
                .cn-card-body { padding: 2.5rem 2rem; display: flex; flex-direction: column; flex-grow: 1; background: #fff; position: relative; }
                
                /* Icon badge */
                .cn-icon-badge { position: absolute; top: -2rem; right: 2rem; width: 4rem; height: 4rem; background: var(--color-dark); color: var(--color-gold); display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 4px solid #fff; font-size: 1.5rem; transition: all 0.4s; box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
                .cn-card:hover .cn-icon-badge { background: var(--color-gold); color: #fff; transform: rotateY(180deg); }

                /* ── Emptystate ── */
                .cn-empty { text-align: center; padding: 8rem 1rem; color: var(--color-text-muted); }
            `}</style>

            {/* ─── HERO ─── */}
            <section style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center', overflow: 'hidden', marginTop: 'var(--header-total-height)' }}>
                <div style={{ position: 'absolute', inset: 0 }}>
                    <img
                        src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1920&q=80"
                        alt="Skin Concerns"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
                    />
                    <div className="cn-hero-overlay" />
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <RevealWrapper direction="up">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                            <Link to="/" style={{ fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, color: 'rgba(255,255,255,0.45)', transition: 'color 0.3s' }}>Home</Link>
                            <span style={{ color: 'rgba(255,255,255,0.25)' }}>/</span>
                            <span style={{ fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, color: 'var(--color-gold)' }}>Concerns</span>
                        </div>

                        <span style={{ display: 'inline-block', fontSize: '0.625rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-gold)', background: 'rgba(135,91,108,0.12)', border: '1px solid rgba(135,91,108,0.3)', borderRadius: '9999px', padding: '0.4rem 1.25rem', marginBottom: '1.25rem' }}>
                            Clinical Dermatology
                        </span>

                        <h1 style={{ fontFamily: 'var(--font-heading)', color: '#fff', letterSpacing: '4px', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '1.5rem', fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
                            <span style={{ display: 'block', fontWeight: 300 }}>What Bothers</span>
                            <span style={{ display: 'block', fontWeight: 700, color: 'var(--color-gold)', fontStyle: 'italic' }}>You?</span>
                        </h1>

                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.125rem', fontWeight: 300, maxWidth: '36rem', lineHeight: 1.8 }}>
                            At D'CosMedis, we address every skin and hair concern with clinical precision, advanced technology, and personalized care. Find your concern below to explore our targeted solutions.
                        </p>

                        <div className="cn-search">
                            <Search size={18} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                            <input
                                type="text"
                                placeholder="E.g. Acne, Pigmentation, Hair Loss..."
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <button onClick={() => setSearchQuery('')} style={{ color: '#aaa', fontSize: '1.2rem', background: 'none', border: 'none', cursor: 'pointer', lineHeight: 1 }}>✕</button>
                            )}
                        </div>
                    </RevealWrapper>
                </div>
            </section>

            {/* ─── INFO STRIP ─── */}
            <section style={{ background: 'var(--color-dark)', padding: '2rem 0' }}>
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '3rem' }}>
                    {[
                        { icon: Stethoscope, t: 'Dermatologist Led' },
                        { icon: Search, t: 'Root Cause Analysis' },
                        { icon: ArrowRight, t: 'Customized Protocols' }
                    ].map((Item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#fff' }}>
                            <Item.icon size={20} style={{ color: 'var(--color-gold)' }} />
                            <span style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700 }}>{Item.t}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ─── GRID ─── */}
            <section style={{ background: 'var(--color-bg-cream)', padding: '5rem 0 8rem' }}>
                <div className="container" style={{ maxWidth: '85rem' }}>
                    {/* Header */}
                    <div style={{ marginBottom: '4rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', borderBottom: '1px solid #dfdcd7', paddingBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--color-dark)', fontWeight: 300 }}>
                                Browse <span style={{ fontWeight: 600 }}>Conditions</span>
                            </h2>
                        </div>
                        <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                            Showing {filtered.length} result{filtered.length !== 1 ? 's' : ''}
                        </span>
                    </div>

                    {filtered.length === 0 ? (
                        <div className="cn-empty">
                            <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>No concerns match your search query.</p>
                            <button onClick={() => setSearchQuery('')} style={{ background: 'var(--color-gold)', color: '#fff', border: 'none', padding: '0.85rem 2.5rem', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, cursor: 'pointer' }}>
                                Clear Search
                            </button>
                        </div>
                    ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2.5rem' }}>
                            {filtered.map((concern, i) => (
                                <RevealWrapper key={concern.id} direction="up" delay={(i % 6) * 0.1}>
                                    <Link to={`/concerns/${concern.slug}`} className="cn-card">
                                        <div className="cn-card-img-wrap">
                                            <img src={concern.image} alt={concern.name} className="cn-card-img" />
                                            <div className="cn-card-overlay">
                                                <span style={{ color: '#fff', fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                    View Solutions <ArrowRight size={14} />
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <div className="cn-card-body">
                                            <div className="cn-icon-badge">
                                                <span style={{ transform: 'rotateY(0deg)', display: 'inline-block', transition: 'inherit' }}>{concern.icon}</span>
                                            </div>
                                            
                                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', color: 'var(--color-dark)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                                                {concern.name}
                                            </h3>
                                            
                                            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.7, fontWeight: 300, marginBottom: '2rem', flexGrow: 1 }}>
                                                {concern.shortDescription}
                                            </p>
                                            
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold)', fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, paddingTop: '1.5rem', borderTop: '1px solid #f0ede8' }}>
                                                Explore Treatments <ArrowRight size={14} />
                                            </div>
                                        </div>
                                    </Link>
                                </RevealWrapper>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* ─── CTA BANNER ─── */}
            <section style={{ position: 'relative', padding: '7rem 0', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0 }}>
                    <img
                        src="https://images.unsplash.com/photo-1552693673-1bf958298935?w=1920&q=80"
                        alt="Consultation"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.2)' }}
                    />
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '50rem' }}>
                    <RevealWrapper>
                        <span style={{ display: 'inline-block', fontSize: '0.625rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-gold)', marginBottom: '1.25rem' }}>
                            Unsure Where To Start?
                        </span>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#fff', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                            Get a Clinical <span style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>Assessment</span>
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.0625rem', lineHeight: 1.8, marginBottom: '3rem', fontWeight: 300 }}>
                            Let our dermatologists analyze your skin or hair condition and recommend a tailored, evidence-based treatment protocol.
                        </p>
                        <Link to="/book" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--color-gold)', color: '#fff', padding: '1.1rem 2.75rem', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, transition: 'all 0.3s' }}>
                            BOOK CONSULTATION <ArrowRight size={15} />
                        </Link>
                    </RevealWrapper>
                </div>
            </section>
        </div>
    )
}
