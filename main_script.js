
const header = document.getElementById("site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("bg-white/95", "shadow-lg", "backdrop-blur");
    header.classList.remove("bg-transparent");
    header.querySelectorAll("a, i").forEach(el => {
      el.classList.remove("text-white", "text-white/90", "hover:text-white");
      el.classList.add("text-gray-800", "hover:text-yellow-500"); // İstersen hover sarı olsun
    });
  } else {
    header.classList.remove("bg-white/95", "shadow-lg", "backdrop-blur");
    header.classList.add("bg-transparent");
    header.querySelectorAll("a, i").forEach(el => {
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
    document.addEventListener('DOMContentLoaded', function() {
        // Initialize AOS
        AOS.init({
        duration: 1000,
        once: true,
        offset: 100
        });
        // Mobile menu
        const mobileMenuButton = document.querySelector('.mobile-menu-button');
        const mobileMenu = document.querySelector('.mobile-menu');
        mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        });
        const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
        mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        });
        });
        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
        });
        });
        });
        });