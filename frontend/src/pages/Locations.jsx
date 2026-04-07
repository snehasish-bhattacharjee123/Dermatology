import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, ExternalLink, ArrowRight } from 'lucide-react'
import { RevealWrapper } from '../hooks/useAnimations'
import { locations } from '../data/siteData'

export default function Locations() {
    return (
        <div style={{ background: '#fff' }}>
            <style>{`
                .loc-card { display: flex; flex-direction: column; background: #fff; border: 1px solid #f0ede8; transition: all 0.4s ease; height: 100%; position: relative; overflow: hidden; }
                .loc-card:hover { transform: translateY(-8px); box-shadow: 0 20px 50px rgba(0,0,0,0.08); border-color: transparent; }
                
                .loc-img-wrap { position: relative; width: 100%; height: 280px; overflow: hidden; }
                .loc-img { width: 100%; height: 100%; object-fit: cover; transition: transform 1.5s ease; }
                .loc-card:hover .loc-img { transform: scale(1.05); }
                
                .loc-badge { position: absolute; top: 1.5rem; left: 1.5rem; background: var(--color-dark); color: var(--color-gold); font-size: 0.6rem; letter-spacing: 3px; text-transform: uppercase; font-weight: 700; padding: 0.4rem 1rem; z-index: 2; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
                
                .loc-body { padding: 3rem 2.5rem; display: flex; flex-direction: column; flex-grow: 1; }
                
                .loc-info-row { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.5rem; }
                .loc-info-label { display: block; font-size: 0.55rem; letter-spacing: 2px; text-transform: uppercase; font-weight: 700; color: #aaa; margin-bottom: 0.3rem;}
                .loc-info-text { font-size: 0.95rem; color: var(--color-dark); line-height: 1.6; }
                .loc-info-link { color: var(--color-dark); transition: color 0.3s; display: inline-block; }
                .loc-info-link:hover { color: var(--color-gold); }
                
                .loc-actions { display: flex; gap: 1rem; margin-top: auto; padding-top: 2rem; border-top: 1px solid #f0ede8; flex-wrap: wrap; }
                .loc-btn-primary { flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; background: var(--color-gold); color: #fff; padding: 1rem; font-size: 0.7rem; letter-spacing: 2px; text-transform: uppercase; font-weight: 700; transition: all 0.3s; text-align: center; }
                .loc-btn-primary:hover { background: var(--color-dark); }
                .loc-btn-secondary { flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; background: transparent; border: 1px solid #e0dbd5; color: var(--color-dark); padding: 1rem; font-size: 0.7rem; letter-spacing: 2px; text-transform: uppercase; font-weight: 700; transition: all 0.3s; text-align: center; }
                .loc-btn-secondary:hover { border-color: var(--color-dark); background: rgba(0,0,0,0.02); }
            `}</style>

            {/* ─── HERO ─── */}
            <section style={{ position: 'relative', minHeight: '55vh', display: 'flex', alignItems: 'center', overflow: 'hidden', marginTop: 'var(--header-total-height)' }}>
                <div style={{ position: 'absolute', inset: 0 }}>
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
                        alt="Our Locations"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg, rgba(30,18,25,0.95) 0%, rgba(57,33,47,0.7) 60%, rgba(0,0,0,0.3) 100%)' }} />
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                    <RevealWrapper>
                        <span style={{ display: 'inline-block', fontSize: '0.625rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-gold)', background: 'rgba(135,91,108,0.12)', border: '1px solid rgba(135,91,108,0.3)', borderRadius: '9999px', padding: '0.4rem 1.25rem', marginBottom: '1.25rem' }}>
                            Visit Us
                        </span>
                        <h1 style={{ fontFamily: 'var(--font-heading)', color: '#fff', letterSpacing: '4px', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '1.5rem', fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
                            <span style={{ display: 'block', fontWeight: 300 }}>Our Clinic</span>
                            <span style={{ display: 'block', fontWeight: 700, color: 'var(--color-gold)', fontStyle: 'italic' }}>Locations</span>
                        </h1>
                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.125rem', fontWeight: 300, maxWidth: '36rem', margin: '0 auto', lineHeight: 1.8 }}>
                            D'CosMedis clinics feature state-of-the-art facilities designed for comfort, privacy, and clinical excellence. Find a location near you.
                        </p>
                    </RevealWrapper>
                </div>
            </section>

            {/* ─── LOCATIONS GRID ─── */}
            <section style={{ background: 'var(--color-bg-cream)', padding: '6rem 0' }}>
                <div className="container" style={{ maxWidth: '80rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
                        {locations.map((loc, i) => (
                            <RevealWrapper key={loc.id} direction="up" delay={i * 0.1}>
                                <div className="loc-card">
                                    <div className="loc-img-wrap">
                                        <div className="loc-badge">D'CosMedis Clinic</div>
                                        <img src={loc.image} alt={loc.name} className="loc-img" />
                                    </div>
                                    
                                    <div className="loc-body">
                                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--color-dark)', marginBottom: '2.5rem' }}>
                                            {loc.name}
                                        </h2>
                                        
                                        <div className="loc-info-row">
                                            <MapPin size={18} style={{ color: 'var(--color-gold)', marginTop: '0.2rem' }} />
                                            <div>
                                                <span className="loc-info-label">Address</span>
                                                <span className="loc-info-text lg:pr-8">{loc.address}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="loc-info-row">
                                            <Phone size={18} style={{ color: 'var(--color-gold)', marginTop: '0.2rem' }} />
                                            <div>
                                                <span className="loc-info-label">Contact</span>
                                                <a href={`tel:${loc.phone}`} className="loc-info-text loc-info-link">{loc.phone}</a>
                                                <br/>
                                                <a href={`mailto:${loc.email}`} className="loc-info-text loc-info-link" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{loc.email}</a>
                                            </div>
                                        </div>
                                        
                                        <div className="loc-info-row" style={{ marginBottom: '0' }}>
                                            <Clock size={18} style={{ color: 'var(--color-gold)', marginTop: '0.2rem' }} />
                                            <div>
                                                <span className="loc-info-label">Working Hours</span>
                                                <span className="loc-info-text">{loc.hours}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="loc-actions">
                                            <Link to="/book" className="loc-btn-primary">
                                                Book Appointment <ArrowRight size={14}/>
                                            </Link>
                                            <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer" className="loc-btn-secondary">
                                                Get Directions <ExternalLink size={14}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </RevealWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA BANNER ─── */}
            <section style={{ background: 'var(--color-dark)', padding: '5rem 0', textAlign: 'center' }}>
                <div className="container">
                    <RevealWrapper>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: '#fff', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                            Experience <span style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>Excellence</span>
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '40rem', margin: '0 auto 2.5rem', fontWeight: 300 }}>
                            All our locations are equipped with the most advanced aesthetic technology and staffed by expert, board-certified dermatologists.
                        </p>
                        <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', padding: '1rem 3rem', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, transition: 'all 0.3s' }} className="hover:bg-gold hover:text-white">
                            Contact Concierge
                        </Link>
                    </RevealWrapper>
                </div>
            </section>
        </div>
    )
}
