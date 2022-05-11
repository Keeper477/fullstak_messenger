import React, {useState} from 'react';
import chatAPI from "../../services/chatapi";

import {NotificationContainer, NotificationManager} from 'react-notifications';

import useToken from '../token/useToken';
import { useNavigate  } from 'react-router-dom';
import "../../style.css"


const LoginForm = () => {
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()
    
    const navigate = useNavigate()
    
    const { token, setToken } = useToken();

    const handleSubmit = async e => {
        e.preventDefault();
        const user = (await chatAPI.login(username, password)).data
    
        if (user.id != null) {
            console.log(user);
            setToken(user.username);
            navigate("/")
        }
        else{
            NotificationManager.warning('Что-то ввели неправильно','', 3000);
        }
    }

    return (
        <div class="container">
            <div class="login">
                <h1>Авторизация</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Имя пользователя</p>
                        <input class="myinput" type="text" onChange={e => setUserName(e.target.value)}/>
                    </label>
                    <label>
                        <p>Пароль</p>
                        <input class="myinput" type="password" onChange={e => setPassword(e.target.value)}/>
                    </label>
                    <p class="remember_me">
                        <label class="login-help">
                          <a href="/registration">Регистрация</a>
                        </label>
                    </p>
                    <p class="submit">
                        <input class="myinput" type="submit" name="commit" value="Войти"/>
                    </p>
                    
                </form>
                
                <div class="error">
                    <NotificationContainer/>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
