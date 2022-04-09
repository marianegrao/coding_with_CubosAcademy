function apresentacao (nome, idade, profissao){
    function faixaEtaria (idade){
        if(idade <= 21){
            return "jovem";
        } else if (idade <= 65){
            return "adulto(a)";
        } else {
            return "idoso(a)";
        }
    }
    
    if (idade < 25){
        console.log(`Olá! Meu nome é ${nome}, sou um(a) ${faixaEtaria(idade)} de ${idade} anos e sou ${profissao}.`)
    } else if(idade < 65){
        console.log(`Olá! Meu nome é ${nome}, sou um(a) ${faixaEtaria(idade)} de ${idade} anos e sou ${profissao}.`)
    } else {
        console.log(`Olá! Meu nome é ${nome}, sou um(a) ${faixaEtaria(idade)} de ${idade} anos e sou ${profissao}.`)
    }
}

apresentacao("Mario", 66, "dev")