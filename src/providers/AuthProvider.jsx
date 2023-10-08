import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
export const AuthContext = createContext(null);
import auth from '../firebase/firebase.config';

const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null);


const createUser = (email, password) =>{
    return createUserWithEmailAndPassword (auth, email, password)
}

const signInUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
}


// observe auth state change
useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log('Current value of the current user', currentUser)
        setUser(currentUser);
    });
    return () =>{
        unSubscribe();
    }
}, [])

    const authInfo = { user, createUser,signInUser }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}

/***
 * 1. create context and export it
 * 2. set provider with value
 * 3. use the Auth Provider in the main.jsx file
 * 4. access children in the Auth Provider components as children and use it in the middle of the Provider
 * 
 * 
 * *** */
