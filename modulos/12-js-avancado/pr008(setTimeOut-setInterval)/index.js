// São métodos assíncronos

// setTimeout(function(){
//     alert('teste')
// }, 3000)

// setInterval(() => {
//     console.log('Executando a cada 2 segundos')
// }, 2000);

// setTimeout(function(){
//     console.log('Console antes do setTimeOut()')
// }, 4000)

// console.log('Console depois do setTimeOut()')


//limpando ou parando a execução do setIterval ou setTimeOut

const idDoIntervalo = setInterval(() => {
        console.log('Executando a cada 2 segundos')
}, 2000);

console.log(idDoIntervalo)
clearInterval(1)