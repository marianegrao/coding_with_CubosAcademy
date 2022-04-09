function faixaEtaria (idade){
    if(idade <= 21){
        return "Jovem";
    } else if (idade <= 65){
        return "Adulto(a)";
    } else {
        return "Idoso(a)";
    }
}

console.log(faixaEtaria(18));
console.log(faixaEtaria(22));
console.log(faixaEtaria(65));
console.log(faixaEtaria(66))