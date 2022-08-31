const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();
