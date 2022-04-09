const saudarUsuario = (mensagem) => {
    const nome = "Maria";
    mensagem(nome);
}

function saudacao(usuario) {
    console.log(`Seja bem vindo(a), ${usuario}!`);
    /* ARROW FUNCTION
        const saudacao = (usuario) => {
            console.log(`Seja bem vindo(a), ${usuario}!`);
        }
    */
}

saudarUsuario(saudacao); // nao necessita () em saudacao, pois nao queremos que ela seja executada instantaneamente

/*
ARROW FUNCTION
saudacao (usuario => {
    console.log(`Seja bem vindo(a), ${usuario}!`);
})
*/