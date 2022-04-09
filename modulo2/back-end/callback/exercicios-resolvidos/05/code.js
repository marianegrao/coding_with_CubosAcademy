const microondas = (tempo) => {
    let numero = 1;
    console.log("Iniciou...");
    const contador = () => {
        console.log(numero);
        numero++;
        if (numero > tempo / 1000) {
            console.log('Finalizou!');
            clearInterval(tempMax);

        }
    }

    const tempMax = setInterval(contador, 2000);
}

microondas(2000);