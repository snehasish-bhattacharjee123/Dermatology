import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Play, ChevronDown, Calendar, Phone } from 'lucide-react'
import { RevealWrapper } from '../hooks/useAnimations'
import { Heading, Text, Caption } from '../components/ui/Typography'
import { treatments } from '../data/siteData'

export default function TreatmentDetail() {
    const { slug } = useParams()
    const [openFaq, setOpenFaq] = useState(0)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const treatment = treatments.find((t) => t.slug === slug)

    if (!treatment) {
        return (
            <div className="bg-white pt-40 pb-20 text-center flex flex-col items-center justify-center min-h-[60vh]">
                <Heading variant="section" className="mb-6 tracking-[3px] text-dark uppercase text-2xl md:text-3xl">Treatment Not Found</Heading>
                <Text color="muted" className="mt-4 mb-8">
                    The treatment you're looking for doesn't exist.
                </Text>
                <Link to="/treatments" className="px-8 py-3 bg-dark text-white hover:bg-gold transition-colors tracking-[2px] text-xs font-semibold uppercase">
                    Back to Treatments
                </Link>
            </div>
        )
    }

    const faqs = [
        {
            q: "How do I know if this treatment is right for me?",
            a: "During your initial consultation, our aesthetic doctors will thoroughly assess your skin/hair condition, discuss your concerns, and recommend the most effective treatment plan tailored specifically for you."
        },
        {
            q: "Are the treatments painful?",
            a: "Patient comfort is our priority. Most our treatments involve minimal discomfort. For procedures that might be sensitive, we use medical-grade topical numbing creams to ensure a pain-free experience."
        },
        {
            q: "Is there any downtime?",
            a: "Downtime varies by treatment. Many of our advanced procedures have zero to minimal downtime, allowing you to return to normal activities immediately. We will provide specific post-care instructions during your visit."
        },
        {
            q: "How many sessions will I need?",
            a: "The number of sessions depends on the specific treatment and your individual goals. We typically recommend a personalized course of treatments for optimal, long-lasting results."
        }
    ]

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden" style={{ marginTop: 'var(--header-total-height)' }}>
                <div className="absolute inset-0 z-0">
                    <img
                        src={treatment.image}
                        alt={treatment.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/20"></div>
                </div>

                <div className="container relative z-10 text-left pl-8 md:pl-16">
                    <RevealWrapper direction="left">
                        <span
                            className="inline-block px-4 py-1.5 text-[10px] tracking-[3px] uppercase font-bold rounded-full mb-6 border border-dark"
                            style={{ color: 'var(--color-dark)' }}
                        >
                            {treatment.category}
                        </span>

                        <Heading variant="hero" className="tracking-[3px] text-[#2c2c2c] mb-6 drop-shadow-sm uppercase" style={{ fontFamily: 'var(--font-heading)' }}>
                            {(() => {
                                const words = treatment.title.split(' ');
                                if (words.length === 1) return <span className="block text-5xl md:text-7xl lg:text-8xl font-light">{words[0]}</span>;
                                const firstWord = words[0];
                                const restWords = words.slice(1).join(' ');
                                return (
                                    <>
                                        <span className="block text-4xl md:text-6xl lg:text-7xl font-light">{firstWord}</span>
                                        <span className="block text-4xl md:text-6xl lg:text-7xl font-bold">{restWords}</span>
                                    </>
                                )
                            })()}
                        </Heading>
                        <Text className="max-w-2xl text-xs md:text-sm tracking-[2px] uppercase font-semibold text-[#555] mb-8 leading-relaxed">
                            {treatment.shortDescription}
                        </Text>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-12">
                            <Link to="/book" className="btn btn-dark uppercase tracking-widest text-xs px-8 py-3 shrink-0 inline-flex items-center justify-center border border-transparent">
                                Book Consultation
                            </Link>
                            <div className="flex flex-col text-xs font-semibold tracking-widest uppercase text-dark opacity-90 gap-1 pl-2 border-l-2 border-gold h-full justify-center">
                                <span>DURATION: {treatment.duration}</span>
                                <span>STARTING: {treatment.price}</span>
                            </div>
                        </div>
                    </RevealWrapper>
                </div>
            </section>

            {/* Overview / Description */}
            <section className="section bg-[#faf8f4] border-b border-[#eee]">
                <div className="container max-w-4xl">
                    <RevealWrapper>
                        <div className="text-center mb-16">
                            <span className="text-[10px] font-bold tracking-[4px] text-[#888] uppercase mb-4 block">OVERVIEW</span>
                            <Heading variant="section" className="tracking-[3px] text-dark uppercase text-2xl md:text-3xl">
                                ABOUT THIS TREATMENT
                            </Heading>
                        </div>
                        
                        <div 
                            className="dynamic-treatment-content mx-auto"
                            dangerouslySetInnerHTML={{ __html: treatment.description }}
                        />
                    </RevealWrapper>
                </div>
            </section>

            {/* The Advantage */}
            <section className="section bg-white text-center pb-24 border-b border-[#eee]">
                <div className="container max-w-5xl">
                    <RevealWrapper delay={0.1}>
                        <span className="block text-[10px] font-bold tracking-[4px] uppercase mb-4 text-[#888]">THE</span>
                        <Heading variant="section" className="mb-8 tracking-widest">
                            <span className="font-light text-dark text-4xl">D'COSMEDIS</span> <span className="italic text-[#f8b84e] text-4xl">ADVANTAGE</span>
                        </Heading>
                        <Text size="lg" className="mx-auto font-light" style={{ color: '#555', lineHeight: '1.9' }}>
                            We treat true causes, not simply masking symptoms. With over 30 years of expertise, Dr. Dolly Gupta and our expert team will recommend a tailored blend of treatments based on your specific needs during your consultation. Our aim is to achieve a natural, enhanced result safely and effectively.
                        </Text>
                    </RevealWrapper>
                </div>
            </section>

            {/* Optional video/image banner to break layout consistently with Exosomes page */}
            <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80" 
                        alt="Clinic" 
                        className="w-full h-full object-cover brightness-[0.4]"
                    />
                </div>
                <div className="container relative z-10 text-center text-white pt-10">
                    <RevealWrapper>
                        <Heading className="text-3xl md:text-5xl italic font-serif font-light mb-8">
                            Transforming Lives
                        </Heading>
                        <div className="mb-8 flex justify-center">
                            <button className="w-20 h-16 bg-white/20 hover:bg-white/30 backdrop-blur-md transition-all rounded flex items-center justify-center shadow-lg group">
                                <Play size={28} fill="white" className="text-white group-hover:scale-110 transition-transform" />
                            </button>
                        </div>
                        <Text className="text-white/90 max-w-2xl mx-auto mb-10 text-sm md:text-base font-light px-4">
                            Experience the highest standard of medical aesthetics care in a luxurious, relaxing environment. Watch how our customized treatments aim for unparalleled excellence.
                        </Text>
                        <Link to="/book" className="px-8 py-3 border border-white/40 text-white hover:bg-white hover:text-dark transition-colors tracking-[2px] text-xs font-semibold uppercase inline-block">
                            Book Your Visit »
                        </Link>
                    </RevealWrapper>
                </div>
            </section>

            {/* FAQs */}
            <section className="section bg-[#faf8f4]">
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
                                        <span className={`text-[16px] xl:text-[18px] transition-colors ${openFaq === i ? 'text-[#f8b84e]' : 'text-[#444]'} font-serif font-medium`}>
                                            {faq.q}
                                        </span>
                                        <ChevronDown className={`shrink-0 transform transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-[#f8b84e]' : 'text-[#aaa]'}`} />
                                    </button>
                                    <div className={`grid transition-all duration-500 ease-in-out ${openFaq === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden">
                                            <div className="px-4 pb-6">
                                                <Text className="text-[#666] font-light leading-relaxed">
                                                    {faq.a}
                                                </Text>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealWrapper>
                </div>
            </section>



            <style>{`
                .dynamic-treatment-content {
                    font-family: var(--font-sans);
                    font-size: 1.125rem;
                }
                .dynamic-treatment-content p {
                    margin-bottom: 2rem;
                    font-weight: 300;
                    line-height: 1.8;
                    color: #555;
                }
                .dynamic-treatment-content h3 {
                    font-size: 0.75rem;
                    font-weight: 700;
                    letter-spacing: 2px;
                    color: #333;
                    text-transform: uppercase;
                    margin-top: 3rem;
                    margin-bottom: 1.5rem;
                }
                .dynamic-treatment-content ul {
                    display: flex;
                    flex-direction: column;
                    gap: 1.25rem;
                    margin-bottom: 3rem;
                    padding-left: 0.5rem;
                }
                .dynamic-treatment-content ul li {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    font-size: 15px;
                    font-weight: 300;
                    color: #555;
                    line-height: 1.6;
                }
                .dynamic-treatment-content ul li::before {
                    content: '';
                    display: block;
                    width: 6px;
                    height: 6px;
                    background-color: #f8b84e;
                    flex-shrink: 0;
                    transform: rotate(45deg);
                    margin-top: 8px;
                }
                .dynamic-treatment-content strong, .dynamic-treatment-content b {
                    font-weight: 600;
                    color: #333;
                }
            `}</style>
        </div>
    )
}
