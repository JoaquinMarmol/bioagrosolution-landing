
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;900&display=swap');

/* ── RESET & BASE ── */
*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
:root {
  --g: #6ee07a;
  --gd: #3aaa4a;
  --gg: rgba(110,224,122,.2);
  --bg: #050e06;
  --tx: #fff;
  --muted: rgba(255,255,255,.62);
  --nav-h: 64px;
}
html, body { width:100%; height:100%; overflow:hidden; font-family:'Montserrat',sans-serif; background:var(--bg); color:var(--tx); -webkit-font-smoothing:antialiased; }

/* ── PLANT CANVAS (persistent, always on top visually but below content) ── */
#plant-canvas {
  position:fixed; inset:0; width:100% !important; height:100% !important;
  z-index:15; pointer-events:none;
  mix-blend-mode:screen;
}

/* ── APP ── */
#app { position:fixed; inset:0; z-index:3; }

/* ── NAV ── */
#nav {
  position:fixed; top:0; left:0; right:0; z-index:100;
  height:var(--nav-h);
  display:flex; align-items:center; justify-content:space-between;
  padding:0 clamp(16px, 4vw, 50px);
  background:linear-gradient(to bottom,rgba(5,14,6,.85) 0%,transparent 100%);
  backdrop-filter:blur(0px);
  transition:background .4s, backdrop-filter .4s;
}
#nav.scrolled { background:rgba(5,14,6,.95); backdrop-filter:blur(12px); }
.logo { display:flex; align-items:center; gap:9px; text-decoration:none; color:var(--tx); }
.logo span { font-size:.8rem; font-weight:700; letter-spacing:2.5px; text-transform:uppercase; color:var(--g); }
#nav-menu { display:flex; align-items:center; gap:20px; list-style:none; }
#nav-menu a { color:rgba(255,255,255,.65); text-decoration:none; font-size:.68rem; letter-spacing:2px; text-transform:uppercase; transition:color .3s; cursor:pointer; white-space:nowrap; }
#nav-menu a:hover { color:var(--g); }
.nav-cta { background:var(--gd)!important; color:#fff!important; padding:8px 16px; border-radius:3px; font-weight:700!important; transition:background .3s!important; }
.nav-cta:hover { background:var(--g)!important; color:#000!important; }
#hamburger { display:none; flex-direction:column; gap:5px; background:none; border:none; cursor:pointer; padding:4px; }
#hamburger span { display:block; width:24px; height:2px; background:var(--g); border-radius:2px; transition:.3s; }
#hamburger.open span:nth-child(1) { transform:translateY(7px) rotate(45deg); }
#hamburger.open span:nth-child(2) { opacity:0; }
#hamburger.open span:nth-child(3) { transform:translateY(-7px) rotate(-45deg); }

/* ── FRAMES ── */
#frames { position:relative; width:100%; height:100%; }
.frame {
  position:absolute; inset:0;
  opacity:0; pointer-events:none;
  transition:opacity .7s cubic-bezier(.77,0,.175,1);
  overflow:hidden;
}
.frame.active { opacity:1; pointer-events:all; z-index:10; }

/* BG image with zoom-in-on-entry */
.frame-bg {
  position:absolute; inset:0;
  background-size:cover; background-position:center;
  transform:scale(1.07);
  transition:transform 1.3s cubic-bezier(.77,0,.175,1);
  z-index:0;
}
.frame.active .frame-bg { transform:scale(1); }

/* Overlays */
.frame-overlay { position:absolute; inset:0; z-index:1; background:linear-gradient(135deg,rgba(5,14,6,.82) 0%,rgba(5,14,6,.45) 60%,rgba(5,14,6,.25) 100%); }
.frame-overlay.dark  { background:rgba(5,14,6,.75); }
.frame-overlay.heavy { background:linear-gradient(135deg,rgba(5,14,6,.88) 0%,rgba(5,14,6,.6) 100%); }

/* ── FRAME BODY ── */
.frame-body {
  position:absolute; inset:0; z-index:5;
  padding: var(--nav-h) clamp(16px,5vw,80px) clamp(20px,4vh,50px);
  display:flex;
}

/* HERO LAYOUT */
.hero-layout { align-items:center; }
.hero-text { max-width:min(680px,100%); }
.hero-h1 {
  display:flex; flex-direction:column;
  font-weight:900; text-transform:uppercase;
  line-height:.9; letter-spacing:-1px;
  font-size:clamp(2.2rem,7vw,6.5rem);
  margin-bottom:clamp(16px,2.5vh,30px);
}
.sub {
  font-size:clamp(.8rem,.9vw + .4rem,1rem);
  line-height:1.7; color:var(--muted);
  max-width:500px; margin-bottom:clamp(20px,3vh,36px);
}
.btn-row { display:flex; gap:14px; flex-wrap:wrap; }

/* SPLIT LAYOUT */
.split-layout { align-items:center; gap:clamp(20px,4vw,60px); }
.col-text { flex:1; min-width:0; display:flex; flex-direction:column; justify-content:center; }
.col-img  { flex:1; min-width:0; }
.col-form { flex:1; min-width:0; }
.reverse { flex-direction:row-reverse; }

/* VERTICAL LAYOUT */
.vert-layout { flex-direction:column; justify-content:center; gap:clamp(16px,2.5vh,28px); }

/* ── TYPOGRAPHY ── */
h2 {
  display:flex; flex-direction:column;
  font-weight:900; text-transform:uppercase;
  font-size:clamp(1.9rem,5vw,4.8rem);
  line-height:.92; letter-spacing:-1px;
  margin-bottom:clamp(14px,2vh,24px);
}
.tl {
  display:block; overflow:hidden;
  opacity:0; transform:translateY(55px);
  transition:opacity .65s cubic-bezier(.77,0,.175,1), transform .65s cubic-bezier(.77,0,.175,1);
  transition-delay:var(--d, 0ms);
}
.frame.active .tl { opacity:1; transform:translateY(0); }
.accent { color:var(--g); }
.tag {
  display:inline-flex; align-items:center;
  font-size:.62rem; font-weight:700; letter-spacing:4px; text-transform:uppercase;
  color:var(--g); border:1px solid rgba(110,224,122,.4);
  padding:5px 12px; border-radius:2px; margin-bottom:clamp(10px,1.5vh,18px);
  opacity:0; transform:translateY(10px);
  transition:opacity .5s .05s, transform .5s .05s;
}
.frame.active .tag { opacity:1; transform:translateY(0); }
.body-p {
  font-size:clamp(.8rem,.5vw + .5rem,.95rem);
  line-height:1.75; color:var(--muted); margin-bottom:14px;
  opacity:0; transform:translateY(16px);
  transition:opacity .55s calc(.45s + var(--d2,0s)), transform .55s calc(.45s + var(--d2,0s));
}
.frame.active .body-p { opacity:1; transform:translateY(0); }

/* ── BUTTONS ── */
.btn-p, .btn-g, .btn-o {
  font-family:inherit; font-size:.7rem; font-weight:700;
  letter-spacing:2px; text-transform:uppercase;
  cursor:pointer; border-radius:3px; transition:all .3s;
  white-space:nowrap;
}
.btn-p { background:var(--gd); color:#fff; border:none; padding:14px 28px; }
.btn-p:hover { background:var(--g); color:#000; transform:translateY(-2px); box-shadow:0 8px 24px var(--gg); }
.btn-p.full { width:100%; padding:16px; margin-top:4px; }
.btn-g { background:transparent; color:rgba(255,255,255,.8); border:1px solid rgba(255,255,255,.35); padding:13px 28px; }
.btn-g:hover { border-color:var(--g); color:var(--g); }
.btn-o { background:transparent; color:var(--g); border:1px solid rgba(110,224,122,.4); padding:9px 18px; font-size:.63rem; margin-top:auto; }
.btn-o:hover { background:var(--g); color:#000; }
.btn-row .btn-p, .btn-row .btn-g {
  opacity:0; transform:translateY(16px);
  transition:opacity .55s .6s, transform .55s .6s, background .3s, color .3s, border .3s, box-shadow .3s, transform .3s;
}
.frame.active .btn-row .btn-p,
.frame.active .btn-row .btn-g { opacity:1; transform:translateY(0); }

/* ── IMAGE CARDS ── */
.col-img { opacity:0; transform:translateX(30px) scale(.97); transition:opacity .8s .2s cubic-bezier(.77,0,.175,1), transform .8s .2s cubic-bezier(.77,0,.175,1); }
.reverse .col-img { transform:translateX(-30px) scale(.97); }
.frame.active .col-img { opacity:1; transform:translateX(0) scale(1); }
.img-card { position:relative; border-radius:6px; overflow:hidden; border:1px solid rgba(110,224,122,.15); box-shadow:0 20px 60px rgba(0,0,0,.5); }
.img-card img { width:100%; height:clamp(200px,35vh,380px); object-fit:cover; display:block; }
.img-caption { position:absolute; bottom:0; left:0; right:0; background:linear-gradient(to top,rgba(0,0,0,.85),transparent); padding:20px 14px 12px; font-size:.65rem; letter-spacing:2px; text-transform:uppercase; color:rgba(255,255,255,.65); }
.drone-card { position:relative; }
.drone-stats { position:absolute; bottom:0; left:0; right:0; background:linear-gradient(to top,rgba(5,14,6,.9),transparent); padding:28px 16px 16px; display:flex; gap:24px; }
.ds-n { display:block; font-size:1.8rem; font-weight:900; color:var(--g); line-height:1; }
.ds-l { font-size:.62rem; letter-spacing:2px; text-transform:uppercase; color:rgba(255,255,255,.55); }

/* ── BADGES ── */
.badges {
  display:flex; flex-wrap:wrap; gap:10px; margin-top:clamp(16px,2vh,24px);
  opacity:0; transform:translateY(12px);
  transition:opacity .55s .7s, transform .55s .7s;
}
.frame.active .badges { opacity:1; transform:translateY(0); }
.badge { display:flex; align-items:center; gap:7px; background:rgba(255,255,255,.05); border:1px solid rgba(110,224,122,.18); padding:7px 12px; border-radius:3px; font-size:.68rem; letter-spacing:.5px; }

/* ── SCIENCE LIST ── */
.sci-list { display:flex; flex-direction:column; gap:16px; }
.sci-item {
  display:flex; gap:14px; align-items:flex-start;
  opacity:0; transform:translateX(18px);
  transition:opacity .55s var(--d3,.3s) cubic-bezier(.77,0,.175,1), transform .55s var(--d3,.3s) cubic-bezier(.77,0,.175,1);
}
.frame.active .sci-item { opacity:1; transform:translateX(0); }
.sci-ico { min-width:48px; height:48px; border-radius:50%; background:rgba(110,224,122,.1); border:1px solid rgba(110,224,122,.28); display:flex; align-items:center; justify-content:center; font-size:.72rem; font-weight:900; color:var(--g); }
.sci-item strong { display:block; font-size:.82rem; letter-spacing:.5px; margin-bottom:3px; }
.sci-item p { font-size:.78rem; color:var(--muted); line-height:1.55; }

/* ── PRODUCTS GRID ── */
.prod-grid {
  display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
  gap:clamp(12px,2vw,22px); width:100%;
  opacity:0; transform:translateY(24px);
  transition:opacity .65s .4s, transform .65s .4s;
}
.frame.active .prod-grid { opacity:1; transform:translateY(0); }
.prod-card { background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.1); border-radius:6px; padding:clamp(16px,2.5vw,26px); display:flex; flex-direction:column; gap:8px; position:relative; transition:all .3s; }
.prod-card:hover { background:rgba(110,224,122,.07); border-color:rgba(110,224,122,.3); transform:translateY(-4px); }
.prod-card.featured { border-color:rgba(110,224,122,.4); background:rgba(110,224,122,.07); }
.p-badge { position:absolute; top:-11px; left:50%; transform:translateX(-50%); background:var(--gd); color:#fff; font-size:.58rem; letter-spacing:2px; font-weight:700; padding:3px 12px; border-radius:20px; white-space:nowrap; }
.pv { font-size:clamp(1.3rem,2.5vw,1.8rem); font-weight:900; color:var(--g); line-height:1; }
.pc { font-size:.68rem; letter-spacing:1.5px; text-transform:uppercase; color:rgba(255,255,255,.45); }
.pd { font-size:.78rem; color:rgba(255,255,255,.7); line-height:1.5; flex:1; }

/* ── STATS ── */
.stats { display:flex; flex-direction:column; gap:12px; margin-top:clamp(12px,1.5vh,20px); }
.stat-row {
  display:flex; align-items:center; gap:16px;
  background:rgba(255,255,255,.04); border-left:3px solid var(--g);
  padding:clamp(10px,1.5vh,14px) 16px; border-radius:3px;
  opacity:0; transform:translateX(-16px);
  transition:opacity .55s var(--d4,.3s), transform .55s var(--d4,.3s);
}
.frame.active .stat-row { opacity:1; transform:translateX(0); }
.sn { font-size:clamp(1.2rem,2.5vw,1.8rem); font-weight:900; color:var(--g); min-width:64px; }
.sl { font-size:.72rem; letter-spacing:.5px; color:rgba(255,255,255,.65); text-transform:uppercase; }

/* ── CONTACT ── */
.col-form {
  opacity:0; transform:translateX(24px);
  transition:opacity .65s .3s, transform .65s .3s;
}
.frame.active .col-form { opacity:1; transform:translateX(0); }
.col-form form { display:flex; flex-direction:column; gap:12px; }
.col-form input, .col-form textarea {
  background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.14);
  border-radius:3px; padding:13px 16px; color:#fff; font-family:inherit; font-size:.85rem;
  transition:border .3s, background .3s;
}
.col-form input:focus, .col-form textarea:focus { outline:none; border-color:var(--g); background:rgba(110,224,122,.05); }
.col-form textarea { height:90px; resize:none; }
.contact-info { display:flex; flex-direction:column; gap:8px; }
.ci { font-size:.8rem; color:rgba(255,255,255,.55); text-decoration:none; }
a.ci:hover { color:var(--g); }

/* ── SCROLL CUE ── */
.scroll-cue {
  position:absolute; bottom:28px; left:50%; transform:translateX(-50%);
  z-index:6; display:flex; flex-direction:column; align-items:center; gap:9px;
  color:rgba(255,255,255,.4); font-size:.58rem; letter-spacing:4px;
  animation:fade-in 1s 1.5s both;
  transition:opacity .5s;
}
.frame.active ~ * .scroll-cue, #f0:not(.active) .scroll-cue { opacity:0; }
.mouse-icon { width:22px; height:35px; border:2px solid rgba(255,255,255,.28); border-radius:11px; display:flex; justify-content:center; padding-top:5px; }
.mouse-wheel { width:4px; height:7px; background:var(--g); border-radius:2px; animation:scroll-w 1.8s ease-in-out infinite; }
@keyframes scroll-w { 0%{transform:translateY(0);opacity:1} 100%{transform:translateY(11px);opacity:0} }

/* ── DOTS ── */
#dots {
  position:fixed; right:20px; top:50%; transform:translateY(-50%);
  z-index:100; display:flex; flex-direction:column; gap:10px;
}
.dot {
  position:relative; width:8px; height:8px; border-radius:50%;
  background:rgba(255,255,255,.25); border:none; cursor:pointer; padding:0;
  transition:all .4s;
}
.dot::after { content:''; position:absolute; inset:-4px; border-radius:50%; border:1px solid transparent; transition:.4s; }
.dot:hover .dot-label, .dot:focus .dot-label { opacity:1; transform:translateX(0); }
.dot-label {
  position:absolute; right:20px; top:50%; transform:translateY(-50%) translateX(8px);
  background:rgba(5,14,6,.85); color:rgba(255,255,255,.7); font-size:.62rem;
  letter-spacing:2px; text-transform:uppercase; padding:4px 10px;
  border-radius:2px; white-space:nowrap; pointer-events:none;
  opacity:0; transition:.25s;
}
.dot.active { background:var(--g); transform:scale(1.5); box-shadow:0 0 10px rgba(110,224,122,.5); }
.dot.active::after { border-color:rgba(110,224,122,.35); }

/* ── COUNTER ── */
#counter {
  position:fixed; left:20px; bottom:28px; z-index:100;
  display:flex; flex-direction:column; align-items:center; gap:5px;
  font-size:.62rem; font-weight:700; letter-spacing:2px; color:rgba(255,255,255,.35);
}
#cur-n { color:var(--g); font-size:.75rem; }
#prog-bar { width:1px; height:22px; background:rgba(255,255,255,.15); position:relative; overflow:hidden; }
#prog-fill { position:absolute; bottom:0; left:0; right:0; background:var(--g); transition:height .7s cubic-bezier(.77,0,.175,1); }

/* ── OVERLAY TRANSITION ── */
#overlay { position:fixed; inset:0; z-index:500; background:var(--bg); opacity:0; pointer-events:none; transition:opacity .22s ease; }
#overlay.on { opacity:1; }

/* ── KEYFRAMES ── */
@keyframes fade-in { from{opacity:0} to{opacity:1} }

/* ── RESPONSIVE ── */

/* Tablet */
@media(max-width:900px) {
  .split-layout { flex-direction:column!important; gap:20px; }
  .reverse { flex-direction:column!important; }
  .col-text, .col-img, .col-form { width:100%; }
  .col-img { transform:none!important; }
  .img-card img { height:clamp(160px,28vw,260px); }
  .hero-h1 { font-size:clamp(2rem,8vw,4rem); }
  h2 { font-size:clamp(1.7rem,7vw,3.2rem); }
  #dots { display:none; }
  .drone-card { max-width:100%; }
  .prod-grid { grid-template-columns:1fr; }
  .prod-card.featured { order:-1; }
}

/* Mobile */
@media(max-width:600px) {
  :root { --nav-h:56px; }
  #hamburger { display:flex; }
  #nav-menu {
    position:fixed; top:var(--nav-h); left:0; right:0; bottom:0;
    flex-direction:column; justify-content:center; align-items:center;
    gap:28px; background:rgba(5,14,6,.97);
    transform:translateX(100%); transition:transform .35s cubic-bezier(.77,0,.175,1);
    z-index:200;
  }
  #nav-menu.open { transform:translateX(0); }
  #nav-menu a { font-size:.85rem; letter-spacing:3px; }
  .nav-cta { padding:12px 28px!important; }
  .hero-h1 { font-size:clamp(1.8rem,10vw,3rem); letter-spacing:-.5px; }
  h2 { font-size:clamp(1.5rem,8vw,2.5rem); }
  .tag { font-size:.55rem; letter-spacing:3px; }
  .body-p, .sub { font-size:.82rem; }
  .btn-row { flex-direction:column; }
  .btn-p, .btn-g { width:100%; text-align:center; padding:14px; }
  .frame-body { padding:var(--nav-h) 18px 20px; }
  #counter { left:10px; bottom:20px; }
  .scroll-cue { bottom:18px; }
  .badge { font-size:.62rem; padding:6px 10px; }
  .sci-ico { min-width:40px; height:40px; font-size:.65rem; }
  .sn { font-size:1.3rem; min-width:56px; }
  .prod-grid { grid-template-columns:1fr; }
  .col-form form { gap:10px; }
  .col-form input, .col-form textarea { padding:11px 14px; font-size:.82rem; }
}

/* Very small */
@media(max-width:380px) {
  .hero-h1 { font-size:clamp(1.5rem,9.5vw,2.2rem); }
}
