import { Link } from 'react-router-dom'
import { RevealWrapper, ParallaxImage } from '../../hooks/useAnimations'

// ===== ABOUT PREVIEW - PREMIUM =====
export default function AboutPreview() {
    return (
        <section className="section py-16 md:py-24 overflow-hidden border-t border-[#d4c8b0]" style={{ background: '#EDE8D0' }}>
            <div className="container max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <RevealWrapper direction="left">
                        <div className="relative group">
                            <ParallaxImage
                                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=720&q=75"
                                alt="Dr. Dolly Gupta"
                                className="rounded-sm shadow-xl"
                                style={{ height: '400px' }}
                                speed={-0.1}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                srcSet="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=480&q=75 480w, https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=720&q=75 720w, https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900&q=75 900w"
                            />
                            <div
                                className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 p-8 lg:p-10 rounded-sm shadow-xl"
                                style={{ background: 'var(--color-wine)' }}
                            >
                                <div className="text-center" style={{ color: '#ffffff' }}>
                                    <h3 className="text-5xl lg:text-7xl font-light leading-none mb-3" style={{ fontFamily: 'var(--font-heading)' }}>15+</h3>
                                    <span className="block text-[10px] tracking-[2px] uppercase font-bold opacity-90">
                                        Years of<br />Excellence
                                    </span>
                                </div>
                            </div>
                        </div>
                    </RevealWrapper>

                    <RevealWrapper direction="right">
                        <div className="lg:pl-8">
                            <span className="inline-block text-[10px] tracking-[3px] uppercase font-bold mb-4 text-[#888]">
                                About D'CosMedis
                            </span>
                            <h2
                                className="text-3xl md:text-5xl lg:text-5xl mb-8 font-serif leading-tight"
                                style={{ color: 'var(--color-dark)' }}
                            >
                                Where Science <br /><span className="italic text-wine">Meets Beauty</span>
                            </h2>
                            <div className="space-y-6 mb-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0" style={{ background: 'var(--color-wine)' }}></div>
                                    <p className="text-[#666] leading-relaxed">
                                        Founded by Dr. Dolly Gupta, D'CosMedis Clinic has been at the forefront of dermatology and aesthetic medicine in India for over 15 years.
                                    </p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0" style={{ background: 'var(--color-wine)' }}></div>
                                    <p className="text-[#666] leading-relaxed">
                                        Our state-of-the-art clinics combine cutting-edge technology with personalized care to deliver transformative results.
                                    </p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0" style={{ background: 'var(--color-wine)' }}></div>
                                    <p className="text-[#666] leading-relaxed">
                                        We believe that everyone deserves to feel confident in their skin with customized treatment plans.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Link to="/about" className="w-full sm:w-auto text-center inline-flex items-center justify-center border border-wine px-8 py-4 text-xs tracking-[2px] uppercase font-semibold text-white bg-wine hover:bg-wine-dark transition-all duration-300">
                                    Our Story
                                </Link>
                                <Link to="/book" className="w-full sm:w-auto text-center inline-flex items-center justify-center border border-[#ccc] px-8 py-4 text-xs tracking-[2px] uppercase font-semibold text-dark hover:border-dark transition-all duration-300">
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </RevealWrapper>
                </div>
            </div>
        </section>
    )
}
