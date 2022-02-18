function total (po, x, t){ 
//po = população inicial infecctada
//x = potencial de infectados / pessoainfec
//t = dia decorridos
const totalPesssoasInfc = po * (Math.pow(x, (t/7)))  
//const pesssoasInfc = po * (x **(t/7))
 console.log(Math.round(totalPesssoasInfc))
}

total(1000,4,100)