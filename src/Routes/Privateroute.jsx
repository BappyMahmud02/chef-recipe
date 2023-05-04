import React, { useContext } from 'react';
import { AuthContext } from '../Providers/Authproviders';
import { Navigate, useLocation } from 'react-router-dom';

const Privateroute = ({children}) => {

    const location = useLocation()

    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <div className="radial-progress" style={{"--value":70}}>70%</div>
    }
    if(user) {
        return children;
    }

    return <Navigate   state={{from: location}} to='/login' ></Navigate>
};

export default Privateroute;