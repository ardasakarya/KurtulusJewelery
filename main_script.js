document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeMenuButton = document.querySelector('.close-menu-button');
  const body = document.body;

  // Menü Aç
  mobileMenuButton.addEventListener('click', function () {
    mobileMenu.classList.remove('scale-y-0', 'opacity-0', 'pointer-events-none');
    mobileMenuButton.classList.add('hidden'); // Hamburger ikonunu gizle
    body.classList.add('overflow-hidden');    // Sayfa scroll'unu engelle
  });

  // Menü Kapat (Çarpı Tuşu)
  closeMenuButton.addEventListener('click', function () {
    mobileMenu.classList.add('scale-y-0', 'opacity-0', 'pointer-events-none');
    mobileMenuButton.classList.remove('hidden'); // Hamburger ikonunu geri göster
    body.classList.remove('overflow-hidden');    // Sayfa scroll'unu aç
  });

  // Menüdeki Linke Tıklanınca Menü Kapat
  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('scale-y-0', 'opacity-0', 'pointer-events-none');
      mobileMenuButton.classList.remove('hidden'); // Hamburger ikonunu geri göster
      body.classList.remove('overflow-hidden');    // Sayfa scroll'unu aç
    });
  });
});



document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
   
  });





const header = document.getElementById("site-header");
const mobileMenu = document.querySelector(".mobile-menu");

// Scroll olayını dinle
window.addEventListener("scroll", () => {
  // Mobil menü açıkken scroll işlemini atla
  const isMenuOpen = !mobileMenu.classList.contains("scale-y-0");

  if (isMenuOpen) return;

  if (window.scrollY > 50) {
    header.classList.add("bg-white/95", "shadow-lg", "backdrop-blur");
    header.classList.remove("bg-transparent");

    // Sadece mobile-menu dışında kalan a ve i etiketlerini seç
    header.querySelectorAll("a:not(.mobile-menu a), i:not(.mobile-menu i)").forEach(el => {
      el.classList.remove("text-white", "text-white/90", "hover:text-white");
      el.classList.add("text-gray-800", "hover:text-yellow-500");
    });

  } else {
    header.classList.remove("bg-white/95", "shadow-lg", "backdrop-blur");
    header.classList.add("bg-transparent");

    header.querySelectorAll("a:not(.mobile-menu a), i:not(.mobile-menu i)").forEach(el => {
      el.classList.remove("text-gray-800", "hover:text-yellow-500");
      el.classList.add("text-white", "hover:text-yellow-400");
    });
  }
});




tailwind.config = {
    theme: {
    extend: {
    colors: {
    primary: '#C4B08A',
    secondary: '#8A7355'
    },
    borderRadius: {
    'none': '0px',
    'sm': '4px',
    DEFAULT: '8px',
    'md': '12px',
    'lg': '16px',
    'xl': '20px',
    '2xl': '24px',
    '3xl': '32px',
    'full': '9999px',
    'button': '8px'
    }
    }
    }
    }
