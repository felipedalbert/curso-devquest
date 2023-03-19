const calcularValorPedido = require('./index')

it('não deve cobrar valor de frete quando valor dos produtos for suporior a 500', ()=>{
    // AAA - 3 passos de criação de um teste

    // ARRANGE (ARRANJAR - Configuração do ambiente de testes 'objetos ou variáveis)
    const meuPedido = {
        itens: [
            {nome: 'Arco encantado', valor: 2000},
            {nome: 'Entraga', valor: 100, entrega: true}
        ]
    }

    //ACT (AÇÃO - Execução inicial do teste, chamando a função ou método de teste)
    const resultado = calcularValorPedido(meuPedido)

    //ASSERT (ASSERÇÃO - Verifica se o resultado da execução do teste corresponde ao resultado esperado)
    expect(resultado).toBe(2000)
})


it('deve cobrar valor de frete quando valor dos produtos for menor que 500',()=>{
    const meuPedido = {
        itens: [
            {nome: 'Sanduíche', valor: 50},
            {nome: 'Entraga', valor: 100, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(meuPedido)

    expect(resultado).toBe(150)
})

it('deve cobrar valor de frete caso valor seja exatamente 500', ()=>{
    const meuPedido = {
        itens: [
            {nome: 'Sanduíche bem caro', valor: 500},
            {nome: 'Entraga', valor: 100, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(meuPedido)

    expect(resultado).toBe(600)
})

//Caso os estados de entrega sejam RS ou SC, deve ser acrescentado um valor de 20% na entrega

it('deve adicionar um acrescimo de 30% no valor da entrega do pedido caso o estado seja RS', ()=>{
    const pedidoComEstadoRS = {
        estado: 'RS',
        itens: [
            {nome: 'Sanduíche bem caro', valor: 500},
            {nome: 'Entraga', valor: 100, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(pedidoComEstadoRS)

    expect(resultado).toBe(620)
})