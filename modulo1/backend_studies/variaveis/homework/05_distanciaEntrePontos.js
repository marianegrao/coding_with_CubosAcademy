//Distancia de dois pontos no plano cartesiano. 
// d = ((x2 - x1)**2) + ((y2- y1) **2)
function distanciaEntrePontos (x1,x2,y1,y2) {
    const distancia = ((x2 - x1)**2) + ((y2- y1) **2)
    console.log(Math.sqrt(distancia))
    }
distanciaEntrePontos(1,1,1,4)