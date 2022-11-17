import React from 'react'
export const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    email: '',
    login: (token)=>{

    },
    logout: ()=>{

    }
})