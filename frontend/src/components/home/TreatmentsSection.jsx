import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { RevealWrapper } from '../../hooks/useAnimations'
import { Text } from '../ui/Typography'
import { treatments } from '../../data/siteData'

// ===== TREATMENTS SECTION - PREMIUM CARDS =====
export default function TreatmentsSection() {
    const carouselRef = useRef(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const checkScrollButtons = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
            setCanScrollLeft(scrollLeft > 0)
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
        }
    }

    useEffect(() => {
        checkScrollButtons()
        const carousel = carouselRef.current
        if (carousel) {
            carousel.addEventListener('scroll', checkScrollButtons)
            return () => carousel.removeEventListener('scroll', checkScrollButtons)
        }
    }, [])

    const scroll = (direction) => {
        if (carouselRef.current) {
            // scroll width approximately width of a card + gap
            const scrollAmount = window.innerWidth < 768 ? 280 : 380
            carouselRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section className="border-[#d4c8b0] overflow-hidden" style={{ background: '#EDE8D0', padding: 'clamp(2.5rem, 8vw, 8rem) 0' }}>
            <div className="container max-w-6xl">
                <RevealWrapper>
                    <div className="text-center mb-8 md:mb-16">
                        <span
                            className="inline-block tracking-[4px] uppercase font-bold mb-3 md:mb-4 opacity-90"
                            style={{ color: 'var(--color-wine)', fontSize: 'clamp(0.55rem, 1.5vw, 0.75rem)' }}
                        >
                            Our Expertise
                        </span>
                        <h2
                            style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: 'clamp(1.6rem, 5.5vw, 3.75rem)',
                                fontWeight: 400,
                                lineHeight: 1.15,
                                color: 'var(--color-dark)',
                                marginBottom: '0.75rem'
                            }}
                        >
                            Premium <span className="italic text-wine">Treatments</span>
                        </h2>
                        <p
                            className="max-w-2xl mx-auto"
                            style={{
                                color: 'var(--color-text-muted)',
                                fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                                lineHeight: 1.65
                            }}
                        >
                            Discover our comprehensive range of advanced dermatology and aesthetic treatments.
                        </p>
                    </div>
                </RevealWrapper>
            </div>

            {/* Carousel Container */}
            <div className="relative">
                <div
                    ref={carouselRef}
                    className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide px-4 md:px-8 lg:px-[max(var(--container-padding),calc((100vw-var(--container-max))/2+var(--container-padding)))] pb-8 pt-4"
                    style={{
                        scrollSnapType: 'x mandatory',
                        WebkitOverflowScrolling: 'touch',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                >
                    {treatments.slice(0, 6).map((treatment, i) => (
                        <RevealWrapper
                            key={treatment.id}
                            direction="up"
                            delay={i * 0.08}
                            className="flex-shrink-0 h-full flex flex-col"
                            style={{ scrollSnapAlign: 'start', width: 'clamp(220px, 70vw, 350px)' }}
                        >
                            <Link to={`/treatments/${treatment.slug}`} className="treatment-card card group flex flex-col flex-1 hover-lift h-full border border-[#d4c8b0] rounded-2xl shadow-sm transition-all duration-500 overflow-hidden hover:shadow-2xl hover:border-wine/30" style={{ background: '#F5F0DC' }}>
                                <div className="overflow-hidden relative" style={{ height: 'clamp(150px, 40vw, 220px)' }}>
                                    <img
                                        src={treatment.image}
                                        alt={treatment.title}
                                        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.08]"
                                        loading="lazy"
                                        decoding="async"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        srcSet={`${treatment.image.replace(/w=\d+/, 'w=400')} 400w, ${treatment.image.replace(/w=\d+/, 'w=600')} 600w, ${treatment.image} 800w`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="card-body p-4 md:p-6 flex flex-col flex-1">
                                    <h3
                                        className="transition-colors duration-300 mb-2 font-serif group-hover:text-wine"
                                        style={{ fontSize: 'clamp(0.95rem, 3vw, 1.25rem)', fontWeight: 600, color: 'var(--color-dark)', lineHeight: 1.3 }}
                                    >
                                        {treatment.title}
                                    </h3>
                                    <p className="mt-1 flex-1 text-[#6b4f5a] font-light" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', lineHeight: 1.7 }}>
                                        {treatment.shortDescription.slice(0, 85)}...
                                    </p>
                                    <div
                                        className="flex items-center justify-between mt-auto pt-3 border-t border-[#f0ede8]"
                                    >
                                        <span className="flex items-center gap-1.5 font-bold tracking-[2px] uppercase text-wine transition-colors" style={{ fontSize: '0.6rem' }}>
                                        </span>
                                        <span
                                            className="text-[#8a7f76] bg-[#f8f6f3] px-2 py-1 rounded-sm"
                                            style={{ fontSize: '0.6rem', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 700 }}
                                        >
                                            {treatment.duration}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </RevealWrapper>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={() => scroll('left')}
                    className={`absolute left-2 md:left-8 top-[calc(50%-16px)] -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-lg flex items-center justify-center border border-[#f0ede8]
                               transition-all duration-300 z-10 hover:border-wine hover:bg-wine group
                               ${canScrollLeft ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={24} className="text-wine group-hover:text-white transition-colors" />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className={`absolute right-2 md:right-8 top-[calc(50%-16px)] -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-lg flex items-center justify-center border border-[#f0ede8]
                               transition-all duration-300 z-10 hover:border-wine hover:bg-wine group
                               ${canScrollRight ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                    aria-label="Next slide"
                >
                    <ChevronRight size={24} className="text-wine group-hover:text-white transition-colors" />
                </button>
            </div>

            <div className="container mt-8 md:mt-12 text-center">
            </div>

            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    )
}
