import React from 'react'

const WHATSAPP_URL = 'https://wa.me/87019336833?text=Здравствуйте! Хочу узнать о вашей коллекции детской одежды'
const INSTAGRAM_URL = 'https://www.instagram.com/wanexkids.kz/'
const TELEGRAM_URL = 'tg://join?invite=5KK-xCstorIyNWU6'
const MAP_2GIS = 'https://2gis.kz/astana/firm/70000001019496551'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      backgroundColor: 'var(--on-surface)',
      color: 'rgba(255,255,255,0.85)',
      padding: '3rem 0 2rem',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2rem',
          marginBottom: '2.5rem',
        }}>
          {/* Бренд */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.875rem' }}>
              <div style={{
                width: 36, height: 36, borderRadius: 'var(--radius-md)',
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.1rem', fontWeight: 700, color: 'white'
              }}>W</div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', color: 'white' }}>
                WANEX
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.65)', maxWidth: 240 }}>
              Турецкая детская одежда высокого качества. Для детей от 0 до 14 лет.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 38, height: 38, borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontSize: '1.1rem',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                aria-label="WhatsApp"
              >
                💬
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 38, height: 38, borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontSize: '1.1rem',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                aria-label="Instagram"
              >
                📸
              </a>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 38, height: 38, borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontSize: '1.1rem',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                aria-label="Telegram"
              >
                ✈️
              </a>
              <a
                href={MAP_2GIS}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 38, height: 38, borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontSize: '1.1rem',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                aria-label="2GIS"
              >
                📍
              </a>
            </div>
          </div>

          {/* Соцснлюс */}
          <div>
            <h4 style={{ color: 'white', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.875rem', marginBottom: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Навигация
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { href: '#benefits', label: 'Преимущества' },
                { href: '#stores', label: 'Магазины' },
                { href: '#reviews', label: 'Отзывы' },
                { href: '#contact', label: 'Контакты' },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    style={{
                      color: 'rgba(255,255,255,0.65)', fontSize: '0.875rem',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'white'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 style={{ color: 'white', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.875rem', marginBottom: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Контакты
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {[
                { icon: '📞', text: '+7 701 933 68 33' },
                { icon: '📍', text: 'Астана, 4 магазина' },
                { icon: '🕐', text: 'Пн–Вс: 10:00–22:00' },
                { icon: '💬', text: 'WhatsApp: +7 701 933 68 33' },
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)' }}>
                  <span>{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Оплата и доставка */}
          <div>
            <h4 style={{ color: 'white', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.875rem', marginBottom: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Оплата и доставка
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['Kaspi Red', 'Kaspi Pay', 'Наличные'].map((method, i) => (
                <span key={i} style={{
                  padding: '0.25rem 0.625rem',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)',
                }}>
                  {method}
                </span>
              ))}
            </div>
            <p style={{ marginTop: '1.25rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
              Доставка по всему Казахстану
            </p>
          </div>
        </div>

        {/* Нижняя часть */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '1.5rem',
          display: 'flex',
          alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '0.75rem',
        }}>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>
            © {year} WANEX. Все права защищены.
          </p>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>
            Детская одежда из Турции · Астана, Казахстан
          </p>
        </div>
      </div>
    </footer>
  )
}
