/*
  nomeDoArray.length: tamanho do array

  nomeDoArray[0]: acessando a posição 0 do array

  nomeDoArray[array.length] = "x" : adiciona x a ultima posicao do array  ou
  nomeDoArray.push('x') :  adiciona x a ultima posicao do array

  nomeDoArray.pop() : tira o ultimo item do array

  nomeDoArray.shift() : remove o primeiro elemento (indice 0)
  nomeDoArray.unshift('x') : adiciona 'x' como o primeiro elemento (indice 0)
*/

const paises = ["argentina", 'brasil', 'cuba', 'mexico', 'guiana']
const outrosPaises = []

// //adicionando um pais no ultimo indice
// paises.push('paraguai')
// console.log(paises)

// //removendo um pais do ultimo indice
// paises.pop()
// console.log(paises)

// //adicionando um pais no indice 0
// paises.unshift('bolivia')
// console.log(paises)

//removendo um pais do indice 0
//paises.unshift(paises.shift())
outrosPaises.push((paises.shift()))
console.log(outrosPaises)
console.log(paises)

// console.log(paises[paises.length -1]) // ultimo da lista
// console.log(paises[1][0])
// console.log(paises[2])