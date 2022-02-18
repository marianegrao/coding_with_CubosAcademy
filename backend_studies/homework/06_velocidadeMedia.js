function velocMedia(distPercorrida, tempo) {
const velocidadeM_S = distPercorrida / tempo // recebida em m/s
const velocKM_H = velocidadeM_S * 3.6 
 console.log(velocKM_H) // retorna em km/h
}
    
velocMedia(25,1) // 25 m/s --> 90 km/h