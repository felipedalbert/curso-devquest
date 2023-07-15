import {useState, useEffect} from "react"
import Form from './../forms/form'

async function creatDeck(){
    const response = await fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    const deck = await response.json()
    return deck.deck_id
}

async function getCards(deckId){
    const response = await fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`)
    return await response.json()
}

const DeckOfCardsFunction = () =>{
    const [deck, setDeck] = useState({
        cards: []
    })

    const [isImageClicked, setIsImageClicked] = useState(false);

    const handleImageClick = () => {
        if(isImageClicked){
            setIsImageClicked(false);
        }else{
            setIsImageClicked(true);
        }
        
    };

    useEffect(() =>{
        const fetchData = async () =>{
            const deckId = await creatDeck()
            const deckData = await getCards(deckId)

            setDeck({
                cards: deckData.cards
            }) 
        }
        
        fetchData()
    }, [isImageClicked])

    

    const CardsList = (props) =>{
        return (
            <ul>
                {
                    props.cards.map((card, index) => {

                        return(
                            <li key={index}>
                                <img
                                    src={card.image} 
                                    alt={card.value} 
                                    style={{ border: isImageClicked ? '2px solid red' : 'none'}}
                                    onClick={handleImageClick}
                                />
                                <p>{card.name} {card.suit}</p>
                            </li> 
                        )
                        
                    }) 
                }
            </ul>
        )
    }

    const addCard = (newCard) =>{
        console.log(newCard)
        setDeck(prevState =>({
            cards: [...prevState.cards, newCard]
        }))
    }

    return (
        <section>
            <Form addCard={addCard}/>

            {deck.cards.length > 0 ? <CardsList cards={deck.cards}/> : 'nenhuma carta encontrada'}
        </section>
    )
}

export default DeckOfCardsFunction