const ELUX = {
  discord: "https://discord.gg/elux",
  site: "https://eluxog.cc",
  email: "eluxbusinessemail@gmail.com",
    showcase: "https://youtu.be/c5VXYcX6c1c",
  promoCode: "Elux10%",
  checkout: {
    lifetime: "https://eluxoptimisations.mysellauth.com/checkout/3aa27c5996418-0000015013322",
  },
  sellauth: {
    shopId: 209294,
    shopUrl: "https://eluxoptimisations.mysellauth.com",
    productId: 588116,
    variantId: 912032,
  },
};

/* Add creators here. Put their photo in this folder, then copy a block.
   tiktok / youtube can be left blank if they only have one. */
const MEDIA = [
  {
    name: "Elux",
    image: "/media/elux.png",
    tiktok: "https://www.tiktok.com/@eluxog",
    youtube: "https://www.youtube.com/@eluxog",
  },
  {
    name: "Sammy",
    image: "/sammy.png",
    tiktok: "https://www.tiktok.com/@nolimitsammyyy",
    youtube: "https://www.youtube.com/@nolimitsammyy",
  },
];

const YT_VIDEOS = [
  {
    id: "dcdSF91mMh4",
    title: "FiveM 2026: Best Optimizer Settings for Zero Ping and Max Performance",
    creator: "Sammy",
  },
  {
    id: "KtEgY7zmzUw",
    title: "FiveM | BEST Optimizations + Best Optimisation tool (2026!)",
    creator: "Elux",
  },
  {
    id: "42mNc10fZgA",
    title: "How To Boost FPS in Valorant 2026! (UPDATED)",
    creator: "Elux",
  },
];

const TIKTOK_ICON = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M14.5 3h2.1c.2 1.5 1.1 2.8 2.4 3.6 1 .6 2.1.9 3.2.9V10c-1.5 0-3-.4-4.3-1.2v6.7A6.6 6.6 0 1 1 11 9.1V12a3.7 3.7 0 1 0 2.6 3.5V3z"/></svg>';
const YT_ICON = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M23 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C19.2 5.4 12 5.4 12 5.4s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6zM9.8 15.5V8.9l6.2 3.3-6.2 3.3z"/></svg>';

function mediaCard(m) {
  const img = m.image
    ? `<img src="${m.image}" alt="${m.name}" />`
    : `<span>${(m.name || "?").slice(0, 2)}</span>`;
  const tiktok = m.tiktok
    ? `<a class="media-soc tiktok" href="${m.tiktok}" target="_blank" rel="noopener" aria-label="${m.name} on TikTok">${TIKTOK_ICON}</a>`
    : "";
  const youtube = m.youtube
    ? `<a class="media-soc youtube" href="${m.youtube}" target="_blank" rel="noopener" aria-label="${m.name} on YouTube">${YT_ICON}</a>`
    : "";
  return `<article class="media-person">
    <div class="media-circle">${img}<div class="media-socs">${tiktok}${youtube}</div></div>
    <p class="media-name">${m.name}</p>
  </article>`;
}

