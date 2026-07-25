/* =========================================================
   ANMOL DIGITAL POINT — CONTENT DATA
   Yahan se services, notices, gallery, reviews edit karo
   ========================================================= */

const SERVICES = [
  { icon: "fa-fingerprint", name: "Aadhaar Services" },
  { icon: "fa-id-card", name: "PAN Card" },
  { icon: "fa-check-to-slot", name: "Voter ID" },
  { icon: "fa-baby", name: "Birth Certificate" },
  { icon: "fa-file-circle-exclamation", name: "Death Certificate" },
  { icon: "fa-wheat-awn", name: "Ration Card" },
  { icon: "fa-tractor", name: "Ayushman Card" },
  { icon: "fa-passport", name: "Passport Services" },
  { icon: "fa-file-invoice-dollar", name: "Income Cert." },
  { icon: "fa-people-roof", name: "Caste Cert." },
  { icon: "fa-house-user", name: "Residence Cert." },
  { icon: "fa-mobile-screen", name: "Mobile Unlock" },
  { icon: "fa-bolt", name: "Mobile Flashing" },
  { icon: "fa-camera", name: "Passport Photo" },
  { icon: "fa-print", name: "Color Print" },
  { icon: "fa-scanner-image", name: "Scan / Xerox" },
  { icon: "fa-layer-group", name: "Lamination" },
  { icon: "fa-file-pen", name: "Online Form Filling" },
  { icon: "fa-credit-card", name: "UPI Payment" },
  { icon: "fa-ellipsis", name: "And Many More" }
];

const NOTICES = [
  { tag: "NEW", text: "New Service Available!", date: "25/07/2026" },
  { tag: "INFO", text: "Server Maintenance on 28 July", date: "22/07/2026" },
  { tag: "NOTICE", text: "Aadhaar Update Service Available", date: "20/07/2026" },
  { tag: "OFFER", text: "Special Discount on Lamination", date: "18/07/2026" }
];

const GALLERY_COUNT = 6;

const REVIEWS = [
  { name: "Rohit Kumar", stars: 5, text: "Bahut accha service, kaam turant ho gaya." },
  { name: "Pooja Singh", stars: 5, text: "Staff bahut helpful hai, rate bhi sahi hai." },
  { name: "Amit Verma", stars: 4, text: "Best digital service center in the area." }
];

/* =========================================================
   RENDER FUNCTIONS
   ========================================================= */

function renderServices() {
  const grid = document.getElementById("servicesGrid");
  grid.innerHTML = SERVICES.map(s => `
    <div class="service-item">
      <i class="fa-solid ${s.icon}"></i>
      <p>${s.name}</p>
    </div>
  `).join("");
}

function renderNotices() {
  const list = document.getElementById("noticeList");
  list.innerHTML = NOTICES.map(n => `
    <li><span><span class="notice-tag">${n.tag}</span>${n.text}</span><span>${n.date}</span></li>
  `).join("");
}

function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  let html = "";
  for (let i = 1; i <= GALLERY_COUNT; i++) {
    html += `<div class="gallery-item"><i class="fa-solid fa-image"></i></div>`;
  }
  grid.innerHTML = html;
}

function renderReviews() {
  const list = document.getElementById("reviewsList");
  list.innerHTML = REVIEWS.map(r => `
    <div class="review">
      <p>${r.name}</p>
      <div class="stars">${"★".repeat(r.stars)}${"☆".repeat(5 - r.stars)}</div>
      <span>${r.text}</span>
    </div>
  `).join("");
}

/* =========================================================
   INTERACTIONS
   ========================================================= */

function setupMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("mainNav");
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => nav.classList.remove("open"));
  });
}

function setupActiveNavOnScroll() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".main-nav a, .bottom-nav a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
      const top = sec.offsetTop - 90;
      if (window.scrollY >= top) current = sec.getAttribute("id");
    });
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) link.classList.add("active");
    });
  });
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  renderNotices();
  renderGallery();
  renderReviews();
  setupMobileMenu();
  setupActiveNavOnScroll();
});
