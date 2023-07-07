let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaligado) => {
    return new Promise((resolve, reject)=>{

        if (typeof chaleiraEstaNoFogao != 'boolean' || typeof fogaoEstaligado != 'boolean') throw "Somente o tipo booleano é aceito" /*Quando um erro personalizado (throw) é "ativado" pela validação, o catch vai captura-lo, exibir esse erro dependendo do bloco de código e depois vai
        executar o finally*/

        if(chaleiraEstaNoFogao && fogaoEstaligado){
            console.log('Passo 1 finalizado: Água foi fervida')
            resolve(true)
        }else{
            const mensagemDeErro = 'É necessário ligar o fogão e colocar a chaleira no fogão para ferver a água'
            reject(mensagemDeErro)
        }
    })
}

let passarCafe = (x) =>{
    return new Promise((resolve) =>{
        if(x){
           console.log('Passo 2 Finalizado: Café foi passado')
            resolve(true) 
        }
    })
}

let tomarCafe = (x) =>{
    return new Promise((resolve) =>{
        if(x){
           console.log('Passo 3 Finalizado: Terminei de tomar o café')
            resolve(true) 
        }
    })
}

let lavarXicara = (x) =>{
    return new Promise((resolve) =>{
        if(x){
           console.log('Passo 4 Finalzado: Terminei de lavar a xícara')
            resolve(true) 
        }
    })
}

let chaleiraEstaNoFogao = false
let fogaoEstaligado = true

async function initFazerCafe(){
    try{
        const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaligado)
        const cafePassado = await passarCafe(aguaFervida)
        const cafeTomado = await tomarCafe(cafePassado)
        const xicaraLavada = await lavarXicara(cafeTomado)
        if (xicaraLavada) console.log('Finalizado ritual do café!')

    }catch(error){
        console.error(error)
    }finally{
        console.log('Bora trabalhar!')
    }
    
}

initFazerCafe()