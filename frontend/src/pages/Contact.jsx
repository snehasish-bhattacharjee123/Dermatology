import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, Instagram, Youtube, Facebook, CheckCircle, ArrowRight, MessageCircle, Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { RevealWrapper } from '../hooks/useAnimations'

const contactInfo = [
    {
        icon: Phone,
        label: 'Call Us',
        value: '+91 11 2634 7890',
        sub: 'Mon – Sat, 10am – 7pm',
        href: 'tel:+911126347890',
        color: 'rgba(149, 71, 149,0.12)',
    },
    {
        icon: Mail,
        label: 'Email Us',
        value: 'info@dcosmedisclinic.com',
        sub: 'We respond within 24 hours',
        href: 'mailto:info@dcosmedisclinic.com',
        color: 'rgba(149, 71, 149,0.12)',
    },
    {
        icon: MapPin,
        label: 'Main Clinic',
        value: 'SDA Market, Hauz Khas',
        sub: 'New Delhi – 110016',
        href: 'https://maps.google.com',
        color: 'rgba(149, 71, 149,0.12)',
    },
    {
        icon: Clock,
        label: 'Working Hours',
        value: 'Mon – Sat: 10am – 7pm',
        sub: 'Sunday by appointment',
        color: 'rgba(149, 71, 149,0.12)',
    },
]

