import { useState } from 'react'
import { RevealWrapper } from '../../hooks/useAnimations'
import { Heading, Caption } from '../ui/Typography'
import { testimonials } from '../../data/siteData'

// ===== TESTIMONIALS - CELEBRITY CAROUSEL =====
export default function TestimonialsSection() {
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
            style={{ background: 'var(--color-bg-dark)' }}
        >
            <div
                className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-5"
                style={{ background: '#954795', filter: 'blur(80px)' }}
            />

            <div className="container relative z-10">
                <RevealWrapper>
                    <div className="section-header">
                        <Caption style={{ color: 'rgba(255,255,255,0.7)' }}>Patient Love</Caption>
                        <Heading style={{ color: '#ffffff' }}>What Our Patients Say</Heading>
                        <div className="accent-line" />
                    </div>
                </RevealWrapper>

                {/* Celebrity Carousel */}
                <div className="max-w-5xl mx-auto mt-12">
                    <div className="relative">
                        {/* Main Card */}
                        <RevealWrapper>
                            <div
                                className="flex flex-col md:flex-row gap-6 md:gap-12 items-stretch"
                                style={{ minHeight: '300px' }}
                            >
                                {/* Content Side (Text left 70%) */}
                                <div className="w-full md:w-[70%] flex flex-col justify-center order-2 md:order-1 pt-4 md:pt-0">
                                    <div className="mb-4">
                                        <h2
                                            className="text-2xl md:text-3xl font-bold mb-2 tracking-wide"
                                            style={{
                                                fontFamily: 'var(--font-display)',
                                                color: '#EDE8D0'
                                            }}
                                        >
                                            {testimonials[active].name}
                                        </h2>
                                        <h2
                                            className="text-lg md:text-xl opacity-80"
                                            style={{ color: '#EDE8D0', fontFamily: 'var(--font-display)' }}
                                        >
                                            {testimonials[active].role}
                                        </h2>
                                    </div>

                                    <div
                                        className="w-[30%] h-px mb-6"
                                        style={{ background: 'var(--color-wine)' }}
                                    />

                                    <p
                                        className="text-base md:text-lg leading-relaxed italic"
                                        style={{
                                            fontFamily: 'var(--font-display)',
                                            color: '#EDE8D0'
                                        }}
                                    >
                                        "{testimonials[active].content}"
                                    </p>
                                </div>

                                {/* Image Side (Right 30%) */}
                                <div className="w-full md:w-[30%] flex items-center justify-end order-1 md:order-2">
                                    <img
                                        src={testimonials[active].image}
                                        alt={testimonials[active].name}
                                        className="w-full h-auto object-cover rounded-sm shadow-xl"
                                        loading="lazy"
                                        decoding="async"
                                        style={{
                                            aspectRatio: '1/1',
                                            maxWidth: '400px'
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
                                    border: '1px solid var(--color-wine)',
                                    color: 'var(--color-wine)'
                                }}
                                aria-label="Previous testimonial"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 30 30" fill="none">
                                    <rect x="0.5" y="0.5" width="29" height="29" stroke="var(--color-wine)"></rect>
                                    <g clipPath="url(#clip0_1110_83)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.2662 8.20429C11.4098 8.07297 11.6004 7.99976 11.7985 7.99976C11.9967 7.99976 12.1872 8.07297 12.3309 8.20429L18.5585 13.9891C18.6979 14.1166 18.8089 14.2701 18.8848 14.4402C18.9606 14.6103 18.9998 14.7934 18.9998 14.9785C18.9998 15.1636 18.9606 15.3468 18.8848 15.5169C18.8089 15.687 18.6979 15.8405 18.5585 15.968L12.2858 21.7955C11.9949 22.065 11.5236 22.0685 11.2284 21.8025C11.1569 21.7391 11.0997 21.6623 11.0603 21.5767C11.021 21.4912 11.0003 21.3988 10.9997 21.3053C10.999 21.2117 11.0183 21.119 11.0564 21.033C11.0945 20.9469 11.1505 20.8693 11.2211 20.805L16.9614 15.4731C17.0312 15.4093 17.0868 15.3326 17.1247 15.2475C17.1627 15.1624 17.1822 15.0708 17.1822 14.9782C17.1822 14.8856 17.1627 14.794 17.1247 14.7089C17.0868 14.6238 17.0312 14.5471 16.9614 14.4833L11.2669 9.19339C11.1972 9.12969 11.1416 9.05299 11.1037 8.96797C11.0657 8.88295 11.0462 8.79138 11.0462 8.69884C11.0462 8.6063 11.0657 8.51473 11.1037 8.42971C11.1416 8.34469 11.1964 8.26799 11.2662 8.20429Z" fill="var(--color-wine)"></path>
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
                                    border: '1px solid var(--color-wine)',
                                    color: 'var(--color-wine)'
                                }}
                                aria-label="Next testimonial"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 30 30" fill="none">
                                    <rect x="0.5" y="0.5" width="29" height="29" stroke="var(--color-wine)"></rect>
                                    <g clipPath="url(#clip1_1110_84)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M18.7338 21.7957C18.5246 21.9254 18.2716 21.9999 18.0101 21.9999C17.7487 21.9999 17.4957 21.9254 17.2864 21.7957L11.0137 15.968C10.8743 15.8405 10.7633 15.687 10.6874 15.5169C10.6116 15.3467 10.5724 15.1635 10.5724 14.9784C10.5724 14.7933 10.6116 14.6101 10.6874 14.44C10.7633 14.2699 10.8743 14.1164 11.0137 13.9889L17.2413 8.20409C17.385 8.07277 17.5755 7.99956 17.7737 7.99956C17.9718 7.99956 18.1624 8.07277 18.306 8.20409C18.3758 8.26779 18.4314 8.34449 18.4693 8.42951C18.5073 8.51453 18.5268 8.6061 18.5268 8.69864C18.5268 8.79118 18.5073 8.88275 18.4693 8.96777C18.4314 9.05279 18.3758 9.12949 18.306 9.19319L12.6004 14.4831C12.5307 14.5468 12.475 14.6235 12.4371 14.7086C12.3991 14.7937 12.3796 14.8853 12.3796 14.9779C12.3796 15.0705 12.3991 15.1621 12.4371 15.2472C12.475 15.3322 12.5307 15.4089 12.6004 15.4727L17.7864 20.805C17.8569 20.8693 17.9129 20.9469 17.951 21.033C17.9891 21.119 18.0084 21.2117 18.0077 21.3053C18.0071 21.3988 17.9864 21.4912 17.9471 21.5767C17.9077 21.6623 17.8505 21.7391 17.779 21.8025C17.4838 22.0685 17.0125 22.065 16.7216 21.7957L18.7338 21.7957Z" fill="var(--color-wine)"></path>
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
                                        background: i === active ? 'var(--color-wine)' : 'rgba(255,255,255,0.2)',
                                    }}
                                    aria-label={`View testimonial ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
