const pessoas = ['Roberto', 'Ricardo', 'Raphael']
console.log(...pessoas)

// CONCATENAR DOIS ARRAYS 

//maneira antiga

// let pessoas1 = ['Roberto', 'Ricardo', 'Raphael']
// let pessoas2 = ['Pedro', 'João', 'Paulo']

// pessoasGeral = pessoas1.concat(pessoas2)

// //maneira atual

// pessoasGeral = [...pessoas1, ...pessoas2]
// console.log(pessoas1)


// CLONAR UM OBJETO

const pessoa1 = { nome: 'Felipe', idade: 18 }


const pessoaComCidade = {...pessoa1, cidade: 'Curitiba'}
console.log(pessoaComCidade)


