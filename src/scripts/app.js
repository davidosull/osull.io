// Get full height

function windowHeight() {
  const windowInnerHeight = window.innerHeight;
  const pageElement = document.querySelector('.page');
  pageElement.style.height = `${windowInnerHeight}px`;
}
window.addEventListener('load', windowHeight);
window.addEventListener('resize', windowHeight);
