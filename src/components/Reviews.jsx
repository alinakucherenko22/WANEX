import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from './useInView'

const reviews = [
  {
    name: 'Айгерим М.',
    avatar: '👩',
    rating: 5,
    text: 'Покупаю для дочки уже второй год. Качество просто супер! Турецкие ткани очень приятные, и стирка не портит их. Рекомендую всем мамочкам Астаны!',
    product: 'Платье «Бабочка»',
    date: '2 дня назад',
  },
  {
    name: 'Дарина С.',
    avatar: '👩',
    rating: 5,
    text: 'Оформила через Kaspi Red — очень удобно. Сыну очень понравился костюм, носит не снимая! Доставка пришла в тот же день по Астане.',
    product: 'Костюм «Капитан»',
    date: '5 дней назад',
  },
  {
    name: 'Мадина К.',
    avatar: '👩',
    rating: 5,
    text: 'Брала набор для новорождённого — всё так мягко и нежно! Боди с красивым узором. Цены приятные для такого качества.',
    product: 'Боди-комплект',
    date: '1 неделю назад',
  },
  {
    name: 'Татьяна Р.',
    avatar: '👩',
    rating: 5,
    text: 'Ходим в магазин в ТРЦ. Продавцы очень приветливые, помогают с выбором. Дочка счастлива, а это главное! Уже сделала третий заказ.',
    product: 'Юбка «Пышка»',
    date: '2 недели назад',
  },
  {
    name: 'Жанар А.',
    avatar: '👩',
    rating: 5,
    text: 'Школьная форма — лучшая! Ткань не мнётся, выглядит аккуратно весь день. Размер точный, как и указано на сайте. Спасибо WANEX!',
    product: 'Форма «Классика»',
    date: '3 недели назад',
  },
  {
    name: 'Алия Н.',
    avatar: '👩',
    rating: 5,
    text: 'Заказала через WhatsApp — очень быстро ответили и помогли подобрать размер. Доставка по Казахстану оперативная. Однозначно вернусь!',
    product: 'Куртка «Спорт»',
    date: '1 месяц назад',
  },
]

export default function Reviews() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section id="reviews" ref={ref} style={{ padding: '6rem 0', background: 'var(--surface)' }}>
      <div className="container">
        {/* Оценки */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Отзывы</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800 }}>
              Нас любят{' '}
              <span style={{
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>5 000+ семей</span>
            </h2>
            {/* Stars */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem', marginTop: '0.75rem' }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ fontSize: '1.5rem', color: '#f9a825' }}>★</span>
              ))}
              <span style={{ fontWeight: 700, fontSize: '1.25rem', marginLeft: '0.5rem', fontFamily: 'var(--font-display)', color: 'var(--on-surface)' }}>5.0</span>
            </div>
          </motion.div>
        </div>

      {/* Отзывы */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}>
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                backgroundColor: 'white',
                borderRadius: 'var(--radius-xl)',
                padding: '1.5rem',
                boxShadow: 'var(--shadow-card)',
                cursor: 'default',
                transition: 'all 0.3s ease',
                border: '1px solid var(--surface-high)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-hover)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'var(--shadow-card)'
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '2px', marginBottom: '0.75rem' }}>
                {[...Array(review.rating)].map((_, j) => (
                  <span key={j} style={{ fontSize: '0.875rem', color: '#f9a825' }}>★</span>
                ))}
              </div>

              {/* Review text */}
              <p style={{
                fontSize: '0.9rem', lineHeight: 1.7,
                color: 'var(--on-surface)',
                marginBottom: '1.25rem',
                fontStyle: 'italic',
              }}>
                «{review.text}»
              </p>

              {/* Product badge */}
              <div style={{
                display: 'inline-block',
                backgroundColor: 'var(--primary-container)',
                color: 'var(--on-primary-container)',
                borderRadius: 'var(--radius-full)',
                padding: '0.2rem 0.625rem',
                fontSize: '0.7rem', fontWeight: 600, fontFamily: 'var(--font-display)',
                marginBottom: '1rem',
              }}>
                {review.product}
              </div>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    backgroundColor: 'var(--surface-container)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.25rem',
                  }}>
                    {review.avatar}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--on-surface)' }}>
                      {review.name}
                    </div>
                  </div>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{
            marginTop: '3rem',
            padding: '2rem',
            background: 'linear-gradient(135deg, var(--primary-container), var(--secondary-container))',
            borderRadius: 'var(--radius-xl)',
            display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            gap: '3rem', flexWrap: 'wrap',
            textAlign: 'center',
          }}
        >
          {[
            { value: '5 000+', label: 'Довольных семей', emoji: '👨‍👩‍👧‍👦' },
            { value: '4.9 / 5', label: 'Средняя оценка', emoji: '⭐' },
            { value: '98%', label: 'Рекомендуют нас', emoji: '💬' },
          ].map((item, i) => (
            <div key={i}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{item.emoji}</div>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2rem',
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.04em',
              }}>
                {item.value}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--on-surface-variant)', marginTop: '0.125rem' }}>{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
