
import React from 'react';
import './card.css'

// class Card extends React.Component{

//     render(){
//         return(
//             <div className='card'>
//                 <h3>{this.props.title}</h3>
//                 <p>texto do card</p>
//             </div>
//         )
//     }
// }

const Card = (props) => {
    return (
        <div className='card'>
            {props.children}
        </div>
    )
}

export default Card;