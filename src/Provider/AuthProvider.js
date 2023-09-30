/* eslint-disable react/prop-types */
"use client"
import { createContext, useContext, useEffect, useState } from "react";

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "@/firebase/firebase.config";
export const AuthContext = createContext(null)

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState("");
    const [posting,setPosting] = useState(false);
    const [loading,setLoading] = useState(true);
    const createUser = (email,password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password);
    }

    const singIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const provider = new GoogleAuthProvider();
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
       const unSubscribe =  onAuthStateChanged(auth, (loggedUser)=> {
        setUser(loggedUser);
        setLoading(false)
       })
       return () => {
        unSubscribe();
    };
    },[])
    const authInfo = {
        user,
        logOut,
        singIn,
        posting,
        loading,
        createUser,
        setPosting,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
	return useContext(AuthContext);
};

export default AuthProvider;