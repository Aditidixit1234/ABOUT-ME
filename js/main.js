:root{
  --bg:#f8f7ff;--bg2:#f0eeff;
  --p1:#7c3aed;--p2:#a855f7;--p3:#c084fc;--p4:#ede9fe;
  --pk:#ec4899;--text:#1a1a2e;--muted:#64748b;--border:#e5e0ff;
  --shadow:0 4px 24px rgba(124,58,237,0.08);
  --shadow-hover:0 16px 48px rgba(124,58,237,0.22);
  --radius:16px;--radius-lg:22px;
}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--text);font-family:'Poppins',sans-serif;overflow-x:hidden;line-height:1.6}
a{text-decoration:none}ul{list-style:none}img{max-width:100%;display:block}
.container{max-width:1050px;margin:0 auto;width:100%;padding:0 1.25rem}
.alt-bg{background:var(--bg)}
section:not(.alt-bg){background:#fff}
section{padding:5.5rem 1.5rem}
.grad{background:linear-gradient(135deg,var(--p1),var(--pk));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.sec-tag{font-size:0.72rem;text-transform:uppercase;letter-spacing:0.18em;color:var(--p1);font-weight:700;margin-bottom:0.5rem}
.sec-header{text-align:center;margin-bottom:3rem}
.sec-title{font-size:clamp(1.7rem,4vw,2.5rem);font-weight:800;line-height:1.15;margin-bottom:0.75rem}
.sec-line{width:54px;height:3px;background:linear-gradient(to right,var(--p1),var(--pk));border-radius:2px;margin:0 auto}
.btn-main{background:var(--p1);color:#fff;padding:0.75rem 2rem;border-radius:100px;font-weight:600;font-size:0.88rem;transition:all 0.25s;box-shadow:0 4px 20px rgba(124,58,237,0.35);display:inline-flex;align-items:center;gap:0.4rem;cursor:pointer;border:none;font-family:'Poppins',sans-serif}
.btn-main:hover{background:var(--p2);transform:translateY(-2px);box-shadow:0 8px 30px rgba(124,58,237,0.5)}
.btn-out{border:2px solid var(--p1);color:var(--p1);padding:0.73rem 2rem;border-radius:100px;font-weight:600;font-size:0.88rem;transition:all 0.25s;background:#fff;display:inline-flex;align-items:center;gap:0.4rem}
.btn-out:hover{background:var(--p4);transform:translateY(-2px)}
.glass{background:rgba(255,255,255,0.7);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid rgba(124,58,237,0.15)}

/* ===== SCROLL REVEAL BASE ===== */
.reveal-up,.reveal-left,.reveal-right,.reveal-zoom{opacity:0;transition:opacity 0.65s ease,transform 0.65s ease}
.reveal-up{transform:translateY(48px)}
.reveal-left{transform:translateX(-48px)}
.reveal-right{transform:translateX(48px)}
.reveal-zoom{transform:scale(0.8)}
.reveal-up.in,.reveal-left.in,.reveal-right.in,.reveal-zoom.in{opacity:1;transform:none}
.reveal-up.out,.reveal-left.out,.reveal-right.out,.reveal-zoom.out{opacity:0}
.reveal-up.out{transform:translateY(48px)}
.reveal-left.out{transform:translateX(-48px)}
.reveal-right.out{transform:translateX(48px)}
.reveal-zoom.out{transform:scale(0.8)}

/* ===== NAVBAR ===== */
#navbar{position:fixed;top:0;left:0;right:0;z-index:1000;background:rgba(255,255,255,0.9);backdrop-filter:blur(20px);border-bottom:1px solid var(--border);padding:0 2rem;display:flex;align-items:center;justify-content:space-between;height:60px;transition:box-shadow 0.3s}
.nav-logo{font-size:1.1rem;font-weight:800;color:var(--p1)}
.nav-links{display:flex;gap:1.4rem}
.nav-links a{color:var(--muted);font-size:0.78rem;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;transition:color 0.2s;padding-bottom:2px;border-bottom:2px solid transparent}
.nav-links a:hover,.nav-links a.active{color:var(--p1);border-color:var(--p1)}
.hamburger{display:none;font-size:1.6rem;color:var(--p1);cursor:pointer}

/* ===== HERO ===== */
#hero{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:7rem 1.5rem 5rem;background:linear-gradient(160deg,#fff 55%,#f0eeff 100%);position:relative;overflow:hidden}
#particles-canvas{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0}
.blob{position:absolute;border-radius:50%;filter:blur(70px);opacity:0.55;animation:blobFloat 8s ease-in-out infinite;z-index:0;pointer-events:none}
.blob1{width:420px;height:420px;background:radial-gradient(circle,rgba(124,58,237,0.35),transparent 70%);top:-80px;right:-60px;animation-delay:0s}
.blob2{width:320px;height:320px;background:radial-gradient(circle,rgba(236,72,153,0.28),transparent 70%);bottom:-60px;left:-40px;animation-delay:-3s}
.blob3{width:260px;height:260px;background:radial-gradient(circle,rgba(99,102,241,0.22),transparent 70%);top:40%;left:60%;animation-delay:-5s}
@keyframes blobFloat{0%,100%{transform:translateY(0) scale(1)}33%{transform:translateY(-30px) scale(1.05)}66%{transform:translateY(20px) scale(0.97)}}
.hero-content{position:relative;z-index:1;max-width:700px;width:100%}
.hero-badge{display:inline-flex;align-items:center;gap:0.5rem;background:var(--p4);border:1px solid #c4b5fd;border-radius:100px;padding:0.4rem 1.1rem;font-size:0.78rem;color:var(--p1);font-weight:600;margin-bottom:1.25rem;opacity:0;animation:fadeUp 0.7s ease 0.1s forwards}
.pulse-dot{width:7px;height:7px;border-radius:50%;background:var(--p1);animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.4;transform:scale(1.7)}}
.hero-name{font-size:clamp(2rem,6vw,4.5rem);font-weight:800;line-height:1.08;margin-bottom:0.75rem;opacity:0;animation:fadeUp 0.7s ease 0.25s forwards}
.hero-typed{font-size:clamp(1rem,2.5vw,1.25rem);color:var(--muted);margin-bottom:0.5rem;min-height:2rem;opacity:0;animation:fadeUp 0.7s ease 0.4s forwards}
.hero-sub{font-size:0.85rem;color:var(--p2);font-weight:500;margin-bottom:1.75rem;opacity:0;animation:fadeUp 0.7s ease 0.5s forwards}
.cursor{color:var(--p1);animation:blink 1s infinite}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
.hero-btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;margin-bottom:1.75rem;opacity:0;animation:fadeUp 0.7s ease 0.6s forwards}
.hero-socials{display:flex;gap:0.75rem;justify-content:center;opacity:0;animation:fadeUp 0.7s ease 0.75s forwards}
.soc{width:42px;height:42px;border-radius:50%;background:#fff;border:1.5px solid var(--border);display:flex;align-items:center;justify-content:center;color:var(--p1);font-size:1.2rem;transition:all 0.25s;box-shadow:var(--shadow)}
.soc:hover{background:var(--p1);color:#fff;border-color:var(--p1);transform:translateY(-3px) scale(1.1);box-shadow:0 8px 20px rgba(124,58,237,0.4)}
@keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
.scroll-down{position:absolute;bottom:2rem;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:6px;color:var(--muted);font-size:0.68rem;letter-spacing:0.1em;text-transform:uppercase;animation:floatY 2s ease-in-out infinite;z-index:1}
.scroll-arrow{width:1px;height:36px;background:linear-gradient(to bottom,var(--p1),transparent)}
@keyframes floatY{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(-7px)}}

/* ===== MARQUEE ===== */
.marquee-section{background:var(--p1);padding:0.9rem 0;overflow:hidden}
.marquee-track{overflow:hidden;white-space:nowrap}
.marquee-inner{display:inline-flex;gap:0;animation:marquee 28s linear infinite}
.marquee-inner span{font-size:0.82rem;font-weight:600;color:rgba(255,255,255,0.85);padding:0 1.75rem;position:relative}
.marquee-inner span::after{content:'•';position:absolute;right:0;top:50%;transform:translateY(-50%);color:rgba(255,255,255,0.4);font-size:0.6rem}
@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
.marquee-section:hover .marquee-inner{animation-play-state:paused}

/* ===== ABOUT ===== */
#about{padding:5rem 1.5rem 3rem}
.about-grid{display:grid;grid-template-columns:auto 1fr;gap:3.5rem;align-items:center;max-width:1050px;margin:0 auto 3rem}
.about-avatar{width:160px;height:160px;border-radius:50%;background:linear-gradient(135deg,var(--p4),#fce7f3);border:3px solid var(--border);box-shadow:0 8px 32px rgba(124,58,237,0.18);display:flex;align-items:center;justify-content:center;font-size:4.5rem;flex-shrink:0;object-fit:cover;overflow:hidden}
.about-text h2{font-size:clamp(1.5rem,3vw,2rem);font-weight:800;margin:0.5rem 0 1rem;line-height:1.2}
.about-text p{color:var(--muted);font-size:0.88rem;line-height:1.85;margin-bottom:0.75rem}
.info-row{display:flex;align-items:center;gap:0.6rem;font-size:0.84rem;color:var(--muted);margin:0.4rem 0}
.info-row i{color:var(--p1);font-size:1.1rem}
.info-row strong{color:var(--text);margin-right:0.2rem}
.about-chips{display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:1.25rem}
.chip{background:var(--p4);color:var(--p1);padding:0.3rem 0.9rem;border-radius:100px;font-size:0.74rem;font-weight:600;border:1px solid #c4b5fd;transition:all 0.2s;cursor:default}
.chip:hover{background:var(--p1);color:#fff;transform:translateY(-2px)}

/* STATS */
.stats-row{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin-top:0}
.stat-card{background:linear-gradient(135deg,var(--p4),#fce7f3);border:1.5px solid var(--border);border-radius:var(--radius-lg);padding:1.5rem 1rem;text-align:center;transition:transform 0.3s,box-shadow 0.3s}
.stat-card:hover{transform:translateY(-5px);box-shadow:var(--shadow-hover)}
.stat-num{font-size:2.2rem;font-weight:800;color:var(--p1);line-height:1}
.stat-plus{font-size:1.5rem;font-weight:800;color:var(--pk);display:inline}
.stat-label{font-size:0.78rem;color:var(--muted);font-weight:500;margin-top:0.4rem}

/* ===== SKILLS ===== */
#skills{padding:5.5rem 1.5rem}
.skills-categories{display:flex;flex-direction:column;gap:0.9rem}
.skill-category{background:#fff;border-radius:var(--radius-lg);border:1.5px solid var(--border);padding:1.4rem 1.6rem;position:relative;overflow:hidden;box-shadow:var(--shadow);transition:box-shadow 0.3s,border-color 0.3s,transform 0.3s}
.skill-category:hover{box-shadow:var(--shadow-hover);border-color:#c4b5fd;transform:translateX(5px)}
.left-bar{position:absolute;left:0;top:0;bottom:0;width:4px;transform:scaleY(0);transform-origin:top;border-radius:0 3px 3px 0;transition:transform 0.35s ease}
.skill-category:hover .left-bar{transform:scaleY(1)}
.skill-cat-top{display:flex;align-items:center;gap:12px;margin-bottom:1rem;padding-bottom:0.9rem;border-bottom:1px solid #f0eeff}
.skill-cat-icon{width:46px;height:46px;border-radius:13px;display:flex;align-items:center;justify-content:center;font-size:1.3rem;flex-shrink:0;border:1.5px solid;transition:transform 0.3s}
.skill-category:hover .skill-cat-icon{transform:rotate(-8deg) scale(1.12)}
.skill-cat-title{font-size:0.97rem;font-weight:700;color:var(--text)}
.skill-cat-sub{font-size:0.72rem;color:var(--muted);margin-top:2px}
.skill-tags{display:flex;flex-wrap:wrap;gap:7px}
.sk-tag{padding:5px 14px;border-radius:100px;font-size:0.76rem;font-weight:600;border:1.5px solid;cursor:default;transition:all 0.2s}
.sk-tag:hover{transform:scale(1.08) translateY(-2px);box-shadow:0 4px 14px rgba(0,0,0,0.12)}
.t-purple{background:#ede9fe;color:#5b21b6;border-color:#c4b5fd}.t-purple:hover{background:#7c3aed;color:#fff;border-color:#7c3aed}
.t-pink{background:#fce7f3;color:#9d174d;border-color:#f9a8d4}.t-pink:hover{background:#ec4899;color:#fff;border-color:#ec4899}
.t-blue{background:#eff6ff;color:#1e40af;border-color:#bfdbfe}.t-blue:hover{background:#3b82f6;color:#fff;border-color:#3b82f6}
.t-amber{background:#fffbeb;color:#92400e;border-color:#fde68a}.t-amber:hover{background:#f59e0b;color:#fff;border-color:#f59e0b}
.t-green{background:#ecfdf5;color:#065f46;border-color:#a7f3d0}.t-green:hover{background:#10b981;color:#fff;border-color:#10b981}
.t-indigo{background:#eef2ff;color:#3730a3;border-color:#c7d2fe}.t-indigo:hover{background:#6366f1;color:#fff;border-color:#6366f1}

/* ===== EDUCATION ===== */
#education{padding:5.5rem 1.5rem}
.edu-timeline{max-width:750px;margin:0 auto;position:relative}
.edu-timeline::before{content:'';position:absolute;left:22px;top:8px;bottom:8px;width:2px;background:linear-gradient(to bottom,var(--p1),var(--pk),rgba(124,58,237,0.1))}
.edu-row{display:flex;gap:2rem;margin-bottom:2rem}
.edu-dot{width:46px;height:46px;border-radius:50%;background:linear-gradient(135deg,var(--p1),var(--p2));display:flex;align-items:center;justify-content:center;color:#fff;font-size:1rem;flex-shrink:0;box-shadow:0 0 0 4px #fff,0 0 0 6px var(--p4),0 0 20px rgba(124,58,237,0.35)}
.edu-box{border-radius:var(--radius-lg);padding:1.4rem 1.6rem;flex:1;box-shadow:var(--shadow);transition:box-shadow 0.3s,transform 0.3s}
.edu-box:hover{box-shadow:var(--shadow-hover);transform:translateX(4px)}
.edu-year-badge{display:inline-block;background:linear-gradient(135deg,var(--p1),var(--pk));color:#fff;font-size:0.7rem;font-weight:700;padding:0.2rem 0.75rem;border-radius:100px;margin-bottom:0.6rem}
.edu-box h4{font-size:0.97rem;font-weight:700;color:var(--text);margin-bottom:0.3rem}
.inst{color:var(--p1);font-size:0.83rem;font-weight:600;margin-bottom:0.4rem}
.edu-meta{margin-bottom:0.4rem}
.edu-cgpa{background:var(--p4);color:var(--p1);padding:0.2rem 0.75rem;border-radius:100px;font-size:0.75rem;font-weight:700}
.edu-courses{font-size:0.78rem;color:var(--muted);line-height:1.6}

/* ===== PROJECTS ===== */
#projects{padding:5.5rem 1.5rem}
.proj-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.4rem}
.proj-card{background:#fff;border:1.5px solid var(--border);border-radius:var(--radius-lg);padding:1.75rem;box-shadow:var(--shadow);position:relative;overflow:hidden;transition:border-color 0.3s,box-shadow 0.3s;transform-style:preserve-3d}
.proj-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(to right,var(--p1),var(--pk))}
.proj-glow{position:absolute;inset:0;border-radius:var(--radius-lg);opacity:0;transition:opacity 0.35s;pointer-events:none;box-shadow:inset 0 0 0 2px var(--p1),0 0 30px rgba(124,58,237,0.25)}
.proj-card:hover .proj-glow{opacity:1}
.proj-card:hover{box-shadow:0 20px 60px rgba(124,58,237,0.2)}
.proj-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem}
.proj-emoji{font-size:2rem}
.proj-links{display:flex;gap:0.75rem}
.proj-links a{color:var(--muted);font-size:1.3rem;transition:color 0.2s,transform 0.2s}
.proj-links a:hover{color:var(--p1);transform:translateY(-2px)}
.proj-card h4{font-size:0.97rem;font-weight:700;margin-bottom:0.5rem}
.proj-card p{color:var(--muted);font-size:0.82rem;line-height:1.75;margin-bottom:1rem}
.proj-card em{color:var(--p1);font-style:normal;font-weight:600}
.techs{display:flex;flex-wrap:wrap;gap:0.4rem}
.tch{background:var(--p4);color:var(--p1);padding:0.22rem 0.65rem;border-radius:6px;font-size:0.7rem;font-weight:700;transition:all 0.2s}
.tch:hover{background:var(--p1);color:#fff}

/* ===== EXPERIENCE ===== */
#experience{padding:5.5rem 1.5rem}
.exp-list{max-width:700px;margin:0 auto;display:flex;flex-direction:column;gap:1rem}
.exp-card{background:var(--bg);border:1.5px solid var(--border);border-radius:var(--radius);padding:1.1rem 1.4rem;display:flex;gap:1.1rem;align-items:center;box-shadow:var(--shadow);transition:all 0.3s}
.exp-card:hover{border-color:var(--p2);box-shadow:var(--shadow-hover);transform:translateX(6px)}
.exp-logo{width:48px;height:48px;border-radius:13px;background:linear-gradient(135deg,var(--p4),#fce7f3);border:1.5px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:1.3rem;flex-shrink:0}
.exp-info{flex:1;min-width:0}
.exp-info h4{font-size:0.9rem;font-weight:700}
.exp-info .role{color:var(--p1);font-size:0.8rem;font-weight:600}
.exp-info .period{color:var(--muted);font-size:0.73rem;margin-top:0.1rem}
.badge{padding:0.22rem 0.8rem;border-radius:100px;font-size:0.68rem;font-weight:700;white-space:nowrap;flex-shrink:0}
.b-intern{background:var(--p4);color:var(--p1);border:1px solid #c4b5fd}
.b-active{background:#dcfce7;color:#16a34a;border:1px solid #bbf7d0}

/* ===== ACHIEVEMENTS timeline ===== */
#achievements{padding:5.5rem 1.5rem}
.ach-timeline{max-width:820px;margin:0 auto;position:relative;display:grid;grid-template-columns:1fr 1fr;gap:1.25rem}
.ach-timeline::before{content:'';position:absolute;left:50%;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,var(--p1),var(--pk),rgba(124,58,237,0.1));transform:translateX(-50%)}
.ach-item{position:relative}
.ach-item:nth-child(odd){padding-right:2rem}
.ach-item:nth-child(even){padding-left:2rem;margin-top:2rem}
.ach-dot{position:absolute;width:14px;height:14px;border-radius:50%;top:1.5rem;z-index:1}
.ach-item:nth-child(odd) .ach-dot{right:-7px}
.ach-item:nth-child(even) .ach-dot{left:-7px}
.ach-dot.purple{background:var(--p1);box-shadow:0 0 0 4px var(--p4),0 0 14px rgba(124,58,237,0.5)}
.ach-dot.regular{background:var(--muted);box-shadow:0 0 0 3px var(--bg)}
.ach-card{border-radius:var(--radius-lg);padding:1.4rem;box-shadow:var(--shadow);transition:all 0.3s;text-align:center}
.ach-card:hover{transform:translateY(-5px);box-shadow:var(--shadow-hover)}
.ach-card.purple-glow{border-color:#a78bfa !important;box-shadow:0 4px 28px rgba(124,58,237,0.2)}
.ach-card.purple-glow:hover{box-shadow:0 12px 50px rgba(124,58,237,0.35)}
.ach-icon{font-size:2rem;margin-bottom:0.7rem}
.ach-card h4{font-size:0.9rem;font-weight:700;margin-bottom:0.4rem}
.ach-card p{color:var(--muted);font-size:0.78rem;line-height:1.65}
.ach-rank{display:inline-block;margin-top:0.75rem;background:linear-gradient(135deg,var(--p1),var(--pk));padding:0.24rem 0.85rem;border-radius:100px;font-size:0.69rem;font-weight:700;color:#fff}

/* ===== CONTACT ===== */
#contact{padding:5.5rem 1.5rem}
.contact-grid{display:grid;grid-template-columns:1fr 1.2fr;gap:3.5rem;align-items:start;max-width:900px;margin:0 auto}
.contact-info>p{color:var(--muted);font-size:0.88rem;margin-bottom:1.5rem;line-height:1.8}
.ci{display:flex;align-items:center;gap:0.9rem;background:var(--bg);border:1.5px solid var(--border);border-radius:13px;padding:0.85rem 1.1rem;margin-bottom:0.85rem;transition:all 0.2s;text-decoration:none;color:inherit;cursor:pointer}
.ci:hover{border-color:var(--p2);transform:translateX(4px)}
.ci-icon{width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,var(--p1),var(--pk));display:flex;align-items:center;justify-content:center;color:#fff;font-size:1rem;flex-shrink:0}
.ci-label{font-size:0.72rem;color:var(--muted)}
.ci-val{font-size:0.82rem;color:var(--text);font-weight:600}
.contact-form{display:flex;flex-direction:column;gap:0.9rem}
.contact-form input,.contact-form textarea{background:var(--bg);border:1.5px solid var(--border);border-radius:12px;padding:0.82rem 1rem;font-size:0.86rem;color:var(--text);font-family:'Poppins',sans-serif;transition:border-color 0.2s,box-shadow 0.2s;outline:none;resize:vertical;width:100%}
.contact-form input:focus,.contact-form textarea:focus{border-color:var(--p1);box-shadow:0 0 0 3px rgba(124,58,237,0.1)}
.contact-form input::placeholder,.contact-form textarea::placeholder{color:var(--muted)}

/* ===== FOOTER ===== */
footer{background:var(--text);color:#aaa;text-align:center;padding:2.5rem 1.5rem;font-size:0.8rem}
.footer-links{display:flex;justify-content:center;flex-wrap:wrap;gap:1.25rem;margin-bottom:1rem}
.footer-links a{color:#aaa;transition:color 0.2s;font-size:0.78rem}
.footer-links a:hover{color:var(--p3)}
footer span{color:var(--p3);font-weight:600}

/* ===== RESPONSIVE ===== */
/* =====================================================
   RESPONSIVE — tested at 1024 / 768 / 480 / 360px
   ===================================================== */

/* ---------- TABLET LANDSCAPE (≤1024px) ---------- */
@media (max-width: 1024px) {
  .proj-grid { grid-template-columns: repeat(2, 1fr); }
  .ach-timeline { grid-template-columns: 1fr; gap: 1rem; }
  .ach-timeline::before { display: none; }
  .ach-item:nth-child(odd),
  .ach-item:nth-child(even) { padding: 0; margin: 0; }
  .ach-dot { display: none; }
  .stats-row { grid-template-columns: repeat(2, 1fr); }
}

/* ---------- TABLET PORTRAIT (≤900px) ---------- */
@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    gap: 2rem;
  }
  .info-row { justify-content: center; }
  .about-chips { justify-content: center; }
  .about-text .btn-main { margin: 1.25rem auto 0; }
  .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
  .edu-box { padding: 1.2rem 1.25rem; }
  .skill-category:hover { transform: none; }
}

/* ---------- MOBILE (≤640px) ---------- */
@media (max-width: 640px) {
  /* Navbar */
  #navbar { padding: 0 1.25rem; position: fixed; }
  .nav-links {
    display: none;
    flex-direction: column;
    position: fixed;
    top: 60px; left: 0; right: 0;
    background: #fff;
    padding: 0.5rem 1.5rem 1.5rem;
    border-bottom: 1px solid var(--border);
    box-shadow: 0 8px 32px rgba(124,58,237,0.12);
    gap: 0;
    z-index: 999;
    max-height: calc(100vh - 60px);
    overflow-y: auto;
  }
  .nav-links.open { display: flex; }
  .nav-links li { border-bottom: 1px solid var(--border); }
  .nav-links li:last-child { border-bottom: none; }
  .nav-links a { display: block; padding: 0.85rem 0; font-size: 0.9rem; border-bottom: none; }
  .hamburger { display: block; }

  /* Sections */
  section { padding: 4rem 1.1rem; }
  #hero { padding: 6rem 1.1rem 4.5rem; }

  /* Hero */
  .blob { display: none; }
  .hero-name { font-size: clamp(1.8rem, 8vw, 2.8rem); }
  .hero-typed { font-size: 0.95rem; }
  .hero-sub { font-size: 0.8rem; }
  .hero-btns { flex-direction: column; align-items: center; gap: 0.75rem; }
  .btn-main, .btn-out { width: 100%; justify-content: center; max-width: 300px; }
  .hero-socials { gap: 0.6rem; }
  .soc { width: 38px; height: 38px; font-size: 1.1rem; }

  /* Marquee */
  .marquee-inner span { padding: 0 1.2rem; font-size: 0.78rem; }

  /* About */
  .about-avatar { width: 130px; height: 130px; font-size: 3rem; object-fit:cover; display:block; margin:0 auto; }
  .about-text h2 { font-size: 1.5rem; }
  .stats-row { grid-template-columns: repeat(2, 1fr); gap: 0.75rem; }
  .stat-num { font-size: 1.8rem; }
  .stat-card { padding: 1.1rem 0.75rem; }

  /* Skills */
  .skill-category { padding: 1.1rem 1.1rem; }
  .skill-cat-top { gap: 10px; margin-bottom: 0.85rem; padding-bottom: 0.75rem; }
  .skill-cat-icon { width: 40px; height: 40px; font-size: 1.1rem; }
  .skill-cat-title { font-size: 0.9rem; }
  .sk-tag { font-size: 0.72rem; padding: 4px 11px; }

  /* Education */
  .edu-timeline::before { display: none; }
  .edu-row { gap: 0.85rem; margin-bottom: 1.25rem; }
  .edu-dot { width: 38px; height: 38px; font-size: 0.85rem; flex-shrink: 0; box-shadow: 0 0 0 3px #fff, 0 0 0 5px var(--p4); }
  .edu-box { padding: 1rem 1.1rem; }
  .edu-box h4 { font-size: 0.88rem; }
  .edu-courses { font-size: 0.73rem; }

  /* Projects */
  .proj-grid { grid-template-columns: 1fr; gap: 1.1rem; }
  .proj-card { padding: 1.4rem; }
  .proj-card p { font-size: 0.8rem; }

  /* Experience */
  .exp-card { flex-wrap: wrap; gap: 0.75rem; }
  .exp-card:hover { transform: none; }
  .exp-info h4 { font-size: 0.85rem; }

  /* Achievements */
  .ach-card { padding: 1.2rem; }
  .ach-card h4 { font-size: 0.85rem; }
  .ach-card p { font-size: 0.75rem; }

  /* Contact */
  .ci-val { font-size: 0.78rem; word-break: break-all; }

  /* Footer */
  .footer-links { gap: 0.75rem; }
  .footer-links a { font-size: 0.72rem; }
}

/* ---------- SMALL MOBILE (≤400px) ---------- */
@media (max-width: 400px) {
  .hero-name { font-size: 1.7rem; }
  .stats-row { grid-template-columns: 1fr 1fr; }
  .stat-num { font-size: 1.6rem; }
  .about-chips { gap: 0.35rem; }
  .chip { font-size: 0.68rem; padding: 0.25rem 0.7rem; }
  .proj-card { padding: 1.2rem; }
  .edu-dot { width: 34px; height: 34px; font-size: 0.78rem; }
  .tch { font-size: 0.65rem; padding: 0.18rem 0.5rem; }
  section { padding: 3.5rem 1rem; }
  #hero { padding: 5.5rem 1rem 4rem; }
}
