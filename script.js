const senha = document.getElementsByClassName('senha')[0];
const email = document.getElementsByClassName('email')[0];
const btnEntrar = document.querySelector('.btnEntrar');
const checkValid = document.querySelector('#agreement');
const submit = document.getElementById('submit-btn');

function validaCheck() {
  if (checkValid.checked === true) {
    submit.removeAttribute('disabled');
  } else {
    submit.setAttribute('disabled', 'disabled');
  }
}

function validarEntrada() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

// chamadas

btnEntrar.addEventListener('click', validarEntrada);
checkValid.addEventListener('click', validaCheck);
