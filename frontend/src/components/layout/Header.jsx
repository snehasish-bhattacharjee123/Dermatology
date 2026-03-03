import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
        name: 'Concerns',
        path: '/concerns',
        dropdown: [
            { name: 'Active Acne', path: '/concerns/active-acne' },
            { name: 'Pigmentation', path: '/concerns/pigmentation' },
            { name: 'Anti-Aging', path: '/concerns/anti-aging' },
            { name: 'Hair Loss', path: '/concerns/hair-loss' },
            { name: 'Dark Circles', path: '/concerns/dark-circles' },
            { name: 'View All', path: '/concerns' },
        ],
    },
    {
        name: 'Treatments',
        path: '/treatments',
        dropdown: [
            { name: 'Glass Skin Facial', path: '/treatments/glass-skin-facial' },
            { name: 'Laser Hair Removal', path: '/treatments/laser-hair-removal' },
            { name: 'Chemical Peels', path: '/treatments/chemical-peels' },
            { name: 'Anti-Aging Therapy', path: '/treatments/anti-aging-therapy' },
            { name: 'View All', path: '/treatments' },
        ],
    },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Locations', path: '/locations' },
    { name: 'Contact', path: '/contact' },
]

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsMobileOpen(false)
        setActiveDropdown(null)
    }, [location])

    return (
        <>
            {/* Top Bar */}
            <div
                className="fixed top-0 left-0 w-full z-[1001] transition-all duration-500"
                style={{
                    background: isScrolled ? 'var(--color-gold)' : 'var(--color-gold)',
                    height: isScrolled ? '0px' : '40px',
                    overflow: 'hidden',
                    opacity: isScrolled ? 0 : 1,
                }}
            >
                <div className="container h-full flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <a href="tel:+911234567890" className="flex items-center gap-2 text-white text-xs tracking-wide">
                            <Phone size={12} /> +91 123 456 7890
                        </a>
                        <span className="text-white/60 text-xs hidden md:inline">|</span>
                        <span className="text-white text-xs tracking-wide hidden md:inline">Mon – Sat: 10 AM – 7 PM</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-white text-xs tracking-widest uppercase hidden sm:inline">Delhi • Gurugram • Ludhiana</span>
                    </div>
                </div>
            </div>

            {/* Main Nav */}
            <header
                className="fixed left-0 w-full z-[1000] transition-all duration-500"
                style={{
                    top: isScrolled ? '0px' : '40px',
                    background: isScrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.08)' : 'none',
                }}
            >
                <div className="container flex items-center justify-between" style={{ height: isScrolled ? '70px' : '80px', transition: 'height 0.5s' }}>
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <div className="flex flex-col">
                            <span
                                className="text-2xl tracking-[6px] uppercase"
                                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-dark)', fontWeight: 500 }}
                            >
                                AAYNA
                            </span>
                            <span className="text-[9px] tracking-[3px] uppercase" style={{ color: 'var(--color-text-muted)' }}>
                                Advanced Aesthetics
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group"
                                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    to={link.path}
                                    className="flex items-center gap-1 px-4 py-2 text-[13px] font-medium tracking-[1.5px] uppercase transition-colors duration-300"
                                    style={{
                                        color: location.pathname === link.path ? 'var(--color-gold)' : 'var(--color-dark)',
                                    }}
                                >
                                    {link.name}
                                    {link.dropdown && <ChevronDown size={12} className="transition-transform duration-300 group-hover:rotate-180" />}
                                </Link>

                                {link.dropdown && activeDropdown === link.name && (
                                    <div
                                        className="absolute top-full left-0 min-w-[240px] bg-white shadow-2xl border-t-2 py-3 animate-fadeIn"
                                        style={{ borderColor: 'var(--color-gold)' }}
                                    >
                                        {link.dropdown.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.path}
                                                className="block px-6 py-3 text-sm transition-all duration-200 hover:pl-8"
                                                style={{ color: 'var(--color-text-muted)' }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = 'var(--color-gold)'
                                                    e.target.style.background = 'var(--color-bg-cream)'
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = 'var(--color-text-muted)'
                                                    e.target.style.background = 'transparent'
                                                }}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA + Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <Link to="/book" className="btn btn-primary hidden md:inline-flex" style={{ padding: '12px 24px', fontSize: '11px' }}>
                            Book Appointment
                        </Link>
                        <button
                            className="lg:hidden p-2"
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <div
                className="fixed inset-0 z-[999] transition-all duration-500 lg:hidden"
                style={{
                    opacity: isMobileOpen ? 1 : 0,
                    pointerEvents: isMobileOpen ? 'all' : 'none',
                }}
            >
                <div className="absolute inset-0 bg-black/40" onClick={() => setIsMobileOpen(false)} />
                <div
                    className="absolute right-0 top-0 h-full w-[85%] max-w-[380px] bg-white shadow-2xl overflow-y-auto transition-transform duration-500"
                    style={{ transform: isMobileOpen ? 'translateX(0)' : 'translateX(100%)' }}
                >
                    <div className="p-8 pt-24">
                        <nav className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="block py-3 text-lg tracking-wide border-b"
                                        style={{
                                            fontFamily: 'var(--font-heading)',
                                            color: location.pathname === link.path ? 'var(--color-gold)' : 'var(--color-dark)',
                                            borderColor: 'var(--color-border)',
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                    {link.dropdown && (
                                        <div className="pl-4 pb-2">
                                            {link.dropdown.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.path}
                                                    className="block py-2 text-sm"
                                                    style={{ color: 'var(--color-text-muted)' }}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>
                        <Link to="/book" className="btn btn-primary w-full mt-8">
                            Book Appointment
                        </Link>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s var(--ease-out-expo) forwards;
        }
      `}</style>
        </>
    )
}
