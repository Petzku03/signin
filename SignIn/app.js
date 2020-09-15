"use strict"
const submit = document.querySelector("#lahetaTiedot");

submit.onclick = function() {
    const email = document.querySelector("#inputEmail").Value;
    const password = document.querySelector("#inputPassword").Value;
    const emailTulos = document.querySelector("#emailTulos");
    const passwordTulos = document.querySelector("#passwordTulos");
    emailTulos.innerHTML = `Email: ${email}`;
    passwordTulos.innerHTML = `Password: ${password}`;
    return false;
}