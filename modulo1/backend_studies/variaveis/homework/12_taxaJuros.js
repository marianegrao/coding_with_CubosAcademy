// taxa de juros de um financiamento.
function taxa (m,c,n){
const i = (((m/c) ** (1/n)) - 1) * 100    
console.log(`O seu financiamento de ${c} reais teve uma taxa de juros de ${i.toFixed(4)} %, 
pois após ${n} meses você teve que pagar ${m} reais.`)
}
    
taxa(90_000,60_000,24)