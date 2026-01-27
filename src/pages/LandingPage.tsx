/**
 * Landing Page Moderna para Tu Guía Digital
 * Estilo 2026 - Sin fricción, directo al grano
 * Full responsive - Mobile first
 */

import { useState } from 'react';
import WhatsAppButton from '../components/WhatsAppButton';
import LeadModal from '../components/LeadModal';
import logoImage from '../img/logo.jpg';
import logoWhite from '../img/ISOTIPO VERS BLANCO.png';
import banner1 from '../img/banner1.jpg';
import banner3 from '../img/banner3.jpg';

const professionalInfo = {
  name: 'Tu Guía Digital',
  phone: '9392283101',
  email: 'tuguiadigital12@gmail.com',
  location: {
    text: 'San Juan, PR',
    maps: 'https://maps.app.goo.gl/RdWtajo13S1nbTvs6'
  },
  instagram: 'https://www.instagram.com/tuguiadigitalpr',
  facebook: 'https://www.facebook.com/tuguiadigitalpr',
};

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContext, setModalContext] = useState('');

  const openModal = (context: string) => {
    setModalContext(context);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContext('');
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      width: '100%',
      background: '#fff',
      paddingBottom: '80px', // Espacio para el botón sticky en mobile
      overflowX: 'hidden',
      position: 'relative'
    }}>
      {/* Background Decorativo - Elementos Abstractos */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}>
        {/* Círculo superior derecha */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 180, 219, 0.08) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }} />
        
        {/* Círculo medio izquierda */}
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 131, 176, 0.06) 0%, transparent 70%)',
          filter: 'blur(50px)'
        }} />
        
        {/* Círculo inferior derecha */}
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '-8%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 180, 219, 0.05) 0%, transparent 70%)',
          filter: 'blur(45px)'
        }} />
        
        {/* Grid pattern sutil */}
        <svg style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.03
        }}>
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00B4DB" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Contenido con z-index superior */}
      <div style={{ position: 'relative', zIndex: 1 }}>
      {/* Header / Navbar */}
      <header style={{
        position: 'sticky',
        top: 0,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0, 180, 219, 0.1)',
        padding: '0.75rem 1rem',
        zIndex: 100,
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src={logoImage} alt="Tu Guía Digital" style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow: '0 2px 8px rgba(0, 180, 219, 0.3)'
            }} />
            <span style={{
              fontSize: 'clamp(1rem, 4vw, 1.5rem)',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Tu Guía Digital</span>
          </div>
          
          {/* Iconos de Redes Sociales */}
          <div style={{
            display: 'flex',
            gap: 'clamp(0.5rem, 2vw, 0.75rem)',
            alignItems: 'center'
          }}>
            {/* Ubicación */}
            <a
              href={professionalInfo.location.maps}
              target="_blank"
              rel="noopener noreferrer"
              title={professionalInfo.location.text}
              style={{
                width: 'clamp(36px, 8vw, 40px)',
                height: 'clamp(36px, 8vw, 40px)',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 3px 10px rgba(0, 180, 219, 0.3)',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 180, 219, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 3px 10px rgba(0, 180, 219, 0.3)';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{
                flexShrink: 0,
                width: 'clamp(18px, 4vw, 20px)',
                height: 'clamp(18px, 4vw, 20px)'
              }}>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href={professionalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              style={{
                width: 'clamp(36px, 8vw, 40px)',
                height: 'clamp(36px, 8vw, 40px)',
                borderRadius: '50%',
                background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 3px 10px rgba(240, 148, 51, 0.3)',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(240, 148, 51, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 3px 10px rgba(240, 148, 51, 0.3)';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{
                flexShrink: 0,
                width: 'clamp(18px, 4vw, 20px)',
                height: 'clamp(18px, 4vw, 20px)'
              }}>
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2"/>
                <circle cx="18" cy="6" r="1.5" fill="white"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href={professionalInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
              style={{
                width: 'clamp(36px, 8vw, 40px)',
                height: 'clamp(36px, 8vw, 40px)',
                borderRadius: '50%',
                background: '#1877F2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 3px 10px rgba(24, 119, 242, 0.3)',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(24, 119, 242, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 3px 10px rgba(24, 119, 242, 0.3)';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{
                flexShrink: 0,
                width: 'clamp(18px, 4vw, 20px)',
                height: 'clamp(18px, 4vw, 20px)'
              }}>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="white"/>
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)',
        color: '#fff',
        padding: 'clamp(2rem, 8vw, 4rem) clamp(1rem, 4vw, 2rem)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Elementos decorativos del hero */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '5%',
          left: '10%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.08)',
          filter: 'blur(50px)',
          pointerEvents: 'none'
        }} />
        
        {/* Formas geométricas decorativas */}
        <svg style={{
          position: 'absolute',
          top: '20%',
          left: '5%',
          width: '60px',
          height: '60px',
          opacity: 0.1,
          pointerEvents: 'none'
        }} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
          <path d="M12 2v20M2 12h20" stroke="white" strokeWidth="1"/>
        </svg>
        
        <svg style={{
          position: 'absolute',
          bottom: '15%',
          right: '8%',
          width: '80px',
          height: '80px',
          opacity: 0.1,
          pointerEvents: 'none'
        }} viewBox="0 0 24 24" fill="none">
          <rect x="4" y="4" width="16" height="16" stroke="white" strokeWidth="2" transform="rotate(45 12 12)"/>
        </svg>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '30px',
            padding: '0.5rem 1rem',
            marginBottom: 'clamp(1rem, 3vw, 2rem)',
            fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
            fontWeight: '600',
            backdropFilter: 'blur(10px)'
          }}>
            ✨ Especialistas en Tecnología
          </div>
          
          <h1 style={{
            fontSize: 'clamp(1.75rem, 7vw, 3.5rem)',
            fontWeight: '800',
            marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
            lineHeight: '1.2',
            textShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
            padding: '0 0.5rem'
          }}>
            Domina la Tecnología <br/>
            <span style={{
              background: 'linear-gradient(to right, #fff, rgba(255,255,255,0.8))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Con Nuestros Talleres</span>
          </h1>
          
          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.3rem)',
            opacity: 0.95,
            maxWidth: '700px',
            margin: '0 auto',
            marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)',
            padding: '0 0.5rem',
            lineHeight: '1.6'
          }}>
            Más de 3 años de experiencia formando profesionales en cursos y talleres sabatinos especializados en tecnología.
          </p>

          <div style={{
            display: 'flex',
            gap: 'clamp(0.75rem, 2vw, 1rem)',
            justifyContent: 'center',
            flexWrap: 'wrap',
            padding: '0 0.5rem'
          }}>
            <button
              onClick={() => openModal('información sobre los talleres')}
              style={{
                background: '#fff',
                color: '#00B4DB',
                border: 'none',
                borderRadius: '12px',
                padding: 'clamp(1rem, 3vw, 1.2rem) clamp(1.5rem, 4vw, 2.5rem)',
                fontWeight: '700',
                fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                whiteSpace: 'nowrap',
                minWidth: 'fit-content'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
              </svg>
              <span>Hablar con nosotros</span>
            </button>
            
            <a
              href="#servicios"
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                color: '#fff',
                border: '2px solid rgba(255, 255, 255, 0.5)',
                borderRadius: '12px',
                padding: 'clamp(1rem, 3vw, 1.2rem) clamp(1.5rem, 4vw, 2.5rem)',
                fontWeight: '700',
                fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.2s',
                textDecoration: 'none',
                display: 'inline-block',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.borderColor = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
              }}
            >
              Ver Talleres
            </a>
          </div>

          {/* Social Proof */}
          <div style={{
            marginTop: 'clamp(2rem, 5vw, 3rem)',
            padding: 'clamp(1rem, 3vw, 1.5rem)',
            background: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '16px',
            backdropFilter: 'blur(10px)',
            display: 'inline-block',
            maxWidth: '90%'
          }}>
            <p style={{
              margin: 0,
              fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <span>⭐</span>
              <span>Más de 300 personas ya se comunicaron con nosotros</span>
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        padding: 'clamp(2rem, 5vw, 3rem) clamp(1rem, 3vw, 2rem)',
        background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Patrón decorativo */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.4,
          backgroundImage: `radial-gradient(circle, rgba(0, 180, 219, 0.05) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
          pointerEvents: 'none'
        }} />
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: 'clamp(1.5rem, 4vw, 2rem)',
          textAlign: 'center'
        }}>
          <div>
            <div style={{
              fontSize: '3rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '0.5rem'
            }}>3+</div>
            <p style={{
              color: '#666',
              fontWeight: '600',
              margin: 0
            }}>Años de Experiencia</p>
          </div>
          
          <div>
            <div style={{
              fontSize: '3rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '0.5rem'
            }}>300+</div>
            <p style={{
              color: '#666',
              fontWeight: '600',
              margin: 0
            }}>Estudiantes Satisfechos</p>
          </div>
          
          <div>
            <div style={{
              fontSize: '3rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '0.5rem'
            }}>100%</div>
            <p style={{
              color: '#666',
              fontWeight: '600',
              margin: 0
            }}>Práctico y Efectivo</p>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" style={{
        padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 3vw, 2rem)',
        background: '#fff'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: 'clamp(2.5rem, 6vw, 4rem)'
          }}>
            <span style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)',
              color: '#fff',
              borderRadius: '30px',
              padding: '0.5rem 1.25rem',
              marginBottom: '1rem',
              fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
              fontWeight: '600'
            }}>Nuestros Talleres</span>
            
            <h2 style={{
              fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
              fontWeight: '800',
              color: '#1a1a1a',
              marginBottom: '1rem',
              padding: '0 0.5rem'
            }}>
              Aprende <span style={{
                background: 'linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Tecnología</span> de Forma Práctica
            </h2>
            
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto',
              padding: '0 1rem',
              lineHeight: '1.6'
            }}>
              Talleres sabatinos diseñados para que domines las herramientas tecnológicas más demandadas
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)'
          }}>
            {/* Servicio 1 */}
            <div style={{
              background: '#fff',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer',
              border: '1px solid rgba(0, 180, 219, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 180, 219, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
            }}
            onClick={() => openModal('los talleres de Microsoft Office')}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                boxShadow: '0 4px 16px rgba(0, 180, 219, 0.3)'
              }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="7" height="7" rx="1" fill="white" opacity="0.9"/>
                  <rect x="3" y="14" width="7" height="7" rx="1" fill="white" opacity="0.9"/>
                  <rect x="14" y="3" width="7" height="7" rx="1" fill="white" opacity="0.9"/>
                  <rect x="14" y="14" width="7" height="7" rx="1" fill="white" opacity="0.9"/>
                </svg>
              </div>
              
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#1a1a1a',
                marginBottom: '1rem'
              }}>Microsoft Office</h3>
              
              <p style={{
                color: '#666',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                Domina Word, Excel, PowerPoint y más. Desde lo básico hasta técnicas avanzadas.
              </p>
              
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 1.5rem 0'
              }}>
                <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00B4DB' }}>
                  ✓ <span style={{ color: '#666' }}>Excel avanzado</span>
                </li>
                <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00B4DB' }}>
                  ✓ <span style={{ color: '#666' }}>Presentaciones profesionales</span>
                </li>
                <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00B4DB' }}>
                  ✓ <span style={{ color: '#666' }}>Documentos efectivos</span>
                </li>
              </ul>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openModal('información sobre el taller de Microsoft Office');
                }}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '1rem 1.5rem',
                  fontWeight: '700',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0, 180, 219, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 180, 219, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 180, 219, 0.3)';
                }}
              >
                <span>Más información</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Servicio 2 */}
            <div style={{
              background: '#fff',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer',
              border: '1px solid rgba(0, 180, 219, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 180, 219, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
            }}
            onClick={() => openModal('el curso de Canva Básico')}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                boxShadow: '0 4px 16px rgba(0, 180, 219, 0.3)'
              }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="2"/>
                  <path d="M3 9H21" stroke="white" strokeWidth="2"/>
                  <path d="M9 3V21" stroke="white" strokeWidth="2"/>
                  <circle cx="15" cy="6" r="1.5" fill="white"/>
                  <path d="M12 15L14 17L18 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#1a1a1a',
                marginBottom: '1rem'
              }}>Canva Básico</h3>
              
              <p style={{
                color: '#666',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                Crea diseños profesionales sin experiencia previa. Aprende a usar Canva para contenido visual impactante.
              </p>
              
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 1.5rem 0'
              }}>
                <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00B4DB' }}>
                  ✓ <span style={{ color: '#666' }}>Diseño gráfico básico</span>
                </li>
                <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00B4DB' }}>
                  ✓ <span style={{ color: '#666' }}>Plantillas y herramientas</span>
                </li>
                <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00B4DB' }}>
                  ✓ <span style={{ color: '#666' }}>Contenido para redes</span>
                </li>
              </ul>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openModal('información sobre el curso de Canva Básico');
                }}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '1rem 1.5rem',
                  fontWeight: '700',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0, 180, 219, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 180, 219, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 180, 219, 0.3)';
                }}
              >
                <span>Más información</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Servicio 3 */}
            <div style={{
              background: '#fff',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer',
              border: '1px solid rgba(0, 180, 219, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 180, 219, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
            }}
            onClick={() => openModal('los talleres de computación básica')}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                boxShadow: '0 4px 16px rgba(0, 180, 219, 0.3)'
              }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="3" width="20" height="14" rx="2" stroke="white" strokeWidth="2"/>
                  <path d="M8 21H16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 17V21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M7 10L10 13L7 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#1a1a1a',
                marginBottom: '1rem'
              }}>Computación Básica</h3>
              
              <p style={{
                color: '#666',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                Fundamentos esenciales para principiantes. Aprende desde cero con métodos prácticos y sencillos.
              </p>
              
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 1.5rem 0'
              }}>
                <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00B4DB' }}>
                  ✓ <span style={{ color: '#666' }}>Windows y navegación</span>
                </li>
                <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00B4DB' }}>
                  ✓ <span style={{ color: '#666' }}>Internet y correo</span>
                </li>
                <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00B4DB' }}>
                  ✓ <span style={{ color: '#666' }}>Seguridad digital</span>
                </li>
              </ul>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openModal('información sobre el taller de Computación Básica');
                }}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '1rem 1.5rem',
                  fontWeight: '700',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0, 180, 219, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 180, 219, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 180, 219, 0.3)';
                }}
              >
                <span>Más información</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section style={{
        padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 3vw, 2rem)',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Ondas decorativas sutiles */}
        <svg style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100px',
          opacity: 0.05
        }} preserveAspectRatio="none" viewBox="0 0 1200 100">
          <path d="M0,30 Q300,60 600,30 T1200,30 L1200,0 L0,0 Z" fill="#00B4DB"/>
        </svg>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: 'clamp(2.5rem, 6vw, 4rem)'
          }}>
            <span style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)',
              color: '#fff',
              borderRadius: '30px',
              padding: '0.5rem 1.25rem',
              marginBottom: '1rem',
              fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
              fontWeight: '600'
            }}>Testimonios</span>
            
            <h2 style={{
              fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
              fontWeight: '800',
              color: '#1a1a1a',
              marginBottom: '1rem',
              padding: '0 0.5rem'
            }}>
              Lo que dicen nuestros <span style={{
                background: 'linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>estudiantes</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)'
          }}>
            <div style={{
              background: '#fff',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
            }}>
              <div style={{ marginBottom: '1rem', color: '#FFD700', fontSize: '1.5rem' }}>
                ⭐⭐⭐⭐⭐
              </div>
              <p style={{
                color: '#666',
                fontStyle: 'italic',
                marginBottom: '1.5rem',
                lineHeight: '1.6'
              }}>
                "Excelentes talleres! Aprendí todo lo necesario para usar Excel en mi trabajo. Los instructores son muy pacientes y explican todo claramente."
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: '1.2rem'
                }}>M</div>
                <div>
                  <div style={{ fontWeight: '600', color: '#1a1a1a' }}>María Rodríguez</div>
                  <div style={{ fontSize: '0.9rem', color: '#999' }}>San Juan, PR</div>
                </div>
              </div>
            </div>

            <div style={{
              background: '#fff',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
            }}>
              <div style={{ marginBottom: '1rem', color: '#FFD700', fontSize: '1.5rem' }}>
                ⭐⭐⭐⭐⭐
              </div>
              <p style={{
                color: '#666',
                fontStyle: 'italic',
                marginBottom: '1.5rem',
                lineHeight: '1.6'
              }}>
                "Desde que tomé el taller de redes sociales, mi negocio ha crecido increíblemente. Ahora sé cómo promocionarme efectivamente."
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: '1.2rem'
                }}>C</div>
                <div>
                  <div style={{ fontWeight: '600', color: '#1a1a1a' }}>Carlos Méndez</div>
                  <div style={{ fontSize: '0.9rem', color: '#999' }}>Ponce, PR</div>
                </div>
              </div>
            </div>

            <div style={{
              background: '#fff',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
            }}>
              <div style={{ marginBottom: '1rem', color: '#FFD700', fontSize: '1.5rem' }}>
                ⭐⭐⭐⭐⭐
              </div>
              <p style={{
                color: '#666',
                fontStyle: 'italic',
                marginBottom: '1.5rem',
                lineHeight: '1.6'
              }}>
                "Nunca pensé que podría aprender computación a mi edad. Los talleres son muy accesibles y me siento mucho más segura usando la tecnología."
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: '1.2rem'
                }}>A</div>
                <div>
                  <div style={{ fontWeight: '600', color: '#1a1a1a' }}>Ana Santiago</div>
                  <div style={{ fontSize: '0.9rem', color: '#999' }}>Bayamón, PR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería / Proof Section */}
      <section style={{
        padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 3vw, 2rem)',
        background: '#fff'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: 'clamp(2rem, 5vw, 3rem)'
          }}>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
              fontWeight: '800',
              color: '#1a1a1a',
              marginBottom: '1rem',
              padding: '0 0.5rem'
            }}>
              Nuestros <span style={{
                background: 'linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Talleres</span> en Acción
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(1rem, 3vw, 1.5rem)'
          }}>
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <img src={banner1} alt="Taller en acción" style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover'
              }} />
            </div>
            
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <img src={banner3} alt="Taller en acción" style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover'
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section style={{
        padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 3vw, 2rem)',
        background: 'linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)',
        color: '#fff',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Elementos decorativos modernos */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          left: '-50px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          right: '-30px',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.08)',
          filter: 'blur(70px)',
          pointerEvents: 'none'
        }} />
        
        {/* Formas geométricas flotantes */}
        <svg style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '100px',
          height: '100px',
          opacity: 0.08,
          pointerEvents: 'none',
          animation: 'float 6s ease-in-out infinite'
        }} viewBox="0 0 100 100">
          <polygon points="50,10 90,35 75,75 25,75 10,35" fill="white"/>
        </svg>
        
        <svg style={{
          position: 'absolute',
          bottom: '15%',
          left: '8%',
          width: '70px',
          height: '70px',
          opacity: 0.08,
          pointerEvents: 'none',
          animation: 'float 8s ease-in-out infinite'
        }} viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="4"/>
          <circle cx="50" cy="50" r="20" fill="white"/>
        </svg>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 6vw, 2.8rem)',
            fontWeight: '800',
            marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
            lineHeight: '1.2',
            padding: '0 0.5rem'
          }}>
            ¿Listo para comenzar tu aprendizaje?
          </h2>
          
          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.2rem)',
            marginBottom: 'clamp(2rem, 5vw, 2.5rem)',
            opacity: 0.95,
            padding: '0 1rem',
            lineHeight: '1.6'
          }}>
            Contáctanos hoy y descubre cómo nuestros talleres pueden ayudarte a dominar la tecnología
          </p>
          
          <button
            onClick={() => openModal('inscribirme en los talleres')}
            style={{
              background: '#fff',
              color: '#00B4DB',
              border: 'none',
              borderRadius: '12px',
              padding: 'clamp(1.2rem, 3vw, 1.5rem) clamp(2rem, 5vw, 3rem)',
              fontWeight: '700',
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              maxWidth: '100%',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
            </svg>
            <span>Contáctanos por WhatsApp</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#1a1a1a',
        color: '#fff',
        padding: 'clamp(2rem, 5vw, 3rem) clamp(1rem, 3vw, 2rem)',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
            flexWrap: 'wrap'
          }}>
            <img src={logoWhite} alt="Tu Guía Digital" style={{
              width: 'clamp(40px, 8vw, 50px)',
              height: 'clamp(40px, 8vw, 50px)'
            }} />
            <span style={{
              fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
              fontWeight: '700'
            }}>Tu Guía Digital</span>
          </div>
          
          <p style={{
            color: '#999',
            marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
            padding: '0 1rem'
          }}>
            Especialistas en talleres de tecnología | San Juan, Puerto Rico
          </p>
          
          <div style={{
            display: 'flex',
            gap: 'clamp(1rem, 4vw, 2rem)',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
            padding: '0 1rem'
          }}>
            <a href={`mailto:${professionalInfo.email}`} style={{
              color: '#00B4DB',
              textDecoration: 'none',
              transition: 'color 0.2s',
              fontSize: 'clamp(0.85rem, 2vw, 1rem)',
              wordBreak: 'break-all'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#00B4DB'}>
              {professionalInfo.email}
            </a>
            <a href={`tel:+1${professionalInfo.phone}`} style={{
              color: '#00B4DB',
              textDecoration: 'none',
              transition: 'color 0.2s',
              fontSize: 'clamp(0.85rem, 2vw, 1rem)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#00B4DB'}>
              (939) 228-3101
            </a>
          </div>
          
          <div style={{
            paddingTop: 'clamp(1.5rem, 4vw, 2rem)',
            borderTop: '1px solid #333',
            color: '#666',
            fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
            padding: '0 1rem'
          }}>
            © 2026 Tu Guía Digital. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* Lead Modal Component */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={closeModal}
        context={modalContext}
        whatsappNumber={professionalInfo.phone}
      />

      {/* WhatsApp Button Component */}
      <WhatsAppButton 
        phoneNumber={professionalInfo.phone}
        message="Hola! Me gustaría obtener más información sobre los talleres de tecnología."
        onClickOverride={() => openModal('los talleres de tecnología')}
      />

      
      </div>

      <style>{`
        @media (min-width: 769px) {
          .desktop-only-button {
            display: inline-block !important;
          }
        }
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        html, body {
          scroll-behavior: smooth;
          overflow-x: hidden;
          width: 100%;
          max-width: 100vw;
        }
        
        #root {
          width: 100%;
          overflow-x: hidden;
        }
        
        @media (max-width: 768px) {
          h1, h2, h3 {
            word-break: break-word;
            hyphens: auto;
          }
          
          /* Mejorar padding en mobile */
          section {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
        }
        
        /* Animación suave para hover */
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Animación flotante para elementos decorativos */
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
      `}</style>
    </div>
  );
}

