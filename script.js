/* =========================================================
   ANMOL DIGITAL POINT — CONTENT DATA
   Yahan se services, notices, gallery, reviews, shop info edit karo
   ========================================================= */

const SHOP = {
  name: "Anmol Digital Point",
  phone: "6207120625",
  phoneDisplay: "+91 62071 20625",
  whatsappNumber: "916207120625",
  whatsappChannel: "https://whatsapp.com/channel/0029Va5tM43KwqSYrnKWs532",
  instagram: "https://www.instagram.com/akelatechnical?igsh=Zm9zeGZuMXFieTcz",
  youtube: "https://www.youtube.com/@akelatechnical1",
  facebook: "",
  upiId: "6207120625@ybl",
  upiName: "Anmol Pandey",
  address: "Anmol Digital Point, Main Road, Rupow Nawada, Nare Charaul Gate Ke Samne, Nawada, Bihar - 805106"
};

const SERVICES = [
  { icon: "fa-fingerprint", name: "Aadhaar Services", link: "https://uidai.gov.in/" },
  { icon: "fa-id-card", name: "PAN Card", link: "https://www.onlineservices.proteantech.in/paam/endUserRegisterContact.html" },
  { icon: "fa-check-to-slot", name: "Voter ID", link: "https://voters.eci.gov.in/" },
  { icon: "fa-baby", name: "Birth Certificate", link: "https://crsorgi.gov.in/" },
  { icon: "fa-file-circle-exclamation", name: "Death Certificate", link: "https://crsorgi.gov.in/" },
  { icon: "fa-wheat-awn", name: "Ration Card", link: "https://epds.bihar.gov.in/" },
  { icon: "fa-notes-medical", name: "Ayushman Card", link: "https://pmjay.gov.in/" },
  { icon: "fa-passport", name: "Passport Services", link: "https://www.passportindia.gov.in/" },
  { icon: "fa-file-invoice-dollar", name: "Income Cert.", link: "https://serviceonline.bihar.gov.in/" },
  { icon: "fa-people-roof", name: "Caste Cert.", link: "https://serviceonline.bihar.gov.in/" },
  { icon: "fa-house-user", name: "Residence Cert.", link: "https://serviceonline.bihar.gov.in/" },
  { icon: "fa-mobile-screen", name: "Mobile Unlock", link: null },
  { icon: "fa-bolt", name: "Mobile Flashing", link: null },
  { icon: "fa-camera", name: "Passport Photo", link: null },
  { icon: "fa-print", name: "Color Print", link: null },
  { icon: "fa-scanner-image", name: "Scan / Xerox", link: null },
  { icon: "fa-layer-group", name: "Lamination", link: null },
  { icon: "fa-file-pen", name: "Online Form Filling", link: null },
  { icon: "fa-credit-card", name: "UPI Payment", link: "#payment" },
  { icon: "fa-ellipsis", name: "And Many More", link: "https://wa.me/" + SHOP.whatsappNumber }
];

const NOTICES = [
  { tag: "NEW", text: "New Service Available!", date: "25/07/2026" },
  { tag: "INFO", text: "Server Maintenance on 28 July", date: "22/07/2026" },
  { tag: "NOTICE", text: "Aadhaar Update Service Available", date: "20/07/2026" },
  { tag: "OFFER", text: "Special Discount on Lamination", date: "18/07/2026" }
];

const TICKER_ITEMS = [
  "🆕 New Service Available!",
  "🛠️ Server Maintenance on 28 July",
  "📢 Aadhaar Update Service Available",
  "🎉 Special Discount on Lamination",
  "📞 Booking ke liye Call/WhatsApp karein: " + SHOP.phoneDisplay
];

const GALLERY_COUNT = 6;

const REVIEWS = [
  { name: "Rohit Kumar", stars: 5, text: "Bahut accha service, kaam turant ho gaya." },
  { name: "Pooja Singh", stars: 5, text: "Staff bahut helpful hai, rate bhi sahi hai." },
  { name: "Amit Verma", stars: 4, text: "Best digital service center in the area." }
];

/* Tools shown in the "Free Online Tools" section */
const TOOLS = [
  { id: "img2pdf", icon: "fa-file-pdf", name: "Image to PDF", desc: "Photos ko ek PDF file me convert karein" },
  { id: "pdf2img", icon: "fa-file-image", name: "PDF to Image", desc: "PDF ke pages ko JPG image me badlein" },
  { id: "resize", icon: "fa-crop-simple", name: "Image Resizer", desc: "Image ka size/dimension kam-zyada karein" },
  { id: "compress", icon: "fa-file-zipper", name: "PDF Compressor", desc: "PDF file ka size chhota karein" },
  { id: "bgremove", icon: "fa-wand-magic-sparkles", name: "Background Remover", desc: "Photo ka background hataayein" }
];

