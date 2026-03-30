<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <title>Untitled</title>
    <link rel="stylesheet" href="./style.css">

  </head>
    
  <body>
  <!DOCTYPE html>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">

<!-- PERSISTENT PLANT CANVAS -->
<canvas id="plant-canvas"></canvas>

<div id="app">

  <!-- NAV -->
  <nav id="nav">
    <a class="logo" href="#" data-to="0">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="13" stroke="#6ee07a" stroke-width="1.2"/>
        <path d="M14 23 C14 23 7 18 7 12 C7 8.5 10 6 14 6 C18 6 21 8.5 21 12 C21 18 14 23 14 23Z" stroke="#6ee07a" stroke-width="1.2" fill="none"/>
        <line x1="14" y1="6" x2="14" y2="23" stroke="#6ee07a" stroke-width="0.8"/>
        <line x1="9" y1="13" x2="14" y2="10" stroke="#6ee07a" stroke-width="0.8"/>
        <line x1="19" y1="15" x2="14" y2="12" stroke="#6ee07a" stroke-width="0.8"/>
      </svg>
      <span>BioAgroSolution</span>
    </a>
    <button id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
    <ul id="nav-menu">
      <li><a href="#" data-to="0">Inicio</a></li>
      <li><a href="#" data-to="1">Nosotros</a></li>
      <li><a href="#" data-to="2">Ciencia</a></li>
      <li><a href="#" data-to="3">Productos</a></li>
      <li><a href="#" data-to="4">Resultados</a></li>
      <li><a href="#" data-to="5">Contacto</a></li>
      <li><a class="nav-cta" href="#" data-to="5">Solicitar Cotización</a></li>
    </ul>
  </nav>

  <!-- FRAME COUNTER -->
  <div id="counter">
    <span id="cur-n">01</span>
    <div id="prog-bar"><div id="prog-fill"></div></div>
    <span id="tot-n">06</span>
  </div>

  <!-- DOTS -->
  <div id="dots">
    <button class="dot active" data-to="0"><span class="dot-label">Inicio</span></button>
    <button class="dot" data-to="1"><span class="dot-label">Nosotros</span></button>
    <button class="dot" data-to="2"><span class="dot-label">Ciencia</span></button>
    <button class="dot" data-to="3"><span class="dot-label">Productos</span></button>
    <button class="dot" data-to="4"><span class="dot-label">Resultados</span></button>
    <button class="dot" data-to="5"><span class="dot-label">Contacto</span></button>
  </div>

  <!-- FRAMES WRAPPER -->
  <div id="frames">

    <!-- 0: HERO -->
    <section class="frame" id="f0">
      <div class="frame-bg" style="background-image:url('https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1920&q=80')"></div>
      <div class="frame-overlay"></div>
      <div class="frame-body hero-layout">
        <div class="hero-text">
          <div class="tag anim-tag">El Futuro de la Agricultura</div>
          <h1 class="hero-h1">
            <span class="tl" style="--d:0ms">BIOFERTILIZANTES</span>
            <span class="tl accent" style="--d:120ms">QUE REGENERAN</span>
            <span class="tl" style="--d:240ms">TU CAMPO.</span>
          </h1>
          <p class="sub anim-sub">Soluciones biológicas que potencian tus cultivos, restauran el suelo y optimizan tu inversión. Ciencia al servicio del agro argentino.</p>
          <div class="btn-row anim-btns">
            <button class="btn-p" data-to="3">Descubrir Productos</button>
            <button class="btn-g" data-to="1">Quiénes Somos</button>
          </div>
        </div>
      </div>
      <div class="scroll-cue">
        <div class="mouse-icon"><div class="mouse-wheel"></div></div>
        <span>SCROLL</span>
      </div>
    </section>

    <!-- 1: NOSOTROS -->
    <section class="frame" id="f1">
      <div class="frame-bg" style="background-image:url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=80');background-position:center 60%"></div>
      <div class="frame-overlay dark"></div>
      <div class="frame-body split-layout">
        <div class="col-text">
          <div class="tag anim-tag">Quiénes Somos</div>
          <h2><span class="tl" style="--d:0ms">UNIMOS CIENCIA</span><span class="tl accent" style="--d:120ms">Y NATURALEZA</span></h2>
          <p class="body-p anim-p">En BioAgroSolution somos pioneros en la exportación de biofertilizantes orgánicos de alto rendimiento. Nuestra misión es ofrecer a los productores una alternativa natural, eficiente y rentable que respete y regenere el ecosistema agrícola.</p>
          <p class="body-p anim-p" style="--d2:0.2s">Creemos que la verdadera riqueza de una nación está en la salud de su tierra. Somos socios en la regeneración de los campos argentinos.</p>
          <div class="badges anim-badges">
            <div class="badge">🔬 Validado por INTEC</div>
            <div class="badge">🌿 100% Orgánico</div>
            <div class="badge">🇦🇷 Hecho en Argentina</div>
          </div>
        </div>
        <div class="col-img anim-img">
          <div class="img-card">
            <img src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=700&q=80" alt="Lab"/>
            <div class="img-caption">Laboratorio de investigación</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2: CIENCIA -->
    <section class="frame" id="f2">
      <div class="frame-bg" style="background-image:url('https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=1920&q=80')"></div>
      <div class="frame-overlay heavy"></div>
      <div class="frame-body split-layout reverse">
        <div class="col-img anim-img">
          <div class="img-card">
            <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=700&q=80" alt="Raíces"/>
            <div class="img-caption">Microbiota del suelo activa</div>
          </div>
        </div>
        <div class="col-text">
          <div class="tag anim-tag">La Ciencia Detrás</div>
          <h2><span class="tl" style="--d:0ms">INNOVACIÓN</span><span class="tl accent" style="--d:120ms">CIENTÍFICA</span><span class="tl" style="--d:240ms">COMPROBADA.</span></h2>
          <div class="sci-list">
            <div class="sci-item anim-sci" style="--d3:0.3s">
              <div class="sci-ico">N₂</div>
              <div><strong>Fijación de Nitrógeno</strong><p>Cepas microbianas que capturan nitrógeno atmosférico y lo convierten en nutrientes biodisponibles.</p></div>
            </div>
            <div class="sci-item anim-sci" style="--d3:0.45s">
              <div class="sci-ico">PO₄</div>
              <div><strong>Solubilización de Fosfatos</strong><p>Bacterias que liberan fósforo insoluble del suelo, maximizando la absorción radicular.</p></div>
            </div>
            <div class="sci-item anim-sci" style="--d3:0.6s">
              <div class="sci-ico">🦠</div>
              <div><strong>Microbiota Activa</strong><p>Restaura la diversidad microbiana del suelo, mejorando su estructura y retención de agua.</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3: PRODUCTOS -->
    <section class="frame" id="f3">
      <div class="frame-bg" style="background-image:url('https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=1920&q=80')"></div>
      <div class="frame-overlay"></div>
      <div class="frame-body vert-layout">
        <div class="tag anim-tag" style="text-align:center">Nuestros Productos</div>
        <h2 style="text-align:center"><span class="tl" style="--d:0ms">SOLUCIONES PARA</span><span class="tl accent" style="--d:120ms">CADA ESCALA.</span></h2>
        <div class="prod-grid anim-grid">
          <div class="prod-card">
            <div class="pv">500 ml</div>
            <div class="pc">Hortalizas · Frutilla</div>
            <div class="pd">Ideal para pruebas. Fácil aplicación foliar.</div>
            <button class="btn-o" data-to="5">Consultar</button>
          </div>
          <div class="prod-card featured">
            <div class="p-badge">MÁS VENDIDO</div>
            <div class="pv">1 L · 3 L</div>
            <div class="pc">Soja · Trigo · Maíz</div>
            <div class="pd">Mayor cobertura. Excelente costo-beneficio y aumento de microbiota.</div>
            <button class="btn-o" data-to="5">Consultar</button>
          </div>
          <div class="prod-card">
            <div class="pv">5 L · 20 L</div>
            <div class="pc">Grandes productores · Distribuidores</div>
            <div class="pd">Formato profesional. Máximo rendimiento y logística eficiente.</div>
            <button class="btn-o" data-to="5">Consultar</button>
          </div>
        </div>
      </div>
    </section>

    <!-- 4: RESULTADOS -->
    <section class="frame" id="f4">
      <div class="frame-bg" style="background-image:url('https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1920&q=80')"></div>
      <div class="frame-overlay dark"></div>
      <div class="frame-body split-layout">
        <div class="col-text">
          <div class="tag anim-tag">Resultados Comprobados</div>
          <h2><span class="tl" style="--d:0ms">NÚMEROS QUE</span><span class="tl accent" style="--d:120ms">HABLAN.</span></h2>
          <p class="body-p anim-p">Caso real: cultivo de soja en Pergamino. Suelos compactados y bajo rendimiento transformados en una sola campaña.</p>
          <div class="stats anim-stats">
            <div class="stat-row" style="--d4:0.3s"><span class="sn">+25%</span><span class="sl">Rendimiento promedio de cultivos</span></div>
            <div class="stat-row" style="--d4:0.45s"><span class="sn">-40%</span><span class="sl">Reducción en fertilizantes químicos</span></div>
            <div class="stat-row" style="--d4:0.6s"><span class="sn">+18%</span><span class="sl">Rinde por hectárea — caso soja Pergamino</span></div>
            <div class="stat-row" style="--d4:0.75s"><span class="sn">-35%</span><span class="sl">Uso de fertilizantes nitrogenados</span></div>
          </div>
        </div>
        <div class="col-img anim-img">
          <div class="img-card drone-card">
            <img src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=700&q=80" alt="Drone"/>
            <div class="drone-stats">
              <div><span class="ds-n">+18%</span><span class="ds-l">Rinde Soja</span></div>
              <div><span class="ds-n">-35%</span><span class="ds-l">Menos N sintético</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5: CONTACTO -->
    <section class="frame" id="f5">
      <div class="frame-bg" style="background-image:url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80');background-position:center 20%"></div>
      <div class="frame-overlay heavy"></div>
      <div class="frame-body split-layout">
        <div class="col-text">
          <div class="tag anim-tag">Contacto</div>
          <h2><span class="tl" style="--d:0ms">TRANSFORMÁ</span><span class="tl accent" style="--d:120ms">TU CAMPO</span><span class="tl" style="--d:240ms">HOY.</span></h2>
          <p class="body-p anim-p">¿Consulta, cotización o interés en ser distribuidor? Nuestro equipo técnico te responde.</p>
          <div class="contact-info anim-p" style="--d2:0.3s">
            <a href="https://www.bioagrosolutions.com.ar" target="_blank" class="ci">🌐 bioagrosolutions.com.ar</a>
            <div class="ci">📧 Contacto disponible en el sitio</div>
            <div class="ci">🇦🇷 Argentina — Exportamos a toda la región</div>
          </div>
        </div>
        <div class="col-form anim-form">
          <form onsubmit="return false">
            <input type="text" placeholder="Nombre completo" required/>
            <input type="email" placeholder="Email" required/>
            <input type="text" placeholder="Empresa / Campo"/>
            <textarea placeholder="¿En qué podemos ayudarte?"></textarea>
            <button type="submit" class="btn-p full">Enviar Consulta →</button>
          </form>
        </div>
      </div>
    </section>

  </div><!-- /frames -->
  <!-- OVERLAY TRANSITION -->
  <div id="overlay" style="position:fixed;inset:0;z-index:500;background:#050e06;opacity:0;pointer-events:none;transition:opacity .22s ease;"></div>
</div><!-- /app -->
    <script  src="./script.js"></script>

  </body>
  
</html>
