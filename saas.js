document.querySelectorAll('.feature-icon-btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'scale(1.1)';
    btn.style.transition = 'transform 0.3s ease';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'scale(1)';
  });
});

const track = document.querySelector('.image-track');
let scrollAmount = 0;

function autoScroll() {
  scrollAmount += 0.5;
  track.scrollLeft = scrollAmount;
  if (scrollAmount >= track.scrollWidth - track.clientWidth) {
    scrollAmount = 0;
  }
  requestAnimationFrame(autoScroll);
}
autoScroll();


