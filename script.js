
// ═══════════════════════════════════════════════════════
//  BioAgroSolution — Cinematic Scroll + Living Plant
// ═══════════════════════════════════════════════════════

// ── State ──────────────────────────────────────────────
const TOTAL = 6;
let cur = -1, busy = false, accum = 0;
const THRESH = 90;

// ── Plant Canvas ───────────────────────────────────────
const canvas = document.getElementById('plant-canvas');
const ctx = canvas.getContext('2d');
let W, H;

// The plant path — a single organic stem + roots + leaves
// Defined as normalized [0..1] coordinates so it scales
// The "story" goes: roots at bottom -> stem grows up -> leaves appear per frame
const STEM_COLOR  = 'rgba(110,224,122,';
const GLOW_COLOR  = 'rgba(110,224,122,';
const LEAF_COLOR  = 'rgba(110,224,122,';

// Control points for the main winding stem (normalized x, y)
// y=1 is bottom, y=0 is top
const STEM_POINTS = [
  [0.52, 1.02],  // start underground
  [0.50, 0.88],  // root base
  [0.49, 0.75],  // lower stem
  [0.51, 0.60],  // mid-low
  [0.48, 0.45],  // mid
  [0.50, 0.32],  // mid-high
  [0.49, 0.18],  // upper
  [0.50, 0.04],  // tip
];

// Branch/root definitions: [startT, endT, ctrl, leaf?]
// startT = where on main stem (0..1), direction, length, curvature
const BRANCHES = [
  // Roots (low, spreading out)
  { t:0.07, dx:-0.14, dy:0.09, len:0.18, w:1.2, alpha:.5 },
  { t:0.07, dx: 0.18, dy:0.06, len:0.14, w:1.2, alpha:.5 },
  { t:0.12, dx:-0.10, dy:0.05, len:0.12, w:1.0, alpha:.4 },
  { t:0.15, dx: 0.12, dy:0.04, len:0.14, w:1.0, alpha:.4 },
  { t:0.18, dx:-0.16, dy:0.03, len:0.15, w:0.9, alpha:.4 },
  // Lower leaves (visible at frame 1)
  { t:0.30, dx:-0.18, dy:-0.05, len:0.20, w:1.5, alpha:.7, isLeaf:true, frame:1 },
  { t:0.32, dx: 0.20, dy:-0.04, len:0.18, w:1.5, alpha:.7, isLeaf:true, frame:1 },
  // Mid leaves (visible at frame 2)
  { t:0.50, dx:-0.22, dy:-0.08, len:0.24, w:1.8, alpha:.8, isLeaf:true, frame:2 },
  { t:0.52, dx: 0.24, dy:-0.06, len:0.22, w:1.8, alpha:.8, isLeaf:true, frame:2 },
  // Upper leaves (visible at frame 3)
  { t:0.68, dx:-0.20, dy:-0.10, len:0.22, w:1.6, alpha:.85, isLeaf:true, frame:3 },
  { t:0.70, dx: 0.22, dy:-0.08, len:0.20, w:1.6, alpha:.85, isLeaf:true, frame:3 },
  // Top leaves/flower (visible at frame 4-5)
  { t:0.85, dx:-0.16, dy:-0.12, len:0.18, w:1.4, alpha:.9, isLeaf:true, frame:4 },
  { t:0.86, dx: 0.17, dy:-0.10, len:0.16, w:1.4, alpha:.9, isLeaf:true, frame:4 },
  { t:0.95, dx:-0.10, dy:-0.14, len:0.12, w:1.2, alpha:.95, isLeaf:true, frame:5 },
  { t:0.96, dx: 0.11, dy:-0.12, len:0.10, w:1.2, alpha:.95, isLeaf:true, frame:5 },
];

// Resize canvas
function resize() {
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
}

// Get point on stem at parameter t (0..1)
function getStemPoint(t) {
  const pts = STEM_POINTS;
  const n = pts.length - 1;
  const i = Math.min(Math.floor(t * n), n - 1);
  const f = (t * n) - i;
  const p0 = pts[Math.max(i-1, 0)];
  const p1 = pts[i];
  const p2 = pts[Math.min(i+1, n)];
  const p3 = pts[Math.min(i+2, n)];
  // Catmull-Rom
  const t2 = f*f, t3 = f*f*f;
  const x = 0.5*((2*p1[0])+(-p0[0]+p2[0])*f+(2*p0[0]-5*p1[0]+4*p2[0]-p3[0])*t2+(-p0[0]+3*p1[0]-3*p2[0]+p3[0])*t3);
  const y = 0.5*((2*p1[1])+(-p0[1]+p2[1])*f+(2*p0[1]-5*p1[1]+4*p2[1]-p3[1])*t2+(-p0[1]+3*p1[1]-3*p2[1]+p3[1])*t3);
  return [x * W, y * H];
}

