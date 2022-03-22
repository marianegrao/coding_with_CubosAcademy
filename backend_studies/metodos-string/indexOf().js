// achar um texto dentro de outro texto e indica onde comeca, retorna um numero
//(se encontrar, indica a posicao. se nao, retorna -1)

//ter pelo menos um @
//ter pelo menos um ponto apos @

function emailValido(email) {
    const posicaoArroba = email.indexOf("@");
    const posicaoPonto = email.indexOf(".", posicaoArroba);
    if (posicaoArroba < posicaoPonto) {
        console.log("Email válido.")
    } else {
        console.log("Email inválido.")
    }
}

emailValido("clara@negrao.com")
emailValido("clara.maria@negrao.com")
emailValido("clara.maria@negraocom")