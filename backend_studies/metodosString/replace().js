let numero = "1,350,000";

while (numero != numero.replace(",", ".")) {
    numero = numero.replace(",", ".")
}

console.log(numero);


function replaceAll(string, text, newText) {
    while (string !== string.replace(text, newText)) {
        string = string.replace(text, newText)
    }
    console.log(string)
}

replaceAll("1,350,000", ",", ".")