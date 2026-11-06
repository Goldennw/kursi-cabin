// 1. WhatsApp Redirection (2 Nomor Admin)
const WA_ADMIN_1 = "6287894642595";
const WA_ADMIN_2 = "6287830313422";

let currentWAMessage =
  "Halo Admin, saya ingin reservasi/tanya info mengenai Kursi Cabin Glamping.";

// Fungsi Membuka Pop-Up Pilihan Admin WA
function openWAModal(customMessage) {
  if (customMessage) {
    currentWAMessage = customMessage;
  }
  document.getElementById("waModal").style.display = "flex";
}

// Fungsi Menutup Pop-Up WA
function closeWAModal() {
  document.getElementById("waModal").style.display = "none";
}

// Menutup Pop-Up saat area di luar modal diklik
function closeWAModalOnOutside(event) {
  if (event.target.id === "waModal") {
    closeWAModal();
  }
}

// Menghubungi Admin WA yang dipilih
function contactAdmin(phoneNumber) {
  const encodedMessage = encodeURIComponent(currentWAMessage);
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(waUrl, "_blank");
  closeWAModal();
}

// 2. Sticky Navbar Effect on Scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "0 10px 25px -5px rgba(45, 90, 39, 0.15)";
      navbar.style.padding = "14px 0";
    } else {
      navbar.style.boxShadow = "none";
      navbar.style.padding = "20px 0";
    }
  }
});

// 3. Responsive Mobile Menu Toggle
const mobileToggle = document.getElementById("mobile-toggle");
const navMenu = document.getElementById("nav-menu");

if (mobileToggle) {
  mobileToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const icon = mobileToggle.querySelector("i");
    if (navMenu.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });
}

// 4. FAQ Accordion Collapse
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const icon = header.querySelector("i");

    if (content.style.display === "block") {
      content.style.display = "none";
      icon.style.transform = "rotate(0deg)";
    } else {
      document
        .querySelectorAll(".accordion-content")
        .forEach((c) => (c.style.display = "none"));
      document
        .querySelectorAll(".accordion-header i")
        .forEach((i) => (i.style.transform = "rotate(0deg)"));

      content.style.display = "block";
      icon.style.transform = "rotate(180deg)";
    }
  });
});

// 5. Gallery Lightbox Modal Zoom
function openLightbox(imageSrc) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  if (lightbox && lightboxImg) {
    lightboxImg.src = imageSrc;
    lightbox.style.display = "flex";
  }
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.style.display = "none";
  }
}

// 6. Gallery Filtering System
const filterBtns = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filterValue = btn.getAttribute("data-filter");

    galleryItems.forEach((item) => {
      if (filterValue === "all" || item.classList.contains(filterValue)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
