const microondas = (tempo) => {
    console.log("Iniciou...");
    const mensagem = () => {
        console.log('Finalizou!');
    };

    setTimeout(mensagem, tempo);
}

microondas(3000);// 3 segs