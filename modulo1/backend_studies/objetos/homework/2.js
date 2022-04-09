//criando cartao de consumo
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
console.log(cartao);