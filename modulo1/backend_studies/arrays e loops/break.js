function aNaPalavra (nome){
    let encontrado = false;
    for (let letra of nome){
        if (letra === 'a' || letra === 'A'){
            encontrado = true
            console.log('tem letra a')
            break;
        }
    }
    
    if (!encontrado){
        console.log('não tem a');
    }
}

aNaPalavra('junin')