import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Card = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => setCards(data))
        .catch(error => console.error(error))
    },[])

    return (
        <div className='container mx-auto grid grid-cols-3 mt-6'>
            
            {
                cards.map(card => <Cart key={card.id} card={card} ></Cart>
               
                )
            }
        </div>
    );
};

export default Card;