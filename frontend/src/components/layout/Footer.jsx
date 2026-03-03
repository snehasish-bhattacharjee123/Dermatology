import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube, ArrowUpRight } from 'lucide-react'

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
            {/* CTA Strip */}
            <div style={{ background: 'var(--color-gold)' }} className="py-16">
                <div className="container text-center">
                    <h2 className="text-white mb-4" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                        Ready to Begin Your Skin Journey?
                    </h2>
                    <p className="text-white/80 mb-8 max-w-lg mx-auto">
                        Book a consultation with our expert dermatologists and discover treatments tailored to your unique needs.
                    </p>
                    <Link to="/book" className="btn btn-white">
                        Book Your Consultation <ArrowUpRight size={16} />
                    </Link>
                </div>
            </div>

            {/* Main Footer */}
            <div className="container py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="inline-block mb-6">
                            <span
                                className="text-3xl tracking-[8px] uppercase text-white"
                                style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}
                            >
                                AAYNA
                            </span>
                            <br />
                            <span className="text-[10px] tracking-[3px] uppercase text-white/50">Advanced Aesthetics</span>
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
                            AAYNA Clinic is one of Delhi's leading dermatology and aesthetics centers, offering world-class
                            skin, hair, and anti-aging treatments with cutting-edge technology.
                        </p>
                        <div className="flex items-center gap-4">
                            {[Instagram, Facebook, Youtube].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 transition-all duration-300 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] hover:scale-110"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Concerns */}
                    <div>
                        <h4 className="text-white text-sm tracking-[2px] uppercase mb-6" style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                            Concerns
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.concerns.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-white/50 text-sm hover:text-[var(--color-gold)] transition-colors duration-300 hover:pl-1"
                                        style={{ display: 'inline-block', transition: 'all 0.3s' }}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Treatments */}
                    <div>
                        <h4 className="text-white text-sm tracking-[2px] uppercase mb-6" style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                            Treatments
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.treatments.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-white/50 text-sm hover:text-[var(--color-gold)] transition-colors duration-300 hover:pl-1"
                                        style={{ display: 'inline-block', transition: 'all 0.3s' }}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white text-sm tracking-[2px] uppercase mb-6" style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                            Contact
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-white/50 text-sm">
                                <Phone size={14} className="mt-1 shrink-0" style={{ color: 'var(--color-gold)' }} />
                                <span>+91 11 2634 7890</span>
                            </li>
                            <li className="flex items-start gap-3 text-white/50 text-sm">
                                <Mail size={14} className="mt-1 shrink-0" style={{ color: 'var(--color-gold)' }} />
                                <span>info@aaynaclinic.com</span>
                            </li>
                            <li className="flex items-start gap-3 text-white/50 text-sm">
                                <Clock size={14} className="mt-1 shrink-0" style={{ color: 'var(--color-gold)' }} />
                                <span>Mon – Sat: 10 AM – 7 PM</span>
                            </li>
                            <li className="flex items-start gap-3 text-white/50 text-sm">
                                <MapPin size={14} className="mt-1 shrink-0" style={{ color: 'var(--color-gold)' }} />
                                <span>SDA, Khan Market, Gurugram, Ludhiana</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Locations Strip */}
                <div className="mt-16 pt-8 border-t border-white/10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {locations.map((loc) => (
                            <div key={loc.name} className="flex items-start gap-3">
                                <MapPin size={14} className="mt-1 shrink-0" style={{ color: 'var(--color-gold)' }} />
                                <div>
                                    <p className="text-white text-sm font-medium">{loc.name}</p>
                                    <p className="text-white/40 text-xs">{loc.address}</p>
                                    <a href={`tel:${loc.phone}`} className="text-white/40 text-xs hover:text-[var(--color-gold)]">{loc.phone}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/30 text-xs">© 2026 AAYNA Clinic. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-white/30 text-xs hover:text-white/60">Privacy Policy</a>
                        <a href="#" className="text-white/30 text-xs hover:text-white/60">Terms of Service</a>
                        <a href="#" className="text-white/30 text-xs hover:text-white/60">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
