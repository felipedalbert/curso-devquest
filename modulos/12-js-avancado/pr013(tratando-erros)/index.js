let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaligado) => {
    return new Promise((resolve, reject)=>{

        if (typeof chaleiraEstaNoFogao != 'boolean' || typeof fogaoEstaligado != 'boolean') throw "Somente o tipo booleano é aceito" /*Quando um erro
        personalizado (throw) é "ativado" pela validação, o catch vai captura-lo, exbir esse erro dependendo do bloco de código e depois vai
        executar o finally*/

        if(chaleiraEstaNoFogao && fogaoEstaligado){
            console.log('Passo 1 finalizado: Água foi fervida')
            resolve()
        }else{
            const mensagemDeErro = 'É necessário ligar o fogão e colocar a chaleira no fogão para ferver a água'
            reject(mensagemDeErro)
        }
    })
}

let passarCafe = () =>{
    console.log(aguaFervida)
    return new Promise((resolve) =>{
        console.log('Passo 2 Finalzado: Café foi passado')
        console.log(aguaFervida)
        resolve()
    })
}

let tomarCafe = () =>{
    return new Promise((resolve) =>{
        console.log('Passo 3 Finalzado: Terminei de tomar o café')
        resolve()
    })
}

let lavarXicara = () =>{
    return new Promise((resolve) =>{
        console.log('Passo 4 Finalzado: Terminei de lavar a xícara')
        resolve()
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

        throw "Mensagem de erro"
    }catch(error){
        console.log(error)
    }finally{
        console.log('Bora trabalhar!')
    }
    
}

initFazerCafe()