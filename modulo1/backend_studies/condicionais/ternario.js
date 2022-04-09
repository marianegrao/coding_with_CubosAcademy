/*
forma mais simples de fazer uma condição

const x = condicao? expre1 : expre2
se condiçao for verdadeira expre1 é executada, se for falsa é executada expres2
*/

function conta (saldo){
    const unidade = (saldo === 1 ? "real" : "reais");
    console.log(`Voce tem R$ ${saldo} ${unidade}.`)
}

conta(1)
conta(2)