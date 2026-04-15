import { Link } from 'react-router-dom'
import { Instagram, Facebook, Youtube, Twitter, ArrowUpRight } from 'lucide-react'
import { Heading, Text, Caption } from '../ui/Typography'
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
    return (
        <footer style={{ background: 'var(--color-bg-dark)' }} className="text-white relative z-10">
            {/* CTA Strip */}
            <div
                className="py-16 lg:py-20"
                style={{ background: 'var(--color-wine)' }}
            >
                <div className="container mx-auto text-center px-6">
                    <RevealWrapper>
                        <Heading
                            variant="section-white"
                            className="mb-4"
                            style={{ color: '#ffffff' }}
                        >
                            Ready to Begin Your Skin Journey?
                        </Heading>
                        <Text
                            size="md"
                            className="mb-8 max-w-xl mx-auto font-normal opacity-100"
                            style={{ color: 'var(--color-accent)' }}
                        >
                            Book a consultation with our expert dermatologists and discover treatments tailored to your unique needs.
                        </Text>
                        <Link
                            to="/book"
                            className="btn inline-flex hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl font-bold tracking-[2px] text-xs uppercase items-center gap-2"
                            style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-wine)', padding: '1rem 2.5rem', borderRadius: '4px' }}
                        >
                            Book Your Consultation <ArrowUpRight size={16} />
                        </Link>
                    </RevealWrapper>
                </div>
            </div>

            {/* Main Footer */}
            <div className="container mx-auto py-16 lg:py-20 px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

                    {/* Brand & Disclaimer Column */}
                    <div className="lg:col-span-4 lg:pr-8">
                        {/* Logo */}
                        <Link to="/" className="inline-block mb-8 flex flex-col" aria-label="D'CosMedis Clinic - Home">
                            <span
                                className="text-2xl tracking-[6px] uppercase font-medium"
                                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-accent)' }}
                            >
                                D'COSMEDIS
                            </span>
                            <Caption variant="caption" style={{ color: 'rgba(205, 191, 204, 0.55)', letterSpacing: '3px', fontSize: '0.5rem', textTransform: 'uppercase', fontWeight: 600 }}>
                                SKIN &bull; HAIR &bull; WELLNESS
                            </Caption>
                        </Link>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 mb-8">
                            <a href="https://www.facebook.com/aaynaclinic/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:border-wine hover:text-wine hover:bg-wine/10 hover:-translate-y-1 transition-all duration-300">
                                <Facebook size={18} strokeWidth={1.5} />
                            </a>
                            <a href="https://www.instagram.com/aaynaclinic_official/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:border-wine hover:text-wine hover:bg-wine/10 hover:-translate-y-1 transition-all duration-300">
                                <Instagram size={18} strokeWidth={1.5} />
                            </a>
                            <a href="https://www.youtube.com/channel/UCF4-AP5qfQ_VKyNZjhKfb4Q" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:border-wine hover:text-wine hover:bg-wine/10 hover:-translate-y-1 transition-all duration-300">
                                <Youtube size={18} strokeWidth={1.5} />
                            </a>
                            <a href="https://twitter.com/aaynaclinic" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:border-wine hover:text-wine hover:bg-wine/10 hover:-translate-y-1 transition-all duration-300">
                                <Twitter size={18} strokeWidth={1.5} />
                            </a>
                        </div>

                        {/* Disclaimer */}
                        <div className="text-white/50 text-xs leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                            <strong className="text-white font-medium">Disclaimer: </strong>
                            Results may vary from person to person based on factors such as age, gender, skin type, skin condition, lifestyle, health history, and other products used. All images shown on this website are for illustrative purposes only. D'CosMedis, a brand of Dr. Dolly Gupta Skincare Pvt Ltd., does not guarantee identical results for every individual.
                        </div>
                    </div>

                    {/* CONCERNS */}
                    <div className="lg:col-span-2">
                        <Caption variant="overline-white" className="mb-6 block">
                            CONCERNS
                        </Caption>
                        <ul className="space-y-4">
                            {footerLinks.concerns.map(link => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-white/60 hover:text-wine text-sm transition-all duration-300 hover:pl-1 inline-block" style={{ fontFamily: 'var(--font-body)' }}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* TREATMENTS */}
                    <div className="lg:col-span-2">
                        <Caption variant="overline-white" className="mb-6 block">
                            TREATMENTS
                        </Caption>
                        <ul className="space-y-4">
                            {footerLinks.treatments.map(link => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-white/60 hover:text-wine text-sm transition-all duration-300 hover:pl-1 inline-block" style={{ fontFamily: 'var(--font-body)' }}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* NAVIGATION */}
                    <div className="lg:col-span-2">
                        <Caption variant="overline-white" className="mb-6 block">
                            NAVIGATION
                        </Caption>
                        <ul className="space-y-4">
                            {footerLinks.navigation.map(link => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-white/60 hover:text-wine text-sm transition-all duration-300 hover:pl-1 inline-block" style={{ fontFamily: 'var(--font-body)' }}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div className="lg:col-span-2">
                        <Caption variant="overline-white" className="mb-6 block">
                            CONTACT
                        </Caption>
                        <ul className="space-y-6">
                            {footerLinks.contact.map(loc => (
                                <li key={loc.name}>
                                    <a href={`tel:${loc.phone.replace(/\s+/g, '')}`} className="group flex flex-col items-start text-white/50 hover:text-wine transition-colors duration-300" style={{ fontFamily: 'var(--font-body)' }}>
                                        <span className="text-sm font-medium text-white group-hover:text-wine transition-colors duration-300 mb-1">{loc.name}:</span>
                                        <span className="text-sm">{loc.phone}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright Strip */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-white/50 font-semibold uppercase tracking-[0.15em] mb-2 md:mb-0" style={{ fontFamily: 'var(--font-body)' }}>
                        D'COSMEDIS © {new Date().getFullYear()}
                    </p>
                    <p className="text-xs text-white/50 font-semibold uppercase tracking-[0.15em]" style={{ fontFamily: 'var(--font-body)' }}>
                        WEBSITE BY UNHIDE
                    </p>
                </div>
            </div>

            <style>{`
                .text-wine {
                    color: var(--color-wine);
                }
                .border-wine {
                    border-color: var(--color-wine);
                }
                .hover\\:border-wine:hover {
                    border-color: var(--color-wine);
                }
                .hover\\:text-wine:hover {
                    color: var(--color-wine);
                }
                .group-hover\\:text-wine {
                    color: var(--color-wine);
                }
                .hover\\:bg-wine\\/10:hover {
                    background-color: rgba(86, 58, 86, 0.1);
                }
                .hover\\:pl-1:hover {
                    padding-left: 0.25rem;
                }
            `}</style>
        </footer>
    )
}
