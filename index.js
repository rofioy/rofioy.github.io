//Dark Mode toggle
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light';

// Whenever the user explicitly hooses dark mode
localStorage.theme = 'dark';

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme');

// Mendapatkan semua link navigasi
const navLinks = document.querySelectorAll('nav a');

// Menambahkan event listener pada setiap link navigasi
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // Mencegah perilaku default link
    e.preventDefault();

    // Mendapatkan href dari link yang diklik
    const href = link.getAttribute('href');

    // Mendapatkan elemen yang dituju
    const target = document.querySelector(href);

    // Menambahkan efek halus dengan menggunakan scrollIntoView
    target.scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Mendapatkan tombol Back to Up
const btnToUp = document.querySelector('.btnToUp');

// Menambahkan event listener pada tombol Back to Up
btnToUp.addEventListener('click', (e) => {
  // Mencegah perilaku default link
  e.preventDefault();

  // Menambahkan efek halus dengan menggunakan scrollIntoView
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});