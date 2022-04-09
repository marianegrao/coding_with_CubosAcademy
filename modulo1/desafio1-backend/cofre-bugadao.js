function processData(input) {
    const palavras = input.split("\n")
    // const palavrasEmArray = palavras.join("\n")
    const senhaCorreta = palavras.split(0, 1);
    // const senhaCorretaEMArray = palavrasEmArray[0].join("");
    const palavraDigitada = palavras[1];
    let senhaAbre = false;
    console.log(palavras);
    console.log(senhaCorreta);
    console.log(palavraDigitada);
    // console.log(senhaCorretaEmArray);
    // console.log(palavrasEmArray)

    // for (let letras of palavraDigitada) {
    //     if (letra ===)
    // }

    if (senhaCorreta.length <= (10 ** 3) && palavraDigitada.length <= (10 ** 5)) {
        if (senhaAbre) {
            console.log("SIM");
        } else {
            console.log("NAO");
        }
    }
}

processData(`cubos 
cuggbyos `)