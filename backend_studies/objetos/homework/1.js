const pessoa ={
    nome: "José",
    idade: 30,
    altura: 1.73,
    temCNH: false,
    apelidos: ["Jr", "Juninho", "J."] // vetores
};

const textoCNH = pessoa.temCNH? "possui CNH": "não possui CNH";

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${textoCNH} e tem os seguintes apelidos:`);
for(let apelido of pessoa.apelidos){
    console.log(`-${apelido}`)
}