const VOUCHES = [
  { n: "ٴٴٴٴ [vet]", i: "VE", t: "10/10 tweaks dont trust tweaks but this one worked 100%" },
  { n: "5 [4KT]", i: "5", t: "10/10 — Honestly, I don't usually trust tweaks, but this one genuinely surprised me. Everything works exactly as advertised, the performance improvements are noticeable, and the whole setup feels smooth and reliable. For the price, it's easily one of the best tweaks I've tried and definitely worth every penny. If you're looking for something that actually delivers instead of wasting your money, I'd 100% recommend giving this one a try." },
  { n: "A [4EVA]", i: "A", t: "10/10 — Honestly, I don't usually trust tweaks, but this one genuinely surprised me. Everything works exactly as advertised, the performance improvements are noticeable, and the whole setup feels smooth and reliable. For the price, it's easily one of the best tweaks I've tried and definitely worth every penny. If you're looking for something that actually delivers instead of wasting your money, I'd 100% recommend giving this one a try." },
  { n: "D A R X [DxS]", i: "DA", t: "10/10 tweaks dont trust tweks but this one works 100% worth the price" },
  { n: "znxybot 23.", i: "ZN", t: "honestly best tweaks ever over the years ive used a lot of tweaks and nothing hits the same then elux" },
  { n: "cheaper [CHPR]", i: "CH", t: "boosted fps good aim" },
  { n: "admire me [NYC]", i: "AM", t: "boosted Fps Alot 10/10 Will Recommend Buying." },
  { n: "maxprof [ʙᴀʟʟ]", i: "MA", t: "100% worth the money, dropped me nearly 100 processes, its only £30 and he is the only person i will let touch my pc super trustworthy if you dont buy your missing out" },
  { n: "z1ku [VTWK]", i: "Z1", t: "holy shi ong best ever" },
  { n: "sludxd", i: "SL", t: "bought this with little hope not expecting much but i was so shocked with the results 1000% rec @elux hes the best!!!!" },
  { n: "Plaznium", i: "PL", t: "bought this not expecting much but i was shocked its so good i gained 150 fps i 1000% rec appreciate it bro! @elux" },
  { n: "•", i: "•", t: "#1 Opti tool on the market made me go from 265 processes to just 94 and ts boosted my fps from 120 to 300 100% would recommend it to anyone whose tryna get a good opti much appreciated @elux" },
  { n: "hush money [ʙᴀʟʟ]", i: "HM", t: "hit this guy up for ur optis 10/10 went from 100 fps to 250 stable" },
  { n: "!$ammy [CMBT]", i: "SA", t: "@elux 10/10 so much smoother doubled my fps" },
  { n: "Billy Wick [exe]", i: "BW", t: "tap in with @elux if you're tired of a slow PC that runs 20+ fps. he boosts your stuff with at least 120+ fps" },
  { n: "x [ٴٴ]", i: "X", t: "@elux 10/10 100% recommend if your looking to get your pc tweaked went from 236 process to 93 feel like a whole new pc .gg/elux on top" },
  { n: "Strapz", i: "ST", t: "@elux 1000000/10 recommend i was sat on 80 to 90 im hitting 255 this shits crazy elux on top" },
  { n: "peter", i: "PE", t: "@elux W mans hooked me up w opti was on 300 fps now on 500+" },
  { n: "07", i: "07", t: "@elux 10000/10 made my pc go from 255 processers to 115 processers 90 fps to 195fps would recommed 1000%" },
  { n: "V [NLRP]", i: "V", t: "10/1000 made my pc smoother and ingame recommend 100% @elux" },
  { n: "♛ 𝖚𝖓𝖉𝖊𝖋𝖊𝖆𝖙𝖊𝖉 ♛", i: "UN", t: "@elux w opti tysm" },
  { n: "Ron Smith [søur]", i: "RS", t: "1000000/10 1000% legit took my shit from 200+ proccess to 98 this shit firee asf make sure holla @ my boy @elux 🔥" },
  { n: "elux", i: "EL", t: "W opti from @elux -100 process" },
  { n: "᲼", i: "•", t: "bought weekly so worth GET AT @elux" },
  { n: ". [WRLD]", i: "WR", t: "100/100" },
  { n: "𝐧𝐚𝐭𝐡𝐚𝐧", i: "NA", t: "100/100 cheers" },
  { n: ". [WRLD]", i: "WR", t: "120 to 430" },
  { n: "limxyu", i: "LI", t: "+rep @elux +100fps while streaming and very good delay" },
  { n: "07", i: "07", t: "@elux 10/10 worth it getting better and better" },
  { n: "ethan", i: "ET", t: "bro i loaded in fivem and got 500fps so worth it 10/10" },
  { n: "Husky", i: "HU", t: "10/10 recommend him i rate him" },
  { n: "MITCHWXCKEM", i: "MW", t: "10000/10 way more responsiveness fps and no lag or stutters" },
  { n: "Jahski [ٴٴٴ]", i: "JA", t: "100/10 Easy N Quick" },
  { n: "9z [RENA]", i: "9Z", t: "10/10" },
  { n: "death [wawg]", i: "DE", t: "10/10 i was running 130 fps in tmf with a d10 pack and now im running 310 to 320 so worth it" },
  { n: "᲼", i: "•", t: "10/10 easyyy" },
  { n: "ｼ [da.]", i: "DA", t: "10/10 way more fps and no lag or stutters I'll definitely recommend" },
  { n: "@kenzo [Ball]", i: "KE", t: "1000/10 way more fps and no lag or stutters I'll definitely recommend" },
  { n: "ice [ᴅᴛʀ]", i: "IC", t: "10/10 boost me from 40fps to 90 on a 10x clan serv on rust @elux tap in" },
  { n: "slime green [ٴٴٴ]", i: "SG", t: "10/10 recommended" },
  { n: "Äłëx Fłøćkä", i: "AF", t: "10/10 recommended" },
  { n: "ice [ᴅᴛʀ]", i: "IC", t: "from 80 fps to 120 but its smooth as shi W somtimes i get 150" },
  { n: "Poex", i: "PO", t: "120+ fps boost from only small opti / tweaks" },
  { n: "Solar", i: "SO", t: "bought the new opti tool and wow my pc is running hella smooth now gone up 80 fps shout out to @elux for helping 10/10" },
  { n: "gore2244 [ᴹⱽᴾ]", i: "GO", t: "this opti is the best opti i have ever used i was getting like 80 fps fivem now im getting 180+ i would 100% reccomend big thankyou to @elux" },
  { n: "!$ammy [CMBT]", i: "SA", t: "dk how many times i gotta tell yall to come back to elux, but im coming back every time i fac reset, just got a new pc i was on like 300-400+fps now on around 500+, make sure yall tappin with elux if your tired of running 100 fps on any game" },
];

