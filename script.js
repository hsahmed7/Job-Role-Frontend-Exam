// ----------------------------
// Mobile sidebar toggle
// ----------------------------
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

if (menuBtn && sidebar) {
  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
}

// Close sidebar after clicking a link (mobile UX)
document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", () => {
    sidebar?.classList.remove("open");
  });
});

// ----------------------------
// Active nav auto-detection
// ----------------------------
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-item").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

// ----------------------------
// Save / Unsave job
// ----------------------------
document.querySelectorAll(".save-job").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("saved");
    btn.textContent = btn.classList.contains("saved")
      ? "★ Saved"
      : "☆ Save Job";
  });
});

// ----------------------------
// Apply button feedback
// ----------------------------
document.querySelectorAll(".apply-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    showToast("Application submitted successfully!");
  });
});

// ----------------------------
// Toast message helper
// ----------------------------
function showToast(message) {
  let toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 50);
  setTimeout(() => {
    toast.classList.remove("show");
    toast.remove();
  }, 2500);
}

// ----------------------------
// Smooth scroll for anchors
// ----------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      ?.scrollIntoView({ behavior: "smooth" });
  });
});
