// se nao colocar o nmero por padro ele é zero, e éxecutado imediatamente
const saudacao = () => {
    console.log('Olá Maria');
}
setTimeout(saudacao, 0);