/* =========================================================
   RENDER FUNCTIONS
   ========================================================= */

function renderServices() {
  const grid = document.getElementById("servicesGrid");
  grid.innerHTML = SERVICES.map(s => `
    <div class="service-item" data-link="${s.link ? s.link : ""}" tabindex="0" role="button" aria-label="${s.name}">
      <div class="icon-3d"><i class="fa-solid ${s.icon}"></i></div>
      <p>${s.name}</p>
      ${s.link ? '<span class="official-tag">Official Site</span>' : '<span class="official-tag shop">Shop Service</span>'}
    </div>
  `).join("");

  grid.querySelectorAll(".service-item").forEach(item => {
    item.addEventListener("click", () => {
      const link = item.getAttribute("data-link");
      if (link) window.open(link, "_blank", "noopener");
    });
    item.addEventListener("keypress", (e) => {
      if (e.key === "Enter") item.click();
    });
  });
}

function renderNotices() {
  const list = document.getElementById("noticeList");
  list.innerHTML = NOTICES.map(n => `
    <li><span><span class="notice-tag">${n.tag}</span>${n.text}</span><span>${n.date}</span></li>
  `).join("");
}

function renderTicker() {
  const track = document.getElementById("tickerTrack");
  const items = TICKER_ITEMS.map(t => `<span class="ticker-item">${t}</span>`).join('<span class="ticker-sep">•</span>');
  /* duplicate content for seamless infinite scroll */
  track.innerHTML = items + '<span class="ticker-sep">•</span>' + items;
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

function renderPaymentInfo() {
  document.getElementById("upiIdText").textContent = SHOP.upiId;
  document.getElementById("shopAddrText").textContent = SHOP.address;
  document.getElementById("shopPhoneText").textContent = SHOP.phoneDisplay;
}

function renderTools() {
  const grid = document.getElementById("toolsGrid");
  grid.innerHTML = TOOLS.map(t => `
    <div class="tool-card" data-tool="${t.id}" tabindex="0" role="button">
      <div class="icon-3d tool-icon"><i class="fa-solid ${t.icon}"></i></div>
      <h4>${t.name}</h4>
      <p>${t.desc}</p>
    </div>
  `).join("");
  grid.querySelectorAll(".tool-card").forEach(card => {
    card.addEventListener("click", () => openTool(card.getAttribute("data-tool")));
    card.addEventListener("keypress", (e) => { if (e.key === "Enter") card.click(); });
  });
}

function renderSocialLinks() {
  const wrap = document.getElementById("footerSocial");
  const links = [];
  if (SHOP.facebook) links.push({ url: SHOP.facebook, icon: "fa-facebook" });
  links.push({ url: SHOP.instagram, icon: "fa-instagram" });
  links.push({ url: SHOP.youtube, icon: "fa-youtube" });
  links.push({ url: SHOP.whatsappChannel, icon: "fa-whatsapp" });
  wrap.innerHTML = links.map(l => `<a href="${l.url}" target="_blank" rel="noopener"><i class="fa-brands ${l.icon}"></i></a>`).join("");

  /* header/hero/footer contact buttons */
  document.querySelectorAll("[data-role='call-btn']").forEach(el => el.href = "tel:+91" + SHOP.phone);
  document.querySelectorAll("[data-role='whatsapp-btn']").forEach(el => el.href = "https://wa.me/" + SHOP.whatsappNumber);
}

/* =========================================================
   INTERACTIONS — nav, ticker pause, scroll spy
   ========================================================= */

function setupMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("mainNav");
  hamburger.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
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
   TOOL MODAL — shared open/close
   ========================================================= */

const modal = () => document.getElementById("toolModal");
const modalBody = () => document.getElementById("toolModalBody");
const modalTitle = () => document.getElementById("toolModalTitle");

function closeTool() {
  modal().classList.remove("open");
  modalBody().innerHTML = "";
  /* revoke any object URLs to free memory */
  (window.__toolObjectUrls || []).forEach(u => URL.revokeObjectURL(u));
  window.__toolObjectUrls = [];
}

function trackUrl(url) {
  window.__toolObjectUrls = window.__toolObjectUrls || [];
  window.__toolObjectUrls.push(url);
  return url;
}

function openTool(id) {
  const tool = TOOLS.find(t => t.id === id);
  modalTitle().textContent = tool.name;
  modal().classList.add("open");
  if (id === "img2pdf") buildImageToPdf();
  if (id === "pdf2img") buildPdfToImage();
  if (id === "resize") buildImageResizer();
  if (id === "compress") buildPdfCompressor();
  if (id === "bgremove") buildBgRemover();
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("toolModalClose").addEventListener("click", closeTool);
  modal().addEventListener("click", (e) => { if (e.target === modal()) closeTool(); });
});

