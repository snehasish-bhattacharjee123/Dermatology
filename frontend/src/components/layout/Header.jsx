import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { Caption } from '../ui/Typography'

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
            {/* Top Bar - Refined */}
            <div
                className="fixed top-0 left-0 w-full z-[1001] transition-all duration-500"
                style={{
                    background: 'var(--color-gold)',
                    height: isScrolled ? '0px' : 'var(--header-top-bar-height)',
                    overflow: 'hidden',
                    opacity: isScrolled ? 0 : 1,
                }}
            >
                <div className="container h-full flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <a 
                            href="tel:+911234567890" 
                            className="flex items-center gap-2 text-white tracking-wide text-xs font-medium hover:text-white/80 transition-colors"
                        >
                            <Phone size={12} strokeWidth={2.5} /> 
                            <span>+91 11 2634 7890</span>
                        </a>
                        <span className="text-white/50 text-xs hidden md:inline" aria-hidden="true">|</span>
                        <Caption variant="label-white" className="hidden md:inline opacity-90">
                            Mon – Sat: 10 AM – 7 PM
                        </Caption>
                    </div>
                    <div className="flex items-center gap-4">
                        <Caption variant="badge" className="hidden sm:inline-flex bg-white/20 text-white border-0">
                            Delhi • Gurugram • Ludhiana
                        </Caption>
                    </div>
                </div>
            </div>

            {/* Main Nav - Refined */}
            <header
                className="fixed left-0 w-full z-[1000] transition-all duration-500"
                style={{
                    top: isScrolled ? '0px' : 'var(--header-top-bar-height)',
                    background: isScrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.08)' : 'none',
                }}
            >
                <div 
                    className="container flex items-center justify-between transition-all duration-500" 
                    style={{ height: isScrolled ? 'var(--header-height-scrolled)' : 'var(--header-height)' }}
                >
                    {/* Logo - Improved */}
                    <Link to="/" className="flex items-center gap-3" aria-label="AAYNA Clinic - Home">
                        <div className="flex flex-col">
                            <span 
                                className="text-2xl tracking-[6px] uppercase font-medium"
                                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-dark)' }}
                            >
                                AAYNA
                            </span>
                            <Caption variant="caption" className="text-text-light tracking-wider">
                                Advanced Aesthetics
                            </Caption>
                        </div>
                    </Link>

                    {/* Desktop Nav - Refined spacing */}
                    <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group"
                                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    to={link.path}
                                    className={`flex items-center gap-1.5 px-4 py-2 font-medium tracking-wider uppercase transition-all duration-300 text-sm rounded-md hover:bg-cream ${
                                        location.pathname === link.path 
                                            ? 'text-gold' 
                                            : 'text-dark hover:text-gold'
                                    }`}
                                    style={{ fontFamily: 'var(--font-body)' }}
                                    aria-current={location.pathname === link.path ? 'page' : undefined}
                                    aria-haspopup={link.dropdown ? 'true' : undefined}
                                    aria-expanded={link.dropdown && activeDropdown === link.name ? 'true' : 'false'}
                                >
                                    {link.name}
                                    {link.dropdown && (
                                        <ChevronDown 
                                            size={14} 
                                            className="transition-transform duration-300 group-hover:rotate-180" 
                                            aria-hidden="true"
                                        />
                                    )}
                                </Link>

                                {/* Improved Dropdown Menu */}
                                {link.dropdown && activeDropdown === link.name && (
                                    <div
                                        className="absolute top-full left-0 min-w-[260px] py-2 animate-fadeIn"
                                        style={{
                                            background: 'rgba(255,255,255,0.98)',
                                            backdropFilter: 'blur(12px)',
                                            borderRadius: '12px',
                                            boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)',
                                            marginTop: '8px',
                                        }}
                                        role="menu"
                                    >
                                        {/* Dropdown arrow */}
                                        <div 
                                            className="absolute -top-1.5 left-8 w-3 h-3 bg-white rotate-45"
                                            style={{ 
                                                borderLeft: '1px solid rgba(0,0,0,0.05)',
                                                borderTop: '1px solid rgba(0,0,0,0.05)'
                                            }}
                                        />
                                        <div className="relative">
                                            {link.dropdown.map((item, index) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.path}
                                                    className={`block px-5 py-3 text-sm transition-all duration-200 hover:pl-6 hover:text-gold ${
                                                        index !== link.dropdown.length - 1 
                                                            ? 'border-b border-border/30' 
                                                            : ''
                                                    } ${location.pathname === item.path ? 'text-gold font-medium' : 'text-muted'}`}
                                                    style={{ fontFamily: 'var(--font-body)' }}
                                                    role="menuitem"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA + Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <Link 
                            to="/book" 
                            className="btn btn-primary hidden md:inline-flex"
                        >
                            Book Appointment
                        </Link>
                        <button
                            className="lg:hidden p-2 hover:bg-cream rounded-lg transition-colors"
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isMobileOpen}
                            aria-controls="mobile-menu"
                        >
                            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu - Improved */}
            <div
                id="mobile-menu"
                className="fixed inset-0 z-[999] transition-all duration-500 lg:hidden"
                style={{
                    opacity: isMobileOpen ? 1 : 0,
                    pointerEvents: isMobileOpen ? 'all' : 'none',
                }}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation menu"
            >
                <div 
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
                    onClick={() => setIsMobileOpen(false)}
                    aria-hidden="true"
                />
                <div
                    className="absolute right-0 top-0 h-full w-[85%] max-w-[380px] overflow-y-auto transition-transform duration-500"
                    style={{ 
                        transform: isMobileOpen ? 'translateX(0)' : 'translateX(100%)',
                        background: 'rgba(255,255,255,0.98)',
                        backdropFilter: 'blur(20px)',
                    }}
                >
                    <div className="p-6 pt-24">
                        <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                            {navLinks.map((link) => (
                                <div key={link.name} className="border-b border-border/30 last:border-0">
                                    <Link
                                        to={link.path}
                                        className={`block py-4 text-lg tracking-wide font-medium transition-colors ${
                                            location.pathname === link.path 
                                                ? 'text-gold' 
                                                : 'text-dark hover:text-gold'
                                        }`}
                                        style={{ fontFamily: 'var(--font-display)' }}
                                        aria-current={location.pathname === link.path ? 'page' : undefined}
                                    >
                                        {link.name}
                                    </Link>
                                    {link.dropdown && (
                                        <div className="pl-4 pb-3 space-y-1">
                                            {link.dropdown.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.path}
                                                    className={`block py-2 text-sm transition-colors hover:text-gold ${
                                                        location.pathname === item.path 
                                                            ? 'text-gold font-medium' 
                                                            : 'text-muted'
                                                    }`}
                                                    style={{ fontFamily: 'var(--font-body)' }}
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
                    from { 
                        opacity: 0; 
                        transform: translateY(-8px) scale(0.98); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0) scale(1); 
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.25s var(--ease-out-expo) forwards;
                }
                .text-gold {
                    color: var(--color-gold);
                }
                .text-dark {
                    color: var(--color-dark);
                }
                .text-muted {
                    color: var(--color-text-muted);
                }
                .text-text-light {
                    color: var(--color-text-light);
                }
                .border-border {
                    border-color: var(--color-border);
                }
                .border-border\/30 {
                    border-color: rgba(232, 230, 226, 0.5);
                }
                .bg-cream {
                    background-color: var(--color-bg-cream);
                }
                .hover\:bg-cream:hover {
                    background-color: var(--color-bg-cream);
                }
                .hover\:text-gold:hover {
                    color: var(--color-gold);
                }
                .hover\:pl-6:hover {
                    padding-left: 1.5rem;
                }
                .hover\:pl-8:hover {
                    padding-left: 2rem;
                }
            `}</style>
        </>
    )
}
