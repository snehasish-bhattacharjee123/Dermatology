import { Link } from 'react-router-dom'
import { RevealWrapper, ParallaxImage } from '../../hooks/useAnimations'

// ===== ABOUT PREVIEW - PREMIUM =====
export default function AboutPreview() {
    return (
        <section
            className="overflow-hidden border-t border-[#d4c8b0]"
            style={{ background: '#EDE8D0', padding: 'clamp(2.5rem, 8vw, 6rem) 0' }}
        >
            <div className="container max-w-6xl px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center">
                    <RevealWrapper direction="left">
                        <div className="relative group pr-3 pb-3 md:pr-8 md:pb-8">
                            <ParallaxImage
                                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=720&q=75"
                                alt="Dr. Dolly Gupta"
                                className="rounded-lg shadow-xl w-full object-cover"
                                speed={-0.1}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                srcSet="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=480&q=75 480w, https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=720&q=75 720w, https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900&q=75 900w"
                                style={{ height: 'clamp(250px, 60vw, 550px)' }}
                            />
                            <div
                                className="absolute bottom-0 right-0 md:bottom-2 md:right-2 p-4 md:p-10 rounded-lg shadow-2xl backdrop-blur-sm"
                                style={{ background: 'var(--color-wine)' }}
                            >
                                <div className="text-center" style={{ color: '#ffffff' }}>
                                    <h3
                                        style={{
                                            fontFamily: 'var(--font-heading)',
                                            fontSize: 'clamp(2rem, 8vw, 4.5rem)',
                                            fontWeight: 300,
                                            lineHeight: 1,
                                            marginBottom: '0.25rem'
                                        }}
                                    >15+</h3>
                                    <span
                                        style={{
                                            display: 'block',
                                            fontSize: 'clamp(0.55rem, 1.5vw, 0.625rem)',
                                            letterSpacing: '2px',
                                            textTransform: 'uppercase',
                                            fontWeight: 700,
                                            opacity: 0.9
                                        }}
                                    >
                                        Years of<br />Excellence
                                    </span>
                                </div>
                            </div>
                        </div>
                    </RevealWrapper>

                    <RevealWrapper direction="right">
                        <div className="lg:pl-8">
                            <span
                                style={{
                                    display: 'inline-block',
                                    fontSize: '0.6rem',
                                    letterSpacing: '3px',
                                    textTransform: 'uppercase',
                                    fontWeight: 700,
                                    color: '#888',
                                    marginBottom: '0.75rem'
                                }}
                            >
                                About D'CosMedis
                            </span>
                            <h2
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: 'clamp(1.5rem, 5vw, 3rem)',
                                    fontWeight: 400,
                                    lineHeight: 1.2,
                                    color: 'var(--color-dark)',
                                    marginBottom: '1.25rem'
                                }}
                            >
                                Where Science <br /><span className="italic text-wine">Meets Beauty</span>
                            </h2>
                            <div className="space-y-4 mb-6 md:mb-10">
                                {[
                                    'Founded by Dr. Dolly Gupta, D\'CosMedis Clinic has been at the forefront of dermatology and aesthetic medicine in India for over 15 years.',
                                    'Our state-of-the-art clinics combine cutting-edge technology with personalized care to deliver transformative results.',
                                    'We believe that everyone deserves to feel confident in their skin with customized treatment plans.'
                                ].map((text, i) => (
                                    <div key={i} className="flex items-start gap-3 group">
                                        <div className="w-4 h-4 md:w-5 md:h-5 rounded-full mt-1 shrink-0 flex items-center justify-center transition-transform group-hover:scale-110" style={{ background: 'var(--color-wine)' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                        <p
                                            style={{
                                                color: '#6b4f5a',
                                                lineHeight: 1.65,
                                                fontSize: 'clamp(0.8rem, 2vw, 1rem)'
                                            }}
                                        >
                                            {text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                                <Link
                                    to="/about"
                                    className="text-center inline-flex items-center justify-center border border-wine px-6 py-3 text-xs tracking-[2px] uppercase font-semibold text-white bg-wine hover:bg-wine-dark hover:shadow-lg transition-all duration-300 rounded-sm"
                                    style={{ minHeight: '48px' }}
                                >
                                    Our Story
                                </Link>
                                <Link
                                    to="/book"
                                    className="text-center inline-flex items-center justify-center border border-wine px-6 py-3 text-xs tracking-[2px] uppercase font-semibold text-wine hover:bg-wine hover:text-white bg-transparent transition-all duration-300 rounded-sm"
                                    style={{ minHeight: '48px' }}
                                >
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
