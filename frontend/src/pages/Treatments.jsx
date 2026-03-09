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
                                        ? 'Exclusive Treatments'
                                        : activeCategory === 'new-launches'
                                            ? 'New Launches'
                                            : treatmentCategories.find((c) => c.slug === activeCategory)?.name + ' Treatments'}
                            </Heading>

                            <Text size="md" style={{ color: 'rgba(0,0,0,0.7)', maxWidth: '500px' }}>
                                {activeCategory === 'aayna-exclusive'
                                    ? 'We bring some of the best and latest treatments from across the world exclusively for our clients in India.'
                                    : activeCategory === 'new-launches'
                                        ? 'Experience cutting-edge treatments and breakthrough technologies now available at D\'CosMedis.'
                                        : 'Discover our comprehensive range of skin, hair, facial, and anti-aging treatments powered by cutting-edge technology.'}
                            </Text>
                        </RevealWrapper>
                    </div>

                    {/* Right - Hero image */}
                    <div className="h-64 lg:h-auto overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80"
                            alt="D'CosMedis Treatments"
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
                            const sectionBg = i % 2 === 0 ? '#ffffff' : '#faf8f4'
                            return (
                                <div
                                    key={treatment.id}
                                    className="border-b"
                                    style={{ borderColor: 'var(--color-border-light)', background: sectionBg }}
                                >
                                    <div
                                        className="grid grid-cols-1 lg:grid-cols-12 gap-0"
                                        style={{ minHeight: '480px' }}
                                    >
                                        {/* Image - 6 columns */}
                                        <div className={`lg:col-span-6 overflow-hidden ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                                            <RevealWrapper className="h-full">
                                                <img
                                                    src={treatment.image}
                                                    alt={treatment.title}
                                                    className="w-full h-full object-cover hover:scale-103 transition-transform duration-700"
                                                    style={{ minHeight: '400px', borderRadius: '6px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}
                                                />
                                            </RevealWrapper>
                                        </div>

                                        {/* Content - 6 columns */}
                                        <div className={`lg:col-span-6 flex items-center px-8 md:px-12 lg:px-16 py-14 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                                            <RevealWrapper direction={isReversed ? 'left' : 'right'}>
                                                <div
                                                    className="inline-block px-3 py-1 text-[10px] tracking-wider uppercase text-white rounded-full font-semibold mb-3"
                                                    style={{ background: 'var(--color-gold)' }}
                                                >
                                                    {treatment.category}
                                                </div>

                                                <Heading
                                                    variant="card"
                                                    className="mb-6"
                                                    style={{ fontSize: '26px', fontWeight: '600', letterSpacing: '0.5px' }}
                                                >
                                                    {treatment.title}
                                                </Heading>

                                                <div className="space-y-3 mb-8">
                                                    <p
                                                        style={{
                                                            fontSize: '16px',
                                                            lineHeight: 1.7,
                                                            color: '#666',
                                                        }}
                                                    >
                                                        {treatment.shortDescription}
                                                    </p>
                                                </div>

                                                {/* Benefits list with bullet points */}
                                                <ul className="space-y-2 mb-8">
                                                    {treatment.benefits && treatment.benefits.slice(0, 3).map((benefit, idx) => (
                                                        <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                                                            <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: 'var(--color-gold)' }}></span>
                                                            {benefit}
                                                        </li>
                                                    ))}
                                                </ul>

                                                <Link
                                                    to={`/treatments/${treatment.slug}`}
                                                    className="btn btn-primary inline-flex"
                                                >
                                                    Learn More
                                                    <ArrowRight size={16} className="ml-2" />
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
                <section className="section" style={{ padding: '100px 0' }}>
                    <div className="container" style={{ maxWidth: '1200px' }}>
                        {activeCategory === 'all' && (
                            <RevealWrapper className="mb-12">
                                <div className="section-header">
                                    <Caption variant="overline">More Treatments</Caption>
                                    <Heading variant="section">All Treatments</Heading>
                                    <div className="gold-line" />
                                </div>
                            </RevealWrapper>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                            {filtered
                                .filter((t) =>
                                    activeCategory === 'all'
                                        ? !['aayna-exclusive', 'new-launches'].includes(t.categorySlug)
                                        : true
                                )
                                .map((treatment, i) => (
                                    <RevealWrapper key={treatment.id} direction="up" delay={i * 0.06}>
                                        <Link to={`/treatments/${treatment.slug}`} className="card group block h-full hover-lift">
                                            <div className="overflow-hidden relative">
                                                <img
                                                    src={treatment.image}
                                                    alt={treatment.title}
                                                    className="card-img hover:scale-103 transition-transform duration-700"
                                                    style={{ borderRadius: '6px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}
                                                />
                                                <div
                                                    className="absolute top-5 left-5 px-4 py-2 text-[11px] tracking-widest uppercase text-white rounded-full font-bold shadow-sm"
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
                                            <div className="card-body flex flex-col flex-1 p-5">
                                                <h3 className="group-hover:text-gold transition-colors duration-300" style={{ fontSize: '20px', fontWeight: '600' }}>
                                                    {treatment.title}
                                                </h3>
                                                <Text color="muted" size="sm" className="mt-3 flex-1" style={{ lineHeight: 1.7 }}>
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

            {/* Footer CTA Section */}
            <section style={{
                background: '#faf7f2',
                padding: '80px 20px',
                textAlign: 'center'
            }}>
                <div className="container" style={{ maxWidth: '1200px' }}>
                    <RevealWrapper>
                        <Heading variant="section" className="mb-6" style={{ color: 'var(--color-dark)' }}>
                            Ready to Begin Your Skin Journey
                        </Heading>
                        <Text size="md" color="muted" className="mb-8" style={{ maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
                            Discover personalized treatments designed to address your unique skin concerns and help you achieve the radiant, healthy skin you deserve.
                        </Text>
                        <Link
                            to="/book"
                            className="inline-block border border-gold px-8 py-4 text-base font-semibold tracking-wider uppercase text-gold transition-all duration-300 hover:bg-gold hover:text-white"
                        >
                            Book Your Consultation
                        </Link>
                    </RevealWrapper>
                </div>
            </section>

            <style>{`
                .text-gold {
                    color: var(--color-gold);
                }
                .group-hover\\:text-gold:hover {
                    color: var(--color-gold);
                }
                .card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 12px 30px rgba(0,0,0,0.1);
                }
            `}</style>
        </>
    )
}
