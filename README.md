# Thunder Bulls Football Team — MERN Stack Website

This repository contains the full detail and blueprint for the Thunder Bulls Football Team website, a full-stack web application built using the MERN stack.

## 📊 Table of Contents
1. [Tech Stack Overview](#1-tech-stack-overview)
2. [Project Folder Structure](#2-project-folder-structure)
3. [Brand Design System](#3-brand-design-system)
4. [Page-by-Page Layout & Design Guide](#4-page-by-page-layout--design-guide)
5. [Animations & Visual Effects](#5-animations--visual-effects)
6. [MongoDB Data Models](#6-mongodb-data-models)
7. [Express API Routes](#7-express-api-routes)
8. [Responsive Design Breakpoints](#8-responsive-design-breakpoints)
9. [SEO Complete Guide](#9-seo-complete-guide)
10. [Deployment Guide](#10-deployment-guide)
11. [Performance Checklist](#11-performance-checklist)
12. [Quick-Start Commands](#12-quick-start-commands)

---

## 1. Tech Stack Overview

### Frontend
- **React.js**: UI components
- **React Router DOM**: Page routing
- **Axios**: API calls
- **Framer Motion**: Animations
- **React Helmet Async**: SEO meta tags
- **React Query / TanStack**: Data fetching & caching
- **Swiper.js**: Sliders/carousels
- **React Icons**: Icon library
- **Tailwind CSS**: Utility-first styling
- **GSAP (GreenSock)**: Advanced scroll animations
- **React Toastify**: Notifications

### Backend
- **Node.js & Express.js**: Server and API routes
- **Mongoose**: MongoDB ODM
- **dotenv**: Environment variables
- **cors**: Cross-origin requests
- **bcryptjs**: Password hashing
- **jsonwebtoken**: JWT auth
- **multer**: File/image uploads
- **cloudinary**: Image hosting
- **nodemailer**: Email contact form
- **helmet**: HTTP security headers
- **express-rate-limit**: Prevent spam/abuse
- **morgan**: Logging
- **compression**: Gzip/Brotli compression
- **sitemap**: Auto-generate sitemap.xml

---

## 2. Project Folder Structure

```
thunder-bulls/
├── client/                        ← React Frontend
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   ├── robots.txt
│   │   ├── sitemap.xml
│   │   └── og-image.jpg
│   ├── src/
│   │   ├── assets/                ← images, videos, fonts
│   │   ├── components/            ← Navbar, Footer, Hero, Cards, etc.
│   │   ├── pages/                 ← Home, Squad, Matches, News, Shop, etc.
│   │   ├── context/               ← AuthContext, CartContext
│   │   ├── hooks/                 ← useScrollAnimation, useFetch
│   │   ├── utils/                 ← api, helpers
│   │   └── styles/                ← globals.css, animations.css
│
├── server/                        ← Node + Express Backend
│   ├── config/                    ← db, cloudinary
│   ├── models/                    ← Player, Match, News, Product, etc.
│   ├── routes/                    ← API routes
│   ├── controllers/               ← Route handlers
│   ├── middleware/                ← auth, admin, upload
│   ├── utils/                     ← sendEmail, generateSitemap
│   └── index.js                   ← Entry point
```

---

## 3. Brand Design System (CSS Variables)

```css
:root {
  /* Official Colors */
  --thunder-gold:       #FFC107;
  --storm-black:        #0A0A0A;
  --bull-crimson:       #B91C1C;
  --lightning-white:    #FFFFFF;
  --electric-blue:      #1E3A5F;
  --ash-grey:           #404040;

  /* Typography */
  --font-primary:       'Oswald', sans-serif;
  --font-secondary:     'Barlow Condensed', sans-serif;
}
```

---

## 4. Page-by-Page Layout & Design Guide

### 4A. NAVBAR — Fixed at Top
- **Layout**: `[Thunder Bulls Logo + Text]  [NAV LINKS]  [SHOP NOW Button] [Hamburger]`
- **Design Rules**:
  - Background: Transparent on hero, becomes Storm Black (#0A0A0A) on scroll.
  - Logo: Thunder Bulls crest + "THUNDER BULLS" text in Oswald ExtraBold.
  - Nav Links: Oswald Medium, uppercase, letter-spacing 2px.
  - Hover State: Thunder Gold underline animation slides in from left.
  - Active page: Thunder Gold color on link.
  - Shop Now CTA: Thunder Gold background, Storm Black text.
  - Mobile: Hamburger icon → full-screen dark overlay menu with staggered link animations.
- **Nav Links**: HOME | SQUAD | MATCHES | NEWS | SHOP | GALLERY | ABOUT | CONTACT

### 4B. HOME PAGE — Full Visual Impact
- **Hero Section**: 
  - 100vh height. 
  - Dark video loop or stormy sky still. 
  - Text: "STRIKE FEAR. PLAY THUNDER." 
  - Animated lightning SVGs flashing behind text.
  - CTAs: [VIEW SQUAD] gold filled | [NEXT MATCH] outline white.
- **Next Match Banner**: Full-width band. vs [Opponent Logo] | Date | Time | Venue.
- **Stats Counters**: Wins, Goals, Clean Sheets, Squad Size (counting up on scroll).
- **Latest Squad Highlight**: 4 player cards. Grayscale → color on hover.
- **Upcoming Matches**: 3 match cards in a row.
- **Latest News**: 1 large featured article + 2 small articles.
- **Kit Showcase**: 3 kit cards: HOME | AWAY | THIRD with gold hover glow.
- **Sponsor Strip**: Grayscale logos, color on hover.

### 4C. SQUAD PAGE
- **Hero Title**: "THE SQUAD" in massive Oswald ExtraBold.
- **Filter Bar**: [ALL] [GOALKEEPER] [DEFENDERS] [MIDFIELDERS] [FORWARDS]. Search input.
- **Player Grid**: 4 columns desktop. Cards with photo, jersey number background, name, position, stats strip (Apps, Goals, Assists).

### 4D. MATCHES PAGE
- **Tabs**: [UPCOMING] [RESULTS] [ALL FIXTURES]
- **List/Card View**: Date, Home vs Away, Competition, Venue. Winner highlighted.
- **Detail Page**: Banner with scores, timeline, stats table.

### 4E. NEWS / BLOG PAGE
- **Layout**: 3-column grid on desktop.
- **Cards**: Featured image, category tag, title, excerpt, date.
- **Detail Page**: Hero image, title, body text (Nunito font), related articles.

### 4F. SHOP PAGE
- **Grid Layout**: 3 columns desktop. Hover shows second view. "Limited Edition" badges.
- **Cart**: Slide-in cart drawer from right side.
- **Detail Page**: Gallery, size selector, quantity, and add to cart button.

### 4G. GALLERY PAGE
- **Filter**: [All] [Match Photos] [Training] [Kit Launches] [Events]
- **Layout**: Masonry preferred. Click opens Lightbox.

### 4H. CONTACT PAGE
- **Layout**: Two columns. Left: Info, Map. Right: Contact form (POST to /api/contact). Form sends email via Nodemailer.

### 4I. FOOTER
- **Background**: Deeper than Storm Black (#060606).
- **Layout**: 4 columns (Logo/Social, Quick Links, Club Info, Newsletter signup).

---

## 5. Animations & Visual Effects

- **Lightning Flash**: CSS keyframes for opacity changes to simulate lightning in Hero.
- **Gold Glow Pulse**: Pulsing shadow on logo and buttons.
- **Scroll Reveal**: Framer Motion for fade-in on scroll.
- **Stats Counter**: JavaScript counter from 0 to target.

---

## 6. MongoDB Data Models

- **Player**: Name, jerseyNumber, position, nationality, age, height, photo, stats, bio, isCaptain, socialLinks.
- **Match**: Home/Away teams & logos, date, venue, competition, status, score, report, gallery, goalscorers.
- **News**: Title, slug, excerpt, content, coverImage, category, author, publishedAt.
- **Product**: Name, slug, description, price, images, category, sizes, stock, edition, isFeatured, badge.

---

## 7. Express API Routes

Prefix: `/api`
- **Auth**: `/auth/register`, `/auth/login`, `/auth/me`
- **Players**: GET, POST, PUT, DELETE on `/players`
- **Matches**: GET, POST, PUT on `/matches`
- **News**: GET, POST, PUT, DELETE on `/news`
- **Shop**: GET, POST, PUT on `/products`
- **Orders**: GET, POST, PUT on `/orders`
- **Contact**: POST `/contact` (triggers email)

---

## 8. Responsive Design Breakpoints

- **Mobile**: `< 640px` (Single column, hamburger menu)
- **Tablet**: `640px - 1024px` (2-column grids)
- **Desktop**: `1024px - 1280px` (3-4 column grids)
- **Wide**: `> 1280px`

---

## 9. SEO Complete Guide

- **React Helmet**: Per-page meta tags (title, description, OG tags).
- **Structured Data**: JSON-LD for Organization, Article, and Product.
- **Slugs**: Lowercase, hyphen-separated, clean URLs.
- **Speed**: WebP images, lazy loading, code splitting.
- **Keywords**: Targeting "Thunder Bulls FC", squad, fixtures, kits.

---

## 10. Deployment Guide

- **Frontend**: Vercel or Netlify.
- **Backend**: Railway.app or Render.com.
- **Database**: MongoDB Atlas.
- **Images**: Cloudinary.

---

## 11. Performance Checklist

Includes WebP images, lazy loading, code splitting, sitemap submission, Lighthouse score 90+, and custom 404 page.

---

## 12. Quick-Start Commands

```bash
# Frontend setup (Vite)
npm create vite@latest client -- --template react
cd client && npm install

# Backend setup
mkdir server && cd server
npm init -y
npm install express mongoose dotenv cors bcryptjs jsonwebtoken
```

---
*Document Version 1.0 | Prepared May 2026*
