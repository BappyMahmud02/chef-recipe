import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Details.css'

const Details = () => {
    const details = useLoaderData()
    console.log(details);

    const { chef_name, chef_photo, likes, num_recipes, years_of_experience, id, ingredients,short_bio, cooking_method } = details

    return (
        <div className='container mx-auto flex flex-cols my-12 gap-8'>

            <img className='images' src={chef_photo} alt="" />

            <div>
                <h2 className='text-3xl font-semibold mt-2'> Chef Name:{chef_name}</h2>
                <h4 className='text-xl  mt-2'>{short_bio}</h4>
                <h4 className='text-xl  mt-2'><span className='text-sky-600	 font-bold'>Years Of Experience:</span> {years_of_experience}</h4>
                <h3 className='text-xl '><span className='text-violet-600	font-bold'>Number Of Recipe:</span> {num_recipes}</h3>
                <h4 className='text-xl '><span className='text-amber-400	font-bold'>Likes:</span> {likes}</h4>
                <h4 className='text-xl mt-4'><span className='text-red-600 font-bold'> Recipes:</span> {cooking_method}</h4>
                <h4 className='text-xl mt-4'><span className='text-green-500 font-bold' >Ingradients:</span> {ingredients}</h4>
            </div>
        </div>
    );
};

export default Details;