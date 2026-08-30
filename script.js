// ===== Mobile nav toggle =====
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.classList.toggle('open', isOpen);
  menuToggle.setAttribute('aria-expanded', isOpen);
});

// close mobile nav after clicking a link
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});





function typeLoop() {
  const current = statuses[statusIndex];

  if (!deleting) {
    charIndex++;
    typedEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    charIndex--;
    typedEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      statusIndex = (statusIndex + 1) % statuses.length;
    }
  }
  setTimeout(typeLoop, deleting ? 35 : 55);
}
  
  
// ===== Zoom In when text enters screen =====

const revealElements = document.querySelectorAll('.scroll-reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const el = entry.target;

      el.classList.add(
        'animate__animated',
        'animate__zoomIn'
      );

      observer.unobserve(el);
    }
  });
}, {
  threshold: 0.3
});

revealElements.forEach((el) => {
  revealObserver.observe(el);
});

// ===== Bounce In Up when text enters screen =====
const bounceElements = document.querySelectorAll('.bounce-up');

const bounceObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const el = entry.target;

      el.classList.add(
        'animate__animated',
        'animate__bounceInUp'
      );

      observer.unobserve(el);
    }
  });
}, {
  threshold: 0.3
});

bounceElements.forEach((el) => {
  bounceObserver.observe(el);
});