// concatena textos ate atingir o indice indicado

const ultimosDigitos = "2130"
console.log(ultimosDigitos.padStart(19, "***  "))

function imprimirData(dia, mes, ano) {
    const diaString = String(dia).padStart(2, "0");
    const mesString = String(mes).padStart(2, "0");
    console.log(`${diaString}/${mesString}/${ano}`)
}

imprimirData(1, 7, 2003)