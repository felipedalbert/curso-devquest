let ordens = [
    { cliente: 'Roberto', tipo: 'compra', quantidade: 56, ativo: 'NFLX34' },
    { cliente: 'Ricardo', tipo: 'compra', quantidade: 76, ativo: 'AAPL34' },
    { cliente: 'Raphael', tipo: 'venda', quantidade: 21, ativo: 'GOGL34' }
]
    
// let quantidadeOrdens = 0
// for(let i = 0; i < ordens.length; i++) {
//     quantidadeOrdens += ordens[i].quantidade
// }


let quantidaDeOrdens = ordens.reduce((somaDasOrdens, ordem)=>{
    console.log('Ordem', somaDasOrdens, ordem)
    return somaDasOrdens + ordem.quantidade
}, 0)

console.log(quantidaDeOrdens)