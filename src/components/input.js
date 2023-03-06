const inputs = document.querySelectorAll('.input');

inputs.forEach((input) => {
  const parentElement = input.parentElement;
  const label = parentElement.querySelector(
    ":scope > .input-label[data-label='float']",
  );

  if (!label) return;
  const placeholder = input.placeholder;

  input.placeholder = '';

  input.onfocus = () => {
    label.classList.add('input-label--float');
    input.placeholder = placeholder;
  };
  input.onblur = () => {
    label.classList.remove('input-label--float');
    input.placeholder = '';
  };
});
