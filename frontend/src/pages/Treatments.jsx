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
        <div className="bg-white">
            <style>{`
                /* ── Filter pills ── */
                .tr-cat-btn { padding: 0.6rem 1.25rem; font-size: 0.65rem; letter-spacing: 2px; text-transform: uppercase; font-weight: 600; cursor: pointer; border-radius: 9999px; border: 1px solid #e0dbd5; background: transparent; color: #888; transition: all 0.3s; white-space: nowrap; font-family: var(--font-body); }
                .tr-cat-btn:hover { border-color: var(--color-wine); color: var(--color-dark); }
                .tr-cat-btn.active { background: var(--color-wine); color: #fff; border-color: var(--color-wine); box-shadow: 0 4px 12px rgba(114,47,55,0.2); }

                /* ── Treatment cards ── */
                .tr-card { display: block; background: #fff; border: 1px solid #f0ede8; overflow: hidden; transition: all 0.45s ease; position: relative; }
                .tr-card:hover { box-shadow: 0 24px 60px rgba(0,0,0,0.08); transform: translateY(-4px); border-color: transparent; }
                .tr-card-img { width: 100%; height: 260px; object-fit: cover; transition: transform 1.2s ease; display: block; }
                .tr-card:hover .tr-card-img { transform: scale(1.05); }
                
                /* ── Empty state ── */
                .tr-empty { text-align: center; padding: 6rem 1rem; color: var(--color-text-muted); }

                /* ── Search box ── */
                .tr-search { display: flex; align-items: center; gap: 0.75rem; background: #f9f8f6; border: 1px solid transparent; padding: 0.75rem 1.25rem; width: 100%; transition: all 0.3s; border-radius: 999px; }
                .tr-search:focus-within { border-color: var(--color-wine); background: #fff; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
                .tr-search input { border: none; outline: none; font-size: 0.875rem; color: var(--color-dark); background: transparent; width: 100%; font-family: var(--font-body); }
                .tr-search input::placeholder { color: #999; }

                /* ── Scrollbar hide ── */
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
                .scrollbar-hide::-webkit-scrollbar { display: none; }
            `}</style>

            {/* ─── HERO (Reduced Height + Video Background) ─── */}
            <section className="relative flex items-center overflow-hidden mt-[var(--header-total-height)] min-h-[40vh] md:min-h-[45vh] max-h-[500px]">
                <div className="absolute inset-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover object-center"
                    >
                        <source src="https://videos.pexels.com/video-files/6835154/6835154-uhd_2732_1440_25fps.mp4" type="video/mp4" />
                    </video>
                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                </div>

                <div className="container relative z-10 py-12 md:py-0">
                    <RevealWrapper direction="left">
                        {/* Breadcrumb */}
                        <div className="flex items-center gap-2 mb-4 md:mb-6 flex-wrap">
                            <Link to="/" className="text-[10px] md:text-xs tracking-widest uppercase font-semibold text-white/60 hover:text-white transition-colors">Home</Link>
                            <span className="text-white/30">/</span>
                            <span className="text-[10px] md:text-xs tracking-widest uppercase font-semibold text-white">Treatments</span>
                        </div>

                        <h1 className="font-heading text-white tracking-wide leading-tight mb-4 text-4xl md:text-5xl lg:text-6xl">
                            <span className="block font-light text-white/90">Clinical</span>
                            <span className="block font-medium text-white">Treatments</span>
                        </h1>

                        <p className="text-white/80 text-sm md:text-base font-light max-w-lg leading-relaxed border-l-2 border-wine pl-4 mb-0">
                            Discover our comprehensive range of advanced aesthetic procedures, powered by cutting-edge technology and delivered by certified experts.
                        </p>
                    </RevealWrapper>
                </div>
            </section>

            {/* ─── STATS BAR ─── */}
            <section className="bg-dark py-0">
                <div className="container px-0 sm:px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        {[
                            { val: '50+', label: 'Treatments' },
                            { val: '30+', label: 'Years Expert' },
                            { val: '15', label: 'Locations' },
                            { val: '50K+', label: 'Patients' },
                        ].map((s, i) => (
                            <div key={i} className={`text-center py-6 md:py-8 px-4 border-b md:border-b-0 md:border-r border-white/10 ${i % 2 === 0 ? 'border-r' : ''} ${i === 3 ? 'border-none' : ''}`}>
                                <span className="block font-heading text-2xl md:text-3xl lg:text-4xl text-wine font-light leading-none mb-2">{s.val}</span>
                                <span className="block text-[9px] md:text-[10px] tracking-widest uppercase font-bold text-white/40">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── FILTER + SEARCH BAR (Mobile Optimized) ─── */}
            <section className="bg-white/90 py-4 border-b border-border/20 sticky top-[var(--header-total-height)] z-20 backdrop-blur-xl">
                <div className="container">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
                        {/* Category pills */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-1 w-full md:w-auto scrollbar-hide">
                            {treatmentCategories.map((cat) => (
                                <button
                                    key={cat.slug}
                                    className={`tr-cat-btn flex-shrink-0 ${activeCategory === cat.slug ? ' active' : ''}`}
                                    onClick={() => setActiveCategory(cat.slug)}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <div className="tr-search max-w-full md:max-w-xs shrink-0">
                            <Search size={16} className="text-muted/50 shrink-0" />
                            <input
                                type="text"
                                placeholder="Search treatments..."
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <button onClick={() => setSearchQuery('')} className="text-muted hover:text-dark">✕</button>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── RESULTS HEADER ─── */}
            <section className="bg-cream pt-10 pb-4">
                <div className="container flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-dark mb-1">
                            {activeCategoryLabel}
                        </h2>
                        <span className="text-xs md:text-sm text-muted tracking-wide font-body">
                            {filtered.length} treatment{filtered.length !== 1 ? 's' : ''} available
                            {searchQuery ? ` for "${searchQuery}"` : ''}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 text-muted text-xs md:text-sm font-body bg-white/50 px-4 py-2 rounded-full border border-border/30 w-fit">
                        <SlidersHorizontal size={14} />
                        <span>Filtered by: <strong className="text-dark font-medium">{activeCategoryLabel}</strong></span>
                    </div>
                </div>
            </section>

            {/* ─── TREATMENT GRID ─── */}
            <section className="bg-cream pb-24">
                <div className="container max-w-[90rem]">
                    {filtered.length === 0 ? (
                        <div className="tr-empty">
                            <p className="text-lg mb-4 font-body">No treatments found matching your criteria.</p>
                            <button onClick={() => { setActiveCategory('all'); setSearchQuery('') }} className="bg-wine text-white px-8 py-3 text-xs tracking-widest uppercase font-bold hover:bg-dark transition-colors">
                                Clear Filters
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filtered.map((treatment, i) => (
                                <RevealWrapper key={treatment.id} direction="up" delay={(i % 8) * 0.05}>
                                    <Link to={`/treatments/${treatment.slug}`} className="tr-card group">
                                        {/* Image */}
                                        <div className="relative overflow-hidden bg-white">
                                            <img src={treatment.image} alt={treatment.title} className="tr-card-img" />
                                            <div className="absolute inset-0 bg-dark/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <span className="text-white text-[10px] tracking-[3px] uppercase font-bold flex items-center gap-2 border border-white/30 px-6 py-2 backdrop-blur-sm">
                                                    Discover More <ArrowRight size={12} className="-rotate-45" />
                                                </span>
                                            </div>
                                            <span className="absolute top-4 left-4 bg-dark text-white text-[9px] tracking-[2px] uppercase font-bold px-3 py-1.5 shadow-sm">
                                                {treatment.category}
                                            </span>
                                        </div>

                                        {/* Body */}
                                        <div className="p-6 md:p-8 flex flex-col h-[200px]">
                                            <h3 className="font-heading text-xl text-dark mb-3 group-hover:text-wine transition-colors line-clamp-2">
                                                {treatment.title}
                                            </h3>
                                            <p className="text-sm text-muted leading-relaxed font-light mb-auto line-clamp-2">
                                                {treatment.shortDescription}
                                            </p>

                                            {/* Footer meta */}
                                            <div className="flex items-center justify-between pt-5 border-t border-border/30 mt-4">
                                                <div className="flex items-center gap-1.5 text-xs text-muted font-medium">
                                                    <Clock size={12} className="text-wine" />
                                                    <span>{treatment.duration}</span>
                                                </div>
                                                <span className="text-xs font-bold text-wine tracking-wide">
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
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1612817288484-6f916006741a?w=1920&q=80"
                        alt="Begin Your Journey"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-dark/60" />
                </div>
                <div className="container relative z-10 text-center max-w-3xl">
                    <RevealWrapper>
                        <span className="inline-block text-[10px] md:text-xs tracking-[3px] uppercase font-bold text-cream mb-4 border border-cream/30 px-4 py-1 rounded-full">
                            Begin Your Transformation
                        </span>
                        <h2 className="font-heading text-3xl md:text-5xl text-white mb-6 leading-tight">
                            Ready to Begin Your <br />
                            <span className="italic text-cream font-light">Skin Journey?</span>
                        </h2>
                        <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 font-light px-4">
                            Discover personalised treatments designed by our expert dermatologists to address your unique skin concerns and help you achieve radiant, healthy skin.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/book" className="inline-flex items-center justify-center gap-2 bg-cream text-dark px-8 py-3.5 text-xs tracking-[2px] uppercase font-bold hover:bg-white transition-colors w-full sm:w-auto">
                                BOOK CONSULTATION <ArrowRight size={14} />
                            </Link>
                            <Link to="/concerns" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-3.5 text-xs tracking-[2px] uppercase font-bold bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors w-full sm:w-auto">
                                Browse Concerns
                            </Link>
                        </div>
                    </RevealWrapper>
                </div>
            </section>
        </div>
    )
}
