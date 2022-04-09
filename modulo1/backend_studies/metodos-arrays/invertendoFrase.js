function inverterFrase(frase) {
    const fraseEmArray = frase.split("");
    const fraseArrayInvertida = fraseEmArray.reverse();

    let fraseInvertida = "";

    for (let letra of fraseArrayInvertida) {
        fraseInvertida += letra;
    }
    /*
        let fraseStringInvertida = fraseArrayInvertida.join("")
        console.log(fraseStringInvertida); //ymedacA sobuC
    */
    console.log(fraseInvertida);
}

inverterFrase("Cubos Academy");