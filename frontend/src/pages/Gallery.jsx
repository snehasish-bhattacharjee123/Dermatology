import { useState } from 'react'
import { X } from 'lucide-react'
import { RevealWrapper } from '../hooks/useAnimations'
import { Heading, Text, Caption } from '../components/ui/Typography'
import { galleryImages } from '../data/siteData'

const categories = ['all', 'clinic', 'treatments', 'results']

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState('all')
    const [lightbox, setLightbox] = useState(null)

    const filtered = activeCategory === 'all'
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeCategory)

    return (
        <>
            {/* Page Hero - Consistent */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden" style={{ marginTop: 'var(--header-total-height)' }}>
                <div className="absolute inset-0 bg-[#faf8f4] z-0"></div>
                <div className="container relative z-10 text-center">
                    <RevealWrapper>
                        <span className="inline-block px-4 py-1.5 text-[10px] tracking-[4px] uppercase font-bold rounded-full mb-6 text-[#888]">
                            Visual Stories
                        </span>
                        <Heading variant="hero" className="tracking-[4px] text-dark uppercase mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                            <span className="text-5xl md:text-7xl font-light">OUR</span> <span className="text-5xl md:text-7xl font-bold">GALLERY</span>
                        </Heading>
                        <Text className="max-w-2xl mx-auto text-sm md:text-base tracking-[1px] font-light text-[#555] leading-relaxed">
                            Explore our cutting-edge clinic spaces, advanced treatment sessions, and transformative results through our visual portfolio.
                        </Text>
                    </RevealWrapper>
                </div>
            </section>

            {/* Category Filter - Improved */}
            <section
                className="py-8 bg-white border-b"
                style={{ borderColor: 'var(--color-border)' }}
            >
                <div className="container">
                    <div className="flex items-center justify-center gap-3 md:gap-4 flex-wrap">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className="px-6 py-2.5 text-[10px] md:text-xs tracking-[2px] uppercase font-semibold rounded-full transition-all duration-500 capitalize"
                                style={{
                                    background: activeCategory === cat ? 'var(--color-gold)' : 'transparent',
                                    color: activeCategory === cat ? '#fff' : 'var(--color-text-muted)',
                                    border: `1px solid ${activeCategory === cat ? 'transparent' : 'var(--color-border)'}`,
                                    boxShadow: activeCategory === cat ? '0 10px 20px rgba(212, 175, 55, 0.2)' : 'none'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid - Improved Masonry */}
            <section className="section bg-[#fff] py-20 md:py-32">
                <div className="container">
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
                        {filtered.map((img, i) => (
                            <RevealWrapper key={`${img.id}-${activeCategory}`} direction="up" delay={(i % 10) * 0.05}>
                                <div
                                    className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-sm hover-lift border border-[#f5f5f5]"
                                    onClick={() => setLightbox(img)}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.caption}
                                        className="w-full transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
                                        style={{
                                            // Dynamic heights for masonry effect
                                            height: i % 4 === 0 ? '450px' : i % 4 === 1 ? '320px' : i % 4 === 2 ? '500px' : '380px',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    <div
                                        className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                                        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)' }}
                                    >
                                        <span className="text-[10px] tracking-[3px] uppercase font-bold text-white/70 mb-2 block transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                            {img.category}
                                        </span>
                                        <h4 className="text-white text-lg font-serif tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                                            {img.caption}
                                        </h4>
                                    </div>
                                </div>
                            </RevealWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox - Refined */}
            {lightbox && (
                <div
                    className="fixed inset-0 z-[2000] flex items-center justify-center p-4"
                    style={{ background: 'rgba(0,0,0,0.95)' }}
                    onClick={() => setLightbox(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
                        onClick={() => setLightbox(null)}
                        aria-label="Close lightbox"
                    >
                        <X size={32} />
                    </button>
                    <img
                        src={lightbox.src}
                        alt={lightbox.caption}
                        className="max-w-full max-h-[85vh] object-contain rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <Caption
                        variant="caption-white"
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
                    >
                        {lightbox.caption}
                    </Caption>
                </div>
            )}
        </>
    )
}
