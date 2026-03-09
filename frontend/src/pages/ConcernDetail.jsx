import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Play, ChevronDown, ArrowRight, ArrowUpRight } from 'lucide-react'
import { RevealWrapper } from '../hooks/useAnimations'
import { Heading, Text, Caption } from '../components/ui/Typography'
import { concerns, treatments } from '../data/siteData'

export default function ConcernDetail() {
    const { slug } = useParams()
    const [openFaq, setOpenFaq] = useState(0)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const concern = concerns.find((c) => c.slug === slug)

    if (!concern) {
        return (
            <div className="bg-white pt-48 pb-32 text-center flex flex-col items-center justify-center min-h-[70vh]">
                <Heading variant="section" className="mb-6 font-serif text-3xl md:text-5xl" style={{ color: 'var(--color-dark)' }}>Concern Not Found</Heading>
                <Text color="muted" size="lg" className="mt-4 mb-10 max-w-xl mx-auto">
                    The skin/hair concern you're looking for doesn't exist or has been moved.
                </Text>
                <Link to="/concerns" className="inline-flex items-center justify-center border border-gold px-8 py-4 text-xs tracking-[2px] uppercase font-semibold text-white bg-gold hover:bg-gold-dark transition-all duration-300">
                    Back to Concerns
                </Link>
            </div>
        )
    }

    const relatedTreatments = treatments.filter((t) => concern.treatments.includes(t.slug))

    const faqs = [
        {
            q: `What causes ${concern.name.toLowerCase()}?`,
            a: "This condition can be triggered by a variety of factors including genetics, hormonal changes, environmental stress, and lifestyle habits. During your consultation, our doctors will perform a detailed assessment to identify the root cause of your specific concern."
        },
        {
            q: "How soon can I expect to see results?",
            a: "Results timeline depends on the severity of the condition and the customized treatment plan we formulate. Some patients notice improvements after their very first session, while deeper concerns may require a few weeks for optimal visible changes."
        },
        {
            q: "Are the treatments customizable?",
            a: "Absolutely. We do not believe in a one-size-fits-all approach. Every treatment protocol is meticulously tailored to your unique skin type, sensitivity levels, and aesthetic goals."
        },
        {
            q: "Is it safe for sensitive skin?",
            a: "Yes. Our expert dermatologists carefully evaluate your skin's barrier function before recommending any procedure, ensuring the utmost safety and efficacy without compromising patient comfort."
        }
    ]

    return (
        <div className="bg-white">
            {/* Premium Hero Section */}
            <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden" style={{ marginTop: 'var(--header-total-height)' }}>
                <div className="absolute inset-0 z-0 bg-dark">
                    <img
                        src={concern.image}
                        alt={concern.name}
                        className="w-full h-full object-cover opacity-60"
                        style={{ filter: 'brightness(0.8) contrast(1.1)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 via-[#1a1a1a]/50 to-transparent"></div>
                </div>

                <div className="container relative z-10 text-left">
                    <RevealWrapper direction="up" className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 border border-gold/30 rounded-full mb-8 backdrop-blur-sm bg-black/20">
                            <span className="text-gold flex items-center justify-center">{concern.icon}</span>
                            <span className="text-[10px] tracking-[3px] uppercase font-bold text-white">Targeted Solution</span>
                        </div>

                        <h1 
                            className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 uppercase tracking-[4px]" 
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            {(() => {
                                const words = concern.name.split(' ');
                                if (words.length === 1) return <span className="font-light">{words[0]}</span>;
                                const firstWord = words[0];
                                const restWords = words.slice(1).join(' ');
                                return (
                                    <>
                                        <span className="block font-light text-white/90">{firstWord}</span>
                                        <span className="block font-medium text-gold">{restWords}</span>
                                    </>
                                )
                            })()}
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl leading-relaxed mb-10 border-l-2 border-gold pl-6 py-2">
                            {concern.shortDescription}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <Link to="/book" className="w-full sm:w-auto text-center inline-flex items-center justify-center border border-gold px-10 py-5 text-xs tracking-[2px] uppercase font-semibold text-white bg-gold hover:bg-gold-dark hover:scale-105 transition-all duration-300">
                                Book Consultation
                            </Link>
                        </div>
                    </RevealWrapper>
                </div>
            </section>

            {/* Premium Overview / Description */}
            <section className="py-24 md:py-32 bg-cream">
                <div className="container max-w-4xl">
                    <RevealWrapper>
                        <div className="text-center mb-16">
                            <span className="inline-block text-[10px] tracking-[3px] uppercase font-bold text-gold mb-4">
                                Understanding The Condition
                            </span>
                            <h2 
                                className="text-3xl md:text-5xl font-serif text-dark"
                            >
                                <span className="italic text-gold">About</span> The Concern
                            </h2>
                        </div>
                        
                        <div className="prose prose-lg md:prose-xl mx-auto text-center font-light leading-relaxed text-[#555]">
                            <p className="text-xl md:text-2xl font-serif text-dark mb-8 leading-relaxed">
                                "{concern.description.split('.')[0]}."
                            </p>
                            <p className="text-base md:text-lg">
                                {concern.description.substring(concern.description.indexOf('.') + 1).trim()}
                            </p>
                        </div>
                    </RevealWrapper>
                </div>
            </section>

            {/* Recommended Treatments Card Grid (Premium) */}
            {relatedTreatments.length > 0 && (
                <section className="py-24 md:py-32 bg-white">
                    <div className="container max-w-7xl">
                        <RevealWrapper>
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                                <div>
                                    <span className="inline-block text-[10px] tracking-[3px] uppercase font-bold text-[#888] mb-4">
                                        Tailored Solutions
                                    </span>
                                    <h2 className="text-3xl md:text-5xl font-serif text-dark">
                                        Recommended <span className="italic text-gold">Treatments</span>
                                    </h2>
                                </div>
                                <Link to="/treatments" className="inline-flex items-center gap-2 text-sm font-semibold tracking-[2px] uppercase text-dark hover:text-gold transition-colors pb-2 border-b-2 border-black hover:border-gold">
                                    View All Treatments <ArrowRight size={16} />
                                </Link>
                            </div>
                        </RevealWrapper>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                            {relatedTreatments.map((t, i) => (
                                <RevealWrapper key={t.id} direction="up" delay={i * 0.1}>
                                    <Link to={`/treatments/${t.slug}`} className="group block h-full bg-white border border-[#f0ede8] rounded-none overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                                        <div className="overflow-hidden relative h-[300px]">
                                            <img
                                                src={t.image}
                                                alt={t.title}
                                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0"></div>
                                            <div
                                                className="absolute top-6 left-6 px-4 py-2 text-[10px] tracking-[2px] uppercase text-white font-bold bg-dark backdrop-blur-md"
                                            >
                                                {t.category}
                                            </div>
                                        </div>
                                        <div className="p-8 flex flex-col h-[calc(100%-300px)]">
                                            <h3 className="text-xl md:text-2xl font-serif text-dark mb-4 group-hover:text-gold transition-colors duration-300">
                                                {t.title}
                                            </h3>
                                            <p className="text-sm leading-relaxed text-[#666] flex-grow font-light">
                                                {t.shortDescription.slice(0, 120)}...
                                            </p>
                                            <div
                                                className="flex items-center justify-between mt-8 pt-6 border-t border-[#f0ede8]"
                                            >
                                                <span className="flex items-center gap-2 text-xs tracking-[2px] uppercase font-bold text-dark group-hover:text-gold transition-colors">
                                                    Discover More <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </RevealWrapper>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* The Advantage Premium Block */}
            <section className="py-24 md:py-32 bg-dark text-center relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10 blur-xl">
                    <img src={concern.image} className="w-full h-full object-cover mix-blend-luminosity" />
                </div>
                <div className="container max-w-5xl relative z-10">
                    <RevealWrapper delay={0.1}>
                        <span className="inline-block px-4 py-1 text-[10px] font-bold tracking-[4px] uppercase mb-8 text-gold border border-gold/30 rounded-full">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl mb-10 text-white font-serif tracking-wide leading-tight">
                            The D'CosMedis <br/><span className="italic text-gold">Advantage</span>
                        </h2>
                        <p className="text-lg md:text-xl font-light text-white/80 max-w-3xl mx-auto leading-relaxed">
                            We treat true causes, not simply masking symptoms. With over 15 years of expertise, Dr. Dolly Gupta and our expert team will recommend a tailored blend of treatments based on your specific needs. Our aim is to achieve a natural, enhanced result safely and effectively.
                        </p>
                    </RevealWrapper>
                </div>
            </section>

            {/* Premium FAQs */}
            <section className="py-24 md:py-32 bg-cream">
                <div className="container max-w-4xl">
                    <RevealWrapper>
                        <div className="text-center mb-16 md:mb-20">
                            <span className="inline-block text-[10px] tracking-[3px] uppercase font-bold text-[#888] mb-4">
                                Ask The Experts
                            </span>
                            <h2 className="text-3xl md:text-5xl font-serif text-dark">
                                Frequently Asked <span className="italic text-gold">Questions</span>
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-white border border-[#f0ede8] transition-all duration-300 hover:shadow-lg">
                                    <button 
                                        className="w-full flex items-center justify-between text-left p-6 md:p-8 outline-none"
                                        onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                                    >
                                        <span className={`text-lg md:text-xl font-serif transition-colors ${openFaq === i ? 'text-gold' : 'text-dark'}`}>
                                            {faq.q}
                                        </span>
                                        <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === i ? 'border-gold bg-gold text-white rotate-180' : 'border-[#ddd] text-dark'}`}>
                                            <ChevronDown size={16} />
                                        </div>
                                    </button>
                                    <div className={`grid transition-all duration-500 ease-in-out ${openFaq === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden">
                                            <div className="px-6 md:px-8 pb-8 pt-0">
                                                <p className="text-[#666] font-light leading-relaxed text-base md:text-lg">
                                                    {faq.a}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealWrapper>
                </div>
            </section>
        </div>
    )
}