/* =========================================================
   TOOL 1 — IMAGE(S) TO PDF  (uses jsPDF)
   ========================================================= */

function buildImageToPdf() {
  modalBody().innerHTML = `
    <p class="tool-help">Ek ya zyada images select karein, wo automatically order me PDF ban jayengi.</p>
    <input type="file" id="i2pFiles" accept="image/*" multiple class="tool-input">
    <div id="i2pPreview" class="tool-preview-grid"></div>
    <button id="i2pRun" class="btn btn-primary full" disabled><i class="fa-solid fa-file-pdf"></i> Convert to PDF</button>
    <div id="i2pResult" class="tool-result"></div>
  `;
  let files = [];
  const preview = document.getElementById("i2pPreview");
  const runBtn = document.getElementById("i2pRun");

  document.getElementById("i2pFiles").addEventListener("change", (e) => {
    files = Array.from(e.target.files);
    preview.innerHTML = "";
    files.forEach(f => {
      const url = trackUrl(URL.createObjectURL(f));
      preview.insertAdjacentHTML("beforeend", `<div class="thumb"><img src="${url}" alt="${f.name}"></div>`);
    });
    runBtn.disabled = files.length === 0;
  });

  runBtn.addEventListener("click", async () => {
    runBtn.disabled = true;
    runBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Converting...';
    try {
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF({ unit: "pt", format: "a4" });
      for (let i = 0; i < files.length; i++) {
        const dataUrl = await fileToDataUrl(files[i]);
        const dims = await getImageDims(dataUrl);
        const pageW = pdf.internal.pageSize.getWidth();
        const pageH = pdf.internal.pageSize.getHeight();
        const ratio = Math.min(pageW / dims.w, pageH / dims.h);
        const w = dims.w * ratio, h = dims.h * ratio;
        if (i > 0) pdf.addPage();
        pdf.addImage(dataUrl, "JPEG", (pageW - w) / 2, (pageH - h) / 2, w, h);
      }
      const blob = pdf.output("blob");
      const url = trackUrl(URL.createObjectURL(blob));
      document.getElementById("i2pResult").innerHTML =
        `<a href="${url}" download="anmol-digital-point.pdf" class="btn btn-whatsapp full"><i class="fa-solid fa-download"></i> Download PDF</a>`;
    } catch (err) {
      document.getElementById("i2pResult").innerHTML = `<p class="tool-error">Kuch galat ho gaya, dobara try karein.</p>`;
    }
    runBtn.disabled = false;
    runBtn.innerHTML = '<i class="fa-solid fa-file-pdf"></i> Convert to PDF';
  });
}

/* =========================================================
   TOOL 2 — PDF TO IMAGE  (uses pdf.js)
   ========================================================= */

function buildPdfToImage() {
  modalBody().innerHTML = `
    <p class="tool-help">PDF file select karein, har page ki JPG image ban jayegi.</p>
    <input type="file" id="p2iFile" accept="application/pdf" class="tool-input">
    <div id="p2iStatus" class="tool-help"></div>
    <div id="p2iResult" class="tool-preview-grid"></div>
  `;
  document.getElementById("p2iFile").addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const status = document.getElementById("p2iStatus");
    const result = document.getElementById("p2iResult");
    result.innerHTML = "";
    status.textContent = "PDF load ho raha hai...";
    try {
      if (!window.pdfjsLib) throw new Error("pdfjs not loaded");
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
      const buf = await file.arrayBuffer();
      const pdf = await window.pdfjsLib.getDocument({ data: buf }).promise;
      status.textContent = `${pdf.numPages} page mil gaye, images bana rahe hain...`;
      for (let p = 1; p <= pdf.numPages; p++) {
        const page = await pdf.getPage(p);
        const viewport = page.getViewport({ scale: 2 });
        const canvas = document.createElement("canvas");
        canvas.width = viewport.width; canvas.height = viewport.height;
        await page.render({ canvasContext: canvas.getContext("2d"), viewport }).promise;
        const url = trackUrl(canvas.toDataURL("image/jpeg", 0.92));
        result.insertAdjacentHTML("beforeend", `
          <div class="thumb">
            <img src="${url}" alt="page ${p}">
            <a href="${url}" download="page-${p}.jpg" class="btn btn-primary small full"><i class="fa-solid fa-download"></i> Page ${p}</a>
          </div>`);
      }
      status.textContent = "Ho gaya! Neeche se har page download karein.";
    } catch (err) {
      status.textContent = "PDF read nahi ho paayi. Dobara try karein (internet zaroor on rakhein).";
    }
  });
}

