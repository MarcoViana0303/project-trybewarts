const senha = document.getElementsByClassName('senha')[0];
const email = document.getElementsByClassName('email')[0];
const btnEntrar = document.querySelector('.btnEntrar');
const checkValid = document.querySelector('#agreement');
const submit = document.getElementById('submit-btn');
const textarea = document.getElementById('textarea');
const pCounter = document.getElementById('counter');
const FormID = document.getElementById('evaluation-form');
const logo = document.getElementById('trybewarts-forms-logo');
const ulTeste = document.getElementById('form-data');
const newPage = document.getElementById('newPage');
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
function counterTest() {
  const digits = textarea.value.length;
  const counterI = 500;
  const teste = counterI - digits;
  pCounter.innerText = teste;
}
function limparPagina() {
  FormID.style.display = 'none';
  const main = document.createElement('section');
  main.className = 'newPage';
  newPage.appendChild(main);
  main.appendChild(ulTeste);
  main.appendChild(logo);
}
function elemets(array) {
  let novaString = '';
  array.forEach((i) => {
    if (i.checked === true) {
      novaString += `${i.value}, `;
    }
  });
  return novaString;
}
function renderNovoobj(objeto) {
  limparPagina();
  const keys = Object.keys(objeto); // pegando todas chaves
  const values = Object.values(objeto);// pegando todos valores
  for (let i = 0; i < keys.length; i += 1) {
    const liCreate = document.createElement('li');
    liCreate.innerText = `${keys[i]}: ${values[i]}`;
    ulTeste.appendChild(liCreate);
  }
}
// pegando tags
function criarObj(event) { // deve-se pegar os inputs dentro de uma função pois se estivesse jogado na pagina ele iria pegar oque estava no carregamento inicial ou seja nada(pois nao teria nada digitado) seria vazio , mas quando eu jogo dentro de uma função e busco os elemntos apos um evento eu pego eles ja com seus valores certos!!!
  event.preventDefault();
  const inputNome = document.getElementById('input-name');
  const inputSobrenome = document.getElementById('input-lastname');
  const inputEmail = document.getElementById('input-email');
  const casa = document.getElementById('house');
  const family = document.querySelector('input[name="family"]:checked').value;
  const materias = elemets(document.querySelectorAll('.subject'));
  const checkedRadioRAte = document.querySelector('input[name="rate"]:checked');
  const obj = {
    Nome: `${inputNome.value} ${inputSobrenome.value}`,
    Email: inputEmail.value,
    Casa: casa.value,
    Família: family,
    Matérias: materias,
    Avaliação: checkedRadioRAte.value,
    Observações: textarea.value,
  };
  renderNovoobj(obj);
}
// chamadas
btnEntrar.addEventListener('click', validarEntrada);
checkValid.addEventListener('click', validaCheck);
textarea.addEventListener('keyup', counterTest);
submit.addEventListener('click', criarObj);