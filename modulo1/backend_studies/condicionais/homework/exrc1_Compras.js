// compra com desconto a vista, mas sem desconto com se for a prazo.

function compras (valorDaCompra, parcelas){
    const parcelado = (valorDaCompra/parcelas).toFixed(2) 
    const valorAPagar = parcelas === 1 ? (valorDaCompra -(valorDaCompra * (10/100))) : parcelado

    if (parcelas>1){
        console.log(`Você deve pagar ${parcelas} parcelas de R$ ${valorAPagar} reais.`)
    } else {
        console.log(`Você deve pagar R$ ${valorAPagar.toFixed(2)}, pois à vista tem 10% de desconto.`)
    }
}

compras(101,3)