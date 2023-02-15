// function(a, b, ...args){
//     //...
// }

function incetivarQuester(mensagem, ...nomesQuester){

    nomesQuester.map(nomeQuester => console.log(`${mensagem}, ${nomeQuester}`))
}

const quester = ['João', 'Pedro', 'Ana', 'Paulo']

incetivarQuester('Parbens por ter chegado ao módulo de JS avançado', ...quester)