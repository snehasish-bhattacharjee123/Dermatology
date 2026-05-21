import { useState, useEffect, useRef, useCallback } from 'react'
import { RevealWrapper } from '../../hooks/useAnimations'
import { Heading, Caption } from '../ui/Typography'
import { testimonials } from '../../data/siteData'

// ===== TESTIMONIALS — PREMIUM CELEBRITY CAROUSEL =====
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
        timerRef.current = setInterval(() => navigate('next'), 5000)
        return () => clearInterval(timerRef.current)
    }, [isPaused, navigate])

    const current = testimonials[active]

    return (
        <section
            className="relative overflow-hidden"
            style={{ background: 'var(--color-bg-dark)', padding: 'clamp(3rem, 8vw, 6rem) 0' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Ambient glows */}
            <div
                className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(149,71,149,0.12) 0%, transparent 70%)', transform: 'translate(-30%, -30%)' }}
            />
            <div
                className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(149,71,149,0.08) 0%, transparent 70%)', transform: 'translate(30%, 30%)' }}
            />

            <div className="container relative z-10">

                {/* Section Header */}
                <RevealWrapper>
                    <div className="section-header">
                        <Caption style={{ color: 'var(--color-wine-light)' }}>Patient Love</Caption>
                        <Heading style={{ color: '#ffffff', fontSize: 'clamp(1.6rem, 5vw, 3.2rem)', marginBottom: '0' }}>
                            What Our Patients Say
                        </Heading>
                        <div className="accent-line" />
                    </div>
                </RevealWrapper>

                {/* Main Carousel Card */}
                <div className="relative max-w-5xl mx-auto">
                    <div
                        className="relative overflow-hidden rounded-sm"
                        style={{
                            border: '1px solid rgba(149,71,149,0.2)',
                            background: 'rgba(255,255,255,0.03)',
                            backdropFilter: 'blur(10px)',
                        }}
                    >
                        {/* Slide Content */}
                        <div
                            key={active}
                            className="flex flex-col md:flex-row"
                            style={{
                                animation: isAnimating
                                    ? `testimonial-${animDir === 'next' ? 'exit' : 'exit-rev'} 0.4s ease forwards`
                                    : `testimonial-enter 0.5s ease forwards`
                            }}
                        >
                            {/* Left: Quote Content */}
                            <div
                                className="flex flex-col justify-center order-2 md:order-1"
                                style={{
                                    flex: '1 1 60%',
                                    padding: 'clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 4vw, 3rem)',
                                }}
                            >
                                {/* Giant opening quote */}
                                <div
                                    aria-hidden="true"
                                    style={{
                                        fontFamily: 'Georgia, serif',
                                        fontSize: 'clamp(5rem, 12vw, 8rem)',
                                        lineHeight: '0.6',
                                        color: 'var(--color-wine)',
                                        opacity: 0.35,
                                        marginBottom: '1.25rem',
                                        userSelect: 'none',
                                    }}
                                >&ldquo;</div>

                                {/* Name & Role */}
                                <div style={{ marginBottom: '0.75rem' }}>
                                    <h2
                                        style={{
                                            fontFamily: 'var(--font-heading)',
                                            color: '#EDE8D0',
                                            fontSize: 'clamp(1.2rem, 3.5vw, 1.85rem)',
                                            fontWeight: 600,
                                            letterSpacing: '-0.01em',
                                            marginBottom: '0.2rem',
                                        }}
                                    >
                                        {current.name}
                                    </h2>
                                    <p
                                        style={{
                                            fontFamily: 'var(--font-body)',
                                            color: 'var(--color-wine-light)',
                                            fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
                                            fontWeight: 500,
                                            letterSpacing: '0.08em',
                                            textTransform: 'uppercase',
                                            margin: 0,
                                        }}
                                    >
                                        {current.role}
                                    </p>
                                </div>

                                {/* Divider */}
                                <div
                                    style={{
                                        width: '2.5rem',
                                        height: '2px',
                                        background: 'var(--color-wine)',
                                        marginBottom: '1.25rem',
                                    }}
                                />

                                {/* Quote text */}
                                <p
                                    style={{
                                        fontFamily: 'var(--font-heading)',
                                        color: 'rgba(237,232,208,0.88)',
                                        fontSize: 'clamp(0.9rem, 2.2vw, 1.2rem)',
                                        lineHeight: 1.8,
                                        fontStyle: 'italic',
                                        fontWeight: 400,
                                        margin: 0,
                                    }}
                                >
                                    {current.content}
                                </p>
                            </div>

                            {/* Right: Image */}
                            <div
                                className="order-1 md:order-2 relative overflow-hidden"
                                style={{ flex: '0 0 clamp(200px, 35%, 340px)', minHeight: 'clamp(220px, 40vw, 420px)' }}
                            >
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
                                        transition: 'transform 0.6s ease',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Navigation + Dots Row */}
                    <div className="flex items-center justify-between mt-6 md:mt-8 px-1">

                        {/* Prev / Next arrows */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => navigate('prev')}
                                className="flex items-center justify-center transition-all duration-300"
                                style={{
                                    width: '44px',
                                    height: '44px',
                                    border: '1px solid var(--color-wine)',
                                    color: 'var(--color-wine)',
                                    background: 'transparent',
                                    cursor: 'pointer',
                                    flexShrink: 0,
                                }}
                                aria-label="Previous testimonial"
                                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(149,71,149,0.15)' }}
                                onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 30 30" fill="none">
                                    <g clipPath="url(#tprev)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.2661 8.20429C11.4098 8.07297 11.6003 7.99976 11.7985 7.99976C11.9966 7.99976 12.1872 8.07297 12.3308 8.20429L18.5585 13.9891C18.6979 14.1166 18.8089 14.2701 18.8847 14.4402C18.9606 14.6103 18.9997 14.7934 18.9997 14.9785C18.9997 15.1636 18.9606 15.3468 18.8847 15.5169C18.8089 15.687 18.6979 15.8405 18.5585 15.968L12.2857 21.7955C11.9948 22.065 11.5236 22.0685 11.2283 21.8025C11.1568 21.7391 11.0996 21.6623 11.0603 21.5767C11.021 21.4912 11.0003 21.3988 10.9996 21.3053C10.999 21.2117 11.0182 21.119 11.0563 21.033C11.0944 20.9469 11.1505 20.8693 11.221 20.805L16.9614 15.4731C17.0311 15.4093 17.0867 15.3326 17.1247 15.2475C17.1626 15.1624 17.1822 15.0708 17.1822 14.9782C17.1822 14.8856 17.1626 14.794 17.1247 14.7089C17.0867 14.6238 17.0311 14.5471 16.9614 14.4833L11.2668 9.19339C11.1971 9.12969 11.1416 9.05299 11.1036 8.96797C11.0657 8.88295 11.0461 8.79138 11.0461 8.69884C11.0461 8.6063 11.0657 8.51473 11.1036 8.42971C11.1416 8.34469 11.1964 8.26799 11.2661 8.20429Z" fill="var(--color-wine)" />
                                    </g>
                                    <defs>
                                        <clipPath id="tprev">
                                            <rect width="8" height="14" fill="white" transform="matrix(-1 0 0 1 19 8)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>

                            <button
                                onClick={() => navigate('next')}
                                className="flex items-center justify-center transition-all duration-300"
                                style={{
                                    width: '44px',
                                    height: '44px',
                                    border: '1px solid var(--color-wine)',
                                    color: 'var(--color-wine)',
                                    background: 'transparent',
                                    cursor: 'pointer',
                                    flexShrink: 0,
                                }}
                                aria-label="Next testimonial"
                                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(149,71,149,0.15)' }}
                                onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 30 30" fill="none">
                                    <g clipPath="url(#tnext)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M18.7338 21.7957C18.5246 21.9254 18.2716 21.9999 18.0101 21.9999C17.7487 21.9999 17.4957 21.9254 17.2864 21.7957L11.0137 15.968C10.8743 15.8405 10.7633 15.687 10.6874 15.5169C10.6116 15.3467 10.5724 15.1635 10.5724 14.9784C10.5724 14.7933 10.6116 14.6101 10.6874 14.44C10.7633 14.2699 10.8743 14.1164 11.0137 13.9889L17.2413 8.20409C17.385 8.07277 17.5755 7.99956 17.7737 7.99956C17.9718 7.99956 18.1624 8.07277 18.306 8.20409C18.3758 8.26779 18.4314 8.34449 18.4693 8.42951C18.5073 8.51453 18.5268 8.6061 18.5268 8.69864C18.5268 8.79118 18.5073 8.88275 18.4693 8.96777C18.4314 9.05279 18.3758 9.12949 18.306 9.19319L12.6004 14.4831C12.5307 14.5468 12.475 14.6235 12.4371 14.7086C12.3991 14.7937 12.3796 14.8853 12.3796 14.9779C12.3796 15.0705 12.3991 15.1621 12.4371 15.2472C12.475 15.3322 12.5307 15.4089 12.6004 15.4727L17.7864 20.805C17.8569 20.8693 17.9129 20.9469 17.951 21.033C17.9891 21.119 18.0084 21.2117 18.0077 21.3053C18.0071 21.3988 17.9864 21.4912 17.9471 21.5767C17.9077 21.6623 17.8505 21.7391 17.779 21.8025C17.4838 22.0685 17.0125 22.065 16.7216 21.7957L18.7338 21.7957Z" fill="var(--color-wine)" />
                                    </g>
                                    <defs>
                                        <clipPath id="tnext">
                                            <rect width="8" height="14" fill="white" transform="matrix(1 0 0 -1 11 22)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>

                        {/* Slide counter */}
                        <span
                            style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.75rem',
                                color: 'rgba(237,232,208,0.4)',
                                letterSpacing: '0.1em',
                            }}
                        >
                            {String(active + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                        </span>

                        {/* Pagination dots */}
                        <div className="flex items-center gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => goTo(i)}
                                    aria-label={`View testimonial ${i + 1}`}
                                    style={{
                                        width: i === active ? '24px' : '6px',
                                        height: '6px',
                                        borderRadius: '3px',
                                        background: i === active ? 'var(--color-wine)' : 'rgba(255,255,255,0.15)',
                                        border: 'none',
                                        cursor: 'pointer',
                                        padding: 0,
                                        transition: 'all 0.35s ease',
                                        flexShrink: 0,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* Keyframe animations injected via style tag */}
            <style>{`
                @keyframes testimonial-enter {
                    from { opacity: 0; transform: translateX(30px); }
                    to   { opacity: 1; transform: translateX(0); }
                }
                @keyframes testimonial-exit {
                    from { opacity: 1; transform: translateX(0); }
                    to   { opacity: 0; transform: translateX(-30px); }
                }
                @keyframes testimonial-exit-rev {
                    from { opacity: 1; transform: translateX(0); }
                    to   { opacity: 0; transform: translateX(30px); }
                }
            `}</style>
        </section>
    )
}
