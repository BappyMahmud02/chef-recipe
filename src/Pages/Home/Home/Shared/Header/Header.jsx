import React, { useContext } from 'react';
import Login from '../../../../Login';
import { Link } from 'react-router-dom';
import Register from '../../../../Register';
import { AuthContext } from '../../../../../Providers/Authproviders';


const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error);
            })
    }
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

                            <li><Link to='/blog'>Blog</Link> </li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost font-bold normal-case text-2xl md:text-4xl text-emerald-400 "> <span className='text-green-700	'>Best</span> Eats</Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-2xl font-bold px-1 ">
                        <li><Link to='/'>Home</Link></li>

                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user &&
                        <>
                            <div className="tooltip tooltip-left"
                                data-tip={user?.displayName}>
                                <img className='h-[40px] w-[40px] rounded-full' src={user?.photoURL} alt="" />
                            </div>
                        </>



                    }

                    {/* <Link to='/login' className=" ms-4"> <button className="btn btn-active">Log In</button>
                    </Link> */}
                    {
                        user ? <>

                            <span><button onClick={handleLogOut} className="btn btn-success ms-4">Log out</button>
                            </span>
                        </> : <>  <div className='flex'>
                            <Link to='/register' className=" ms-4"> <button className="btn btn-success">Register </button>
                            </Link>
                            <Link to='/login'><button className='btn btn-success ms-4'>Log in</button></Link>
                            </div> </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;