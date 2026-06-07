// ============================================================
// 1. ANIMATED GRID + AURORA + SPARKLES + SPOTLIGHT CANVAS
// ============================================================
(function(){
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, mouse = {x:-999,y:-999};
  let sparkles = [];
  let time = 0;

  function resize(){
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', e=>{
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    // spawn sparkles on mouse move
    if(Math.random()<0.3) spawnSparkle(e.clientX, e.clientY);
  });

  // Sparkle class
  function Sparkle(x, y){
    this.x = x + (Math.random()-0.5)*40;
    this.y = y + (Math.random()-0.5)*40;
    this.r = Math.random()*2.5+0.5;
    this.alpha = 1;
    this.decay = Math.random()*0.025+0.015;
    this.vy = (Math.random()-0.5)*0.8;
    this.vx = (Math.random()-0.5)*0.8;
    this.color = Math.random()>0.5 ? '162,89,255' : '236,72,153';
  }
  function spawnSparkle(x,y){
    for(let i=0;i<2;i++) sparkles.push(new Sparkle(x,y));
  }
  // random sparkles across hero
  setInterval(()=>{
    if(window.scrollY < H){
      sparkles.push(new Sparkle(Math.random()*W, Math.random()*H*0.8));
    }
  }, 300);

  function draw(){
    ctx.clearRect(0,0,W,H);
    time += 0.008;

    // --- GRID LINES ---
    ctx.save();
    const gridSize = 60;
    const cols = Math.ceil(W/gridSize)+1;
    const rows = Math.ceil(H/gridSize)+1;
    for(let i=0;i<cols;i++){
      const x = i*gridSize;
      const alpha = 0.04 + 0.02*Math.sin(time+i*0.3);
      ctx.beginPath();
      ctx.moveTo(x,0); ctx.lineTo(x,H);
      ctx.strokeStyle=`rgba(124,58,237,${alpha})`;
      ctx.lineWidth=1; ctx.stroke();
    }
    for(let j=0;j<rows;j++){
      const y = j*gridSize;
      const alpha = 0.04 + 0.02*Math.sin(time+j*0.3);
      ctx.beginPath();
      ctx.moveTo(0,y); ctx.lineTo(W,y);
      ctx.strokeStyle=`rgba(124,58,237,${alpha})`;
      ctx.lineWidth=1; ctx.stroke();
    }
    // glowing grid intersections near mouse
    for(let i=0;i<cols;i++){
      for(let j=0;j<rows;j++){
        const px=i*gridSize, py=j*gridSize;
        const dx=px-mouse.x, dy=py-mouse.y;
        const dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<180){
          const alpha=(1-dist/180)*0.6;
          ctx.beginPath();
          ctx.arc(px,py,2,0,Math.PI*2);
          ctx.fillStyle=`rgba(162,89,255,${alpha})`;
          ctx.fill();
        }
      }
    }
    ctx.restore();

    // --- AURORA GLOW ---
    ctx.save();
    // aurora band 1
    const grad1 = ctx.createLinearGradient(0,0,W,H*0.6);
    grad1.addColorStop(0,`rgba(124,58,237,${0.07+0.04*Math.sin(time)})`);
    grad1.addColorStop(0.5,`rgba(236,72,153,${0.05+0.03*Math.sin(time+1)})`);
    grad1.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=grad1;
    ctx.beginPath();
    ctx.moveTo(0,0);
    for(let x=0;x<=W;x+=20){
      const y = 120 + 60*Math.sin(x*0.006+time) + 40*Math.sin(x*0.012-time*0.7);
      ctx.lineTo(x,y);
    }
    ctx.lineTo(W,0); ctx.closePath(); ctx.fill();
    // aurora band 2
    const grad2 = ctx.createLinearGradient(W,0,0,H*0.5);
    grad2.addColorStop(0,`rgba(99,102,241,${0.06+0.03*Math.sin(time+2)})`);
    grad2.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=grad2;
    ctx.beginPath();
    ctx.moveTo(W,0);
    for(let x=W;x>=0;x-=20){
      const y = 80 + 50*Math.sin(x*0.008-time*1.2) + 30*Math.sin(x*0.015+time);
      ctx.lineTo(x,y);
    }
    ctx.lineTo(0,0); ctx.closePath(); ctx.fill();
    ctx.restore();

    // --- SPOTLIGHT CURSOR ---
    if(mouse.x > 0){
      ctx.save();
      const spotlight = ctx.createRadialGradient(mouse.x,mouse.y,0,mouse.x,mouse.y,200);
      spotlight.addColorStop(0,'rgba(162,89,255,0.08)');
      spotlight.addColorStop(0.5,'rgba(236,72,153,0.03)');
      spotlight.addColorStop(1,'rgba(0,0,0,0)');
      ctx.fillStyle=spotlight;
      ctx.beginPath();
      ctx.arc(mouse.x,mouse.y,200,0,Math.PI*2);
      ctx.fill();
      ctx.restore();
    }

    // --- SPARKLES ---
    sparkles = sparkles.filter(s=>s.alpha>0);
    sparkles.forEach(s=>{
      s.x+=s.vx; s.y+=s.vy; s.alpha-=s.decay;
      ctx.save();
      ctx.globalAlpha=s.alpha;
      // star shape
      ctx.beginPath();
      for(let i=0;i<5;i++){
        const angle = (i/5)*Math.PI*2 - Math.PI/2;
        const outerX = s.x + Math.cos(angle)*s.r*2;
        const outerY = s.y + Math.sin(angle)*s.r*2;
        const innerAngle = angle + Math.PI/5;
        const innerX = s.x + Math.cos(innerAngle)*s.r*0.8;
        const innerY = s.y + Math.sin(innerAngle)*s.r*0.8;
        if(i===0) ctx.moveTo(outerX,outerY);
        else ctx.lineTo(outerX,outerY);
        ctx.lineTo(innerX,innerY);
      }
      ctx.closePath();
      ctx.fillStyle=`rgba(${s.color},1)`;
      ctx.shadowColor=`rgba(${s.color},0.8)`;
      ctx.shadowBlur=6;
      ctx.fill();
      ctx.restore();
    });

    requestAnimationFrame(draw);
  }
  draw();
})();

// ============================================================
// 2. TYPED EFFECT
// ============================================================
const phrases=['Software Engineer','Full-Stack Developer','AI/ML Enthusiast','Real-Time Systems Builder','Competitive Coder'];
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
