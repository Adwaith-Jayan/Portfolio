const items = document.querySelectorAll('.language-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Reveal only if it's not already visible
      if (!entry.target.classList.contains('visible')) {
        entry.target.classList.add('visible');
      }
    } else {
      // Remove visibility when out of view
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.9 // Item must be ~90% visible to trigger
});

items.forEach(item => observer.observe(item));
