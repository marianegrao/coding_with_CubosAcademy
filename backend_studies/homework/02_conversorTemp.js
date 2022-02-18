//Convertendo Fahrenheit para Celsius
function conversor (f){
    const celsius = (f -32) * (5/9);
    console.log(`${f}F is the same as ${Math.round(celsius)}C`);
    // console.log(celsius.toFixed(2));
};
conversor(73);