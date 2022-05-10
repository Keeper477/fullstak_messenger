import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import SockJsClient from 'react-stomp';
import '../App.css';
import Input from '../components/Input/Input';
import Messages from '../components/Messages/Messages';
import PreviousMessages from '../components/PreviousMessages/PreviousMessages';
import chatAPI from '../services/chatapi';
import LoginForm from '../components/LoginForm/LoginForm';
import useToken from '../components/token/useToken';


const SOCKET_URL = 'http://localhost:8080/ws-chat/';

const Chat = () => {
    
    const { id } = useParams();
    const [messages, setMessages] = useState([])
    const username = sessionStorage.getItem('login')
    console.log(username);

    
    const { token, setToken } = useToken();
    if (!token)
        return <LoginForm setToken={setToken}/>

    let onConnected = () => {
    console.log("Connected!!");
    }

    let onMessageReceived = (msg) => {
    console.log('New Message Received!!', msg);
    console.log(msg);
    if(msg.chatRoom==id)
        setMessages(messages.concat(msg));
    }


    let onSendMessage = (msgText) => {
        chatAPI.sendMessage(username, msgText, id).then(res => {
            console.log('Sent', res);
        }).catch(err => {
            console.log('Error Occured while sending message to api');
        })
    }

    return(
        <div>
            <SockJsClient
            url={SOCKET_URL}
            topics={['/topic/group']}
            onConnect={onConnected}
            onDisconnect={console.log("Disconnected!")}
            onMessage={msg => onMessageReceived(msg)}
            debug={false}
            />
            <div className="messages-list">
            <PreviousMessages
            username={username}
            id={id}
            />
            <Messages
            messages={messages}
            username={username}
            />
            </div>
            <Input onSendMessage={onSendMessage} />
        </div>
    );
};

export default Chat;