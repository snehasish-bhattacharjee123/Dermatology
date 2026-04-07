import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Star, MapPin, Quote, Phone, MessageCircle } from 'lucide-react'
import { RevealWrapper, ParallaxImage } from '../hooks/useAnimations'
import { Heading, Text, Caption } from '../components/ui/Typography'
import { heroSlides, concerns, treatments, testimonials, locations as locationData, stats } from '../data/siteData'

import ReactCardSlider from 'react-card-slider-component';

export default function Home() {
    return (
        <>
            {/* Global shared styles for all Home sub-components */}
            <style>{`
                .text-gold { color: var(--color-gold); }
                .text-dark { color: var(--color-dark); }
                .text-muted { color: var(--color-text-muted); }
                .bg-gold { background-color: var(--color-gold); }
                .bg-gold-dark { background-color: var(--color-gold-dark); }
                .border-gold { border-color: var(--color-gold); }
                .italic { font-style: italic; }
                .hover\\:text-gold:hover { color: var(--color-gold); }
                .hover\\:bg-gold:hover { background-color: var(--color-gold); }
                .hover\\:bg-gold-dark:hover { background-color: var(--color-gold-dark); }
                .hover\\:text-white:hover { color: #fff; }
                .hover\\:bg-dark:hover { background-color: var(--color-dark); }
                .hover\\:border-dark:hover { border-color: var(--color-dark); }
                .hover\\:border-gold:hover { border-color: var(--color-gold); }
                .group-hover\\:text-gold:hover, .group:hover .group-hover\\:text-gold { color: var(--color-gold); }
                .group:hover .group-hover\\:text-white { color: #fff; }
                @keyframes floatIn {
                    from { opacity: 0; transform: translateY(20px) scale(0.9); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
            `}</style>
            <HeroSection />
            <StatsBar />
            <ConcernsSection />
            <TreatmentsSection />
            {/* <TreatmentsAtAGlance /> */}
            <ExclusiveSection />
            <AboutPreview />
            <RealResultsSection />
            <TestimonialsSection />
            {/* <LocationsSection /> */}
            {/* <CTASection /> */}
            <FloatingCTA />
        </>
    )
}

