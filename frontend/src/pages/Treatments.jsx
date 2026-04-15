import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Search, SlidersHorizontal } from 'lucide-react'
import { RevealWrapper } from '../hooks/useAnimations'
import { treatments, treatmentCategories } from '../data/siteData'

export default function Treatments() {
    const [activeCategory, setActiveCategory] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')

    const filtered = useMemo(() => {
        let list = activeCategory === 'all' ? treatments : treatments.filter(t => t.categorySlug === activeCategory)
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase()
            list = list.filter(t =>
                t.title.toLowerCase().includes(q) ||
                t.shortDescription.toLowerCase().includes(q) ||
                t.category.toLowerCase().includes(q)
            )
        }
        return list
    }, [activeCategory, searchQuery])

    const activeCategoryLabel = activeCategory === 'all'
        ? 'All Treatments'
        : treatmentCategories.find(c => c.slug === activeCategory)?.name + ' Treatments'

    return (
        <div style={{ background: '#fff' }}>
            <style>{`
                /* ── Hero ── */
                .tr-hero-overlay { display: none; }

                /* ── Filter pills ── */
                .tr-cat-btn { padding: 0.55rem 1.25rem; font-size: 0.6rem; letter-spacing: 2.5px; text-transform: uppercase; font-weight: 700; cursor: pointer; border-radius: 9999px; border: 1px solid #e0dbd5; background: transparent; color: #888; transition: all 0.3s; white-space: nowrap; }
                .tr-cat-btn:hover { border-color: var(--color-wine); color: var(--color-dark); }
                .tr-cat-btn.active { background: var(--color-wine); color: #fff; border-color: var(--color-wine); box-shadow: 0 8px 24px rgba(114,47,55,0.3); }

                /* ── Treatment cards ── */
                .tr-card { display: block; background: #fff; border: 1px solid #f0ede8; overflow: hidden; transition: all 0.45s ease; position: relative; }
                .tr-card:hover { box-shadow: 0 24px 60px rgba(0,0,0,0.12); transform: translateY(-8px); border-color: transparent; }
                .tr-card-img { width: 100%; height: 280px; object-fit: cover; transition: transform 1.2s ease; display: block; }
                .tr-card:hover .tr-card-img { transform: scale(1.07); }
                .tr-card-overlay { position: absolute; inset: 0; height: 280px; background: rgba(57,33,47,0.88); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.4s ease; }
                .tr-card:hover .tr-card-overlay { opacity: 1; }
                .tr-card:hover .tr-card-title { color: var(--color-wine); }
                .tr-cat-tag { position: absolute; top: 1.25rem; left: 1.25rem; background: var(--color-dark); color: #fff; font-size: 0.55rem; letter-spacing: 2px; text-transform: uppercase; font-weight: 700; padding: 0.3rem 0.8rem; }
                
                /* ── Empty state ── */
                .tr-empty { text-align: center; padding: 6rem 1rem; color: var(--color-text-muted); }

                /* ── Search box ── */
                .tr-search { display: flex; align-items: center; gap: 0.75rem; background: #fff; border: 1px solid #e0dbd5; padding: 0.75rem 1.25rem; width: 100%; max-width: 22rem; transition: border-color 0.3s; }
                .tr-search:focus-within { border-color: var(--color-wine); }
                .tr-search input { border: none; outline: none; font-size: 0.875rem; color: var(--color-dark); background: transparent; width: 100%; }
                .tr-search input::placeholder { color: #aaa; }

                /* ── CTA ── */
                .tr-cta-btn { display: inline-flex; align-items: center; gap: 0.5rem; background: #fff; color: var(--color-wine); padding: 1rem 2.5rem; font-size: 0.75rem; letter-spacing: 2px; text-transform: uppercase; font-weight: 700; transition: all 0.3s; }
                .tr-cta-btn:hover { background: var(--color-dark); color: #fff; }

                /* ── Scrollbar hide ── */
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
                .scrollbar-hide::-webkit-scrollbar { display: none; }
            `}</style>

            {/* ─── HERO ─── */}
            <section style={{ position: 'relative', minHeight: '65vh', display: 'flex', alignItems: 'center', overflow: 'hidden', marginTop: 'var(--header-total-height)' }}>
                <div style={{ position: 'absolute', inset: 0 }}>
                    <img
                        src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80"
                        alt="D'CosMedis Treatments"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
                    />
                    <div className="tr-hero-overlay" />
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <RevealWrapper direction="left">
                        {/* Breadcrumb */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                            <Link to="/" style={{ fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, color: 'rgba(255,255,255,0.45)', transition: 'color 0.3s' }}>Home</Link>
                            <span style={{ color: 'rgba(255,255,255,0.25)' }}>/</span>
                            <span style={{ fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, color: 'var(--color-wine)' }}>Treatments</span>
                        </div>

                        <span style={{ display: 'inline-block', fontSize: '0.625rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-wine)', background: 'rgba(114,47,55,0.12)', border: '1px solid rgba(114,47,55,0.3)', borderRadius: '9999px', padding: '0.4rem 1.25rem', marginBottom: '1.5rem' }}>
                            Advanced Aesthetics
                        </span>

                        <h1 style={{ fontFamily: 'var(--font-heading)', color: '#fff', letterSpacing: '5px', textTransform: 'uppercase', lineHeight: 1.05, marginBottom: '1.5rem', fontSize: 'clamp(2.75rem, 7vw, 5.5rem)' }}>
                            <span style={{ display: 'block', fontWeight: 300, color: 'rgba(255,255,255,0.9)' }}>Skin's</span>
                            <span style={{ display: 'block', fontWeight: 700, color: 'var(--color-wine)' }}>Store Line</span>
                        </h1>

                        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontWeight: 300, maxWidth: '40rem', lineHeight: 1.8, marginBottom: '2.5rem', borderLeft: '2px solid var(--color-wine)', paddingLeft: '1.25rem' }}>
                            Discover our comprehensive range of advanced skin, hair, and body treatments — each meticulously designed, powered by cutting-edge technology and delivered by certified experts.
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                            <Link to="/book" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--color-wine)', color: '#fff', padding: '1rem 2.25rem', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, boxShadow: '0 8px 30px rgba(114,47,55,0.4)', transition: 'all 0.3s' }}>
                                Book Consultation <ArrowRight size={14} />
                            </Link>
                            <Link to="/concerns" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.08)', color: '#fff', padding: '1rem 2.25rem', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.2)', transition: 'all 0.3s' }}>
                                Browse by Concern
                            </Link>
                        </div>
                    </RevealWrapper>
                </div>

                {/* Scroll cue */}
                <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', width: '1px', height: '3rem', background: 'linear-gradient(to bottom, transparent, var(--color-wine))' }} />
            </section>

            {/* ─── STATS BAR ─── */}
            <section style={{ background: 'var(--color-dark)', padding: '0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))' }}>
                        {[
                            { val: '50+', label: 'Treatments' },
                            { val: '30+', label: 'Years Expert' },
                            { val: '15', label: 'Locations' },
                            { val: '50K+', label: 'Patients' },
                        ].map((s, i) => (
                            <div key={i} style={{ textAlign: 'center', padding: '1.5rem', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                                <span style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-wine)', fontWeight: 300, lineHeight: 1 }}>{s.val}</span>
                                <span style={{ display: 'block', fontSize: '0.55rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, color: 'rgba(255,255,255,0.4)', marginTop: '0.35rem' }}>{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── FILTER + SEARCH BAR ─── */}
            <section style={{ background: '#fff', padding: '1.5rem 0', borderBottom: '1px solid #f0ede8', position: 'sticky', top: 0, zIndex: 20, backdropFilter: 'blur(12px)' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                        {/* Category pills */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.25rem', flexShrink: 0 }} className="scrollbar-hide">
                            {treatmentCategories.map((cat) => (
                                <button
                                    key={cat.slug}
                                    className={`tr-cat-btn${activeCategory === cat.slug ? ' active' : ''}`}
                                    onClick={() => setActiveCategory(cat.slug)}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <div className="tr-search">
                            <Search size={15} style={{ color: '#aaa', flexShrink: 0 }} />
                            <input
                                type="text"
                                placeholder="Search treatments..."
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <button onClick={() => setSearchQuery('')} style={{ color: '#aaa', fontSize: '1rem', background: 'none', border: 'none', cursor: 'pointer', lineHeight: 1 }}>✕</button>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── RESULTS HEADER ─── */}
            <section style={{ background: 'var(--color-bg-cream)', padding: '2.5rem 0 0' }}>
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-dark)' }}>
                            {activeCategoryLabel}
                        </h2>
                        <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', letterSpacing: '1px' }}>
                            {filtered.length} treatment{filtered.length !== 1 ? 's' : ''} available
                            {searchQuery ? ` for "${searchQuery}"` : ''}
                        </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>
                        <SlidersHorizontal size={14} />
                        <span>Filtered by: <strong style={{ color: 'var(--color-dark)' }}>{activeCategoryLabel}</strong></span>
                    </div>
                </div>
            </section>

            {/* ─── TREATMENT GRID ─── */}
            <section style={{ background: 'var(--color-bg-cream)', padding: '3rem 0 6rem' }}>
                <div className="container" style={{ maxWidth: '90rem' }}>
                    {filtered.length === 0 ? (
                        <div className="tr-empty">
                            <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>No treatments found.</p>
                            <button onClick={() => { setActiveCategory('all'); setSearchQuery('') }} style={{ background: 'var(--color-wine)', color: '#fff', border: 'none', padding: '0.75rem 2rem', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, cursor: 'pointer' }}>
                                Clear Filters
                            </button>
                        </div>
                    ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                            {filtered.map((treatment, i) => (
                                <RevealWrapper key={treatment.id} direction="up" delay={(i % 6) * 0.07}>
                                    <Link to={`/treatments/${treatment.slug}`} className="tr-card">
                                        {/* Image */}
                                        <div style={{ position: 'relative', overflow: 'hidden' }}>
                                            <img src={treatment.image} alt={treatment.title} className="tr-card-img" />
                                            <div className="tr-card-overlay">
                                                <span style={{ color: '#fff', fontSize: '0.7rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                    Discover More <ArrowRight size={13} />
                                                </span>
                                            </div>
                                            <span className="tr-cat-tag">{treatment.category}</span>
                                        </div>

                                        {/* Body */}
                                        <div style={{ padding: '1.75rem 1.75rem 1.5rem' }}>
                                            <h3 className="tr-card-title" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--color-dark)', marginBottom: '0.75rem', transition: 'color 0.3s', lineHeight: 1.3 }}>
                                                {treatment.title}
                                            </h3>
                                            <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-muted)', lineHeight: 1.7, fontWeight: 300, marginBottom: '1.5rem' }}>
                                                {treatment.shortDescription.slice(0, 100)}…
                                            </p>

                                            {/* Footer meta */}
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1.25rem', borderTop: '1px solid #f0ede8' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                                                    <Clock size={12} style={{ color: 'var(--color-wine)' }} />
                                                    <span>{treatment.duration}</span>
                                                </div>
                                                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-wine)' }}>
                                                    {treatment.price}
                                                </span>
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
                        src="https://images.unsplash.com/photo-1612817288484-6f916006741a?w=1920&q=80"
                        alt="Begin Your Journey"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '52rem' }}>
                    <RevealWrapper>
                        <span style={{ display: 'inline-block', fontSize: '0.625rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-wine)', marginBottom: '1.25rem' }}>
                            Begin Your Transformation
                        </span>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', color: '#fff', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                            Ready to Begin Your <br />
                            <span style={{ fontStyle: 'italic', color: 'var(--color-wine)' }}>Skin Journey?</span>
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.0625rem', lineHeight: 1.8, marginBottom: '2.5rem', fontWeight: 300 }}>
                            Discover personalised treatments designed by our expert dermatologists to address your unique skin concerns and help you achieve radiant, healthy skin.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/book" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--color-wine)', color: '#fff', padding: '1rem 2.5rem', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, transition: 'all 0.3s' }}>
                                BOOK CONSULTATION <ArrowRight size={14} />
                            </Link>
                            <Link to="/concerns" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', padding: '1rem 2.5rem', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, backdropFilter: 'blur(4px)', background: 'rgba(255,255,255,0.05)', transition: 'all 0.3s' }}>
                                Browse Concerns
                            </Link>
                        </div>
                    </RevealWrapper>
                </div>
            </section>
        </div>
    )
}
