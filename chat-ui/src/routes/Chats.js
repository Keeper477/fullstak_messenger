import React, { useState } from 'react';
import AllChats from '../components/AllChats/AllChats';


import LoginForm from '../components/LoginForm/LoginForm';

import useToken from '../components/token/useToken';
import '../App.css';

const Chats = () => {
    const { token, setToken } = useToken();
    if (!token)
        return <LoginForm setToken={setToken}/>
    const username = sessionStorage.getItem('login')
    console.log(username);
    
    return (
        <div>
            <AllChats 
                username={username}
            />
        </div>
    )
};

export default Chats;