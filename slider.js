const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Show the first slide 
showSlide(currentIndex);

// Change slide every 4 seconds
setInterval(nextSlide, 4000);

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);

    const text = slide.querySelector('.hero-text');
    if (text) {
      text.classList.remove('animate');      // Remove animation class
      void text.offsetWidth;                 // Force reflow to reset animation
      text.classList.add('animate');         // Re-add animation class
    }
  });
}


  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-text');
      } else {
        entry.target.classList.remove('animate-text');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-text').forEach(el => {
    el.classList.remove('animate-text'); // Start with it hidden
    observer.observe(el);
  });


