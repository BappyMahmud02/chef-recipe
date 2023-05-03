import React, { useContext } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import App from '../App';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/Authproviders';
import { FaBeer } from 'react-icons/fa';


const Login = () => {

    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUSer = result.user;
                console.log(loggedUSer);
                form.reset();
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGoogleSignIn = () => {
        
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleGithubSignIn = () => {
        
        signInWithGithub()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    
   

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold mb-6">Please Login now !</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="Password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className=' flex justify-around items-center mt-4'>
                            <button onClick={handleGoogleSignIn} className="btn btn-primary"> Google</button>
                            <button onClick={handleGithubSignIn} className="btn btn-primary"> Github</button>

                        </div>
                    </form>
                    <p className='mb-12 ms-8'>
                        <Link to='/register' className="label-text-alt link link-hover">
                            new to Best Eats ? Please register
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Login;