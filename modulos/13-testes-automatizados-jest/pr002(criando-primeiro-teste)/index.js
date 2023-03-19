const meuPedido = {
    itens: [
        {nome: 'Poção de vida', valor: 100},
        {nome: 'Espada de Prata', valor: 100},
        {nome: 'Entraga', valor: 40, entrega: false}
    ]
}

const calcularValorPedido = pedido =>{
    const valorProdutos = pedido.itens
    .filter(item => !item.entrega)
    .reduce((totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor, 0)
    

    const entrega = pedido.itens.filter(item => item.entrega)

    if(valorProdutos > 500){
        return valorProdutos;
    } else{
        return valorProdutos + entrega[0].valor;
    }


}

console.log(calcularValorPedido(meuPedido))