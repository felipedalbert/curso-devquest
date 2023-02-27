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
        console.log('Passo 2 Finalzado: Café foi passado')
        resolve()
    })
}

let tomarCafe = (cafePassado) =>{
    return new Promise((resolve) =>{
        console.log('Passo 3 Finalzado: Terminei de tomar o café')
        resolve()
    })
}

let lavarXicara = (cafeTomado) =>{
    return new Promise((resolve) =>{
        console.log('Passo 4 Finalzado: Terminei de lavar a xícara')
        resolve()
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaligado = true

async function initFazerCafe(){
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaligado)
    const cafePassado= await passarCafe(aguaFervida)
    const cafeTomado = await tomarCafe(cafePassado)
    const xicaraLavada = await lavarXicara(cafeTomado)
    if (xicaraLavada) console.log('Finalizado ritual do café, bora trabalhar!')
}

initFazerCafe()