document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  // About section photo slideshow — add/remove filenames here to change slides
  const slideImages = [
    'assets/img/about-slideshow/slide-1.jpg',
    'assets/img/about-slideshow/slide-2.jpg',
  ];

  const slideshow = document.getElementById('aboutSlideshow');
  if (slideshow && slideImages.length) {
    slideImages.forEach((src, i) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = 'Valsamis personnel at work';
      img.className = 'slide' + (i === 0 ? ' active' : '');
      slideshow.appendChild(img);
    });

    let dots = [];
    if (slideImages.length > 1) {
      const dotsWrap = document.createElement('div');
      dotsWrap.className = 'slideshow-dots';
      slideImages.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Show slide ${i + 1}`);
        dot.addEventListener('click', () => goToSlide(i));
        dotsWrap.appendChild(dot);
      });
      slideshow.appendChild(dotsWrap);
      dots = Array.from(dotsWrap.children);
    }

    const slides = Array.from(slideshow.querySelectorAll('.slide'));
    let current = 0;
    let timer;

    function goToSlide(index) {
      slides[current].classList.remove('active');
      dots[current] && dots[current].classList.remove('active');
      current = index;
      slides[current].classList.add('active');
      dots[current] && dots[current].classList.add('active');
    }

    function nextSlide() {
      goToSlide((current + 1) % slides.length);
    }

    function startAutoplay() {
      if (slides.length > 1) timer = setInterval(nextSlide, 4000);
    }
    function stopAutoplay() {
      clearInterval(timer);
    }

    startAutoplay();
    slideshow.addEventListener('mouseenter', stopAutoplay);
    slideshow.addEventListener('mouseleave', startAutoplay);
  }
});
