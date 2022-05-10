import React, { useEffect } from "react";
import axios from "axios";

const PreviousMessages = ({ username, id }) => {
  const [messages, setMessages] = React.useState(null);

  
  const getMessages = async () => {
    try {
        const response = await axios.get(`/api/chatRoom/`+id);
        const jsonData = await response.data;
        console.log(response)
        setMessages(jsonData);
    } catch (err) {
        console.error(err.message);
    }
  };
  let renderMessage = (message) => {
    const { sender, content, color } = message;
    const messageFromMe = username === message.sender;
    
    console.log(username);
    const className = messageFromMe ? "Messages-message currentUser" : "Messages-message";
    return (
        <li className={className}>
            <span
                className="avatar"
                style={{ backgroundColor: color }}
            />
            <div className="Message-content">
                <div className="username">
                    {sender}
                </div>
                <div className="text">{content}</div>
            </div>
        </li>
    );
  };
  
  useEffect(() => {
    getMessages();
  }, []);

  if (!messages) return null;

  return (
    <div>
      {messages.map(message => (renderMessage(message)))}
    </div>
  );
}


export default PreviousMessages