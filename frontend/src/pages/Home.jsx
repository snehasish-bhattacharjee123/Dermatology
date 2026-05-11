import { useState, useEffect, useRef, useCallback, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight, Award, Smile, MapPin, Sparkles } from 'lucide-react'
import { RevealWrapper, ParallaxImage } from '../hooks/useAnimations'
import { Heading, Text, Caption } from '../components/ui/Typography'
import { heroSlides, stats } from '../data/homeData'

// Lazy-load below-fold data to reduce initial bundle
const loadSiteData = () => import('../data/siteData')

// Lazy-load below-fold sections — these don't need to block FCP/LCP
const LazyConcernsSection = lazy(() => import('../components/home/ConcernsSection'))
const LazyTreatmentsSection = lazy(() => import('../components/home/TreatmentsSection'))
const LazyAboutPreview = lazy(() => import('../components/home/AboutPreview'))
const LazyRealResultsSection = lazy(() => import('../components/home/RealResultsSection'))
const LazyTestimonialsSection = lazy(() => import('../components/home/TestimonialsSection'))
const LazyExclusiveSection = lazy(() => import('../components/home/ExclusiveSection'))
const LazyContactSection = lazy(() => import('../components/home/ContactSection').then(m => ({ default: m.HomeContactSection })))
const LazyConnectWithUs = lazy(() => import('../components/home/ContactSection').then(m => ({ default: m.ConnectWithUsSection })))
const LazyAwardsSection = lazy(() => import('../components/home/ContactSection').then(m => ({ default: m.AwardsSection })))

// Minimal section placeholder for lazy sections
function SectionFallback() {
    return <div style={{ minHeight: '200px' }} />
}

export default function Home() {
    return (
        <>
            {/* Global shared styles for all Home sub-components */}
            <style>{`
                 .text-wine { color: var(--color-wine); }
                .text-dark { color: var(--color-dark); }
                .text-muted { color: var(--color-text-muted); }
                .bg-wine { background-color: var(--color-wine); }
                .bg-wine-dark { background-color: var(--color-wine-dark); }
                .border-wine { border-color: var(--color-wine); }
                .italic { font-style: italic; }
                .hover\\:text-wine:hover { color: var(--color-wine); }
                .hover\\:bg-wine:hover { background-color: var(--color-wine); }
                .hover\\:bg-wine-dark:hover { background-color: var(--color-wine-dark); }
                .hover\\:text-white:hover { color: #fff; }
                .hover\\:bg-dark:hover { background-color: var(--color-dark); }
                .hover\\:border-dark:hover { border-color: var(--color-dark); }
                .hover\\:border-wine:hover { border-color: var(--color-wine); }
                .group-hover\\:text-wine:hover, .group:hover .group-hover\\:text-wine { color: var(--color-wine); }
                .group-hover\\:text-accent:hover, .group:hover .group-hover\\:text-accent { color: var(--color-accent); }
                .group:hover .group-hover\\:text-white { color: #fff; }
                @keyframes floatIn {
                    from { opacity: 0; transform: translateY(20px) scale(0.9); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                @media (max-width: 640px) {
                    .hide-on-mobile {
                        display: none !important;
                    }
                    /* Hero: half screen on mobile */
                    .hero-mobile-half {
                        min-height: 50vh !important;
                        height: 50vh !important;
                    }
                    .hero-content-mobile {
                        min-height: 50vh !important;
                    }
                    /* Stats: 4 columns on mobile */
                    .stats-grid {
                        grid-template-columns: repeat(4, 1fr) !important;
                        gap: 4px !important;
                    }
                    .stats-icon svg { width: 20px; height: 20px; }
                    .stats-number { font-size: 1.1rem !important; }
                    .stats-label { font-size: 0.55rem !important; letter-spacing: 0.03em !important; }
                    .stats-item-pad { padding: 10px 2px !important; }
                }
            `}</style>
            <HeroSection />
            <StatsBar />
            {/* <Suspense fallback={<SectionFallback />}>
                <LazyConcernsSection />
            </Suspense> */}
            <Suspense fallback={<SectionFallback />}>
                <LazyExclusiveSection />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
                <LazyTreatmentsSection />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
                <LazyTestimonialsSection />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
                <LazyContactSection />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
                <LazyConnectWithUs />
            </Suspense>
            {/* <Suspense fallback={<SectionFallback />}>
                <LazyAwardsSection />
            </Suspense> */}
            <Suspense fallback={<SectionFallback />}>
                <LazyAboutPreview />
            </Suspense>
            {/* <Suspense fallback={<SectionFallback />}>
                <LazyRealResultsSection />
            </Suspense> */}
        </>
    )
}

