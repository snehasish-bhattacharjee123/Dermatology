import { Link, useLocation } from 'react-router-dom'
import { Instagram, Facebook, Youtube, Twitter, ArrowUpRight } from 'lucide-react'
import { RevealWrapper } from '../../hooks/useAnimations'

const footerLinks = {
    concerns: [
        { name: 'Acne', path: '/concerns/acne' },
        { name: 'Pigmentation', path: '/concerns/pigmentation' },
        { name: 'Eyes & Lips', path: '/concerns/eyes-lips' },
        { name: 'Hair Loss', path: '/concerns/hair-loss' },
        { name: 'Hands & Foot', path: '/concerns/hands-foot' },
        { name: 'Scanty Brows & Face Feature Correction', path: '/concerns/semi-permanent-makeup' },
        { name: 'Skin', path: '/concerns/skin' },
        { name: 'Weight Loss', path: '/concerns/weight-loss' },
    ],
    treatments: [
        { name: 'Exclusive', path: '/treatments/aayna-exclusive' },
        { name: 'D\'CosMedis Waterless Medical Pedicure', path: '/treatments/waterless-medical-pedicure' },
        { name: 'ClearLift™ & ClearSkin™', path: '/treatments/clearlift-clearskin' },
        { name: 'EMSculpt®', path: '/treatments/emsculpt' },
        { name: 'Fraxel', path: '/treatments/fraxel' },
        { name: 'HydraFacial In Delhi', path: '/treatments/hydrafacial-delhi' },
        { name: 'Best Dermatologist in Delhi', path: '/best-dermatologist-delhi' },
        { name: 'HydraFacial Treatment In Gurgaon', path: '/treatments/hydrafacial-gurgaon' },
        { name: 'Sensible Fillers, The D\'CosMedis Way', path: '/treatments/sensible-fillers' },
        { name: 'Thermage', path: '/treatments/thermage' },
        { name: 'Others', path: '/treatments/others' },
        { name: 'Laser Hair Removal', path: '/treatments/laser-hair-removal' },
    ],
    navigation: [
        { name: 'About D\'CosMedis', path: '/about' },
        { name: 'Blog', path: '/blog' },
        { name: 'Career', path: '/career' },
        { name: 'News & Media', path: '/news' },
        { name: 'Offers', path: '/offers' },
        { name: 'Online Consultation', path: '/consultation' },
        { name: 'D\'CosMedis Privacy Policy', path: '/privacy-policy' },
        { name: 'D\'CosMedis Refund Policy', path: '/refund-policy' },
        { name: 'Terms & Conditions', path: '/terms-conditions' },
    ],
    contact: [
        { name: 'Safdarjung', phone: '+91 704 229 7304' },
        { name: 'Gurugram', phone: '+91 981 092 7946' },
        { name: 'Khan Market', phone: '+91 987 039 6667' },
        { name: 'Ludhiana', phone: '+91 857 500 6060' },
    ]
}

