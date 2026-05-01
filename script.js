document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = menuToggle.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }

  // Active Link Highlighting
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navItems = document.querySelectorAll('.nav-links a');
  
  navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (href === currentPath) {
      item.classList.add('active');
    }
  });

  // Modal Functionality for Resume/Certificates
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const closeModalBtn = document.querySelector('.close-modal');
  const viewBtns = document.querySelectorAll('.view-image-btn');

  if (modal && modalImg && closeModalBtn) {
    viewBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const imgSrc = btn.getAttribute('data-src');
        modalImg.src = imgSrc;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
      });
    });

    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    });

    // Close on outside click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }

  // Scroll Animations (Intersection Observer)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animateElements = document.querySelectorAll('.animate-on-scroll');
  animateElements.forEach(el => observer.observe(el));
});
