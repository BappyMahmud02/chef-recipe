import React, { useContext } from 'react';
import { AuthContext } from '../Providers/Authproviders';
import { Navigate } from 'react-router-dom';

const Privateroute = ({children}) => {

    const {user} = useContext(AuthContext)

    if(user) {
        return children;
    }

    return <Navigate to='/login' replace={true}></Navigate>
};

export default Privateroute;