import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { Caption } from '../ui/Typography'

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
        name: 'Treatments',
        path: '/treatments',
        megaMenu: [
            {
                category: 'Instant Glow & Hydration',
                items: [
                    { name: 'Signature Medifacials', path: '/treatments/signature-medifacials' },
                    { name: 'Hitech Facials', path: '/treatments/hitech-facials' },
                    { name: 'Medical Grade Facials', path: '/treatments/medical-grade-facials' },
                    { name: 'Neocollagen Facial', path: '/treatments/neocollagen-facial' },
                    { name: 'Ultrasonic Facial (HIFU)', path: '/treatments/ultrasonic-facial' },
                    { name: 'LaserBrite (QSWITCH)', path: '/treatments/laserbrite' },
                    { name: 'Carbon Glow', path: '/treatments/carbon-glow' },
                    { name: 'Oxyblast', path: '/treatments/oxyblast' },
                    { name: 'Crystal', path: '/treatments/crystal' },
                    { name: 'Glass Gloss', path: '/treatments/glass-gloss' },
                    { name: 'Illuminating', path: '/treatments/illuminating' },
                    { name: 'Dermal Fillers', path: '/treatments/dermal-fillers' },
                ]
            },
            {
                category: 'Acne',
                items: [
                    { name: 'Morpheus8', path: '/treatments/morpheus8' },
                    { name: 'Intense Acne Peel', path: '/treatments/intense-acne-peel' },
                    { name: 'eMatrix', path: '/treatments/ematrix' },
                    { name: 'Professional Peels', path: '/treatments/professional-peels' },
                    { name: 'Carbon Glow', path: '/treatments/carbon-glow' },
                ]
            },
            {
                category: 'IV Infusion Drips',
                items: [
                    { name: 'IV Drips', path: '/treatments/iv-drips' },
                    { name: 'Immunity Boost IV Infusion', path: '/treatments/immunity-boost' },
                    { name: 'Energy Boost IV Infusion', path: '/treatments/energy-boost' },
                    { name: 'Hair Restore IV Infusion', path: '/treatments/hair-restore' },
                    { name: 'Metaboost IV Infusion', path: '/treatments/metaboost' },
                    { name: 'Radiant Antioxidant', path: '/treatments/radiant-antioxidant' },
                ]
            },
            {
                category: 'Anti Aging',
                items: [
                    { name: 'Exosomes Therapy', path: '/treatments/exosomes-therapy' },
                    { name: 'Dermal Fillers', path: '/treatments/dermal-fillers' },
                    { name: 'GFC', path: '/treatments/gfc' },
                    { name: 'Threadlift', path: '/treatments/threadlift' },
                ]
            },
            {
                category: 'Lifting & Contouring',
                items: [
                    { name: 'Uitherapy', path: '/treatments/uitherapy' },
                    { name: 'Thermage', path: '/treatments/thermage' },
                    { name: 'Dermalift', path: '/treatments/dermalift' },
                    { name: 'Coolsculpt', path: '/treatments/coolsculpt' },
                    { name: 'Emsculpt', path: '/treatments/emsculpt' },
                ]
            },
            {
                category: 'Hair',
                items: [
                    { name: 'Advanced GFC', path: '/treatments/advanced-gfc' },
                    { name: 'Exosomes Therapy', path: '/treatments/exosomes-therapy' },
                    { name: 'Dermaneedling', path: '/treatments/dermaneedling' },
                    { name: 'Hair Transplant', path: '/treatments/hair-transplant' },
                ]
            },
            {
                category: 'Pigmentation',
                items: [
                    { name: 'LaserBrite (QSWITCH)', path: '/treatments/laserbrite' },
                    { name: 'Skin Brightening Peel', path: '/treatments/skin-brightening-peel' },
                    { name: 'Chemical Peels', path: '/treatments/chemical-peels' },
                ]
            },
            {
                category: 'Body',
                items: [
                    { name: 'Coolsculpting', path: '/treatments/coolsculpting' },
                    { name: 'Emsculpt', path: '/treatments/emsculpt' },
                    { name: 'Laser Hair Reduction', path: '/treatments/laser-hair-reduction' },
                    { name: 'Bridal Skincare', path: '/treatments/bridal-skincare' },
                ]
            }
        ]
    },
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
    { name: 'Gallery', path: '/gallery' },
    { name: 'Locations', path: '/locations' },
    { name: 'Contact', path: '/contact' },
]

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [activeMobileMenu, setActiveMobileMenu] = useState(null)
    const [mobileMenuStack, setMobileMenuStack] = useState([])
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsMobileOpen(false)
        setActiveDropdown(null)
        setActiveMobileMenu(null)
        setMobileMenuStack([])
    }, [location])

    const handleMobileMenuClick = (linkName) => {
        setMobileMenuStack([...mobileMenuStack, linkName])
        setActiveMobileMenu(linkName)
    }

    const handleMobileMenuBack = () => {
        const newStack = [...mobileMenuStack]
        newStack.pop()
        setMobileMenuStack(newStack)
        setActiveMobileMenu(newStack.length > 0 ? newStack[newStack.length - 1] : null)
    }

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
                    <nav className="hidden lg:flex items-center gap-3" aria-label="Main navigation">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group/nav z-10"
                                onMouseEnter={() => (link.dropdown || link.megaMenu) && setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    to={link.path || '#'}
                                    className={`flex items-center gap-1.5 px-4 py-2 font-medium tracking-wider uppercase transition-all duration-300 text-sm rounded-md hover:bg-cream ${location.pathname === link.path
                                        ? 'text-gold'
                                        : 'text-dark hover:text-gold'
                                        }`}
                                    style={{ fontFamily: 'var(--font-body)' }}
                                    aria-current={location.pathname === link.path ? 'page' : undefined}
                                    aria-haspopup={link.dropdown || link.megaMenu ? 'true' : undefined}
                                    aria-expanded={(link.dropdown || link.megaMenu) && activeDropdown === link.name ? 'true' : 'false'}
                                >
                                    {link.name}
                                    {(link.dropdown || link.megaMenu) && (
                                        <ChevronDown
                                            size={14}
                                            className="transition-transform duration-300 group-hover/nav:rotate-180"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Link>

                                {/* Improved Dropdown Menu */}
                                {(link.dropdown || link.megaMenu) && activeDropdown === link.name && (
                                    <div
                                        className={`absolute top-[100%] ${link.megaMenu ? 'left-1/2 -translate-x-1/2 w-screen max-w-[1100px]' : 'left-0 min-w-[260px]'} py-3 animate-fadeIn shadow-xl`}
                                        style={{
                                            background: 'rgba(255,255,255,1)',
                                            borderRadius: '12px',
                                            boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)',
                                            marginTop: '0px',
                                        }}
                                        role="menu"
                                    >
                                        <div className="relative">
                                            {/* Standard Dropdown */}
                                            {link.dropdown && link.dropdown.map((item, index) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.path}
                                                    className={`block px-5 py-3 text-sm transition-all duration-200 hover:pl-6 hover:text-gold ${index !== link.dropdown.length - 1
                                                        ? 'border-b border-border/30'
                                                        : ''
                                                        } ${location.pathname === item.path ? 'text-gold font-medium' : 'text-muted'}`}
                                                    style={{ fontFamily: 'var(--font-body)' }}
                                                    role="menuitem"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                            {/* Mega Menu */}
                                            {link.megaMenu && (
                                                <div className="flex flex-wrap px-6 py-4">
                                                    {link.megaMenu.map((category) => (
                                                        <div key={category.category} className="w-1/4 px-4 mb-6">
                                                            <h3 className="font-medium text-gold border-b border-border/30 pb-2 mb-3 text-sm tracking-wider uppercase" style={{ fontFamily: 'var(--font-display)' }}>
                                                                {category.category}
                                                            </h3>
                                                            <ul className="space-y-2 relative">
                                                                {category.items.map((item) => (
                                                                    <li key={item.name}>
                                                                        <Link
                                                                            to={item.path}
                                                                            className={`text-[15px] transition-colors hover:text-gold block ${location.pathname === item.path ? 'text-gold font-medium' : 'text-muted'}`}
                                                                            style={{ fontFamily: 'var(--font-body)' }}
                                                                        >
                                                                            {item.name}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                    <div className="w-full mt-2 pt-4 border-t border-border/30 flex justify-between items-center bg-cream/30 -mx-6 -mb-4 px-10 pb-4 pt-4 rounded-b-xl">
                                                        <p className="text-sm font-medium text-dark tracking-wide">Not sure which treatment is right for you?</p>
                                                        <a href="https://api.whatsapp.com/send/?phone=917738891858&text=Hello%20there!" target="_blank" rel="noreferrer" className="btn btn-primary text-xs py-2 px-5 flex items-center gap-2 rounded-full border border-gold hover:bg-gold hover:text-white transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                                                            <span>Chat with us</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            )}
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

            {/* Mobile Menu Slide-in Concept */}
            <div
                className={`fixed inset-0 z-[1098] bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={() => setIsMobileOpen(false)}
                aria-hidden="true"
            />
            <div
                className={`fixed top-0 left-0 h-full w-[320px] bg-white z-[1099] overflow-hidden transition-transform duration-500 lg:hidden ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
                role="dialog"
                aria-modal="true"
            >
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between h-[50px] border-b border-black/10 px-4 sticky top-0 bg-white z-50">
                    {activeMobileMenu ? (
                        <button
                            onClick={handleMobileMenuBack}
                            className="h-[50px] w-[50px] flex items-center justify-center -ml-4 border-r border-black/10 hover:bg-black/5"
                        >
                            <ChevronDown size={20} className="rotate-90" />
                        </button>
                    ) : (
                        <div className="w-[50px] -ml-4" /> // Placeholder for spacing
                    )}

                    <span className="font-medium text-[15px] {activeMobileMenu ? 'text-dark' : 'text-transparent'}">
                        {activeMobileMenu || ''}
                    </span>

                    <button
                        onClick={() => setIsMobileOpen(false)}
                        className="h-[50px] w-[50px] flex items-center justify-center -mr-4 border-l border-black/10 hover:bg-black/5"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Mobile Menu Container with Slider Action */}
                <div className="relative h-[calc(100%-50px)] overflow-x-hidden overflow-y-auto">
                    {/* Main Menu Layer */}
                    <nav className={`absolute w-full top-0 left-0 transition-transform duration-500 ${activeMobileMenu ? '-translate-x-full' : 'translate-x-0'}`}>
                        <ul className="flex flex-col">
                            {navLinks.map((link) => (
                                <li key={link.name} className="border-b border-black/10">
                                    {(link.dropdown || link.megaMenu) ? (
                                        <button
                                            onClick={() => handleMobileMenuClick(link.name)}
                                            className="w-full flex items-center justify-between h-[50px] px-5 py-0 text-left hover:bg-black/5 transition-colors"
                                        >
                                            <span className="text-[15px] font-medium" style={{ fontFamily: 'var(--font-display)' }}>{link.name}</span>
                                            <ChevronDown size={18} className="-rotate-90 text-dark/50" />
                                        </button>
                                    ) : (
                                        <Link
                                            to={link.path || '#'}
                                            className="flex items-center h-[50px] px-5 py-0 text-[15px] font-medium hover:bg-black/5 transition-colors"
                                            style={{ fontFamily: 'var(--font-display)' }}
                                            onClick={() => setIsMobileOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <div className="p-5 mt-4">
                            <Link to="/book" className="btn btn-primary w-full justify-center" onClick={() => setIsMobileOpen(false)}>
                                Book Appointment
                            </Link>
                        </div>
                    </nav>

                    {/* Sub-menu Layers */}
                    {navLinks.map((link) => {
                        if (!link.dropdown && !link.megaMenu) return null;

                        const isActive = mobileMenuStack.includes(link.name);
                        const isTop = activeMobileMenu === link.name;

                        return (
                            <div
                                key={`${link.name}-submenu`}
                                className={`absolute top-0 left-0 w-full bg-white min-h-full transition-transform duration-500 px-5 py-4
                                    ${isActive ? (isTop ? 'translate-x-0' : '-translate-x-full') : 'translate-x-full'}`}
                                style={{
                                    visibility: isActive ? 'visible' : 'hidden',
                                    zIndex: isActive ? 10 : -1
                                }}
                            >
                                {link.dropdown && (
                                    <ul className="flex flex-col">
                                        {link.dropdown.map((item) => (
                                            <li key={item.name}>
                                                <Link
                                                    to={item.path}
                                                    className="block py-3 text-[15px] text-dark hover:text-gold transition-colors"
                                                    style={{ fontFamily: 'var(--font-body)' }}
                                                    onClick={() => setIsMobileOpen(false)}
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {link.megaMenu && (
                                    <div className="flex flex-col pb-8">
                                        {link.megaMenu.map((category) => (
                                            <div key={category.category} className="mb-6 last:mb-0">
                                                <h4 className="text-[16px] text-gold font-medium leading-tight py-2 uppercase tracking-wide border-b border-border/30 mb-2">
                                                    {category.category}
                                                </h4>
                                                <ul className="flex flex-col space-y-1">
                                                    {category.items.map((item) => (
                                                        <li key={item.name}>
                                                            <Link
                                                                to={item.path}
                                                                className="block py-1.5 text-[15px] text-dark hover:text-gold transition-colors"
                                                                style={{ fontFamily: 'var(--font-body)' }}
                                                                onClick={() => setIsMobileOpen(false)}
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { 
                        opacity: 0; 
                        transform: translateY(15px); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0); 
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease forwards;
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
