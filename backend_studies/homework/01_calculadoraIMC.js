// calculadora de imc - body mass index calculator. Com base peso: em kg || altura: em metros  
function calculator (weight, height){
    const imc = weight / (height**2);
    console.log(`Your imc is ${imc.toFixed(2)}`);
};

calculator(65,1.60);