// se houver numero dez no array, indique sua posição.
// se não, imprima -1

/* 
esturutra for-of não viavel para exercicio, 
pois só é utilizada quando o indice não é necessário
*/

function encontreODez(numeros){
    let encontrado = false
    for (let i = 0; i < numeros.length; i++){
        if(numeros[i] === 10){
            encontrado = true
            console.log(i)
        }
    }

    if (!encontrado){
        console.log(-1)
    }
}

encontreODez([54, 22, 14, 87, 10, 284])