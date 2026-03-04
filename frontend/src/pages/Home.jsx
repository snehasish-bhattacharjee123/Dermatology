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
            <TreatmentsAtAGlanceSection />
            <AboutPreview />
            <RealResultsSection />
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
                                    border: '1px solid #F19020',
                                    color: '#F19020'
                                }}
                                aria-label="Previous testimonial"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 30 30" fill="none">
                                    <rect x="0.5" y="0.5" width="29" height="29" stroke="#F19020"></rect>
                                    <g clipPath="url(#clip0_1110_83)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.2662 8.20429C11.4098 8.07297 11.6004 7.99976 11.7985 7.99976C11.9967 7.99976 12.1872 8.07297 12.3309 8.20429L18.5585 13.9891C18.6979 14.1166 18.8089 14.2701 18.8848 14.4402C18.9606 14.6103 18.9998 14.7934 18.9998 14.9785C18.9998 15.1636 18.9606 15.3468 18.8848 15.5169C18.8089 15.687 18.6979 15.8405 18.5585 15.968L12.2858 21.7955C11.9949 22.065 11.5236 22.0685 11.2284 21.8025C11.1569 21.7391 11.0997 21.6623 11.0603 21.5767C11.021 21.4912 11.0003 21.3988 10.9997 21.3053C10.999 21.2117 11.0183 21.119 11.0564 21.033C11.0945 20.9469 11.1505 20.8693 11.2211 20.805L16.9614 15.4731C17.0312 15.4093 17.0868 15.3326 17.1247 15.2475C17.1627 15.1624 17.1822 15.0708 17.1822 14.9782C17.1822 14.8856 17.1627 14.794 17.1247 14.7089C17.0868 14.6238 17.0312 14.5471 16.9614 14.4833L11.2669 9.19339C11.1972 9.12969 11.1416 9.05299 11.1037 8.96797C11.0657 8.88295 11.0462 8.79138 11.0462 8.69884C11.0462 8.6063 11.0657 8.51473 11.1037 8.42971C11.1416 8.34469 11.1964 8.26799 11.2662 8.20429Z" fill="#F19020"></path>
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
                                    border: '1px solid #F19020',
                                    color: '#F19020'
                                }}
                                aria-label="Next testimonial"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 30 30" fill="none">
                                    <rect x="0.5" y="0.5" width="29" height="29" stroke="#F19020"></rect>
                                    <g clipPath="url(#clip1_1110_84)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M18.7338 21.7957C18.5246 21.9254 18.2716 21.9999 18.0101 21.9999C17.7487 21.9999 17.4957 21.9254 17.2864 21.7957L11.0137 15.968C10.8743 15.8405 10.7633 15.687 10.6874 15.5169C10.6116 15.3467 10.5724 15.1635 10.5724 14.9784C10.5724 14.7933 10.6116 14.6101 10.6874 14.44C10.7633 14.2699 10.8743 14.1164 11.0137 13.9889L17.2413 8.20409C17.385 8.07277 17.5755 7.99956 17.7737 7.99956C17.9718 7.99956 18.1624 8.07277 18.306 8.20409C18.3758 8.26779 18.4314 8.34449 18.4693 8.42951C18.5073 8.51453 18.5268 8.6061 18.5268 8.69864C18.5268 8.79118 18.5073 8.88275 18.4693 8.96777C18.4314 9.05279 18.3758 9.12949 18.306 9.19319L12.6004 14.4831C12.5307 14.5468 12.475 14.6235 12.4371 14.7086C12.3991 14.7937 12.3796 14.8853 12.3796 14.9779C12.3796 15.0705 12.3991 15.1621 12.4371 15.2472C12.475 15.3322 12.5307 15.4089 12.6004 15.4727L17.7864 20.805C17.8569 20.8693 17.9129 20.9469 17.951 21.033C17.9891 21.119 18.0084 21.2117 18.0077 21.3053C18.0071 21.3988 17.9864 21.4912 17.9471 21.5767C17.9077 21.6623 17.8505 21.7391 17.779 21.8025C17.4838 22.0685 17.0125 22.065 16.7216 21.7957L18.7338 21.7957Z" fill="#F19020"></path>
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

