const pessoa = {
    nome: "Maria",
    idade: 18,
    profissao: "dev",
    altura: 1.60
}

const {nome, idade, profissao, altura} = pessoa

function apresentacao (usuario){
    console.log(`Olá! Meu nome é ${usuario.nome}, sou um jovem de ${idade}, tenho ${altura} m de altura e sou ${profissao}.`)
}

apresentacao(pessoa)