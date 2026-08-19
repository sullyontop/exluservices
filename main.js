const ELUX = {
  discord: "https://discord.gg/elux",
  site: "https://eluxog.cc",
  email: "eluxbusinessemail@gmail.com",
    showcase: "https://youtu.be/rs7lZL6pQAM",
  checkout: {
    lifetime: "https://eluxoptimisations.mysellauth.com/checkout/3aa27c5996418-0000015013322",
    hwid: "https://discord.gg/elux",
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
  return `<article class="vouch-card"><div class="mb-3 text-white">★★★★★</div><p>${v.t}</p><div class="mt-4 flex items-center gap-3"><span class="avatar">${v.i}</span><span class="text-xs text-neutral-400">${v.n}</span></div></article>`;
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
    mobileMenu.classList.toggle("hidden");
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
  startStars();
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
  if (!video || !btn) return;

  const play = () => {
    btn.classList.add("is-hidden");
    video.setAttribute("controls", "");
    const start = video.play();
    if (start && start.catch) start.catch(() => {});
  };

  btn.addEventListener("click", play);
  video.addEventListener("play", () => btn.classList.add("is-hidden"));
  video.addEventListener("pause", () => {
    if (video.currentTime < 0.2) btn.classList.remove("is-hidden");
  });
  video.addEventListener("ended", () => {
    video.currentTime = 0;
    video.removeAttribute("controls");
    btn.classList.remove("is-hidden");
  });
}

function startStars() {
  const canvas = document.getElementById("rain");
  if (!canvas) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const ctx = canvas.getContext("2d");
  const stars = [];
  const shots = [];
  let w = 0;
  let h = 0;
  let mx = 0.5;
  let my = 0.5;
  let tx = 0.5;
  let ty = 0.5;

  const spawn = (s, layer) => {
    s.x = Math.random();
    s.y = Math.random();
    s.layer = layer;
    s.r = layer === 0 ? 0.35 + Math.random() * 0.45
      : layer === 1 ? 0.6 + Math.random() * 0.7
        : 0.9 + Math.random() * 1.15;
    s.base = layer === 0 ? 0.12 + Math.random() * 0.22
      : layer === 1 ? 0.28 + Math.random() * 0.32
        : 0.5 + Math.random() * 0.45;
    s.tw = Math.random() * Math.PI * 2;
    s.spd = 0.006 + Math.random() * 0.014;
    s.vx = (Math.random() - 0.5) * 0.00008 * (layer + 1);
    s.vy = 0.00004 + Math.random() * 0.00008;
    s.glow = layer === 2 && Math.random() < 0.4;
  };

  const spawnShot = () => {
    shots.push({
      x: Math.random() * w * 0.85,
      y: Math.random() * h * 0.35,
      len: 70 + Math.random() * 90,
      speed: 6 + Math.random() * 5,
      life: 1,
      ang: Math.PI * 0.18 + Math.random() * 0.12,
    });
  };

  const resize = () => {
    w = window.innerWidth;
    h = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    stars.length = 0;
    const area = w * h;
    const far = Math.round(Math.min(90, Math.max(40, area / 18000)));
    const mid = Math.round(Math.min(50, Math.max(22, area / 32000)));
    const near = Math.round(Math.min(22, Math.max(8, area / 70000)));
    for (let i = 0; i < far; i++) { const s = {}; spawn(s, 0); stars.push(s); }
    for (let i = 0; i < mid; i++) { const s = {}; spawn(s, 1); stars.push(s); }
    for (let i = 0; i < near; i++) { const s = {}; spawn(s, 2); stars.push(s); }
  };

  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", (e) => {
    tx = e.clientX / Math.max(w, 1);
    ty = e.clientY / Math.max(h, 1);
  });
  resize();

  const tick = () => {
    mx += (tx - mx) * 0.035;
    my += (ty - my) * 0.035;
    ctx.clearRect(0, 0, w, h);

    for (const s of stars) {
      s.tw += s.spd;
      s.x += s.vx;
      s.y += s.vy;
      if (s.x < 0) s.x += 1;
      if (s.x > 1) s.x -= 1;
      if (s.y > 1) s.y -= 1;

      const par = (s.layer + 1) * 16;
      const px = s.x * w + (mx - 0.5) * par;
      const py = s.y * h + (my - 0.5) * par;
      const a = s.base * (0.45 + 0.55 * (0.5 + 0.5 * Math.sin(s.tw)));

      if (s.glow) {
        const g = ctx.createRadialGradient(px, py, 0, px, py, s.r * 7);
        g.addColorStop(0, `rgba(255,255,255,${a * 0.28})`);
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(px, py, s.r * 7, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.fillStyle = `rgba(255,255,255,${a})`;
      ctx.beginPath();
      ctx.arc(px, py, s.r, 0, Math.PI * 2);
      ctx.fill();
    }

    if (Math.random() < 0.004 && shots.length < 2) spawnShot();
    for (let i = shots.length - 1; i >= 0; i--) {
      const sh = shots[i];
      sh.x += Math.cos(sh.ang) * sh.speed;
      sh.y += Math.sin(sh.ang) * sh.speed;
      sh.life -= 0.016;
      const alpha = Math.max(0, sh.life);
      ctx.strokeStyle = `rgba(255,255,255,${alpha * 0.7})`;
      ctx.lineWidth = 1.2;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(sh.x, sh.y);
      ctx.lineTo(sh.x - Math.cos(sh.ang) * sh.len, sh.y - Math.sin(sh.ang) * sh.len);
      ctx.stroke();
      if (sh.life <= 0 || sh.x > w + 80 || sh.y > h + 80) shots.splice(i, 1);
    }

    requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}
