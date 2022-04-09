const carro ={
    marca: "Toyota",
    modelo: "Etios",
    ano: 2022
}

const pessoa ={ //obj pessoa possui nome, altura e peso como atributos
    nome:"Maria", // propriedade: valor
    altura: 1.60,
    peso: 62,
    carro 
    // shorthand: quando a propeiedade e valor possuiem o mesmo nome, alem de o valor já está atribuido em algum lugar anteirormente.
}

console.log(`Meu nome é ${pessoa.nome}`);
pessoa["nome"] = "Clara"; // os atributos sao alteraveis, embora o nome do obj sao seja
console.log(`Meu nome é ${pessoa.nome}`);

console.log(pessoa)