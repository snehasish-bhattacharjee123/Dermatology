import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { RevealWrapper } from '../hooks/useAnimations'
import { Heading, Text, Caption } from '../components/ui/Typography'
import { concerns } from '../data/siteData'

export default function Concerns() {
    return (
        <>
            {/* Page Hero - Premium */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden" style={{ marginTop: 'var(--header-total-height)' }}>
                <div className="absolute inset-0 bg-[#e8e3d9] z-0"></div>
                <div className="container relative z-10 text-center">
                    <RevealWrapper>
                        <span className="inline-block px-4 py-1.5 text-[10px] tracking-[4px] uppercase font-bold rounded-full mb-6 text-[#888]">
                            What Bothers You?
                        </span>
                        <Heading variant="hero" className="tracking-[4px] text-dark uppercase mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                            <span className="text-5xl md:text-7xl font-light">OUR</span> <span className="text-5xl md:text-7xl font-bold">CONCERNS</span>
                        </Heading>
                        <Text className="max-w-2xl mx-auto text-sm md:text-base tracking-[1px] font-light text-[#555] leading-relaxed">
                            Skin Treatment in Delhi — Advanced Dermatology & Aesthetic Care at D'CosMedis. We address every skin and hair concern with precision and care.
                        </Text>
                    </RevealWrapper>
                </div>
            </section>

            {/* Concerns Grid - Improved */}
            <section className="section bg-white py-20 md:py-32">
                <div className="container max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                        {concerns.map((concern, i) => (
                            <RevealWrapper key={concern.id} direction="up" delay={i * 0.05}>
                                <Link
                                    to={`/concerns/${concern.slug}`}
                                    className="group flex flex-col sm:flex-row gap-0 sm:gap-8 p-6 lg:p-8 rounded-sm transition-all duration-300 hover-lift bg-white border border-[#f0ede8] h-full"
                                >
                                    {/* Image */}
                                    <div className="w-full sm:w-48 h-56 sm:h-auto overflow-hidden shrink-0 relative rounded-sm mb-6 sm:mb-0">
                                        <img
                                            src={concern.image}
                                            alt={concern.name}
                                            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.05]"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col justify-between flex-1 py-1">
                                        <div>
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="text-2xl opacity-80">{concern.icon}</span>
                                                <h3
                                                    className="text-2xl transition-colors duration-300 font-serif font-medium"
                                                    style={{ color: 'var(--color-dark)' }}
                                                >
                                                    {concern.name}
                                                </h3>
                                            </div>
                                            <p className="leading-relaxed text-[#666] text-sm">
                                                {concern.shortDescription}
                                            </p>
                                        </div>
                                        <div
                                            className="flex items-center justify-between mt-8 pt-5 border-t border-[#f0ede8]"
                                        >
                                            <span className="flex gap-2 items-center font-semibold tracking-widest text-[#222] group-hover:text-gold transition-colors uppercase text-[10px]">
                                                View Complete Details <ArrowRight size={14} className="mt-0.5" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </RevealWrapper>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
                .text-gold {
                    color: var(--color-gold);
                }
                .group-hover\:text-gold:hover {
                    color: var(--color-gold);
                }
            `}</style>
        </>
    )
}
