import { useState, useEffect, useRef, useCallback, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight, Award, Smile, MapPin, Sparkles } from 'lucide-react'
import { RevealWrapper, ParallaxImage } from '../hooks/useAnimations'
import { Heading, Text, Caption } from '../components/ui/Typography'
import { heroSlides, stats } from '../data/homeData'
import CtaBanner from '../components/ui/CtaBanner'

// Lazy-load below-fold data to reduce initial bundle
const loadSiteData = () => import('../data/siteData')

// Lazy-load below-fold sections — these don't need to block FCP/LCP
const LazyConcernsSection = lazy(() => import('../components/home/ConcernsSection'))
const LazyTreatmentsSection = lazy(() => import('../components/home/TreatmentsSection'))
const LazyAboutPreview = lazy(() => import('../components/home/AboutPreview'))
const LazyWhyUsSection = lazy(() => import('../components/home/WhyUsSection'))
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
                /* === MOBILE HERO FIXES === */
                @media (max-width: 640px) {
                    .hide-on-mobile { display: none !important; }
                    /* Hero: keep original 65dvh height */
                    .hero-mobile-half {
                        min-height: 65vh !important;
                        height: 65dvh !important;
                        max-height: 700px !important;
                    }
                    .hero-content-mobile {
                        min-height: 65dvh !important;
                        padding-bottom: 3.5rem !important;
                        /* Push text a little lower from the header */
                        padding-top: calc(var(--header-total-height, 80px) + 1.5rem) !important;
                        align-items: flex-start !important;
                        justify-content: center !important;
                    }
                    /* Hero text — tight but readable */
                    .hero-title-mobile {
                        font-size: clamp(1.65rem, 8vw, 2.2rem) !important;
                        line-height: 1.18 !important;
                        letter-spacing: -0.01em !important;
                    }
                    .hero-subtitle-mobile {
                        font-size: 0.65rem !important;
                        letter-spacing: 0.12em !important;
                        margin-bottom: 0.65rem !important;
                    }
                    .hero-desc-mobile {
                        font-size: 0.82rem !important;
                        line-height: 1.55 !important;
                        max-width: 90% !important;
                        margin-bottom: 1.25rem !important;
                    }
                    /* Remove negative margin on mobile */
                    .hero-text-offset {
                        margin-top: 0 !important;
                    }
                    /* Stats: 4 columns on mobile — compact */
                    .stats-grid {
                        grid-template-columns: repeat(4, 1fr) !important;
                        gap: 0 !important;
                    }
                    .stats-number { font-size: clamp(1.1rem, 6vw, 1.4rem) !important; }
                    .stats-label { font-size: 0.5rem !important; letter-spacing: 0.03em !important; display: block !important; }
                    .stats-item-pad { padding: 12px 4px !important; }
                }
                /* === TABLET TWEAKS === */
                @media (min-width: 641px) and (max-width: 1023px) {
                    .hero-title-mobile {
                        font-size: clamp(2.2rem, 5vw, 3.5rem) !important;
                    }
                }
            `}</style>
            <HeroSection />
            {/* <StatsBar /> */}
            {/* <Suspense fallback={<SectionFallback />}>
                <LazyConcernsSection />
            </Suspense> */}
            <Suspense fallback={<SectionFallback />}>
                <LazyWhyUsSection />
            </Suspense>
            {/* <Suspense fallback={<SectionFallback />}>
                <LazyExclusiveSection />
            </Suspense> */}
            <Suspense fallback={<SectionFallback />}>
                <LazyTreatmentsSection />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
                <LazyContactSection />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
                <LazyAboutPreview />
            </Suspense>

            <Suspense fallback={<SectionFallback />}>
                <LazyTestimonialsSection />
            </Suspense>

            {/* <Suspense fallback={<SectionFallback />}>
                <LazyConnectWithUs />
            </Suspense> */}
            {/* <Suspense fallback={<SectionFallback />}>
                <LazyAwardsSection />
            </Suspense> */}

            {/* <Suspense fallback={<SectionFallback />}>
                <LazyRealResultsSection />
            </Suspense> */}
            <CtaBanner />
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
                {/* Gradient overlay for text legibility — stronger on mobile */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to right, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.18) 100%)'
                    }}
                />
            </div>

            {/* Content */}
            <div
                className="relative flex items-center hero-content-mobile min-h-[100dvh] pt-[var(--header-total-height)] pb-16 md:pb-24"
            >
                <div className="container relative z-10 w-full px-5 sm:px-6 md:px-8">
                    <div ref={textRef} className="hero-text-offset max-w-3xl mt-[-20px] md:mt-0">
                        <Caption
                            className="hero-subtitle-mobile mb-2 md:mb-5 block text-white"
                            style={{ color: '#ffffff', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}
                        >
                            {slide.subtitle}
                        </Caption>
                        <Heading
                            className="hero-title-mobile mb-3 md:mb-6 leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-medium"
                            style={{ color: '#ffffff', fontSize: 'clamp(1.75rem, 7.5vw, 4rem)' }}
                        >
                            {slide.title.split('\n').map((line, i) => (
                                <span key={i} className="block">{line}</span>
                            ))}
                        </Heading>
                        <Text
                            size="lg"
                            className="hero-desc-mobile mb-5 md:mb-10 max-w-lg text-white"
                            style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'clamp(0.82rem, 2.5vw, 1.15rem)', lineHeight: 1.6 }}
                        >
                            {slide.description}
                        </Text>
                        {/* CTA Buttons — visible on mobile */}
                        <div className="flex flex-row items-center gap-3 sm:gap-5 flex-wrap">
                            <a
                                href="/book"
                                className="inline-flex items-center justify-center gap-2 text-white transition-all duration-300"
                                style={{
                                    background: 'var(--color-wine)',
                                    fontSize: 'clamp(0.65rem, 1.4vw, 0.9rem)',
                                    letterSpacing: '0.14em',
                                    textTransform: 'uppercase',
                                    fontWeight: 700,
                                    padding: 'clamp(0.55rem, 1.5vw, 0.9rem) clamp(1.2rem, 3vw, 2.2rem)',
                                    borderRadius: '2px',
                                    border: '1px solid transparent',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = 'var(--color-wine)'; e.currentTarget.style.borderColor = 'var(--color-wine)'; }}
                                onMouseLeave={e => { e.currentTarget.style.background = 'var(--color-wine)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'transparent'; }}
                            >
                                Get Your Appointment
                            </a>
                            {/* <a
                                href="/treatments"
                                className="inline-flex items-center justify-center gap-2 text-white/80 hover:text-white transition-colors"
                                style={{ fontSize: 'clamp(0.62rem, 1.2vw, 0.82rem)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}
                            >
                                View Treatments →
                            </a> */}
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
            style={{ background: '#EDE8D0' }}
        >
            <div className="container py-5 md:py-14">
                <div className="stats-grid grid grid-cols-4 md:grid-cols-4 gap-0 md:gap-4">
                    {stats.map((stat, i) => {
                        const Icon = statIcons[i]
                        return (
                            <RevealWrapper key={i} direction="up" delay={i * 0.1}>
                                <div
                                    className="stats-item-pad text-center flex flex-col items-center justify-start"
                                    style={{ padding: 'clamp(10px,2.5vw,28px) clamp(4px,1.5vw,16px)', borderRight: i < 3 ? '1px solid rgba(149,71,149,0.18)' : 'none' }}
                                >
                                    {/* Number row — fixed height so all 4 numbers sit on same baseline */}
                                    <div
                                        className="font-medium stats-number flex items-end justify-center"
                                        style={{
                                            color: '#5A262C',
                                            fontFamily: 'var(--font-heading), Georgia, serif',
                                            fontSize: 'clamp(1.25rem, 5vw, 4rem)',
                                            lineHeight: 1.0,
                                            fontWeight: 400,
                                            minHeight: 'clamp(2rem, 6vw, 5rem)',
                                        }}
                                    >
                                        <AnimatedCounter
                                            target={stat.value}
                                            suffix={stat.value.includes('+') ? '+' : stat.value.includes('%') ? '%' : ''}
                                        />
                                    </div>
                                    {/* Label row — fixed height so all 4 labels sit at the same level */}
                                    <p
                                        className="stats-label text-[#0d1319] font-semibold opacity-90 uppercase flex items-start justify-center text-center"
                                        style={{
                                            fontFamily: 'var(--font-body)',
                                            letterSpacing: '0.06em',
                                            fontSize: 'clamp(0.48rem, 1.4vw, 0.8rem)',
                                            lineHeight: 1.35,
                                            marginTop: 'clamp(4px, 1vw, 12px)',
                                            minHeight: 'clamp(1.8rem, 3vw, 2.8rem)',
                                        }}
                                    >
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
