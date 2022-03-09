// desestruraçao de objetos
const pessoa = {
    nome:"Maria",
    idade: 18,
    cidade: "Fortaleza",
    profissiao: "Dev"
};

// const nome = pessoa.nome;
// const idade = pessoa.idade;

const {nome, idade, cidade, ...outros} = pessoa; // não está criando uma nova variavel

console.log(nome, idade, cidade);
console.log(outros);

// desestruturaçao de array

const array = [0,1,2,3,4];

const [a, b,...resto] = array; // a = array[0], b = array[1]

console.log(a,b)
console.log(resto)