function vouchCard(v) {
  return `<article class="vouch-card"><p>${v.t}</p><div class="mt-4 flex items-center gap-3"><span class="avatar">${v.i}</span><span class="text-xs text-neutral-400">${v.n}</span></div></article>`;
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) lucide.createIcons();

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const path = (location.pathname.replace(/\/+$/, "") || "/").toLowerCase().replace(/\.html$/, "");
  const current = path === "" || path === "/index" ? "/" : path;
  document.querySelectorAll(".nav-link").forEach((a) => {
    const href = (a.getAttribute("href") || "/").split("#")[0].replace(/\/+$/, "").toLowerCase() || "/";
    a.classList.toggle("active", href === current);
  });

  document.querySelectorAll("[data-discord]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      window.open(ELUX.discord, "_blank", "noopener");
    });
  });

  document.querySelectorAll("[data-checkout]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const plan = el.getAttribute("data-checkout");
      window.open(ELUX.checkout[plan] || ELUX.discord, "_blank", "noopener");
    });
  });

  const mobileBtn = document.getElementById("mobile-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  mobileBtn?.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("is-open");
    mobileMenu.classList.remove("hidden");
    mobileBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  const grid = document.getElementById("vouch-grid");
  if (grid) grid.innerHTML = VOUCHES.map(vouchCard).join("");

  const rowA = document.getElementById("vouch-row-a");
  const rowB = document.getElementById("vouch-row-b");
  if (rowA && rowB) {
    const a = VOUCHES.slice(0, 17).map(vouchCard).join("");
    const b = VOUCHES.slice(17).map(vouchCard).join("");
    rowA.innerHTML = a + a;
    rowB.innerHTML = b + b;
  }

  const media = document.getElementById("media-grid");
  if (media) media.innerHTML = MEDIA.map(mediaCard).join("");

  setupYtVideos();
  setupShowcase();
  setupShowcaseTabs();
  setupAtmosphere();
  setupAppBackdrop();
});

function ytCard(v) {
  const href = `https://youtu.be/${v.id}`;
  const thumb = `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`;
  return `<article class="yt-card" data-yt="${v.id}">
    <div class="yt-frame">
      <button type="button" class="yt-play" aria-label="Play ${v.title}">
        <img src="${thumb}" alt="" />
        <span class="showcase-veil" aria-hidden="true"></span>
        <span class="showcase-play-btn" aria-hidden="true"><i data-lucide="play" class="h-6 w-6"></i></span>
      </button>
    </div>
    <div class="yt-meta">
      <p class="yt-title">${v.title}</p>
      <p class="yt-creator">${v.creator} · <a href="${href}" target="_blank" rel="noopener">Watch on YouTube</a></p>
    </div>
  </article>`;
}

