document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elementsToAnimate = document.querySelectorAll('.fade-in');
  elementsToAnimate.forEach(el => observer.observe(el));

  // Navbar background effect on scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(11, 15, 25, 0.9)';
      navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
    } else {
      navbar.style.background = 'rgba(30, 41, 59, 0.7)';
      navbar.style.boxShadow = 'none';
    }
  });

  // Dynamic Blob Tracking (subtle mouse follow)
  const blob1 = document.querySelector('.blob-1');
  const blob2 = document.querySelector('.blob-2');
  
  if (blob1 && blob2) {
    document.addEventListener('mousemove', (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      blob1.style.transform = `translate(${x * 50}px, ${y * 50}px) scale(1.1)`;
      blob2.style.transform = `translate(${-x * 50}px, ${-y * 50}px) scale(0.9)`;
    });
  }
});
