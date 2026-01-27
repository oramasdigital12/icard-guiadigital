import { useState, useEffect } from 'react'
import logoImage from '../img/logo.jpg'
import banner1 from '../img/banner1.jpg'
import banner3 from '../img/banner3.jpg'
import LeadModal from '../components/LeadModal'
import { debugSupabaseAuth } from '../utils/supabaseHelper'

const professionalInfo = {
  name: 'Tu Guía Digital',
  title: 'Especialistas en talleres de tecnología',
  description: 'Más de 3 años de experiencia en cursos y talleres sabatinos en tecnología.',
  location: {
    text: 'San Juan, PR',
    maps: 'https://maps.app.goo.gl/RdWtajo13S1nbTvs6'
  },
  email: 'tuguiadigital12@gmail.com',
  phone: '9392283101',
  whatsapp: '9392283101',
  website: 'https://tuguiadigital.netlify.app',
  feedbacks: [
    {
      id: 1,
      image: banner1,
      category: 'Talleres'
    },
    {
      id: 3,
      image: banner3,
      category: 'Tecnología'
    }
  ]
}

function Funnel1() {
  const [currentFeedback, setCurrentFeedback] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContext] = useState('los talleres de tecnología');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeedback((prev) => 
        prev === professionalInfo.feedbacks.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    
    if (import.meta.env.DEV) {
      console.log('🔧 Modo desarrollo - Debug de Supabase Auth:');
      debugSupabaseAuth();
    }

    return () => {
      clearInterval(timer);
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container" style={{ position: 'relative' }}>
      {/* Background Decorativo Moderno */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}>
        {/* Gradiente de fondo */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        }} />
        
        {/* Círculos decorativos */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }} />
        
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          filter: 'blur(50px)'
        }} />
        
        {/* Patrón de puntos */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.3
        }} />
        
        {/* Formas geométricas flotantes */}
        <svg style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '80px',
          height: '80px',
          opacity: 0.1,
          animation: 'float 6s ease-in-out infinite'
        }} viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="60" fill="white" transform="rotate(45 50 50)"/>
        </svg>
        
        <svg style={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '60px',
          height: '60px',
          opacity: 0.1,
          animation: 'float 8s ease-in-out infinite reverse'
        }} viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="4"/>
        </svg>
      </div>
      
      <div className="card" style={{ position: 'relative', zIndex: 1 }}>
        {/* Feedback Slideshow */}
        <div className="feedback-section-top">
          <div className="feedback-slideshow">
            {professionalInfo.feedbacks.map((feedback, index) => (
              <div
                key={feedback.id}
                className={`feedback-slide ${index === currentFeedback ? 'active' : ''}`}
              >
                <img src={feedback.image} alt={`Feedback ${feedback.id}`} className="banner-image" />
              </div>
            ))}
          </div>
        </div>

        {/* Card Header with Logo */}
        <div className="card-header">
          <div className="header-main">
            <div className="avatar">
              <img 
                src={logoImage}
                alt={professionalInfo.name}
                className="avatar-image"
              />
            </div>
          </div>
          <div className="header-content">
            <h1 className="title">{professionalInfo.name}</h1>
            <h2 className="subtitle">{professionalInfo.title}</h2>
            <p className="description">{professionalInfo.description}</p>
            
            {/* Validación Social */}
            <div style={{
              marginTop: '1rem',
              padding: '0.75rem 1.5rem',
              background: 'rgba(37, 211, 102, 0.1)',
              border: '1px solid rgba(37, 211, 102, 0.3)',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <span style={{
                color: '#25D366',
                fontSize: '0.9rem',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}>
                ⭐ Más de 300 personas ya se comunicaron por aquí.
              </span>
            </div>
          </div>
        </div>

        {/* Call-to-Action Principal */}
        <div style={{ 
          padding: '0 2rem 2rem 2rem',
          textAlign: 'center'
        }}>
          <button
            onClick={openModal}
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: '12px',
              padding: '1.2rem 2rem',
              fontWeight: '600',
              fontSize: '1.2rem',
              boxShadow: '0 4px 16px rgba(37, 211, 102, 0.3)',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              minHeight: '48px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(37, 211, 102, 0.3)';
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
            </svg>
            📲 Habla ahora por WhatsApp
          </button>
        </div>

      </div>

      {/* Lead Modal Component */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={closeModal}
        context={modalContext}
        whatsappNumber={professionalInfo.whatsapp}
      />
      
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }
      `}</style>
    </div>
  );
}

export default Funnel1

