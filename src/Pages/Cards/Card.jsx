import React, { useEffect, useState } from 'react';

const Card = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    },[])

    return (
        <div>
            <h2>hellow {cards.length}</h2>
            {
                
            }
        </div>
    );
};

export default Card;