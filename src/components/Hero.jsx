import React from 'react'
import { motion } from 'framer-motion'

const WHATSAPP_URL = 'https://wa.me/87019336833?text=Здравствуйте! Хочу узнать о вашей коллекции детской одежды'
const INSTAGRAM_URL = 'https://www.instagram.com/wanexkids.kz/'
const TELEGRAM_URL = 'tg://join?invite=5KK-xCstorIyNWU6'

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: (i = 0) => ({
    y: 0, opacity: 1,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  })
}

// SVG иконки в едином стиле (outline, strokeWidth 1.5)
const IconWhatsApp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)
const IconInstagram = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

export default function Hero() {
  const topHighlights = [
    {
      title: '20 лет на рынке',
      subtitle: 'Опыт и надежность с 2004 года',
      gradient: 'linear-gradient(135deg, #ff7f50, #ff4f81)',
    },
    {
      title: 'Бесплатная доставка',
      subtitle: 'По всему городу Астане за наш счёт',
      gradient: 'linear-gradient(135deg, #35c7dd, #2a9d8f)',
    },
    {
      title: 'Широкий ассортимент',
      subtitle: 'Одежда для детей всех возрастов и размеров',
      gradient: 'linear-gradient(135deg, #ffc857, #f77f00)',
    },
  ]

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #fdf6f0 0%, #faf0ea 40%, #f5e6e8 100%)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    }}>
      {/* Декоративные фоновые акценты */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%',
        width: 600, height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(248,187,208,0.25) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-15%', left: '-8%',
        width: 500, height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(221,180,195,0.2) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      {/* Тонкая диагональная полоска — акцент а-ля люкс */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'repeating-linear-gradient(135deg, transparent, transparent 80px, rgba(129,81,99,0.014) 80px, rgba(129,81,99,0.014) 81px)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{
        paddingTop: '8rem', paddingBottom: '5rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
      }}>
        {/* Текстовый контент */}
        <div>
          {/* Верхние инфо-карточки */}
          <motion.div
            className="hero-top-highlights"
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: '0.75rem',
              marginBottom: '1.25rem',
            }}
          >
            {topHighlights.map((item, i) => (
              <div
                key={i}
                style={{
                  borderRadius: 'var(--radius-lg)',
                  padding: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.88)',
                  border: '1px solid rgba(129, 81, 99, 0.12)',
                  boxShadow: '0 8px 24px rgba(129, 81, 99, 0.08)',
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '0.84rem',
                  lineHeight: 1.25,
                  background: item.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '0.3rem',
                }}>
                  {item.title}
                </div>
                <div style={{
                  fontSize: '0.74rem',
                  color: 'var(--on-surface-variant)',
                  lineHeight: 1.35,
                }}>
                  {item.subtitle}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Бадж */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.4rem 1rem',
              backgroundColor: 'var(--tertiary-container)',
              borderRadius: 'var(--radius-full)',
              marginBottom: '1.5rem',
            }}
          >
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--tertiary)', fontFamily: 'var(--font-display)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Турецкое качество
            </span>
          </motion.div>

          {/* Главный заголовок */}
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem',
              fontFamily: 'var(--font-display)',
            }}
          >
            Стильная{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              одежда
            </span>
            {' '}для<br />ваших детей
          </motion.h1>

          {/* Подзаголовок */}
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'var(--on-surface-variant)',
              marginBottom: '2.5rem',
              lineHeight: 1.7,
              maxWidth: '480px',
            }}
          >
            Более 20 лет одеваем детей в Астане: турецкое качество, Kaspi Red и огромный выбор моделей для любого возраста.
          </motion.p>

          {/* Кнопки */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={4}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.625rem',
                padding: '0.875rem 2rem',
                background: 'linear-gradient(135deg, #815163, #5c3347)',
                color: 'white',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 32px rgba(129,81,99,0.35)',
                letterSpacing: '-0.01em',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.04) translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(129,81,99,0.45)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1) translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(129,81,99,0.35)'
              }}
            >
              <IconWhatsApp />
              Заказать в WhatsApp
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.625rem',
                padding: '0.875rem 2rem',
                background: 'transparent',
                color: 'var(--primary)',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem',
                transition: 'all 0.3s ease',
                border: '1.5px solid rgba(129,81,99,0.35)',
                letterSpacing: '-0.01em',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'rgba(129,81,99,0.06)'
                e.currentTarget.style.borderColor = 'rgba(129,81,99,0.6)'
                e.currentTarget.style.transform = 'scale(1.04) translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.borderColor = 'rgba(129,81,99,0.35)'
                e.currentTarget.style.transform = 'scale(1) translateY(0)'
              }}
            >
              <IconInstagram />
              Instagram
            </a>
          </motion.div>

          {/* Статистика */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={5}
            style={{
              display: 'flex', gap: '2rem', marginTop: '3rem',
              flexWrap: 'wrap',
            }}
          >
            {[
              { value: '20+', label: 'лет на рынке' },
              { value: '5 000+', label: 'довольных семей' },
              { value: '100%', label: 'турецкое качество' },
            ].map((stat, i) => (
              <div key={i}>
                <div style={{
                  fontSize: '2rem', fontWeight: 800, fontFamily: 'var(--font-display)',
                  background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.04em',
                }}>{stat.value}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--on-surface-variant)', fontWeight: 500 }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero Visual */}
        <motion.div
          initial={{ x: 60, opacity: 0, scale: 0.95 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          style={{ position: 'relative' }}
        >
          {/* Main image container */}
          <div style={{
            width: '100%', aspectRatio: '4/5',
            borderRadius: 'var(--radius-2xl)',
            background: 'linear-gradient(145deg, var(--primary-container), var(--secondary-container))',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 32px 80px rgba(129, 81, 99, 0.2), 0 0 0 1px rgba(129, 81, 99, 0.05)',
          }}>
            <img
              src="/65638647.jpg"
              alt="Стильная детская одежда WANEX — фотосессия"
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
              }}
            />
            {/* Overlay gradient */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(129,81,99,0.3) 0%, transparent 50%)',
            }} />
          </div>

          {/* Floating badge 1 - Kaspi Red */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute', top: '15%', left: '-20%',
              backgroundColor: 'white',
              borderRadius: 'var(--radius-xl)',
              padding: '0.875rem 1.25rem',
              boxShadow: '0 16px 48px rgba(129, 81, 99, 0.13)',
              display: 'flex', alignItems: 'center', gap: '0.625rem',
              minWidth: '180px',
              border: '1px solid rgba(129,81,99,0.07)',
            }}
          >
            <div style={{
              width: 40, height: 40, borderRadius: 'var(--radius-md)',
              background: 'linear-gradient(135deg, #f4a261, #e76f51)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                <line x1="1" y1="10" x2="23" y2="10"/>
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--on-surface)' }}>Kaspi Red</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>Рассрочка 0%</div>
            </div>
          </motion.div>

          {/* Floating badge 2 - Reviews */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            style={{
              position: 'absolute', bottom: '20%', right: '-15%',
              backgroundColor: 'white',
              borderRadius: 'var(--radius-xl)',
              padding: '0.875rem 1.25rem',
              boxShadow: '0 16px 48px rgba(67, 117, 196, 0.18)',
              display: 'flex', alignItems: 'center', gap: '0.625rem',
              minWidth: '196px',
              border: '1px solid rgba(67,117,196,0.16)',
            }}
          >
            <div style={{
              width: 40, height: 40, borderRadius: 'var(--radius-md)',
              background: 'linear-gradient(135deg, #4375c4, #5e60ce)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7A8.38 8.38 0 0 1 8.7 19L3 21l2-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6A8.38 8.38 0 0 1 12.5 3h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--on-surface)' }}>5000 отзывов</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>Доверяют WANEX</div>
            </div>
          </motion.div>

          {/* Floating badge 3 - Quality */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            style={{
              position: 'absolute', top: '55%', left: '-15%',
              backgroundColor: 'white',
              borderRadius: 'var(--radius-xl)',
              padding: '0.75rem 1.125rem',
              boxShadow: '0 12px 40px rgba(129, 81, 99, 0.1)',
              border: '1px solid rgba(129,81,99,0.07)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '4px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f59f00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12l2 2 4-4"/>
                <path d="M12 3l7 4v5c0 5-3.8 8.7-7 9-3.2-.3-7-4-7-9V7l7-4z"/>
              </svg>
              <span style={{ fontSize: '0.82rem', color: 'var(--on-surface)', fontWeight: 700, fontFamily: 'var(--font-display)' }}>Высокое качество</span>
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--on-surface-variant)', fontWeight: 600, fontFamily: 'var(--font-display)' }}>Турецкие ткани и пошив</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          #hero > .container {
            grid-template-columns: 1fr !important;
            text-align: center;
            padding-top: 7rem !important;
          }
          #hero .hero-top-highlights {
            grid-template-columns: 1fr !important;
          }
          #hero > .container > div:last-child {
            display: none;
          }
        }
        @media (max-width: 600px) {
          #hero > .container > div > div:last-child {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}