function setupYtVideos() {
  document.querySelectorAll(".yt-card[data-yt]").forEach((card) => {
    const id = card.getAttribute("data-yt");
    const play = card.querySelector(".yt-play");
    const frame = card.querySelector(".yt-frame");
    if (!id || !play || !frame) return;
    play.addEventListener("click", (e) => {
      e.preventDefault();
      frame.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    });
  });
}

function setupShowcase() {
  const video = document.getElementById("showcase-video");
  const btn = document.getElementById("showcase-play");
  if (!video) return;

  video.muted = true;
  video.defaultMuted = true;
  video.volume = 0;
  video.loop = true;
  video.playsInline = true;
  video.setAttribute("muted", "");
  video.setAttribute("playsinline", "");

  const hideOverlay = () => {
    if (btn) btn.classList.add("is-hidden");
  };
  const showOverlay = () => {
    if (btn) btn.classList.remove("is-hidden");
  };

  const tryPlay = () => {
    const start = video.play();
    if (start && start.then) start.then(hideOverlay).catch(showOverlay);
    else hideOverlay();
  };

  if (btn) {
    btn.addEventListener("click", () => {
      video.muted = true;
      video.volume = 0;
      tryPlay();
    });
  }

  video.addEventListener("playing", hideOverlay);
  tryPlay();
}

function setupShowcaseTabs() {
  const tabs = document.querySelectorAll("[data-showcase-tab]");
  const panels = document.querySelectorAll("[data-showcase-panel]");
  if (!tabs.length) return;

  const video = document.getElementById("showcase-video");
  const oldFrame = document.querySelector('[data-showcase-panel="old"] iframe');
  const oldSrc = oldFrame ? oldFrame.getAttribute("src") : "";

  const show = (id) => {
    tabs.forEach((tab) => {
      const on = tab.getAttribute("data-showcase-tab") === id;
      tab.classList.toggle("is-active", on);
      tab.setAttribute("aria-selected", on ? "true" : "false");
    });
    panels.forEach((panel) => {
      panel.hidden = panel.getAttribute("data-showcase-panel") !== id;
    });
    if (video) {
      if (id === "new") video.play().catch(() => {});
      else video.pause();
    }
    if (oldFrame && oldSrc) {
      if (id === "old") oldFrame.src = oldSrc;
      else if (oldFrame.src) oldFrame.src = "";
    }
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => show(tab.getAttribute("data-showcase-tab")));
  });
}

