/* ============================================================
   AuGustes iedvesmas dārzs — skripts
   ============================================================ */

/* ----- SEZONAS STATUSS (hero pills) ------------------------
   Aprēķinās automātiski (sezona ~23. jūlijs līdz 15. oktobris).
   Lai uzstādītu manuāli, nomaini AUTO uz "open" vai "closed":
     const OVERRIDE = "open";
     const OVERRIDE = "closed";
---------------------------------------------------------- */
const OVERRIDE = "AUTO";

function seasonStatus() {
  if (OVERRIDE !== "AUTO") return OVERRIDE;
  const now = new Date();
  const m = now.getMonth() + 1, d = now.getDate();
  const afterStart = (m > 7) || (m === 7 && d >= 23);
  const beforeEnd  = (m < 10) || (m === 10 && d <= 15);
  return (afterStart && beforeEnd) ? "open" : "closed";
}

(function applySeason() {
  const pill = document.getElementById("season-pill");
  const text = document.getElementById("season-pill-text");
  if (!pill || !text) return;
  const status = seasonStatus();
  pill.setAttribute("data-status", status);
  text.textContent = (status === "open")
    ? "Šodien atvērts 11–17"
    : "Ziemā slēgts · tiekamies vasarā";
})();

/* ----- GALERIJAS KARUSELIS ----- */
(function gallery() {
  const track = document.getElementById("gallery-track");
  const prev = document.getElementById("g-prev");
  const next = document.getElementById("g-next");
  if (!track || !prev || !next) return;
  const step = () => {
    const item = track.querySelector(".g-item");
    return item ? item.getBoundingClientRect().width + 22 : 300;
  };
  next.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
  prev.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
})();

/* ----- FAQ: rādīt visus jautājumus ----- */
(function faq() {
  const btn = document.getElementById("faq-more");
  const list = document.querySelector(".faq-list");
  if (btn && list) btn.addEventListener("click", () => list.classList.add("show-all"));
})();

/* ----- MOBILĀ IZVĒLNE ----- */
(function nav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));
})();

/* ----- GADS ----- */
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();
