import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

import AdminTestInformation from './AdminTestInformation'

const AdminSingleTest = () => {

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item md={4}>
                    <Typography variant="h6" sx={{fontWeight:'bold',}}>Seieve Analysis</Typography>
                    <AdminTestInformation />
                </Grid>
                <Grid item md={4}>
                    <Typography variant="body">Conducted Test</Typography>
                </Grid>
                <Grid item md={4}>
                    <Typography variant="body">Seieve Analysis</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AdminSingleTest
