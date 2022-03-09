const produtos = [        
    {
    nome: "Pao de Alho",
    precoUnit: 1500, // em centavos
    quantidade: 3
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

let totalAPagar = 0
for (let produto of produtos){
    totalAPagar += produto.precoUnit * produto.quantidade
}

let totalFormatado = (totalAPagar/100).toFixed(2)

console.log(`Olá ${cartao.nome}, você deverá pagar R$ ${totalFormatado}`);