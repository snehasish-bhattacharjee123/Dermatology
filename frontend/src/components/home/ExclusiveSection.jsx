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
        { name: 'D\'COSMEDIS WATERLESS', subname: 'MEDICAL PEDICURE', path: '/treatments/aayna-waterless-pedicure' },
        { name: 'CLEARLIFT® &', subname: 'CLEARSKIN™', path: '/treatments/clearlift-clearskin' },
        { name: 'EMSCULPT®', subname: '', path: '/treatments/emsculpt' },
        { name: 'FRAXEL', subname: '', path: '/treatments/fraxel' },
        { name: 'HYDRAFACIAL', subname: '', path: '/treatments/hydrafacial' },
        { name: 'SENSIBLE FILLERS,', subname: 'THE D\'COSMEDIS WAY', path: '/treatments/sensible-fillers' },
        { name: 'THERMAGE', subname: '', path: '/treatments/thermage' },
        { name: 'LASER HAIR', subname: 'REMOVAL', path: '/treatments/laser-hair-removal' },
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
        <section className="section overflow-hidden py-16 md:py-24" style={{ background: '#EDE8D0' }}>
            <div className="container max-w-6xl">
                <RevealWrapper>
                    <div className="text-center mb-16 md:mb-20">
                        <span className="inline-block text-[10px] tracking-[3px] uppercase font-bold mb-4 text-[#888]">
                            Global Standards
                        </span>
                        <h2
                            className="text-3xl md:text-5xl font-serif mb-6"
                            style={{ color: 'var(--color-dark)' }}
                        >
                            D'CosMedis Exclusive
                        </h2>
                        <Text size="md" className="max-w-2xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
                            We bring some of the best and latest treatments from across the globe exclusively to India.
                        </Text>
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
                            className="flex-shrink-0 w-[220px] md:w-[320px] group border border-[#d4c8b0] rounded-sm hover-lift"
                            style={{ scrollSnapAlign: 'start', background: '#F5F0DC' }}
                        >
                            <div className="h-[200px] md:h-[280px] flex flex-col items-center justify-center p-6 md:p-8 transition-colors">
                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-5 md:mb-8" style={{ background: '#EDE8D0' }}>
                                    <span className="text-xl md:text-2xl" style={{ color: '#954795' }}>✨</span>
                                </div>
                                <h3 className="text-base md:text-lg font-serif tracking-widest text-center mb-2 text-dark">
                                    {category.name}
                                </h3>
                                {category.subname && (
                                    <h4 className="text-[9px] md:text-[10px] uppercase font-bold tracking-[2px] text-center text-[#888]">
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
                <Link to="/treatments" className="inline-flex items-center justify-center border border-wine px-8 py-4 text-xs tracking-[2px] uppercase font-semibold text-wine hover:bg-wine hover:text-white transition-all duration-300">
                    VIEW ALL EXCLUSIVE
                </Link>
            </div>

            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    )
}
