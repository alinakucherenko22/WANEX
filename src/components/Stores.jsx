import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from './useInView'

const MAP_2GIS = 'https://2gis.kz/astana/firm/70000001019496551'

const stores = [
  {
    name: 'Mega Silk Way',
    address: 'ТРЦ Mega Silk Way, 2 этаж, 2−23',
    hours: 'Пн–Вс: 10:00–22:00',
    phone: '+7 701 933 68 33',
    color: '#815163',
    bg: 'var(--primary-container)',
  },
  {
    name: 'Asia Park',
    address: 'ТРЦ Asia Park, 3 этаж, С 1−1',
    hours: 'Пн–Вс: 10:00–22:00',
    phone: '+7 701 933 68 33',
    color: '#715578',
    bg: 'var(--secondary-container)',
  },
  {
    name: 'Keruen City',
    address: 'ТРЦ Keruen City, 2 этаж, В-35',
    hours: 'Пн–Вс: 10:00–22:00',
    phone: '+7 701 933 68 33',
    color: '#4b654e',
    bg: 'var(--tertiary-container)',
  },
  {
    name: 'ТД Жаннур',
    address: 'ТД Жаннур, 3 этаж, 339',
    hours: 'Пн–Вс: 10:00–22:00',
    phone: '+7 701 933 68 33',
    color: '#5c5470',
    bg: 'rgba(221, 208, 252, 0.4)',
  },
]

export default function Stores() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section id="stores" ref={ref} style={{ padding: '6rem 0', background: 'var(--surface)' }}>
      <div className="container">
        {/* Всe магазины */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Наши магазины</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800 }}>
              4 магазина в Астане —{' '}
              <span style={{
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>тысячи вариантов</span>
            </h2>
            <p style={{ color: 'var(--on-surface-variant)', marginTop: '0.75rem', fontSize: '1rem' }}>
              Посетите нас лично или закажите доставку по всему Казахстану
            </p>
          </motion.div>
        </div>

        {/* секция магазинов */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem',
        }}>
          {stores.map((store, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                backgroundColor: store.bg,
                borderRadius: 'var(--radius-xl)',
                padding: '1.75rem',
                transition: 'all 0.3s ease',
                border: `1px solid ${store.color}20`,
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = `0 20px 48px ${store.color}22`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Icon */}
              <div style={{
                width: 56, height: 56,
                borderRadius: 'var(--radius-lg)',
                backgroundColor: store.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem',
                marginBottom: '1.25rem',
                boxShadow: `0 8px 20px ${store.color}40`,
              }}>
                🏬
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.125rem',
                color: 'var(--on-surface)', marginBottom: '0.5rem',
              }}>
                {store.name}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--on-surface-variant)', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <span>📍</span> {store.address}
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--on-surface-variant)', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <span>🕐</span> {store.hours}
                </p>
                <a
                  href={`tel:${store.phone.replace(/\s/g, '')}`}
                  style={{
                    fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.375rem',
                    color: store.color, fontWeight: 600, fontFamily: 'var(--font-display)',
                    transition: 'opacity 0.2s',
                  }}
                >
                  <span>📞</span> {store.phone}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Карта 2ГИС */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          style={{
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            height: '340px',
            background: 'linear-gradient(135deg, var(--surface-container), var(--primary-container))',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            textAlign: 'center',
            border: '1px solid var(--surface-high)',
          }}
        >
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--on-surface)' }}>
              Все магазины на карте
            </h3>
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
              Найдите ближайший магазин WANEX в Астане
            </p>
          </div>
          <a
            href={MAP_2GIS}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.625rem 1.25rem',
              backgroundColor: 'var(--primary)',
              color: 'white',
              borderRadius: 'var(--radius-full)',
              fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.875rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 16px rgba(129, 81, 99, 0.3)',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            Открыть в 2GIS →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
