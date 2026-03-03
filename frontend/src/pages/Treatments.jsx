import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import { RevealWrapper } from '../hooks/useAnimations'
import { treatments, treatmentCategories } from '../data/siteData'

export default function Treatments() {
    const [activeCategory, setActiveCategory] = useState('all')

    const filtered = useMemo(() => {
        if (activeCategory === 'all') return treatments
        return treatments.filter((t) => t.categorySlug === activeCategory)
    }, [activeCategory])

    const isAlternatingLayout = ['aayna-exclusive', 'new-launches'].includes(activeCategory)

    return (
        <>
            {/* Hero */}
            <section className="relative pt-0 pb-0 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: '400px' }}>
                    {/* Left - Gold panel */}
                    <div
                        className="flex flex-col justify-center px-8 md:px-14 lg:px-16 py-14 lg:py-20"
                        style={{ background: '#f8b84e' }}
                    >
                        <RevealWrapper>
                            <p className="text-sm font-semibold mb-1" style={{ color: '#353535' }}>
                                <Link to="/" className="hover:underline">Home</Link>
                                {' '}&gt;{' '}
                                <Link to="/treatments" className="hover:underline">Treatments</Link>
                                {activeCategory !== 'all' && (
                                    <>
                                        {' '}&gt;{' '}
                                        <span style={{ color: '#7a5500' }}>
                                            {treatmentCategories.find((c) => c.slug === activeCategory)?.name}
                                        </span>
                                    </>
                                )}
                            </p>

                            <h1
                                className="mb-4 mt-6"
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontWeight: 500,
                                    fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                                    color: '#353535',
                                    lineHeight: 1.15,
                                }}
                            >
                                {activeCategory === 'all'
                                    ? 'Our Treatments'
                                    : activeCategory === 'aayna-exclusive'
                                        ? 'AAYNA Exclusive'
                                        : activeCategory === 'new-launches'
                                            ? 'New Launches'
                                            : treatmentCategories.find((c) => c.slug === activeCategory)?.name + ' Treatments'}
                            </h1>
                            <p style={{ color: '#4a3800', lineHeight: 1.7, fontSize: '0.9375rem' }}>
                                {activeCategory === 'aayna-exclusive'
                                    ? 'AAYNA brings some of the best and latest treatments from across the world exclusively for our clients in India.'
                                    : activeCategory === 'new-launches'
                                        ? 'Experience cutting-edge treatments and breakthrough technologies now available at AAYNA.'
                                        : 'Discover our comprehensive range of skin, hair, facial, and anti-aging treatments powered by cutting-edge technology.'}
                            </p>
                        </RevealWrapper>
                    </div>

                    {/* Right - Hero image */}
                    <div className="h-56 lg:h-auto overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80"
                            alt="AAYNA Treatments"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section
                className="py-5 border-b sticky top-[70px] z-30"
                style={{ borderColor: 'var(--color-border)', background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(8px)' }}
            >
                <div className="container">
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
                        {treatmentCategories.map((cat) => (
                            <button
                                key={cat.slug}
                                onClick={() => setActiveCategory(cat.slug)}
                                className="px-5 py-2 text-[11px] tracking-[1.5px] uppercase font-semibold whitespace-nowrap rounded-full transition-all duration-300"
                                style={{
                                    background: activeCategory === cat.slug ? '#f8b84e' : 'transparent',
                                    color: activeCategory === cat.slug ? '#353535' : 'var(--color-text-muted)',
                                    border: `1.5px solid ${activeCategory === cat.slug ? '#f8b84e' : '#ddd'}`,
                                }}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Alternating Rows (AAYNA Exclusive / New Launches / All) */}
            {(isAlternatingLayout || activeCategory === 'all') && (
                <section className="py-0">
                    {filtered
                        .filter((t) =>
                            activeCategory === 'all'
                                ? ['aayna-exclusive', 'new-launches'].includes(t.categorySlug)
                                : true
                        )
                        .map((treatment, i) => {
                            const isReversed = i % 2 !== 0
                            return (
                                <div key={treatment.id} className="border-b" style={{ borderColor: '#f0ede8' }}>
                                    <div
                                        className="grid grid-cols-1 lg:grid-cols-2"
                                        style={{ minHeight: '420px' }}
                                    >
                                        {/* Image */}
                                        <div className={`overflow-hidden ${isReversed ? 'lg:order-2' : ''}`}>
                                            <RevealWrapper className="h-full">
                                                <img
                                                    src={treatment.image}
                                                    alt={treatment.title}
                                                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                                                    style={{ minHeight: '380px' }}
                                                />
                                            </RevealWrapper>
                                        </div>

                                        {/* Content */}
                                        <div className={`flex items-center px-8 md:px-12 lg:px-14 py-14 ${isReversed ? 'lg:order-1' : ''}`}>
                                            <RevealWrapper direction={isReversed ? 'left' : 'right'}>
                                                <p
                                                    className="text-[10px] tracking-[2px] uppercase font-bold mb-4"
                                                    style={{ color: '#d2880c' }}
                                                >
                                                    {treatment.category}
                                                </p>
                                                <h2
                                                    className="mb-4"
                                                    style={{
                                                        fontFamily: 'var(--font-heading)',
                                                        fontWeight: 500,
                                                        fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                                                        color: '#353535',
                                                        lineHeight: 1.2,
                                                    }}
                                                >
                                                    {treatment.title}
                                                </h2>
                                                <p
                                                    className="mb-7"
                                                    style={{
                                                        color: '#555',
                                                        lineHeight: 1.8,
                                                        fontSize: '0.9375rem',
                                                        maxWidth: '500px',
                                                    }}
                                                >
                                                    {treatment.shortDescription}
                                                </p>
                                                <Link
                                                    to={`/treatments/${treatment.slug}`}
                                                    className="inline-flex items-center gap-2 px-6 py-3 text-[11px] tracking-[2px] uppercase font-bold border-2 transition-all duration-300 group hover:bg-[#f8b84e] hover:border-[#f8b84e] hover:text-white"
                                                    style={{
                                                        borderColor: '#353535',
                                                        color: '#353535',
                                                    }}
                                                >
                                                    LEARN MORE
                                                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                                                </Link>
                                            </RevealWrapper>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </section>
            )}

            {/* Standard Grid */}
            {(!isAlternatingLayout) && (
                <section className="section">
                    <div className="container">
                        {activeCategory === 'all' && (
                            <RevealWrapper className="mb-10">
                                <div className="section-header">
                                    <p className="text-sm tracking-[3px] uppercase mb-3 font-semibold" style={{ color: '#d2880c' }}>
                                        More Treatments
                                    </p>
                                    <h2>All Treatments</h2>
                                    <div className="gold-line" />
                                </div>
                            </RevealWrapper>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                            {filtered
                                .filter((t) =>
                                    activeCategory === 'all'
                                        ? !['aayna-exclusive', 'new-launches'].includes(t.categorySlug)
                                        : true
                                )
                                .map((treatment, i) => (
                                    <RevealWrapper key={treatment.id} direction="up" delay={i * 0.06}>
                                        <Link to={`/treatments/${treatment.slug}`} className="card group block h-full">
                                            <div className="overflow-hidden relative">
                                                <img src={treatment.image} alt={treatment.title} className="card-img" />
                                                <div
                                                    className="absolute top-3 left-3 px-3 py-1 text-[10px] tracking-wider uppercase text-white rounded-full font-semibold"
                                                    style={{ background: '#f8b84e' }}
                                                >
                                                    {treatment.category}
                                                </div>
                                                <div
                                                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                    style={{ background: 'rgba(248, 184, 78, 0.85)' }}
                                                >
                                                    <span className="text-white text-xs tracking-[2px] uppercase flex items-center gap-2 font-semibold">
                                                        Learn More <ArrowRight size={13} />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="card-body flex flex-col flex-1">
                                                <h3 className="group-hover:text-[#d2880c] transition-colors duration-300">
                                                    {treatment.title}
                                                </h3>
                                                <p className="mt-1.5 flex-1">{treatment.shortDescription.slice(0, 90)}...</p>
                                                <div
                                                    className="flex items-center justify-between mt-4 pt-3 border-t"
                                                    style={{ borderColor: 'var(--color-border)' }}
                                                >
                                                    <span className="text-sm font-bold" style={{ color: '#d2880c' }}>
                                                        {treatment.price}
                                                    </span>
                                                    <span className="text-xs" style={{ color: 'var(--color-text-light)' }}>
                                                        <Clock size={12} className="inline mr-1" /> {treatment.duration}
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </RevealWrapper>
                                ))}
                        </div>

                        {filtered.filter((t) =>
                            activeCategory === 'all'
                                ? !['aayna-exclusive', 'new-launches'].includes(t.categorySlug)
                                : true
                        ).length === 0 && (
                                <div className="text-center py-20">
                                    <p className="text-base" style={{ color: 'var(--color-text-muted)' }}>
                                        No treatments found in this category.
                                    </p>
                                </div>
                            )}
                    </div>
                </section>
            )}
        </>
    )
}
