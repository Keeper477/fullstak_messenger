import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        return sessionStorage.getItem("login");
    };
    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        sessionStorage.setItem('login', userToken);
        setToken(userToken);
    };

    return {
        setToken: saveToken,
        token
    }
}