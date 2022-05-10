import React from 'react';
import './App.css';
import Chats from './routes/Chats';
import Chat from './routes/Chat';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/Registration/RegistrationForm';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const App = () => {

  
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/"  element={<Chats />}/>
            <Route path="/registration" element={<RegistrationForm/>}/>
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="/chats/:id" element={<Chat />} />
          </Routes>
        </Router>
    </div>
  )
}

export default App;
