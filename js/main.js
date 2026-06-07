// ============================================================
// 1. GRID + PLAIN BUBBLES + METEORS
// ============================================================
(function(){
  const canvas = document.getElementById('particles-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H;
  function resize(){
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  let time = 0;

  // 20 small plain bubbles
  const bubbles = [];
  for(let i = 0; i < 20; i++){
    bubbles.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 2 + 1.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.2 + 0.08,
      color: Math.random() > 0.5 ? '124,58,237' : '236,72,153'
    });
  }

  // Meteors
  const meteors = [];
  function spawnMeteor(){
    if(window.scrollY < window.innerHeight){
      meteors.push({
        x: Math.random() * window.innerWidth * 0.5,
        y: Math.random() * window.innerHeight * 0.3,
        progress: 0,
        len: 80 + Math.random() * 60,
        speed: 5 + Math.random() * 3,
        angle: Math.PI / 5,
        alpha: 1
      });
    }
  }
  setInterval(spawnMeteor, 4500);
  setTimeout(spawnMeteor, 1200);

  function draw(){
    ctx.clearRect(0, 0, W, H);
    time += 0.005;

    // GRID LINES
    const gs = 65;
    ctx.lineWidth = 1;
    for(let i = 0; i * gs <= W; i++){
      ctx.beginPath();
      ctx.moveTo(i * gs, 0);
      ctx.lineTo(i * gs, H);
      ctx.strokeStyle = 'rgba(124,58,237,0.1)';
      ctx.stroke();
    }
    for(let j = 0; j * gs <= H; j++){
      ctx.beginPath();
      ctx.moveTo(0, j * gs);
      ctx.lineTo(W, j * gs);
      ctx.strokeStyle = 'rgba(124,58,237,0.1)';
      ctx.stroke();
    }

    // PLAIN BUBBLES — just simple dots, nothing else
    bubbles.forEach(b => {
      b.x += b.vx;
      b.y += b.vy;
      if(b.x < 0) b.x = W;
      if(b.x > W) b.x = 0;
      if(b.y < 0) b.y = H;
      if(b.y > H) b.y = 0;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + b.color + ',' + b.alpha + ')';
      ctx.fill();
    });

    // METEOR TRAILS
    for(let i = meteors.length - 1; i >= 0; i--){
      const m = meteors[i];
      m.progress += m.speed;
      m.alpha = Math.max(0, 1 - m.progress / (W * 0.55));
      if(m.alpha <= 0){ meteors.splice(i, 1); continue; }
      const tx = m.x + Math.cos(m.angle) * m.progress;
      const ty = m.y + Math.sin(m.angle) * m.progress;
      const hx = tx + Math.cos(m.angle) * m.len;
      const hy = ty + Math.sin(m.angle) * m.len;
      const grad = ctx.createLinearGradient(tx, ty, hx, hy);
      grad.addColorStop(0, 'rgba(162,89,255,0)');
      grad.addColorStop(0.5, 'rgba(162,89,255,' + (m.alpha * 0.6) + ')');
      grad.addColorStop(1, 'rgba(255,255,255,' + m.alpha + ')');
      ctx.beginPath();
      ctx.moveTo(tx, ty);
      ctx.lineTo(hx, hy);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(hx, hy, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,' + m.alpha + ')';
      ctx.shadowColor = 'rgba(162,89,255,0.9)';
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    requestAnimationFrame(draw);
  }
  draw();
})();

// ============================================================
// 2. TYPED EFFECT
// ============================================================
const phrases=['Full-Stack Developer','ML & AI Enthusiast','Backend Developer','Real-Time Systems Builder','Competitive Coder'];
let pi=0,ci=0,del=false;
const typedEl=document.getElementById('typed');
function typeEffect(){
  const cur=phrases[pi];
  if(!del){typedEl.textContent=cur.slice(0,++ci);if(ci===cur.length){del=true;setTimeout(typeEffect,1800);return;}}
  else{typedEl.textContent=cur.slice(0,--ci);if(ci===0){del=false;pi=(pi+1)%phrases.length;}}
  setTimeout(typeEffect,del?50:80);
}
typeEffect();

// ============================================================
// 3. SCROLL REVEAL — triggers EVERY time element enters view
// ============================================================
function initScrollReveal(){
  const allReveal = document.querySelectorAll(
    '.reveal-up,.reveal-left,.reveal-right,.reveal-zoom,' +
    '.skill-category,.proj-card,.exp-card,.ach-item,.edu-row,.stat-card,.sec-header'
  );

  // reset all to hidden on load
  allReveal.forEach(el=>{
    el.classList.remove('in');
    if(el.classList.contains('skill-category') ||
       el.classList.contains('proj-card') ||
       el.classList.contains('exp-card') ||
       el.classList.contains('ach-item') ||
       el.classList.contains('edu-row') ||
       el.classList.contains('stat-card')){
      el.classList.add('reveal-up');
    }
  });

  // stagger groups
  const groups = [
    '.skill-category','.proj-card','.exp-card',
    '.ach-item','.edu-row','.stat-card'
  ];
  groups.forEach(sel=>{
    document.querySelectorAll(sel).forEach((el,i)=>{
      el.dataset.delay = i * 100;
    });
  });

  // observer — use threshold 0.08 so it fires reliably
  // rootMargin negative bottom = fires when element enters from bottom
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        // element coming INTO view — show it
        const delay = parseInt(e.target.dataset.delay||0);
        setTimeout(()=>{
          e.target.classList.add('in');
          e.target.classList.remove('out');
          // skill tags pop in
          const tags = e.target.querySelectorAll('.sk-tag');
          tags.forEach((t,i)=>{
            t.style.opacity='0';
            t.style.transform='scale(0.7) translateY(8px)';
            t.style.transition=`opacity 0.3s ease ${0.1+i*0.05}s,transform 0.3s ease ${0.1+i*0.05}s`;
            setTimeout(()=>{t.style.opacity='1';t.style.transform='none';},100+i*50);
          });
        }, delay);
      } else {
        // element leaving view — hide it again so it re-animates next scroll
        e.target.classList.remove('in');
        e.target.classList.add('out');
        // reset skill tags
        const tags = e.target.querySelectorAll('.sk-tag');
        tags.forEach(t=>{t.style.opacity='0';t.style.transform='scale(0.7) translateY(8px)';});
      }
    });
  },{threshold:0.08, rootMargin:'0px 0px -30px 0px'});

  allReveal.forEach(el=>obs.observe(el));
}
initScrollReveal();

