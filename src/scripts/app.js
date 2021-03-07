// Get window.innerHeight
function windowHeight() {
  const windowInnerHeight = window.innerHeight;
  // const pageElement = document.querySelector('.page');
  const mainElement = document.querySelector('main');
  const mainStyle = mainElement.currentStyle || window.getComputedStyle(mainElement);
  mainElement.style.height = `${windowInnerHeight}px`;
}

window.addEventListener('load', windowHeight);
window.addEventListener('resize', windowHeight);

// Dark Mode
const darkModeCheckbox = document.querySelector('.darkMode__input');

function darkModeToggle() {
  if (darkModeCheckbox.checked === false) {
    // Dark Mode
    localStorage.setItem('color-mode', 'dark');
    localStorage.setItem('checkbox', false);
    document.documentElement.setAttribute('color-mode', 'dark');
  } else {
    // Light Mode
    localStorage.setItem('color-mode', 'light');
    localStorage.setItem('checkbox', true);
    document.documentElement.setAttribute('color-mode', 'light');
  }
}

darkModeCheckbox.addEventListener('click', darkModeToggle);

window.onload = function () {
  const theme = localStorage.getItem('color-mode');

  if ((localStorage.length === 0 && window.matchMedia('(prefers-color-scheme: dark)').matches) || theme === 'dark') {
    document.documentElement.setAttribute('color-mode', 'dark');
    document.querySelector('.darkMode__input').checked = false;
  } else if (
    (localStorage.length === 0 && window.matchMedia('(prefers-color-scheme: light)').matches) ||
    theme === 'light'
  ) {
    document.documentElement.setAttribute('color-mode', 'light');
    document.querySelector('.darkMode__input').checked = true;
  }
};
