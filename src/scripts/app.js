// Get window.innerHeight
function windowHeight() {
  const windowInnerHeight = window.innerHeight;
  const pageElement = document.querySelector('.page');
  const mainElement = document.querySelector('main');
  const mainStyle = mainElement.currentStyle || window.getComputedStyle(mainElement);
  pageElement.style.height = `calc(${windowInnerHeight}px - (${mainStyle.paddingTop} + ${mainStyle.paddingBottom}}))`;
}

window.addEventListener('load', windowHeight);
window.addEventListener('resize', windowHeight);

// Dark Mode
const darkModeInput = document.querySelector('.darkModeToggle');
console.log(darkModeInput);

function darkModeToggle() {
  if (darkModeInput.checked === 'true') {
    console.log('Checked');
  } else {
    console.log('Not Checked');
  }
}

darkModeToggle();

// const toggleColorMode = (el) => {
//   if (el.currentTarget.classList.contains('light--hidden')) {
//     document.documentElement.setAttribute('color-mode', 'light');
//     localStorage.setItem('color-mode', 'light');
//     return;
//   }
//   document.documentElement.setAttribute('color-mode', 'dark');
//   localStorage.setItem('color-mode', 'dark');
// };

// const toggleColorButtons = document.querySelectorAll('.color-mode__btn');

// toggleColorButtons.forEach((btn) => {
//   btn.addEventListener('click', toggleColorMode);
// });

// if (
//   localStorage.getItem('color-mode') === 'dark' ||
//   (window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('color-mode'))
// ) {
//   document.documentElement.setAttribute('color-mode', 'dark');
// }
