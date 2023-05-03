import React, { createContext } from 'react';


const AuthContext = createContext(null);
const Authproviders = ({ children }) => {

    const user = { displayName: 'Bappy Mahmud' }
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authproviders;