function maiorDeIdadeOuNao (idade){
    if (idade >= 18){
        return true; // nada mais é executado apos isso
        console.log("Maior de idade")
    } else {
        return false;
    }
};

console.log(maiorDeIdadeOuNao(18))