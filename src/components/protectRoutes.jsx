import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const useAuth = () => {

    const token = localStorage.getItem('token');
    return token;
}


function ProtectRoutes() {
    
    const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to='/signin' />
}

export default ProtectRoutes