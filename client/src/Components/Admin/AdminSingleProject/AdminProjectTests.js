import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

const AdminProjectTests = () => {
    return (
        <Box>
            <Typography variant="">Samples Collected</Typography>
            <Box sx={{mt:2}}>
                <Paper sx={{p:1.5, mb:1, fontWeight:'bold', color:'gray'}}>
                    <Typography variant="">MOJCEO-MAT-RYD-0152 - 24 Feb, 2022</Typography>
                </Paper>
                <Paper sx={{p:1.5, mb:1, fontWeight:'bold', color:'gray'}}>
                    <Typography variant="">MOJCEO-MAT-RYD-0153 - 24 Feb, 2022</Typography>
                </Paper>
                <Paper sx={{p:1.5, mb:1, fontWeight:'bold', color:'gray'}}>
                    <Typography variant="">MOJCEO-MAT-RYD-0164 - 27 Feb, 2022</Typography>
                </Paper>
                <Paper sx={{p:1.5, mb:1, fontWeight:'bold', color:'gray'}}>
                    <Typography variant="">MOJCEO-MAT-RYD-0205 - 02 Mar, 2022</Typography>
                </Paper>
                <Paper sx={{p:1.5, mb:1, fontWeight:'bold', color:'gray'}}>
                    <Typography variant="">MOJCEO-MAT-RYD-0206 - 02 Mar, 2022</Typography>
                </Paper>
            </Box>
        </Box>
    )
}

export default AdminProjectTests
