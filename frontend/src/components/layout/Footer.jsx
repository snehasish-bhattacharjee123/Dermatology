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
    const isHomePage = location.pathname === '/'

    return (
        <footer style={{ background: 'var(--color-bg-dark)' }} className="text-white relative z-10">
            {/* CTA Strip */}
            {/* {!isHomePage && (
                <div
                    className="py-10 md:py-16"
                    style={{ background: 'var(--color-wine)' }}
                >
                <div className="container mx-auto text-center px-4 md:px-6">
                    <RevealWrapper>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white mb-3 md:mb-4">
                            Ready to Begin Your Skin Journey?
                        </h2>
                        <p
                            className="text-xs md:text-sm lg:text-base mb-6 md:mb-8 max-w-xl mx-auto font-normal opacity-90"
                            style={{ color: 'var(--color-accent)' }}
                        >
                            Book a consultation with our expert dermatologists and discover treatments tailored to your unique needs.
                        </p>
                        <Link
                            to="/book"
                            className="inline-flex hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-bold tracking-[2px] text-[10px] md:text-xs uppercase items-center gap-2"
                            style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-wine)', padding: '0.8rem 1.5rem', borderRadius: '4px' }}
                        >
                            Book Your Consultation <ArrowUpRight size={16} />
                        </Link>
                    </RevealWrapper>
                </div>
                </div>
            )} */}

            {/* Main Footer */}
            <div className="container mx-auto py-12 lg:py-16 px-5 md:px-6">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">

                    {/* Brand & Disclaimer Column */}
                    <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
                        {/* Logo */}
                        <Link to="/" className="inline-block mb-6 flex flex-col items-center lg:items-start" aria-label="D'CosMedis Clinic - Home">
                            <span
                                className="text-xl md:text-2xl tracking-[4px] md:tracking-[6px] uppercase font-medium"
                                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-accent)' }}
                            >
                                D'COSMEDIS
                            </span>
                            <span className="mt-1" style={{ color: 'rgba(205, 191, 204, 0.6)', letterSpacing: '2px', fontSize: '0.45rem', textTransform: 'uppercase', fontWeight: 600 }}>
                                SKIN &bull; HAIR &bull; WELLNESS
                            </span>
                        </Link>

                        {/* Social Icons */}
                        <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4 mb-6">
                            <a href="https://www.facebook.com/aaynaclinic/" target="_blank" rel="noreferrer" className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:border-wine hover:text-wine hover:bg-wine/10 hover:-translate-y-1 transition-all duration-300">
                                <Facebook size={16} strokeWidth={1.5} />
                            </a>
                            <a href="https://www.instagram.com/aaynaclinic_official/" target="_blank" rel="noreferrer" className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:border-wine hover:text-wine hover:bg-wine/10 hover:-translate-y-1 transition-all duration-300">
                                <Instagram size={16} strokeWidth={1.5} />
                            </a>
                            <a href="https://www.youtube.com/channel/UCF4-AP5qfQ_VKyNZjhKfb4Q" target="_blank" rel="noreferrer" className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:border-wine hover:text-wine hover:bg-wine/10 hover:-translate-y-1 transition-all duration-300">
                                <Youtube size={16} strokeWidth={1.5} />
                            </a>
                            <a href="https://twitter.com/aaynaclinic" target="_blank" rel="noreferrer" className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:border-wine hover:text-wine hover:bg-wine/10 hover:-translate-y-1 transition-all duration-300">
                                <Twitter size={16} strokeWidth={1.5} />
                            </a>
                        </div>

                        {/* Disclaimer */}
                        <div className="text-white/50 text-[10px] md:text-[11px] leading-relaxed max-w-sm" style={{ fontFamily: 'var(--font-body)' }}>
                            <strong className="text-white/70 font-medium">Disclaimer: </strong>
                            Results may vary from person to person based on factors such as age, gender, skin type, skin condition, lifestyle, health history, and other products used. All images shown on this website are for illustrative purposes only.
                        </div>
                    </div>

                    {/* Links Grid - 2 columns on mobile, 4 on desktop */}
                    <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10 lg:gap-y-0">
                        {/* CONCERNS */}
                        <div>
                            <h4 className="text-white font-serif text-sm md:text-base tracking-widest mb-4 md:mb-6" style={{ color: 'white' }}>CONCERNS</h4>
                            <ul className="space-y-3 md:space-y-4">
                                {footerLinks.concerns.map(link => (
                                    <li key={link.name}>
                                        <Link to={link.path} className="text-white hover:text-wine text-xs md:text-sm transition-colors duration-300 inline-block" style={{ fontFamily: 'var(--font-body)' }}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* TREATMENTS */}
                        <div>
                            <h4 className="text-white font-serif text-sm md:text-base tracking-widest mb-4 md:mb-6" style={{ color: 'white' }}>TREATMENTS</h4>
                            <ul className="space-y-3 md:space-y-4">
                                {footerLinks.treatments.map(link => (
                                    <li key={link.name}>
                                        <Link to={link.path} className="text-white hover:text-wine text-xs md:text-sm transition-colors duration-300 inline-block" style={{ fontFamily: 'var(--font-body)' }}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* NAVIGATION */}
                        <div>
                            <h4 className="text-white font-serif text-sm md:text-base tracking-widest mb-4 md:mb-6" style={{ color: 'white' }}>NAVIGATION</h4>
                            <ul className="space-y-3 md:space-y-4">
                                {footerLinks.navigation.map(link => (
                                    <li key={link.name}>
                                        <Link to={link.path} className="text-white hover:text-wine text-xs md:text-sm transition-colors duration-300 inline-block" style={{ fontFamily: 'var(--font-body)' }}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CONTACT */}
                        <div>
                            <h4 className="text-white font-serif text-sm md:text-base tracking-widest mb-4 md:mb-6" style={{ color: 'white' }}>CONTACT</h4>
                            <ul className="space-y-4 md:space-y-5">
                                {footerLinks.contact.map(loc => (
                                    <li key={loc.name}>
                                        <a href={`tel:${loc.phone.replace(/\\s+/g, '')}`} className="group flex flex-col items-start text-white hover:text-wine transition-colors duration-300" style={{ fontFamily: 'var(--font-body)' }}>
                                            <span className="text-xs md:text-sm font-medium text-white group-hover:text-wine transition-colors duration-300 mb-0.5">{loc.name}:</span>
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
            <div className="border-t border-white/10">
                <div className="container mx-auto px-5 md:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-[9px] md:text-[10px] text-white/40 font-semibold uppercase tracking-[0.15em] text-center md:text-left" style={{ fontFamily: 'var(--font-body)' }}>
                        D'COSMEDIS © {new Date().getFullYear()}
                    </p>
                    <p className="text-[9px] md:text-[10px] text-white/40 font-semibold uppercase tracking-[0.15em] text-center md:text-right" style={{ fontFamily: 'var(--font-body)' }}>
                        WEBSITE BY UNHIDE
                    </p>
                </div>
            </div>

            <style>{`
                .text-wine { color: var(--color-wine); }
                .border-wine { border-color: var(--color-wine); }
                .hover\\:border-wine:hover { border-color: var(--color-wine); }
                .hover\\:text-wine:hover { color: var(--color-wine); }
                .group-hover\\:text-wine { color: var(--color-wine); }
                .hover\\:bg-wine\\/10:hover { background-color: rgba(86, 58, 86, 0.1); }
                .hover\\:pl-1:hover { padding-left: 0.25rem; }
            `}</style>
        </footer>
    )
}
