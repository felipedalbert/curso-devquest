criarBaralho()

async function criarBaralho(){
    const resposta = await fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    baralho = await resposta.json()
}


async function tirarCartas(deck_id){
    const resposta =  await fetch(`https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=3`)
    return await resposta.json()
}


async function mostrarCartaTirada(){
    let containerCartas= document.getElementsByClassName('container')
    containerCartas[0].innerHTML = ''

    const cartasTiradas = await tirarCartas(baralho.deck_id)
    const imagensCartas = cartasTiradas.cards
    console.log(imagensCartas)

    

    for(let carta of imagensCartas){
        containerCartas[0].innerHTML += `
            <div class="card-box">
                <img src="${carta.image}" alt="carta">
            </div>
        `
    }
}

let baralho

document.getElementById('tirar-carta').addEventListener('click', mostrarCartaTirada)