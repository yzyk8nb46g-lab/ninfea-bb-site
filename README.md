@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@500;600;700&display=swap");

:root {
  --bg: #faf8f3;
  --surface: #ffffff;
  --surface-soft: #f3eee6;
  --text: #26342f;
  --muted: #66615a;
  --line: #e4d8c8;
  --green: #2f7d66;
  --green-dark: #276b57;
  --dark: #1f2a26;
  --gold: #f3c85c;
  --radius-lg: 34px;
  --radius-md: 24px;
  --shadow: 0 24px 70px rgba(31, 42, 38, 0.12);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  min-width: 320px;
  background: var(--bg);
  color: var(--text);
  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
img { display: block; max-width: 100%; }
a { color: inherit; text-decoration: none; }
button, input, select, textarea { font: inherit; }
button { cursor: pointer; }

.container { width: min(1180px, calc(100% - 40px)); margin: 0 auto; }
.narrow { width: min(820px, calc(100% - 40px)); }
.center-text { text-align: center; }

h1, h2, h3 { margin: 0; line-height: 1.08; }
h1, h2, .brand strong, .footer-brand h3 { font-family: "Playfair Display", Georgia, serif; }
p { margin: 0; }

.site-header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(255,255,255,0.2);
  background: rgba(250, 248, 243, 0.9);
  backdrop-filter: blur(18px);
}
.header-inner { height: 84px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
.brand { display: inline-flex; align-items: center; gap: 12px; }
.brand-icon { width: 46px; height: 46px; border-radius: 999px; background: var(--green); color: white; display: grid; place-items: center; }
.brand strong { display: block; font-size: 28px; font-weight: 700; line-height: 0.9; }
.brand small { display: block; margin-top: 5px; color: #7b756c; letter-spacing: 0.22em; font-size: 11px; font-weight: 700; }
.desktop-nav { display: flex; align-items: center; gap: 24px; }
.desktop-nav a { font-size: 14px; font-weight: 650; color: #514c45; transition: color 0.2s; }
.desktop-nav a:hover, .desktop-nav a.active { color: var(--green); }
.header-actions { display: flex; align-items: center; gap: 12px; }
.header-phone { display: inline-flex; align-items: center; gap: 8px; font-weight: 700; font-size: 14px; }
.menu-btn { display: none; width: 46px; height: 46px; border-radius: 999px; border: 1px solid var(--line); background: white; color: var(--text); align-items: center; justify-content: center; }

.btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; border-radius: 999px; padding: 15px 24px; font-size: 14px; font-weight: 800; border: 1px solid transparent; transition: transform .2s, background .2s, color .2s, border .2s; }
.btn:hover { transform: translateY(-2px); }
.btn-primary { background: var(--green); color: #fff; box-shadow: 0 16px 36px rgba(47, 125, 102, 0.22); }
.btn-primary:hover { background: var(--green-dark); }
.btn-secondary { background: rgba(255,255,255,0.9); border-color: var(--line); color: var(--text); }
.btn-secondary:hover { border-color: var(--green); color: var(--green); }
.btn.full { width: 100%; }

.mobile-menu { position: fixed; inset: 0; z-index: 110; background: rgba(31,42,38,.45); backdrop-filter: blur(8px); }
.mobile-menu__panel { margin-left: auto; width: min(88%, 390px); height: 100%; background: var(--bg); padding: 24px; box-shadow: var(--shadow); overflow: auto; }
.mobile-menu__top { display: flex; align-items: center; justify-content: space-between; gap: 18px; }
.mobile-nav { display: grid; margin-top: 38px; }
.mobile-nav a { border-bottom: 1px solid var(--line); padding: 18px 0; font-size: 20px; font-weight: 750; }
.mobile-menu__actions { display: grid; gap: 12px; margin-top: 34px; }

.home-hero, .page-hero { position: relative; min-height: 720px; display: flex; align-items: center; overflow: hidden; padding-top: 110px; }
.home-hero__media, .page-hero__media { position: absolute; inset: 0; }
.home-hero__media img, .page-hero__media img { width: 100%; height: 100%; object-fit: cover; }
.home-hero__overlay, .page-hero__overlay { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(31,42,38,.86), rgba(31,42,38,.48), rgba(31,42,38,.1)), linear-gradient(0deg, var(--bg) 0%, transparent 32%); }
.home-hero__content, .page-hero__content { position: relative; z-index: 1; color: white; padding: 80px 0 130px; }
.home-hero h1, .page-hero h1 { max-width: 850px; font-size: clamp(48px, 7vw, 86px); color: white; }
.home-hero p, .page-hero__content > p { max-width: 720px; margin-top: 24px; font-size: 20px; line-height: 1.75; color: rgba(255,255,255,.82); }
.rating-pill { display: inline-flex; align-items: center; gap: 8px; border: 1px solid rgba(255,255,255,.25); background: rgba(255,255,255,.14); color: white; border-radius: 999px; padding: 9px 14px; margin-bottom: 26px; backdrop-filter: blur(10px); font-weight: 700; font-size: 14px; }
.eyebrow { margin-bottom: 15px; color: var(--green); text-transform: uppercase; letter-spacing: .22em; font-weight: 850; font-size: 12px; }
.eyebrow.light { color: rgba(255,255,255,.68); }
.hero-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 34px; }
.hero-actions.center { justify-content: center; }
.hero-facts { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; max-width: 760px; margin-top: 46px; }
.hero-facts div { border: 1px solid rgba(255,255,255,.18); background: rgba(255,255,255,.12); backdrop-filter: blur(10px); border-radius: 24px; padding: 18px; }
.hero-facts strong { display: block; font-size: 11px; color: rgba(255,255,255,.62); text-transform: uppercase; letter-spacing: .16em; }
.hero-facts span { display: block; margin-top: 8px; font-weight: 750; color: white; }

.booking-strip { position: relative; z-index: 2; margin-top: -78px; padding-bottom: 50px; }
.booking-card { display: grid; grid-template-columns: 1.1fr 1fr auto; gap: 18px; align-items: center; background: white; border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 24px; box-shadow: var(--shadow); }
.booking-card > div { display: flex; align-items: center; gap: 12px; font-weight: 850; font-size: 18px; }
.booking-card svg { color: var(--green); }
.booking-card p { color: var(--muted); line-height: 1.6; }

.section { padding: 105px 0; background: white; }
.light-section { background: var(--bg); }
.section-title { max-width: 780px; margin: 0 auto 54px; text-align: center; }
.section-title--left { margin-left: 0; text-align: left; }
.section-title h2 { font-size: clamp(34px, 5vw, 56px); color: var(--text); }
.section-title p:not(.eyebrow) { margin-top: 20px; color: var(--muted); font-size: 18px; line-height: 1.75; }
.section-head-row { display: flex; align-items: flex-end; justify-content: space-between; gap: 28px; }
.section-head-row .section-title { margin-bottom: 44px; }

.split-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 70px; align-items: center; }
.split-grid.reverse { grid-template-columns: 1.1fr .9fr; }
.align-start { align-items: start; }
.mini-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
.feature-box, .info-card, .service-card { border: 1px solid var(--line); background: white; border-radius: var(--radius-md); padding: 26px; }
.feature-box svg, .info-card svg, .service-card svg { color: var(--green); width: 28px; height: 28px; margin-bottom: 20px; }
.feature-box h3, .info-card h3 { font-size: 21px; margin-bottom: 12px; }
.feature-box p, .info-card p { color: var(--muted); line-height: 1.7; }
.image-card { position: relative; border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow); }
.image-card img { width: 100%; height: 560px; object-fit: cover; }
.offset-card > div { position: absolute; left: 28px; right: 28px; bottom: 28px; background: rgba(255,255,255,.92); border-radius: 24px; padding: 22px; backdrop-filter: blur(12px); }
.offset-card strong { display: block; color: var(--green); text-transform: uppercase; letter-spacing: .14em; font-size: 12px; margin-bottom: 10px; }
.offset-card span { color: var(--text); font-weight: 750; }

