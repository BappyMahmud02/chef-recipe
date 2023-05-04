import React, { useContext } from 'react';
import { AuthContext } from '../Providers/Authproviders';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const Privateroute = ({children}) => {

    const location = useLocation()

    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <Spinner></Spinner>
    }
    if(user) {
        return children;
    }

    return <Navigate   state={{from: location}} to='/login' ></Navigate>
};

export default Privateroute;