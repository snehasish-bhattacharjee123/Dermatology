import { Link } from 'react-router-dom'
import { Award, Heart, Users, Sparkles } from 'lucide-react'
import { RevealWrapper } from '../hooks/useAnimations'
import { teamMembers, stats } from '../data/siteData'
import CtaBanner from '../components/ui/CtaBanner'

const values = [
    {
        icon: Award,
        title: 'Expert Doctors',
        desc: 'Board-certified dermatologists with decades of combined experience in advanced aesthetics and medical dermatology.',
    },
    {
        icon: Sparkles,
        title: 'Advanced Technology',
        desc: 'State-of-the-art lasers, FDA-approved devices, and industry-leading treatment protocols for optimal results.',
    },
    {
        icon: Heart,
        title: 'Personalised Care',
        desc: 'Every treatment plan is individually crafted to your unique skin profile, goals, and lifestyle.',
    },
    {
        icon: Users,
        title: '50,000+ Patients',
        desc: 'Trusted by tens of thousands across India and internationally for safe, natural-looking transformations.',
    },
]

export default function About() {
    return (
        <div className="about-page" style={{ background: '#fff', overflow: 'hidden' }}>
            <style>{`
                .about-wine { color: var(--color-wine); }
                .about-dark { color: var(--color-dark); }
                .about-muted { color: var(--color-text-muted); }
                
                /* Hero */
                .about-hero {
                    position: relative;
                    min-height: clamp(340px, 60vw, 540px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    /* No margin-top — hero sits behind fixed header, content is padded */
                }
                @media (max-width: 640px) {
                    .about-hero {
                        min-height: clamp(280px, 65vw, 400px);
                        align-items: flex-end;
                        padding-bottom: 2rem;
                    }
                }
                @media (min-width: 768px) {
                    .about-hero {
                        min-height: clamp(480px, 55vw, 600px);
                    }
                }
                .about-hero-bg {
                    position: absolute; inset: 0; z-index: 0;
                }
                .about-hero-bg img {
                    width: 100%; height: 100%; object-fit: cover; object-position: center;
                }
                .about-hero-overlay {
                    position: absolute; inset: 0; background: rgba(0,0,0,0.42);
                }
                .about-hero-content {
                    position: relative; z-index: 1; text-align: center; color: #fff;
                    width: 100%;
                    padding: calc(var(--header-total-height) + 1.5rem) 1rem 2rem;
                }
                .about-hero-title {
                    font-family: var(--font-heading);
                    font-size: clamp(1.85rem, 7vw, 5rem);
                    letter-spacing: clamp(2px, 1.5vw, 4px);
                    text-transform: uppercase;
                    margin-bottom: 0.5rem;
                    font-weight: 300;
                    text-shadow: 0 4px 20px rgba(0,0,0,0.25);
                }
                .about-hero-breadcrumb {
                    font-size: clamp(0.55rem, 1.5vw, 0.75rem);
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    font-weight: 600;
                }

                /* Grid Sections */
                .about-section {
                    padding: clamp(2.5rem, 8vw, 5rem) 0;
                }
                @media (min-width: 768px) {
                    .about-section {
                        padding: 8rem 0;
                    }
                }
                .about-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 3rem;
                    align-items: center;
                }
                .about-grid-start {
                    align-items: flex-start;
                }
                @media (min-width: 768px) {
                    .about-grid {
                        grid-template-columns: 1fr 1fr;
                        gap: 4rem;
                    }
                }
                @media (min-width: 1024px) {
                    .about-grid {
                        gap: 6rem;
                    }
                }
                
                /* Typography for sections */
                .about-heading-lg {
                    font-family: var(--font-heading);
                    font-size: clamp(2rem, 4vw, 3.5rem);
                    line-height: 1.2;
                    color: var(--color-dark);
                    text-transform: uppercase;
                    font-weight: 300;
                }
                .about-heading-md {
                    font-family: var(--font-heading);
                    font-size: clamp(1.75rem, 3vw, 2.5rem);
                    line-height: 1.2;
                    color: var(--color-dark);
                    text-transform: uppercase;
                    margin-bottom: 1.5rem;
                    font-weight: 300;
                }
                .about-subtitle {
                    font-size: 0.75rem;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    color: var(--color-wine);
                    font-weight: 700;
                    margin-bottom: 1rem;
                    display: inline-block;
                }
                .about-text {
                    color: var(--color-text-muted, #555);
                    line-height: 1.8;
                    font-size: 1rem;
                    margin-bottom: 1.5rem;
                }
                
                /* Image Wrappers */
                .about-img-wrapper {
                    position: relative;
                    width: 100%;
                    height: auto;
                    aspect-ratio: 4/5;
                    overflow: hidden;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.05);
                }
                .about-img-wrapper img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 1.5s ease;
                }
                .about-img-wrapper:hover img {
                    transform: scale(1.05);
                }

                /* Mobile vs Desktop Ordering */
                @media (max-width: 767px) {
                    .order-1-mob { order: 1; }
                    .order-2-mob { order: 2; }
                }
                @media (min-width: 768px) {
                    .order-1-desk { order: 1; }
                    .order-2-desk { order: 2; }
                }

                /* Stats Section */
                .about-stats-section {
                    padding: 5rem 0;
                    background: #fff;
                    border-top: 1px solid rgba(86,58,86,0.1);
                    border-bottom: 1px solid rgba(86,58,86,0.1);
                }
                .about-stats-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 3rem 1.5rem;
                    text-align: center;
                }
                @media (min-width: 768px) {
                    .about-stats-grid {
                        grid-template-columns: repeat(4, 1fr);
                    }
                }
                .about-stat-value {
                    font-family: var(--font-heading);
                    font-size: clamp(3rem, 6vw, 4.5rem);
                    color: var(--color-dark);
                    margin-bottom: 0.5rem;
                    font-weight: 300;
                    line-height: 1;
                }
                .about-stat-label {
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: #888;
                    font-weight: 600;
                }

                /* Values Section */
                .about-value-card { background: #fff; padding: 2.5rem; border: 1px solid #f0ede8; text-align: center; transition: all 0.4s ease; height: 100%; }
                .about-value-card:hover { box-shadow: 0 20px 60px rgba(0,0,0,0.1); transform: translateY(-6px); border-color: var(--color-wine); }
                .about-value-icon { width: 4rem; height: 4rem; border-radius: 50%; background: var(--color-bg-cream); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; transition: background 0.3s; }
                .about-value-card:hover .about-value-icon { background: var(--color-wine); }
                .about-value-card:hover .about-value-icon svg { color: #fff !important; }

                /* Team Section */
                .about-team-card { position: relative; overflow: hidden; }
                .about-team-img { width: 100%; height: 100%; object-fit: cover; object-position: top center; transition: transform 1.5s ease, filter 0.5s ease; filter: grayscale(15%); }
                .about-team-card:hover .about-team-img { transform: scale(1.06); filter: grayscale(0%); }
                .about-team-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%); opacity: 0; transition: opacity 0.5s ease; display: flex; align-items: flex-end; padding: 2rem; }
                .about-team-card:hover .about-team-overlay { opacity: 1; }

                /* CTA Section */
                .about-cta-btn { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--color-dark); color: #fff; padding: 1rem 2.5rem; font-size: 0.75rem; letter-spacing: 2px; text-transform: uppercase; font-weight: 700; transition: all 0.3s; }
                .about-cta-btn:hover { background: var(--color-wine); }
                .about-cta-btn-outline { display: inline-flex; align-items: center; gap: 0.5rem; background: transparent; color: #fff; padding: 1rem 2.5rem; font-size: 0.75rem; letter-spacing: 2px; text-transform: uppercase; font-weight: 700; border: 1px solid rgba(255,255,255,0.5); transition: all 0.3s; }
                .about-cta-btn-outline:hover { border-color: #fff; background: rgba(255,255,255,0.1); }
            `}</style>

            {/* ─── HERO ─── */}
            <section className="about-hero">
                <div className="about-hero-bg">
                    <img
                        src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80"
                        alt="D'CosMedis Clinic"
                    />
                    <div className="about-hero-overlay" />
                </div>
                <div className="about-hero-content container">
                    <RevealWrapper>
                        <h1 className="about-hero-title">About Us</h1>
                        <div className="about-hero-breadcrumb">
                            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
                            <span style={{ margin: '0 0.5rem', opacity: 0.7 }}>•</span>
                            <span>About Us</span>
                        </div>
                    </RevealWrapper>
                </div>

                {/* Scroll indicator */}
                <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', zIndex: 2 }}>
                    <div style={{ width: '1px', height: '3rem', background: 'linear-gradient(to bottom, transparent, #fff)' }} />
                    <span style={{ fontSize: '0.5rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)' }}>Scroll</span>
                </div>
            </section>

            {/* ─── INTRO GRID ─── */}
            <section className="about-section" style={{ background: '#fff' }}>
                <div className="container" style={{ maxWidth: '80rem' }}>
                    <div className="about-grid about-grid-start">
                        <RevealWrapper direction="left">
                            <h2 className="about-heading-lg">
                                Where Medical Expertise Meets Cutting - Edge Skin Science & Wellness
                            </h2>
                        </RevealWrapper>
                        <RevealWrapper direction="right">
                            <div>
                                <span className="about-subtitle">About D'CosMedis</span>
                                <p className="about-text">
                                    At D'CosMedis, we believe that everyone deserves to feel confident in their skin. Our mission is to provide world-class dermatological care using cutting-edge technology.
                                </p>
                                <p className="about-text">
                                    Founded over 30 years ago by Dr. Dolly Gupta, one of India's most respected dermatologists, D'CosMedis has grown to become a leading name in advanced aesthetics. With clinics across India, we have transformed the skin and confidence of over 50,000 patients.
                                </p>
                                <p className="about-text">
                                    Our approach combines medical expertise with artistic precision. Every treatment plan is customized to the individual, ensuring natural-looking results that enhance your unique beauty.
                                </p>
                            </div>
                        </RevealWrapper>
                    </div>
                </div>
            </section>

            {/* ─── DR DOLLY GUPTA GRID ─── */}
            <section className="about-section" style={{ background: 'var(--color-bg-cream)' }}>
                <div className="container" style={{ maxWidth: '80rem' }}>
                    <div className="about-grid">
                        <RevealWrapper direction="left" className="order-2-mob order-1-desk">
                            <div className="about-img-wrapper">
                                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80" alt="Dr. Dolly Gupta" />
                            </div>
                        </RevealWrapper>
                        <RevealWrapper direction="right" className="order-1-mob order-2-desk">
                            <div>
                                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--color-wine)', marginBottom: '0.5rem', fontWeight: 400 }}>Dr. Dolly Gupta</h3>
                                <h2 className="about-heading-md" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)' }}>
                                    Pioneer of Cosmetology • Award-Winning Cosmetic Physician • Author & Educator
                                </h2>
                                <p className="about-text">
                                    Dr. Dolly Gupta is a visionary in the field of aesthetic medicine, introducing some of the most advanced, USFDA-approved technologies to India. Her pioneering work has set new benchmarks in patient care and clinical excellence.
                                </p>
                                <p className="about-text">
                                    With an illustrious career spanning over three decades, she has been instrumental in shaping the landscape of cosmetic dermatology in the region. Her expertise is sought after by celebrities, beauty queens, and individuals seeking flawless skin.
                                </p>
                            </div>
                        </RevealWrapper>
                    </div>
                </div>
            </section>

            {/* ─── BEAUTY QUEENS GRID ─── */}
            <section className="about-section" style={{ background: '#fff' }}>
                <div className="container" style={{ maxWidth: '80rem' }}>
                    <div className="about-grid">
                        <RevealWrapper direction="left" className="order-1-mob order-1-desk">
                            <div>
                                <h2 className="about-heading-md">
                                    Skincare Expert to the Beauty Queens
                                </h2>
                                <p className="about-text">
                                    For years, D'CosMedis has been the trusted skincare partner for some of the most prominent beauty pageants and celebrities. Our bespoke treatments ensure they are always camera-ready, radiating confidence and natural beauty.
                                </p>
                                <p className="about-text">
                                    We understand the unique demands of high-profile lifestyles and offer discreet, highly effective solutions that deliver visible results without extensive downtime. Experience the same level of care and expertise that keeps the stars shining bright.
                                </p>
                            </div>
                        </RevealWrapper>
                        <RevealWrapper direction="right" className="order-2-mob order-2-desk">
                            <div className="about-img-wrapper">
                                <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80" alt="Expert Consultation" />
                            </div>
                        </RevealWrapper>
                    </div>
                </div>
            </section>

            {/* ─── TRUSTED GRID ─── */}
            <section className="about-section" style={{ background: 'var(--color-bg-cream)' }}>
                <div className="container" style={{ maxWidth: '80rem' }}>
                    <div className="about-grid">
                        <RevealWrapper direction="left" className="order-2-mob order-1-desk">
                            <div className="about-img-wrapper">
                                <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80" alt="Clinic Treatment" />
                            </div>
                        </RevealWrapper>
                        <RevealWrapper direction="right" className="order-1-mob order-2-desk">
                            <div>
                                <h2 className="about-heading-md">
                                    Tried, Tested, Trusted
                                </h2>
                                <p className="about-text">
                                    Our commitment to excellence is reflected in the trust of over 50,000 satisfied patients. We don't just treat skin; we build lasting relationships based on transparency, care, and outstanding results.
                                </p>
                                <p className="about-text">
                                    Every treatment at D'CosMedis undergoes rigorous testing and adheres to the highest safety standards. Our protocols are continually refined to incorporate the latest advancements in dermatological science, ensuring you receive the best care possible.
                                </p>
                            </div>
                        </RevealWrapper>
                    </div>
                </div>
            </section>

            {/* ─── STATS ─── */}
            <section className="about-stats-section">
                <div className="container" style={{ maxWidth: '80rem' }}>
                    <div className="about-stats-grid">
                        {stats.map((stat, i) => (
                            <RevealWrapper key={i} direction="up" delay={i * 0.1}>
                                <div>
                                    <div className="about-stat-value">{stat.value}</div>
                                    <div className="about-stat-label">{stat.label}</div>
                                </div>
                            </RevealWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── VALUES ─── */}
            <section className="about-section" style={{ background: 'var(--color-bg-cream)' }}>
                <div className="container" style={{ maxWidth: '80rem' }}>
                    <RevealWrapper>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <span className="about-subtitle">Our Values</span>
                            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-dark)' }}>
                                What Sets Us Apart
                            </h2>
                        </div>
                    </RevealWrapper>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                        {values.map((val, i) => (
                            <RevealWrapper key={i} direction="up" delay={i * 0.1}>
                                <div className="about-value-card">
                                    <div className="about-value-icon">
                                        <val.icon size={24} style={{ color: 'var(--color-wine)', transition: 'color 0.3s' }} />
                                    </div>
                                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--color-dark)', marginBottom: '0.75rem' }}>
                                        {val.title}
                                    </h4>
                                    <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
                                        {val.desc}
                                    </p>
                                </div>
                            </RevealWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── TEAM ─── */}
            {/* <section className="about-section" style={{ background: '#fff' }}>
                <div className="container" style={{ maxWidth: '80rem' }}>
                    <RevealWrapper>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <span className="about-subtitle">Meet the Experts</span>
                            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-dark)', marginBottom: '0.75rem' }}>
                                Our <span style={{ fontStyle: 'italic', color: 'var(--color-wine)' }}>Team</span>
                            </h2>
                            <p style={{ color: 'var(--color-text-muted)', maxWidth: '36rem', margin: '0 auto', lineHeight: 1.75 }}>
                                Led by Dr. Dolly Gupta, our team of specialists brings decades of expertise to every consultation and treatment.
                            </p>
                        </div>
                    </RevealWrapper>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
                        {teamMembers.map((member, i) => (
                            <RevealWrapper key={i} direction="up" delay={i * 0.15}>
                                <div>
                                    
                                    <div className="about-team-card" style={{ height: '480px', marginBottom: '1.5rem', cursor: 'default' }}>
                                        <img src={member.image} alt={member.name} className="about-team-img" />
                                        <div className="about-team-overlay">
                                            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9375rem', lineHeight: 1.65 }}>
                                                {member.bio}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--color-dark)', marginBottom: '0.4rem' }}>
                                            {member.name}
                                        </h3>
                                        <span style={{ display: 'block', fontSize: '0.625rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-wine)', marginBottom: '0.5rem' }}>
                                            {member.role}
                                        </span>
                                        <div style={{ width: '2.5rem', height: '2px', background: 'var(--color-wine)' }} />
                                    </div>
                                </div>
                            </RevealWrapper>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* ─── CTA BANNER ─── */}
            <CtaBanner
                primaryLabel="Book Free Consultation"
                primaryTo="/book"
                secondaryLabel="Explore Treatments"
                secondaryTo="/treatments"
                image="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80"
            />
        </div>
    )
}
