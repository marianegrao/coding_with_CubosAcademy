const pessoa = {
    nome:"Maria",
    idade: 18,
    cidade: "Fortaleza",
    profissiao: "Dev"
};

const endereco = {
    rua: "Aculá",
    numero: 212,
    bairro: "Onde a paz reina"
};

const cliente = {
    ...pessoa,
    ...endereco,
    hobby: "Ler"
}

console.log(cliente)