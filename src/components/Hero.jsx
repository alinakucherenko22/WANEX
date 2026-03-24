import React from 'react'
import { motion } from 'framer-motion'

const WHATSAPP_URL = 'https://wa.me/87019336833?text=Здравствуйте! Хочу узнать о вашей коллекции детской одежды'
const INSTAGRAM_URL = 'https://www.instagram.com/wanexkids.kz/'

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
  const publicBase = import.meta.env.BASE_URL

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
          {/* Главный заголовок */}
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
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
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
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
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
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
              src={`${publicBase}65638647.jpg`}
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
