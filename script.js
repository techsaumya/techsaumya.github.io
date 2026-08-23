// Common JavaScript for fade in animation on page load
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('header, main, footer');
  elements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.3}s`;
  });
});
