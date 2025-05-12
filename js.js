const carousel = document.getElementById('carousel');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  let index = 0;

  function showSlide(i) {
    const slides = document.querySelectorAll('.testimonial');
    const total = slides.length;
    index = (i + total) % total;
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  prevBtn.addEventListener('click', () => {
    showSlide(index - 1);
  });

  nextBtn.addEventListener('click', () => {
    showSlide(index + 1);
  });

  // Optional: auto-slide every 5 seconds
  setInterval(() => {
    showSlide(index + 1);
  }, 5000);