// ===== HERO SECTION - CRITICAL (above fold, NOT lazy) =====
function HeroSection() {
    const [current, setCurrent] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const textRef = useRef(null)

    const slide = heroSlides[current]

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isAnimating) goToSlide((current + 1) % heroSlides.length)
        }, 6000)
        return () => clearInterval(interval)
    }, [current, isAnimating])

    const goToSlide = (index) => {
        if (isAnimating) return
        setIsAnimating(true)

        if (textRef.current) {
            textRef.current.style.opacity = '0'
            textRef.current.style.transform = 'translateY(-20px)'
        }

        setTimeout(() => {
            setCurrent(index)
            setIsAnimating(false)
        }, 400)
    }

    useEffect(() => {
        if (textRef.current) {
            textRef.current.style.opacity = '0'
            textRef.current.style.transform = 'translateY(30px)'

            requestAnimationFrame(() => {
                if (textRef.current) {
                    textRef.current.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'
                    textRef.current.style.opacity = '1'
                    textRef.current.style.transform = 'translateY(0)'
                }
            })
        }
    }, [current])

    return (
        <section
            className="relative overflow-hidden bg-dark hero-mobile-half"
            style={{
                minHeight: '100dvh',
                height: 'auto',
            }}
        >
            {/* Background */}
            <div className="absolute inset-0">
                <picture>
                    <source srcSet={`${slide.image.replace(/w=\d+/, 'w=400')} 400w, ${slide.image.replace(/w=\d+/, 'w=800')} 800w`} media="(max-width: 640px)" />
                    <source srcSet={`${slide.image.replace(/w=\d+/, 'w=1280')} 1280w, ${slide.image.replace(/w=\d+/, 'w=1600')} 1600w`} media="(min-width: 641px)" />
                    <img
                        key={slide.id}
                        src={slide.image.replace(/w=\d+/, 'w=800')}
                        alt={slide.title}
                        className="w-full h-full object-cover object-center"
                        fetchPriority="high"
                        decoding="async"
                        width={800}
                        height={600}
                        style={{ aspectRatio: '4/3' }}
                    />
                </picture>
            </div>

            {/* Content */}
            <div
                className="relative flex items-center hero-content-mobile min-h-[100dvh] pt-[var(--header-total-height)] pb-16 md:pb-24"
            >
                <div className="container relative z-10 w-full px-4 md:px-8">
                    <div ref={textRef} className="max-w-3xl mt-[-40px] md:mt-0">
                        <Caption className="mb-3 md:mb-5 block text-white text-xs md:text-sm" style={{ color: '#ffffff' }}>
                            {slide.subtitle}
                        </Caption>
                        <Heading className="mb-4 md:mb-6 text-[2rem] leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-medium" style={{ color: '#ffffff' }}>
                            {slide.title.split('\n').map((line, i) => (
                                <span key={i} className="block">{line}</span>
                            ))}
                        </Heading>
                        <Text size="lg" className="mb-6 md:mb-10 max-w-lg text-white text-sm md:text-base lg:text-xl" style={{ color: '#ffffff' }}>
                            {slide.description}
                        </Text>
                        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide Navigation - Refined */}
            <div className="absolute bottom-6 md:bottom-10 left-0 w-full z-20 px-5 md:px-8">
                <div className="container flex flex-row items-center justify-between gap-4 md:gap-0 p-0">
                    <div className="flex items-center gap-2 md:gap-3">
                        {heroSlides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goToSlide(i)}
                                className="h-1.5 rounded-full transition-all duration-500"
                                style={{
                                    width: i === current ? '36px' : '20px',
                                    background: i === current ? 'var(--color-wine)' : 'rgba(255,255,255,0.4)'
                                }}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 hide-on-mobile">
                        <button
                            onClick={() => goToSlide(current === 0 ? heroSlides.length - 1 : current - 1)}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:border-wine hover:text-wine transition-all duration-300 bg-black/10 backdrop-blur-sm"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => goToSlide((current + 1) % heroSlides.length)}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:border-wine hover:text-wine transition-all duration-300 bg-black/10 backdrop-blur-sm"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

// ===== STATS BAR - CRITICAL (above fold, NOT lazy) =====
function AnimatedCounter({ target, suffix = '' }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const hasAnimated = useRef(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasAnimated.current) {
                hasAnimated.current = true
                const num = parseInt(target.replace(/[^0-9]/g, ''), 10)
                if (isNaN(num)) { setCount(target); return }
                const duration = 1800
                const steps = 50
                const increment = num / steps
                let current = 0
                const timer = setInterval(() => {
                    current += increment
                    if (current >= num) { setCount(num); clearInterval(timer) }
                    else setCount(Math.floor(current))
                }, duration / steps)
            }
        }, { threshold: 0.3 })
        observer.observe(el)
        return () => observer.disconnect()
    }, [target])

    const display = typeof count === 'number' ? count.toLocaleString() + suffix : count
    return <span ref={ref}>{display}</span>
}

function StatsBar() {
    const statIcons = [Award, Smile, MapPin, Sparkles]

    return (
        <div
            className="relative z-10"
            style={{ background: '#954795' }}
        >
            <div className="container py-6 md:py-14">
                <div className="stats-grid grid grid-cols-4 md:grid-cols-4 gap-2 md:gap-4">
                    {stats.map((stat, i) => {
                        const Icon = statIcons[i]
                        return (
                            <RevealWrapper key={i} direction="up" delay={i * 0.1}>
                                <div className="stats-item-pad text-center py-3 md:py-0">
                                    <div
                                        className="text-white font-medium stats-number"
                                        style={{
                                            fontFamily: 'var(--font-serif), Georgia, serif',
                                            fontSize: 'clamp(1.5rem, 5vw, 4rem)',
                                            lineHeight: 1.1,
                                            fontWeight: 400,
                                        }}
                                    >
                                        <AnimatedCounter
                                            target={stat.value}
                                            suffix={stat.value.includes('+') ? '+' : stat.value.includes('%') ? '%' : ''}
                                        />
                                    </div>
                                    <p className="stats-label mt-1 md:mt-3 text-white text-[0.55rem] md:text-base font-medium opacity-90 uppercase"
                                        style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.04em' }}>
                                        {stat.label}
                                    </p>
                                </div>
                            </RevealWrapper>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
