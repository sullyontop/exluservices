const ELUX = {
  discord: "https://discord.gg/elux",
  site: "https://eluxog.cc",
  checkout: {
    month: "https://discord.gg/elux",
    quarter: "https://discord.gg/elux",
    lifetime: "https://discord.gg/elux",
    private: "https://discord.gg/elux",
  },
};

const GALLERY = [
  { src: "images/app-home.png", label: "Home" },
  { src: "images/app-opti.png", label: "Optimisation" },
  { src: "images/app-debloat.png", label: "Debloat" },
  { src: "images/app-games.png", label: "Game Settings" },
  { src: "images/app-windows.png", label: "Windows" },
];

document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) lucide.createIcons();

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

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

  const links = document.querySelectorAll(".nav-link");
  const setActive = () => {
    const hash = location.hash || "#home";
    links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === hash));
  };
  window.addEventListener("hashchange", setActive);
  setActive();

  const modal = document.getElementById("login-modal");
  const openLogin = () => {
    modal.classList.remove("hidden");
    document.body.classList.add("modal-open");
  };
  const closeLogin = () => {
    modal.classList.add("hidden");
    document.body.classList.remove("modal-open");
  };
  document.querySelectorAll("[data-login]").forEach((el) => el.addEventListener("click", openLogin));
  document.getElementById("login-close")?.addEventListener("click", closeLogin);
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeLogin();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLogin();
  });

  setupSwipe();
  setupGallery();
  startRain();
});

function setupGallery() {
  const img = document.getElementById("gallery-main");
  const label = document.getElementById("gallery-label");
  const count = document.getElementById("gallery-count");
  const thumbs = document.querySelectorAll("[data-gal]");
  if (!img) return;

  let i = 0;
  const show = (n) => {
    i = (n + GALLERY.length) % GALLERY.length;
    img.src = GALLERY[i].src;
    img.alt = GALLERY[i].label;
    if (label) label.textContent = GALLERY[i].label;
    if (count) count.textContent = String(i + 1).padStart(2, "0") + " / " + String(GALLERY.length).padStart(2, "0");
    thumbs.forEach((t, idx) => t.classList.toggle("is-on", idx === i));
  };

  document.getElementById("gal-prev")?.addEventListener("click", () => show(i - 1));
  document.getElementById("gal-next")?.addEventListener("click", () => show(i + 1));
  thumbs.forEach((t) => t.addEventListener("click", () => show(Number(t.getAttribute("data-gal")))));
  show(0);
}

function setupSwipe() {
  const track = document.getElementById("swipe-track");
  const knob = document.getElementById("swipe-knob");
  if (!track || !knob) return;

  let dragging = false;
  const max = () => track.clientWidth - knob.offsetWidth - 8;

  const setX = (x) => {
    const clamped = Math.max(0, Math.min(max(), x));
    knob.style.left = `${clamped + 4}px`;
    return clamped;
  };

  const end = (x) => {
    dragging = false;
    if (x > max() * 0.78) {
      setX(max());
      const swipeLabel = document.getElementById("swipe-label");
      if (swipeLabel) swipeLabel.textContent = "Welcome in";
      setTimeout(() => {
        document.getElementById("login-modal").classList.add("hidden");
        document.body.classList.remove("modal-open");
        setX(0);
        if (swipeLabel) swipeLabel.textContent = "Swipe to enter";
      }, 650);
    } else {
      setX(0);
    }
  };

  const pos = (e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    return clientX - track.getBoundingClientRect().left - knob.offsetWidth / 2;
  };

  knob.addEventListener("pointerdown", (e) => {
    dragging = true;
    knob.setPointerCapture(e.pointerId);
  });
  knob.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    setX(pos(e));
  });
  knob.addEventListener("pointerup", (e) => {
    if (!dragging) return;
    end(Math.max(0, Math.min(max(), pos(e))));
  });
}

function startRain() {
  const canvas = document.getElementById("rain");
  if (!canvas) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const ctx = canvas.getContext("2d");
  const drops = [];
  let w = 0;
  let h = 0;

  const spawn = (d, resetY) => {
    d.x = Math.random() * w;
    d.y = resetY ? -20 - Math.random() * 80 : Math.random() * h;
    d.len = 8 + Math.random() * 16;
    d.speed = 0.35 + Math.random() * 0.85;
    d.width = 0.6 + Math.random() * 1.1;
    d.alpha = 0.12 + Math.random() * 0.28;
  };

  const resize = () => {
    const rect = canvas.parentElement.getBoundingClientRect();
    w = rect.width;
    h = rect.height;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round(Math.min(140, Math.max(50, w * 0.08)));
    while (drops.length < count) {
      const d = {};
      spawn(d, false);
      drops.push(d);
    }
    drops.length = count;
  };

  window.addEventListener("resize", resize);
  resize();

  const tick = () => {
    ctx.clearRect(0, 0, w, h);
    for (const d of drops) {
      d.y += d.speed;
      if (d.y > h + 20) spawn(d, true);
      ctx.strokeStyle = `rgba(34, 211, 238, ${d.alpha})`;
      ctx.lineWidth = d.width;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x - 0.4, d.y + d.len);
      ctx.stroke();
    }
    requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}
