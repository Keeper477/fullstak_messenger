import React from "react";
const SomeChats = ({id, name}) => {
    return ( 
        <div>
            <span className="avatar"
                style={{ backgroundColor: "#c7fcec" }}
            />
            <div className="Message-content">
                <a href={`/chats/${id}`} className="text">{name}</a>
            </div>
        </div>
    );
};

export default SomeChats;