// ============================================================
// 4. COUNTER ANIMATION — re-runs every time stats come into view
// ============================================================
const counterObs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.querySelectorAll('.stat-num').forEach(el=>{
        const target=parseInt(el.dataset.target);
        let count=0;
        const step=Math.ceil(target/60);
        el.textContent='0';
        const timer=setInterval(()=>{
          count=Math.min(count+step,target);
          el.textContent=count.toLocaleString();
          if(count>=target) clearInterval(timer);
        },22);
      });
    } else {
      // reset counters when leaving so they re-animate
      e.target.querySelectorAll('.stat-num').forEach(el=>{
        el.textContent='0';
      });
    }
  });
},{threshold:0.4});
const statsRow=document.getElementById('stats');
if(statsRow) counterObs.observe(statsRow);

// ============================================================
// 5. NAVBAR
// ============================================================
const sections=document.querySelectorAll('section[id]');
const navLinks=document.querySelectorAll('.nav-links a');
window.addEventListener('scroll',()=>{
  let cur='';
  sections.forEach(s=>{ if(window.scrollY>=s.offsetTop-90) cur=s.id; });
  navLinks.forEach(a=>a.classList.toggle('active', a.getAttribute('href')==='#'+cur));
  document.getElementById('navbar').style.boxShadow=
    window.scrollY>20?'0 4px 24px rgba(124,58,237,0.14)':'none';
});

// ============================================================
// 6. HAMBURGER
// ============================================================
const hamburger=document.getElementById('hamburger');
const navEl=document.getElementById('nav-links');
hamburger.addEventListener('click',()=>{
  navEl.classList.toggle('open');
  hamburger.querySelector('i').classList.toggle('bx-menu');
  hamburger.querySelector('i').classList.toggle('bx-x');
});
navEl.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  navEl.classList.remove('open');
  hamburger.querySelector('i').classList.replace('bx-x','bx-menu');
}));

// ============================================================
// 7. 3D TILT — desktop only
// ============================================================
if(!('ontouchstart' in window)){
  document.querySelectorAll('.tilt-card').forEach(card=>{
    card.addEventListener('mousemove',(e)=>{
      const r=card.getBoundingClientRect();
      const x=e.clientX-r.left-r.width/2;
      const y=e.clientY-r.top-r.height/2;
      card.style.transform=`perspective(700px) rotateX(${-y/20}deg) rotateY(${x/20}deg) translateY(-6px) scale(1.02)`;
    });
    card.addEventListener('mouseleave',()=>{
      card.style.transition='transform 0.5s ease';
      card.style.transform='';
      setTimeout(()=>card.style.transition='',500);
    });
  });
}

// ============================================================
// 8. SKILL CATEGORY HOVER
// ============================================================
document.querySelectorAll('.skill-category').forEach(el=>{
  const bar=el.querySelector('.left-bar');
  const icon=el.querySelector('.skill-cat-icon');
  el.addEventListener('mouseenter',()=>{
    if(bar) bar.style.transform='scaleY(1)';
    if(icon) icon.style.transform='rotate(-8deg) scale(1.12)';
  });
  el.addEventListener('mouseleave',()=>{
    if(bar) bar.style.transform='scaleY(0)';
    if(icon) icon.style.transform='';
  });
});

// ============================================================
// 9. CONTACT FORM
// ============================================================
const form=document.getElementById('contact-form');
if(form) form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const btn=form.querySelector('button[type="submit"]');
  btn.innerHTML='Sent! ✅'; btn.style.background='#16a34a';
  setTimeout(()=>{btn.innerHTML='Send Message <i class="bx bx-send"></i>';btn.style.background='';form.reset();},3000);
});
