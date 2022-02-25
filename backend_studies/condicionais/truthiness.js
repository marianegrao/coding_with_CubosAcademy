// javascript segue uma lógica propria para retornar true ou false para um elemento sem comparação
/* if(18){
    return "é verdeiro"
    }
    output: é verdadeiro
*/

function preenchido (nome){
    // if (nome === "")
    if (!nome){
        console.log("Preencha seu nome")
    } else {
        console.log(`Olá ${nome}, seja bem vindo(a).`)
    }
}

preenchido("maria")
preenchido("")