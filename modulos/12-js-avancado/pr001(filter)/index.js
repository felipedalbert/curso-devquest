let pessoas = [
    { nome: 'Roberto', idade: 33 },
    { nome: 'Ricardo', idade: 33 },
    { nome: 'Raphael', idade: 28 }
]

// let pessoasCom33Anos = []

// // for(let i = 0; i < pessoas.length; i++){
// //     if(pessoas[i].idade == 33){
// //         pessoasCom33Anos.push(pessoas[i])
// //     }
// // }

// // console.log(pessoasCom33Anos)

let pessoasCom33Anos = pessoas.filter(pessoa => pessoa.idade === 33)

console.log(pessoasCom33Anos)