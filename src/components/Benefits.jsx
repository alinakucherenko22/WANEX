import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from './useInView'

const benefits = [
  {
    icon: '✓',
    title: 'Турецкое качество',
    description: 'Мягкие гипоаллергенные ткани, проверенные стандартами ЕС. Безопасно для нежной детской кожи.',
    gradient: 'linear-gradient(135deg, #f8bbd0, #e91e63)',
    bg: 'var(--primary-container)',
  },
  {
    icon: '💳',
    title: 'Kaspi Red & рассрочка',
    description: 'Покупай сейчас, плати потом. Рассрочка 0% через Kaspi Red — одежда без лишних трат.',
    gradient: 'linear-gradient(135deg, #ffccbc, #ff5722)',
    bg: 'rgba(255, 204, 188, 0.4)',
  },
  {
    icon: '📦',
    title: 'Доставка по Казахстану',
    description: 'Отправляем в любой город. Быстрая доставка от склада в Астане по всей стране.',
    gradient: 'linear-gradient(135deg, #ddfcde, #4b654e)',
    bg: 'var(--tertiary-container)',
  },
  {
    icon: '🏬',
    title: '4 магазина в Астане',
    description: 'Большой выбор в наличии. Посетите нас в ТРЦ Mega Silk Way, Asia Park и других локациях.',
    gradient: 'linear-gradient(135deg, #fad7ff, #9c27b0)',
    bg: 'var(--secondary-container)',
  },
  {
    icon: '📏',
    title: 'Широкий размерный ряд',
    description: 'От 0 до 14 лет. Грамотные лекала для удобства движения и роста вашего ребёнка.',
    gradient: 'linear-gradient(135deg, #fff9c4, #f9a825)',
    bg: 'rgba(255, 249, 196, 0.6)',
  },
  {
    icon: '⭐',
    title: 'Новинки каждую неделю',
    description: 'Свежие коллекции с учётом трендов сезона. Следите в Instagram, WhatsApp и Telegram.',
    gradient: 'linear-gradient(135deg, #bbdefb, #1565c0)',
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
                fontSize: '1.5rem',
                marginBottom: '1.25rem',
                boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
              }}>
                {benefit.icon}
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
