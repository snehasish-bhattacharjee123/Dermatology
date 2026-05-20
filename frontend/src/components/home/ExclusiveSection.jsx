import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { RevealWrapper } from '../../hooks/useAnimations'
import { Text } from '../ui/Typography'

// ===== EXCLUSIVE - CAROUSEL SECTION =====
export default function ExclusiveSection() {
    const carouselRef = useRef(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const treatmentCategories = [
        { name: 'D\'COSMEDIS WATERLESS', subname: 'MEDICAL PEDICURE', path: '/treatments/aayna-waterless-pedicure', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80' },
        { name: 'CLEARLIFT® &', subname: 'CLEARSKIN™', path: '/treatments/clearlift-clearskin', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80' },
        { name: 'EMSCULPT®', subname: '', path: '/treatments/emsculpt', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&q=80' },
        { name: 'FRAXEL', subname: '', path: '/treatments/fraxel', image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&q=80' },
        { name: 'HYDRAFACIAL', subname: '', path: '/treatments/hydrafacial', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80' },
        { name: 'SENSIBLE FILLERS,', subname: 'THE D\'COSMEDIS WAY', path: '/treatments/sensible-fillers', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80' },
        { name: 'THERMAGE', subname: '', path: '/treatments/thermage', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&q=80' },
        { name: 'LASER HAIR', subname: 'REMOVAL', path: '/treatments/laser-hair-removal', image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&q=80' },
    ]

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
            const scrollAmount = 360
            carouselRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section className="overflow-hidden" style={{ background: '#EDE8D0', padding: 'clamp(2.5rem, 8vw, 6rem) 0' }}>
            <div className="container max-w-6xl">
                <RevealWrapper>
                    <div className="text-center mb-8 md:mb-16">
                        <span className="inline-block text-[10px] tracking-[3px] uppercase font-bold mb-3 md:mb-4 text-[#888]">
                            Global Standards
                        </span>
                        <h2
                            style={{
                                color: 'var(--color-dark)',
                                fontFamily: 'var(--font-heading)',
                                fontSize: 'clamp(1.5rem, 5vw, 3rem)',
                                fontWeight: 400,
                                lineHeight: 1.2,
                                marginBottom: '0'
                            }}
                        >
                            D'CosMedis Exclusive <br /> Treatment At a Glance
                        </h2>
                    </div>
                </RevealWrapper>
            </div>

            {/* Carousel Container */}
            <div className="relative">
                <div
                    ref={carouselRef}
                    className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide px-4 md:px-8 lg:px-[max(var(--container-padding),calc((100vw-var(--container-max))/2+var(--container-padding)))] pb-8"
                    style={{
                        scrollSnapType: 'x mandatory',
                        WebkitOverflowScrolling: 'touch',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                >
                    {treatmentCategories.map((category, index) => (
                        <Link
                            key={category.name}
                            to={category.path}
                            className="relative flex-shrink-0 overflow-hidden shadow-sm"
                            style={{
                                scrollSnapAlign: 'start',
                                width: 'clamp(160px, 45vw, 320px)',
                                height: 'clamp(220px, 60vw, 420px)',
                                marginLeft: '4px',
                                marginRight: '4px',
                            }}
                        >
                            <img src={category.image} alt={category.name} className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/45"></div>

                            <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-center items-center text-center z-10">
                                <h3
                                    style={{
                                        fontFamily: 'var(--font-heading)',
                                        fontSize: 'clamp(0.95rem, 3.5vw, 1.5rem)',
                                        fontWeight: 500,
                                        letterSpacing: '0.12em',
                                        color: '#fff',
                                        textTransform: 'uppercase',
                                        marginBottom: '0.25rem',
                                        lineHeight: 1.2
                                    }}
                                >
                                    {category.name}
                                </h3>
                                {category.subname && (
                                    <h4
                                        style={{
                                            fontSize: 'clamp(0.55rem, 1.8vw, 0.75rem)',
                                            textTransform: 'uppercase',
                                            fontWeight: 700,
                                            letterSpacing: '0.2em',
                                            color: 'rgba(255,255,255,0.85)'
                                        }}
                                    >
                                        {category.subname}
                                    </h4>
                                )}
                            </div>
                        </Link>
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

            <div className="container mt-8 text-center">
            </div>

            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    )
}
