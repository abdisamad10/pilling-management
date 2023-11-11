import React from 'react'
import { Navigate } from 'react-router-dom';

function SignOut() {
    const handleLogout = () => {
        localStorage.removeItem('token');
        return <Navigate to= '/signin' />
    }
  return handleLogout();
}

export default SignOut