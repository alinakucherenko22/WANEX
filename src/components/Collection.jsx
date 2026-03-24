import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from './useInView'

const categories = ['Все', 'Девочки', 'Мальчики', 'Новорождённые', 'Школа']
const publicBase = import.meta.env.BASE_URL

const products = [
  {
    id: 1, category: 'Девочки',
    name: 'Платье «Бабочка»',
    price: '4 990 ₸',
    age: '2–7 лет',
    img: `${publicBase}65638647.jpg`,
    tag: '🔥 Хит',
    tagColor: '#e91e63',
  },
  {
    id: 2, category: 'Мальчики',
    name: 'Костюм «Капитан»',
    price: '5 490 ₸',
    age: '3–9 лет',
    img: `${publicBase}626530853_18562944415019972_4972946157144618593_n.jpg`,
    tag: '⭐ Новинка',
    tagColor: '#ff9800',
  },
  {
    id: 3, category: 'Новорождённые',
    name: 'Боди-комплект',
    price: '3 490 ₸',
    age: '0–12 мес.',
    img: `${publicBase}628068042_18564324367019972_4459560475559790454_n.jpg`,
    tag: '💎 Эксклюзив',
    tagColor: '#9c27b0',
  },
  {
    id: 4, category: 'Школа',
    name: 'Форма «Классика»',
    price: '6 990 ₸',
    age: '6–14 лет',
    img: `${publicBase}643560738_18575108542019972_5762966168535871465_n.jpg`,
    tag: '✅ В наличии',
    tagColor: '#4caf50',
  },
  {
    id: 5, category: 'Девочки',
    name: 'Юбка «Пышка»',
    price: '2 990 ₸',
    age: '3–8 лет',
    img: `${publicBase}652862277_18579253396019972_8571423765150000382_n.jpg`,
    tag: '🔥 Хит',
    tagColor: '#e91e63',
  },
  {
    id: 6, category: 'Мальчики',
    name: 'Куртка «Спорт»',
    price: '7 490 ₸',
    age: '4–12 лет',
    img: `${publicBase}654271604_18579257731019972_1861570530337161024_n.jpg`,
    tag: '❄️ Осень 2024',
    tagColor: '#2196f3',
  },
]

const WHATSAPP_URL = 'https://wa.me/77001234567?text=Здравствуйте! Хочу узнать о вашей коллекции детской одежды'

export default function Collection() {
  const [ref, inView] = useInView({ threshold: 0.1 })
  const [activeCategory, setActiveCategory] = useState('Все')

  const filtered = activeCategory === 'Все'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <section id="collection" ref={ref} style={{ padding: '6rem 0', background: 'var(--surface-low)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Коллекция</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800 }}>
              Стиль для каждого —{' '}
              <span style={{
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>от малышей до школьников</span>
            </h2>
          </motion.div>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            display: 'flex', gap: '0.5rem', flexWrap: 'wrap',
            justifyContent: 'center', marginBottom: '3rem',
          }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.875rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                backgroundColor: activeCategory === cat ? 'var(--primary)' : 'var(--surface-container)',
                color: activeCategory === cat ? 'white' : 'var(--on-surface-variant)',
                border: '2px solid',
                borderColor: activeCategory === cat ? 'var(--primary)' : 'transparent',
                boxShadow: activeCategory === cat ? '0 4px 16px rgba(129, 81, 99, 0.3)' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '1.5rem',
              marginBottom: '3rem',
            }}
          >
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                style={{
                  backgroundColor: 'white',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-card)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-hover)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-card)'
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', paddingBottom: '100%', overflow: 'hidden' }}>
                  <img
                    src={product.img}
                    alt={product.name}
                    style={{
                      position: 'absolute', inset: 0,
                      width: '100%', height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.08)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  />
                  {/* Tag */}
                  <div style={{
                    position: 'absolute', top: '1rem', left: '1rem',
                    backgroundColor: product.tagColor,
                    color: 'white',
                    borderRadius: 'var(--radius-full)',
                    padding: '0.25rem 0.75rem',
                    fontSize: '0.75rem', fontWeight: 700, fontFamily: 'var(--font-display)',
                  }}>
                    {product.tag}
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: '1.25rem' }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)', marginBottom: '0.25rem' }}>
                    {product.age}
                  </p>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem',
                    color: 'var(--on-surface)', marginBottom: '0.75rem',
                  }}>
                    {product.name}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{
                      fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.125rem',
                      color: 'var(--primary)',
                    }}>
                      {product.price}
                    </span>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '0.375rem 0.875rem',
                        backgroundColor: 'var(--primary)',
                        color: 'white',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.75rem', fontWeight: 700, fontFamily: 'var(--font-display)',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor = 'var(--primary-dim)'
                        e.currentTarget.style.transform = 'scale(1.05)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.backgroundColor = 'var(--primary)'
                        e.currentTarget.style.transform = 'scale(1)'
                      }}
                    >
                      Заказать
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              padding: '1rem 2rem',
              background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
              color: 'white',
              borderRadius: 'var(--radius-full)',
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 24px rgba(129, 81, 99, 0.3)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.04) translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 16px 36px rgba(129, 81, 99, 0.4)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1) translateY(0)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(129, 81, 99, 0.3)'
            }}
          >
            Смотреть все новинки в WhatsApp
            <span style={{ fontSize: '1.25rem' }}>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
