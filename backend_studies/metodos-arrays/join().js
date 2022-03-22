//junta array em uma string. sem argumento = separado por virgulas. argumeto vazio=nada. argumento passado= fica entre eles

const opcoes = ["uma", "outra"];
console.log(opcoes.join()); // virgula
console.log(opcoes.join('')); //junta
console.log(opcoes.join(" "));
console.log(opcoes.join(" ou "));

function inverterFrase(frase) {
    const fraseEmArray = frase.split("");
    const fraseArrayInvertida = fraseEmArray.reverse();

    let fraseStringInvertida = fraseArrayInvertida.join("")
    console.log(fraseStringInvertida);
}

inverterFrase("Cubos Academy");