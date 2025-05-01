// Get Element
const backToTopButton = document.getElementById('backToTop');
const btnToProjects = document.getElementById('btnProjects');

window.addEventListener('scroll', () => {
  const footer = document.querySelector('footer');
  const footerTop = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  const backToTopButton = document.getElementById('backToTop');

  if (footerTop <= windowHeight) {
    backToTopButton.classList.remove(
      'opacity-0',
      'translate-y-8',
      'pointer-events-none'
    );
  } else {
    backToTopButton.classList.add(
      'opacity-0',
      'translate-y-8',
      'pointer-events-none'
    );
  }
});

// Back to TopButton
backToTopButton.addEventListener('click', () => {
  document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
});

// Go To Projects
btnToProjects.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});
