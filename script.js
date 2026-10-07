// DARK / LIGHT MODE TOGGLE (LEVER)
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
  themeToggle.checked = true;
}

themeToggle.addEventListener("change", () => {
  const isDark = themeToggle.checked;
  body.classList.toggle("dark", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// HAMBURGER MENU (MOBILE)
const hamburger = document.getElementById("hamburger");
const navRight = document.getElementById("navRight");

hamburger.addEventListener("click", () => {
  navRight.classList.toggle("active");
});

// MOOTH SCROLL SAAT KLIK MENU NAVBAR
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    navRight.classList.remove("active");
  });
});

// TAHUN OTOMATIS DI FOOTER
document.getElementById("year").textContent = new Date().getFullYear();

// INISIALISASI AOS
AOS.init({
  duration: 800,
  once: true,
});

// SCROLL SPY: highlight menu navbar sesuai section yang aktif
const sections = document.querySelectorAll("section[id]");
const navLinkEls = document.querySelectorAll(".nav-link");

const spyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinkEls.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${id}`,
          );
        });
      }
    });
  },
  {
    // section dianggap "aktif" saat berada di area tengah layar
    rootMargin: "-40% 0px -50% 0px",
    threshold: 0,
  },
);

sections.forEach((section) => spyObserver.observe(section));
