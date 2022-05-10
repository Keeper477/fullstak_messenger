import Axios from "axios";

const api = Axios.create({
    baseURL: '/api/',
});

const chatAPI = {
    sendMessage: (username, text, id) => {
        let msg = {
            sender: username,
            content: text,
            chatRoom: id
        }
        return api.post(`send`, msg);
    },
    login: (username, password) =>{
        let user = {
            username: username,
            password: password
        }
        return api.post(`login`, user);
    },
    registration: (username, password, developer, tester, admin) =>{
        let user = {
            username: username,
            password: password,
            developer: developer,
            tester: tester,
            admin: admin
        }
        return api.post(`registration`, user);
    }
}


export default chatAPI;