export default function Footer() {
    const location = useLocation()

    return (
        <footer style={{ background: 'var(--color-bg-dark)' }} className="text-white relative z-10">
            {/* Main Footer */}
            <div className="container mx-auto py-16 md:py-20 lg:py-24 px-5 md:px-6">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">

                    {/* Brand & Disclaimer Column */}
                    <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
                        {/* Logo */}
                        <Link to="/" className="inline-block mb-6 flex flex-col items-center lg:items-start" aria-label="D'CosMedis Clinic - Home">
                            <span
                                className="text-xl md:text-2xl tracking-[4px] md:tracking-[6px] uppercase font-medium"
                                style={{ fontFamily: 'var(--font-display)', color: '#EDE8D0' }}
                            >
                                D'COSMEDIS
                            </span>
                            <span className="mt-1" style={{ color: 'rgba(237, 232, 208, 0.8)', letterSpacing: '2px', fontSize: '0.45rem', textTransform: 'uppercase', fontWeight: 600 }}>
                                SKIN &bull; HAIR &bull; WELLNESS
                            </span>
                        </Link>

                        {/* Social Icons */}
                        <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4 mb-6">
                            <a href="https://www.facebook.com/aaynaclinic/" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:border-wine hover:text-wine hover:bg-wine/10 hover:-translate-y-1 transition-all duration-300">
                                <Facebook size={16} strokeWidth={1.5} />
                            </a>
                            <a href="https://www.instagram.com/dcosmedicsindia/" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:border-wine hover:text-wine hover:bg-wine/10 hover:-translate-y-1 transition-all duration-300">
                                <Instagram size={16} strokeWidth={1.5} />
                            </a>
                            <a href="https://www.youtube.com/channel/UCF4-AP5qfQ_VKyNZjhKfb4Q" target="_blank" rel="noreferrer" aria-label="YouTube" className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:border-wine hover:text-wine hover:bg-wine/10 hover:-translate-y-1 transition-all duration-300">
                                <Youtube size={16} strokeWidth={1.5} />
                            </a>
                            <a href="https://twitter.com/aaynaclinic" target="_blank" rel="noreferrer" aria-label="Twitter" className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:border-wine hover:text-wine hover:bg-wine/10 hover:-translate-y-1 transition-all duration-300">
                                <Twitter size={16} strokeWidth={1.5} />
                            </a>
                        </div>

                        {/* Disclaimer */}
                        <div className="text-[10px] md:text-[11px] leading-relaxed max-w-sm" style={{ fontFamily: 'var(--font-body)', color: 'rgba(237,232,208,0.72)' }}>
                            <strong style={{ color: 'rgba(237,232,208,0.85)', fontWeight: 500 }}>Disclaimer: </strong>
                            Results may vary from person to person based on factors such as age, gender, skin type, skin condition, lifestyle, health history, and other products used. All images shown on this website are for illustrative purposes only.
                        </div>
                    </div>

                    {/* Links Grid - 2 columns on mobile, 4 on desktop */}
                    <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10 lg:gap-y-0">
                        {/* CONCERNS */}
                        <div>
                            <h3 className="font-serif text-sm md:text-base tracking-widest mb-4 md:mb-6" style={{ color: '#EDE8D0', fontSize: '1rem', fontWeight: 500 }}>CONCERNS</h3>
                            <ul className="space-y-3 md:space-y-4">
                                {footerLinks.concerns.map(link => (
                                    <li key={link.name}>
                                        <Link to={link.path} className="hover:text-white text-xs md:text-sm transition-colors duration-300 inline-block" style={{ fontFamily: 'var(--font-body)', color: 'rgba(237,232,208,0.65)' }}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* TREATMENTS */}
                        <div>
                            <h3 className="font-serif text-sm md:text-base tracking-widest mb-4 md:mb-6" style={{ color: '#EDE8D0', fontSize: '1rem', fontWeight: 500 }}>TREATMENTS</h3>
                            <ul className="space-y-3 md:space-y-4">
                                {footerLinks.treatments.map(link => (
                                    <li key={link.name}>
                                        <Link to={link.path} className="hover:text-white text-xs md:text-sm transition-colors duration-300 inline-block" style={{ fontFamily: 'var(--font-body)', color: 'rgba(237,232,208,0.65)' }}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* NAVIGATION */}
                        <div>
                            <h3 className="font-serif text-sm md:text-base tracking-widest mb-4 md:mb-6" style={{ color: '#EDE8D0', fontSize: '1rem', fontWeight: 500 }}>NAVIGATION</h3>
                            <ul className="space-y-3 md:space-y-4">
                                {footerLinks.navigation.map(link => (
                                    <li key={link.name}>
                                        <Link to={link.path} className="hover:text-white text-xs md:text-sm transition-colors duration-300 inline-block" style={{ fontFamily: 'var(--font-body)', color: 'rgba(237,232,208,0.65)' }}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CONTACT */}
                        <div>
                            <h3 className="font-serif text-sm md:text-base tracking-widest mb-4 md:mb-6" style={{ color: '#EDE8D0', fontSize: '1rem', fontWeight: 500 }}>CONTACT</h3>
                            <ul className="space-y-4 md:space-y-5">
                                {footerLinks.contact.map(loc => (
                                    <li key={loc.name}>
                                        <a href={`tel:${loc.phone.replace(/\s+/g, '')}`} className="group flex flex-col items-start hover:text-white transition-colors duration-300" style={{ fontFamily: 'var(--font-body)', color: 'rgba(237,232,208,0.65)' }}>
                                            <span className="text-xs md:text-sm font-medium group-hover:text-white transition-colors duration-300 mb-0.5" style={{ color: 'rgba(237,232,208,0.85)' }}>{loc.name}:</span>
                                            <span className="text-[11px] md:text-xs">{loc.phone}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Strip */}
            <div className="border-t border-[#EDE8D0]/10">
                <div className="container mx-auto px-5 md:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.15em] text-center md:text-left" style={{ fontFamily: 'var(--font-body)', color: 'rgba(237,232,208,0.7)' }}>
                        D'COSMEDIS © {new Date().getFullYear()}
                    </p>
                    <p className="text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.15em] text-center md:text-right" style={{ fontFamily: 'var(--font-body)', color: 'rgba(237,232,208,0.7)' }}>
                        WEBSITE BY UNHIDE
                    </p>
                </div>
            </div>

            <style>{`
                .text-wine { color: var(--color-wine); }
                .border-wine { border-color: var(--color-wine); }
                .hover\\:border-wine:hover { border-color: var(--color-wine); }
                .hover\\:text-wine:hover { color: var(--color-wine); }
                .hover\\:text-white:hover { color: #ffffff !important; }
                .group-hover\\:text-wine { color: var(--color-wine); }
                .group-hover\\:text-white { color: #ffffff !important; }
                .hover\\:bg-wine\\/10:hover { background-color: rgba(90, 38, 44, 0.1); }
                .hover\\:pl-1:hover { padding-left: 0.25rem; }
            `}</style>
        </footer>
    )
}
