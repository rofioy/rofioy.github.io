// Get Element
const backToTopButton = document.getElementById('backToTop');
const btnToProjects = document.getElementById('btnProjects');

// Element for See More Project
const btnSeeMoreProject = document.getElementById('seeMoreProject');
const cardProject = document.querySelectorAll('.project-card');
const initialProjectsToShow = 3;
let isShowingAll = false;

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

function toggleSkill(element) {
  // Toggle class active
  element.classList.toggle('mobile-active');

  // Close other skills
  document.querySelectorAll('.skill-item').forEach((skill) => {
    if (skill !== element) {
      skill.classList.remove('mobile-active');
    }
  });
}

// Close skill ketika klik di luar
document.addEventListener('click', (e) => {
  const isSkillItem = e.target.closest('.skill-item');
  if (!isSkillItem) {
    document.querySelectorAll('.skill-item').forEach((skill) => {
      skill.classList.remove('mobile-active');
    });
  }
});

// EventListener Btn See More Project
btnSeeMoreProject.addEventListener('click', () => {
  if (isShowingAll) {
    // Jika sedang menampilkan semua, sembunyikan kembali
    for (let i = initialProjectsToShow; i < cardProject.length; i++) {
      cardProject[i].classList.add('hidden');
    }
    btnSeeMoreProject.textContent = 'See More Project';
    isShowingAll = false;
  } else {
    // Jika sedang menyembunyikan, tampilkan semua
    cardProject.forEach((card) => {
      card.classList.remove('hidden');
    });
    btnSeeMoreProject.textContent = 'See Less Project';
    isShowingAll = true;
  }
});
