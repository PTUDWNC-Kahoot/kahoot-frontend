import { createContext, useState } from "react";
import { useContext } from "react";
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = (tokenString);
        return userToken
    };

    const signOut = () => {
        localStorage.removeItem('token');
        setToken(null)
    };

    const signIn = (value) => {
        console.log(value)
        localStorage.setItem('token',value);
        setToken(value)
    };


    const [token, setToken] = useState(getToken());
    return (
        <AuthContext.Provider value={{ token, setToken, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);