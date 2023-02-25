/*
    Pendente - Estado inicial (promise criada, mas não executada)
    Realizada - Sucesso na execução (resolve)
    Recusada - Falha na execução da promise (reject)
    Estabelecida - Promise realizada ou recusada
*/



let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaligado) => {
    return new Promise((resolve, reject)=>{
        if(chaleiraEstaNoFogao && fogaoEstaligado){
            console.log('Começando o processo de ferver a água')
            resolve()
        }else{
            console.log('É necessário ligar o fogão e colocar a chaleira no fogão para ferver a água')
            reject()
        }
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaligado = true
ferverAgua(chaleiraEstaNoFogao, fogaoEstaligado)
console.log('Fazendo café')