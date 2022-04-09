/*
--> Operadores de
    comparação: >, <, >=, <=
    igualdade: ==, !=
    identidade: === e !==
    negação: !
    lógica: || , &&

--> Condicionais
    if - se a condição for verdadeira, é executado
    else if - se nao
    else - se nao for verdade nenhuma das anteriores, é executado 

 obs: descobrir o tipo de um chave/dado x --> console.log(typeof x)
*/

// saber se pode entrar, se não poder o programa deve explicar o motivo
function cinema (temIngresso, acompanhado, idade, censura){
    //const podeEntrar = (temIngresso == true) && (idade >= censura);
    //const barrado  = (temIngresso == false) || (idade < censura);

    if (temIngresso) {
        if (idade >= censura || acompanhado) {
            console.log("Pode entrar.");
        } else {
            console.log("Barrada pela censura ou ausência dos pais.");  
        }
    } else {
        console.log("Barrado por falta de ingresso.");
    }
}

cinema(true, false, 15,16)