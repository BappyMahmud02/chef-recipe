import React from 'react';
import './Home.css'
import Cart from '../../Cart/Cart';
import Card from '../../Cards/Card';

const Home = () => {
    return (
        <div className='mt-6'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/003/823/542/original/spices-for-use-as-cooking-ingredients-on-a-wooden-background-with-fresh-vegetables-healthy-food-herbs-organic-vegetables-on-the-table-raw-materials-of-cooking-preparation-tom-yum-free-photo.jpg")` }}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="title mb-5 text-5xl font-bold">Good Food Good Life</h1>
                        <p className="para mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn glass">Explore More Food</button>
                    </div>
                </div>
            </div>

            <Card></Card>
        </div>
    );
};

export default Home;