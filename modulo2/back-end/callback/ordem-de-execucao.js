const solucao = () => {
    console.log("Função excutada");
}

console.log('chamada 1');
solucao();
console.log('chamada 2');
console.log('chamada 3');
setTimeout(() => {
    console.log('setTimeout foi finalizado');
}, 3000)
console.log('chamada 4');
console.log('chamada 5');