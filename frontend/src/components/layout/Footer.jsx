import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube, ArrowUpRight } from 'lucide-react'
import { Heading, Text, Caption } from '../ui/Typography'

const footerLinks = {
    concerns: [
        { name: 'Active Acne', path: '/concerns/active-acne' },
        { name: 'Pigmentation', path: '/concerns/pigmentation' },
        { name: 'Anti-Aging', path: '/concerns/anti-aging' },
        { name: 'Hair Loss', path: '/concerns/hair-loss' },
        { name: 'Dark Circles', path: '/concerns/dark-circles' },
        { name: 'Dull Skin', path: '/concerns/dull-skin' },
    ],
    treatments: [
        { name: 'Glass Skin Facial', path: '/treatments/glass-skin-facial' },
        { name: 'Laser Hair Removal', path: '/treatments/laser-hair-removal' },
        { name: 'Chemical Peels', path: '/treatments/chemical-peels' },
        { name: 'Anti-Aging Therapy', path: '/treatments/anti-aging-therapy' },
        { name: 'HydraFacial', path: '/treatments/hydrafacial' },
        { name: 'PRP Treatment', path: '/treatments/prp-treatment' },
    ],
    navigation: [
        { name: 'About AAYNA', path: '/about' },
        { name: 'Our Gallery', path: '/gallery' },
        { name: 'Locations', path: '/locations' },
        { name: 'Book Appointment', path: '/book' },
        { name: 'Contact Us', path: '/contact' },
    ],
}

const locations = [
    { name: 'AAYNA SDA', address: 'SDA Market, New Delhi', phone: '+91 11 2634 7890' },
    { name: 'AAYNA Khan Market', address: 'Khan Market, New Delhi', phone: '+91 11 2634 7891' },
    { name: 'AAYNA Gurugram', address: 'Sector 28, Gurugram', phone: '+91 124 234 5678' },
    { name: 'AAYNA Ludhiana', address: 'Sarabha Nagar, Ludhiana', phone: '+91 161 234 5678' },
]

export default function Footer() {
    return (
        <footer style={{ background: 'var(--color-bg-dark)' }}>
            {/* CTA Strip - Refined */}
            <div 
                className="py-16 lg:py-20"
                style={{ background: 'var(--color-gold)' }}
            >
                <div className="container text-center px-6">
                    <Heading
                        variant="section-white"
                        className="mb-4 text-white"
                    >
                        Ready to Begin Your Skin Journey?
                    </Heading>
                    <Text 
                        size="md" 
                        color="white" 
                        className="text-white/80 mb-8 max-w-xl mx-auto"
                    >
                        Book a consultation with our expert dermatologists and discover treatments tailored to your unique needs.
                    </Text>
                    <Link 
                        to="/book" 
                        className="btn btn-dark inline-flex"
                    >
                        Book Your Consultation <ArrowUpRight size={16} />
                    </Link>
                </div>
            </div>

            {/* Main Footer - Improved Spacing */}
            <div className="container py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
                    {/* Brand Column - Wider */}
                    <div className="lg:col-span-4">
                        <Link to="/" className="inline-block mb-6" aria-label="AAYNA Clinic - Home">
                            <span 
                                className="text-3xl tracking-[8px] uppercase font-medium block text-white"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                AAYNA
                            </span>
                            <Caption variant="caption-white" className="opacity-50 mt-1">
                                Advanced Aesthetics
                            </Caption>
                        </Link>
                        <Text size="sm" color="white" className="text-white/50 mb-6 max-w-sm leading-relaxed">
                            AAYNA Clinic is one of Delhi's leading dermatology and aesthetics centers, offering world-class
                            skin, hair, and anti-aging treatments with cutting-edge technology.
                        </Text>
                        <div className="flex items-center gap-3">
                            {[Instagram, Facebook, Youtube].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 transition-all duration-300 hover:border-gold hover:text-gold hover:scale-110 hover:bg-gold/10"
                                    aria-label={`Follow us on ${Icon.name}`}
                                >
                                    <Icon size={18} strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Concerns */}
                    <div className="lg:col-span-2">
                        <Caption variant="overline-white" className="mb-5">
                            Concerns
                        </Caption>
                        <ul className="space-y-3">
                            {footerLinks.concerns.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-white/50 text-sm hover:text-gold transition-all duration-300 hover:pl-1 inline-block"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Treatments */}
                    <div className="lg:col-span-2">
                        <Caption variant="overline-white" className="mb-5">
                            Treatments
                        </Caption>
                        <ul className="space-y-3">
                            {footerLinks.treatments.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-white/50 text-sm hover:text-gold transition-all duration-300 hover:pl-1 inline-block"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <Caption variant="overline-white" className="mb-5">
                            Quick Links
                        </Caption>
                        <ul className="space-y-3">
                            {footerLinks.navigation.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-white/50 text-sm hover:text-gold transition-all duration-300 hover:pl-1 inline-block"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-2">
                        <Caption variant="overline-white" className="mb-5">
                            Contact
                        </Caption>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-white/50 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                                <Phone size={16} className="mt-0.5 shrink-0 text-gold" strokeWidth={1.5} />
                                <span>+91 11 2634 7890</span>
                            </li>
                            <li className="flex items-start gap-3 text-white/50 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                                <Mail size={16} className="mt-0.5 shrink-0 text-gold" strokeWidth={1.5} />
                                <span>info@aaynaclinic.com</span>
                            </li>
                            <li className="flex items-start gap-3 text-white/50 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                                <Clock size={16} className="mt-0.5 shrink-0 text-gold" strokeWidth={1.5} />
                                <span>Mon – Sat: 10 AM – 7 PM</span>
                            </li>
                            <li className="flex items-start gap-3 text-white/50 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" strokeWidth={1.5} />
                                <span>Delhi, Gurugram, Ludhiana</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Locations Strip - Improved Grid */}
                <div className="mt-16 pt-10 border-t border-white/10">
                    <Caption variant="overline-white" className="mb-6 opacity-60">
                        Our Locations
                    </Caption>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {locations.map((loc) => (
                            <div key={loc.name} className="flex items-start gap-3">
                                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" strokeWidth={1.5} />
                                <div>
                                    <Text size="sm" className="text-white font-medium">
                                        {loc.name}
                                    </Text>
                                    <Caption variant="caption-white" className="opacity-40 mt-0.5">
                                        {loc.address}
                                    </Caption>
                                    <a
                                        href={`tel:${loc.phone}`}
                                        className="text-xs hover:text-gold transition-colors opacity-40 hover:opacity-100"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        {loc.phone}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar - Refined */}
            <div className="border-t border-white/10">
                <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <Caption variant="caption-white" className="opacity-30 text-center md:text-left">
                        © 2026 AAYNA Clinic. All rights reserved.
                    </Caption>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                            Privacy Policy
                        </a>
                        <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                            Terms of Service
                        </a>
                        <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                            Sitemap
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
                .text-gold {
                    color: var(--color-gold);
                }
                .border-gold {
                    border-color: var(--color-gold);
                }
                .hover\:border-gold:hover {
                    border-color: var(--color-gold);
                }
                .hover\:text-gold:hover {
                    color: var(--color-gold);
                }
                .hover\:bg-gold\/10:hover {
                    background-color: rgba(248, 184, 78, 0.1);
                }
                .hover\:pl-1:hover {
                    padding-left: 0.25rem;
                }
            `}</style>
        </footer>
    )
}
