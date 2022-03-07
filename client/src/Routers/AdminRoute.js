import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import AdminLayout from '../Components/Layout/AdminLayout'

const AdminRoute = ({children}) => {
    const { isAuthenticated } = useSelector( state => state.auth )
    const authorization = 'admin'
    
    return isAuthenticated && authorization === 'admin' ? <AdminLayout>{children}</AdminLayout> : <Navigate to="/signin" />
}

export default AdminRoute
