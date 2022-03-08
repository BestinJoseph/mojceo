import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminTestOutlet = () => {
    return (
        <Box>
            <Outlet />
        </Box>
    )
}

export default AdminTestOutlet
