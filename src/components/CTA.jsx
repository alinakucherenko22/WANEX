import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from './useInView'

const WHATSAPP_URL = 'https://wa.me/87019336833?text=Здравствуйте! Хочу узнать о вашей коллекции детской одежды'
const INSTAGRAM_URL = 'https://www.instagram.com/wanexkids.kz/'
const TELEGRAM_URL = 'tg://join?invite=5KK-xCstorIyNWU6'

export default function CTA() {
  const [ref, inView] = useInView({ threshold: 0.2 })
  const [activeSlide, setActiveSlide] = useState(0)

  const referenceSlides = [
    {
      src: '/65638647.jpg',
      alt: 'Детская коллекция WANEX 1',
    },
    {
      src: '/626530853_18562944415019972_4972946157144618593_n.jpg',
      alt: 'Детская коллекция WANEX 2',
    },
    {
      src: '/628068042_18564324367019972_4459560475559790454_n.jpg',
      alt: 'Детская коллекция WANEX 3',
    },
    {
      src: '/643560738_18575108542019972_5762966168535871465_n.jpg',
      alt: 'Детская коллекция WANEX 4',
    },
    {
      src: '/652862277_18579253396019972_8571423765150000382_n.jpg',
      alt: 'Детская коллекция WANEX 5',
    },
    {
      src: '/654271604_18579257731019972_1861570530337161024_n.jpg',
      alt: 'Детская коллекция WANEX 6',
    },
    {
      src: '/656385510_18580427515019972_6697327393575999563_n.jpg',
      alt: 'Детская коллекция WANEX 7',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % referenceSlides.length)
    }, 3200)

    return () => clearInterval(timer)
  }, [referenceSlides.length])

  return (
    <section id="contact" ref={ref} style={{
      padding: '6rem 0',
      background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* фоновые элементы */}
      <div style={{
        position: 'absolute', top: '-20%', right: '-5%',
        width: 500, height: 500,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.08)',
        animation: 'float 10s ease-in-out infinite',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-30%', left: '-10%',
        width: 600, height: 600,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.05)',
        animation: 'float 14s ease-in-out infinite reverse',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            color: 'white',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            marginBottom: '1.25rem',
            maxWidth: '700px',
            margin: '0 auto 1.25rem',
          }}>
            Одевайте детей<br/>стильно и с любовью
          </h2>

          <p style={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            lineHeight: 1.7,
            maxWidth: '520px',
            margin: '0 auto 2.5rem',
          }}>
            Следите за новостями и новинками в WhatsApp и Telegram. Рассрочка 0%, доставка по Казахстану.
          </p>

          {/* Кнопки */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.625rem',
                padding: '1rem 2rem',
                backgroundColor: 'white',
                color: 'var(--primary)',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.3)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1) translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Написать в WhatsApp
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.625rem',
                padding: '1rem 2rem',
                backgroundColor: 'rgba(255,255,255,0.15)',
                color: 'white',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255,255,255,0.3)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)'
                e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'
                e.currentTarget.style.transform = 'scale(1) translateY(0)'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Наш Instagram
            </a>

            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.625rem',
                padding: '1rem 2rem',
                backgroundColor: 'rgba(255,255,255,0.15)',
                color: 'white',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255,255,255,0.3)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)'
                e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'
                e.currentTarget.style.transform = 'scale(1) translateY(0)'
              }}
            >
              Telegram
            </a>
          </div>

          {/* Автослайдер референсов */}
          <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: 'min(860px, 100%)',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 28px 68px rgba(0, 0, 0, 0.28)',
              border: '1px solid rgba(255,255,255,0.28)',
              backgroundColor: 'rgba(255,255,255,0.12)',
            }}>
              <div style={{ position: 'relative', width: '100%', paddingBottom: '62%' }}>
                {referenceSlides.map((slide, index) => (
                  <img
                    key={slide.src}
                    src={slide.src}
                    alt={slide.alt}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: activeSlide === index ? 1 : 0,
                      transform: activeSlide === index ? 'scale(1)' : 'scale(1.04)',
                      transition: 'opacity 0.75s ease, transform 1.1s ease',
                    }}
                  />
                ))}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(38,19,51,0.34) 0%, transparent 55%)',
                  pointerEvents: 'none',
                }} />
              </div>

              <div style={{
                position: 'absolute',
                left: '50%',
                bottom: '1rem',
                transform: 'translateX(-50%)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
              }}>
                {referenceSlides.map((slide, index) => (
                  <button
                    key={`${slide.alt}-${index}`}
                    type="button"
                    aria-label={`Перейти к слайду ${index + 1}`}
                    onClick={() => setActiveSlide(index)}
                    style={{
                      width: activeSlide === index ? 20 : 8,
                      height: 8,
                      borderRadius: '999px',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      backgroundColor: activeSlide === index ? 'white' : 'rgba(255,255,255,0.5)',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
