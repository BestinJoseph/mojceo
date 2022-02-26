import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route } from 'react-router-dom'

function PrivateRoute({ children }) {
    const { isAuthenticated } = useSelector( state => state.auth)
  
    return isAuthenticated ? children : <Navigate to="/signin" />;
}

export default PrivateRoute
