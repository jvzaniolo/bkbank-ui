document.querySelectorAll('.textarea').forEach((textarea) => {
  const parentElement = textarea.parentElement;
  const label = parentElement.querySelector(
    ":scope > .textarea-label[data-label='float']",
  );

  if (!label) return;
  const placeholder = textarea.placeholder;

  textarea.placeholder = '';

  textarea.onfocus = () => {
    label.classList.add('textarea-label--float');
    textarea.placeholder = placeholder;
  };
  textarea.onblur = () => {
    if (textarea.value === '') {
      label.classList.remove('textarea-label--float');
      textarea.placeholder = '';
    }
  };
});
