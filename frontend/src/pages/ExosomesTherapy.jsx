import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Play, ChevronDown } from 'lucide-react'
import { RevealWrapper } from '../hooks/useAnimations'
import { Heading, Text, Caption } from '../components/ui/Typography'
import CtaBanner from '../components/ui/CtaBanner'

export default function ExosomesTherapy() {
    const [openFaq, setOpenFaq] = useState(0)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            q: "When should I start anti-aging treatments?",
            a: "Preventative care can begin in your late 20s or early 30s. The earlier you start, the easier it is to maintain skin health long-term."
        },
        {
            q: "Will I look natural?",
            a: "Yes, our aim is to enhance your natural beauty. Exosome therapy works with your body's own regeneration pathways to provide subtle, natural-looking results."
        },
        {
            q: "How long do results last?",
            a: "Results typically last 12-18 months. Maintenance sessions every 6-12 months are recommended to sustain optimal cellular health and regeneration."
        },
        {
            q: "How often do I need treatment?",
            a: "Most patients require an initial series of 3-5 treatments spaced 4 weeks apart. After that, a maintenance session every 6 months is standard."
        }
    ]

    return (
        <div className="bg-white">
            <style>{`
                .exo-hero {
                    position: relative;
                    min-height: clamp(340px, 60vw, 540px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }
                @media (max-width: 640px) {
                    .exo-hero {
                        min-height: clamp(280px, 65vw, 400px);
                        align-items: flex-end;
                        padding-bottom: 2rem;
                    }
                }
                @media (min-width: 768px) {
                    .exo-hero {
                        min-height: clamp(480px, 55vw, 600px);
                    }
                }
                .exo-hero-bg {
                    position: absolute; inset: 0; z-index: 0;
                }
                .exo-hero-bg img {
                    width: 100%; height: 100%; object-fit: cover; object-position: center;
                }
                .exo-hero-overlay {
                    position: absolute; inset: 0; background: rgba(0,0,0,0.48);
                }
                .exo-hero-content {
                    position: relative; z-index: 1; text-align: center; color: #fff;
                    width: 100%;
                    padding: calc(var(--header-total-height) + 1.5rem) 1rem 2rem;
                }
            `}</style>

            {/* Hero Section */}
            <section className="exo-hero">
                <div className="exo-hero-bg">
                    <img
                        src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1920&q=80"
                        alt="Exosome Therapy"
                    />
                    <div className="exo-hero-overlay" />
                </div>

                <div className="exo-hero-content container">
                    <RevealWrapper direction="up">
                        {/* Breadcrumb */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                            <Link to="/" style={{ fontSize: 'clamp(0.55rem, 1.5vw, 0.65rem)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Home</Link>
                            <span style={{ color: 'rgba(255,255,255,0.25)' }}>/</span>
                            <span style={{ fontSize: 'clamp(0.55rem, 1.5vw, 0.65rem)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, color: 'var(--color-wine)' }}>Exosomes</span>
                        </div>

                        <span style={{ display: 'inline-block', fontSize: 'clamp(0.5rem, 1.3vw, 0.625rem)', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-wine)', background: 'rgba(114,47,55,0.12)', border: '1px solid rgba(114,47,55,0.3)', borderRadius: '9999px', padding: '0.4rem 1.25rem', marginBottom: '1rem' }}>
                            Cellular Regeneration
                        </span>

                        <h1 style={{ fontFamily: 'var(--font-heading)', color: '#fff', letterSpacing: 'clamp(2px, 1.5vw, 4px)', textTransform: 'uppercase', fontSize: 'clamp(1.85rem, 7vw, 5rem)', lineHeight: 1.05, marginBottom: '1rem' }}>
                            <span style={{ fontWeight: 300 }}>EXOSOME </span>
                            <span style={{ fontWeight: 700, color: 'var(--color-wine)', fontStyle: 'italic' }}>THERAPY</span>
                        </h1>

                        <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 'clamp(0.82rem, 2vw, 1.1rem)', fontWeight: 300, maxWidth: '38rem', margin: '0 auto', lineHeight: 1.75 }}>
                            The next revolution in cellular regeneration for skin and hair. Advanced technology delivered by certified experts.
                        </p>
                    </RevealWrapper>
                </div>
            </section>

            {/* What are Exosomes */}
            <section className="section" style={{ background: 'var(--color-bg-cream)', textAlign: 'center', borderBottom: '1px solid #d5cfc7' }}>
                <div className="container max-w-4xl">
                    <RevealWrapper>
                        <Heading variant="section" className="mb-6 tracking-[3px] text-dark uppercase text-2xl md:text-3xl">
                            WHAT ARE EXOSOMES?
                        </Heading>
                        <Text size="lg" className="mx-auto font-light" style={{ color: '#555', lineHeight: '1.8' }}>
                            Exosomes are tiny, powerful particles derived from stem cells carrying growth factors, peptides, and proteins. They act as messengers, telling cells how and when to regenerate and repair.
                        </Text>
                    </RevealWrapper>
                </div>
            </section>

            {/* The Advantage */}
            <section className="section bg-white text-center pb-24">
                <div className="container max-w-5xl">
                    <RevealWrapper delay={0.1}>
                        <span className="block text-[10px] font-bold tracking-[4px] uppercase mb-4 text-[#888]">THE</span>
                        <Heading variant="section" className="mb-8 tracking-widest">
                            <span className="font-light text-dark text-4xl">D'COSMEDIS</span> <span className="italic text-4xl" style={{ color: 'var(--color-wine)' }}>ADVANTAGE</span>
                        </Heading>
                        <Text size="lg" className="mx-auto font-light" style={{ color: '#555', lineHeight: '1.9' }}>
                            We treat true aging, not simply masking lines and wrinkles. With over 30 years of expertise, we will recommend a tailored blend of treatments based on your needs during an initial consultation—including Botox, dermal fillers or liquid facelifts. Our aim is to achieve a natural result to enhance your own natural beauty at any given age and treat any specific issues.
                        </Text>
                    </RevealWrapper>
                </div>
            </section>

            {/* Video Banner */}
            <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80" 
                        alt="Video Thumbnail" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container relative z-10 text-center text-white pt-10">
                    <RevealWrapper>
                        <Heading className="text-3xl md:text-5xl italic font-serif font-light mb-8">
                            All you need to know with Dr. Dolly Gupta
                        </Heading>
                        <div className="mb-8 flex justify-center">
                            <button className="w-20 h-16 bg-white/20 hover:bg-white/30 backdrop-blur-md transition-all rounded flex items-center justify-center shadow-lg group">
                                <Play size={28} fill="white" className="text-white group-hover:scale-110 transition-transform" />
                            </button>
                        </div>
                        <Text className="text-white/90 max-w-2xl mx-auto mb-10 text-sm md:text-base font-light px-4">
                            Discover more in this moving Exosome Therapy and D'CosMedis routine in just 2 minutes. Watch how our treatments aim for great excellence for betterment of your life.
                        </Text>
                        <button className="px-8 py-3 border border-white/40 text-white hover:bg-white hover:text-dark transition-colors tracking-[2px] text-xs font-semibold uppercase" style={{ background: 'var(--color-wine)', borderColor: 'var(--color-wine)' }}>
                            Discover More »
                        </button>
                    </RevealWrapper>
                </div>
            </section>

            {/* Exosomes for Hair */}
            <section className="section bg-white border-b border-[#eee]">
                <div className="container max-w-4xl">
                    <RevealWrapper>
                        <Heading variant="section" className="tracking-[3px] mb-12 uppercase text-2xl md:text-3xl">
                            EXOSOME THERAPY FOR HAIR
                        </Heading>
                        <div className="space-y-12 pl-4">
                            <div>
                                <h3 className="text-xs font-bold tracking-[2px] text-[#333] uppercase mb-4">WHAT IT WORKS</h3>
                                <Text className="text-[#555] font-light leading-relaxed">
                                    Exosome treatment promotes hair growth, improves scalp health, and prevents intense hair loss condition. It's a key segment to boosting hair density.
                                </Text>
                            </div>
                            
                            <div>
                                <h3 className="text-xs font-bold tracking-[2px] text-[#333] uppercase mb-4">BENEFITS</h3>
                                <div className="space-y-3">
                                    {[
                                        "Dormant hair follicle stimulation",
                                        "Enhanced scalp health",
                                        "Strengthens hair and prevents intense hair loss",
                                        "Visible results in 4-6 weeks"
                                    ].map((benefit, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="w-[6px] h-[6px] shrink-0 transform rotate-45" style={{ background: 'var(--color-wine)' }}></div>
                                            <Text className="text-[#555] font-light text-[15px]">{benefit}</Text>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xs font-bold tracking-[2px] text-[#333] uppercase mb-4">HOW THE TREATMENT WORKS</h3>
                                <Text className="text-[#555] font-light leading-relaxed">
                                    A concentrated serum containing thousands of exosomes is microneedled into the scalp during the treatment. The growth factors help naturally to reawaken dormant hair follicles and stimulate new growth.
                                </Text>
                            </div>
                        </div>
                    </RevealWrapper>
                </div>
            </section>

            {/* Exosomes for Face */}
            <section className="section border-b border-[#d5cfc7]" style={{ background: 'var(--color-bg-cream)' }}>
                <div className="container max-w-4xl">
                    <RevealWrapper>
                        <Heading variant="section" className="tracking-[3px] mb-12 uppercase text-2xl md:text-3xl">
                            EXOSOME THERAPY FOR FACE
                        </Heading>
                        <div className="space-y-12 pl-4">
                            <div>
                                <h3 className="text-xs font-bold tracking-[2px] text-[#333] uppercase mb-4">WHAT IT WORKS</h3>
                                <Text className="text-[#555] font-light leading-relaxed">
                                    Exosome regenerates the skin naturally, improving skin tone and texture. This helps to reverse skin aging, hyperpigmentation & enlarged pores.
                                </Text>
                            </div>
                            
                            <div>
                                <h3 className="text-xs font-bold tracking-[2px] text-[#333] uppercase mb-4">BENEFITS</h3>
                                <div className="space-y-3">
                                    {[
                                        "Boosts collagen & elastin production",
                                        "Reduces fine lines & wrinkles",
                                        "Improves skin tone, texture & pigmentation",
                                        "Accelerates skin healing",
                                        "Treats acne & enlarged pores"
                                    ].map((benefit, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="w-[6px] h-[6px] shrink-0 transform rotate-45" style={{ background: 'var(--color-wine)' }}></div>
                                            <Text className="text-[#555] font-light text-[15px]">{benefit}</Text>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xs font-bold tracking-[2px] text-[#333] uppercase mb-4">HOW THE TREATMENT WORKS</h3>
                                <Text className="text-[#555] font-light leading-relaxed">
                                    The serum is microneedled into the face, delivering growth factors deep into your skin, repairing damage, boosting collagen, and stimulating cellular regeneration.
                                </Text>
                            </div>
                        </div>
                    </RevealWrapper>
                </div>
            </section>

            {/* Ideal For / Results */}
            <section className="section bg-white border-b border-[#eee]">
                <div className="container max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-16 md:gap-24">
                        <RevealWrapper direction="up" className="space-y-8">
                            <Heading className="text-xl md:text-2xl font-serif font-light tracking-wide text-dark uppercase mb-8">
                                WHO IS EXOSOME THERAPY IDEAL FOR?
                            </Heading>
                            <div className="space-y-5 pl-2">
                                {[
                                    "Individuals with mild to moderate hair thinning",
                                    "Those concerned about skin aging and uneven skin tone",
                                    "Anyone with sun damage, acne scars, or enlarged pores",
                                    "People wanting to accelerate healing after peels or lasers"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="w-[6px] h-[6px] shrink-0 mt-2 transform rotate-45" style={{ background: 'var(--color-wine)' }}></div>
                                        <Text className="text-[#555] font-light text-[15px] leading-relaxed">{item}</Text>
                                    </div>
                                ))}
                            </div>
                        </RevealWrapper>

                        <RevealWrapper direction="up" delay={0.2} className="space-y-8">
                            <Heading className="text-xl md:text-2xl font-serif font-light tracking-wide text-dark uppercase mb-8">
                                RESULTS & RECOVERY
                            </Heading>
                            <div className="space-y-5 pl-2">
                                {[
                                    "Minimal downtime (redness for 12-24 hours)",
                                    "Safe for all skin types",
                                    "Can be combined with lasers & microneedling"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="w-[6px] h-[6px] shrink-0 mt-2 transform rotate-45" style={{ background: 'var(--color-wine)' }}></div>
                                        <Text className="text-[#555] font-light text-[15px] leading-relaxed">{item}</Text>
                                    </div>
                                ))}
                            </div>
                        </RevealWrapper>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section" style={{ background: 'var(--color-bg-cream)' }}>
                <div className="container max-w-4xl">
                    <RevealWrapper>
                        <div className="text-center mb-16">
                            <span className="text-[10px] font-bold tracking-[4px] text-[#888] uppercase mb-6 block">ASK THE EXPERTS</span>
                            <Heading variant="section" className="tracking-widest uppercase text-3xl">
                                FREQUENTLY ASKED QUESTIONS
                            </Heading>
                        </div>

                        <div className="space-y-2">
                            {faqs.map((faq, i) => (
                                <div key={i} className="border-b border-[#e5e5e5]">
                                    <button 
                                        className="w-full flex items-center justify-between text-left py-6 px-4 hover:bg-white/50 transition-colors"
                                        onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                                    >
                                        <span className={`text-[16px] xl:text-[18px] transition-colors font-serif font-medium`} style={{ color: openFaq === i ? 'var(--color-wine)' : '#444' }}>
                                            {faq.q}
                                        </span>
                                        <ChevronDown className={`shrink-0 transform transition-transform duration-300 ${openFaq === i ? 'rotate-180' : 'text-[#aaa]'}`} style={{ color: openFaq === i ? 'var(--color-wine)' : undefined }} />
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out px-4 ${openFaq === i ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                                        <Text className="text-[#666] font-light leading-relaxed">
                                            {faq.a}
                                        </Text>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealWrapper>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <CtaBanner
                primaryLabel="Book Consultation"
                primaryTo="/book"
                secondaryLabel="Browse Treatments"
                secondaryTo="/treatments"
                image="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1920&q=80"
            />
        </div>
    )
}
