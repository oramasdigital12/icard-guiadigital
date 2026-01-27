/**
 * WhatsAppButton Component
 * 
 * Botón de WhatsApp que se adapta según el dispositivo:
 * - Mobile: Botón sticky en la parte inferior con ancho completo
 * - Desktop/Tablet: Botón flotante circular en la esquina inferior derecha
 * 
 * @param {string} phoneNumber - Número de teléfono de WhatsApp (sin +)
 * @param {string} message - Mensaje predeterminado (opcional)
 * @param {function} onClickOverride - Función opcional para override del click
 */

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  onClickOverride?: () => void;
}

export default function WhatsAppButton({ phoneNumber, message, onClickOverride }: WhatsAppButtonProps) {
  const defaultMessage = message || "Hola, me gustaría obtener más información sobre sus servicios.";
  
  const handleClick = () => {
    // Si hay un override, usarlo en lugar de la funcionalidad default
    if (onClickOverride) {
      onClickOverride();
      return;
    }
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    try {
      if (isMobile) {
        window.location.href = whatsappUrl;
      } else {
        const newWindow = window.open(whatsappUrl, '_blank');
        if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
          window.location.href = whatsappUrl;
        }
      }
    } catch (error) {
      console.error('Error al abrir WhatsApp:', error);
      window.location.href = whatsappUrl;
    }
  };

  return (
    <>
      {/* Botón Sticky para Mobile */}
      <button
        onClick={handleClick}
        className="whatsapp-button-mobile"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          width: '100%',
          padding: '1.2rem',
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          color: '#fff',
          border: 'none',
          fontWeight: '600',
          fontSize: '1.1rem',
          cursor: 'pointer',
          zIndex: 900,
          boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          transition: 'transform 0.3s, box-shadow 0.3s',
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = 'scale(0.98)';
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
        </svg>
        <span>Hablar con nosotros</span>
      </button>

      {/* Botón Flotante para Desktop/Tablet */}
      <button
        onClick={handleClick}
        className="whatsapp-button-desktop"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '6rem',
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          zIndex: 900,
          boxShadow: '0 4px 24px rgba(37, 211, 102, 0.4)',
          display: 'none',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.3s, box-shadow 0.3s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 6px 32px rgba(37, 211, 102, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 24px rgba(37, 211, 102, 0.4)';
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
        </svg>
      </button>

      <style>{`
        /* Media query para mostrar/ocultar botones según el dispositivo */
        @media (max-width: 768px) {
          .whatsapp-button-mobile {
            display: flex !important;
          }
          .whatsapp-button-desktop {
            display: none !important;
          }
        }

        @media (min-width: 769px) {
          .whatsapp-button-mobile {
            display: none !important;
          }
          .whatsapp-button-desktop {
            display: flex !important;
          }
        }

        /* Animación de pulso sutil para el botón flotante */
        @keyframes pulse {
          0% {
            box-shadow: 0 4px 24px rgba(37, 211, 102, 0.4);
          }
          50% {
            box-shadow: 0 4px 32px rgba(37, 211, 102, 0.6);
          }
          100% {
            box-shadow: 0 4px 24px rgba(37, 211, 102, 0.4);
          }
        }

        .whatsapp-button-desktop {
          animation: pulse 2s infinite;
        }
      `}</style>
    </>
  );
}

