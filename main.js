const ELUX = {
  discord: "https://discord.gg/elux",
  site: "https://eluxog.cc",
  email: "eluxbusinessemail@gmail.com",
    showcase: "https://youtu.be/GVrvasacbLc",
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
  setupPromo();
  setupRain();
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

function setupRain() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const canvas = document.createElement("canvas");
  canvas.id = "rain-canvas";
  canvas.setAttribute("aria-hidden", "true");
  document.body.prepend(canvas);

  const ctx = canvas.getContext("2d", { alpha: true });
  let w = 0;
  let h = 0;
  let drops = [];
  let splashes = [];
  let running = true;
  let last = 0;

  const dropCount = () => Math.min(240, Math.max(64, Math.round((w * h) / 8500)));

  const makeDrop = () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    len: 12 + Math.random() * 26,
    speed: 620 + Math.random() * 880,
    thick: 0.55 + Math.random() * 1.05,
    alpha: 0.1 + Math.random() * 0.28,
    wind: 16 + Math.random() * 32,
  });

  const splash = (x, y) => {
    const n = 3 + Math.floor(Math.random() * 3);
    for (let i = 0; i < n; i++) {
      const a = -Math.PI / 2 + (Math.random() - 0.5) * 1.7;
      splashes.push({
        x,
        y,
        vx: Math.cos(a) * (36 + Math.random() * 90),
        vy: Math.sin(a) * (30 + Math.random() * 70) - 18,
        life: 1,
        decay: 1.7 + Math.random() * 1.5,
        r: 0.55 + Math.random() * 1.15,
      });
    }
  };

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    drops = Array.from({ length: dropCount() }, makeDrop);
  };

  const frame = (t) => {
    if (!running) return;
    requestAnimationFrame(frame);
    const dt = Math.min(0.033, (t - last) / 1000 || 0.016);
    last = t;
    ctx.clearRect(0, 0, w, h);

    for (const d of drops) {
      d.y += d.speed * dt;
      d.x += d.wind * dt;
      ctx.strokeStyle = `rgba(255,255,255,${d.alpha})`;
      ctx.lineWidth = d.thick;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x - d.wind * 0.045, d.y - d.len);
      ctx.stroke();
      if (d.y - d.len > h) {
        if (Math.random() < 0.32) splash(d.x, h - 2);
        d.y = -d.len - Math.random() * 90;
        d.x = Math.random() * w;
      }
      if (d.x > w + 16) d.x = -12;
    }

    for (let i = splashes.length - 1; i >= 0; i--) {
      const s = splashes[i];
      s.x += s.vx * dt;
      s.y += s.vy * dt;
      s.vy += 420 * dt;
      s.life -= s.decay * dt;
      if (s.life <= 0) {
        splashes.splice(i, 1);
        continue;
      }
      ctx.fillStyle = `rgba(255,255,255,${0.2 * s.life})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  window.addEventListener("resize", resize, { passive: true });
  document.addEventListener("visibilitychange", () => {
    running = !document.hidden;
    if (running) {
      last = performance.now();
      requestAnimationFrame(frame);
    }
  });

  resize();
  requestAnimationFrame(frame);
}

function setupPromo() {
  const key = "elux_promo_closed";
  const code = ELUX.promoCode || "Elux10%";
  if (localStorage.getItem(key) === "1") return;

  const root = document.createElement("div");
  root.className = "promo-overlay is-hidden";
  root.setAttribute("role", "dialog");
  root.setAttribute("aria-modal", "true");
  root.setAttribute("aria-labelledby", "promo-title");
  root.innerHTML = `
    <div class="promo-card">
      <button type="button" class="promo-close" aria-label="Close">&times;</button>
      <h2 id="promo-title">Welcome to Elux Tweaks</h2>
      <p class="promo-lead">Sign up and get <strong>10% off</strong>. Subscribe and we give you a code for checkout.</p>
      <form class="promo-form" novalidate>
        <label class="promo-field">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="M4 7l8 6 8-6"/></svg>
          <input type="email" name="email" autocomplete="email" placeholder="youremail@email.com" required />
        </label>
        <button type="submit">Subscribe</button>
      </form>
      <p class="promo-error" aria-live="polite"></p>
      <div class="promo-ticket" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="6" cy="7" r="2.2"/><circle cx="6" cy="17" r="2.2"/><path d="M8 8.5 16 16.5M8 15.5 16 7.5"/></svg>
        <span data-promo-code>&mdash;&mdash;&mdash;&mdash;</span>
      </div>
    </div>
  `;
  document.body.appendChild(root);

  const card = root.querySelector(".promo-card");
  const form = root.querySelector(".promo-form");
  const input = root.querySelector("input");
  const error = root.querySelector(".promo-error");
  const codeEl = root.querySelector("[data-promo-code]");
  const closeBtn = root.querySelector(".promo-close");

  const open = () => {
    root.classList.remove("is-hidden");
    document.body.classList.add("promo-open");
  };

  const close = () => {
    root.classList.add("is-hidden");
    document.body.classList.remove("promo-open");
    localStorage.setItem(key, "1");
  };

  closeBtn.addEventListener("click", close);
  root.addEventListener("click", (e) => {
    if (!card.contains(e.target)) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !root.classList.contains("is-hidden")) close();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = (input.value || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      error.textContent = "Enter a valid email.";
      input.focus();
      return;
    }
    error.textContent = "Enter this code at checkout.";
    codeEl.textContent = code;
    try { navigator.clipboard.writeText(code); } catch (_) {}
    form.querySelector("button[type='submit']").textContent = "Copied " + code;
    localStorage.setItem(key, "1");
  });

  const wait = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 1600;
  setTimeout(open, wait);
}

