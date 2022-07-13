const senha = document.getElementsByClassName('senha')[0];
const email = document.getElementsByClassName('email')[0];
const btnEntrar = document.querySelector('.btnEntrar');

function validarEntrada() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

// chamadas

btnEntrar.addEventListener('click', validarEntrada);
