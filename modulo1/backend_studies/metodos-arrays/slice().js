// não altera o original

function aproveitarDados(dados) {
    const startIndex = Math.round(dados.length * 10 / 100);
    const endIndex = Math.floor(dados.length * 90 / 100);

    const dadosFiltrados = dados.slice(startIndex, endIndex)
    console.log(dadosFiltrados)
}
const dados = [0, 1, 2, 2, 3, 3, 4, 3, 2, 2, 7, 1, 3, 13, 6, 42, 42, 22, 5, 5, 1, 1, 1, 1, 1];
aproveitarDados(dados);