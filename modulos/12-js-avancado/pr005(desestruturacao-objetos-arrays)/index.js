let pessoa = { nome: 'Felipe', sobrenome: 'Dalbert', idade: 18 }
// let nome = pessoa.nome
// let idade = pessoa.idade

// console.log(nome)
// console.log(idade)



// let {nome, sobrenome, idade} = pessoa //desestrturação básica de objetos

// console.log(nome, sobrenome, idade)


let {nome: name, sobrenome: surname, idade: age} = pessoa //desestrturação básica de objetos

console.log(name)
console.log(surname)
console.log(age)

name = 'João'

console.log(pessoa.nome) //Não modifica a propriedade do objeto original


const numeros = [1, 2, 3]

const [um, dois, tres] = numeros

console.log(um, dois, tres)