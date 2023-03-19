const calcularValorPedido = pedido =>{
    const valorProdutos = pedido.itens
    .filter(item => !item.entrega)
    .reduce((totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor, 0)
    
    const entrega = pedido.itens.filter(item => item.entrega)

    if(pedido.estado === 'RS'){
        const acrescimoEntrega = entrega[0].valor * 0.2;
        entrega += acrescimoEntrega;
    }

    return (valorProdutos > 500) ? valorProdutos : valorProdutos + entrega[0].valor;


}

module.exports = calcularValorPedido;