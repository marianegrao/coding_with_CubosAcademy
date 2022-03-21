// achar um texto dentro de outro texto
const texto = "kkcmdfmariafndfneonal";
console.log(texto.includes("maria")); // retorna true, poir achou a string
console.log(texto.includes("maria", 11)); // procura "maria", apartir do index 11
console.log(texto.includes("clara")); // retorna, false, pois ele não encontrou a string passada como parametro