/* =========================================================
   TOOL 3 — IMAGE RESIZER (canvas)
   ========================================================= */

function buildImageResizer() {
  modalBody().innerHTML = `
    <p class="tool-help">Image select karein aur naya width/height set karein.</p>
    <input type="file" id="rzFile" accept="image/*" class="tool-input">
    <div class="tool-row">
      <label>Width (px) <input type="number" id="rzW" placeholder="Width"></label>
      <label>Height (px) <input type="number" id="rzH" placeholder="Height"></label>
    </div>
    <label class="tool-check"><input type="checkbox" id="rzLock" checked> Aspect ratio lock rakhein</label>
    <div id="rzPreview" class="tool-preview-grid"></div>
    <button id="rzRun" class="btn btn-primary full" disabled><i class="fa-solid fa-crop-simple"></i> Resize karein</button>
    <div id="rzResult" class="tool-result"></div>
  `;
  let img = new Image();
  let origW = 0, origH = 0;
  const wInput = document.getElementById("rzW");
  const hInput = document.getElementById("rzH");
  const lockBox = document.getElementById("rzLock");
  const runBtn = document.getElementById("rzRun");

  document.getElementById("rzFile").addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const dataUrl = await fileToDataUrl(file);
    img = new Image();
    img.onload = () => {
      origW = img.width; origH = img.height;
      wInput.value = origW; hInput.value = origH;
      document.getElementById("rzPreview").innerHTML = `<div class="thumb"><img src="${dataUrl}"></div>`;
      runBtn.disabled = false;
    };
    img.src = dataUrl;
  });

  wInput.addEventListener("input", () => {
    if (lockBox.checked && origW) hInput.value = Math.round((wInput.value / origW) * origH);
  });
  hInput.addEventListener("input", () => {
    if (lockBox.checked && origH) wInput.value = Math.round((hInput.value / origH) * origW);
  });

  runBtn.addEventListener("click", () => {
    const w = parseInt(wInput.value) || origW;
    const h = parseInt(hInput.value) || origH;
    const canvas = document.createElement("canvas");
    canvas.width = w; canvas.height = h;
    canvas.getContext("2d").drawImage(img, 0, 0, w, h);
    const url = trackUrl(canvas.toDataURL("image/jpeg", 0.92));
    document.getElementById("rzResult").innerHTML =
      `<a href="${url}" download="resized-image.jpg" class="btn btn-whatsapp full"><i class="fa-solid fa-download"></i> Download Resized Image (${w}×${h})</a>`;
  });
}

/* =========================================================
   TOOL 4 — PDF COMPRESSOR (pdf.js render -> jsPDF rebuild)
   ========================================================= */

