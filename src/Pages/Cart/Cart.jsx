import React from 'react';
import './Cart.css'
import { Link } from 'react-router-dom';
const Cart = ({ card }) => {
    const { chef_name, chef_photo, likes, num_recipes, years_of_experience, id } = card;
    return (
        <div >
            <div className="product card ">
                <img className='image rounded-full ' src={chef_photo} alt="" />
                <div className='product-info'>
                    <h2 className='text-3xl font-semibold mt-2'> Chef Name:{chef_name}</h2>
                    <h4 className='text-xl font-semibold mt-2'>Years Of Experience: {years_of_experience}</h4>
                    <h3 className='text-xl font-semibold'>Number Of Recipe: {num_recipes}</h3>
                    <h4 className='text-xl font-semibold '>Likes: {likes}</h4>
                    <Link to={`/details/${id}`}><button className='btn-cart '>
                        <span className="box">
                            View recipe!
                        </span>
                    </button></Link>
                </div>
            </div>
            <svg className="filter">
                <filter id="wavy2">
                    <feTurbulence x="0" y="0" baseFrequency="0.0" numOctaves="2" seed="4"></feTurbulence>
                    <feDisplacementMap in="SourceGraphic" scale="20"></feDisplacementMap>
                </filter>
            </svg>
        </div>
    );
};

export default Cart;