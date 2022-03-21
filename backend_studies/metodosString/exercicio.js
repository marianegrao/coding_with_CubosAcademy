//nqo concluido
function transformarNome(nome) {
    const nomes = nome.split(" ")
    for (let i = 0; i < nomes.length; i++) {
        const primeiraLetra = nomes[i][0]
        primeiraLetra.toUpperCase()
        console.log(nomes)
    }
}

console.log(transformarNome("maria clara negrao"))