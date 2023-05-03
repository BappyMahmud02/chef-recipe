import React, { createContext } from 'react';
import { applyActionCode, getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config'



const AuthContext = createContext(null);
const auth = getAuth(app)

const Authproviders = ({ children }) => {

    const user = { displayName: 'Bappy Mahmud' }
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authproviders;