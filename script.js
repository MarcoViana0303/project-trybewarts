let senha = document.getElementsByClassName("senha")[0];
let email = document.getElementsByClassName("email")[0];

function validarEntrada() {
    if (email.value === "tryber@teste.com" && senha.value === "123456") {
        alert("Olá, Tryber!")
    }
    else
    {
        alert("Email ou senha inválidos.")
    }
}