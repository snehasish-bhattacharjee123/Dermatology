import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Star, MapPin, Quote } from 'lucide-react'
import { RevealWrapper, ParallaxImage } from '../hooks/useAnimations'
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

// ===== HERO =====
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
        <section className="relative h-screen overflow-hidden" style={{ minHeight: '650px' }}>
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    key={slide.id}
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    style={{ filter: 'brightness(0.45)' }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(26,26,26,0.6) 0%, rgba(248,184,78,0.15) 100%)' }} />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
                <div className="container">
                    <div ref={textRef} className="max-w-3xl">
                        <p
                            className="text-sm tracking-[4px] uppercase mb-5"
                            style={{ color: '#f8b84e', fontFamily: 'var(--font-body)', fontWeight: 500 }}
                        >
                            {slide.subtitle}
                        </p>
                        <h1
                            className="text-white mb-5 leading-[1.1]"
                            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: 500, whiteSpace: 'pre-line' }}
                        >
                            {slide.title}
                        </h1>
                        <p className="text-white/75 text-base mb-8 max-w-xl leading-relaxed" style={{ fontSize: '1.05rem' }}>
                            {slide.description}
                        </p>
                        <div className="flex items-center gap-4 flex-wrap">
                            <Link to={slide.ctaLink} className="btn btn-primary">
                                {slide.cta} <ArrowRight size={14} />
                            </Link>
                            <Link to="/book" className="btn" style={{ borderColor: '#fff', color: '#fff', border: '2px solid #fff' }}>
                                Book Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide Navigation */}
            <div className="absolute bottom-10 left-0 w-full">
                <div className="container flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        {heroSlides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goToSlide(i)}
                                className="w-10 h-[3px] rounded-full transition-all duration-500"
                                style={{ background: i === current ? '#f8b84e' : 'rgba(255,255,255,0.3)' }}
                            />
                        ))}
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => goToSlide(current === 0 ? heroSlides.length - 1 : current - 1)}
                            className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-[#f8b84e] hover:text-[#f8b84e] transition-all"
                        >
                            <ChevronLeft size={16} />
                        </button>
                        <button
                            onClick={() => goToSlide((current + 1) % heroSlides.length)}
                            className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-[#f8b84e] hover:text-[#f8b84e] transition-all"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

// ===== STATS BAR =====
function StatsBar() {
    return (
        <div style={{ background: '#f8b84e' }} className="py-7 relative z-10">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <RevealWrapper key={i} direction="up" delay={i * 0.1}>
                            <div className="text-center">
                                <p className="text-white text-3xl md:text-4xl mb-1" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
                                    {stat.value}
                                </p>
                                <p className="text-white/85 text-xs tracking-[1.5px] uppercase font-medium">{stat.label}</p>
                            </div>
                        </RevealWrapper>
                    ))}
                </div>
            </div>
        </div>
    )
}

// ===== CONCERNS SECTION =====
function ConcernsSection() {
    return (
        <section className="section section-cream">
            <div className="container">
                <RevealWrapper>
                    <div className="section-header">
                        <p className="text-sm tracking-[3px] uppercase mb-3 font-semibold" style={{ color: '#d2880c' }}>What Bothers You?</p>
                        <h2>Concerns</h2>
                        <div className="gold-line" />
                        <p>We offer expert solutions for a wide range of skin, hair, and aesthetic concerns tailored to your unique needs.</p>
                    </div>
                </RevealWrapper>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {concerns.slice(0, 8).map((concern, i) => (
                        <RevealWrapper key={concern.id} direction="up" delay={i * 0.06}>
                            <Link to={`/concerns/${concern.slug}`} className="group block text-center p-4">
                                <div
                                    className="relative w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-400 group-hover:scale-110"
                                    style={{ background: 'rgba(248, 184, 78, 0.12)', border: '2px solid #f8b84e' }}
                                >
                                    <span className="text-2xl">{concern.icon}</span>
                                </div>
                                <h4
                                    className="text-sm font-semibold tracking-wide transition-colors duration-300 group-hover:text-[#d2880c]"
                                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-dark)' }}
                                >
                                    {concern.name}
                                </h4>
                                <p className="text-xs mt-1.5 leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                                    {concern.shortDescription.slice(0, 50)}...
                                </p>
                            </Link>
                        </RevealWrapper>
                    ))}
                </div>

                <RevealWrapper className="text-center mt-10">
                    <Link to="/concerns" className="btn btn-outline">
                        View All Concerns <ArrowRight size={14} />
                    </Link>
                </RevealWrapper>
            </div>
        </section>
    )
}

