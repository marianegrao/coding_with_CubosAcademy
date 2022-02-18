// Soma dos angulos internos de um poligono
function soma(lados) {
const somaAngulosInter =  (lados-2) * 180
const angulosLados = somaAngulosInter / lados 

console.log(`A soma dos angulos internos é ${somaAngulosInter}.
Cada um desses angulos possui ${angulosLados}.`)
}
 
soma(6)