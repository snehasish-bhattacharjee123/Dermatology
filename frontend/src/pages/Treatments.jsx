import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import { RevealWrapper } from '../hooks/useAnimations'
import { Heading, Text, Caption } from '../components/ui/Typography'
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
            {/* Hero - Consistent */}
            <section className="relative pt-0 pb-0 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: '450px' }}>
                    {/* Left - Gold panel */}
                    <div
                        className="flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16 lg:py-20"
                        style={{ background: 'var(--color-gold)' }}
                    >
                        <RevealWrapper>
                            <nav className="text-sm font-medium mb-6" style={{ color: 'var(--color-dark)' }}>
                                <Link to="/" className="hover:underline">Home</Link>
                                {' > '}
                                <Link to="/treatments" className="hover:underline">Treatments</Link>
                                {activeCategory !== 'all' && (
                                    <>
                                        {' > '}
                                        <span style={{ color: 'rgba(0,0,0,0.5)' }}>
                                            {treatmentCategories.find((c) => c.slug === activeCategory)?.name}
                                        </span>
                                    </>
                                )}
                            </nav>

                            <Heading 
                                variant="section" 
                                className="mb-4"
                                style={{ color: 'var(--color-dark)' }}
                            >
                                {activeCategory === 'all'
                                    ? 'Our Treatments'
                                    : activeCategory === 'aayna-exclusive'
                                        ? 'AAYNA Exclusive'
                                        : activeCategory === 'new-launches'
                                            ? 'New Launches'
                                            : treatmentCategories.find((c) => c.slug === activeCategory)?.name + ' Treatments'}
                            </Heading>
                            
                            <Text size="md" style={{ color: 'rgba(0,0,0,0.7)', maxWidth: '500px' }}>
                                {activeCategory === 'aayna-exclusive'
                                    ? 'AAYNA brings some of the best and latest treatments from across the world exclusively for our clients in India.'
                                    : activeCategory === 'new-launches'
                                        ? 'Experience cutting-edge treatments and breakthrough technologies now available at AAYNA.'
                                        : 'Discover our comprehensive range of skin, hair, facial, and anti-aging treatments powered by cutting-edge technology.'}
                            </Text>
                        </RevealWrapper>
                    </div>

                    {/* Right - Hero image */}
                    <div className="h-64 lg:h-auto overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80"
                            alt="AAYNA Treatments"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Category Filter - Improved */}
            <section
                className="py-5 border-b sticky top-[var(--header-height-scrolled)] z-30"
                style={{ 
                    borderColor: 'var(--color-border)', 
                    background: 'rgba(255,255,255,0.98)', 
                    backdropFilter: 'blur(12px)' 
                }}
            >
                <div className="container">
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
                        {treatmentCategories.map((cat) => (
                            <button
                                key={cat.slug}
                                onClick={() => setActiveCategory(cat.slug)}
                                className="px-5 py-2.5 text-[11px] tracking-[1.5px] uppercase font-semibold whitespace-nowrap rounded-full transition-all duration-300"
                                style={{
                                    background: activeCategory === cat.slug ? 'var(--color-gold)' : 'transparent',
                                    color: activeCategory === cat.slug ? 'var(--color-dark)' : 'var(--color-text-muted)',
                                    border: `1.5px solid ${activeCategory === cat.slug ? 'var(--color-gold)' : 'var(--color-border)'}`,
                                }}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Alternating Rows */}
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
                                <div 
                                    key={treatment.id} 
                                    className="border-b"
                                    style={{ borderColor: 'var(--color-border-light)' }}
                                >
                                    <div
                                        className="grid grid-cols-1 lg:grid-cols-2"
                                        style={{ minHeight: '480px' }}
                                    >
                                        {/* Image */}
                                        <div className={`overflow-hidden ${isReversed ? 'lg:order-2' : ''}`}>
                                            <RevealWrapper className="h-full">
                                                <img
                                                    src={treatment.image}
                                                    alt={treatment.title}
                                                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                                                    style={{ minHeight: '400px' }}
                                                />
                                            </RevealWrapper>
                                        </div>

                                        {/* Content */}
                                        <div className={`flex items-center px-8 md:px-12 lg:px-16 py-14 ${isReversed ? 'lg:order-1' : ''}`}>
                                            <RevealWrapper direction={isReversed ? 'left' : 'right'}>
                                                <Caption variant="overline" className="mb-4">
                                                    {treatment.category}
                                                </Caption>
                                                
                                                <Heading variant="section" className="mb-4">
                                                    {treatment.title}
                                                </Heading>
                                                
                                                <Text size="md" color="muted" className="mb-8 max-w-lg" style={{ lineHeight: 1.8 }}>
                                                    {treatment.shortDescription}
                                                </Text>
                                                
                                                <Link
                                                    to={`/treatments/${treatment.slug}`}
                                                    className="btn btn-outline"
                                                >
                                                    Learn More
                                                    <ArrowRight size={16} />
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
                            <RevealWrapper className="mb-12">
                                <div className="section-header">
                                    <Caption variant="overline">More Treatments</Caption>
                                    <Heading variant="section">All Treatments</Heading>
                                    <div className="gold-line" />
                                </div>
                            </RevealWrapper>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                                                    className="absolute top-4 left-4 px-3 py-1.5 text-[10px] tracking-wider uppercase text-white rounded-full font-semibold"
                                                    style={{ background: 'var(--color-gold)' }}
                                                >
                                                    {treatment.category}
                                                </div>
                                                <div
                                                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                    style={{ background: 'rgba(248, 184, 78, 0.9)' }}
                                                >
                                                    <span className="text-white text-xs tracking-[2px] uppercase flex items-center gap-2 font-semibold">
                                                        Learn More <ArrowRight size={14} />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="card-body flex flex-col flex-1">
                                                <h3 className="group-hover:text-gold transition-colors duration-300">
                                                    {treatment.title}
                                                </h3>
                                                <Text color="muted" size="sm" className="mt-2 flex-1">
                                                    {treatment.shortDescription.slice(0, 90)}...
                                                </Text>
                                                <div
                                                    className="flex items-center justify-between mt-5 pt-4 border-t"
                                                    style={{ borderColor: 'var(--color-border)' }}
                                                >
                                                    <span className="text-sm font-bold" style={{ color: 'var(--color-gold-dark)' }}>
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
                                    <Text size="lg" color="muted">
                                        No treatments found in this category.
                                    </Text>
                                </div>
                            )}
                    </div>
                </section>
            )}

            <style>{`
                .text-gold {
                    color: var(--color-gold);
                }
                .group-hover\:text-gold:hover {
                    color: var(--color-gold);
                }
            `}</style>
        </>
    )
}
