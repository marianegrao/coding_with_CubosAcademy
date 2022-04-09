const professores = [
    {
        nome: "Maria",
        stack: "Back"
    },
    {
        nome: "Clara",
        stack: "Front"
    },
    {
        nome: "Sousa",
        stack: "Front"
    },
    {
        nome: "Negrão",
        stack: "Back"
    }
];

const buscarStack = (array, callback) => {
    const lista = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            lista.push(array[i].nome);
        }
    }

    return lista;
}

const resultado = buscarStack(professores, (professor) => {
    return professor.stack === 'Front';
});

console.log(resultado);