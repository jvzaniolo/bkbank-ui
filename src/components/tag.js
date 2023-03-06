document.querySelectorAll('.tag').forEach((tag) => {
  const closeBtn = tag.querySelector('.tag-close');
  if (!closeBtn) return;
  closeBtn.addEventListener('click', () => {
    tag.remove();
  });
});
