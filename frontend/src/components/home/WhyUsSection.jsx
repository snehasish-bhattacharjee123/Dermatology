import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RevealWrapper } from '../../hooks/useAnimations'
import { ChevronDown, Sparkles, Compass } from 'lucide-react'

// ===== WHY CHOOSE US — D'COSMEDIS UNIQUE CREATIVE SHOWCASE =====
export default function WhyUsSection() {
    const [mumbaiOpen, setMumbaiOpen] = useState(false)
    const dropdownRef = useRef(null)

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setMumbaiOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const locations = [
        { name: 'New Delhi', slug: 'new-delhi' },
        { name: 'Bengaluru', slug: 'bengaluru' },
        { name: 'Chennai', slug: 'chennai' },
        { name: 'Hyderabad', slug: 'hyderabad' },
        { name: 'Kolkata', slug: 'kolkata' }
    ]

    const mumbaiBranches = [
        { name: 'Kemps Corner', slug: 'mumbai-kemps-corner' },
        { name: 'Khar West', slug: 'mumbai-khar-west' },
        { name: 'Andheri West', slug: 'mumbai-andheri-west' }
    ]

    const points = [
        {
            num: "01",
            title: "30+ Years Legacy & Pageant Mentorship",
            desc: "Pioneered by Dr. Dolly Gupta, India's foremost skin mentor who introduced Botox to the country in 2000 and has groomed Miss India winners for over two decades."
        },
        {
            num: "02",
            title: "100% USFDA-Approved Technology",
            desc: "Uncompromising patient safety using only premium, globally certified advanced devices including Morpheus8, Ultherapy®, Thermage®, and CoolSculpting®."
        },
        {
            num: "03",
            title: "Bespoke Root-Cause Protocols",
            desc: "Scientifically diagnosed skin and hair treatments supervised directly by certified skin experts. No generic beauty templates, only customized clinical results."
        }
    ]

    return (
        <section
            className="relative overflow-hidden border-b border-[#d4c8b0]"
            style={{
                background: '#EDE8D0', // Project Default Beige Background Color
                padding: 'clamp(4.5rem, 9vw, 7.5rem) 0'
            }}
        >
            <style>{`
                /* === ASYMMETRICAL LUXURY STAGGERED CARDS === */
                .why-timeline-container {
                    position: relative;
                    padding-left: 1rem;
                }
                
                /* Vertical connection line running down behind cards */
                .why-timeline-line {
                    position: absolute;
                    left: 2.25rem;
                    top: 2rem;
                    bottom: 2rem;
                    width: 1px;
                    background: repeating-linear-gradient(
                        to bottom,
                        transparent,
                        transparent 4px,
                        #5A262C 4px,
                        #5A262C 8px
                    );
                    opacity: 0.25;
                    z-index: 1;
                }

                .why-point-card {
                    background: rgba(255, 255, 255, 0.45);
                    border: 1px solid rgba(90, 38, 44, 0.08);
                    backdrop-filter: blur(12px);
                    border-radius: 14px;
                    padding: 1.75rem 2rem;
                    display: flex;
                    gap: 1.5rem;
                    align-items: flex-start;
                    transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
                    cursor: pointer;
                    position: relative;
                    z-index: 5;
                    overflow: hidden;
                    box-shadow: 0 4px 15px rgba(90, 38, 44, 0.01);
                }

                /* Cursive Left Indicator Line */
                .why-point-card::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 3px;
                    background: #5A262C;
                    transform: scaleY(0);
                    transform-origin: center;
                    transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
                }

                .why-point-card:hover::before {
                    transform: scaleY(1);
                }

                /* Stagger cards asymmetrically on desktop */
                @media (min-width: 1024px) {
                    .stagger-0 { transform: translateX(-12px); }
                    .stagger-1 { transform: translateX(12px); }
                    .stagger-2 { transform: translateX(-12px); }
                    
                    .why-point-card:hover.stagger-0 { transform: translateY(-4px) translateX(-6px) scale(1.01); }
                    .why-point-card:hover.stagger-1 { transform: translateY(-4px) translateX(6px) scale(1.01); }
                    .why-point-card:hover.stagger-2 { transform: translateY(-4px) translateX(-6px) scale(1.01); }
                }

                .why-point-card:hover {
                    background: #ffffff;
                    border-color: #5A262C;
                    box-shadow: 0 20px 40px rgba(90, 38, 44, 0.07);
                }

                /* Dial-Style Numeral Container */
                .why-point-num-box {
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    border: 1px solid rgba(90, 38, 44, 0.15);
                    background: rgba(255, 255, 255, 0.6);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: var(--font-heading);
                    font-size: 1.2rem;
                    font-weight: 300;
                    color: #5A262C;
                    flex-shrink: 0;
                    position: relative;
                    z-index: 10;
                    transition: all 0.4s ease;
                }
                
                .why-point-card:hover .why-point-num-box {
                    background: #5A262C;
                    border-color: #5A262C;
                    color: #EDE8D0;
                    transform: scale(1.1) rotate(360deg);
                }

                .why-point-title {
                    font-family: var(--font-heading);
                    font-size: 1.25rem;
                    font-weight: 500;
                    color: var(--color-dark);
                    margin-bottom: 0.45rem;
                    letter-spacing: -0.01em;
                }

                .why-point-desc {
                    font-family: var(--font-body);
                    font-size: 0.875rem;
                    color: #6b4f5a;
                    line-height: 1.55;
                    margin: 0;
                    font-weight: 300;
                }

                /* === MINIMALIST INLINE CITY SELECTOR === */
                .city-finder-row {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    align-items: flex-start;
                }
                @media (min-width: 480px) {
                    .city-finder-row {
                        flex-direction: row;
                        align-items: center;
                    }
                }
                .city-list-container {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    row-gap: 0.5rem;
                }
                .city-list-link {
                    font-family: var(--font-heading);
                    font-size: clamp(1rem, 2vw, 1.15rem);
                    color: var(--color-wine);
                    text-decoration: none;
                    font-weight: 400;
                    transition: all 0.3s ease;
                    border-bottom: 1px solid transparent;
                }
                .city-list-link:hover {
                    color: var(--color-dark);
                    border-bottom-color: var(--color-dark);
                }
                .city-divider {
                    color: #d4c8b0;
                    user-select: none;
                    font-size: 1rem;
                    padding: 0 0.5rem;
                }

                /* === CUSTOM DROPDOWN FOR CITY === */
                .city-dropdown-trigger {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.25rem;
                    font-family: var(--font-heading);
                    font-size: clamp(1rem, 2vw, 1.15rem);
                    color: var(--color-wine);
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    font-weight: 400;
                    padding: 0;
                    transition: all 0.3s ease;
                    border-bottom: 1px solid transparent;
                }
                .city-dropdown-trigger:hover, .city-dropdown-trigger.active {
                    color: var(--color-dark);
                    border-bottom-color: var(--color-dark);
                }
                
                .dropdown-menu-custom {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    min-width: 220px;
                    background: #ffffff;
                    border: 1px solid #d4c8b0;
                    border-radius: 6px;
                    box-shadow: 0 10px 30px rgba(90, 38, 44, 0.12);
                    z-index: 50;
                    padding: 0.5rem 0;
                    margin-top: 0.5rem;
                    animation: dropdownFadeIn 0.3s cubic-bezier(0.25, 1, 0.5, 1) forwards;
                    transform-origin: top left;
                }
                @keyframes dropdownFadeIn {
                    from { opacity: 0; transform: scale(0.95) translateY(-5px); }
                    to   { opacity: 1; transform: scale(1) translateY(0); }
                }
                .dropdown-item-custom {
                    display: block;
                    padding: 0.6rem 1.25rem;
                    font-size: 0.85rem;
                    color: var(--color-dark);
                    text-decoration: none;
                    font-weight: 500;
                    transition: all 0.2s ease;
                }
                .dropdown-item-custom:hover {
                    background: #FAF6ED;
                    color: #5A262C;
                    padding-left: 1.5rem;
                }

                .glow-bg {
                    position: relative;
                }
                .glow-bg::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 90%;
                    height: 90%;
                    background: radial-gradient(circle, rgba(90,38,44,0.06) 0%, transparent 70%);
                    z-index: 0;
                    border-radius: 50%;
                    pointer-events: none;
                }
                
                /* Large creative background watermark */
                .luxury-watermark {
                    position: absolute;
                    right: -2rem;
                    bottom: -4rem;
                    font-family: var(--font-heading);
                    font-size: 24rem;
                    font-weight: 300;
                    color: rgba(90, 38, 44, 0.025);
                    line-height: 1;
                    user-select: none;
                    pointer-events: none;
                    z-index: 0;
                }
            `}</style>

            {/* Giant watermark D for creative depth */}
            <div className="luxury-watermark">D</div>

            <div className="container max-w-6xl px-4 md:px-8 relative z-10">
                {/* Flexbox container - stacks vertically as a column on mobile (flex-col) and changes to row on desktop (lg:flex-row) */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

                    {/* Left Column: Premium Text & Piped City Finder */}
                    <div className="w-full lg:w-[48%]">
                        <RevealWrapper direction="left">
                            <div style={{ marginBottom: '2.5rem' }}>
                                <span
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        fontSize: '0.65rem',
                                        letterSpacing: '3px',
                                        textTransform: 'uppercase',
                                        fontWeight: 700,
                                        color: '#5A262C',
                                        marginBottom: '0.75rem'
                                    }}
                                >
                                    <Sparkles size={12} /> Expert Dermatological Care
                                </span>

                                <h2
                                    style={{
                                        fontFamily: 'var(--font-heading)',
                                        fontSize: 'clamp(2rem, 5vw, 3rem)',
                                        fontWeight: 300,
                                        lineHeight: 1.15,
                                        color: 'var(--color-dark)',
                                        marginBottom: '1.5rem',
                                        letterSpacing: '-0.01em'
                                    }}
                                >
                                    For Expert Skin Care – <br />
                                    <span style={{ fontWeight: 400, color: '#5A262C' }}>Visit D'CosMedis Clinic Today!!</span>
                                </h2>

                                <p
                                    style={{
                                        fontFamily: 'var(--font-body)',
                                        color: '#6b4f5a', // Muted soft-plum content color
                                        fontSize: '1rem',
                                        lineHeight: 1.75,
                                        marginBottom: '1.5rem',
                                        fontWeight: 300
                                    }}
                                >
                                    Whether it’s tackling stubborn acne, reversing signs of ageing, addressing pigmentation, or managing hair loss, our expert dermatologists at D'CosMedis offer personalized consultations and cutting-edge treatments tailored to your unique skin and hair care needs.
                                </p>

                                <p
                                    style={{
                                        fontFamily: 'var(--font-body)',
                                        color: 'var(--color-dark)',
                                        fontSize: '1.05rem',
                                        lineHeight: 1.6,
                                        fontWeight: 500,
                                        margin: 0
                                    }}
                                >
                                    Experience world-class care designed to help you look and feel your best!!
                                </p>
                            </div>

                            {/* Spaced Piped Cities List arranged in a clean horizontal flexbox row */}

                        </RevealWrapper>
                    </div>

                    {/* Right Column: Staggered Creative Timeline Column */}
                    <div className="w-full lg:w-[48%] relative z-10">
                        <RevealWrapper direction="right">
                            <h3
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '1.75rem',
                                    fontWeight: 300,
                                    color: 'var(--color-dark)',
                                    marginBottom: '2rem',
                                    borderBottom: '1px solid rgba(90, 38, 44, 0.1)',
                                    paddingBottom: '0.75rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.65rem'
                                }}
                            >
                                <Compass size={22} className="text-[#5A262C] animate-spin" style={{ animationDuration: '20s' }} />
                                Why <span style={{ fontStyle: 'italic', color: '#5A262C' }}>D'CosMedis?</span>
                            </h3>

                            <div className="why-timeline-container">
                                {/* Dotted timeline line */}
                                <div className="why-timeline-line" />

                                <div className="flex flex-col gap-6 relative">
                                    {points.map((p, i) => (
                                        <div
                                            key={p.num}
                                            className={`why-point-card stagger-${i}`}
                                        >
                                            <div className="why-point-num-box">
                                                {p.num}
                                            </div>
                                            <div>
                                                <h4 className="why-point-title">{p.title}</h4>
                                                <p className="why-point-desc">{p.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </RevealWrapper>
                    </div>

                </div>
            </div>
        </section>
    )
}
