import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown, ArrowRight, Flame, Palette, Sparkles, Scissors, Eye, Sun, Search, MapPin, Instagram, Facebook, Youtube } from 'lucide-react'
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
                category: 'Anti Aging',
                items: [
                    { name: 'Exosomes Therapy', path: '/treatments/exosomes-therapy' },
                    { name: 'Dermal Fillers', path: '/treatments/dermal-fillers' },
                    { name: 'GFC', path: '/treatments/gfc' },
                    { name: 'Threadlift', path: '/treatments/threadlift' },
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
        megaMenuWithImages: [
            {
                title: 'Active Acne',
                description: 'Advanced treatments for acne breakouts, inflammation, and scarring.',
                image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80',
                path: '/concerns/active-acne',
                icon: Flame
            },
            {
                title: 'Pigmentation',
                description: 'Reduce dark spots, melasma, and uneven skin tone effectively.',
                image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80',
                path: '/concerns/pigmentation',
                icon: Palette
            },
            {
                title: 'Anti-Aging',
                description: 'Turn back time with wrinkle reduction, skin tightening & rejuvenation.',
                image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80',
                path: '/concerns/anti-aging',
                icon: Sparkles
            },
            {
                title: 'Hair Loss',
                description: 'Regrow and restore with PRP, mesotherapy & hair transplant solutions.',
                image: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?w=400&q=80',
                path: '/concerns/hair-loss',
                icon: Scissors
            },
            {
                title: 'Dark Circles',
                description: 'Brighten under-eye area and reduce puffiness with targeted therapies.',
                image: 'https://images.unsplash.com/photo-1594824476967-48c8b964f137?w=400&q=80',
                path: '/concerns/dark-circles',
                icon: Eye
            },
            {
                title: 'Dull Skin',
                description: 'Restore glow with facials, peels, and advanced brightening treatments.',
                image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&q=80',
                path: '/concerns/dull-skin',
                icon: Sun
            }
        ]
    },
    { name: 'Gallery', path: '/gallery' },
    // { name: 'Locations', path: '/locations' },
    { name: 'Contact', path: '/contact' },
]

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [activeMobileMenu, setActiveMobileMenu] = useState(null)
    const [mobileMenuStack, setMobileMenuStack] = useState([])
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const location = useLocation()
    const navigate = useNavigate()

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
                    background: 'var(--color-wine)',
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
                            Mon - Sat: 10 AM - 7 PM
                        </Caption>
                    </div>
                    <div className="flex items-center gap-4">
                        {/* Social Icons */}
                        <div className="hidden lg:flex items-center gap-3 mr-2">
                            <a href="https://www.instagram.com/aaynaclinic_official/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition-colors">
                                <Instagram size={14} />
                            </a>
                            <a href="https://www.facebook.com/aaynaclinic/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition-colors">
                                <Facebook size={14} />
                            </a>
                            <a href="https://www.youtube.com/channel/UCF4-AP5qfQ_VKyNZjhKfb4Q" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition-colors">
                                <Youtube size={14} />
                            </a>
                        </div>
                        <div className="hidden sm:flex items-center bg-white/20 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-sm transition-all duration-300 hover:bg-white/30 cursor-default">
                            <MapPin size={12} className="text-white mr-1.5 flex-shrink-0" />
                            <span className="font-body text-[11px] font-bold tracking-[2px] uppercase text-white mt-[1px]">
                                Delhi <span className="text-white/50 mx-1.5">&bull;</span> Gurugram <span className="text-white/50 mx-1.5">&bull;</span> Ludhiana
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Nav - Refined */}
            <header
                className="fixed left-0 w-full z-[1000] transition-all duration-500 overflow-visible"
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
                    <Link to="/" className="flex items-center gap-3" aria-label="D'CosMedis Clinic - Home">
                        <div className="flex flex-col">
                            <span
                                className="text-2xl tracking-[6px] uppercase font-medium"
                                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-wine)' }}
                            >
                                D'COSMEDIS
                            </span>
                            <Caption variant="caption" style={{ color: 'var(--color-text-light)', letterSpacing: '3px', fontSize: '0.55rem', textTransform: 'uppercase', fontWeight: 600 }}>
                                SKIN &bull; HAIR &bull; WELLNESS
                            </Caption>
                        </div>
                    </Link>

                    {/* Desktop Nav - Refined spacing */}
                    <nav className={`hidden lg:flex items-center gap-3 h-full transition-opacity duration-300 ${isSearchOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} aria-label="Main navigation">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className={`group/nav z-10 h-full flex items-center ${link.dropdown ? 'relative' : ''}`}
                                onMouseEnter={() => (link.dropdown || link.megaMenu || link.megaMenuWithImages) && setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    to={link.path || '#'}
                                    className={`flex items-center gap-1.5 px-4 py-2 font-medium tracking-wider uppercase transition-all duration-300 text-sm rounded-md hover:bg-cream ${location.pathname === link.path
                                        ? 'text-wine'
                                        : 'text-dark hover:text-wine'
                                        }`}
                                    style={{ fontFamily: 'var(--font-body)' }}
                                    aria-current={location.pathname === link.path ? 'page' : undefined}
                                    aria-haspopup={link.dropdown || link.megaMenu || link.megaMenuWithImages ? 'true' : undefined}
                                    aria-expanded={(link.dropdown || link.megaMenu || link.megaMenuWithImages) && activeDropdown === link.name ? 'true' : 'false'}
                                >
                                    {link.name}
                                    {(link.dropdown || link.megaMenu || link.megaMenuWithImages) && (
                                        <ChevronDown
                                            size={14}
                                            className="transition-transform duration-300 group-hover/nav:rotate-180"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Link>

                                {/* Improved Dropdown Menu */}
                                {(link.dropdown || link.megaMenu || link.megaMenuWithImages) && activeDropdown === link.name && (
                                    <div
                                        className={`absolute top-[100%] left-1/2 -translate-x-1/2 animate-fadeIn shadow-xl z-[100] ${link.dropdown ? 'w-[240px]' : 'w-[95vw] max-w-[1400px]'}`}
                                        style={{
                                            background: 'rgba(255,255,255,1)',
                                            borderRadius: '16px',
                                            boxShadow: '0 25px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.05)',
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
                                                    className={`block px-5 py-3 text-sm transition-all duration-200 hover:pl-6 hover:text-wine ${index !== link.dropdown.length - 1
                                                        ? 'border-b border-border/30'
                                                        : ''
                                                        } ${location.pathname === item.path ? 'text-wine font-medium' : 'text-muted'}`}
                                                    style={{ fontFamily: 'var(--font-body)' }}
                                                    role="menuitem"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}

                                            {/* Mega Menu - Text Only */}
                                            {link.megaMenu && (
                                                <div className="px-6 py-4">
                                                    <div className="flex flex-wrap -mx-4">
                                                        {link.megaMenu.map((category) => (
                                                            <div key={category.category} className="w-1/3 px-4 mb-6">
                                                                <h3 className="font-medium text-wine border-b border-border/30 pb-2 mb-3 text-sm tracking-wider uppercase" style={{ fontFamily: 'var(--font-display)' }}>
                                                                    {category.category}
                                                                </h3>
                                                                <ul className="space-y-2 relative">
                                                                    {category.items.map((item) => (
                                                                        <li key={item.name}>
                                                                            <Link
                                                                                to={item.path}
                                                                                className={`text-[15px] transition-colors hover:text-wine block ${location.pathname === item.path ? 'text-wine font-medium' : 'text-muted'}`}
                                                                                style={{ fontFamily: 'var(--font-body)' }}
                                                                            >
                                                                                {item.name}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="mt-2 pt-4 border-t border-border/30 flex justify-between items-center bg-cream/30 -mx-6 -mb-4 px-10 pb-4 pt-4 rounded-b-xl">
                                                        <p className="text-sm font-medium text-dark tracking-wide">Not sure which treatment is right for you?</p>
                                                        <a href="https://api.whatsapp.com/send/?phone=917738891858&text=Hello%20there!" target="_blank" rel="noreferrer" className="btn btn-primary text-xs py-2 px-5 flex items-center gap-2 rounded-full border border-wine hover:bg-wine hover:text-white transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                                                            <span>Chat with us</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Mega Menu - With Images (Concerns) */}
                                            {link.megaMenuWithImages && (
                                                <div className="p-6">
                                                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/30">
                                                        <div>
                                                            <h3 className="text-xl font-medium text-dark" style={{ fontFamily: 'var(--font-display)' }}>
                                                                What Bothers You?
                                                            </h3>
                                                            <p className="text-sm text-muted mt-1">Explore our treatments for common skin concerns</p>
                                                        </div>
                                                        <Link
                                                            to="/concerns"
                                                            className="flex items-center gap-2 text-sm font-medium text-wine hover:text-wine-dark transition-colors"
                                                        >
                                                            View All Concerns <ArrowRight size={16} />
                                                        </Link>
                                                    </div>
                                                    <div className="grid grid-cols-3 xl:grid-cols-6 gap-4">
                                                        {link.megaMenuWithImages.map((item) => (
                                                            <Link
                                                                key={item.title}
                                                                to={item.path}
                                                                className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg"
                                                            >
                                                                <div className="relative h-40 overflow-hidden">
                                                                    <img
                                                                        src={item.image}
                                                                        alt={item.title}
                                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                                    />
                                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                                                    <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                                                                        {item.icon && <item.icon size={18} className="text-dark" />}
                                                                    </div>
                                                                </div>
                                                                <div className="absolute bottom-0 left-0 right-0 p-3">
                                                                    <h4 className="text-white font-medium text-sm mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                                                                        {item.title}
                                                                    </h4>
                                                                    <p className="text-white/70 text-xs line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                                        {item.description}
                                                                    </p>
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA + Mobile Toggle + Search Button */}
                    <div className="flex items-center" style={{ gap: '4px' }}>
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:bg-black/5 hover:text-wine text-dark rounded-full"
                            aria-label="Open Search"
                        >
                            <Search size={20} />
                        </button>

                        <Link
                            to="/book"
                            className="btn btn-primary header-book-btn"
                        >
                            Book Appointment
                        </Link>
                        <button
                            className="mobile-menu-btn p-2 hover:bg-cream rounded-lg transition-colors"
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isMobileOpen}
                            aria-controls="mobile-menu"
                        >
                            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Full Width Search Overlay */}
                <div
                    className={`absolute inset-0 bg-white z-[1010] flex items-center justify-center transition-all duration-500 origin-top overflow-hidden border-b border-black/5 ${isSearchOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}
                >
                    <div className="container flex items-center gap-4 h-full">
                        <Search size={24} className="text-muted shrink-0" />
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="w-full h-full text-lg md:text-xl bg-transparent border-none outline-none text-dark placeholder:text-muted/50 font-medium"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && searchQuery.trim()) {
                                    navigate(`/treatments?search=${encodeURIComponent(searchQuery)}`);
                                    setIsSearchOpen(false);
                                    setSearchQuery('');
                                } else if (e.key === 'Escape') {
                                    setIsSearchOpen(false);
                                }
                            }}
                            autoFocus={isSearchOpen}
                        />
                        <button
                            onClick={() => setIsSearchOpen(false)}
                            className="w-10 h-10 flex items-center justify-center transition-colors hover:bg-black/5 text-dark rounded-full shrink-0"
                            aria-label="Close Search"
                        >
                            <X size={24} />
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
                className={`fixed top-0 left-0 h-full w-[85vw] max-w-[360px] bg-white z-[1099] overflow-hidden transition-transform duration-500 lg:hidden ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
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
                                    {(link.dropdown || link.megaMenu || link.megaMenuWithImages) ? (
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
                        if (!link.dropdown && !link.megaMenu && !link.megaMenuWithImages) return null;

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
                                                    className="block py-3 text-[15px] text-dark hover:text-wine transition-colors"
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
                                                <h4 className="text-[16px] text-wine font-medium leading-tight py-2 uppercase tracking-wide border-b border-border/30 mb-2">
                                                    {category.category}
                                                </h4>
                                                <ul className="flex flex-col space-y-1">
                                                    {category.items.map((item) => (
                                                        <li key={item.name}>
                                                            <Link
                                                                to={item.path}
                                                                className="block py-1.5 text-[15px] text-dark hover:text-wine transition-colors"
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
                                {link.megaMenuWithImages && (
                                    <div className="flex flex-col pb-8">
                                        <h4 className="text-[16px] text-wine font-medium leading-tight py-2 uppercase tracking-wide border-b border-border/30 mb-4">
                                            What Bothers You?
                                        </h4>
                                        <div className="flex flex-col gap-3">
                                            {link.megaMenuWithImages.map((item) => (
                                                <Link
                                                    key={item.title}
                                                    to={item.path}
                                                    className="flex items-center gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-black/5 group"
                                                    onClick={() => setIsMobileOpen(false)}
                                                >
                                                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-sm">
                                                        <img
                                                            src={item.image}
                                                            alt={item.title}
                                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                        />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h5
                                                            className="text-[15px] font-medium text-dark group-hover:text-wine transition-colors"
                                                            style={{ fontFamily: 'var(--font-display)' }}
                                                        >
                                                            {item.title}
                                                        </h5>
                                                        <p
                                                            className="text-xs mt-0.5 line-clamp-1"
                                                            style={{ color: 'var(--color-text-muted)' }}
                                                        >
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                    <ArrowRight size={16} className="shrink-0 text-wine opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </Link>
                                            ))}
                                        </div>
                                        <Link
                                            to="/concerns"
                                            className="mt-4 flex items-center justify-center gap-2 py-3 text-sm font-semibold text-wine border border-wine/30 rounded-xl hover:bg-wine/5 transition-colors"
                                            onClick={() => setIsMobileOpen(false)}
                                        >
                                            View All Concerns <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            </>
    )
}
