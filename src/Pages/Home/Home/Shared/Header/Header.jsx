import React from 'react';
import Login from '../../../../Login';
import { Link } from 'react-router-dom';
import Register from '../../../../Register';


const Header = () => {
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold">
                            <li><Link to='/'>Home</Link></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    About
                                </a>
                            </li>
                            <li><a>Blog</a></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost font-bold normal-case text-4xl">Best Eats</Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-2xl font-bold px-1">
                    <li><Link to='/'>Home</Link></li>
                        <li tabIndex={0}>
                            <a> About </a>
                        </li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    
                    <Link to='/register' className="btn ms-4"> <Register></Register> </Link>
                    <Link to='/login' className="btn ms-4"> <Login></Login> </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;