const socials = [
    {
        name: 'Instagram',
        handle: '@dcosmedis',
        href: 'https://www.instagram.com/dcosmedicsindia/',
        bg: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
        icon: Instagram,
    },
    {
        name: 'Facebook',
        handle: '/dcosmedis',
        href: 'https://www.facebook.com/dcosmedicsindia',
        bg: 'linear-gradient(135deg, #1877f2, #42a5f5)',
        icon: Facebook,
    },
    {
        name: 'YouTube',
        handle: 'D\'CosMedis TV',
        href: 'https://www.youtube.com/channel/UC9JC_KgzE6YDSh4Amg4D2mQ',
        bg: 'linear-gradient(135deg, #ff0000, #ff6b6b)',
        icon: Youtube,
    },
]

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        clinic: '',
        appointmentDate: '',
        appointmentFor: '',
        other: '',
    })
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    // Bespoke Calendar Popover State
    const [showCalendar, setShowCalendar] = useState(false)
    const [calendarMonth, setCalendarMonth] = useState(new Date().getMonth())
    const [calendarYear, setCalendarYear] = useState(new Date().getFullYear())

    const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const payload = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: `Dcosmedics Appointment Card - ${formData.appointmentFor || 'Consultation'}`,
            message: `Clinic Location: ${formData.clinic || 'Not Specified'}
Appointment Date: ${formData.appointmentDate || 'Not Specified'}
Treatment for: ${formData.appointmentFor || 'Not Specified'}
Other Details: ${formData.other || 'None'}`,
            category: 'appointment'
        }

        try {
            await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            })
        } catch (_) { }
        setTimeout(() => { setLoading(false); setSubmitted(true) }, 800)
    }

    // Helper functions for calendar
    const MONTH_NAMES = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

    const getDaysArray = (month, year) => {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayIndex = new Date(year, month, 1).getDay();
        
        const days = [];
        for (let i = 0; i < firstDayIndex; i++) {
            days.push(null);
        }
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(new Date(year, month, i));
        }
        return days;
    };

    const isPastDate = (date) => {
        if (!date) return false;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date < today;
    };

    const isSelectedDate = (date) => {
        if (!date || !formData.appointmentDate) return false;
        const selected = new Date(formData.appointmentDate);
        return date.getFullYear() === selected.getFullYear() &&
               date.getMonth() === selected.getMonth() &&
               date.getDate() === selected.getDate();
    };

    const isToday = (date) => {
        if (!date) return false;
        const today = new Date();
        return date.getFullYear() === today.getFullYear() &&
               date.getMonth() === today.getMonth() &&
               date.getDate() === today.getDate();
    };

    const handleSelectDate = (date) => {
        if (!date || isPastDate(date)) return;
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        const formatted = `${yyyy}-${mm}-${dd}`;
        setFormData(prev => ({ ...prev, appointmentDate: formatted }));
        setShowCalendar(false);
    };

    const handlePrevMonth = (e) => {
        e.preventDefault();
        if (calendarMonth === 0) {
            setCalendarMonth(11);
            setCalendarYear(prev => prev - 1);
        } else {
            setCalendarMonth(prev => prev - 1);
        }
    };

    const handleNextMonth = (e) => {
        e.preventDefault();
        if (calendarMonth === 11) {
            setCalendarMonth(0);
            setCalendarYear(prev => prev + 1);
        } else {
            setCalendarMonth(prev => prev + 1);
        }
    };

    const getFormattedDisplayDate = () => {
        if (!formData.appointmentDate) return '';
        const date = new Date(formData.appointmentDate);
        if (isNaN(date.getTime())) return '';
        return date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    };

    // Validation checks for tick displays
    const isNameValid = formData.name.trim().length > 1;
    const isPhoneValid = formData.phone.trim().length >= 8;
    const isClinicValid = formData.clinic !== "";
    const isEmailValid = !formData.email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

    return (
        <div style={{ background: '#EDE8D0' }}>
            <style>{`
                /* ── Hero ── */
                .ct-hero {
                    position: relative;
                    min-height: clamp(340px, 60vw, 540px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }
                @media (max-width: 640px) {
                    .ct-hero {
                        min-height: clamp(280px, 65vw, 400px);
                        align-items: flex-end;
                        padding-bottom: 2rem;
                    }
                }
                @media (min-width: 768px) {
                    .ct-hero {
                        min-height: clamp(480px, 55vw, 600px);
                    }
                }
                .ct-hero-bg {
                    position: absolute; inset: 0; z-index: 0;
                }
                .ct-hero-bg img {
                    width: 100%; height: 100%; object-fit: cover; object-position: center 30%;
                }
                .ct-hero-overlay {
                    position: absolute; inset: 0; background: rgba(0,0,0,0.42);
                }
                .ct-hero-content {
                    position: relative; z-index: 1; text-align: center; color: #fff;
                    width: 100%;
                    padding: calc(var(--header-total-height) + 1.5rem) 1rem 2rem;
                }

                /* ── Info cards ── */
                .ct-info-card { display: flex; align-items: flex-start; gap: 1.25rem; padding: 1.5rem; border: 1px solid #d6cfb3; background: #f5f0e1; transition: all 0.35s ease; }
                .ct-info-card:hover { border-color: var(--color-wine); box-shadow: 0 12px 40px rgba(149, 71, 149, 0.12); transform: translateY(-3px); }
                .ct-info-icon { width: 3rem; height: 3rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; background: rgba(149, 71, 149, 0.1); transition: background 0.3s; }
                .ct-info-card:hover .ct-info-icon { background: var(--color-wine); }
                .ct-info-card:hover .ct-info-icon svg { color: #fff !important; }

                /* ── Form Card Container ── */
                .ct-form-card {
                    background: #fff;
                    border: 1px solid var(--color-border-light);
                    box-shadow: 0 30px 60px rgba(149, 71, 149, 0.05), 0 5px 15px rgba(0, 0, 0, 0.02);
                    padding: 3.5rem 3rem;
                    border-radius: 16px;
                    transition: all 0.4s var(--ease-out-expo);
                    position: relative;
                    overflow: visible; /* Required to ensure the calendar popup displays correctly */
                }
                @media (max-width: 640px) {
                    .ct-form-card {
                        padding: 2.25rem 1.75rem;
                    }
                }
                .ct-form-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, var(--color-wine) 0%, var(--color-wine-light) 50%, var(--color-accent-dark) 100%);
                    border-radius: 16px 16px 0 0;
                }

                /* ── Split Layout Grid ── */
                .ct-split-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 4rem;
                    align-items: start;
                }
                @media (min-width: 1024px) {
                    .ct-split-grid {
                        grid-template-columns: 1.3fr 1fr;
                    }
                }

                /* ── Floating Accent Inputs ── */
                .ct-label { 
                    display: block; 
                    font-size: 0.65rem; 
                    font-weight: 700; 
                    letter-spacing: 2px; 
                    text-transform: uppercase; 
                    color: var(--color-wine); 
                    margin-bottom: 0.5rem;
                    transition: color 0.3s ease;
                }
                .ct-input { 
                    width: 100%; 
                    padding: 0.9rem 1.25rem; 
                    font-family: var(--font-body); 
                    font-size: 0.9375rem; 
                    color: var(--color-dark); 
                    background: #FAF8F2; 
                    border: 1px solid var(--color-border); 
                    border-radius: 6px;
                    outline: none; 
                    transition: all 0.3s var(--ease-out-quart); 
                }
                .ct-input:focus { 
                    border-color: var(--color-wine); 
                    background: #fff;
                    box-shadow: 0 0 0 4px var(--color-wine-glow); 
                }
                .ct-input::placeholder { 
                    color: #b09bb0; 
                    opacity: 0.7;
                }
                
                .ct-input-group {
                    position: relative;
                }
                .ct-input-group:focus-within .ct-label {
                    color: var(--color-wine-dark);
                }
                
                /* Decorative diamond bullet for input label */
                .ct-label-decorator {
                    display: inline-block;
                    font-size: 8px;
                    color: var(--color-wine-light);
                    margin-right: 6px;
                    vertical-align: middle;
                    transform: rotate(45deg);
                }

                /* Real-Time Input Checkmarks */
                .ct-validation-tick {
                    position: absolute;
                    right: 1.25rem;
                    color: var(--color-success);
                    display: flex;
                    align-items: center;
                    pointer-events: none;
                    z-index: 5;
                    opacity: 0;
                    transform: scale(0.5);
                    transition: all 0.3s var(--ease-out-expo);
                }
                .ct-input-group.valid .ct-validation-tick {
                    opacity: 1;
                    transform: scale(1);
                }

                /* ── Dropdown Select Styling ── */
                .ct-select { 
                    appearance: none; 
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='9' viewBox='0 0 14 9' fill='none'%3E%3Cpath d='M1 1.5L7 7.5L13 1.5' stroke='%23954795' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"); 
                    background-repeat: no-repeat; 
                    background-position: right 1.25rem center; 
                    cursor: pointer; 
                    padding-right: 3rem;
                }

                /* ── Custom Luxury Calendar Dropdown ── */
                .ct-date-wrapper {
                    position: relative;
                    display: flex;
                    align-items: center;
                    width: 100%;
                }
                .ct-date-trigger-input {
                    cursor: pointer;
                    caret-color: transparent; /* Disable caret as it is selected via calendar */
                }
                .ct-date-icon {
                    position: absolute;
                    right: 1.25rem;
                    color: var(--color-wine);
                    pointer-events: none;
                    z-index: 5;
                    transition: transform 0.3s var(--ease-out-quart);
                }
                .ct-date-trigger-input:focus ~ .ct-date-icon {
                    transform: rotate(15deg) scale(1.1);
                    color: var(--color-wine-dark);
                }
                .ct-calendar-dropdown {
                    position: absolute;
                    top: 105%;
                    left: 0;
                    right: 0;
                    background: rgba(255, 255, 255, 0.98);
                    backdrop-filter: blur(16px);
                    border: 1px solid var(--color-border);
                    border-radius: 12px;
                    box-shadow: 0 20px 50px rgba(149, 71, 149, 0.15), 0 5px 15px rgba(0, 0, 0, 0.05);
                    padding: 1.5rem;
                    z-index: 50;
                    animation: ct-fade-in-up 0.3s var(--ease-out-expo) forwards;
                }
                @keyframes ct-fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .ct-calendar-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 1.25rem;
                }
                .ct-calendar-title {
                    font-family: var(--font-heading);
                    font-size: 1.15rem;
                    font-weight: 600;
                    color: var(--color-dark);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .ct-calendar-btn {
                    background: transparent;
                    border: 1px solid var(--color-border-light);
                    width: 2.2rem;
                    height: 2.2rem;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--color-wine);
                    cursor: pointer;
                    transition: all 0.25s ease;
                }
                .ct-calendar-btn:hover {
                    background: var(--color-wine-glow);
                    border-color: var(--color-wine-light);
                    transform: scale(1.05);
                }
                .ct-calendar-weekdays {
                    display: grid;
                    grid-template-columns: repeat(7, 1fr);
                    text-align: center;
                    font-size: 0.65rem;
                    font-weight: 700;
                    color: var(--color-wine-light);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 0.75rem;
                    border-bottom: 1px solid var(--color-border-light);
                    padding-bottom: 0.5rem;
                }
                .ct-calendar-days {
                    display: grid;
                    grid-template-columns: repeat(7, 1fr);
                    gap: 4px;
                }
                .ct-calendar-day {
                    aspect-ratio: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.875rem;
                    font-weight: 500;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    border: none;
                    background: transparent;
                    color: var(--color-dark);
                }
                .ct-calendar-day:hover:not(:disabled) {
                    background: var(--color-wine-glow);
                    color: var(--color-wine-dark);
                }
                .ct-calendar-day:disabled {
                    color: var(--color-border);
                    cursor: not-allowed;
                    opacity: 0.35;
                }
                .ct-calendar-day.selected {
                    background: var(--color-wine) !important;
                    color: #fff !important;
                    box-shadow: 0 4px 12px rgba(149, 71, 149, 0.4);
                    font-weight: 700;
                }
                .ct-calendar-day.today:not(.selected) {
                    border: 1px solid var(--color-wine);
                    color: var(--color-wine);
                    font-weight: 700;
                }
                .ct-calendar-backdrop {
                    position: fixed;
                    inset: 0;
                    z-index: 40;
                    background: transparent;
                }

                /* ── Premium Submit Button ── */
                .ct-submit { 
                    width: 100%; 
                    padding: 1.1rem; 
                    background: var(--color-wine); 
                    color: #fff; 
                    font-size: 0.75rem; 
                    letter-spacing: 3px; 
                    text-transform: uppercase; 
                    font-weight: 700; 
                    border: none; 
                    border-radius: 6px;
                    cursor: pointer; 
                    display: flex; 
                    align-items: center; 
                    justify-content: center; 
                    gap: 0.75rem; 
                    transition: all 0.4s var(--ease-out-expo); 
                    box-shadow: 0 4px 15px rgba(149, 71, 149, 0.2);
                }
                .ct-submit:hover { 
                    background: var(--color-wine-dark); 
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(149, 71, 149, 0.35);
                }
                .ct-submit:active {
                    transform: translateY(0);
                }
                .ct-submit:disabled { 
                    opacity: 0.6; 
                    cursor: not-allowed; 
                    transform: none;
                    box-shadow: none;
                }

                /* ── Social cards ── */
                .ct-social { position: relative; overflow: hidden; border-radius: 4px; padding: 2.5rem 2rem; display: flex; flex-direction: column; align-items: center; gap: 1rem; transition: transform 0.35s, box-shadow 0.35s; }
                .ct-social:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(0,0,0,0.2); }
                .ct-social-icon { width: 4rem; height: 4rem; border-radius: 50%; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); display: flex; align-items: center; justify-content: center; transition: all 0.3s; }
                .ct-social:hover .ct-social-icon { background: rgba(255,255,255,0.25); transform: scale(1.1); }

                /* ── Map ── */
                .ct-map-wrapper { position: relative; }
                .ct-map-label { position: absolute; left: 1.5rem; bottom: 1.5rem; z-index: 2; background: var(--color-dark); color: #fff; padding: 0.75rem 1.5rem; font-size: 0.65rem; letter-spacing: 2px; text-transform: uppercase; font-weight: 700; display: flex; align-items: center; gap: 0.5rem; }
            `}</style>

            {/* ─── HERO ─── */}
            <section className="ct-hero">
                <div className="ct-hero-bg">
                    <img src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80" alt="D'CosMedis Clinic" />
                    <div className="ct-hero-overlay" />
                </div>

                <div className="ct-hero-content container">
                    <RevealWrapper direction="up">
                        <span style={{ display: 'inline-block', fontSize: '0.625rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-wine)', background: 'rgba(86, 58, 86, 0.12)', border: '1px solid rgba(86, 58, 86, 0.3)', borderRadius: '9999px', padding: '0.4rem 1.25rem', marginBottom: '1.5rem' }}>
                            Get In Touch
                        </span>
                        <h1 style={{ fontFamily: 'var(--font-heading)', color: '#fff', letterSpacing: '6px', textTransform: 'uppercase', fontSize: 'clamp(2.75rem, 8vw, 6rem)', lineHeight: 1.05, marginBottom: '1.5rem' }}>
                            <span style={{ fontWeight: 300 }}>CONTACT </span>
                            <span style={{ fontWeight: 700, color: 'var(--color-wine)' }}>US</span>
                        </h1>
                        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontWeight: 300, maxWidth: '38rem', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
                            We're here to help. Reach out for appointments, treatment inquiries, or any aesthetic assistance you need.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="tel:+911126347890" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--color-wine)', color: '#fff', padding: '0.9rem 2rem', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, boxShadow: '0 8px 28px rgba(86, 58, 86, 0.4)' }}>
                                <Phone size={14} /> Call Now
                            </a>
                            <a href="https://wa.me/911126347890" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.08)', color: '#fff', padding: '0.9rem 2rem', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                                <MessageCircle size={14} /> WhatsApp
                            </a>
                        </div>
                    </RevealWrapper>
                </div>

                <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', width: '1px', height: '2.5rem', background: 'linear-gradient(to bottom, transparent, var(--color-wine))' }} />
            </section>

            {/* ─── INFO CARDS ─── */}
            <section style={{ background: 'var(--color-bg-cream)', padding: '5rem 0' }}>
                <div className="container" style={{ maxWidth: '80rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                        {contactInfo.map((item, i) => (
                            <RevealWrapper key={i} direction="up" delay={i * 0.1}>
                                <div className="ct-info-card">
                                    <div className="ct-info-icon">
                                        <item.icon size={18} style={{ color: 'var(--color-wine)', transition: 'color 0.3s' }} />
                                    </div>
                                    <div>
                                        <span style={{ display: 'block', fontSize: '0.55rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, color: '#aaa', marginBottom: '0.35rem' }}>{item.label}</span>
                                        {item.href ? (
                                            <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: 'var(--color-dark)', fontWeight: 500, marginBottom: '0.2rem', transition: 'color 0.3s' }}>
                                                {item.value}
                                            </a>
                                        ) : (
                                            <span style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: 'var(--color-dark)', fontWeight: 500, marginBottom: '0.2rem' }}>
                                                {item.value}
                                            </span>
                                        )}
                                        <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>{item.sub}</span>
                                    </div>
                                </div>
                            </RevealWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── FORM + MAP SPLIT ─── */}
            <section style={{ background: '#fff', padding: '6rem 0' }}>
                <div className="container" style={{ maxWidth: '80rem' }}>
                    <div className="ct-split-grid">
                        
                        {/* ── FORM ── */}
                        <RevealWrapper direction="left">
                            <div className="ct-form-card">
                                <span style={{ display: 'block', fontSize: '0.625rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-wine-light)', marginBottom: '1rem' }}>
                                    Reach Out
                                </span>
                                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: 'var(--color-dark)', marginBottom: '0.75rem', lineHeight: 1.2 }}>
                                    Dcosmedics <span style={{ fontStyle: 'italic', color: 'var(--color-wine)' }}>Appointment Card</span>
                                </h2>
                                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: '2.5rem', fontSize: '0.9375rem' }}>
                                    Please fill in all the appropriate details. We will get back to you shortly.
                                </p>

                                {submitted ? (
                                    <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--color-bg-cream)', border: '1px solid #f0ede8' }}>
                                        <div style={{ width: '4.5rem', height: '4.5rem', borderRadius: '50%', background: 'rgba(86, 58, 86, 0.1)', display: 'flex', alignItems: 'center', justify: 'center', margin: '0 auto 1.5rem' }}>
                                            <CheckCircle size={32} style={{ color: 'var(--color-wine)' }} />
                                        </div>
                                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', color: 'var(--color-dark)', marginBottom: '0.75rem' }}>Message Received!</h3>
                                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: 1.75 }}>
                                            Thank you for reaching out. One of our concierges will get back to you shortly.
                                        </p>
                                        <button onClick={() => setSubmitted(false)} style={{ background: 'none', border: '1px solid var(--color-wine)', color: 'var(--color-wine)', padding: '0.75rem 2rem', fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s' }}>
                                            Send Another
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                                            
                                            {/* Name Input */}
                                            <div className={`ct-input-group ${isNameValid ? 'valid' : ''}`}>
                                                <label className="ct-label">
                                                    <span className="ct-label-decorator">♦</span>Name<span style={{ color: '#e53935', fontWeight: 700, marginLeft: '4px' }}>*</span>
                                                </label>
                                                <div className="ct-input-wrapper">
                                                    <input className="ct-input" type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Enter your full name" />
                                                    <span className="ct-validation-tick">
                                                        <CheckCircle size={16} />
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Email Input */}
                                            <div className={`ct-input-group ${isEmailValid && formData.email ? 'valid' : ''}`}>
                                                <label className="ct-label">
                                                    <span className="ct-label-decorator">♦</span>Email
                                                </label>
                                                <div className="ct-input-wrapper">
                                                    <input className="ct-input" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" />
                                                    <span className="ct-validation-tick">
                                                        <CheckCircle size={16} />
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Phone Input */}
                                            <div className={`ct-input-group ${isPhoneValid ? 'valid' : ''}`}>
                                                <label className="ct-label">
                                                    <span className="ct-label-decorator">♦</span>Phone Number<span style={{ color: '#e53935', fontWeight: 700, marginLeft: '4px' }}>*</span>
                                                </label>
                                                <div className="ct-input-wrapper">
                                                    <input className="ct-input" type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" pattern="[0-9()#&+*-=.]+" title="Only numbers and phone characters (#, -, *, etc) are accepted." />
                                                    <span className="ct-validation-tick">
                                                        <CheckCircle size={16} />
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Clinic Select */}
                                            <div className={`ct-input-group ${isClinicValid ? 'valid' : ''}`}>
                                                <label className="ct-label">
                                                    <span className="ct-label-decorator">♦</span>Clinic<span style={{ color: '#e53935', fontWeight: 700, marginLeft: '4px' }}>*</span>
                                                </label>
                                                <div className="ct-input-wrapper">
                                                    <select className="ct-input ct-select" name="clinic" required value={formData.clinic} onChange={handleChange}>
                                                        <option value="">Select location</option>
                                                        <option value="Ahmedabad">Ahmedabad</option>
                                                        <option value="marketing@dcosmedics.in">Bengaluru</option>
                                                        <option value="marketing@dcosmedics.in">Chennai</option>
                                                        <option value="Dubai">Dubai</option>
                                                        <option value="marketing@dcosmedics.in">Hyderabad</option>
                                                        <option value="marketing@dcosmedics.in">Kolkata</option>
                                                        <option value="andheri@dcosmedics.in">Andheri</option>
                                                        <option value="khar@dcosmedics.in">Khar</option>
                                                        <option value="kempscorner@dcosmedics.in">Kemps Corner</option>
                                                        <option value="marketing@dcosmedics.in">New Delhi</option>
                                                        <option value="marketing@dcosmedics.in">Pune</option>
                                                        <option value="marketing@dcosmedics.in">Ranchi</option>
                                                        <option value="marketing@dcosmedics.in">Siliguri</option>
                                                        <option value="marketing@dcosmedics.in">Thane</option>
                                                        <option value="marketing@dcosmedics.in">Vadodara</option>
                                                    </select>
                                                    <span className="ct-validation-tick" style={{ right: '2.5rem' }}>
                                                        <CheckCircle size={16} />
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Luxury Stateful Calendar Picker Input */}
                                            <div className={`ct-input-group ${formData.appointmentDate ? 'valid' : ''}`}>
                                                <label className="ct-label">
                                                    <span className="ct-label-decorator">♦</span>Appointment Date
                                                </label>
                                                <div className="ct-date-wrapper">
                                                    <input 
                                                        className="ct-input ct-date-trigger-input" 
                                                        type="text" 
                                                        readOnly 
                                                        value={getFormattedDisplayDate()} 
                                                        onClick={() => setShowCalendar(!showCalendar)} 
                                                        placeholder="Select your preferred date" 
                                                    />
                                                    <span className="ct-date-icon" onClick={() => setShowCalendar(!showCalendar)} style={{ cursor: 'pointer' }}>
                                                        <Calendar size={18} />
                                                    </span>
                                                    <span className="ct-validation-tick" style={{ right: '2.8rem' }}>
                                                        <CheckCircle size={16} />
                                                    </span>

                                                    {/* Calendar Dropdown Card */}
                                                    {showCalendar && (
                                                        <>
                                                            <div className="ct-calendar-backdrop" onClick={() => setShowCalendar(false)} />
                                                            <div className="ct-calendar-dropdown">
                                                                <div className="ct-calendar-header">
                                                                    <button className="ct-calendar-btn" onClick={handlePrevMonth}>
                                                                        <ChevronLeft size={16} />
                                                                    </button>
                                                                    <span className="ct-calendar-title">
                                                                        {MONTH_NAMES[calendarMonth]} {calendarYear}
                                                                    </span>
                                                                    <button className="ct-calendar-btn" onClick={handleNextMonth}>
                                                                        <ChevronRight size={16} />
                                                                    </button>
                                                                </div>

                                                                <div className="ct-calendar-weekdays">
                                                                    {WEEKDAYS.map((day, idx) => (
                                                                        <div key={idx}>{day}</div>
                                                                    ))}
                                                                </div>

                                                                <div className="ct-calendar-days">
                                                                    {getDaysArray(calendarMonth, calendarYear).map((date, idx) => {
                                                                        if (!date) return <div key={idx} />;
                                                                        const isPast = isPastDate(date);
                                                                        const isSelected = isSelectedDate(date);
                                                                        const isCurrToday = isToday(date);
                                                                        return (
                                                                            <button
                                                                                key={idx}
                                                                                type="button"
                                                                                disabled={isPast}
                                                                                onClick={() => handleSelectDate(date)}
                                                                                className={`ct-calendar-day ${isSelected ? 'selected' : ''} ${isCurrToday ? 'today' : ''}`}
                                                                            >
                                                                                {date.getDate()}
                                                                            </button>
                                                                        );
                                                                    })}
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Treatment Select */}
                                            <div className={`ct-input-group ${formData.appointmentFor ? 'valid' : ''}`}>
                                                <label className="ct-label">
                                                    <span className="ct-label-decorator">♦</span>Appointment For
                                                </label>
                                                <div className="ct-input-wrapper">
                                                    <select className="ct-input ct-select" name="appointmentFor" value={formData.appointmentFor} onChange={handleChange}>
                                                        <option value="">Select Treatment</option>
                                                        <option value="Acne Treatment">Acne Treatment</option>
                                                        <option value="Anti Aging Treatment">Anti Aging Treatment</option>
                                                        <option value="Hair Treatment">Hair Treatment</option>
                                                        <option value="Hitech Facial">Hitech Facial</option>
                                                        <option value="IV Drips">IV Drips</option>
                                                        <option value="Laser Hair Reduction">Laser Hair Reduction</option>
                                                        <option value="Laser Treatment">Laser Treatment</option>
                                                        <option value="Body Contouring">Body Contouring</option>
                                                        <option value="Consultation">Consultation</option>
                                                        <option value="Pigmentation">Pigmentation</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                    <span className="ct-validation-tick" style={{ right: '2.5rem' }}>
                                                        <CheckCircle size={16} />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Other Textarea */}
                                        <div className={`ct-input-group ${formData.other.trim().length > 4 ? 'valid' : ''}`}>
                                            <label className="ct-label">
                                                <span className="ct-label-decorator">♦</span>Other Details / Message
                                            </label>
                                            <div className="ct-input-wrapper">
                                                <textarea className="ct-input" name="other" rows={4} value={formData.other} onChange={handleChange} placeholder="Please describe any details, symptoms, or preferences..." style={{ resize: 'vertical' }} />
                                                <span className="ct-validation-tick" style={{ top: '1.25rem' }}>
                                                    <CheckCircle size={16} />
                                                </span>
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <div>
                                            <button type="submit" className="ct-submit" disabled={loading}>
                                                {loading ? 'Processing…' : (
                                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                        Submit Card
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                            <path d="M3.10428 10.9893L10.9776 3.116M10.9776 3.116L5.12222 3.16562M10.9776 3.116L10.9279 8.97134" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </RevealWrapper>

                        {/* ── RIGHT SIDE: Map + quick stats ── */}
                        <RevealWrapper direction="right">
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                {/* Map */}
                                <div className="ct-map-wrapper" style={{ position: 'relative', overflow: 'hidden', height: '380px', borderRadius: '12px', border: '1px solid var(--color-border-light)' }}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6853860477017!2d77.1983058145576!3d28.5491763946059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce208c5c765ef%3A0xa11c471017df8fd!2sSDA%20Market!5e0!3m2!1sen!2sin!4v1683907409249!5m2!1sen!2sin"
                                        title="D'CosMedis Clinic Location"
                                        style={{ width: '100%', height: '100%', border: 0, filter: 'grayscale(20%) contrast(1.1)' }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                    <div className="ct-map-label">
                                        <MapPin size={12} style={{ color: 'var(--color-wine)' }} />
                                        SDA Market, Hauz Khas, New Delhi
                                    </div>
                                </div>

                                {/* Quick facts */}
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    {[
                                        { label: 'Clinic Locations', val: '15+' },
                                        { label: 'Years of Excellence', val: '30+' },
                                        { label: 'Happy Patients', val: '50K+' },
                                        { label: 'Expert Doctors', val: '10+' },
                                    ].map((f, i) => (
                                        <div key={i} style={{ background: 'var(--color-bg-cream)', padding: '1.5rem', textAlign: 'center', border: '1px solid #f0ede8', borderRadius: '8px' }}>
                                            <span style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--color-dark)', fontWeight: 600, lineHeight: 1 }}>{f.val}</span>
                                            <span style={{ display: 'block', fontSize: '0.6rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-wine)', opacity: 0.8, marginTop: '0.5rem' }}>{f.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </RevealWrapper>
                    </div>
                </div>
            </section>

            {/* ─── SOCIAL SECTION ─── */}
            <section style={{ background: 'var(--color-bg-dark)', padding: '6rem 0', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '70rem' }}>
                    <RevealWrapper>
                        <span style={{ display: 'block', fontSize: '0.625rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700, color: '#888', marginBottom: '1rem' }}>Stay Connected</span>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '0.75rem' }}>
                            Connect With <span style={{ fontStyle: 'italic', color: 'var(--color-wine)' }}>Us</span>
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', marginBottom: '3.5rem' }}>
                            Follow us for skincare tips, before-and-after stories, and exclusive offers.
                        </p>
                    </RevealWrapper>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                        {socials.map((s, i) => (
                            <RevealWrapper key={i} direction="up" delay={i * 0.1}>
                                <a href={s.href} target="_blank" rel="noopener noreferrer" className="ct-social" style={{ background: s.bg, textDecoration: 'none' }}>
                                    <div className="ct-social-icon">
                                        <s.icon size={22} style={{ color: '#fff' }} />
                                    </div>
                                    <div>
                                        <span style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: '#fff', fontWeight: 600, marginBottom: '0.2rem' }}>{s.name}</span>
                                        <span style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>{s.handle}</span>
                                    </div>
                                    <span style={{ fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, color: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                        Follow Us <ArrowRight size={11} />
                                    </span>
                                </a>
                            </RevealWrapper>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
