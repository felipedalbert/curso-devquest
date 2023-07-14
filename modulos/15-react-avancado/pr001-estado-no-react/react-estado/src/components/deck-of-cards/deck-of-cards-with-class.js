import { Component} from "react";

async function creatDeck(){
    const response = await fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    const deck = await response.json()
    return deck.deck_id
}

async function getCards(deckId){
    const response = await fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`)
    return await response.json()
}

class DeckOfCardsClass extends Component {
    constructor(){
        console.log('constructing')
        super()
        this.state = {
            cards: []
        }
    }

    async componentDidMount(){
        console.log('componentDidMount')
        const deckId = await creatDeck()
        const deckData = await getCards(deckId)

        this.setState({
            cards: deckData.cards
        })
    }

    render(){
        console.log('render')

        return (
            <section>
                <ul>
                    {
                       this.state.cards.map((card, index) => {

                            return(
                                <li key={index}>
                                    <img src={card.image} alt={card.value} />
                                </li> 
                            )
                            
                        }) 
                    }
                    
                </ul>
            </section>
        )
    }
}

export default DeckOfCardsClass