// Draw glowing line segment
function drawGlow(x0,y0,x1,y1,w,alpha,color) {
  // Outer glow
  ctx.beginPath();
  ctx.moveTo(x0,y0); ctx.lineTo(x1,y1);
  ctx.strokeStyle = color + Math.min(alpha*0.25, 0.15) + ')';
  ctx.lineWidth = w * 5;
  ctx.lineCap = 'round';
  ctx.stroke();
  // Inner glow
  ctx.beginPath();
  ctx.moveTo(x0,y0); ctx.lineTo(x1,y1);
  ctx.strokeStyle = color + Math.min(alpha*0.5, 0.3) + ')';
  ctx.lineWidth = w * 2.5;
  ctx.stroke();
  // Core
  ctx.beginPath();
  ctx.moveTo(x0,y0); ctx.lineTo(x1,y1);
  ctx.strokeStyle = color + alpha + ')';
  ctx.lineWidth = w;
  ctx.stroke();
}

// Draw a leaf as a bezier curve
function drawLeaf(px,py, dx,dy,len, w,alpha,progress) {
  if(progress <= 0) return;
  const p = Math.min(progress, 1);
  const ex = px + dx*W*len*p;
  const ey = py + dy*H*len*p;
  // Control point — curves outward
  const cx = px + dx*W*len*0.5 + dy*W*len*0.25;
  const cy = py + dy*H*len*0.5 - dx*H*len*0.25;
  
  // Glow
  ctx.beginPath();
  ctx.moveTo(px,py);
  ctx.quadraticCurveTo(cx,cy,ex,ey);
  ctx.strokeStyle = LEAF_COLOR + (alpha*p*0.15) + ')';
  ctx.lineWidth = w * 5;
  ctx.lineCap = 'round';
  ctx.stroke();
  // Core
  ctx.beginPath();
  ctx.moveTo(px,py);
  ctx.quadraticCurveTo(cx,cy,ex,ey);
  ctx.strokeStyle = LEAF_COLOR + (alpha*p*0.85) + ')';
  ctx.lineWidth = w;
  ctx.stroke();
}

// Draw particles along stem
function drawParticles(progress, time) {
  const numP = 12;
  for(let i = 0; i < numP; i++) {
    const t = ((i/numP) + time*0.04) % 1;
    if(t > progress) continue;
    const [px,py] = getStemPoint(t);
    const pulse = 0.5 + 0.5*Math.sin(time*3 + i*2.1);
    const size = (1.5 + pulse*1.5) * (W < 600 ? 0.7 : 1);
    const a = 0.2 + pulse*0.3;
    ctx.beginPath();
    ctx.arc(px, py, size, 0, Math.PI*2);
    ctx.fillStyle = STEM_COLOR + a + ')';
    ctx.fill();
  }
}

// Main draw function — progress 0..1 maps across frames
function drawPlant(progress, time) {
  ctx.clearRect(0,0,W,H);
  if(progress <= 0) return;
  
  const stemProg = Math.min(progress, 1);
  
  // Draw root particles first (below stem)
  drawParticles(stemProg, time);
  
  // Draw main stem
  const STEPS = 120;
  let prevPt = null;
  for(let i = 0; i <= STEPS; i++) {
    const t = (i/STEPS) * stemProg;
    const pt = getStemPoint(t);
    if(prevPt) {
      // Width tapers as we go up
      const widthMult = 0.6 + (1 - t) * 1.2;
      const baseW = (W < 600 ? 1.0 : 1.4) * widthMult;
      const alpha = 0.65 + t * 0.2;
      drawGlow(prevPt[0],prevPt[1],pt[0],pt[1],baseW,alpha,STEM_COLOR);
    }
    prevPt = pt;
  }
  
  // Draw branches/leaves
  BRANCHES.forEach(br => {
    const branchStart = getStemPoint(br.t);
    // Determine progress for this branch
    const appearAt = br.t; // branch appears when stem reaches its attachment point
    const brProgress = Math.max(0, Math.min(1, (stemProg - appearAt) / 0.08));
    
    // Fade-in based on frame
    let leafAlpha = br.alpha;
    if(br.isLeaf) {
      // Leaves become more visible as we progress through frames
      const frameProgress = Math.max(0, Math.min(1, (progress * TOTAL - (br.frame || 0))));
      leafAlpha = br.alpha * Math.min(frameProgress * 1.5, 1);
    }
    
    if(brProgress > 0) {
      drawLeaf(
        branchStart[0], branchStart[1],
        br.dx, br.dy, br.len,
        br.w * (W < 600 ? 0.8 : 1),
        leafAlpha,
        brProgress
      );
    }
  });
  
  // Draw tip glow
  if(stemProg > 0.95) {
    const [tx,ty] = getStemPoint(stemProg);
    const pulse = 0.5 + 0.5*Math.sin(time*3);
    const radius = (4 + pulse*3) * (W < 600 ? 0.7 : 1);
    const grad = ctx.createRadialGradient(tx,ty,0,tx,ty,radius*3);
    grad.addColorStop(0, STEM_COLOR + (0.6 + pulse*0.3) + ')');
    grad.addColorStop(1, STEM_COLOR + '0)');
    ctx.beginPath();
    ctx.arc(tx,ty,radius*3,0,Math.PI*2);
    ctx.fillStyle = grad;
    ctx.fill();
  }
}

