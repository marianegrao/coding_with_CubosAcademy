function saudarUsuario(nome, idade) {
    console.log(`Olá, ${nome}. Você tem ${idade} anos!`);
}

setTimeout(saudarUsuario, 2000, 'Maria', 18);