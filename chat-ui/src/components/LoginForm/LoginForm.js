import React, {useState} from 'react';
import chatAPI from "../../services/chatapi";

import {NotificationContainer, NotificationManager} from 'react-notifications';


const LoginForm = ({ setToken }) => {
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async e => {
        e.preventDefault();
        const user = (await chatAPI.login(username, password)).data
        if (user.id != null) {
            console.log(user);
            setToken(user.username);
        }
        else{
            NotificationManager.warning('Что-то ввели неправильно', 'Close after 3000ms', 3000);
        }
    }

    return (
        <div>
            <h1>Авторизация</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Имя пользователя</p>
                    <input type="text" onChange={e => setUserName(e.target.value)}/>
                </label>
                <label>
                    <p>Пароль</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">Отправить</button>
                </div>
                
            </form>
            <a href="/registration">Регистрация</a>
            <NotificationContainer/>
        </div>
    )
}

export default LoginForm