// Animate loop
let animTime = 0;
let lastTs = 0;
let plantTarget = 0;
let plantCurrent = 0;

function animate(ts) {
  const dt = Math.min((ts - lastTs) / 1000, 0.05);
  lastTs = ts;
  animTime += dt;
  // Smooth lerp towards target
  plantCurrent += (plantTarget - plantCurrent) * Math.min(dt * 3.5, 1);
  drawPlant(plantCurrent, animTime);
  requestAnimationFrame(animate);
}

// Set plant target based on frame
function updatePlant(frameIndex) {
  // Each frame = 1/TOTAL slice of growth
  // Frame 0 = roots just appearing (0.05..0.18)
  // Frame 5 = full plant (full 1.0)
  const targets = [0.12, 0.28, 0.45, 0.62, 0.80, 1.0];
  plantTarget = targets[frameIndex] || 0;
}

// ── Navigation ──────────────────────────────────────────
function goTo(idx) {
  if(busy || idx === cur) return;
  if(idx < 0 || idx >= TOTAL) return;
  busy = true;

  const ov = document.getElementById('overlay');
  ov.classList.add('on');

  setTimeout(() => {
    const frames = document.querySelectorAll('.frame');
    const dots = document.querySelectorAll('.dot');
    if(cur >= 0 && frames[cur]) frames[cur].classList.remove('active');
    cur = idx;
    if(frames[cur]) frames[cur].classList.add('active');
    dots.forEach(d => d.classList.remove('active'));
    if(dots[cur]) dots[cur].classList.add('active');
    
    // Progress bar
    const pct = (cur / (TOTAL-1)) * 100;
    document.getElementById('prog-fill').style.height = pct + '%';
    document.getElementById('cur-n').textContent = String(cur+1).padStart(2,'0');
    
    // Scroll cue
    const cue = document.querySelector('.scroll-cue');
    if(cue) cue.style.opacity = cur === 0 ? '1' : '0';
    
    // Plant growth
    updatePlant(cur);
    
    // Nav style
    document.getElementById('nav').classList.toggle('scrolled', cur > 0);

    ov.classList.remove('on');
    setTimeout(() => { busy = false; }, 380);
  }, 240);
}

// ── Event Listeners ─────────────────────────────────────
window.addEventListener('wheel', e => {
  e.preventDefault();
  accum += e.deltaY;
  if(Math.abs(accum) >= THRESH) {
    goTo(accum > 0 ? cur+1 : cur-1);
    accum = 0;
  }
  clearTimeout(window._ar);
  window._ar = setTimeout(() => accum = 0, 350);
}, { passive:false });

let ty = 0;
window.addEventListener('touchstart', e => { ty = e.touches[0].clientY; }, { passive:true });
window.addEventListener('touchend', e => {
  const d = ty - e.changedTouches[0].clientY;
  if(Math.abs(d) > 40) goTo(d > 0 ? cur+1 : cur-1);
});

window.addEventListener('keydown', e => {
  if(['ArrowDown','PageDown',' '].includes(e.key)) { e.preventDefault(); goTo(cur+1); }
  if(['ArrowUp','PageUp'].includes(e.key)) { e.preventDefault(); goTo(cur-1); }
});

document.querySelectorAll('[data-to]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    const t = parseInt(el.dataset.to);
    if(!isNaN(t)) goTo(t);
    // Close mobile menu
    document.getElementById('nav-menu').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
  });
});

// Hamburger menu
const ham = document.getElementById('hamburger');
const menu = document.getElementById('nav-menu');
ham.addEventListener('click', () => {
  ham.classList.toggle('open');
  menu.classList.toggle('open');
});

// Line delays for title lines
document.querySelectorAll('.tl[style]').forEach(el => {
  const m = el.style.cssText.match(/--d:([^;]+)/);
  if(m) el.style.transitionDelay = m[1];
});

// Resize
window.addEventListener('resize', () => { resize(); });

// ── Init ─────────────────────────────────────────────────
resize();
document.getElementById('tot-n').textContent = String(TOTAL).padStart(2,'0');
requestAnimationFrame(animate);
goTo(0);
window.goTo = goTo;
