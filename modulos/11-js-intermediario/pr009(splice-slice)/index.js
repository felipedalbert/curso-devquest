let frutas = ['banana', 'maça', 'laranja', 'uva']

let frutasExtraidas = frutas.slice(1,3) // ação excludente (utiliza 3 como fim, mas não o inclui) | fatia da do index 1 até 3, mas só inclui até o index dois

console.log(frutasExtraidas)

let frutasExatriadasApartirDe = frutas.slice(1) // ação não excludente (não especifica final para o fatiamento), incluindo todos a partir do index 1
console.log(frutasExatriadasApartirDe)

// o slice apenas gera uma cópia do array, não modificando o original.





// let frutasEmendadas = frutas.splice(1, 3) // (indice, contador de exclusão) - utiliza 3 como fim e o inclui (exclui 3 itens a partir do indice 1)

// console.log(frutasEmendadas)

// console.log(frutas)

//o splice remove de fato os elementos do array original.




// let removeEAdicionaFrutas = frutas.splice(1, 2,'Goiaba', 'Abacaxi', 'Pêra')

// console.log(removeEAdicionaFrutas)

// console.log(frutas)




let apenasAdicionaFrutas = frutas.splice (1, 0, 'Melancia', 'Manga') // apenas adiciona frutas em determinadas posições do array - utiliza 0 como "excluir nenhum item"

console.log(apenasAdiconaFrutas)

console.log(frutas)
