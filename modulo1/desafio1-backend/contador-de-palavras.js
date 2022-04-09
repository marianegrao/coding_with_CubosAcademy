/*
function contarPalavras (texto){
    const textoSemEspacosFinais = texto.trim()
    const textoemarray = textoSemEspacosFinais.funcaoQueTransformcaStringEmArray(" ")

    let quantidadedepalavras = 0
    for (let i -0; i < texto.length; i++){
     quantidadedepalavras ++
    }

    console.log (quantidadedepalavras)
}
*/

function solucao(texto) {
    const textoSemEspacosFinais = texto.trim();
    const textoEmArray = textoSemEspacosFinais.split(" ");

    let qtdDePalavras = 0
    for (let palavras of textoEmArray) {
        qtdDePalavras++;
        if (palavras === (" ") && textoEmArray.length === 1) {
            qtdDePalavras--;
        }

    }

    console.log(qtdDePalavras);
}

solucao("  ")