import React, { useState } from 'react';
import AllChats from '../components/AllChats/AllChats';


import LoginForm from '../components/LoginForm/LoginForm';

import useToken from '../components/token/useToken';

import { Navigate } from 'react-router-dom';
import '../App.css';

const Chats = () => {
    const { token, setToken } = useToken();
    if (!token)
        return <Navigate to={'/login'} setToken={setToken}/>
    const username = sessionStorage.getItem('login')
    console.log(username);
    
    return (
        <div className="messages-list">
            <div className="Head"><a className='but' href='/logout'>Выйти</a></div>
            <AllChats 
                username={username}
            />
        </div>
    )
};

export default Chats;