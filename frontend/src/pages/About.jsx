import { Link } from 'react-router-dom'
import { ArrowRight, Award, Heart, Users, Sparkles } from 'lucide-react'
import { RevealWrapper, ParallaxImage } from '../hooks/useAnimations'
import { Heading, Text, Caption } from '../components/ui/Typography'
import { teamMembers, stats } from '../data/siteData'

export default function About() {
    return (
        <>
            {/* Page Hero - Consistent */}
            <section className="page-hero">
                <div className="container">
                    <RevealWrapper>
                        <Caption variant="overline">About Us</Caption>
                        <Heading variant="page">About AAYNA</Heading>
                        <Text size="lg" color="muted" className="max-w-2xl mt-5">
                            Where science meets beauty — pioneering advanced dermatology and aesthetic medicine in India.
                        </Text>
                    </RevealWrapper>
                </div>
            </section>

            {/* Story Section - Refined */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <RevealWrapper direction="left">
                            <div className="relative">
                                <ParallaxImage
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
                                    alt="Founder"
                                    className="rounded-2xl"
                                    style={{ height: '550px' }}
                                    speed={-0.1}
                                />
                                <div
                                    className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 p-6 lg:p-8 rounded-2xl"
                                    style={{ background: 'var(--color-gold)' }}
                                >
                                    <p 
                                        className="text-white text-4xl lg:text-5xl font-light"
                                        style={{ fontFamily: 'var(--font-display)' }}
                                    >
                                        15+
                                    </p>
                                    <Caption variant="label-white" className="mt-2 opacity-80">
                                        Years of<br />Excellence
                                    </Caption>
                                </div>
                            </div>
                        </RevealWrapper>

                        <RevealWrapper direction="right">
                            <div>
                                <Caption variant="overline">Our Story</Caption>
                                <Heading variant="section" className="mb-6">
                                    A Legacy of Care & Innovation
                                </Heading>
                                <div 
                                    className="mb-6 p-6 rounded-xl"
                                    style={{ 
                                        borderLeft: '3px solid var(--color-gold)',
                                        background: 'var(--color-bg-cream)'
                                    }}
                                >
                                    <p 
                                        className="text-lg italic mb-3"
                                        style={{ fontFamily: 'var(--font-display)', color: 'var(--color-dark)' }}
                                    >
                                        "At AAYNA, we believe that everyone deserves to feel confident in their skin. Our mission is to provide
                                        world-class dermatological care using cutting-edge technology and evidence-based treatments."
                                    </p>
                                    <Caption variant="label-gold">— Dr. Simal Soin, Founder</Caption>
                                </div>
                                <Text size="md" color="muted" className="mb-4">
                                    Founded over 15 years ago by Dr. Simal Soin, one of India's most respected dermatologists,
                                    AAYNA Clinic has grown to become a leading name in advanced aesthetics. With four state-of-the-art
                                    clinics across Delhi and Ludhiana, we have transformed the skin and confidence of over 50,000 patients.
                                </Text>
                                <Text color="muted" className="mb-8">
                                    Our approach combines medical expertise with artistic precision. Every treatment plan is customized
                                    to the individual, ensuring natural-looking results that enhance your unique beauty.
                                </Text>
                                <Link to="/book" className="btn btn-primary">
                                    Book Consultation <ArrowRight size={16} />
                                </Link>
                            </div>
                        </RevealWrapper>
                    </div>
                </div>
            </section>

            {/* Values - Refined */}
            <section className="section section-cream">
                <div className="container">
                    <RevealWrapper>
                        <div className="section-header">
                            <Caption variant="overline">Our Values</Caption>
                            <Heading variant="section">What Sets Us Apart</Heading>
                            <div className="gold-line" />
                        </div>
                    </RevealWrapper>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {[
                            { icon: Award, title: 'Expert Doctors', desc: 'Board-certified dermatologists with decades of combined experience.' },
                            { icon: Sparkles, title: 'Advanced Tech', desc: 'State-of-the-art lasers, devices, and FDA-approved treatments.' },
                            { icon: Heart, title: 'Personalized Care', desc: 'Every treatment plan is customized to your unique skin needs.' },
                            { icon: Users, title: '50,000+ Patients', desc: 'Trusted by thousands for transformative, natural-looking results.' },
                        ].map((val, i) => (
                            <RevealWrapper key={i} direction="up" delay={i * 0.1}>
                                <div 
                                    className="text-center p-8 rounded-2xl bg-white h-full transition-all duration-300 hover:shadow-lg"
                                    style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}
                                >
                                    <div
                                        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                                        style={{ background: 'var(--color-gold-glow)' }}
                                    >
                                        <val.icon size={24} style={{ color: 'var(--color-gold)' }} />
                                    </div>
                                    <h4 
                                        className="text-lg mb-3"
                                        style={{ fontFamily: 'var(--font-display)', color: 'var(--color-dark)' }}
                                    >
                                        {val.title}
                                    </h4>
                                    <p 
                                        className="text-sm"
                                        style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}
                                    >
                                        {val.desc}
                                    </p>
                                </div>
                            </RevealWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team - Refined */}
            <section className="section">
                <div className="container">
                    <RevealWrapper>
                        <div className="section-header">
                            <Caption variant="overline">Meet the Experts</Caption>
                            <Heading variant="section">Our Team</Heading>
                            <div className="gold-line" />
                        </div>
                    </RevealWrapper>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                        {teamMembers.map((member, i) => (
                            <RevealWrapper key={i} direction="up" delay={i * 0.15}>
                                <div className="group text-center">
                                    <div className="relative overflow-hidden rounded-2xl mb-6" style={{ height: '420px' }}>
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6"
                                            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)' }}
                                        >
                                            <p className="text-white/90 text-sm leading-relaxed">{member.bio}</p>
                                        </div>
                                    </div>
                                    <h3 
                                        className="text-xl mb-1"
                                        style={{ fontFamily: 'var(--font-display)', color: 'var(--color-dark)' }}
                                    >
                                        {member.name}
                                    </h3>
                                    <Caption variant="label-gold">{member.role}</Caption>
                                </div>
                            </RevealWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Strip - Refined */}
            <section 
                className="py-16 lg:py-20"
                style={{ background: 'var(--color-gold)' }}
            >
                <div className="container">
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
                                    <Caption variant="label-white" className="mt-2 opacity-80">
                                        {stat.label}
                                    </Caption>
                                </div>
                            </RevealWrapper>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
