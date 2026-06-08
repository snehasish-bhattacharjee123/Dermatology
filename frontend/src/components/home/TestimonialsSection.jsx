import { useState, useEffect, useRef, useCallback } from 'react'
import { RevealWrapper } from '../../hooks/useAnimations'
import { Heading, Caption } from '../ui/Typography'
import { testimonials } from '../../data/homeData'

// ===== TESTIMONIALS — PREMIUM CELEBRITY & PATIENT SHOWCASE =====
export default function TestimonialsSection() {
    const [active, setActive] = useState(0)
    const [animDir, setAnimDir] = useState('next') // 'next' | 'prev'
    const [isAnimating, setIsAnimating] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const timerRef = useRef(null)

    const navigate = useCallback((dir) => {
        if (isAnimating) return
        setAnimDir(dir)
        setIsAnimating(true)
        setTimeout(() => {
            setActive(prev =>
                dir === 'next'
                    ? (prev === testimonials.length - 1 ? 0 : prev + 1)
                    : (prev === 0 ? testimonials.length - 1 : prev - 1)
            )
            setIsAnimating(false)
        }, 400)
    }, [isAnimating])

    const goTo = useCallback((i) => {
        if (isAnimating || i === active) return
        setAnimDir(i > active ? 'next' : 'prev')
        setIsAnimating(true)
        setTimeout(() => {
            setActive(i)
            setIsAnimating(false)
        }, 400)
    }, [isAnimating, active])

    // Auto-play
    useEffect(() => {
        if (isPaused) return
        timerRef.current = setInterval(() => navigate('next'), 5500)
        return () => clearInterval(timerRef.current)
    }, [isPaused, navigate])

    const current = testimonials[active]

    return (
        <section
            className="relative overflow-hidden"
            style={{
                background: 'var(--color-bg-dark)',
                padding: 'clamp(4rem, 10vw, 8rem) 0',
                borderBottom: '1px solid rgba(237, 232, 208, 0.08)'
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Ambient luxury glows */}
            <div
                className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-40 mix-blend-screen"
                style={{
                    background: 'radial-gradient(circle, rgba(173,106,173,0.15) 0%, transparent 70%)',
                    transform: 'translate(-25%, -25%)',
                    filter: 'blur(50px)'
                }}
            />
            <div
                className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30 mix-blend-screen"
                style={{
                    background: 'radial-gradient(circle, rgba(237,232,208,0.08) 0%, transparent 70%)',
                    transform: 'translate(25%, 25%)',
                    filter: 'blur(50px)'
                }}
            />

            <div className="container relative z-10">

                {/* Section Header */}
                <RevealWrapper>
                    <div className="section-header text-center mb-12 md:mb-16">
                        <Caption style={{ color: 'var(--color-accent)', opacity: 0.8, letterSpacing: '4px' }}>
                            Patient Testimonials
                        </Caption>
                        <Heading level={2} style={{
                            color: 'var(--color-accent)',
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            fontWeight: 300,
                            lineHeight: 1.2,
                            marginTop: '0.5rem',
                            marginBottom: '1rem'
                        }}>
                            Voices of <span style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: '400' }}>Transformation</span>
                        </Heading>
                        <div
                            className="accent-line mx-auto"
                            style={{
                                width: '60px',
                                height: '1px',
                                background: 'rgba(237, 232, 208, 0.3)',
                                marginTop: '1rem'
                            }}
                        />
                    </div>
                </RevealWrapper>

                {/* Main Testimonial Card */}
                <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
                    <div
                        className="relative overflow-hidden rounded-lg shadow-2xl"
                        style={{
                            border: '1px solid rgba(237, 232, 208, 0.12)',
                            background: 'rgba(255, 255, 255, 0.02)',
                            backdropFilter: 'blur(20px)',
                            boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.4)'
                        }}
                    >
                        {/* Slide Content */}
                        <div
                            key={active}
                            className="flex flex-col md:flex-row relative"
                            style={{
                                animation: isAnimating
                                    ? `testimonial-${animDir === 'next' ? 'exit' : 'exit-rev'} 0.4s ease forwards`
                                    : `testimonial-enter 0.5s ease forwards`
                            }}
                        >
                            {/* Left: Quote Content */}
                            <div
                                className="flex flex-col justify-between order-2 md:order-1 relative"
                                style={{
                                    flex: '1 1 60%',
                                    padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3.5rem)',
                                }}
                            >
                                {/* Giant opening quote decoration */}
                                <div
                                    aria-hidden="true"
                                    style={{
                                        position: 'absolute',
                                        top: '1rem',
                                        left: '1.5rem',
                                        fontFamily: 'Georgia, serif',
                                        fontSize: 'clamp(6rem, 15vw, 10rem)',
                                        lineHeight: '1',
                                        color: 'var(--color-accent)',
                                        opacity: 0.07,
                                        userSelect: 'none',
                                        pointerEvents: 'none'
                                    }}
                                >&ldquo;</div>

                                {/* Content wrapper to enable vertical spacing */}
                                <div className="relative z-10 flex flex-col justify-center h-full">
                                    {/* 5-Star Rating */}
                                    <div
                                        style={{
                                            color: 'var(--color-accent)',
                                            letterSpacing: '3px',
                                            fontSize: '1rem',
                                            opacity: 0.9,
                                            marginBottom: '1.5rem'
                                        }}
                                        aria-label="5 star rating"
                                    >
                                        ★★★★★
                                    </div>

                                    {/* Quote text */}
                                    <p
                                        style={{
                                            fontFamily: 'var(--font-heading)',
                                            color: 'rgba(237,232,208,0.92)',
                                            fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
                                            lineHeight: 1.8,
                                            fontStyle: 'italic',
                                            fontWeight: 300,
                                            margin: 0,
                                            animation: 'text-enter 0.7s cubic-bezier(0.25, 1, 0.5, 1) forwards'
                                        }}
                                    >
                                        {current.content}
                                    </p>

                                    {/* Divider */}
                                    <div
                                        style={{
                                            width: '3rem',
                                            height: '1px',
                                            background: 'rgba(237, 232, 208, 0.25)',
                                            margin: '2rem 0 1.5rem 0',
                                        }}
                                    />

                                    {/* Name & Role */}
                                    <div>
                                        <h3
                                            style={{
                                                fontFamily: 'var(--font-heading)',
                                                color: 'var(--color-accent)',
                                                fontSize: 'clamp(1.25rem, 3vw, 1.8rem)',
                                                fontWeight: 400,
                                                letterSpacing: '0.02em',
                                                marginBottom: '0.25rem',
                                            }}
                                        >
                                            {current.name}
                                        </h3>
                                        <p
                                            style={{
                                                fontFamily: 'var(--font-body)',
                                                color: 'rgba(237, 232, 208, 0.8)',
                                                fontSize: 'clamp(0.7rem, 1.8vw, 0.8rem)',
                                                fontWeight: 500,
                                                letterSpacing: '0.15em',
                                                textTransform: 'uppercase',
                                                margin: 0,
                                            }}
                                        >
                                            {current.role}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Image block */}
                            <div
                                className="order-1 md:order-2 relative overflow-hidden"
                                style={{
                                    flex: '0 0 clamp(220px, 35%, 360px)',
                                    minHeight: 'clamp(250px, 45vw, 460px)'
                                }}
                            >
                                {/* Inner decorative frame */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        inset: '16px',
                                        border: '1px solid rgba(237, 232, 208, 0.25)',
                                        zIndex: 10,
                                        pointerEvents: 'none'
                                    }}
                                />

                                <img
                                    key={current.image}
                                    src={current.image}
                                    alt={current.name}
                                    loading="lazy"
                                    decoding="async"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'top center',
                                        display: 'block',
                                        transition: 'transform 10s ease-out',
                                        animation: 'image-enter 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards'
                                    }}
                                />
                            </div>
                        </div>

                        {/* Autoplay animated progress bar */}
                        <div
                            key={`progress-${active}`}
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                height: '2px',
                                background: 'var(--color-accent)',
                                opacity: 0.6,
                                animation: isPaused ? 'none' : 'progress-bar 5.5s linear forwards',
                                width: isPaused ? '0%' : 'auto',
                                zIndex: 30
                            }}
                        />
                    </div>

                    {/* Navigation, Thumbnails & Counter Row */}
                    <div className="flex flex-col gap-6 mt-8 md:mt-12">

                        {/* Interactive Avatar Thumbnails Track */}


                        {/* Controls Bottom Row */}
                        <div className="flex items-center justify-between border-t border-white/5 pt-6 px-1">

                            {/* Prev / Next minimalist circle arrows */}
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => navigate('prev')}
                                    className="flex items-center justify-center rounded-full transition-all duration-300"
                                    style={{
                                        width: '46px',
                                        height: '46px',
                                        border: '1px solid rgba(237, 232, 208, 0.25)',
                                        color: 'var(--color-accent)',
                                        background: 'transparent',
                                        cursor: 'pointer',
                                    }}
                                    aria-label="Previous testimonial"
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = 'rgba(237,232,208,0.1)';
                                        e.currentTarget.style.borderColor = 'var(--color-accent)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.borderColor = 'rgba(237, 232, 208, 0.25)';
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m15 18-6-6 6-6" />
                                    </svg>
                                </button>

                                <button
                                    onClick={() => navigate('next')}
                                    className="flex items-center justify-center rounded-full transition-all duration-300"
                                    style={{
                                        width: '46px',
                                        height: '46px',
                                        border: '1px solid rgba(237, 232, 208, 0.25)',
                                        color: 'var(--color-accent)',
                                        background: 'transparent',
                                        cursor: 'pointer',
                                    }}
                                    aria-label="Next testimonial"
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = 'rgba(237,232,208,0.1)';
                                        e.currentTarget.style.borderColor = 'var(--color-accent)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.borderColor = 'rgba(237, 232, 208, 0.25)';
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                            </div>

                            {/* Fractional Slide Counter */}
                            <span
                                style={{
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '0.85rem',
                                    color: 'rgba(237,232,208,0.8)',
                                    letterSpacing: '0.15em',
                                    fontWeight: 400
                                }}
                            >
                                {String(active + 1).padStart(2, '0')} <span style={{ opacity: 0.3, margin: '0 0.25rem' }}>/</span> {String(testimonials.length).padStart(2, '0')}
                            </span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Premium Custom Keyframe Animations */}
            <style>{`
                @keyframes testimonial-enter {
                    from { opacity: 0; transform: translateY(15px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes testimonial-exit {
                    from { opacity: 1; transform: translateY(0); }
                    to   { opacity: 0; transform: translateY(-15px); }
                }
                @keyframes testimonial-exit-rev {
                    from { opacity: 1; transform: translateY(0); }
                    to   { opacity: 0; transform: translateY(15px); }
                }
                @keyframes image-enter {
                    from { opacity: 0; transform: scale(1.08); }
                    to   { opacity: 1; transform: scale(1); }
                }
                @keyframes text-enter {
                    from { opacity: 0; transform: translateY(10px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes progress-bar {
                    from { width: 0%; }
                    to   { width: 100%; }
                }
                button:hover .tooltip-name {
                    opacity: 1;
                }
            `}</style>
        </section>
    )
}