function setupAppBackdrop() {
  const wrap = document.createElement("div");
  wrap.id = "app-backdrop";
  wrap.setAttribute("aria-hidden", "true");
  wrap.setAttribute("inert", "");
  wrap.innerHTML = `
    <div class="app-stage">
      <div class="app-window">
        <aside class="app-side">
          <div class="app-brand"><img src="/logo.png?v=pg2" alt="" /><div><strong>Elux Tweaks</strong><span>v2.0</span></div></div>
          <nav>
            <span class="is-on"><i></i>Home</span>
            <span><i></i>Optimization</span>
            <span><i></i>Cleanup</span>
            <span><i></i>Advanced Tweaks</span>
            <span><i></i>Gaming Tweaks</span>
            <span><i></i>Service Tweaks</span>
            <span><i></i>Display</span>
            <span><i></i>Debloat</span>
            <span><i></i>System Info</span>
            <span><i></i>Support</span>
            <span><i></i>Settings</span>
          </nav>
        </aside>
        <div class="app-main">
          <header class="app-head">
            <div>
              <p class="app-hi">Welcome back eluxog</p>
              <p class="app-sub">I hope you are enjoying Elux optimizations</p>
            </div>
          </header>
          <div class="app-gauges">
            <article class="app-gauge" data-g="cpu">
              <div class="g-ring">
                <svg viewBox="0 0 100 100">
                  <circle class="g-track" cx="50" cy="50" r="38" />
                  <circle class="g-fill" cx="50" cy="50" r="38" pathLength="100" stroke-dasharray="12 100" />
                </svg>
                <span class="g-val">12%</span>
              </div>
              <span class="g-label">CPU Usage</span>
            </article>
            <article class="app-gauge" data-g="gpu">
              <div class="g-ring">
                <svg viewBox="0 0 100 100">
                  <circle class="g-track" cx="50" cy="50" r="38" />
                  <circle class="g-fill" cx="50" cy="50" r="38" pathLength="100" stroke-dasharray="13 100" />
                </svg>
                <span class="g-val">13%</span>
              </div>
              <span class="g-label">GPU Usage</span>
            </article>
            <article class="app-gauge" data-g="ram">
              <div class="g-ring">
                <svg viewBox="0 0 100 100">
                  <circle class="g-track" cx="50" cy="50" r="38" />
                  <circle class="g-fill" cx="50" cy="50" r="38" pathLength="100" stroke-dasharray="69 100" />
                </svg>
                <span class="g-val">69%</span>
              </div>
              <span class="g-label">RAM Usage</span>
            </article>
          </div>
          <div class="app-lower">
            <article class="app-chart">
              <div class="app-chart-top">
                <p>GPU Usage</p>
                <div class="app-toggles"><span>CPU</span><span class="on">GPU</span><span>RAM</span></div>
              </div>
              <canvas class="app-graph" width="640" height="220"></canvas>
            </article>
            <article class="app-spotify">
              <div class="spot-art">♪</div>
              <p class="spot-title">Nothing playing</p>
              <p class="spot-sub">Open Spotify to start</p>
              <div class="spot-ctrls"><span></span><span class="play"></span><span></span></div>
            </article>
          </div>
        </div>
      </div>
    </div>`;

  const canvas = document.getElementById("bg-canvas");
  if (canvas) canvas.after(wrap);
  else document.body.prepend(wrap);

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const gauges = {
    cpu: wrap.querySelector('[data-g="cpu"]'),
    gpu: wrap.querySelector('[data-g="gpu"]'),
    ram: wrap.querySelector('[data-g="ram"]'),
  };
  const graph = wrap.querySelector(".app-graph");
  const gctx = graph.getContext("2d");
  const hist = Array.from({ length: 64 }, () => 13 + Math.random() * 6);

  const state = { cpu: 12, gpu: 13, ram: 69 };

  const setGauge = (el, value) => {
    const n = Math.round(value);
    el.querySelector(".g-fill").setAttribute("stroke-dasharray", `${Math.max(2, value).toFixed(1)} 100`);
    el.querySelector(".g-val").textContent = n + "%";
  };

  const drawGraph = () => {
    const w = graph.width;
    const h = graph.height;
    gctx.clearRect(0, 0, w, h);
    gctx.strokeStyle = "rgba(255,255,255,0.06)";
    gctx.lineWidth = 1;
    for (let i = 1; i < 4; i++) {
      const y = (h / 4) * i;
      gctx.beginPath();
      gctx.moveTo(0, y);
      gctx.lineTo(w, y);
      gctx.stroke();
    }
    gctx.beginPath();
    hist.forEach((v, i) => {
      const x = (i / (hist.length - 1)) * w;
      const y = h - (v / 100) * (h * 0.78) - h * 0.1;
      if (i === 0) gctx.moveTo(x, y);
      else gctx.lineTo(x, y);
    });
    gctx.strokeStyle = "#fff";
    gctx.lineWidth = 2.4;
    gctx.lineJoin = "round";
    gctx.stroke();
    const last = hist[hist.length - 1];
    const lx = w;
    const ly = h - (last / 100) * (h * 0.78) - h * 0.1;
    gctx.fillStyle = "#fff";
    gctx.beginPath();
    gctx.arc(lx - 2, ly, 3.2, 0, Math.PI * 2);
    gctx.fill();
  };

  if (reduced) {
    setGauge(gauges.cpu, 12);
    setGauge(gauges.gpu, 13);
    setGauge(gauges.ram, 69);
    drawGraph();
    return;
  }

  let running = true;
  let lastSample = 0;
  const tick = (now) => {
    if (!running) return;
    requestAnimationFrame(tick);
    const t = now / 1000;
    state.cpu = 18 + Math.sin(t * 1.05) * 11 + Math.sin(t * 2.35) * 4;
    state.gpu = 24 + Math.sin(t * 1.28 + 1.2) * 16 + Math.sin(t * 2.7) * 5;
    state.ram = 64 + Math.sin(t * 0.62 + 2.1) * 11;
    setGauge(gauges.cpu, state.cpu);
    setGauge(gauges.gpu, state.gpu);
    setGauge(gauges.ram, state.ram);
    if (now - lastSample > 90) {
      lastSample = now;
      hist.shift();
      hist.push(Math.max(6, Math.min(88, state.gpu + Math.sin(t * 3.1) * 3)));
      drawGraph();
    }
  };

  document.addEventListener("visibilitychange", () => {
    running = !document.hidden;
    if (running) requestAnimationFrame(tick);
  });

  drawGraph();
  requestAnimationFrame(tick);
}

