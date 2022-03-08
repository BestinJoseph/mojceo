import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout'
import { useDispatch } from 'react-redux'
import FaceIcon from '@mui/icons-material/Face';

import { setUserLogout } from '../../Actions/AuthAction'

const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const { user } = useSelector( state => state.auth )

    const handleLogOut = () => {
        dispatch(setUserLogout())
    }

    const handleProfile = () => {
        navigate('/profile')
    }

    const handleAdmin = () => {
        navigate('/admin')
    }

    return (
        <Box sx={{px:3, height:'100vh', display:'flex', flexDirection:'column' ,justifyContent:'center', position:'relative', maxWidth:500}}>
            <Box sx={{position:'absolute', right:20, top: 20}}>
                <FaceIcon sx={{mr:2}} onClick={handleProfile} />
                <LogoutIcon onClick={handleLogOut} />
            </Box>
            <Typography variant="h5" sx={{textAlign:'center', pb:1, fontWeight:'bold', }}>MOJCEO Dashboard</Typography>
            <Typography variant="body1" sx={{textAlign:'center', pb:3}}>Choose your category for accessing informations.</Typography>
            <Grid container sx={{display:'flex', alignItems:'center'}} spacing={3}>
                <Grid item xs={6}>
                    <Link to="/dailytracker" style={{textDecoration:'none'}}>
                        <Box sx={{display:'flex', justifyContent:'center', py:5, background:'#8a2be2', borderRadius:5}}>
                            <Typography variant="body1" sx={{color:'white', fontWeight:700}}>Daily tracker</Typography>
                        </Box>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link to="/evaluvation" style={{textDecoration:'none'}}>
                        <Box sx={{display:'flex', justifyContent:'center', py:5, background:'#2CC069', borderRadius:5}}>
                            <Typography variant="body1" sx={{fontWeight:700, color:'white'}}>Evaluvation</Typography>
                        </Box>
                    </Link>
                </Grid>
            </Grid>
            <Box sx={{mt:4, textAlign:'center', }}>
                <Button onClick={handleAdmin} variant="outlined">Admin</Button>
            </Box>
        </Box>
    )
}

export default Home
