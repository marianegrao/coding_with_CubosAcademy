//compra com desconto a vista, mas sem desconto com se for a prazo
// se parcelado de 7x a 12x: juros de 1 porcento ao mes.

function pagarCompras (compras, parcelas){
    const aVista = parcelas === 1
    const parcelasSemJuros = parcelas>=2 && parcelas <= 6 
    const parcelasComJuros = parcelas >= 7 && parcelas <= 12

    // parcelas == 1? se sim, calcule o desconto a vista. se não, calcule a parcela sem juros.
    const valorAPagar = aVista ? (compras -(compras * (10/100))) : (compras/parcelas).toFixed(2)

    if (aVista){
        console.log(`À vista (pois à vista tem 10% de desconto): 
        Você deve pagar R$ ${valorAPagar.toFixed(2)}.`)

    } else if(parcelasComJuros) {
        const comprasComJuros = (compras * (1 + 1/100) ** parcelas).toFixed(2)
        const valorAPagarComJuros = ((comprasComJuros + compras)/parcelas).toFixed(2)

        console.log(`Parcelado com juros: R$ ${comprasComJuros}. 
        Você deve pagar em ${parcelas} parcelas de R$ ${valorAPagarComJuros} reais.`)

    } else if(parcelasSemJuros) {
        console.log(`Parcelado sem juros: R$ ${compras}. 
        Você deve pagar em ${parcelas} parcelas de R$ ${valorAPagar} reais.`)

    }else {
        console.log(`Número de parcelas inválida.`)
    }
}

pagarCompras(100,0)
pagarCompras(100,13)

pagarCompras(100,1)
pagarCompras(100,2)
pagarCompras(100,7)