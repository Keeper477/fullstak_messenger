import React, {useState} from 'react';
import chatAPI from "../../services/chatapi";

import {NotificationContainer, NotificationManager} from 'react-notifications';
import { Navigate } from 'react-router-dom';

import useToken from '../token/useToken';


const RegistrationForm = () => {
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()
    const [developer, setDeveloper] = useState(false)
    const [tester, setTester] = useState(false)
    const [admin, setAdmin] = useState(false)
    const { token, setToken } = useToken();
    if (token)
        return <Navigate to={'/'}/>

    const handleSubmit = async e => {
        e.preventDefault();
        const user = (await chatAPI.registration(username, password, developer ? 'yes':'no', tester? 'yes':'no', admin? 'yes':'no')).data
        
    console.log(user);
        if (user.id != null) {
            console.log(user);
            setToken(user.username);
        }
        else{
            NotificationManager.warning('Что-то ввели неправильно', 3000);
        }
    }
    const handleChangeOne = () => {
        setDeveloper(!developer);
      };
    
      const handleChangeTwo = () => {
        setTester(!tester);
      };
      const handleChangeThree = () => {
        setAdmin(!admin);
      };

    return (
        <div class="container">
            <div class="login">
            <h1>Регистрация</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Имя пользователя</p>
                    <input class="myinput" type="text" onChange={e => setUserName(e.target.value)}/>
                </label>
                <label>
                    <p>Пароль</p>
                    <input class="myinput" type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <p class="mylabel">
                    <label>
                        <input type="checkbox" label="Developer"
                        value={developer}
                        onChange={handleChangeOne}/>
                        Developer
                    </label>
                    <label>
                        <input type="checkbox" label="Tester"
                        value={tester}
                        onChange={handleChangeTwo}/>
                        Tester
                    </label>
                    <label>
                        <input type="checkbox" label="Admin"
                        value={admin}
                        onChange={handleChangeThree}/>
                        Admin
                    </label>
                </p>
                <p class="remember_me">
                        <label class="login-help">
                          <a href="/login">Вход</a>
                        </label>
                    </p>
                    <p class="submit">
                        <input class="myinput" type="submit" name="commit" value="Зарегистрироваться"/>
                    </p>
            </form>
            <NotificationContainer/>
        </div>
        </div>
    )
}

export default RegistrationForm
