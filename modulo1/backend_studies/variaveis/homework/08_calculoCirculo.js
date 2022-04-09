// Perímetro e area de um círculo.
function perimetroEArea (raio) {
const comprimento = 2* raio 
const area = Math.pow (raio, 2)
    if (raio>0){
    console.log(`Se o raio de um circulo for ${raio}, 
    entao seu comprimento e sua area serão ${comprimento} PI e ${area} PI respectivamente.`)
     } else {
            console.log(`O raio não pode ser negativo`)
}
}
    
perimetroEArea(20) 
perimetroEArea(-5) 