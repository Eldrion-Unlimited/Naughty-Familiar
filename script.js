// === Smooth Scroll for Internal Links (future-proofing) ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// === Reveal Sections on Scroll ===
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.section-box').forEach(section => {
  observer.observe(section);
});

// === Optional: Witch Laugh on Button Hover ===
const laughAudio = new Audio('laugh.mp3');

document.querySelectorAll('.btn').forEach(button => {
  const playLaugh = () => {
    laughAudio.pause();
    laughAudio.currentTime = 0;
    laughAudio.play();
  };

  button.addEventListener('mouseenter', playLaugh);
  button.addEventListener('click', playLaugh);
});