function buildPdfCompressor() {
  modalBody().innerHTML = `
    <p class="tool-help">PDF file select karein aur quality choose karein — file ka size kam ho jayega.</p>
    <input type="file" id="cpFile" accept="application/pdf" class="tool-input">
    <label>Quality
      <select id="cpQuality" class="tool-input">
        <option value="0.4">Low (sabse chhoti size)</option>
        <option value="0.65" selected>Medium (recommended)</option>
        <option value="0.85">High (behtar quality)</option>
      </select>
    </label>
    <button id="cpRun" class="btn btn-primary full" disabled><i class="fa-solid fa-file-zipper"></i> Compress PDF</button>
    <div id="cpStatus" class="tool-help"></div>
    <div id="cpResult" class="tool-result"></div>
  `;
  let file = null;
  document.getElementById("cpFile").addEventListener("change", (e) => {
    file = e.target.files[0];
    document.getElementById("cpRun").disabled = !file;
  });

  document.getElementById("cpRun").addEventListener("click", async () => {
    const status = document.getElementById("cpStatus");
    const runBtn = document.getElementById("cpRun");
    const quality = parseFloat(document.getElementById("cpQuality").value);
    runBtn.disabled = true;
    status.textContent = "Compress ho raha hai, thoda intezaar karein...";
    try {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
      const buf = await file.arrayBuffer();
      const originalSize = file.size;
      const pdfDoc = await window.pdfjsLib.getDocument({ data: buf }).promise;
      const { jsPDF } = window.jspdf;
      let outPdf;
      for (let p = 1; p <= pdfDoc.numPages; p++) {
        const page = await pdfDoc.getPage(p);
        const viewport = page.getViewport({ scale: 1.3 });
        const canvas = document.createElement("canvas");
        canvas.width = viewport.width; canvas.height = viewport.height;
        await page.render({ canvasContext: canvas.getContext("2d"), viewport }).promise;
        const imgData = canvas.toDataURL("image/jpeg", quality);
        const orient = viewport.width > viewport.height ? "l" : "p";
        if (p === 1) {
          outPdf = new jsPDF({ orientation: orient, unit: "pt", format: [viewport.width, viewport.height] });
        } else {
          outPdf.addPage([viewport.width, viewport.height], orient);
        }
        outPdf.addImage(imgData, "JPEG", 0, 0, viewport.width, viewport.height);
      }
      const blob = outPdf.output("blob");
      const url = trackUrl(URL.createObjectURL(blob));
      const savedPct = Math.max(0, Math.round((1 - blob.size / originalSize) * 100));
      status.textContent = `Original: ${(originalSize/1024).toFixed(0)} KB → Naya: ${(blob.size/1024).toFixed(0)} KB (~${savedPct}% kam)`;
      document.getElementById("cpResult").innerHTML =
        `<a href="${url}" download="compressed.pdf" class="btn btn-whatsapp full"><i class="fa-solid fa-download"></i> Download Compressed PDF</a>`;
    } catch (err) {
      status.textContent = "Compress nahi ho paaya. Dobara try karein.";
    }
    runBtn.disabled = false;
  });
}

/* =========================================================
   TOOL 5 — BACKGROUND REMOVER (@imgly/background-removal via CDN module)
   ========================================================= */

function buildBgRemover() {
  modalBody().innerHTML = `
    <p class="tool-help">Photo select karein — background automatically hat jayega (AI). Pehli baar internet chahiye.</p>
    <input type="file" id="bgFile" accept="image/*" class="tool-input">
    <div id="bgPreview" class="tool-preview-grid"></div>
    <button id="bgRun" class="btn btn-primary full" disabled><i class="fa-solid fa-wand-magic-sparkles"></i> Background Remove Karein</button>
    <div id="bgStatus" class="tool-help"></div>
    <div id="bgResult" class="tool-result"></div>
  `;
  let file = null;
  document.getElementById("bgFile").addEventListener("change", async (e) => {
    file = e.target.files[0];
    if (!file) return;
    const url = trackUrl(URL.createObjectURL(file));
    document.getElementById("bgPreview").innerHTML = `<div class="thumb"><img src="${url}"></div>`;
    document.getElementById("bgRun").disabled = false;
  });

  document.getElementById("bgRun").addEventListener("click", async () => {
    const status = document.getElementById("bgStatus");
    const runBtn = document.getElementById("bgRun");
    runBtn.disabled = true;
    status.textContent = "AI background hata raha hai, thoda time lagega...";
    try {
      if (!window.__removeBackground) throw new Error("library not ready");
      const blob = await window.__removeBackground(file);
      const url = trackUrl(URL.createObjectURL(blob));
      document.getElementById("bgResult").innerHTML = `
        <div class="thumb checker"><img src="${url}"></div>
        <a href="${url}" download="no-background.png" class="btn btn-whatsapp full"><i class="fa-solid fa-download"></i> Download PNG</a>`;
      status.textContent = "Ho gaya!";
    } catch (err) {
      status.textContent = "Background remove nahi ho paaya. Internet check karke dobara try karein.";
    }
    runBtn.disabled = false;
  });
}

/* =========================================================
   HELPERS
   ========================================================= */

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function getImageDims(dataUrl) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve({ w: img.width, h: img.height });
    img.src = dataUrl;
  });
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  renderNotices();
  renderTicker();
  renderGallery();
  renderReviews();
  renderPaymentInfo();
  renderTools();
  renderSocialLinks();
  setupMobileMenu();
  setupActiveNavOnScroll();
});
