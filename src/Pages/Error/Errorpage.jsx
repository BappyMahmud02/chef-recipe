import React from 'react';
import './Errorpage.css'
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div>
            <div id="BrushCursor">
                <div className="container mx-auto">
                    <div className="p p1">404 Not Found</div>
                    <div className="p p2">404 Not Found</div>
                    <div className="p p3">
                    404 Not Found
                        <div className="cursor"></div>
                    </div>
                    <div className='btn-delet text-3xl text-center'>
                    <button className='button '><Link  to ='/'>Back to HomePage</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Errorpage;