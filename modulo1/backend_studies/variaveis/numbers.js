let yearsOld = 18;
console.log(yearsOld);

let heightInMeters = 1.60;
console.log(heightInMeters);

// string template
console.log(`I'm ${yearsOld} years old. 
I'm five feet and three inches (
    // Eu tenho 5 pes e 3 polegadas. ${heightInMeters}: 1 metro e 60 centímetros.`);

//height in meters for iches and feet (height measurement conversion)

function adultHeight(centimeters){
    const feet = 30.38; // in centimeters
    const iches = 2.54;// in centimeters
    const firstNumber = centimeters / feet;
    const lastNumber = firstNumber / iches;
    console.log(`You are ${firstNumber.toFixed(2)} feet and ${lastNumber.toFixed(2)} iches.`);
}

adultHeight(160);

// zero is weird

let x = 0/0; // not a number:: is undetermined, because any number multiplied by zero is zero.
let y = 2/0; // is a big number, so the program makes an approximation. 
let w = 0/2; // zero multiplied by two is zero.

console.log(x,y,w);