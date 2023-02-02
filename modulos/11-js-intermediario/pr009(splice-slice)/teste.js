var estados = ["RJ", "MG", "SP", "SC", "SP", "SP", "PR", "PE", "PA"];

var indiceSp = estados.indexOf('SP');

console.log(indiceSp)

while(indiceSp >= 1){
    
    estados.splice(indiceSp, 1);

    indiceSp = estados.indexOf('SP');
}

console.log(estados);