function setupAtmosphere() {
  const canvas = document.createElement("canvas");
  canvas.id = "bg-canvas";
  canvas.setAttribute("aria-hidden", "true");
  document.body.prepend(canvas);

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const gl = canvas.getContext("webgl", {
    alpha: true,
    antialias: false,
    depth: false,
    stencil: false,
    premultipliedAlpha: true,
    powerPreference: "low-power",
  });

  if (!gl) {
    setupBlobFallback(canvas, reduced);
    return;
  }

  const vs = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vs, "attribute vec2 a;void main(){gl_Position=vec4(a,0,1);}");
  gl.compileShader(vs);

  const fs = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fs, `
precision highp float;
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_mouse;

vec3 permute(vec3 x){return mod(((x*34.0)+1.0)*x,289.0);}
float snoise(vec2 v){
  const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);
  vec2 i=floor(v+dot(v,C.yy));
  vec2 x0=v-i+dot(i,C.xx);
  vec2 i1=(x0.x>x0.y)?vec2(1.0,0.0):vec2(0.0,1.0);
  vec4 x12=x0.xyxy+C.xxzz;
  x12.xy-=i1;
  i=mod(i,289.0);
  vec3 p=permute(permute(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));
  vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0);
  m*=m; m*=m;
  vec3 x=2.0*fract(p*C.www)-1.0;
  vec3 h=abs(x)-0.5;
  vec3 ox=floor(x+0.5);
  vec3 a0=x-ox;
  m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);
  vec3 g;
  g.x=a0.x*x0.x+h.x*x0.y;
  g.yz=a0.yz*x12.xz+h.yz*x12.yw;
  return 130.0*dot(m,g);
}

void main(){
  vec2 uv=gl_FragCoord.xy/u_res;
  vec2 p=(uv*2.0-1.0);
  p.x*=u_res.x/max(u_res.y,1.0);

  float t=u_time*0.11;
  vec2 m=(u_mouse*2.0-1.0);
  m.x*=u_res.x/max(u_res.y,1.0);
  p+=m*0.07;

  float r=length(p);
  float ang=atan(p.y,p.x)+0.42*sin(t*0.65+r*2.4);
  vec2 q=vec2(cos(ang),sin(ang))*r;

  float n=0.55+0.45*snoise(q*0.85+vec2(t*0.22,-t*0.16));
  n+=0.28*snoise(q*1.7-vec2(t*0.18,t*0.12));
  n+=0.12*snoise(q*3.2+vec2(-t*0.1,t*0.14));

  vec2 b1=vec2(0.62+0.14*sin(t*0.37),0.78+0.1*cos(t*0.31));
  vec2 b2=vec2(-0.55+0.12*cos(t*0.28),-0.08+0.12*sin(t*0.41));
  vec2 b3=vec2(0.05+0.1*sin(t*0.22),0.18+0.16*cos(t*0.19));
  float blob=0.0;
  blob+=exp(-dot(p-b1,p-b1)*1.15);
  blob+=0.62*exp(-dot(p-b2,p-b2)*0.82);
  blob+=0.48*exp(-dot(p-b3,p-b3)*1.05);

  float smoke=clamp(n*0.38+blob*0.78,0.0,1.0);
  smoke=pow(smoke,1.32);
  smoke*=0.72+0.28*(1.0-smoothstep(0.2,1.45,r));

  vec3 col=mix(vec3(0.02),vec3(0.92),smoke);
  float grain=fract(sin(dot(gl_FragCoord.xy+fract(u_time)*97.0,vec2(12.9898,78.233)))*43758.5453);
  col+=(grain-0.5)*0.07;

  gl_FragColor=vec4(col,smoke*0.92);
}`);
  gl.compileShader(fs);
  if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
    setupBlobFallback(canvas, reduced);
    return;
  }

  const prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    setupBlobFallback(canvas, reduced);
    return;
  }
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, "a");
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  const uRes = gl.getUniformLocation(prog, "u_res");
  const uTime = gl.getUniformLocation(prog, "u_time");
  const uMouse = gl.getUniformLocation(prog, "u_mouse");

  let running = !reduced;
  let mouse = [0.72, 0.78];
  let mouseTarget = [0.72, 0.78];

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = Math.max(1, Math.floor(w * dpr));
    canvas.height = Math.max(1, Math.floor(h * dpr));
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    gl.viewport(0, 0, canvas.width, canvas.height);
  };

  const draw = (t) => {
    mouse[0] += (mouseTarget[0] - mouse[0]) * 0.035;
    mouse[1] += (mouseTarget[1] - mouse[1]) * 0.035;
    gl.uniform2f(uRes, canvas.width, canvas.height);
    gl.uniform1f(uTime, t * 0.001);
    gl.uniform2f(uMouse, mouse[0], mouse[1]);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };

  const frame = (t) => {
    if (!running) return;
    requestAnimationFrame(frame);
    draw(t);
  };

  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("pointermove", (e) => {
    mouseTarget[0] = e.clientX / Math.max(window.innerWidth, 1);
    mouseTarget[1] = 1 - e.clientY / Math.max(window.innerHeight, 1);
  }, { passive: true });
  document.addEventListener("visibilitychange", () => {
    running = !document.hidden && !reduced;
    if (running) requestAnimationFrame(frame);
  });

  resize();
  draw(0);
  if (running) requestAnimationFrame(frame);
}

