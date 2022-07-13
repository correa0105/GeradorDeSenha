import passwordGenerator from "./passwordGenerator";

const password = document.querySelector("#password");
const passwordButton = document.querySelector("#passwordButton");
const qntdCaracter = document.querySelector("#qntdCaracter");
const withUppercase = document.querySelector("#withUppercase");
const withLowercase = document.querySelector("#withLowercase");
const withSimbols = document.querySelector("#withSimbols");
const slider = document.querySelector("#range");

qntdCaracter.innerHTML = slider.value;
slider.addEventListener("click", () => {
    qntdCaracter.innerHTML = slider.value;
})

export default () => {
    passwordButton.addEventListener("click", () => {
        password.innerHTML = loadPassword();
    })
}

function loadPassword() {
    return passwordGenerator(slider.value, withUppercase.checked, withLowercase.checked, withNumbers.checked, withSimbols.checked);
}