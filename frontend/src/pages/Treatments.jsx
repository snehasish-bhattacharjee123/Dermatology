import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Clock, Search } from 'lucide-react'
import { RevealWrapper } from '../hooks/useAnimations'
import { treatments, treatmentCategories } from '../data/siteData'
import CtaBanner from '../components/ui/CtaBanner'

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
        : (treatmentCategories.find(c => c.slug === activeCategory)?.name || '') + ' Treatments'

    return (
        <div style={{ background: '#faf9f7' }}>
            <style>{`
                /* ── Hero ── */
                .tr-hero {
                    position: relative;
                    min-height: clamp(380px, 55vw, 560px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }
                @media (max-width: 640px) {
                    .tr-hero { min-height: clamp(300px, 70vw, 420px); }
                }
                .tr-hero video {
                    position: absolute; inset: 0;
                    width: 100%; height: 100%;
                    object-fit: cover; object-position: center;
                }
                .tr-hero-overlay {
                    position: absolute; inset: 0;
                    background: linear-gradient(to bottom, rgba(13,19,25,0.42) 0%, rgba(13,19,25,0.68) 100%);
                }
                .tr-hero-content {
                    position: relative; z-index: 1;
                    text-align: center; color: #fff;
                    padding: calc(var(--header-total-height) + 2rem) 1.25rem 3rem;
                    width: 100%;
                }

                /* ── Filter pills ── */
                .tr-pills {
                    display: flex;
                    gap: 0.5rem;
                    overflow-x: auto;
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                    padding-bottom: 2px;
                }
                .tr-pills::-webkit-scrollbar { display: none; }

                .tr-pill {
                    flex-shrink: 0;
                    padding: 0.5rem 1.15rem;
                    font-size: 0.7rem;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                    font-weight: 600;
                    cursor: pointer;
                    border-radius: 9999px;
                    border: none;
                    background: transparent;
                    color: #888;
                    transition: all 0.25s ease;
                    font-family: var(--font-body);
                }
                .tr-pill:hover { color: var(--color-wine); }
                .tr-pill.active {
                    background: var(--color-wine);
                    color: #fff;
                    box-shadow: 0 4px 14px rgba(149,71,149,0.25);
                }

                /* ── Search ── */
                .tr-search {
                    display: flex;
                    align-items: center;
                    gap: 0.6rem;
                    background: #fff;
                    border: 1px solid #e8e3dc;
                    padding: 0.6rem 1.1rem;
                    border-radius: 9999px;
                    transition: border-color 0.25s ease, box-shadow 0.25s ease;
                }
                .tr-search:focus-within {
                    border-color: var(--color-wine);
                    box-shadow: 0 0 0 3px rgba(149,71,149,0.08);
                }
                .tr-search input {
                    border: none; outline: none;
                    font-size: 0.85rem;
                    color: var(--color-dark);
                    background: transparent;
                    width: 100%;
                    font-family: var(--font-body);
                }
                .tr-search input::placeholder { color: #bbb; }

                /* ── Card ── */
                .tr-card {
                    display: flex;
                    flex-direction: column;
                    background: #fff;
                    overflow: hidden;
                    border-radius: 12px;
                    transition: transform 0.4s ease, box-shadow 0.4s ease;
                }
                .tr-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 48px rgba(13,19,25,0.09);
                }
                .tr-card-img {
                    width: 100%;
                    height: 220px;
                    object-fit: cover;
                    display: block;
                    transition: transform 1.4s ease;
                }
                @media (max-width: 640px) {
                    .tr-card-img { height: 190px; }
                }
                .tr-card:hover .tr-card-img { transform: scale(1.04); }
                .tr-card-img-wrap { overflow: hidden; position: relative; }
                .tr-card-overlay {
                    position: absolute; inset: 0;
                    background: linear-gradient(to top, rgba(13,19,25,0.45), transparent);
                    opacity: 0;
                    transition: opacity 0.35s ease;
                    display: flex; align-items: flex-end; padding: 1.25rem;
                }
                .tr-card:hover .tr-card-overlay { opacity: 1; }

                /* ── Empty state ── */
                .tr-empty {
                    text-align: center;
                    padding: 6rem 1rem;
                }

                /* ── Stats ── */
                .tr-stat-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                }
                @media (max-width: 640px) {
                    .tr-stat-grid { grid-template-columns: repeat(2, 1fr); }
                }
                .tr-stat {
                    text-align: center;
                    padding: 2rem 1rem;
                }
            `}</style>

            {/* ─── HERO ─── */}
            <section className="tr-hero">
                <video autoPlay loop muted playsInline>
                    <source src="https://videos.pexels.com/video-files/6835154/6835154-uhd_2732_1440_25fps.mp4" type="video/mp4" />
                </video>
                <div className="tr-hero-overlay" />
                <div className="tr-hero-content container">
                    <RevealWrapper direction="up">
                        {/* Breadcrumb */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginBottom: '1.5rem' }}>
                            <Link to="/" style={{ fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Home</Link>
                            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
                            <span style={{ fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>Treatments</span>
                        </div>

                        <h1 style={{
                            fontFamily: 'var(--font-heading)',
                            color: '#fff',
                            fontSize: 'clamp(2.4rem, 8vw, 5.5rem)',
                            fontWeight: 300,
                            lineHeight: 1.05,
                            letterSpacing: 'clamp(3px, 1.5vw, 8px)',
                            textTransform: 'uppercase',
                            marginBottom: '1.25rem',
                        }}>
                            Clinical{' '}
                            <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--color-wine-light)' }}>Treatments</span>
                        </h1>

                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(0.875rem, 2vw, 1.1rem)', fontWeight: 300, maxWidth: '36rem', margin: '0 auto', lineHeight: 1.8 }}>
                            Advanced aesthetic procedures, powered by cutting-edge technology and delivered by certified dermatologists.
                        </p>
                    </RevealWrapper>
                </div>
            </section>

            {/* ─── STATS BAR ─── */}
            <section style={{ background: 'var(--color-bg-dark)' }}>
                <div className="container px-0 sm:px-4">
                    <div className="tr-stat-grid">
                        {[
                            { val: '50+', label: 'Treatments' },
                            { val: '30+', label: 'Years Expert' },
                            { val: '15', label: 'Locations' },
                            { val: '50K+', label: 'Patients' },
                        ].map((s, i) => (
                            <div key={i} className="tr-stat">
                                <span style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-wine)', fontWeight: 300, lineHeight: 1, marginBottom: '0.5rem' }}>{s.val}</span>
                                <span style={{ display: 'block', fontSize: '0.625rem', letterSpacing: '2.5px', textTransform: 'uppercase', fontWeight: 600, color: 'rgba(237,232,208,0.5)' }}>{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── FILTER + SEARCH ─── */}
            <div style={{ background: '#fff', borderBottom: '1px solid #f0ece6', position: 'sticky', top: 'var(--header-total-height)', zIndex: 20 }}>
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', paddingTop: '1rem', paddingBottom: '1rem', flexWrap: 'wrap' }}>
                        {/* Pills */}
                        <div className="tr-pills" style={{ flex: 1, minWidth: 0 }}>
                            {treatmentCategories.map((cat) => (
                                <button
                                    key={cat.slug}
                                    className={`tr-pill${activeCategory === cat.slug ? ' active' : ''}`}
                                    onClick={() => setActiveCategory(cat.slug)}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <div className="tr-search" style={{ flexShrink: 0, width: '100%', maxWidth: '220px' }}>
                            <Search size={14} style={{ color: '#ccc', flexShrink: 0 }} />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <button onClick={() => setSearchQuery('')} style={{ color: '#aaa', fontSize: '0.8rem', lineHeight: 1, background: 'none', border: 'none', cursor: 'pointer', padding: '0 2px' }}>✕</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── RESULTS LABEL ─── */}
            <div style={{ background: '#faf9f7', paddingTop: '3rem', paddingBottom: '1.5rem' }}>
                <div className="container">
                    <RevealWrapper direction="up">
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem, 4vw, 2.6rem)', fontWeight: 400, color: '#0d1319', marginBottom: '0.35rem', letterSpacing: '1px' }}>
                            {activeCategoryLabel}
                        </h2>
                        <p style={{ fontSize: '0.8rem', color: '#aaa', fontWeight: 400, letterSpacing: '0.5px' }}>
                            {filtered.length} treatment{filtered.length !== 1 ? 's' : ''}{searchQuery ? ` for "${searchQuery}"` : ''}
                        </p>
                    </RevealWrapper>
                </div>
            </div>

            {/* ─── TREATMENT GRID ─── */}
            <section style={{ background: '#faf9f7', paddingBottom: '6rem' }}>
                <div className="container">
                    {filtered.length === 0 ? (
                        <div className="tr-empty">
                            <p style={{ fontSize: '1.1rem', fontFamily: 'var(--font-heading)', color: '#aaa', marginBottom: '1.5rem' }}>No treatments found.</p>
                            <button
                                onClick={() => { setActiveCategory('all'); setSearchQuery('') }}
                                style={{ background: 'var(--color-wine)', color: '#fff', padding: '0.75rem 2rem', fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                            >
                                Clear Filters
                            </button>
                        </div>
                    ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.75rem' }}>
                            {filtered.map((treatment, i) => (
                                <RevealWrapper key={treatment.id} direction="up" delay={(i % 6) * 0.06}>
                                    <Link to={`/treatments/${treatment.slug}`} className="tr-card group" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}>
                                        {/* Image */}
                                        <div className="tr-card-img-wrap">
                                            <img src={treatment.image} alt={treatment.title} className="tr-card-img" />
                                            <div className="tr-card-overlay">
                                                {/* <span style={{ fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, color: '#fff', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                                    View Treatment <ArrowRight size={11} />
                                                </span> */}
                                            </div>
                                        </div>

                                        {/* Body */}
                                        <div style={{ padding: '1.4rem 1.5rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                            <span style={{ fontSize: '0.6rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-wine)', display: 'block', marginBottom: '0.5rem', opacity: 0.8 }}>
                                                {treatment.category}
                                            </span>

                                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)', color: '#0d1319', fontWeight: 500, lineHeight: 1.3, marginBottom: '0.75rem' }}>
                                                {treatment.title}
                                            </h3>

                                            <p style={{ fontSize: '0.82rem', color: '#888', lineHeight: 1.7, fontWeight: 400, flex: 1, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                                {treatment.shortDescription}
                                            </p>

                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #f5f2ed' }}>
                                                <span style={{ fontSize: '0.72rem', color: '#bbb', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                                                    <Clock size={11} style={{ color: 'var(--color-wine)', opacity: 0.7 }} />
                                                    {treatment.duration}
                                                </span>
                                                <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--color-wine)' }}>
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

            {/* ─── CTA ─── */}
            <CtaBanner />
        </div>
    )
}
