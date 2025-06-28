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




const swiper = new Swiper('.mySwiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto', // Allows slides to have different widths
    coverflowEffect: {
        rotate: 0, // No rotation
        stretch: 0, // No stretching
        depth: 100, // Depth between slides
        modifier: 2, // Effect multiplier
        slideShadows: true, // Enable shadows
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        // Adjust settings for different screen sizes
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 'auto',
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 'auto',
            spaceBetween: 50,
        },
    }
});


function handleBack() {
  const transition = document.getElementById("pageTransition");
  transition.classList.remove("hide");

  setTimeout(() => {
    if (history.length > 1) {
      history.back();
    } else {
      window.location.href = "/"; // or your homepage path
    }
  }, 500);
}


