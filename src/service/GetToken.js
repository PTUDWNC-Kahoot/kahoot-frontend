import Login from './Login';
import { useEffect, useState } from 'react';
export default async function GetToken() {
    const [token, setToken] = useState();
    useEffect(() => {
        Login(setToken) 

    }, []);
    return token;

}