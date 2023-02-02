const videoGame = {
    nome: 'Xbox',
    valor: 3000,
    jogos : ['Final fantasy', 'Forza Horizon', 'Quantum break']
}





const jogo1 = {
    nome: 'God of War',
    preco: 250,
    exclusivo: true
}

const jogo2 = {
    nome: 'Fifa 22',
    preco: 350,
    exclusivo: false
}

// jogo 3

const jogo4 = {
    nome: 'Horizon Zero Down',
    preco: 230,
    exclusivo: true
}

const videoGame2 = {
    nome: 'PlayStation',
    valor: 5000,
    jogos : [jogo1, jogo2, 
        {nome: 'The last of Us',
        preco: 300,
        exclusivo: true}
    ] //array de objetos dentro de um objeto
}



console.log(videoGame2.jogos)






let cliente = {
    nome: 'Ricardo',
    idade: 23,
    
    ultimoPedido: {
        produto: 'Xbox',
        valor: 3000,
        jogos:[
            {nome: 'Fall Guys',
            preco: 0,
            exclusivo: false},
            {nome: 'Fortnite',
            preco: 0,
            exclusivo: false
            } 
        ]
    } //objeto dentro de objeto
}

console.log(cliente.ultimoPedido.jogos[1].nome)