// ===== REAL RESULTS SECTION =====
function RealResultsSection() {
    return (
        <section className="section bg-white">
            <div className="container">
                <RevealWrapper>
                    <div className="text-center mb-12">
                        <Heading variant="section" className="mb-4">REAL SKIN, REAL RESULTS</Heading>
                        <div className="gold-line mx-auto" />
                    </div>
                </RevealWrapper>

                <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start max-w-6xl mx-auto">
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
                    <div className="w-full lg:w-1/2 h-full">
                        <RevealWrapper direction="right" delay={0.2} className="h-full">
                            <div className="bg-[#fcf8f2] p-8 md:p-12 rounded-2xl h-full flex flex-col justify-center shadow-sm">
                                <img
                                    src="https://skinlab.in/wp-content/uploads/2025/10/male-user.svg"
                                    alt="User icon"
                                    className="w-16 h-16 mb-6"
                                />
                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic mb-8" style={{ fontFamily: 'var(--font-body)' }}>
                                    "It was my first time at SkinLab and just based on the how precise and considerate the details of my consultation was and how the therapist has such good experience can be known by how she looked at my skin and gave me her feedback I didn't even need to explain much details and my treatment was done to perfection. I was literally glowing afterwards I can say confidently I'm very pleased with the results and I will be visiting them regularly. Thank you for the amazing experience."
                                </p>
                                <div>
                                    <p className="font-bold text-gray-900 text-lg">
                                        <span className="text-[var(--color-gold)] mr-2">–</span>
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
        // Don't prevent default here to allow page scrolling if user isn't trying to slide
        handleMove(e);
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchend', handleTouchEnd);
    };

    const handleTouchMove = (e) => {
        // Prevent default only if we are actively sliding to prevent vertical scroll while sliding
        // A better approach would check the delta, but to keep it simple and match standard behavior:
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
            className="relative overflow-hidden rounded-2xl shadow-lg cursor-ew-resize max-w-full w-full select-none"
            style={{ aspectRatio: '1/1' }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
        >
            {/* After Image (Base) */}
            <img
                src={afterImage}
                alt="After treatment"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                draggable={false}
            />
            {/* Before Image (Cropped) */}
            <div className="absolute inset-0 pointer-events-none z-10">
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
                <div className="w-0.5 md:w-1 h-full bg-white shadow-[0_0_5px_rgba(0,0,0,0.5)]"></div>
                <div className="absolute w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-[var(--color-gold)]">
                    <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" transform="rotate(90 12 12)" />
                    </svg>
                </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-4 left-4 bg-black/60 text-white text-xs md:text-sm font-semibold py-1.5 px-4 rounded-full pointer-events-none backdrop-blur-sm z-30">
                Before
            </div>
            <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs md:text-sm font-semibold py-1.5 px-4 rounded-full pointer-events-none backdrop-blur-sm z-30">
                After
            </div>
        </div>
    );
}

// ===== AAYNA EXCLUSIVE - CAROUSEL SECTION =====
function TreatmentsAtAGlanceSection() {
    const carouselRef = useRef(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const treatmentCategories = [
        { name: 'AAYNA WATERLESS', subname: 'MEDICAL PEDICURE', path: '/treatments/aayna-waterless-pedicure' },
        { name: 'CLEARLIFT® &', subname: 'CLEARSKIN™', path: '/treatments/clearlift-clearskin' },
        { name: 'EMSCULPT®', subname: '', path: '/treatments/emsculpt' },
        { name: 'FRAXEL', subname: '', path: '/treatments/fraxel' },
        { name: 'HYDRAFACIAL', subname: '', path: '/treatments/hydrafacial' },
        { name: 'SENSIBLE FILLERS,', subname: 'THE AAYNA WAY', path: '/treatments/sensible-fillers' },
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
        <section className="section-lg section-cream overflow-hidden">
            <div className="container">
                <RevealWrapper>
                    <div className="section-header mb-12">
                        <div className="flex items-center justify-center mb-6">
                            <div className="w-24 h-24 rounded-full border-2 border-gold flex items-center justify-center bg-white">
                                <div className="text-gold font-medium text-xl">AAYNA</div>
                            </div>
                        </div>
                        <Caption variant="overline">AAYNA Exclusive</Caption>
                        <Heading variant="section">AAYNA brings some of the best and latest treatments from across the globe to India.</Heading>
                        <div className="gold-line" />
                    </div>
                </RevealWrapper>
            </div>

            {/* Carousel Container */}
            <div className="relative">
                <div
                    ref={carouselRef}
                    className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 lg:px-16 pb-4"
                    style={{
                        scrollSnapType: 'x mandatory',
                        WebkitOverflowScrolling: 'touch',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                >
                    {treatmentCategories.map((category, index) => (
                        <button
                            key={category.name}
                            className="flex-shrink-0 w-[280px] md:w-[320px] group"
                            style={{ scrollSnapAlign: 'start' }}
                        >
                            <div
                                className="relative h-[200px] md:h-[240px] rounded-xl overflow-hidden transition-all duration-500"
                                style={{
                                    background: 'var(--color-gold)'
                                }}
                            >
                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                                    <h3 className="text-2xl md:text-3xl font-medium tracking-wide uppercase text-center"
                                        style={{ fontFamily: 'var(--font-heading)', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>
                                        {category.name}
                                    </h3>
                                    {category.subname && (
                                        <h4 className="text-xl md:text-2xl font-normal mt-1 opacity-90 text-center"
                                            style={{ fontFamily: 'var(--font-body)', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>
                                            {category.subname}
                                        </h4>
                                    )}
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={() => scroll('left')}
                    className={`absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center
                               transition-all duration-300 z-10 ${canScrollLeft ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={24} style={{ color: 'var(--color-gold)' }} />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className={`absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center
                               transition-all duration-300 z-10 ${canScrollRight ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                    aria-label="Next slide"
                >
                    <ChevronRight size={24} style={{ color: 'var(--color-gold)' }} />
                </button>
            </div>

            <div className="container mt-12 text-center">
                <button className="btn btn-primary">
                    VIEW ALL <ArrowRight size={16} />
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