function setupBlobFallback(canvas, reduced) {
  const ctx = canvas.getContext("2d", { alpha: true });
  let w = 0;
  let h = 0;
  let running = !reduced;
  const blobs = [
    { x: 0.78, y: 0.12, r: 0.55, a: 0.22, sx: 0.03, sy: 0.02, p: 0 },
    { x: 0.18, y: 0.62, r: 0.48, a: 0.14, sx: 0.025, sy: 0.03, p: 2.1 },
    { x: 0.52, y: 0.42, r: 0.38, a: 0.1, sx: 0.02, sy: 0.018, p: 4.4 },
  ];

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const draw = (t) => {
    ctx.clearRect(0, 0, w, h);
    const time = t * 0.00012;
    for (const b of blobs) {
      const x = (b.x + Math.sin(time + b.p) * b.sx) * w;
      const y = (b.y + Math.cos(time * 0.85 + b.p) * b.sy) * h;
      const rad = b.r * Math.max(w, h);
      const g = ctx.createRadialGradient(x, y, 0, x, y, rad);
      g.addColorStop(0, `rgba(255,255,255,${b.a})`);
      g.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    }
  };

  const frame = (t) => {
    if (!running) return;
    requestAnimationFrame(frame);
    draw(t);
  };

  window.addEventListener("resize", resize, { passive: true });
  document.addEventListener("visibilitychange", () => {
    running = !document.hidden && !reduced;
    if (running) requestAnimationFrame(frame);
  });

  resize();
  draw(0);
  if (running) requestAnimationFrame(frame);
}

