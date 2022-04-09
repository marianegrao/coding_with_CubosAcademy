// manipulando e acessando dados do cartao de consumo
const produtos = [        
    {
    nome: "Pao de Alho",
    precoUnit: 1500, // em centavos
    quantidade: 1
    },

    {
    nome: "Cerveja",
    precoUnit: 1000,
    quantidade: 2
    },

    {
    nome: "Agua",
    precoUnit: 500,
    quantidade: 1
    }
]

const cartao ={
    nome:"Maria",
    idade: 18,
    produtos
};
console.log(cartao.nome);
console.log(cartao.idade);
cartao.idade = 19;
console.log(cartao.idade);
console.log(cartao.produtos[0].nome);
console.log(cartao.produtos[produtos.length-1].precoUnit);