// ===== TREATMENTS SECTION =====
function TreatmentsSection() {
    return (
        <section className="section">
            <div className="container">
                <RevealWrapper>
                    <div className="section-header">
                        <p className="text-sm tracking-[3px] uppercase mb-3 font-semibold" style={{ color: '#d2880c' }}>Our Expertise</p>
                        <h2>Treatments</h2>
                        <div className="gold-line" />
                        <p>Discover our comprehensive range of advanced dermatology and aesthetic treatments.</p>
                    </div>
                </RevealWrapper>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {treatments.slice(0, 6).map((treatment, i) => (
                        <RevealWrapper key={treatment.id} direction="up" delay={i * 0.08}>
                            <Link to={`/treatments/${treatment.slug}`} className="card group block">
                                <div className="overflow-hidden relative">
                                    <img src={treatment.image} alt={treatment.title} className="card-img" />
                                    <div
                                        className="absolute top-3 left-3 px-3 py-1 text-[10px] tracking-wider uppercase text-white rounded-full font-semibold"
                                        style={{ background: '#f8b84e' }}
                                    >
                                        {treatment.category}
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h3 className="group-hover:text-[#d2880c] transition-colors">{treatment.title}</h3>
                                    <p className="mt-1.5">{treatment.shortDescription.slice(0, 90)}...</p>
                                    <div className="flex items-center justify-between mt-4 pt-3 border-t" style={{ borderColor: 'var(--color-border)' }}>
                                        <span className="text-sm font-semibold" style={{ color: '#d2880c' }}>{treatment.price}</span>
                                        <span className="text-xs" style={{ color: 'var(--color-text-light)' }}>
                                            {treatment.duration}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </RevealWrapper>
                    ))}
                </div>

                <RevealWrapper className="text-center mt-10">
                    <Link to="/treatments" className="btn btn-primary">
                        View All Treatments <ArrowRight size={14} />
                    </Link>
                </RevealWrapper>
            </div>
        </section>
    )
}

