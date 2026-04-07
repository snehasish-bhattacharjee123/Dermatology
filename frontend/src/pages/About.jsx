import { Link } from 'react-router-dom'
import { Award, Heart, Users, Sparkles, ArrowRight, CheckCircle, Star, Clock } from 'lucide-react'
import { RevealWrapper, ParallaxImage } from '../hooks/useAnimations'
import { teamMembers, stats } from '../data/siteData'

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

const achievements = [
    'Pioneer of Botox in India (2000)',
    'Skincare mentor for Miss India — 20+ years',
    '"Best Skincare Expert" by Vogue & ELLE',
    'USFDA-approved technologies only',
    'ISO certified clinics across India',
    'Over 30 years of clinical excellence',
]

export default function About() {
    return (
        <div style={{ background: '#fff' }}>
            <style>{`
                .about-gold { color: var(--color-gold); }
                .about-dark { color: var(--color-dark); }
                .about-muted { color: var(--color-text-muted); }
                
                /* Hero parallax image */
                .about-hero-img { width: 100%; height: 100%; object-fit: cover; object-position: center; }

                /* Value cards */
                .about-value-card { background: #fff; padding: 2.5rem; border: 1px solid #f0ede8; text-align: center; transition: all 0.4s ease; }
                .about-value-card:hover { box-shadow: 0 20px 60px rgba(0,0,0,0.1); transform: translateY(-6px); border-color: var(--color-gold); }
                .about-value-icon { width: 4rem; height: 4rem; border-radius: 50%; background: var(--color-bg-cream); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; transition: background 0.3s; }
                .about-value-card:hover .about-value-icon { background: var(--color-gold); }
                .about-value-card:hover .about-value-icon svg { color: #fff !important; }

                /* Team cards */
                .about-team-card { position: relative; overflow: hidden; }
                .about-team-img { width: 100%; height: 100%; object-fit: cover; object-position: top center; transition: transform 1.5s ease, filter 0.5s ease; filter: grayscale(15%); }
                .about-team-card:hover .about-team-img { transform: scale(1.06); filter: grayscale(0%); }
                .about-team-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%); opacity: 0; transition: opacity 0.5s ease; display: flex; align-items: flex-end; padding: 2rem; }
                .about-team-card:hover .about-team-overlay { opacity: 1; }
                
                /* Achievement items */
                .about-achievement { display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 0; border-bottom: 1px solid rgba(135,91,108,0.12); }
                .about-achievement:last-child { border-bottom: none; }

                /* Stat item hover */
                .about-stat:hover { opacity: 0.85; }

                /* CTA Section */
                .about-cta-btn { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--color-dark); color: #fff; padding: 1rem 2.5rem; font-size: 0.75rem; letter-spacing: 2px; text-transform: uppercase; font-weight: 700; transition: all 0.3s; }
                .about-cta-btn:hover { background: var(--color-gold); }
                .about-cta-btn-outline { display: inline-flex; align-items: center; gap: 0.5rem; background: transparent; color: #fff; padding: 1rem 2.5rem; font-size: 0.75rem; letter-spacing: 2px; text-transform: uppercase; font-weight: 700; border: 1px solid rgba(255,255,255,0.5); transition: all 0.3s; }
                .about-cta-btn-outline:hover { border-color: #fff; background: rgba(255,255,255,0.1); }
            `}</style>

            {/* ─── HERO ─── */}
            <section style={{
                position: 'relative',
                height: '70vh',
                minHeight: '500px',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                marginTop: 'var(--header-total-height)',
            }}>
                {/* Background image */}
                <div style={{ position: 'absolute', inset: 0 }}>
                    <img
                        src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80"
                        alt="D'CosMedis Clinic"
                        className="about-hero-img"
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(57,33,47,0.92) 0%, rgba(57,33,47,0.6) 60%, rgba(0,0,0,0.3) 100%)' }} />
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                    <RevealWrapper>
                        <span style={{ display: 'inline-block', fontSize: '0.625rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-gold)', background: 'rgba(135,91,108,0.15)', border: '1px solid rgba(135,91,108,0.35)', borderRadius: '9999px', padding: '0.4rem 1.25rem', marginBottom: '1.5rem' }}>
                            Discover Our Legacy
                        </span>
                        <h1 style={{ fontFamily: 'var(--font-heading)', color: '#fff', letterSpacing: '6px', textTransform: 'uppercase', fontSize: 'clamp(2.5rem, 8vw, 6rem)', lineHeight: 1.05, marginBottom: '1.5rem' }}>
                            <span style={{ fontWeight: 300 }}>ABOUT </span>
                            <span style={{ fontWeight: 700, color: 'var(--color-gold)' }}>D'COSMEDIS</span>
                        </h1>
                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontWeight: 300, maxWidth: '42rem', margin: '0 auto', lineHeight: 1.75 }}>
                            Where science meets beauty — pioneering advanced dermatology and aesthetic medicine in India for over 30 years.
                        </p>
                    </RevealWrapper>
                </div>

                {/* Scroll indicator */}
                <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '1px', height: '3rem', background: 'linear-gradient(to bottom, transparent, var(--color-gold))' }} />
                    <span style={{ fontSize: '0.5rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Scroll</span>
                </div>
            </section>

            {/* ─── STORY SECTION ─── */}
            <section style={{ padding: '7rem 0', background: '#fff' }}>
                <div className="container" style={{ maxWidth: '80rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>

                        {/* Image column */}
                        <RevealWrapper direction="left">
                            <div style={{ position: 'relative' }}>
                                <ParallaxImage
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
                                    alt="Dr. Dolly Gupta — Founder"
                                    style={{ height: '620px', borderRadius: 0 }}
                                    speed={-0.08}
                                />
                                {/* Floating badge */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-2rem',
                                    right: '-2rem',
                                    background: 'var(--color-gold)',
                                    padding: '2rem 2.5rem',
                                    boxShadow: '0 20px 60px rgba(135,91,108,0.4)',
                                }}>
                                    <p style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '4rem', fontWeight: 300, lineHeight: 1 }}>30+</p>
                                    <span style={{ display: 'block', color: 'rgba(255,255,255,0.9)', fontSize: '0.625rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, marginTop: '0.5rem' }}>
                                        Years of<br />Excellence
                                    </span>
                                </div>
                                {/* Decorative frame */}
                                <div style={{ position: 'absolute', top: '-1.5rem', left: '-1.5rem', width: '8rem', height: '8rem', border: '2px solid var(--color-gold)', opacity: 0.3, zIndex: -1 }} />
                            </div>
                        </RevealWrapper>

                        {/* Text column */}
                        <RevealWrapper direction="right">
                            <div style={{ paddingLeft: '1rem' }}>
                                <span style={{ display: 'inline-block', fontSize: '0.625rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700, color: '#888', marginBottom: '1rem' }}>
                                    Our Story
                                </span>

                                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', color: 'var(--color-dark)', lineHeight: 1.2, marginBottom: '2rem' }}>
                                    A Legacy of <br />
                                    <span style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>Care &amp; Innovation</span>
                                </h2>

                                {/* Quote block */}
                                <blockquote style={{ borderLeft: '3px solid var(--color-gold)', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                                    <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--color-dark)', lineHeight: 1.7, fontWeight: 400 }}>
                                        "At D'CosMedis, we believe that everyone deserves to feel confident in their skin. Our mission is to provide world-class dermatological care using cutting-edge technology."
                                    </p>
                                    <cite style={{ display: 'block', marginTop: '0.75rem', fontSize: '0.625rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, color: '#888', fontStyle: 'normal' }}>
                                        — Dr. Dolly Gupta, Founder
                                    </cite>
                                </blockquote>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                                    <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, fontSize: '1rem' }}>
                                        Founded over 30 years ago by Dr. Dolly Gupta, one of India's most respected dermatologists,
                                        D'CosMedis has grown to become a leading name in advanced aesthetics. With clinics across India,
                                        we have transformed the skin and confidence of over 50,000 patients.
                                    </p>
                                    <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, fontSize: '1rem' }}>
                                        Our approach combines medical expertise with artistic precision. Every treatment plan is customized
                                        to the individual, ensuring natural-looking results that enhance your unique beauty.
                                    </p>
                                </div>

                                {/* Achievement list */}
                                <div style={{ marginBottom: '2.5rem' }}>
                                    {achievements.map((a, i) => (
                                        <div key={i} className="about-achievement">
                                            <CheckCircle size={16} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                                            <span style={{ fontSize: '0.9375rem', color: 'var(--color-dark)', fontWeight: 500 }}>{a}</span>
                                        </div>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                    <Link to="/book" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--color-gold)', color: '#fff', padding: '1rem 2rem', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, transition: 'background 0.3s' }}>
                                        Book Consultation
                                    </Link>
                                    <Link to="/treatments" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', color: 'var(--color-dark)', padding: '1rem 2rem', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, border: '1px solid var(--color-border)', transition: 'all 0.3s' }}>
                                        Our Treatments <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </RevealWrapper>
                    </div>
                </div>
            </section>

            {/* ─── VALUES ─── */}
            <section style={{ padding: '7rem 0', background: 'var(--color-bg-cream)' }}>
                <div className="container" style={{ maxWidth: '80rem' }}>
                    <RevealWrapper>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <span style={{ display: 'inline-block', fontSize: '0.625rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700, color: '#888', marginBottom: '1rem' }}>
                                Our Values
                            </span>
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
                                        <val.icon size={24} style={{ color: 'var(--color-gold)', transition: 'color 0.3s' }} />
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
            <section style={{ padding: '7rem 0', background: '#fff' }}>
                <div className="container" style={{ maxWidth: '80rem' }}>
                    <RevealWrapper>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <span style={{ display: 'inline-block', fontSize: '0.625rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700, color: '#888', marginBottom: '1rem' }}>
                                Meet the Experts
                            </span>
                            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-dark)', marginBottom: '0.75rem' }}>
                                Our <span style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>Team</span>
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
                                    {/* Photo */}
                                    <div className="about-team-card" style={{ height: '480px', marginBottom: '1.5rem', cursor: 'default' }}>
                                        <img src={member.image} alt={member.name} className="about-team-img" />
                                        <div className="about-team-overlay">
                                            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9375rem', lineHeight: 1.65 }}>
                                                {member.bio}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Info */}
                                    <div>
                                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--color-dark)', marginBottom: '0.4rem' }}>
                                            {member.name}
                                        </h3>
                                        <span style={{ display: 'block', fontSize: '0.625rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-gold)', marginBottom: '0.5rem' }}>
                                            {member.role}
                                        </span>
                                        <div style={{ width: '2.5rem', height: '2px', background: 'var(--color-gold)' }} />
                                    </div>
                                </div>
                            </RevealWrapper>
                        ))}
                    </div>

                    <RevealWrapper>
                        <p style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                            Hover over a portrait to read their full biography.
                        </p>
                    </RevealWrapper>
                </div>
            </section>

            {/* ─── STATS STRIP ─── */}
            <section style={{ background: 'var(--color-gold)', padding: '5rem 0' }}>
                <div className="container" style={{ maxWidth: '80rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '2rem' }}>
                        {stats.map((stat, i) => (
                            <RevealWrapper key={i} direction="up" delay={i * 0.1}>
                                <div className="about-stat" style={{ textAlign: 'center', transition: 'opacity 0.3s' }}>
                                    <span style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, color: '#fff', lineHeight: 1.1, marginBottom: '0.75rem' }}>
                                        {stat.value}
                                    </span>
                                    <span style={{ display: 'block', fontSize: '0.625rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700, color: 'rgba(255,255,255,0.85)' }}>
                                        {stat.label}
                                    </span>
                                </div>
                            </RevealWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA BANNER ─── */}
            <section style={{ position: 'relative', padding: '8rem 0', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0 }}>
                    <img
                        src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80"
                        alt=""
                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.25)' }}
                    />
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '52rem' }}>
                    <RevealWrapper>
                        <span style={{ display: 'inline-block', fontSize: '0.625rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-gold)', marginBottom: '1.25rem' }}>
                            Begin Your Journey
                        </span>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#fff', marginBottom: '1.5rem', lineHeight: 1.25 }}>
                            Ready to Experience the <br />
                            <span style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>D'CosMedis Difference?</span>
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.0625rem', lineHeight: 1.8, marginBottom: '2.5rem', fontWeight: 300 }}>
                            Book a complimentary consultation with our expert dermatologists and discover a treatment plan crafted exclusively for you.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                            <Link to="/book" className="about-cta-btn">
                                Book Free Consultation <ArrowRight size={16} />
                            </Link>
                            <Link to="/treatments" className="about-cta-btn-outline">
                                Explore Treatments
                            </Link>
                        </div>
                    </RevealWrapper>
                </div>
            </section>
        </div>
    )
}
