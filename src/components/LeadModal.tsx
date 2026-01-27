/**
 * LeadModal Component
 * Modal moderno con formulario guiado paso a paso
 * 
 * Flujo:
 * 1. Usuario ingresa nombre completo
 * 2. Usuario ingresa número de teléfono
 * 3. Se envía el lead a LeadsPro
 * 4. Se redirige a WhatsApp
 */

import { useState } from 'react';
import { enviarLeadAFacturaPro, validarConfiguracionAPI } from '../services/leadService';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  context: string; // El contexto del interés (ej: "Microsoft Office")
  whatsappNumber: string;
}

export default function LeadModal({ isOpen, onClose, context, whatsappNumber }: LeadModalProps) {
  const [step, setStep] = useState(1); // 1: nombre, 2: teléfono, 3: enviando
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: ''
  });
  const [errors, setErrors] = useState({
    nombre: '',
    telefono: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Cerrar modal y resetear
  const handleClose = () => {
    setStep(1);
    setFormData({ nombre: '', telefono: '' });
    setErrors({ nombre: '', telefono: '' });
    onClose();
  };

  // Validar nombre
  const validateNombre = () => {
    if (!formData.nombre.trim()) {
      setErrors(prev => ({ ...prev, nombre: 'Por favor ingresa tu nombre' }));
      return false;
    }
    if (formData.nombre.trim().length < 2) {
      setErrors(prev => ({ ...prev, nombre: 'El nombre debe tener al menos 2 caracteres' }));
      return false;
    }
    setErrors(prev => ({ ...prev, nombre: '' }));
    return true;
  };

  // Validar teléfono
  const validateTelefono = () => {
    const cleanPhone = formData.telefono.replace(/\D/g, '');
    
    if (!cleanPhone) {
      setErrors(prev => ({ ...prev, telefono: 'Por favor ingresa tu teléfono' }));
      return false;
    }
    if (cleanPhone.length < 10) {
      setErrors(prev => ({ ...prev, telefono: 'El teléfono debe tener al menos 10 dígitos' }));
      return false;
    }
    setErrors(prev => ({ ...prev, telefono: '' }));
    return true;
  };

  // Formatear teléfono mientras se escribe
  const formatPhoneNumber = (phone: string) => {
    const numbers = phone.replace(/\D/g, '');
    const limitedNumbers = numbers.slice(0, 10);
    
    if (limitedNumbers.length >= 6) {
      return `(${limitedNumbers.slice(0, 3)}) ${limitedNumbers.slice(3, 6)}-${limitedNumbers.slice(6)}`;
    } else if (limitedNumbers.length >= 3) {
      return `(${limitedNumbers.slice(0, 3)}) ${limitedNumbers.slice(3)}`;
    } else if (limitedNumbers.length > 0) {
      return `(${limitedNumbers}`;
    }
    
    return limitedNumbers;
  };

  // Manejar siguiente paso
  const handleNext = () => {
    if (step === 1) {
      if (validateNombre()) {
        setStep(2);
      }
    } else if (step === 2) {
      if (validateTelefono()) {
        handleSubmit();
      }
    }
  };

  // Enviar formulario
  const handleSubmit = async () => {
    setIsSubmitting(true);
    setStep(3); // Mostrar loading

    try {
      // Intentar enviar a LeadsPro si está configurado
      if (validarConfiguracionAPI()) {
        console.log('📤 Enviando lead a FacturaPro...');
        const result = await enviarLeadAFacturaPro({
          nombre: formData.nombre,
          telefono: formData.telefono
        });

        if (result.success) {
          console.log('✅ Lead registrado exitosamente');
        } else {
          console.warn('⚠️ Error al registrar lead:', result.message);
        }
      }

      // Esperar un momento para mostrar el éxito
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Preparar mensaje para WhatsApp
      const message = `Hola! Me llamo ${formData.nombre.trim()}, mi teléfono es ${formData.telefono}. Me interesa ${context}. ¿Podrías darme más información?`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      
      // Detectar si es móvil
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      // Abrir WhatsApp
      if (isMobile) {
        window.location.href = whatsappUrl;
      } else {
        window.open(whatsappUrl, '_blank');
      }

      // Cerrar modal después de un momento
      setTimeout(() => {
        handleClose();
      }, 500);

    } catch (error) {
      console.error('❌ Error al procesar:', error);
      // Aún así redirigir a WhatsApp
      const message = `Hola! Me llamo ${formData.nombre.trim()}, mi teléfono es ${formData.telefono}. Me interesa ${context}. ¿Podrías darme más información?`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      handleClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={handleClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(4px)',
          zIndex: 9998,
          animation: 'fadeIn 0.3s ease-out'
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: '#fff',
          borderRadius: '24px',
          padding: 'clamp(2rem, 5vw, 3rem)',
          maxWidth: '500px',
          width: '90%',
          maxHeight: '90vh',
          overflow: 'auto',
          zIndex: 9999,
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          animation: 'slideUp 0.3s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cerrar */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#f0f0f0'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="#666" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Indicador de pasos */}
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          marginBottom: '2rem',
          justifyContent: 'center'
        }}>
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              style={{
                width: step >= s ? '40px' : '12px',
                height: '4px',
                borderRadius: '2px',
                background: step >= s 
                  ? 'linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)'
                  : '#e0e0e0',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>

        {/* Paso 1: Nombre */}
        {step === 1 && (
          <div style={{ animation: 'fadeIn 0.3s ease-out' }}>
            <div style={{
              textAlign: 'center',
              marginBottom: '2rem'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)',
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: '800',
                color: '#1a1a1a',
                marginBottom: '0.5rem'
              }}>
                ¿Cómo te llamas?
              </h2>
              <p style={{
                color: '#666',
                fontSize: '1rem'
              }}>
                Para comenzar, necesitamos saber tu nombre
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <input
                type="text"
                placeholder="Nombre completo"
                value={formData.nombre}
                onChange={(e) => setFormData(prev => ({ ...prev, nombre: e.target.value }))}
                onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                autoFocus
                style={{
                  width: '100%',
                  padding: '1rem 1.5rem',
                  fontSize: '1.1rem',
                  border: errors.nombre ? '2px solid #ff6b6b' : '2px solid #e0e0e0',
                  borderRadius: '12px',
                  outline: 'none',
                  transition: 'border-color 0.3s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => !errors.nombre && (e.target.style.borderColor = '#00B4DB')}
                onBlur={(e) => !errors.nombre && (e.target.style.borderColor = '#e0e0e0')}
              />
              {errors.nombre && (
                <p style={{
                  color: '#ff6b6b',
                  fontSize: '0.9rem',
                  marginTop: '0.5rem',
                  marginLeft: '0.5rem'
                }}>
                  {errors.nombre}
                </p>
              )}
            </div>

            <button
              onClick={handleNext}
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: '12px',
                padding: '1rem 1.5rem',
                fontSize: '1.1rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 4px 16px rgba(0, 180, 219, 0.3)',
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
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 180, 219, 0.3)';
              }}
            >
              <span>Continuar</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}

        {/* Paso 2: Teléfono */}
        {step === 2 && (
          <div style={{ animation: 'fadeIn 0.3s ease-out' }}>
            <button
              onClick={() => setStep(1)}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#666',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Atrás
            </button>

            <div style={{
              textAlign: 'center',
              marginBottom: '2rem'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)',
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92V19.92C22 20.4896 21.5304 20.9592 20.9608 20.9592C9.44121 20.4896 2.51041 13.5588 2.04082 2.03922C2.04082 1.46957 2.51041 1 3.08007 1H6.08007C6.64972 1 7.11932 1.46957 7.11932 2.03922C7.11932 3.17853 7.2989 4.27831 7.63808 5.31808C7.75757 5.68724 7.63808 6.09591 7.35859 6.35589L5.8191 7.89538C7.15831 10.7542 9.34504 12.9409 12.2039 14.2801L13.7434 12.7406C14.0034 12.4806 14.412 12.3411 14.7812 12.4606C15.821 12.7998 16.9207 12.9794 18.06 12.9794C18.6297 12.9794 19.0993 13.449 19.0993 14.0186V16.92C19.0993 17.4896 18.6297 17.9592 18.06 17.9592H16.52" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: '800',
                color: '#1a1a1a',
                marginBottom: '0.5rem'
              }}>
                ¡Perfecto, {formData.nombre.split(' ')[0]}!
              </h2>
              <p style={{
                color: '#666',
                fontSize: '1rem'
              }}>
                ¿Cuál es tu número de teléfono?
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <input
                type="tel"
                placeholder="(787) 123-4567"
                value={formData.telefono}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  telefono: formatPhoneNumber(e.target.value) 
                }))}
                onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                autoFocus
                maxLength={14}
                style={{
                  width: '100%',
                  padding: '1rem 1.5rem',
                  fontSize: '1.1rem',
                  border: errors.telefono ? '2px solid #ff6b6b' : '2px solid #e0e0e0',
                  borderRadius: '12px',
                  outline: 'none',
                  transition: 'border-color 0.3s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => !errors.telefono && (e.target.style.borderColor = '#00B4DB')}
                onBlur={(e) => !errors.telefono && (e.target.style.borderColor = '#e0e0e0')}
              />
              {errors.telefono && (
                <p style={{
                  color: '#ff6b6b',
                  fontSize: '0.9rem',
                  marginTop: '0.5rem',
                  marginLeft: '0.5rem'
                }}>
                  {errors.telefono}
                </p>
              )}
            </div>

            <button
              onClick={handleNext}
              disabled={isSubmitting}
              style={{
                width: '100%',
                background: isSubmitting
                  ? '#ccc'
                  : 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: '12px',
                padding: '1rem 1.5rem',
                fontSize: '1.1rem',
                fontWeight: '700',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 4px 16px rgba(37, 211, 102, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                opacity: isSubmitting ? 0.7 : 1
              }}
              onMouseEnter={(e) => !isSubmitting && (
                e.currentTarget.style.transform = 'translateY(-2px)',
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)'
              )}
              onMouseLeave={(e) => !isSubmitting && (
                e.currentTarget.style.transform = 'translateY(0)',
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(37, 211, 102, 0.3)'
              )}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z" fill="white"/>
              </svg>
              <span>Enviar y abrir WhatsApp</span>
            </button>

            <p style={{
              textAlign: 'center',
              color: '#999',
              fontSize: '0.85rem',
              marginTop: '1rem'
            }}>
              🔒 Tu información está segura con nosotros
            </p>
          </div>
        )}

        {/* Paso 3: Enviando */}
        {step === 3 && (
          <div style={{
            textAlign: 'center',
            padding: '2rem 0',
            animation: 'fadeIn 0.3s ease-out'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
              margin: '0 auto 2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'pulse 1.5s ease-in-out infinite'
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#1a1a1a',
              marginBottom: '0.5rem'
            }}>
              ¡Perfecto!
            </h2>
            <p style={{
              color: '#666',
              fontSize: '1rem'
            }}>
              Abriendo WhatsApp...
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translate(-50%, -45%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </>
  );
}

