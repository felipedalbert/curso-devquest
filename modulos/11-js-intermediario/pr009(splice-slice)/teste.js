var estados = ["RJ", "MG", "SP", "SC", "SP", "SP", "PR", "PE", "PA"];

var indice = estados.indexOf('SP');

console.log(indice)

while(indice >= 0){
    
    estados.splice(indice, 1);

    indice = estados.indexOf('SP');
}

console.log(estados);