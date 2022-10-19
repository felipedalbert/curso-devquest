let frutas = ['banana', 'maça', 'laranja', 'uva']

let frutasExtraidas = frutas.slice(1,3) // ação excludente (utiliza 3 como fim, mas não o inclui)

console.log(frutasExtraidas)

let frutasExatriadasApartirDe = frutas.slice(1) // ação não excludente (não especifica final para o fatiamento)
console.log(frutasExatriadasApartirDe)

// o slice apenas gera uma cópia do array, não modificando o original





// let frutasEmendadas = frutas.splice(1, 3) // (indice, contador de exclusão)

// console.log(frutasEmendadas)

// console.log(frutas)
//o splice remove de fato os elementos do array original




let removeEAdicionaFrutas = frutas.splice(1, 2,'Goiaba', 'Abacaxi', 'Pêra')

console.log(removeEAdicionaFrutas)

console.log(frutas)




// let apenasAdiconaFrutas = frutas.splice (1, 0, 'Melancia', 'Manga')

// console.log(frutas)
