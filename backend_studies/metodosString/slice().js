// pegar um parte de uma string.
// parametro: number (onde que vai comecar), sempre inteiro. se negativo, ele procura de tras p frente
//retorna: a parte da string

const nome = "maria"

console.log(nome.slice(-3))
console.log(nome.slice(7))
let estados = []

function estado(cidade) {
    estados.push(cidade.slice(-2))
    console.log(estados)
}

estado("fortaleza-ce")
estado("salvador-ba")
estado("rio de janeiro - rj")