export function CarouselSpacing() {
    const sliderClick = (slider) => {
        console.log("slider clicked", slider);
    }
    
    const slides = [
        {image:"https://picsum.photos/200/300",title:"This is a title",description:"This is a description",clickEvent:sliderClick},
        {image:"https://picsum.photos/600/500",title:"This is a second title",description:"This is a second description",clickEvent:sliderClick},
        {image:"https://picsum.photos/700/600",title:"This is a third title",description:"This is a third description",clickEvent:sliderClick},
        {image:"https://picsum.photos/500/400",title:"This is a fourth title",description:"This is a fourth description",clickEvent:sliderClick},
        {image:"https://picsum.photos/200/300",title:"This is a fifth title",description:"This is a fifth description",clickEvent:sliderClick},
        {image:"https://picsum.photos/800/700",title:"This is a sixth title",description:"This is a sixth description",clickEvent:sliderClick},
        {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
    ]

    return (
        <section className="section bg-white flex justify-center py-12 overflow-hidden w-full max-w-[100vw]">
            <div className="w-full max-w-6xl px-12 sm:px-16 mx-auto flex justify-center">
                <ReactCardSlider slides={slides}/>
            </div>
        </section>
    )
}

// ===== HERO SECTION - REFINED =====
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
            className="relative overflow-hidden bg-dark"
            style={{
                minHeight: '100dvh',
                height: 'auto',
            }}
        >
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    key={slide.id}
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover object-center"
                    style={{ filter: 'brightness(0.5)' }}
                />
                <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.55) 100%)' }}
                />
            </div>

            {/* Content */}
            <div
                className="relative flex items-center min-h-[100dvh] pt-[var(--header-total-height)] pb-20 md:pb-24"
            >
                <div className="container relative z-10 w-full px-4 md:px-8">
                    <div ref={textRef} className="max-w-3xl mt-[-40px] md:mt-0">
                        <Caption variant="overline-white" className="mb-3 md:mb-5 block text-white text-xs md:text-sm" style={{ color: '#ffffff' }}>
                            {slide.subtitle}
                        </Caption>
                        <Heading variant="hero-white" className="mb-4 md:mb-6 text-[2rem] leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-medium" style={{ color: '#ffffff' }}>
                            {slide.title.split('\n').map((line, i) => (
                                <span key={i} className="block">{line}</span>
                            ))}
                        </Heading>
                        <Text size="lg" className="mb-6 md:mb-10 max-w-lg text-white text-sm md:text-base lg:text-xl" style={{ color: '#ffffff' }}>
                            {slide.description}
                        </Text>
                        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
                            <Link to={slide.ctaLink} className="btn btn-primary w-full sm:w-auto text-center justify-center py-3.5 md:py-4 flex items-center">
                                {slide.cta} <ArrowRight size={18} className="ml-2" />
                            </Link>
                            <Link
                                to="/book"
                                className="btn btn-outline w-full sm:w-auto text-center justify-center py-3.5 md:py-4 transition-colors duration-300"
                                style={{ borderColor: 'rgba(255,255,255,1)', color: '#fff' }}
                            >
                                Book Consultation
                            </Link>
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
                                    background: i === current ? 'var(--color-gold)' : 'rgba(255,255,255,0.4)'
                                }}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 hide-on-mobile">
                        <button
                            onClick={() => goToSlide(current === 0 ? heroSlides.length - 1 : current - 1)}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-all duration-300 bg-black/10 backdrop-blur-sm"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => goToSlide((current + 1) % heroSlides.length)}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-all duration-300 bg-black/10 backdrop-blur-sm"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
                .text-gold {
                    color: var(--color-gold);
                }
                .hover\\:border-gold:hover {
                    border-color: var(--color-gold);
                }
                .hover\\:text-gold:hover {
                    color: var(--color-gold);
                }
                @media (max-width: 640px) {
                    .hide-on-mobile {
                        display: none !important;
                    }
                }
            `}</style>
        </section>
    )
}

// ===== STATS BAR - ANIMATED COUNTERS =====
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

const statIcons = ['👩‍⚕️', '😊', '🏥', '⭐']

function StatsBar() {
    return (
        <div
            className="relative z-10"
            style={{ background: 'var(--color-gold)' }}
        >
            <div className="container py-10 md:py-14">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                    {stats.map((stat, i) => (
                        <RevealWrapper key={i} direction="up" delay={i * 0.1}>
                            <div className="text-center">
                                <div className="text-3xl mb-2">{statIcons[i]}</div>
                                <div
                                    className="text-white font-medium stat-number"
                                    style={{
                                        fontFamily: 'var(--font-display)',
                                        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                                        lineHeight: 1.1,
                                    }}
                                >
                                    <AnimatedCounter
                                        target={stat.value}
                                        suffix={stat.value.includes('+') ? '+' : stat.value.includes('%') ? '%' : ''}
                                    />
                                </div>
                                <p className="mt-3 text-white text-sm md:text-base font-medium opacity-90 tracking-wide uppercase"
                                   style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.08em' }}>
                                    {stat.label}
                                </p>
                            </div>
                        </RevealWrapper>
                    ))}
                </div>
            </div>
        </div>
    )
}

// ===== CONCERNS SECTION - PREMIUM =====
function ConcernsSection() {
    return (
        <section className="section bg-[#e8e3d9] py-20 md:py-32">
            <div className="container max-w-6xl">
                <RevealWrapper>
                    <div className="text-center mb-16 md:mb-20">
                        <span className="inline-block text-[10px] tracking-[3px] uppercase font-bold mb-4 text-[#888]">
                            What Bothers You?
                        </span>
                        <h2 
                            className="text-3xl md:text-5xl font-serif mb-6" 
                            style={{ color: 'var(--color-dark)' }}
                        >
                            Concerns
                        </h2>
                        <Text size="md" className="max-w-2xl mx-auto" color="muted">
                            We offer expert solutions for a wide range of skin, hair, and aesthetic concerns tailored to your unique needs.
                        </Text>
                    </div>
                </RevealWrapper>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {concerns.slice(0, 8).map((concern, i) => (
                        <RevealWrapper key={concern.id} direction="up" delay={i * 0.06}>
                            <Link to={`/concerns/${concern.slug}`} className="group block text-center p-6 md:p-8 bg-white hover-lift border border-[#f0ede8] h-full rounded-sm">
                                <div
                                    className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-500 bg-[#e8e3d9] text-dark"
                                >
                                    <span className="text-2xl opacity-80">{concern.icon}</span>
                                </div>
                                <h4
                                    className="text-lg md:text-xl font-serif transition-colors duration-300 mb-3"
                                    style={{ color: 'var(--color-dark)' }}
                                >
                                    {concern.name}
                                </h4>
                                <p
                                    className="text-sm leading-relaxed mb-6 hidden md:block text-[#666]"
                                >
                                    {concern.shortDescription.slice(0, 60)}...
                                </p>
                                <span className="inline-flex items-center text-[10px] tracking-[2px] uppercase font-bold text-dark group-hover:text-gold transition-colors">
                                    Learn More <ArrowRight size={14} className="ml-1" />
                                </span>
                            </Link>
                        </RevealWrapper>
                    ))}
                </div>

                <RevealWrapper className="text-center mt-16 md:mt-20">
                    <Link to="/concerns" className="inline-flex items-center justify-center border border-gold px-8 py-4 text-xs tracking-[2px] uppercase font-semibold text-gold hover:bg-gold hover:text-white transition-all duration-300">
                        View All Concerns
                    </Link>
                </RevealWrapper>
            </div>
        </section>
    )
}

// ===== TREATMENTS SECTION - PREMIUM CARDS =====
function TreatmentsSection() {
    return (
        <section className="section bg-white py-20 md:py-32 border-t border-[#f0ede8]">
            <div className="container max-w-6xl">
                <RevealWrapper>
                    <div className="text-center mb-16 md:mb-20">
                        <span className="inline-block text-[10px] tracking-[3px] uppercase font-bold mb-4 text-[#888]">
                            Our Expertise
                        </span>
                        <h2 
                            className="text-3xl md:text-5xl font-serif mb-6" 
                            style={{ color: 'var(--color-dark)' }}
                        >
                            Treatments
                        </h2>
                        <Text size="md" className="max-w-2xl mx-auto" color="muted">
                            Discover our comprehensive range of advanced dermatology and aesthetic treatments.
                        </Text>
                    </div>
                </RevealWrapper>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {treatments.slice(0, 6).map((treatment, i) => (
                        <RevealWrapper key={treatment.id} direction="up" delay={i * 0.08}>
                            <Link to={`/treatments/${treatment.slug}`} className="treatment-card card group block hover-lift h-full border border-[#f0ede8] bg-white rounded-sm">
                                <div className="overflow-hidden relative h-64 rounded-t-sm">
                                    <img
                                        src={treatment.image}
                                        alt={treatment.title}
                                        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.05]"
                                    />
                                    <div
                                        className="absolute top-5 left-5 px-4 py-2 text-[10px] tracking-[2px] uppercase text-white rounded-full font-bold shadow-sm"
                                        style={{ background: 'var(--color-gold)' }}
                                    >
                                        {treatment.category}
                                    </div>
                                </div>
                                <div className="card-body p-6 md:p-8 flex flex-col h-[calc(100%-16rem)] flex-1">
                                    <h3 className="transition-colors duration-300 mb-3 font-serif" style={{ fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--color-dark)' }}>
                                        {treatment.title}
                                    </h3>
                                    <p className="mt-1 text-sm leading-relaxed flex-1 text-[#666]">
                                        {treatment.shortDescription.slice(0, 100)}...
                                    </p>
                                    <div
                                        className="flex flex-col sm:flex-row sm:items-center justify-between mt-6 pt-5 border-t gap-3"
                                        style={{ borderColor: 'var(--color-border)' }}
                                    >
                                        <span className="flex items-center gap-1.5 font-bold tracking-[2px] uppercase text-dark group-hover:text-gold transition-colors text-[10px]">
                                            View Treatment <ArrowRight size={14} className="mt-0.5" />
                                        </span>
                                        <span
                                            className="text-xs text-[#888] font-medium"
                                        >
                                            {treatment.duration}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </RevealWrapper>
                    ))}
                </div>

                <RevealWrapper className="text-center mt-16 md:mt-24">
                    <Link to="/treatments" className="inline-flex items-center justify-center border border-gold px-8 py-4 text-xs tracking-[2px] uppercase font-semibold text-white bg-gold hover:bg-gold-dark transition-all duration-300">
                        View All Treatments
                    </Link>
                </RevealWrapper>
            </div>
        </section>
    )
}

// ===== ABOUT PREVIEW - PREMIUM =====
function AboutPreview() {
    return (
        <section className="section bg-[#e8e3d9] py-24 md:py-32 overflow-hidden border-t border-[#d5cfc7]">
            <div className="container max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <RevealWrapper direction="left">
                        <div className="relative group">
                            <ParallaxImage
                                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
                                alt="Dr. Dolly Gupta"
                                className="rounded-sm shadow-xl"
                                style={{ height: '600px' }}
                                speed={-0.1}
                            />
                            <div
                                className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 p-8 lg:p-10 rounded-sm shadow-xl"
                                style={{ background: 'var(--color-gold)' }}
                            >
                                <div className="text-center text-white">
                                    <h3 className="text-5xl lg:text-7xl font-light leading-none mb-3" style={{ fontFamily: 'var(--font-heading)' }}>15+</h3>
                                    <span className="block text-[10px] tracking-[2px] uppercase font-bold opacity-90">
                                        Years of<br />Excellence
                                    </span>
                                </div>
                            </div>
                        </div>
                    </RevealWrapper>

                    <RevealWrapper direction="right">
                        <div className="lg:pl-8">
                            <span className="inline-block text-[10px] tracking-[3px] uppercase font-bold mb-4 text-[#888]">
                                About D'CosMedis
                            </span>
                            <h2 
                                className="text-3xl md:text-5xl lg:text-5xl mb-8 font-serif leading-tight" 
                                style={{ color: 'var(--color-dark)' }}
                            >
                                Where Science <br/><span className="italic text-gold">Meets Beauty</span>
                            </h2>
                            <div className="space-y-6 mb-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0" style={{ background: 'var(--color-gold)' }}></div>
                                    <p className="text-[#666] leading-relaxed">
                                        Founded by Dr. Dolly Gupta, D'CosMedis Clinic has been at the forefront of dermatology and aesthetic medicine in India for over 15 years.
                                    </p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0" style={{ background: 'var(--color-gold)' }}></div>
                                    <p className="text-[#666] leading-relaxed">
                                        Our state-of-the-art clinics combine cutting-edge technology with personalized care to deliver transformative results.
                                    </p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0" style={{ background: 'var(--color-gold)' }}></div>
                                    <p className="text-[#666] leading-relaxed">
                                        We believe that everyone deserves to feel confident in their skin with customized treatment plans.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Link to="/about" className="w-full sm:w-auto text-center inline-flex items-center justify-center border border-gold px-8 py-4 text-xs tracking-[2px] uppercase font-semibold text-white bg-gold hover:bg-gold-dark transition-all duration-300">
                                    Our Story
                                </Link>
                                <Link to="/book" className="w-full sm:w-auto text-center inline-flex items-center justify-center border border-[#ccc] px-8 py-4 text-xs tracking-[2px] uppercase font-semibold text-dark hover:border-dark transition-all duration-300">
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </RevealWrapper>
                </div>
            </div>
        </section>
    )
}

// ===== TESTIMONIALS - CELEBRITY CAROUSEL =====
function TestimonialsSection() {
    const [active, setActive] = useState(0)

    const goToPrev = () => {
        setActive(active === 0 ? testimonials.length - 1 : active - 1)
    }

    const goToNext = () => {
        setActive(active === testimonials.length - 1 ? 0 : active + 1)
    }

    return (
        <section
            className="section relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #25151e 0%, #39212f 100%)' }}
        >
            <div
                className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-5"
                style={{ background: 'var(--color-gold)', filter: 'blur(80px)' }}
            />

            <div className="container relative z-10">
                <RevealWrapper>
                    <div className="section-header">
                        <Caption variant="overline-white">Patient Love</Caption>
                        <Heading variant="section-white">What Our Patients Say</Heading>
                        <div className="gold-line" />
                    </div>
                </RevealWrapper>

                {/* Celebrity Carousel */}
                <div className="max-w-5xl mx-auto mt-12">
                    <div className="relative">
                        {/* Main Card */}
                        <RevealWrapper>
                            <div
                                className="flex flex-col md:flex-row gap-8 md:gap-12 items-stretch"
                                style={{ minHeight: '400px' }}
                            >
                                {/* Content Side */}
                                <div className="flex-1 flex flex-col justify-center order-2 md:order-1">
                                    <div className="mb-4">
                                        <h2
                                            className="text-2xl md:text-3xl font-bold mb-2"
                                            style={{
                                                fontFamily: 'var(--font-display)',
                                                color: 'var(--color-gold)'
                                            }}
                                        >
                                            {testimonials[active].name}
                                        </h2>
                                        <p
                                            className="text-base md:text-lg"
                                            style={{ color: '#109df79' }}
                                        >
                                            {testimonials[active].role}
                                        </p>
                                    </div>

                                    <div
                                        className="w-[30%] h-px mb-6"
                                        style={{ background: 'var(--color-gold)' }}
                                    />

                                    <p
                                        className="text-base md:text-lg leading-relaxed"
                                        style={{
                                            fontFamily: 'var(--font-display)',
                                            color: '#109df79'
                                        }}
                                    >
                                        {testimonials[active].content}
                                    </p>
                                </div>

                                {/* Image Side */}
                                <div className="flex-1 flex items-center justify-center order-1 md:order-2">
                                    <img
                                        src={testimonials[active].image}
                                        alt={testimonials[active].name}
                                        className="w-full max-w-[350px] h-[350px] object-cover object-center rounded-lg"
                                        style={{
                                            maxWidth: '400px',
                                            height: '400px',
                                            objectFit: 'cover',
                                            objectPosition: 'center center'
                                        }}
                                    />
                                </div>
                            </div>
                        </RevealWrapper>

                        {/* Navigation Arrows */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button
                                onClick={goToPrev}
                                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                                style={{
                                    border: '1px solid var(--color-gold)',
                                    color: 'var(--color-gold)'
                                }}
                                aria-label="Previous testimonial"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 30 30" fill="none">
                                    <rect x="0.5" y="0.5" width="29" height="29" stroke="var(--color-gold)"></rect>
                                    <g clipPath="url(#clip0_1110_83)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.2662 8.20429C11.4098 8.07297 11.6004 7.99976 11.7985 7.99976C11.9967 7.99976 12.1872 8.07297 12.3309 8.20429L18.5585 13.9891C18.6979 14.1166 18.8089 14.2701 18.8848 14.4402C18.9606 14.6103 18.9998 14.7934 18.9998 14.9785C18.9998 15.1636 18.9606 15.3468 18.8848 15.5169C18.8089 15.687 18.6979 15.8405 18.5585 15.968L12.2858 21.7955C11.9949 22.065 11.5236 22.0685 11.2284 21.8025C11.1569 21.7391 11.0997 21.6623 11.0603 21.5767C11.021 21.4912 11.0003 21.3988 10.9997 21.3053C10.999 21.2117 11.0183 21.119 11.0564 21.033C11.0945 20.9469 11.1505 20.8693 11.2211 20.805L16.9614 15.4731C17.0312 15.4093 17.0868 15.3326 17.1247 15.2475C17.1627 15.1624 17.1822 15.0708 17.1822 14.9782C17.1822 14.8856 17.1627 14.794 17.1247 14.7089C17.0868 14.6238 17.0312 14.5471 16.9614 14.4833L11.2669 9.19339C11.1972 9.12969 11.1416 9.05299 11.1037 8.96797C11.0657 8.88295 11.0462 8.79138 11.0462 8.69884C11.0462 8.6063 11.0657 8.51473 11.1037 8.42971C11.1416 8.34469 11.1964 8.26799 11.2662 8.20429Z" fill="var(--color-gold)"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1110_83">
                                            <rect width="8" height="14" fill="white" transform="matrix(-1 0 0 1 19 8)"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>

                            <button
                                onClick={goToNext}
                                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                                style={{
                                    border: '1px solid var(--color-gold)',
                                    color: 'var(--color-gold)'
                                }}
                                aria-label="Next testimonial"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 30 30" fill="none">
                                    <rect x="0.5" y="0.5" width="29" height="29" stroke="var(--color-gold)"></rect>
                                    <g clipPath="url(#clip1_1110_84)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M18.7338 21.7957C18.5246 21.9254 18.2716 21.9999 18.0101 21.9999C17.7487 21.9999 17.4957 21.9254 17.2864 21.7957L11.0137 15.968C10.8743 15.8405 10.7633 15.687 10.6874 15.5169C10.6116 15.3467 10.5724 15.1635 10.5724 14.9784C10.5724 14.7933 10.6116 14.6101 10.6874 14.44C10.7633 14.2699 10.8743 14.1164 11.0137 13.9889L17.2413 8.20409C17.385 8.07277 17.5755 7.99956 17.7737 7.99956C17.9718 7.99956 18.1624 8.07277 18.306 8.20409C18.3758 8.26779 18.4314 8.34449 18.4693 8.42951C18.5073 8.51453 18.5268 8.6061 18.5268 8.69864C18.5268 8.79118 18.5073 8.88275 18.4693 8.96777C18.4314 9.05279 18.3758 9.12949 18.306 9.19319L12.6004 14.4831C12.5307 14.5468 12.475 14.6235 12.4371 14.7086C12.3991 14.7937 12.3796 14.8853 12.3796 14.9779C12.3796 15.0705 12.3991 15.1621 12.4371 15.2472C12.475 15.3322 12.5307 15.4089 12.6004 15.4727L17.7864 20.805C17.8569 20.8693 17.9129 20.9469 17.951 21.033C17.9891 21.119 18.0084 21.2117 18.0077 21.3053C18.0071 21.3988 17.9864 21.4912 17.9471 21.5767C17.9077 21.6623 17.8505 21.7391 17.779 21.8025C17.4838 22.0685 17.0125 22.065 16.7216 21.7957L18.7338 21.7957Z" fill="var(--color-gold)"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip1_1110_84">
                                            <rect width="8" height="14" fill="white" transform="matrix(1 0 0 -1 11 22)"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>

                        {/* Pagination Dots */}
                        <div className="flex items-center justify-center gap-3 mt-8">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActive(i)}
                                    className="rounded-full transition-all duration-300"
                                    style={{
                                        width: i === active ? '32px' : '10px',
                                        height: '10px',
                                        background: i === active ? 'var(--color-gold)' : 'rgba(255,255,255,0.2)',
                                    }}
                                    aria-label={`View testimonial ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 767px) {
                    .elementor-497 .elementor-element.elementor-element-433d6ce {
                        --flex-direction: column-reverse;
                    }
                }
            `}</style>
        </section>
    )
}

// ===== LOCATIONS - WITH RATINGS =====
function LocationsSection() {
    const ratings = ['4.9', '4.8', '4.9', '4.7']
    const reviewCounts = ['2,300', '1,800', '1,500', '950']
    return (
        <section className="section section-cream">
            <div className="container">
                <RevealWrapper>
                    <div className="section-header">
                        <Caption variant="overline">Visit Us</Caption>
                        <Heading variant="section">Skin Treatment Clinic In Delhi & Ludhiana</Heading>
                        <div className="gold-line" />
                    </div>
                </RevealWrapper>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {locationData.map((loc, i) => (
                        <RevealWrapper key={loc.id} direction="up" delay={i * 0.08}>
                            <div className="card group h-full flex flex-col hover-lift">
                                <div className="overflow-hidden" style={{ height: '180px' }}>
                                    <img
                                        src={loc.image}
                                        alt={loc.name}
                                        className="card-img h-full transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-5 flex flex-col flex-1">
                                    <h4
                                        className="text-base mb-2 transition-colors"
                                        style={{
                                            fontFamily: 'var(--font-display)',
                                            fontWeight: 600,
                                            color: 'var(--color-dark)'
                                        }}
                                    >
                                        {loc.name}
                                    </h4>
                                    <div className="flex items-center gap-1 mb-2">
                                        <Star size={14} fill="var(--color-gold)" color="var(--color-gold)" />
                                        <span className="text-sm font-semibold" style={{ color: 'var(--color-dark)' }}>{ratings[i]}</span>
                                        <span className="text-xs" style={{ color: 'var(--color-text-light)' }}>({reviewCounts[i]} reviews)</span>
                                    </div>
                                    <p
                                        className="text-sm mb-3 flex items-start gap-2"
                                        style={{ color: 'var(--color-text-muted)' }}
                                    >
                                        <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: 'var(--color-gold)' }} />
                                        {loc.address}
                                    </p>
                                    <a
                                        href={`tel:${loc.phone}`}
                                        className="text-sm font-semibold transition-colors mb-4"
                                        style={{ color: 'var(--color-gold)' }}
                                    >
                                        {loc.phone}
                                    </a>
                                    <Link to="/book" className="btn btn-outline btn-sm mt-auto w-full justify-center text-center" style={{ fontSize: '0.65rem' }}>
                                        Book Appointment
                                    </Link>
                                </div>
                            </div>
                        </RevealWrapper>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ===== CTA - STRONG CONVERSION =====
function CTASection() {
    return (
        <section className="relative py-28 lg:py-36 overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80"
                    alt="CTA Background"
                    className="w-full h-full object-cover"
                    style={{ filter: 'brightness(0.30)' }}
                />
            </div>

            <div className="container relative z-10 text-center px-6">
                <RevealWrapper>
                    <Caption variant="overline-white" className="mb-4">Start Today</Caption>
                    <Heading variant="section-white" className="mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
                        Start Your Skin Transformation Today
                    </Heading>
                    <div className="inline-block mb-8 px-5 py-2 rounded-full text-sm font-semibold" style={{ background: 'rgba(135,91,108,0.2)', color: 'var(--color-gold-light)', border: '1px solid rgba(135,91,108,0.3)' }}>
                        âœ¨ Free Consultation Available
                    </div>
                    <Text size="md" color="white-muted" className="mb-10 max-w-lg mx-auto">
                        Schedule a free consultation with our expert dermatologists and discover the perfect treatment plan for you.
                    </Text>
                    <div className="flex items-center justify-center gap-4 flex-wrap">
                        <Link to="/book" className="btn btn-primary btn-lg">
                            Book Appointment <ArrowUpRight size={16} />
                        </Link>
                        <a
                            href="tel:+911234567890"
                            className="btn btn-outline btn-lg"
                            style={{ borderColor: '#fff', color: '#fff' }}
                        >
                            <Phone size={16} /> Call Clinic
                        </a>
                    </div>
                </RevealWrapper>
            </div>
        </section>
    )
}

// ===== REAL RESULTS SECTION - PREMIUM =====
function RealResultsSection() {
    return (
        <section className="section bg-white py-24 md:py-32">
            <div className="container max-w-6xl">
                <RevealWrapper>
                    <div className="text-center mb-16 md:mb-24">
                        <span className="inline-block text-[10px] tracking-[3px] uppercase font-bold mb-4 text-[#888]">
                            Real Skin, Real Results
                        </span>
                        <h2 
                            className="text-3xl md:text-5xl font-serif" 
                            style={{ color: 'var(--color-dark)' }}
                        >
                            <span className="italic text-gold">Transformations</span>
                        </h2>
                    </div>
                </RevealWrapper>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    {/* Before/After Slider */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <RevealWrapper direction="left" className="w-full max-w-[500px]">
                            <BeforeAfterSlider
                                beforeImage="https://skinlab.in/wp-content/uploads/2025/09/face-before.webp"
                                afterImage="https://skinlab.in/wp-content/uploads/2025/09/2-1.webp"
                            />
                        </RevealWrapper>
                    </div>

                    {/* Testimonial */}
                    <div className="w-full lg:w-1/2">
                        <RevealWrapper direction="right" delay={0.2} className="h-full">
                            <div className="bg-[#e8e3d9] p-10 md:p-12 rounded-sm h-full flex flex-col justify-center border border-[#d5cfc7]">
                                <Quote
                                    size={40}
                                    style={{ color: 'var(--color-gold)' }}
                                    className="mb-8 opacity-40 mx-auto"
                                />
                                <p className="text-lg md:text-xl text-center leading-relaxed italic mb-10 text-[#555] font-serif">
                                    "It was my first time at D'CosMedis and just based on the how precise and considerate the details of my consultation was and how the therapist has such good experience can be known by how she looked at my skin and gave me her feedback I didn't even need to explain much details and my treatment was done to perfection. I was literally glowing afterwards."
                                </p>
                                <div className="text-center">
                                    <p className="font-bold text-dark text-sm tracking-[2px] uppercase">
                                        Manal Mohammed
                                    </p>
                                </div>
                            </div>
                        </RevealWrapper>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Simple Before/After Slider Component
function BeforeAfterSlider({ beforeImage, afterImage }) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef(null);

    const handleMove = (event) => {
        if (!containerRef.current) return;
        const containerRect = containerRef.current.getBoundingClientRect();

        let clientX;
        if (event.touches && event.touches.length > 0) {
            clientX = event.touches[0].clientX;
        } else {
            clientX = event.clientX;
        }

        const offsetX = clientX - containerRect.left;
        const percent = Math.max(0, Math.min(100, (offsetX / containerRect.width) * 100));
        setSliderPosition(percent);
    };

    const handleMouseDown = (e) => {
        e.preventDefault();
        handleMove(e);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
        handleMove(e);
    };

    const handleMouseUp = () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
    };

    const handleTouchStart = (e) => {
        handleMove(e);
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchend', handleTouchEnd);
    };

    const handleTouchMove = (e) => {
        e.preventDefault();
        handleMove(e);
    };

    const handleTouchEnd = () => {
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
    };

    return (
        <div
            ref={containerRef}
            className="relative overflow-hidden rounded-sm shadow-xl cursor-ew-resize max-w-full w-full select-none"
            style={{ aspectRatio: '1/1' }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
        >
            {/* After Image (Base) */}
            <img
                src={afterImage}
                alt="After treatment"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none transition-transform duration-[2s] hover:scale-[1.05]"
                draggable={false}
            />
            {/* Before Image (Cropped) */}
            <div className="absolute inset-0 pointer-events-none z-10 transition-transform duration-[2s] hover:scale-[1.05]">
                <img
                    src={beforeImage}
                    alt="Before treatment"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    draggable={false}
                />
            </div>

            {/* Slider Handle */}
            <div
                className="absolute inset-y-0 flex items-center justify-center pointer-events-none z-20"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
                <div className="w-0.5 md:w-[2px] h-full bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)]"></div>
                <div className="absolute w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-[3px] border-gold">
                    <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l4-4 4 4m0 6l-4 4-4-4" transform="rotate(90 12 12)" />
                    </svg>
                </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-6 left-6 bg-black/60 text-white text-[10px] tracking-[2px] uppercase font-bold py-2 px-6 rounded-full pointer-events-none backdrop-blur-md z-30">
                Before
            </div>
            <div className="absolute bottom-6 right-6 bg-black/60 text-white text-[10px] tracking-[2px] uppercase font-bold py-2 px-6 rounded-full pointer-events-none backdrop-blur-md z-30">
                After
            </div>
        </div>
    );
}
// ===== TREATMENTS AT A GLANCE - PREMIUM =====
function TreatmentsAtAGlance() {
    const carouselRef = useRef(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const treatments = [
        { title: 'Acne', subtitle: '', image: 'https://images.unsplash.com/photo-1512496015851-a1fbcf69f50e?w=800&q=80', link: '/treatments/acne' },
        { title: 'ANTI AGEING', subtitle: '', image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=800&q=80', link: '/treatments/anti-ageing' },
        { title: 'Hair', subtitle: '', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80', link: '/treatments/hair' },
        { title: 'Hitech', subtitle: 'facials', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80', link: '/treatments/hitech-facials' },
        { title: 'IV', subtitle: 'drips', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80', link: '/treatments/iv-drips' },
        { title: 'Laser', subtitle: 'reduction', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80', link: '/treatments/laser-hair-reduction' },
        { title: 'Lifting', subtitle: 'contouring', image: 'https://images.unsplash.com/photo-1611625618313-68b87aaa0626?w=800&q=80', link: '/treatments/lifting-contouring' },
        { title: 'Pigmentation', subtitle: '', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80', link: '/treatments/pigmentation' },
        { title: 'Signature', subtitle: 'facials', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80', link: '/treatments/signature-facials' },
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
            window.addEventListener('resize', checkScrollButtons)
            return () => {
                carousel.removeEventListener('scroll', checkScrollButtons)
                window.removeEventListener('resize', checkScrollButtons)
            }
        }
    }, [])

    const scroll = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = 350
            carouselRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section className="section bg-[#111] overflow-hidden py-24 md:py-32">
            <div className="container max-w-6xl">
                <RevealWrapper>
                    <div className="text-center mb-16 md:mb-20">
                        <span className="inline-block text-[10px] tracking-[3px] uppercase font-bold mb-4 text-[#888]">
                            Browse Further
                        </span>
                        <h2 
                            className="text-3xl md:text-5xl font-serif text-white" 
                        >
                            Treatments At A Glance
                        </h2>
                    </div>
                </RevealWrapper>
            </div>

            {/* Carousel Container */}
            <div className="relative">
                <div
                    ref={carouselRef}
                    className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-12 px-4 md:px-8 lg:px-[max(var(--container-padding),calc((100vw-var(--container-max))/2+var(--container-padding)))]"
                    style={{
                        scrollSnapType: 'x mandatory',
                        WebkitOverflowScrolling: 'touch',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                >
                    {treatments.map((item, index) => (
                        <Link
                            key={index}
                            to={item.link}
                            className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] group block"
                            style={{ scrollSnapAlign: 'start' }}
                        >
                            <div className="relative h-[360px] md:h-[420px] rounded-sm overflow-hidden shadow-lg border border-[#333]">
                                {/* Background Image */}
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.05]"
                                    style={{ filter: 'brightness(0.6)' }}
                                />
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500"></div>
                                
                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-white z-10">
                                    <h3 className="text-2xl md:text-3xl font-serif tracking-widest uppercase text-center mb-1 text-white">
                                        {item.title}
                                    </h3>
                                    {item.subtitle && (
                                        <h4 className="text-xs tracking-[4px] uppercase font-bold mt-2 text-center text-gold">
                                            {item.subtitle}
                                        </h4>
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={() => scroll('left')}
                    className={`absolute left-2 md:left-8 top-[calc(50%-24px)] -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center
                               transition-all duration-300 z-10 border border-white/20 hover:border-gold group hover:bg-gold
                               ${canScrollLeft ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={28} className="text-white transition-colors" style={{ marginLeft: '-2px' }} />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className={`absolute right-2 md:right-8 top-[calc(50%-24px)] -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center
                               transition-all duration-300 z-10 border border-white/20 hover:border-gold group hover:bg-gold
                               ${canScrollRight ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                    aria-label="Next slide"
                >
                    <ChevronRight size={28} className="text-white transition-colors" style={{ marginRight: '-2px' }} />
                </button>
            </div>

            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    )
}

// ===== EXCLUSIVE - CAROUSEL SECTION =====
function ExclusiveSection() {
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
        <section className="section bg-[#e8e3d9] overflow-hidden py-24 md:py-32">
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
                        <Text size="md" className="max-w-2xl mx-auto" color="muted">
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
                            className="flex-shrink-0 w-[260px] md:w-[320px] group border border-[#f0ede8] bg-white rounded-sm hover-lift"
                            style={{ scrollSnapAlign: 'start' }}
                        >
                            <div className="h-[240px] md:h-[280px] flex flex-col items-center justify-center p-8 transition-colors">
                                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-8 bg-[#e8e3d9] group-hover:bg-gold transition-colors duration-500">
                                    <span className="text-2xl text-gold group-hover:text-white transition-colors duration-500">✨</span>
                                </div>
                                <h3 className="text-lg font-serif tracking-widest text-center mb-2 text-dark">
                                    {category.name}
                                </h3>
                                {category.subname && (
                                    <h4 className="text-[10px] uppercase font-bold tracking-[2px] text-center text-[#888]">
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
                               transition-all duration-300 z-10 hover:border-gold hover:bg-gold group
                               ${canScrollLeft ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={24} className="text-gold group-hover:text-white transition-colors" />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className={`absolute right-2 md:right-8 top-[calc(50%-16px)] -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-lg flex items-center justify-center border border-[#f0ede8]
                               transition-all duration-300 z-10 hover:border-gold hover:bg-gold group
                               ${canScrollRight ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                    aria-label="Next slide"
                >
                    <ChevronRight size={24} className="text-gold group-hover:text-white transition-colors" />
                </button>
            </div>

            <div className="container mt-8 text-center">
                <Link to="/treatments" className="inline-flex items-center justify-center border border-dark px-8 py-4 text-xs tracking-[2px] uppercase font-semibold text-dark hover:bg-dark hover:text-white transition-all duration-300">
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

// ===== FLOATING WHATSAPP CTA =====
function FloatingCTA() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 2000)
        return () => clearTimeout(timer)
    }, [])

    if (!visible) return null

    return (
        <a
            href="https://wa.me/911234567890?text=Hi%2C%20I%20would%20like%20to%20book%20a%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 w-[60px] h-[60px] bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#1ebe57] hover:scale-105 hover:shadow-xl transition-all z-[100]"
            aria-label="WhatsApp Consultation"
            style={{
                animation: 'floatIn 0.5s ease-out'
            }}
        >
            <MessageCircle size={30} />
            <style>{`
                @keyframes floatIn {
                    from { opacity: 0; transform: translateY(20px) scale(0.9); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
            `}</style>
        </a>
    )
}
