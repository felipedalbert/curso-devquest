let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaligado) => {
    return new Promise((resolve, reject)=>{
        if(chaleiraEstaNoFogao && fogaoEstaligado){
            console.log('Passo 1 finalizado: Água foi fervida')
            resolve()
        }else{
            console.log('É necessário ligar o fogão e colocar a chaleira no fogão para ferver a água')
            reject()
        }
    })
}

let passarCafe = (aguaFervida) =>{
    return new Promise((resolve) =>{
        console.log('Passo 1 Finalzado: Café foi passado')
        resolve()
    })
}

let tomarCafe = (aguaFervida) =>{
    return new Promise((resolve) =>{
        console.log('Passo 2 Finalzado: Terminei de tomar o café')
        resolve()
    })
}

let lavarXicara = (aguaFervida) =>{
    return new Promise((resolve) =>{
        console.log('Passo 2 Finalzado: Terminei de lavar a xícara')
        resolve()
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaligado = true

ferverAgua(chaleiraEstaNoFogao, fogaoEstaligado)
    .then(() => {
        return passarCafe()
    })
    .then(() => {
        return tomarCafe()
    })
    .then(() => {
        return lavarXicara()
    })
    .then(() => {
        console.log('Finalizado ritual do café, bora trabalhar!')
    })