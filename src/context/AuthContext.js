import React, {createContext, useState, useEffect} from 'react'
import {auth} from '../firebase'


export const AuthContext = createContext()

export function AuthProvider(props) {

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true)

    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout(){
        return auth.signOut();
    }

    useEffect(() => {

        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])
    

    const value = {
        currentUser,
        login,
        signup,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
           {!loading && props.children}
        </AuthContext.Provider>
    )
}
