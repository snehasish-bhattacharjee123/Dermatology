import { Link } from 'react-router-dom'
import { ArrowRight, Award, Heart, Users, Sparkles } from 'lucide-react'
import { RevealWrapper, ParallaxImage } from '../hooks/useAnimations'
import { teamMembers, stats } from '../data/siteData'

export default function About() {
    return (
        <>
            {/* Page Hero */}
            <section className="relative pt-40 pb-24 overflow-hidden" style={{ background: 'var(--color-bg-cream)' }}>
                <div className="container">
                    <RevealWrapper>
                        <p className="text-sm tracking-[3px] uppercase mb-4" style={{ color: 'var(--color-gold)' }}>About Us</p>
                        <h1 style={{ fontFamily: 'var(--font-heading)' }}>About AAYNA</h1>
                        <p className="max-w-2xl text-lg mt-4" style={{ color: 'var(--color-text-muted)' }}>
                            Where science meets beauty — pioneering advanced dermatology and aesthetic medicine in India.
                        </p>
                    </RevealWrapper>
                </div>
            </section>

            {/* Story Section */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <RevealWrapper direction="left">
                            <div className="relative">
                                <ParallaxImage
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
                                    alt="Founder"
                                    className="rounded-2xl h-[550px]"
                                    speed={-0.1}
                                />
                                <div
                                    className="absolute -bottom-8 -right-8 p-8 rounded-2xl"
                                    style={{ background: 'var(--color-gold)' }}
                                >
                                    <p className="text-white text-4xl font-light" style={{ fontFamily: 'var(--font-heading)' }}>15+</p>
                                    <p className="text-white/80 text-xs tracking-[2px] uppercase mt-1">Years of<br />Excellence</p>
                                </div>
                            </div>
                        </RevealWrapper>

                        <RevealWrapper direction="right">
                            <div>
                                <p className="text-sm tracking-[3px] uppercase mb-4" style={{ color: 'var(--color-gold)' }}>Our Story</p>
                                <h2 className="mb-6">A Legacy of Care & Innovation</h2>
                                <div className="gold-border-left mb-6">
                                    <p className="text-lg italic" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-dark)' }}>
                                        "At AAYNA, we believe that everyone deserves to feel confident in their skin. Our mission is to provide
                                        world-class dermatological care using cutting-edge technology and evidence-based treatments."
                                    </p>
                                    <p className="mt-2 text-sm font-medium" style={{ color: 'var(--color-gold)' }}>— Dr. Simal Soin, Founder</p>
                                </div>
                                <p className="mb-4" style={{ color: 'var(--color-text-muted)' }}>
                                    Founded over 15 years ago by Dr. Simal Soin, one of India's most respected dermatologists,
                                    AAYNA Clinic has grown to become a leading name in advanced aesthetics. With four state-of-the-art
                                    clinics across Delhi and Ludhiana, we have transformed the skin and confidence of over 50,000 patients.
                                </p>
                                <p className="mb-8" style={{ color: 'var(--color-text-muted)' }}>
                                    Our approach combines medical expertise with artistic precision. Every treatment plan is customized
                                    to the individual, ensuring natural-looking results that enhance your unique beauty.
                                </p>
                                <Link to="/book" className="btn btn-primary">
                                    Book Consultation <ArrowRight size={14} />
                                </Link>
                            </div>
                        </RevealWrapper>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section section-cream">
                <div className="container">
                    <RevealWrapper>
                        <div className="section-header">
                            <p className="text-sm tracking-[3px] uppercase mb-4" style={{ color: 'var(--color-gold)' }}>Our Values</p>
                            <h2>What Sets Us Apart</h2>
                            <div className="gold-line" />
                        </div>
                    </RevealWrapper>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Award, title: 'Expert Doctors', desc: 'Board-certified dermatologists with decades of combined experience.' },
                            { icon: Sparkles, title: 'Advanced Tech', desc: 'State-of-the-art lasers, devices, and FDA-approved treatments.' },
                            { icon: Heart, title: 'Personalized Care', desc: 'Every treatment plan is customized to your unique skin needs.' },
                            { icon: Users, title: '50,000+ Patients', desc: 'Trusted by thousands for transformative, natural-looking results.' },
                        ].map((val, i) => (
                            <RevealWrapper key={i} direction="up" delay={i * 0.1}>
                                <div className="text-center p-8 rounded-2xl bg-white" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
                                    <div
                                        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                                        style={{ background: 'var(--color-gold-glow)' }}
                                    >
                                        <val.icon size={24} style={{ color: 'var(--color-gold)' }} />
                                    </div>
                                    <h4 className="text-lg mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{val.title}</h4>
                                    <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{val.desc}</p>
                                </div>
                            </RevealWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section">
                <div className="container">
                    <RevealWrapper>
                        <div className="section-header">
                            <p className="text-sm tracking-[3px] uppercase mb-4" style={{ color: 'var(--color-gold)' }}>Meet the Experts</p>
                            <h2>Our Team</h2>
                            <div className="gold-line" />
                        </div>
                    </RevealWrapper>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {teamMembers.map((member, i) => (
                            <RevealWrapper key={i} direction="up" delay={i * 0.15}>
                                <div className="group text-center">
                                    <div className="relative overflow-hidden rounded-2xl mb-6 h-[400px]">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6"
                                            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }}
                                        >
                                            <p className="text-white/80 text-sm">{member.bio}</p>
                                        </div>
                                    </div>
                                    <h3 className="text-xl" style={{ fontFamily: 'var(--font-heading)' }}>{member.name}</h3>
                                    <p className="text-sm mt-1" style={{ color: 'var(--color-gold)' }}>{member.role}</p>
                                </div>
                            </RevealWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Strip */}
            <section style={{ background: 'var(--color-gold)' }} className="py-16">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <RevealWrapper key={i} direction="up" delay={i * 0.1}>
                                <div className="text-center">
                                    <p className="text-white text-4xl font-light" style={{ fontFamily: 'var(--font-heading)' }}>
                                        {stat.value}
                                    </p>
                                    <p className="text-white/80 text-xs tracking-[2px] uppercase mt-2">{stat.label}</p>
                                </div>
                            </RevealWrapper>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
