# Visnu Singh — Portfolio

[![Status](https://img.shields.io/badge/status-live-34d399.svg)](https://visnusingh.com)
[![Made with](https://img.shields.io/badge/made_with-HTML%20%7C%20CSS%20%7C%20JS-7c5cff.svg)](#tech-stack)
[![Hosting](https://img.shields.io/badge/hosting-Firebase-orange.svg)](https://firebase.google.com/docs/hosting)
[![License](https://img.shields.io/badge/license-MIT-000.svg)](#license)

A fast, accessible personal site showcasing my projects and experience. Built as a lightweight static site and deployed on Firebase Hosting with Cloudflare proxy.

**Live:** https://visnusingh.com

---

## ✨ Features

- ⚡️ **Fast & minimal** – no framework, just hand-tuned HTML/CSS/JS  
- 📱 **Responsive** – custom mobile nav (hamburger) + desktop layout  
- 🧭 **Clean sections** – About, Skills, Projects, Experience, Resume, Contact  
- 🧩 **Design tokens** – color variables + gradients for easy theming  
- 📄 **Resume** – view & download buttons (served from `/public/resume`)  
- 🌐 **SEO basics** – title, description, favicon

---

## 🧰 Tech Stack

- **Frontend:** HTML5, CSS3, vanilla JS  
- **Hosting/CDN:** Firebase Hosting (+ Cloudflare in front)  
- **Analytics:** Google Analytics (GA4)

---

## 🔗 Demo & Key URLs

- **Site:** https://visnusingh.com  
- **Resume (view):** `https://visnusingh.com/resume/Visnu_Singh_Resume.pdf`  
- **Resume (download):** same link with browser “Save as” or right-click  

> If you change the file name/path, update the link(s) in `index.html`.

---

## 📸 Screenshots

> Replace these with your own images (drag into GitHub and paste links).

| Desktop | Mobile |
| --- | --- |
| ![desktop screenshot](https://via.placeholder.com/1200x700?text=Desktop+Screenshot) | ![mobile screenshot](https://via.placeholder.com/360x720?text=Mobile+Screenshot) |

---

## 📦 Project Structure

visnu-portfolio/
├─ public/
│ ├─ assets/
│ │ └─ visnu.png
│ ├─ resume/
│ │ └─ Visnu_Singh_Resume.pdf
│ ├─ index.html
│ ├─ styles.css
│ └─ app.js
├─ firebase.json
└─ README.md


- All static files are served from `public/`.  
- Resume lives at `public/resume/…` and is public.

---

## 🛠️ Local Setup

```bash
# clone
git clone https://github.com/visnusingh/Visnu-Portfolio.git
cd Visnu-Portfolio

# serve locally with any static server, e.g.:
# python3 -m http.server 8080  (or)
# npx serve public

# install CLI (if needed)
npm i -g firebase-tools

# login and select project
firebase login
firebase use visnu-portfolio   # or your project id

# deploy only hosting
firebase deploy --only hosting
