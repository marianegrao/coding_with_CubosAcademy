// m = c * ((1 + i) ** t)

function calcJurosComposto (capital, i, tempo) {
    const montante = capital * ((1 + i) ** tempo)
    console.log(Math.round(montante))
     }
    
     calcJurosComposto(1000, 0.125,5)