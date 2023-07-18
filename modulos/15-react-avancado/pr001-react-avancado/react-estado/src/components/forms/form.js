import { useState } from "react";

const Form = (props) => {
    
    const [inputs, setInputs] = useState({
            image: '',
            value: '',
            suit: ''
    })

    const handleInputChange = (event) => {
        const {target} = event
        const {name} = target
        const {value} = target
        
        setInputs((prevState) =>({
            ...prevState,
            [name]: value
            
        }))
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        props.addCard(inputs)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="image">Endereço da imagem da carta:</label>
                    <input type="text" id="image" name="image" onChange={handleInputChange} value={inputs.image}></input>
                </div>
                <div>
                    <label htmlFor="value">Nome da carta:</label>
                    <input type="text" id="value" name="value" onChange={handleInputChange} value={inputs.value}></input>
                </div>
                <div>
                    <label htmlFor="suit">Naipe da carta:</label>
                    <input type="text" id="suit" name="suit" onChange={handleInputChange} value={inputs.suit}></input>
                </div>
                <input type="submit"></input>
            </form>
        </>
    )
}

export default Form