import { Box, Typography } from '@mui/material'
import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { useNavigate } from 'react-router-dom'

const Evaluvation = () => {
    const navigate = useNavigate()

    const handleBackBtn = () => {
        navigate('/')
    }
    return (
        <Box>
            <Box sx={{display:'flex', alignItems:'center', height:60, px:1, background:'orange', color:'white', }}>
                <ArrowBackIosNewIcon sx={{pr:1, cursor:'pointer', height: 25 }} onClick={()=> handleBackBtn() } />
                <Typography variant="body1" sx={{pt:.5, fontWeight:600}}>Evaluvation Page</Typography>
            </Box>
        </Box>
    )
}

export default Evaluvation