.cards-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
.info-card { transition: transform .2s, box-shadow .2s; }
.info-card:hover { transform: translateY(-4px); box-shadow: 0 18px 45px rgba(31,42,38,.08); }

.room-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
.room-card { border: 1px solid var(--line); background: white; border-radius: var(--radius-lg); overflow: hidden; box-shadow: 0 18px 45px rgba(31,42,38,.06); }
.room-card__image { height: 290px; overflow: hidden; }
.room-card__image img { width: 100%; height: 100%; object-fit: cover; transition: transform .7s; }
.room-card:hover .room-card__image img { transform: scale(1.05); }
.room-card__body { padding: 26px; }
.room-card__topline { display: flex; align-items: center; gap: 8px; color: var(--green); font-weight: 800; font-size: 13px; margin-bottom: 14px; }
.room-card h3 { font-size: 30px; }
.room-card p { margin-top: 14px; color: var(--muted); line-height: 1.7; }
.tags { display: flex; flex-wrap: wrap; gap: 8px; margin: 20px 0; }
.tags span, .service-list span { display: inline-flex; border-radius: 999px; background: #eef4ef; color: var(--green); padding: 9px 13px; font-size: 13px; font-weight: 800; }
.text-link { color: var(--green); font-weight: 850; }

.dark-cta { background: var(--dark); color: white; }
.dark-cta__grid { display: grid; grid-template-columns: 1.1fr 1fr auto; gap: 30px; align-items: center; }
.dark-cta h2 { color: white; font-size: clamp(34px, 5vw, 54px); }
.dark-cta p:not(.eyebrow) { margin-top: 18px; color: rgba(255,255,255,.68); line-height: 1.75; }
.service-list { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 24px; }
.service-list.compact { margin-bottom: 0; }
.dark-btn { background: white; color: var(--text); box-shadow: none; }
.dark-btn:hover { background: #f1ebdf; color: var(--text); }

.map-preview, .map-box { border: 1px solid var(--line); background: white; padding: 12px; border-radius: var(--radius-lg); box-shadow: var(--shadow); overflow: hidden; }
.map-preview iframe, .map-box iframe { width: 100%; height: 460px; border: 0; border-radius: 25px; display: block; }

.review-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.review-card { background: white; border: 1px solid var(--line); border-radius: var(--radius-md); padding: 26px; }
.review-card.horizontal { margin-bottom: 14px; }
.stars { color: var(--gold); letter-spacing: 2px; margin-bottom: 16px; font-weight: 900; }
.review-card p { color: var(--muted); line-height: 1.75; margin-bottom: 18px; }
.review-card strong { color: var(--text); }
.rating-box { background: var(--dark); color: white; border-radius: var(--radius-lg); padding: 40px; position: sticky; top: 110px; }
.rating-box span { font-family: "Playfair Display", Georgia, serif; font-size: 86px; font-weight: 700; }
.rating-box p { color: rgba(255,255,255,.68); line-height: 1.7; margin-bottom: 24px; }

.final-conversion { background: var(--dark); color: white; padding: 90px 0; text-align: center; }
.final-conversion h2 { color: white; font-size: clamp(38px, 6vw, 66px); }
.final-conversion p { margin: 20px auto 0; max-width: 660px; color: rgba(255,255,255,.7); line-height: 1.75; }

.page-hero { min-height: 560px; }
.page-hero__content { padding-top: 120px; }
.page-hero h1 { font-size: clamp(44px, 6vw, 72px); }

.service-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
.service-card { display: flex; align-items: center; gap: 16px; font-weight: 800; }
.service-card svg { margin-bottom: 0; flex: 0 0 auto; }
.center-space { margin-top: 38px; text-align: center; }

.image-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.image-grid-2 img { width: 100%; height: 430px; object-fit: cover; border-radius: var(--radius-md); }
.faq-section { background: white; }
details { border: 1px solid var(--line); border-radius: var(--radius-md); padding: 22px; margin-bottom: 14px; background: var(--bg); }
summary { cursor: pointer; font-weight: 850; font-size: 18px; }
details p { margin-top: 16px; color: var(--muted); line-height: 1.7; }

.contact-cards { display: grid; gap: 14px; margin-bottom: 28px; }
.contact-cards a, .contact-cards div { display: flex; gap: 14px; align-items: flex-start; border: 1px solid var(--line); background: white; border-radius: var(--radius-md); padding: 20px; }
.contact-cards svg { color: var(--green); flex: 0 0 auto; }
.contact-cards strong { display: block; margin-bottom: 6px; color: var(--text); }
.contact-cards span { color: var(--muted); line-height: 1.55; }

.contact-form { background: var(--bg); border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 30px; }
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.form-grid label { display: grid; gap: 8px; color: var(--text); font-weight: 800; font-size: 14px; }
.full-field { grid-column: 1 / -1; }
input, select, textarea { width: 100%; border: 1px solid var(--line); background: white; border-radius: 18px; padding: 15px 16px; color: var(--text); outline: none; }
input:focus, select:focus, textarea:focus { border-color: var(--green); }
.form-submit { margin-top: 18px; width: 100%; border: 0; border-radius: 18px; background: var(--green); color: white; font-weight: 850; padding: 16px; }
.form-note { margin-top: 14px; color: var(--muted); text-align: center; line-height: 1.6; font-size: 14px; }

.gallery-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
.gallery-grid figure { position: relative; overflow: hidden; border-radius: var(--radius-md); margin: 0; min-height: 260px; }
.gallery-grid figure.large { grid-column: span 2; grid-row: span 2; }
.gallery-grid img { width: 100%; height: 100%; min-height: 260px; object-fit: cover; transition: transform .7s; }
.gallery-grid figure:hover img { transform: scale(1.05); }
.gallery-grid figcaption { position: absolute; left: 16px; bottom: 16px; background: rgba(255,255,255,.9); border-radius: 999px; padding: 9px 13px; font-weight: 800; font-size: 13px; }

.legal-page { padding: 170px 0 100px; min-height: 70vh; background: var(--bg); }
.legal-content { background: white; border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 34px; color: var(--muted); line-height: 1.75; }
.legal-content h2 { color: var(--text); margin-bottom: 16px; }
.legal-content p + p { margin-top: 16px; }

.site-footer { background: #17211d; color: white; padding: 70px 0 105px; }
.footer-grid { display: grid; grid-template-columns: 2fr 1fr 1.2fr; gap: 60px; }
.footer-brand h3 { font-size: 34px; }
.footer-brand p { margin: 18px 0 24px; max-width: 480px; color: rgba(255,255,255,.62); line-height: 1.75; }
.site-footer h4 { margin: 0 0 18px; }
.site-footer a, .site-footer p { display: block; margin-bottom: 12px; color: rgba(255,255,255,.62); line-height: 1.55; }
.site-footer a:hover { color: white; }
.footer-bottom { display: flex; justify-content: space-between; gap: 20px; border-top: 1px solid rgba(255,255,255,.12); margin-top: 50px; padding-top: 24px; }
.footer-bottom div { display: flex; gap: 18px; }

.mobile-sticky-bar { display: none; }

@media (max-width: 1100px) {
  .desktop-nav, .header-actions { display: none; }
  .menu-btn { display: inline-flex; }
  .cards-4, .service-grid { grid-template-columns: repeat(2, 1fr); }
  .room-grid, .review-grid { grid-template-columns: 1fr 1fr; }
  .dark-cta__grid, .booking-card { grid-template-columns: 1fr; }
}

@media (max-width: 780px) {
  .container { width: min(100% - 28px, 1180px); }
  .header-inner { height: 74px; }
  .brand strong { font-size: 24px; }
  .brand-icon { width: 42px; height: 42px; }
  .home-hero, .page-hero { min-height: 690px; padding-top: 74px; }
  .home-hero__content, .page-hero__content { padding: 70px 0 120px; }
  .home-hero h1, .page-hero h1 { font-size: 46px; }
  .home-hero p, .page-hero__content > p { font-size: 17px; line-height: 1.65; }
  .hero-facts { grid-template-columns: 1fr 1fr; }
  .booking-strip { margin-top: -60px; padding-bottom: 30px; }
  .booking-card { border-radius: 26px; padding: 20px; }
  .section { padding: 76px 0; }
  .section-head-row, .split-grid, .split-grid.reverse { grid-template-columns: 1fr; display: grid; }
  .split-grid { gap: 34px; }
  .mini-grid, .room-grid, .review-grid, .service-grid, .cards-4, .footer-grid { grid-template-columns: 1fr; }
  .section-title { margin-bottom: 34px; }
  .section-title h2 { font-size: 38px; }
  .image-card img { height: 420px; }
  .room-card__image { height: 250px; }
  .gallery-grid { grid-template-columns: 1fr; }
  .gallery-grid figure.large { grid-column: auto; grid-row: auto; }
  .map-preview iframe, .map-box iframe { height: 380px; }
  .form-grid { grid-template-columns: 1fr; }
  .full-field { grid-column: auto; }
  .footer-bottom { flex-direction: column; }
  .site-footer { padding-bottom: 120px; }
  .mobile-sticky-bar { position: fixed; bottom: 0; left: 0; right: 0; z-index: 120; display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; background: white; border-top: 1px solid var(--line); padding: 8px; box-shadow: 0 -12px 35px rgba(31,42,38,.12); }
  .mobile-sticky-bar a { display: flex; flex-direction: column; gap: 4px; align-items: center; justify-content: center; min-height: 58px; border-radius: 16px; color: var(--text); font-size: 12px; font-weight: 850; }
  .mobile-sticky-bar a.main { background: var(--green); color: white; }
}
