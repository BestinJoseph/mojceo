import { Box, Typography } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Profile = () => {
    const navigate = useNavigate()
    const {user} = useSelector( state => state.auth )

    const handleBack = () => {
        navigate('/')
    }
    
    return (
        <Box>
            <Box sx={{display:'flex', p:'25px 10px', color:'blueviolet'}}>
                <ArrowBackIcon onClick={handleBack} sx={{mr:1, cursor:'pointer', }} />
                <Typography variant="body1" sx={{fontWeight:'bold', }}>You Profile</Typography>
            </Box>
            <Box sx={{px:2}}>
                <Typography variant="h6">{`${user.firstName} ${user.lastName}`}</Typography>
                <Typography variant="body1">{user.username}</Typography>
            </Box>
        </Box>
    )
}

export default Profile
