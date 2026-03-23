# WANEX GitHub Pages Deployment Guide

## 📋 Перед запуском

1. Убедитесь, что у вас установлены:
   - Git
   - Node.js (v18 или выше)
   - npm

2. Создайте репозиторий на GitHub (если уже не создали)

## 🔧 Шагалась подготовки

### 1. Инициализация Git репозитория

```bash
cd /path/to/wanex
git init
git add .
git commit -m "Initial commit: WANEX website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/wanex.git
git push -u origin main
```

### 2. Включение GitHub Pages в репозитории

1. Перейдите на GitHub и откройте ваш репозиторий
2. Перейдите в **Settings** → **Pages**
3. Под "Source" выберите:
   - Branch: `gh-pages`
   - Folder: `/(root)`
4. Нажмите **Save**

### 3. Первый деплой

При первом push в main ветку:
- GitHub Actions автоматически запустится
- Создастся `gh-pages` ветка
- Сайт будет развернут на `https://YOUR_USERNAME.github.io/wanex`

### 4. Для пользовательского домена (wanexkids.kz)

#### В репозитории GitHub:

1. Settings → Pages
2. Добавьте в поле "Custom domain": `wanexkids.kz`
3. Will appear a CNAME file in the repo

#### В регистраторе домена:

Добавьте DNS записи:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

Подождите 30 минут - час для распространения DNS записей.

## 🚀 Развертывание обновлений

После каждого коммита в main ветку:

```bash
git add .
git commit -m "Update description message"
git push origin main
```

GitHub Actions автоматически:
- Установит зависимости
- Соберет проект (`npm run build`)
- Загрузит на GitHub Pages
- Сайт обновится за 1-2 минуты

## 📊 Проверка деплоя

### GitHub Actions

1. Перейдите в **Actions** в вашем репозитории
2. Нажмите на последний запуск workflow
3. Проверьте статус всех шагов
4. При статусе ✅ — успешный деплой

### DNS проверка (для пользовательского домена)

```bash
# Проверить A записи
nslookup wanexkids.kz

# Проверить CNAME запись
nslookup www.wanexkids.kz
```

## 🔍 SEO проверка

### Индексация в Google Search Console

1. Перейдите на [Google Search Console](https://search.google.com/search-console)
2. Добавьте свой домен
3. Загрузите и проверьте `sitemap.xml`:
   - `https://wanexkids.kz/sitemap.xml`

### Проверка robots.txt

```
https://wanexkids.kz/robots.txt
```

### Проверка мета-тегов

Откройте исходный код страницы (Ctrl+U) и проверьте:
- Title ✅
- Description ✅
- og:image, og:title, og:description ✅
- Canonical URL ✅

## ⚡ Оптимизация производительности

### Проверить скорость на PageSpeed Insights

```
https://pagespeed.web.dev/?url=https://wanexkids.kz
```

### Улучшения уже внедрены:

- ✅ Минификация CSS и JS
- ✅ Виртуальное удаление console.log в production
- ✅ Предзагрузка критических ресурсов
- ✅ Оптимизированные web fonts

## 🔐 HTTPS

GitHub Pages автоматически предоставляет HTTPS для всех сайтов.

## 🆘 Решение проблем

### Сайт не обновляется после push

1. Проверьте статус в GitHub Actions
2. Очистите кэш браузера (Ctrl+Shift+Delete)
3. Принудительно обновите (Ctrl+Shift+R)

### Пользовательский домен не работает

1. Проверьте DNS записи
2. Убедитесь, что CNAME файл в репозитории
3. Подождите 24-48 часов для полного распространения DNS

### 404 ошибка при переходе по якорям

Это нормально для SPA маршрутизации на GitHub Pages. Используйте:
```bash
git push origin main
```

И GitHub Pages автоматически откроет index.html для всех путей.

## 📞 Контакты для поддержки

- **GitHub:** URL вашего репозитория
- **Email:** ваш email
- **WhatsApp:** +7 701 933 68 33

---

**Дата последнего обновления:** 24 марта 2026
