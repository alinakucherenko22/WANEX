import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from './useInView'

const BenefitIcon = ({ type }) => {
  const icons = {
    quality: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    card: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    delivery: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1"/>
        <path d="M16 8h4l3 5v3h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    store: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    size: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
      </svg>
    ),
    new: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
  }
  return icons[type] || null
}

const benefits = [
  {
    iconType: 'quality',
    title: 'Турецкое качество',
    description: 'Мягкие гипоаллергенные ткани, проверенные стандартами ЕС. Безопасно для нежной детской кожи.',
    gradient: 'linear-gradient(135deg, #c2748a, #815163)',
    bg: 'var(--primary-container)',
  },
  {
    iconType: 'card',
    title: 'Kaspi Red & рассрочка',
    description: 'Покупай сейчас, плати потом. Рассрочка 0% через Kaspi Red — одежда без лишних трат.',
    gradient: 'linear-gradient(135deg, #f4a261, #e76f51)',
    bg: 'rgba(255, 204, 188, 0.4)',
  },
  {
    iconType: 'delivery',
    title: 'Доставка по Казахстану',
    description: 'Отправляем в любой город. Быстрая доставка от склада в Астане по всей стране.',
    gradient: 'linear-gradient(135deg, #52b788, #4b654e)',
    bg: 'var(--tertiary-container)',
  },
  {
    iconType: 'store',
    title: '4 магазина в Астане',
    description: 'Большой выбор в наличии. Посетите нас в ТРЦ Mega Silk Way, Asia Park и других локациях.',
    gradient: 'linear-gradient(135deg, #b07dab, #715578)',
    bg: 'var(--secondary-container)',
  },
  {
    iconType: 'size',
    title: 'Широкий размерный ряд',
    description: 'От 0 до 14 лет. Грамотные лекала для удобства движения и роста вашего ребёнка.',
    gradient: 'linear-gradient(135deg, #f4c430, #c9941a)',
    bg: 'rgba(255, 249, 196, 0.6)',
  },
  {
    iconType: 'new',
    title: 'Новинки каждую неделю',
    description: 'Свежие коллекции с учётом трендов сезона. Следите в Instagram, WhatsApp и Telegram.',
    gradient: 'linear-gradient(135deg, #74b3ce, #3a7fbf)',
    bg: 'rgba(187, 222, 251, 0.4)',
  },
]

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: (i) => ({
    y: 0, opacity: 1,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  })
}

export default function Benefits() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section
      id="benefits"
      ref={ref}
      style={{
        padding: '6rem 0',
        background: 'var(--surface-low)',
      }}
    >
      <div className="container">
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Почему WANEX?</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, maxWidth: '600px', margin: '0 auto' }}>
              Всё, что важно для счастья{' '}
              <span style={{
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>вашей семьи</span>
            </h2>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              style={{
                backgroundColor: benefit.bg,
                borderRadius: 'var(--radius-xl)',
                padding: '1.75rem',
                cursor: 'default',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(129, 81, 99, 0.06)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-hover)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{
                width: 56, height: 56,
                borderRadius: 'var(--radius-lg)',
                background: benefit.gradient,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.25rem',
                boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
              }}>
                <BenefitIcon type={benefit.iconType} />
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: '1.125rem', marginBottom: '0.625rem',
                color: 'var(--on-surface)',
              }}>
                {benefit.title}
              </h3>
              <p style={{
                fontSize: '0.9rem', lineHeight: 1.7,
                color: 'var(--on-surface-variant)',
              }}>
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
