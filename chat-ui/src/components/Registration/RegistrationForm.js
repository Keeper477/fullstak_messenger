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
        <div>
            <h1>Регистрация</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Имя пользователя</p>
                    <input type="text" onChange={e => setUserName(e.target.value)}/>
                </label>
                <label>
                    <p>Пароль</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <p>
                <label>Developer</label>
                <input
                    type="checkbox"
                    label="Developer"
                    value={developer}
                    onChange={handleChangeOne}
                />
                </p>
                <p>
                <label>Tester</label>
                <input
                    type="checkbox"
                    label="Tester"
                    value={tester}
                    onChange={handleChangeTwo}
                />
                </p>
                <p>
                <label>Admin</label>
                <input type="checkbox"
                    label="Admin"
                    value={admin}
                    onChange={handleChangeThree}
                />
                </p>

                <div>
                    <button type="submit">Отправить</button>
                </div>
            </form>
            <NotificationContainer/>
        </div>
    )
}

export default RegistrationForm
