import React from 'react'

const Messages = ({ messages, username }) => {

    let renderMessage = (message) => {
        const { sender, content, color } = message;
        const messageFromMe = username === message.sender;
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

    return (
        <div>
            {messages.map(msg => renderMessage(msg))}
        </div>
    )
}


export default Messages