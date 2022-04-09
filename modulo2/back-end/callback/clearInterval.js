let numero = 1;
const contador = () => {
    if (numero >= 5) {
        clearInterval(id);
    }
    console.log(numero);
    numero++;
}

const id = setInterval(contador, 1000);

