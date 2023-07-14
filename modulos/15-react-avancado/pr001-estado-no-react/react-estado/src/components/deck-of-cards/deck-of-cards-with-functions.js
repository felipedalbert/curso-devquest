import {useState, useEffect} from "react"

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

    return (
        <section>
            <ul>
                {
                    deck.cards.map((card, index) => {

                        return(
                            <li key={index}>
                                <img
                                    src={card.image} 
                                    alt={card.value} 
                                    style={{ border: isImageClicked ? '2px solid red' : 'none'}}
                                    onClick={handleImageClick}
                                />
                            </li> 
                        )
                        
                    }) 
                }
                
            </ul>
        </section>
    )
}

export default DeckOfCardsFunction