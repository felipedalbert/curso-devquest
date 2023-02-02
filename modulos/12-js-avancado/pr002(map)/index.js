let pessoas = [
    { nome: 'Roberto', idade: 33 },
    { nome: 'Ricardo', idade: 33 },
    { nome: 'Raphael', idade: 28 }
]

// let nomePessoas = []

// for (let i = 0; i < pessoas.length; i++){
//     nomePessoas.push(pessoas[i].nome)
// }

// console.log(nomePessoas)


let nomePessoas = pessoas.map(pessoa => `${pessoa.nome} tem ${pessoa.idade} anos`)

console.log(nomePessoas)