import React, { useEffect } from "react";
import axios from "axios";
import SomeChats from './SomeChats';

import '../../App.css';

const AllChats = ({username}) => {
    const [chats, setChats] = React.useState(null);
    const [user, setUser] = React.useState(null);
    console.log(username);

    const getChats = async () => {
        try {
            const response = await axios.get("/api/chatRooms");
            const jsonData = await response.data;
            console.log(response)
            setChats(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };
    const getUser = async () => {
        try {
            const response = await axios.get("/api/userRoles/"+username);
            const jsonData = await response.data;
            console.log(response)
            setUser(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };
    let renderChat = (chatRoom, user) => {
        let flag = false
        chatRoom.roleList.forEach(function(chatRole) {
            user.roles.forEach(function(userRole) {

                if (chatRole.id===userRole.id){
                    console.log(chatRole.id);
                    console.log(userRole.id);
                    flag = true
                }
            });
        });
        return (
            <div>
                { flag ? <a href={`/chats/${chatRoom.id}`} className="text"><SomeChats  name={chatRoom.name}/></a> : null }
            </div>
        );
    };

    useEffect(() => {
        getUser();
        getChats();
      }, []);

    if (!chats) return null;
    
    return (
        <ul class="first">
             {chats.map(chat => (renderChat(chat, user)))}
        </ul>
    );
};

export default AllChats;