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


document.addEventListener("DOMContentLoaded", () => {
  const tiles = document.querySelectorAll(".project-tile");
  const transition = document.getElementById("pageTransition");

  tiles.forEach(tile => {
    tile.addEventListener("click", (e) => {
      e.preventDefault();
      const link = tile.getAttribute("data-link");
      transition.classList.add("active");

      setTimeout(() => {
        window.location.href = link;
      }, 700);
    });
  });
});


const fadeElements = document.querySelectorAll('.scroll-fade');

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.2,
});

fadeElements.forEach(el => observer1.observe(el));




const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 3, // important for fixed slide width
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 30,
    stretch: -10,     // slightly overlap slides
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});

