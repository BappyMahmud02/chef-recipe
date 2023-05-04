import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Card = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('https://chef-recipe-bappymahmud02.vercel.app/chefs')
        .then(res => res.json())
        .then(data => setCards(data))
        .catch(error => console.error(error))
    },[])

    return (
        <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm-grid-cols-1 px-4 lg:px-0 gap-12 mt-12'>
            
            {
                cards.map(card => <Cart key={card.id} card={card} ></Cart>
               
                )
            }
        </div>
    );
};

export default Card;