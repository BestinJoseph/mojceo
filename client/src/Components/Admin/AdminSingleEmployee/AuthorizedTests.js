import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

const AuthorizedTests = () => {
    return (
        <Box sx={{mt:2}}>
            <Typography variant="body1" sx={{fontWeight:'bold', mb:2, color:'blueviolet'}}>Material Technician</Typography>
            <Box>
                <Typography variant="body2" sx={{mb:1}}>Authorized Tests</Typography>
                <Box>
                    <Paper sx={{p:1, mb:1}}>
                        <Typography variant="body1" sx={{fontWeight:'bold', }}>Sieve Analysis</Typography>
                    </Paper>
                    <Paper sx={{p:1, mb:1}}>
                        <Typography variant="body1" sx={{fontWeight:'bold', }}>Liquid Limits</Typography>
                    </Paper>
                </Box>
            </Box>
        </Box>
    )
}

export default AuthorizedTests
