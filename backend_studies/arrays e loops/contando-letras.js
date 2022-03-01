function aNaPalavra (palavra){
    let encontrado = false;
    let total = 0

    for (let letra of palavra){
        const temLetraA = letra === 'a' || letra ==='A'
        //const letraS = total == 1 ? "letras": "letra"
        if (temLetraA){
            total ++
            encontrado = true;
        }
    }

    if (!encontrado){
        console.log('não tem a');
    } else {
        const letraS = total === 1 ? "letra": "letras"
        console.log(`Tem ${total} ${letraS} a na palavra ${palavra}`);
    }
}

aNaPalavra('juninhaa')