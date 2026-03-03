import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Star, MapPin, Quote } from 'lucide-react'
import { RevealWrapper, ParallaxImage } from '../hooks/useAnimations'
import { Heading, Text, Caption } from '../components/ui/Typography'
import { heroSlides, concerns, treatments, testimonials, locations as locationData, stats } from '../data/siteData'

export default function Home() {
    return (
        <>
            <HeroSection />
            <StatsBar />
            <ConcernsSection />
            <TreatmentsSection />
            <AboutPreview />
            <TestimonialsSection />
            <LocationsSection />
            <CTASection />
        </>
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
            className="relative overflow-hidden"
            style={{ 
                minHeight: '100vh',
                height: 'auto',
                paddingTop: 'var(--header-total-height)'
            }}
        >
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    key={slide.id}
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    style={{ filter: 'brightness(0.45)' }}
                />
                <div 
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(135deg, rgba(26,26,26,0.6) 0%, rgba(248,184,78,0.12) 100%)' }}
                />
            </div>

            {/* Content */}
            <div 
                className="relative flex items-center min-h-[calc(100vh-var(--header-total-height))] py-16"
            >
                <div className="container">
                    <div ref={textRef} className="max-w-3xl">
                        <Caption variant="overline-white" className="mb-5">
                            {slide.subtitle}
                        </Caption>
                        <Heading variant="hero-white" className="mb-6 whitespace-pre-line">
                            {slide.title}
                        </Heading>
                        <Text size="lg" color="white-muted" className="mb-10 max-w-xl">
                            {slide.description}
                        </Text>
                        <div className="flex items-center gap-4 flex-wrap">
                            <Link to={slide.ctaLink} className="btn btn-primary">
                                {slide.cta} <ArrowRight size={16} />
                            </Link>
                            <Link 
                                to="/book" 
                                className="btn btn-outline"
                                style={{ borderColor: '#fff', color: '#fff' }}
                            >
                                Book Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide Navigation - Refined */}
            <div className="absolute bottom-10 left-0 w-full">
                <div className="container flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        {heroSlides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goToSlide(i)}
                                className="h-1 rounded-full transition-all duration-500"
                                style={{ 
                                    width: i === current ? '40px' : '24px',
                                    background: i === current ? 'var(--color-gold)' : 'rgba(255,255,255,0.3)'
                                }}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => goToSlide(current === 0 ? heroSlides.length - 1 : current - 1)}
                            className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-all duration-300"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            onClick={() => goToSlide((current + 1) % heroSlides.length)}
                            className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-all duration-300"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
                .text-gold {
                    color: var(--color-gold);
                }
                .hover\:border-gold:hover {
                    border-color: var(--color-gold);
                }
                .hover\:text-gold:hover {
                    color: var(--color-gold);
                }
            `}</style>
        </section>
    )
}

// ===== STATS BAR - REFINED =====
function StatsBar() {
    return (
        <div 
            className="relative z-10"
            style={{ background: 'var(--color-gold)' }}
        >
            <div className="container py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                    {stats.map((stat, i) => (
                        <RevealWrapper key={i} direction="up" delay={i * 0.1}>
                            <div className="text-center">
                                <Heading 
                                    variant="section-white" 
                                    className="text-white text-3xl md:text-4xl"
                                >
                                    {stat.value}
                                </Heading>
                                <Caption variant="label-white" className="mt-2 opacity-85">
                                    {stat.label}
                                </Caption>
                            </div>
                        </RevealWrapper>
                    ))}
                </div>
            </div>
        </div>
    )
}

// ===== CONCERNS SECTION - REFINED =====
function ConcernsSection() {
    return (
        <section className="section section-cream">
            <div className="container">
                <RevealWrapper>
                    <div className="section-header">
                        <Caption variant="overline">What Bothers You?</Caption>
                        <Heading variant="section">Concerns</Heading>
                        <div className="gold-line" />
                        <Text size="md" color="muted">
                            We offer expert solutions for a wide range of skin, hair, and aesthetic concerns tailored to your unique needs.
                        </Text>
                    </div>
                </RevealWrapper>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {concerns.slice(0, 8).map((concern, i) => (
                        <RevealWrapper key={concern.id} direction="up" delay={i * 0.06}>
                            <Link to={`/concerns/${concern.slug}`} className="group block text-center p-4 md:p-6">
                                <div
                                    className="relative w-20 h-20 mx-auto mb-5 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                                    style={{ 
                                        background: 'rgba(248, 184, 78, 0.12)', 
                                        border: '2px solid var(--color-gold)'
                                    }}
                                >
                                    <span className="text-2xl">{concern.icon}</span>
                                </div>
                                <h4
                                    className="text-sm font-semibold tracking-wide transition-colors duration-300 group-hover:text-gold mb-2"
                                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-dark)' }}
                                >
                                    {concern.name}
                                </h4>
                                <p 
                                    className="text-xs leading-relaxed"
                                    style={{ color: 'var(--color-text-muted)' }}
                                >
                                    {concern.shortDescription.slice(0, 50)}...
                                </p>
                            </Link>
                        </RevealWrapper>
                    ))}
                </div>

                <RevealWrapper className="text-center mt-12">
                    <Link to="/concerns" className="btn btn-outline">
                        View All Concerns <ArrowRight size={16} />
                    </Link>
                </RevealWrapper>
            </div>

            <style>{`
                .text-gold {
                    color: var(--color-gold);
                }
                .group-hover\:text-gold:hover {
                    color: var(--color-gold);
                }
            `}</style>
        </section>
    )
}

// ===== TREATMENTS SECTION - REFINED =====
function TreatmentsSection() {
    return (
        <section className="section">
            <div className="container">
                <RevealWrapper>
                    <div className="section-header">
                        <Caption variant="overline">Our Expertise</Caption>
                        <Heading variant="section">Treatments</Heading>
                        <div className="gold-line" />
                        <Text size="md" color="muted">
                            Discover our comprehensive range of advanced dermatology and aesthetic treatments.
                        </Text>
                    </div>
                </RevealWrapper>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {treatments.slice(0, 6).map((treatment, i) => (
                        <RevealWrapper key={treatment.id} direction="up" delay={i * 0.08}>
                            <Link to={`/treatments/${treatment.slug}`} className="card group block">
                                <div className="overflow-hidden relative">
                                    <img 
                                        src={treatment.image} 
                                        alt={treatment.title} 
                                        className="card-img" 
                                    />
                                    <div
                                        className="absolute top-4 left-4 px-3 py-1.5 text-[10px] tracking-wider uppercase text-white rounded-full font-semibold"
                                        style={{ background: 'var(--color-gold)' }}
                                    >
                                        {treatment.category}
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h3 className="group-hover:text-gold transition-colors">{treatment.title}</h3>
                                    <p className="mt-2">{treatment.shortDescription.slice(0, 90)}...</p>
                                    <div 
                                        className="flex items-center justify-between mt-5 pt-4 border-t"
                                        style={{ borderColor: 'var(--color-border)' }}
                                    >
                                        <span 
                                            className="text-sm font-semibold"
                                            style={{ color: 'var(--color-gold-dark)' }}
                                        >
                                            {treatment.price}
                                        </span>
                                        <span 
                                            className="text-xs"
                                            style={{ color: 'var(--color-text-light)' }}
                                        >
                                            {treatment.duration}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </RevealWrapper>
                    ))}
                </div>

                <RevealWrapper className="text-center mt-12">
                    <Link to="/treatments" className="btn btn-primary">
                        View All Treatments <ArrowRight size={16} />
                    </Link>
                </RevealWrapper>
            </div>

            <style>{`
                .text-gold {
                    color: var(--color-gold);
                }
                .group-hover\:text-gold:hover {
                    color: var(--color-gold);
                }
            `}</style>
        </section>
    )
}

// ===== ABOUT PREVIEW - REFINED =====
function AboutPreview() {
    return (
        <section className="section section-cream overflow-hidden">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <RevealWrapper direction="left">
                        <div className="relative">
                            <ParallaxImage
                                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
                                alt="Dr. Simal Soin"
                                className="rounded-2xl"
                                style={{ height: '520px' }}
                            />
                            <div
                                className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 w-36 h-36 lg:w-44 lg:h-44 rounded-2xl flex items-center justify-center"
                                style={{ background: 'var(--color-gold)' }}
                            >
                                <div className="text-center text-white">
                                    <Heading variant="card-white" className="text-white">15+</Heading>
                                    <Caption variant="label-white" className="mt-1 opacity-90">
                                        Years of<br />Excellence
                                    </Caption>
                                </div>
                            </div>
                        </div>
                    </RevealWrapper>

                    <RevealWrapper direction="right">
                        <div>
                            <Caption variant="overline">About AAYNA</Caption>
                            <Heading variant="section" className="mb-6">
                                Where Science Meets Beauty
                            </Heading>
                            <Text size="md" color="muted" className="mb-5">
                                Founded by Dr. Simal Soin, AAYNA Clinic has been at the forefront of dermatology and aesthetic
                                medicine in India for over 15 years. Our state-of-the-art clinics combine cutting-edge technology
                                with personalized care to deliver transformative results.
                            </Text>
                            <Text color="muted" className="mb-8">
                                We believe that everyone deserves to feel confident in their skin. Our team of expert dermatologists
                                and skilled aestheticians work together to create customized treatment plans that address your unique
                                concerns and goals.
                            </Text>
                            <div className="flex items-center gap-4 flex-wrap">
                                <Link to="/about" className="btn btn-primary">
                                    Our Story <ArrowRight size={16} />
                                </Link>
                                <Link to="/book" className="btn btn-outline">
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

// ===== TESTIMONIALS - REFINED =====
function TestimonialsSection() {
    const [active, setActive] = useState(0)

    return (
        <section
            className="section relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #272727 100%)' }}
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

                <div className="max-w-3xl mx-auto">
                    <RevealWrapper>
                        <div className="text-center px-4 md:px-10">
                            <Quote 
                                size={48} 
                                className="mx-auto mb-8 opacity-30"
                                style={{ color: 'var(--color-gold)' }}
                                strokeWidth={1}
                            />
                            <p
                                className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8"
                                style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
                            >
                                "{testimonials[active].content}"
                            </p>
                            <div className="flex items-center justify-center gap-1 mb-4">
                                {[...Array(testimonials[active].rating)].map((_, i) => (
                                    <Star 
                                        key={i} 
                                        size={16} 
                                        fill="var(--color-gold)" 
                                        stroke="var(--color-gold)" 
                                    />
                                ))}
                            </div>
                            <p className="text-white font-semibold text-lg">{testimonials[active].name}</p>
                            <p className="text-white/50 text-sm mt-1">
                                {testimonials[active].treatment} • {testimonials[active].location}
                            </p>
                        </div>
                    </RevealWrapper>

                    <div className="flex items-center justify-center gap-3 mt-12">
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
        </section>
    )
}

// ===== LOCATIONS - REFINED =====
function LocationsSection() {
    return (
        <section className="section">
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
                            <div className="card group h-full">
                                <div className="overflow-hidden" style={{ height: '180px' }}>
                                    <img 
                                        src={loc.image} 
                                        alt={loc.name} 
                                        className="card-img h-full"
                                    />
                                </div>
                                <div className="p-5">
                                    <h4 
                                        className="text-base mb-2 group-hover:text-gold transition-colors"
                                        style={{ 
                                            fontFamily: 'var(--font-display)', 
                                            fontWeight: 500,
                                            color: 'var(--color-dark)'
                                        }}
                                    >
                                        {loc.name}
                                    </h4>
                                    <p 
                                        className="text-sm mb-2 flex items-start gap-2"
                                        style={{ color: 'var(--color-text-muted)' }}
                                    >
                                        <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: 'var(--color-gold)' }} />
                                        {loc.address}
                                    </p>
                                    <a
                                        href={`tel:${loc.phone}`}
                                        className="text-sm font-semibold hover:text-gold transition-colors"
                                        style={{ color: 'var(--color-gold)' }}
                                    >
                                        {loc.phone}
                                    </a>
                                </div>
                            </div>
                        </RevealWrapper>
                    ))}
                </div>
            </div>

            <style>{`
                .text-gold {
                    color: var(--color-gold);
                }
                .group-hover\:text-gold:hover {
                    color: var(--color-gold);
                }
                .hover\:text-gold:hover {
                    color: var(--color-gold);
                }
            `}</style>
        </section>
    )
}

// ===== CTA - REFINED =====
function CTASection() {
    return (
        <section className="relative py-24 lg:py-32 overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80"
                    alt="CTA Background"
                    className="w-full h-full object-cover"
                    style={{ filter: 'brightness(0.35)' }}
                />
            </div>

            <div className="container relative z-10 text-center px-6">
                <RevealWrapper>
                    <Caption variant="overline-white" className="mb-4">Start Today</Caption>
                    <Heading variant="section-white" className="mb-6">
                        Your Journey to Beautiful<br />Skin Begins Here
                    </Heading>
                    <Text size="md" color="white-muted" className="mb-10 max-w-lg mx-auto">
                        Schedule a free consultation with our expert dermatologists and discover the perfect treatment plan for you.
                    </Text>
                    <div className="flex items-center justify-center gap-4 flex-wrap">
                        <Link to="/book" className="btn btn-primary">
                            Book Free Consultation <ArrowUpRight size={16} />
                        </Link>
                        <a 
                            href="tel:+911234567890" 
                            className="btn btn-outline"
                            style={{ borderColor: '#fff', color: '#fff' }}
                        >
                            Call Us Now
                        </a>
                    </div>
                </RevealWrapper>
            </div>
        </section>
    )
}
