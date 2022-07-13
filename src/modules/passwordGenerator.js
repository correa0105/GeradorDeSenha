
export default function passwordGenerator(qntdCaracter, uppercase, lowercase, numbers, simbols) {
    const passwordArray = [];

    qntdCaracter = Number(qntdCaracter);
    for (let i = 0; i < qntdCaracter; i++) {
        uppercase && passwordArray.push(generatorUppercase());
        lowercase && passwordArray.push(generatorLowercase());
        numbers && passwordArray.push(generatorNumbers());
        simbols && passwordArray.push(generatorSimbols());
    }

    return (passwordArray.join("").slice(0, qntdCaracter)) || "NÃO FOI SELECIONADO NENHUMA OPÇÃO";
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function generatorUppercase() {
    return String.fromCharCode(rand(65, 91));
}

function generatorLowercase() {
    return String.fromCharCode(rand(97, 123));
}

function generatorNumbers() {
    return String.fromCharCode(rand(48, 57));
}

function generatorSimbols() {
    return String.fromCharCode(rand(33, 47));
}