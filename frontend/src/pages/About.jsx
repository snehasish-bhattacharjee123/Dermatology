import { Link } from 'react-router-dom'
import { ArrowRight, Award, Heart, Users, Sparkles } from 'lucide-react'
import { RevealWrapper, ParallaxImage } from '../hooks/useAnimations'
import { Heading, Text, Caption } from '../components/ui/Typography'
import { teamMembers, stats } from '../data/siteData'

export default function About() {
    return (
        <>
            {/* Page Hero - Premium */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden" style={{ marginTop: 'var(--header-total-height)' }}>
                <div className="absolute inset-0 bg-[#e8e3d9] z-0"></div>
                <div className="container relative z-10 text-center">
                    <RevealWrapper>
                        <span className="inline-block px-4 py-1.5 text-[10px] tracking-[4px] uppercase font-bold rounded-full mb-6 text-[#888]">
                            Discover Our Legacy
                        </span>
                        <Heading variant="hero" className="tracking-[4px] text-dark uppercase mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                            <span className="text-5xl md:text-7xl font-light">ABOUT</span> <span className="text-5xl md:text-7xl font-bold">D'COSMEDIS</span>
                        </Heading>
                        <Text className="max-w-2xl mx-auto text-sm md:text-base tracking-[1px] font-light text-[#555] leading-relaxed">
                            Where science meets beauty — pioneering advanced dermatology and aesthetic medicine in India.
                        </Text>
                    </RevealWrapper>
                </div>
            </section>

            {/* Story Section - Premium */}
            <section className="section bg-white py-20 md:py-32">
                <div className="container max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <RevealWrapper direction="left">
                            <div className="relative">
                                <ParallaxImage
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
                                    alt="Founder"
                                    className="rounded-sm"
                                    style={{ height: '600px' }}
                                    speed={-0.1}
                                />
                                <div
                                    className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 p-8 lg:p-10 rounded-sm shadow-xl"
                                    style={{ background: 'var(--color-gold)' }}
                                >
                                    <p
                                        className="text-white text-5xl lg:text-7xl font-light"
                                        style={{ fontFamily: 'var(--font-heading)' }}
                                    >
                                        15+
                                    </p>
                                    <span className="block mt-3 text-white tracking-[2px] uppercase text-[10px] font-bold">
                                        Years of<br />Excellence
                                    </span>
                                </div>
                            </div>
                        </RevealWrapper>

                        <RevealWrapper direction="right">
                            <div className="lg:pl-8">
                                <span className="inline-block text-[10px] tracking-[3px] uppercase font-bold mb-4 text-[#888]">
                                    Our Story
                                </span>
                                <h2 
                                    className="text-3xl md:text-4xl lg:text-5xl mb-8 leading-[1.2] font-serif" 
                                    style={{ color: 'var(--color-dark)' }}
                                >
                                    A Legacy of <br/><span className="italic text-gold">Care & Innovation</span>
                                </h2>
                                
                                <div
                                    className="mb-10 pl-6 py-2"
                                    style={{
                                        borderLeft: '2px solid var(--color-gold)'
                                    }}
                                >
                                    <p
                                        className="text-xl md:text-2xl font-light mb-4 leading-relaxed"
                                        style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-dark)' }}
                                    >
                                        "At D'CosMedis, we believe that everyone deserves to feel confident in their skin. Our mission is to provide world-class dermatological care using cutting-edge technology."
                                    </p>
                                    <span className="text-[10px] uppercase tracking-[2px] font-bold text-[#888]">
                                        — Dr. Dolly Gupta, Founder
                                    </span>
                                </div>

                                <div className="space-y-6 mb-10">
                                    <p className="text-[#666] leading-relaxed text-sm md:text-base">
                                        Founded over 15 years ago by Dr. Dolly Gupta, one of India's most respected dermatologists,
                                        D'CosMedis Clinic has grown to become a leading name in advanced aesthetics. With four state-of-the-art
                                        clinics across Delhi and Ludhiana, we have transformed the skin and confidence of over 50,000 patients.
                                    </p>
                                    <p className="text-[#666] leading-relaxed text-sm md:text-base">
                                        Our approach combines medical expertise with artistic precision. Every treatment plan is customized
                                        to the individual, ensuring natural-looking results that enhance your unique beauty.
                                    </p>
                                </div>
                                
                                <Link to="/book" className="inline-flex items-center justify-center border border-gold px-8 py-4 text-xs tracking-[2px] uppercase font-semibold text-gold hover:bg-gold hover:text-white transition-all duration-300">
                                    Book Consultation
                                </Link>
                            </div>
                        </RevealWrapper>
                    </div>
                </div>
            </section>

            {/* Values - Premium */}
            <section className="section bg-[#e8e3d9] py-24 md:py-32">
                <div className="container max-w-6xl">
                    <RevealWrapper>
                        <div className="text-center mb-16 md:mb-24">
                            <span className="inline-block text-[10px] tracking-[3px] uppercase font-bold mb-4 text-[#888]">
                                Our Values
                            </span>
                            <h2 
                                className="text-3xl md:text-5xl font-serif" 
                                style={{ color: 'var(--color-dark)' }}
                            >
                                What Sets Us Apart
                            </h2>
                        </div>
                    </RevealWrapper>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Award, title: 'Expert Doctors', desc: 'Board-certified dermatologists with decades of combined experience.' },
                            { icon: Sparkles, title: 'Advanced Tech', desc: 'State-of-the-art lasers, devices, and FDA-approved treatments.' },
                            { icon: Heart, title: 'Personalized Care', desc: 'Every treatment plan is customized to your unique skin needs.' },
                            { icon: Users, title: '50,000+ Patients', desc: 'Trusted by thousands for transformative, natural-looking results.' },
                        ].map((val, i) => (
                            <RevealWrapper key={i} direction="up" delay={i * 0.1}>
                                <div
                                    className="text-center bg-white p-10 md:p-12 rounded-sm h-full transition-all duration-500 hover-lift border border-[#f0ede8]"
                                >
                                    <div
                                        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8 bg-[#e8e3d9]"
                                    >
                                        <val.icon size={26} style={{ color: 'var(--color-gold)' }} />
                                    </div>
                                    <h4
                                        className="text-xl mb-4 font-serif"
                                        style={{ color: 'var(--color-dark)' }}
                                    >
                                        {val.title}
                                    </h4>
                                    <p
                                        className="text-sm text-[#666] leading-relaxed"
                                    >
                                        {val.desc}
                                    </p>
                                </div>
                            </RevealWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team - Premium */}
            <section className="section bg-white py-24 md:py-32">
                <div className="container max-w-6xl">
                    <RevealWrapper>
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
                            <div className="text-center md:text-left mx-auto md:mx-0 w-full md:w-auto">
                                <span className="inline-block text-[10px] tracking-[3px] uppercase font-bold mb-4 text-[#888]">
                                    Meet the Experts
                                </span>
                                <h2 
                                    className="text-3xl md:text-5xl font-serif" 
                                    style={{ color: 'var(--color-dark)' }}
                                >
                                    Our Team
                                </h2>
                            </div>
                        </div>
                    </RevealWrapper>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {teamMembers.map((member, i) => (
                            <RevealWrapper key={i} direction="up" delay={i * 0.15}>
                                <div className="group">
                                    <div className="relative overflow-hidden rounded-sm mb-6" style={{ height: '480px' }}>
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.05] grayscale-[20%] group-hover:grayscale-0"
                                        />
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8"
                                            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)' }}
                                        >
                                            <p className="text-white/90 text-sm leading-relaxed">{member.bio}</p>
                                        </div>
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h3
                                            className="text-2xl mb-2 font-serif text-dark transition-colors"
                                        >
                                            {member.name}
                                        </h3>
                                        <span className="text-[11px] tracking-[2px] uppercase font-bold text-gold">
                                            {member.role}
                                        </span>
                                    </div>
                                </div>
                            </RevealWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Strip - Premium */}
            <section
                className="py-20 md:py-28"
                style={{ background: 'var(--color-gold)' }}
            >
                <div className="container max-w-6xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
                        {stats.map((stat, i) => (
                            <RevealWrapper key={i} direction="up" delay={i * 0.1}>
                                <div className="text-center">
                                    <span
                                        className="block text-white text-5xl md:text-6xl lg:text-7xl font-light mb-4"
                                        style={{ fontFamily: 'var(--font-heading)' }}
                                    >
                                        {stat.value}
                                    </span>
                                    <span className="block text-white tracking-[3px] uppercase text-[10px] md:text-xs font-bold opacity-90">
                                        {stat.label}
                                    </span>
                                </div>
                            </RevealWrapper>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