// ===== ABOUT PREVIEW =====
function AboutPreview() {
    return (
        <section className="section section-cream overflow-hidden">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    <RevealWrapper direction="left">
                        <div className="relative">
                            <ParallaxImage
                                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
                                alt="Dr. Simal Soin"
                                className="rounded-2xl h-[480px]"
                            />
                            <div
                                className="absolute -bottom-5 -right-5 w-40 h-40 rounded-2xl flex items-center justify-center"
                                style={{ background: '#f8b84e' }}
                            >
                                <div className="text-center text-white">
                                    <p className="text-3xl" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>15+</p>
                                    <p className="text-[10px] tracking-[1.5px] uppercase mt-0.5 font-medium">Years of<br />Excellence</p>
                                </div>
                            </div>
                        </div>
                    </RevealWrapper>

                    <RevealWrapper direction="right">
                        <div>
                            <p className="text-sm tracking-[3px] uppercase mb-3 font-semibold" style={{ color: '#d2880c' }}>About AAYNA</p>
                            <h2 className="mb-5" style={{ fontFamily: 'var(--font-heading)' }}>Where Science Meets Beauty</h2>
                            <p className="mb-5 text-base leading-relaxed" style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>
                                Founded by Dr. Simal Soin, AAYNA Clinic has been at the forefront of dermatology and aesthetic
                                medicine in India for over 15 years. Our state-of-the-art clinics combine cutting-edge technology
                                with personalized care to deliver transformative results.
                            </p>
                            <p className="mb-7 leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                                We believe that everyone deserves to feel confident in their skin. Our team of expert dermatologists
                                and skilled aestheticians work together to create customized treatment plans that address your unique
                                concerns and goals.
                            </p>
                            <div className="flex items-center gap-4">
                                <Link to="/about" className="btn btn-primary">
                                    Our Story <ArrowRight size={14} />
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

// ===== TESTIMONIALS =====
function TestimonialsSection() {
    const [active, setActive] = useState(0)

    return (
        <section
            className="section relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #272727 100%)' }}
        >
            <div className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-5" style={{ background: '#f8b84e', filter: 'blur(80px)' }} />

            <div className="container relative z-10">
                <RevealWrapper>
                    <div className="section-header">
                        <p className="text-sm tracking-[3px] uppercase mb-3 font-semibold" style={{ color: '#f8b84e' }}>Patient Love</p>
                        <h2 className="text-white">What Our Patients Say</h2>
                        <div className="gold-line" />
                    </div>
                </RevealWrapper>

                <div className="max-w-3xl mx-auto">
                    <RevealWrapper>
                        <div className="text-center px-4 md:px-10">
                            <Quote size={40} className="mx-auto mb-6 opacity-30" style={{ color: '#f8b84e' }} />
                            <p
                                className="text-lg md:text-xl text-white/85 leading-relaxed mb-6"
                                style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 400 }}
                            >
                                "{testimonials[active].content}"
                            </p>
                            <div className="flex items-center justify-center gap-1 mb-3">
                                {[...Array(testimonials[active].rating)].map((_, i) => (
                                    <Star key={i} size={14} fill="#f8b84e" stroke="#f8b84e" />
                                ))}
                            </div>
                            <p className="text-white font-semibold text-base">{testimonials[active].name}</p>
                            <p className="text-white/45 text-sm mt-1">
                                {testimonials[active].treatment} • {testimonials[active].location}
                            </p>
                        </div>
                    </RevealWrapper>

                    <div className="flex items-center justify-center gap-3 mt-10">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                                style={{
                                    background: i === active ? '#f8b84e' : 'rgba(255,255,255,0.2)',
                                    transform: i === active ? 'scale(1.3)' : 'scale(1)',
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

// ===== LOCATIONS =====
function LocationsSection() {
    return (
        <section className="section">
            <div className="container">
                <RevealWrapper>
                    <div className="section-header">
                        <p className="text-sm tracking-[3px] uppercase mb-3 font-semibold" style={{ color: '#d2880c' }}>Visit Us</p>
                        <h2>Skin Treatment Clinic In Delhi & Ludhiana</h2>
                        <div className="gold-line" />
                    </div>
                </RevealWrapper>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {locationData.map((loc, i) => (
                        <RevealWrapper key={loc.id} direction="up" delay={i * 0.08}>
                            <div className="card group">
                                <div className="overflow-hidden h-44">
                                    <img src={loc.image} alt={loc.name} className="card-img h-full" />
                                </div>
                                <div className="p-5">
                                    <h4 className="text-base mb-2 group-hover:text-[#d2880c] transition-colors" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
                                        {loc.name}
                                    </h4>
                                    <p className="text-sm mb-2 flex items-start gap-2" style={{ color: 'var(--color-text-muted)', fontSize: '0.8125rem' }}>
                                        <MapPin size={13} className="mt-0.5 shrink-0" style={{ color: '#d2880c' }} />
                                        {loc.address}
                                    </p>
                                    <a
                                        href={`tel:${loc.phone}`}
                                        className="text-sm font-semibold hover:text-[#d2880c] transition-colors"
                                        style={{ color: '#d2880c', fontSize: '0.8125rem' }}
                                    >
                                        {loc.phone}
                                    </a>
                                </div>
                            </div>
                        </RevealWrapper>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ===== CTA =====
function CTASection() {
    return (
        <section className="relative py-28 overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80"
                    alt="CTA Background"
                    className="w-full h-full object-cover"
                    style={{ filter: 'brightness(0.35)' }}
                />
            </div>

            <div className="container relative z-10 text-center">
                <RevealWrapper>
                    <p className="text-sm tracking-[3px] uppercase mb-3 font-semibold" style={{ color: '#f8b84e' }}>Start Today</p>
                    <h2 className="text-white mb-5" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
                        Your Journey to Beautiful<br />Skin Begins Here
                    </h2>
                    <p className="text-white/65 mb-8 max-w-lg mx-auto" style={{ fontSize: '1rem' }}>
                        Schedule a free consultation with our expert dermatologists and discover the perfect treatment plan for you.
                    </p>
                    <div className="flex items-center justify-center gap-4 flex-wrap">
                        <Link to="/book" className="btn btn-primary">
                            Book Free Consultation <ArrowUpRight size={14} />
                        </Link>
                        <a href="tel:+911234567890" className="btn" style={{ borderColor: '#fff', color: '#fff', border: '2px solid #fff' }}>
                            Call Us Now
                        </a>
                    </div>
                </RevealWrapper>
            </div>
        </section>
    )
}
