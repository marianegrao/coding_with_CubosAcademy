// Determinando o volume de uma esfera a partir de seu diametro
function volumeEsfera (diametro) {
const raio = diametro / 2
const volm = (4/3) * Math.pow((raio),3)
console.log(`O volume de uma esfera de raio ${raio} é ${volm} PI`)
}
    
volumeEsfera(6)