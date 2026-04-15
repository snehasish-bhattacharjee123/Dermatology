import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { RevealWrapper } from '../hooks/useAnimations'
import { galleryImages } from '../data/siteData'

const categories = [
    { key: 'all', label: 'All' },
    { key: 'clinic', label: 'Clinic' },
    { key: 'treatments', label: 'Treatments' },
    { key: 'results', label: 'Results' },
]

// Extended gallery with more variety
const extendedGallery = [
    ...galleryImages,
    { id: 13, src: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80', category: 'treatments', caption: 'Laser Hair Reduction' },
    { id: 14, src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80', category: 'clinic', caption: 'Consultation Room' },
    { id: 15, src: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80', category: 'results', caption: 'Patient Glow Results' },
    { id: 16, src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', category: 'clinic', caption: 'Modern Treatment Suite' },
]

// Assign varied aspect ratios for visual rhythm
const aspects = [
    'tall', 'wide', 'square', 'tall',
    'square', 'tall', 'wide', 'square',
    'wide', 'tall', 'square', 'wide',
    'tall', 'square', 'wide', 'tall',
]

const heightMap = { tall: '480px', wide: '300px', square: '380px' }

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState('all')
    const [lightboxIdx, setLightboxIdx] = useState(null)
    const [imgLoaded, setImgLoaded] = useState({})

    const filtered = activeCategory === 'all'
        ? extendedGallery
        : extendedGallery.filter((img) => img.category === activeCategory)

    const openLightbox = (i) => setLightboxIdx(i)
    const closeLightbox = () => setLightboxIdx(null)
    const prevImg = useCallback(() => setLightboxIdx(i => (i - 1 + filtered.length) % filtered.length), [filtered.length])
    const nextImg = useCallback(() => setLightboxIdx(i => (i + 1) % filtered.length), [filtered.length])

    // Keyboard navigation
    useEffect(() => {
        if (lightboxIdx === null) return
        const handler = (e) => {
            if (e.key === 'ArrowRight') nextImg()
            if (e.key === 'ArrowLeft') prevImg()
            if (e.key === 'Escape') closeLightbox()
        }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [lightboxIdx, nextImg, prevImg])

    return (
        <div style={{ background: '#fff' }}>
            <style>{`
                /* ── Hero ── */
                .gl-hero-bg { position: absolute; inset: 0; }
                .gl-hero-bg img { width: 100%; height: 100%; object-fit: cover; }
                .gl-hero-gradient { display: none; }

                /* ── Filter tabs ── */
                .gl-filter-btn { padding: 0.6rem 1.75rem; font-size: 0.65rem; letter-spacing: 3px; text-transform: uppercase; font-weight: 700; cursor: pointer; border: 1px solid #e0dbd5; background: transparent; color: #888; transition: all 0.3s; position: relative; overflow: hidden; }
                .gl-filter-btn::after { content: ''; position: absolute; inset: 0; background: var(--color-wine); transform: scaleX(0); transform-origin: left; transition: transform 0.35s ease; z-index: -1; }
                .gl-filter-btn:hover { color: var(--color-dark); border-color: transparent; }
                .gl-filter-btn.active { background: var(--color-wine); color: #fff; border-color: var(--color-wine); box-shadow: 0 8px 24px rgba(86,58,86,0.3); }

                /* ── Masonry cards ── */
                .gl-card { position: relative; overflow: hidden; cursor: pointer; }
                .gl-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 1.2s ease; display: block; }
                .gl-card:hover img { transform: scale(1.06); }
                .gl-card-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(30,18,25,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%); opacity: 0; transition: opacity 0.45s ease; display: flex; flex-direction: column; justify-content: flex-end; padding: 1.75rem; }
                .gl-card:hover .gl-card-overlay { opacity: 1; }
                .gl-card-caption { transform: translateY(12px); transition: transform 0.4s ease 0.05s; }
                .gl-card:hover .gl-card-caption { transform: translateY(0); }
                .gl-card-zoom { position: absolute; top: 1rem; right: 1rem; width: 2.5rem; height: 2.5rem; border-radius: 50%; background: rgba(255,255,255,0.12); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; opacity: 0; transform: scale(0.7); transition: all 0.35s ease 0.1s; border: 1px solid rgba(255,255,255,0.25); }
                .gl-card:hover .gl-card-zoom { opacity: 1; transform: scale(1); }
                .gl-tag { display: inline-block; font-size: 0.55rem; letter-spacing: 2px; text-transform: uppercase; font-weight: 700; color: var(--color-wine); margin-bottom: 0.4rem; }

                /* ── Lightbox ── */
                .gl-lightbox { position: fixed; inset: 0; z-index: 9999; background: rgba(10,5,7,0.97); display: flex; align-items: center; justify-content: center; animation: gl-fade 0.3s ease; }
                @keyframes gl-fade { from { opacity: 0; } to { opacity: 1; } }
                .gl-lightbox-img { max-width: 85vw; max-height: 82vh; object-fit: contain; display: block; animation: gl-zoom 0.35s ease; border: 1px solid rgba(255,255,255,0.06); }
                @keyframes gl-zoom { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } }
                .gl-lb-btn { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); color: #fff; width: 3rem; height: 3rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s; }
                .gl-lb-btn:hover { background: var(--color-wine); border-color: var(--color-wine); }
                .gl-lb-close { position: absolute; top: 1.5rem; right: 1.5rem; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); color: #fff; width: 2.75rem; height: 2.75rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s; }
                .gl-lb-close:hover { background: rgba(255,255,255,0.18); }
                .gl-lb-counter { position: absolute; top: 1.75rem; left: 50%; transform: translateX(-50%); font-size: 0.65rem; letter-spacing: 3px; color: rgba(255,255,255,0.4); text-transform: uppercase; font-weight: 600; }

                /* ── Stats row ── */
                .gl-stat { text-align: center; padding: 1.5rem; border-right: 1px solid rgba(255,255,255,0.1); }
                .gl-stat:last-child { border-right: none; }
                
                /* ── Responsive masonry ── */
                .gl-masonry { columns: 1; gap: 1rem; }
                @media (min-width: 640px) { .gl-masonry { columns: 2; } }
                @media (min-width: 1024px) { .gl-masonry { columns: 3; } }
                .gl-masonry-item { break-inside: avoid; margin-bottom: 1rem; }
            `}</style>

            {/* ─── HERO ─── */}
            <section style={{ position: 'relative', height: '60vh', minHeight: '450px', display: 'flex', alignItems: 'center', overflow: 'hidden', marginTop: 'var(--header-total-height)' }}>
                <div className="gl-hero-bg">
                    <img
                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1280&q=75"
                        alt="D'CosMedis Gallery"
                        fetchPriority="high"
                        decoding="async"
                        sizes="100vw"
                        srcSet="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=640&q=75 640w, https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1280&q=75 1280w, https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=75 1920w"
                    />
                    <div className="gl-hero-gradient" />
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                    <RevealWrapper direction="up">
                        <span style={{ display: 'inline-block', fontSize: '0.625rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-accent)', background: 'rgba(84,56,86,0.18)', border: '1px solid rgba(205,191,204,0.4)', borderRadius: '9999px', padding: '0.4rem 1.25rem', marginBottom: '1.5rem' }}>
                            Visual Stories
                        </span>
                        <h1 style={{ fontFamily: 'var(--font-heading)', color: '#fff', letterSpacing: '6px', textTransform: 'uppercase', fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', lineHeight: 1.05, marginBottom: '1.5rem' }}>
                            <span style={{ fontWeight: 300 }}>OUR </span>
                            <span style={{ fontWeight: 700, color: 'var(--color-accent)' }}>GALLERY</span>
                        </h1>
                        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'clamp(0.9375rem, 2vw, 1.125rem)', fontWeight: 300, maxWidth: '38rem', margin: '0 auto', lineHeight: 1.75 }}>
                            Explore our cutting-edge clinic spaces, advanced treatment sessions, and transformative results through our visual portfolio.
                        </p>
                    </RevealWrapper>
                </div>

                {/* Scroll indicator */}
                <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
                    <div style={{ width: '1px', height: '2.5rem', background: 'linear-gradient(to bottom, transparent, var(--color-wine))' }} />
                </div>
            </section>

            {/* ─── STATS BAR ─── */}
            <section style={{ background: 'var(--color-dark)', padding: '0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
                        {[
                            { val: `${extendedGallery.length}+`, label: 'Gallery Images' },
                            { val: '4', label: 'Clinic Spaces' },
                            { val: '50+', label: 'Treatments Shown' },
                            { val: '50K+', label: 'Happy Patients' },
                        ].map((s, i) => (
                            <div key={i} className="gl-stat">
                                <span style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-wine)', fontWeight: 300, lineHeight: 1 }}>{s.val}</span>
                                <span style={{ display: 'block', fontSize: '0.6rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, color: 'rgba(255,255,255,0.45)', marginTop: '0.4rem' }}>{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── FILTER TABS ─── */}
            <section style={{ background: 'var(--color-bg-cream)', padding: '2.5rem 0', borderBottom: '1px solid #f0ede8', position: 'sticky', top: 0, zIndex: 10, backdropFilter: 'blur(12px)' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                        {categories.map((cat) => (
                            <button
                                key={cat.key}
                                className={`gl-filter-btn${activeCategory === cat.key ? ' active' : ''}`}
                                onClick={() => setActiveCategory(cat.key)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── MASONRY GRID ─── */}
            <section style={{ background: 'var(--color-bg-cream)', padding: '4rem 0 6rem' }}>
                <div className="container">
                    <div className="gl-masonry">
                        {filtered.map((img, i) => {
                            const aspect = aspects[i % aspects.length]
                            const h = heightMap[aspect]
                            return (
                                <RevealWrapper key={`${img.id}-${activeCategory}`} direction="up" delay={(i % 6) * 0.07}>
                                    <div
                                        className="gl-masonry-item gl-card"
                                        style={{ height: h }}
                                        onClick={() => openLightbox(i)}
                                    >
                                        <img
                                            src={img.src.replace(/w=\d+/, 'w=500')}
                                            alt={img.caption}
                                            loading="lazy"
                                            decoding="async"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            srcSet={`${img.src.replace(/w=\d+/, 'w=400')} 400w, ${img.src.replace(/w=\d+/, 'w=600')} 600w, ${img.src} 800w`}
                                        />
                                        <div className="gl-card-overlay">
                                            <div className="gl-card-caption">
                                                <span className="gl-tag">{img.category}</span>
                                                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.125rem', color: '#fff', fontWeight: 500 }}>
                                                    {img.caption}
                                                </h4>
                                            </div>
                                        </div>
                                        {/* Zoom icon */}
                                        <div className="gl-card-zoom">
                                            <ZoomIn size={15} style={{ color: '#fff' }} />
                                        </div>
                                        {/* Category tag corner */}
                                        <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(30,18,25,0.55)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.15)', padding: '0.3rem 0.8rem', borderRadius: '9999px' }}>
                                            <span style={{ fontSize: '0.55rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, color: 'rgba(255,255,255,0.85)' }}>{img.category}</span>
                                        </div>
                                    </div>
                                </RevealWrapper>
                            )
                        })}
                    </div>

                    {filtered.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '6rem 0', color: 'var(--color-text-muted)' }}>
                            <p style={{ fontSize: '1rem' }}>No images in this category yet.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* ─── LIGHTBOX ─── */}
            {lightboxIdx !== null && (
                <div className="gl-lightbox" onClick={closeLightbox}>
                    {/* Close */}
                    <button className="gl-lb-close" onClick={closeLightbox} aria-label="Close">
                        <X size={18} />
                    </button>

                    {/* Counter */}
                    <span className="gl-lb-counter">{lightboxIdx + 1} / {filtered.length}</span>

                    {/* Image */}
                    <img
                        key={lightboxIdx}
                        src={filtered[lightboxIdx].src}
                        alt={filtered[lightboxIdx].caption}
                        className="gl-lightbox-img"
                        onClick={e => e.stopPropagation()}
                    />

                    {/* Caption */}
                    <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
                        <span style={{ display: 'block', fontSize: '0.55rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-wine)', marginBottom: '0.3rem' }}>
                            {filtered[lightboxIdx].category}
                        </span>
                        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9375rem', fontFamily: 'var(--font-heading)' }}>
                            {filtered[lightboxIdx].caption}
                        </p>
                    </div>

                    {/* Prev */}
                    <button className="gl-lb-btn" style={{ left: '1.5rem' }} onClick={e => { e.stopPropagation(); prevImg() }} aria-label="Previous">
                        <ChevronLeft size={20} />
                    </button>

                    {/* Next */}
                    <button className="gl-lb-btn" style={{ right: '1.5rem' }} onClick={e => { e.stopPropagation(); nextImg() }} aria-label="Next">
                        <ChevronRight size={20} />
                    </button>

                    {/* Dot strip */}
                    <div style={{ position: 'absolute', bottom: '5.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.4rem' }}>
                        {filtered.map((_, i) => (
                            <button
                                key={i}
                                onClick={e => { e.stopPropagation(); setLightboxIdx(i) }}
                                style={{ width: i === lightboxIdx ? '1.5rem' : '0.375rem', height: '0.375rem', borderRadius: '9999px', background: i === lightboxIdx ? 'var(--color-wine)' : 'rgba(255,255,255,0.25)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.3s' }}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* ─── CTA ─── */}
            <section style={{ background: 'var(--color-wine)', padding: '5rem 0', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '44rem' }}>
                    <RevealWrapper>
                        <span style={{ display: 'block', fontSize: '0.625rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700, color: 'rgba(255,255,255,0.7)', marginBottom: '1rem' }}>Ready to Begin?</span>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: '#fff', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                            Experience the Transformation Yourself
                        </h2>
                        <p style={{ color: 'var(--color-bg-cream)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2.5rem', fontWeight: 400 }}>
                            Book a consultation with our expert dermatologists and start your personalised skin journey today.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/book" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#fff', color: 'var(--color-wine)', padding: '1rem 2.5rem', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700 }}>
                                BOOK CONSULTATION <ArrowRight size={14} />
                            </Link>
                            <Link to="/treatments" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', color: '#fff', padding: '1rem 2.5rem', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, border: '1px solid rgba(255,255,255,0.5)' }}>
                                Our Treatments
                            </Link>
                        </div>
                    </RevealWrapper>
                </div>
            </section>
        </div>
    )
}
