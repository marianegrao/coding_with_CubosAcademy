// feita
function provaReal(numero, limiteInferior, limiteSuperior) {
    const pertence = numero >= limiteInferior && numero <= limiteSuperior
    if (pertence) {
        console.log("PERTENCE")
    } else {
        console.log("NÃO PERTENCE")
    }
}

provaReal(10, 5, 20)
