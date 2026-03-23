# WANEX — Детская одежда в Астане

Веб-сайт детского магазина WANEX. Турецкое качество, доступные цены, рассрочка 0%, доставка по Казахстану.

**Ссылка:** [wanexkids.kz](https://wanexkids.kz)

## 📱 Контакты

- **WhatsApp:** [+7 701 933 68 33](https://wa.me/87019336833)
- **Instagram:** [@wanexkids.kz](https://www.instagram.com/wanexkids.kz/)
- **Telegram:** [Присоединиться](tg://join?invite=5KK-xCstorIyNWU6)
- **2ГИС:** [Все магазины](https://2gis.kz/astana/firm/70000001019496551)

## 🏪 Магазины

1. **Mega Silk Way** — ТРЦ Mega Silk Way, 2 этаж, 2−23
2. **Asia Park** — ТРЦ Asia Park, 3 этаж, С 1−1
3. **Keruen City** — ТРЦ Keruen City, 2 этаж, В-35
4. **ТД Жаннур** — ТД Жаннур, 3 этаж, 339

## 🛠️ Технический стек

- **Frontend Framework:** React 19
- **Build Tool:** Vite 8
- **Animation:** Framer Motion
- **Styling:** CSS-in-JS (inline styles)
- **Package Manager:** npm

## 📦 Установка и запуск

### Установка зависимостей

```bash
npm install
```

### Локальная разработка

```bash
npm run dev
```

Сайт откроется на `http://localhost:5176`

### Сборка для продакшена

```bash
npm run build
```

### Проверка кода (ESLint)

```bash
npm run lint
```

## 🚀 Развертывание на GitHub Pages

### 1. Подготовка Repository

Создайте репозиторий на GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/ВАШ_USERNAME/wanex.git
git push -u origin main
```

### 2. Включение GitHub Pages

В настройках репозитория (Settings → Pages):
- Выберите **Deploy from a branch**
- Branch: `gh-pages`
- Folder: `/(root)`

### 3. Автоматическое развертывание

При push в main ветку автоматически запустится GitHub Actions:
- Установка зависимостей
- Сборка проекта
- Развертывание на GitHub Pages

### 4. Использование пользовательского домена

Если используете пользовательский домен (например, wanexkids.kz):

В настройках GitHub Pages добавьте:
```
CNAME
wanexkids.kz
```

У вашего регистратора домена установите DNS записи для GitHub Pages.

## 📊 SEO Оптимизация

### Мета теги

- ✅ Title и Description
- ✅ Open Graph теги для социальных сетей
- ✅ Twitter Card теги
- ✅ Canonical URL
- ✅ Robots.txt для поисковых систем

### Структура сайта

- ✅ Семантические HTML приложения через React
- ✅ Правильная иерархия заголовков (H1, H2, H3)
- ✅ Внутренние переходы через якоря (#benefits, #stores, #reviews, #contact)
- ✅ Мобильная адаптивность (Mobile First)

### Карта сайта и индексация

- ✅ `robots.txt` — инструкции для поисковых ботов
- ✅ `sitemap.xml` — структурированная карта сайта
- ✅ `.nojekyll` — отключение Jekyll обработки на GitHub Pages

## 📱 Мобильная оптимизация

- ✅ Viewport meta tag для адекватного отображения на мобильных
- ✅ Touch-friendly интерфейс
- ✅ Быстрая загрузка (минификация, оптимизация)

## 🔍 Поддерживаемые браузеры

- Chrome/Edge (последние версии)
- Firefox (последние версии)
- Safari (iOS 12+)

## 📝 Структура проекта

```
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Benefits.jsx
│   ├── Stores.jsx
│   ├── Reviews.jsx
│   ├── CTA.jsx
│   ├── Footer.jsx
│   └── useInView.js
├── App.jsx
├── main.jsx
├── App.css
└── index.css
public/
├── robots.txt
├── sitemap.xml
├── .nojekyll
└── favicon.svg
```

## 🔧 Переменные окружения

Для GitHub Pages используется переменная окружения:
- `BUILD_PATH` — путь развертывания (по умолчанию `/`)

## 📈 Ключевые слова и SEO

### Целевые ключевые слова

- детская одежда Астана
- турецкая одежда для детей
- WANEX
- магазин детской одежды Казахстан
- доставка одежды по Казахстану
- Kaspi Red рассрочка

### Ссылки на социальные сети

- Instagram: @wanexkids.kz
- WhatsApp: +7 701 933 68 33
- Telegram: WANEX Kids

## 📄 Лицензия

Частный проект. Все права защищены © 2026 WANEX

## 👨‍💻 Разработка

Проект создан с использованием **React** и **Vite** для быстрой разработки и высокой производительности.

---

**Последнее обновление:** 24 марта 2026
