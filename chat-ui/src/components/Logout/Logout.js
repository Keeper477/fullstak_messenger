import React from 'react';

import { Navigate } from 'react-router-dom';
const Logout = () => {
    sessionStorage.removeItem('login')
    return <Navigate to={'/'}/>
}

export default Logout