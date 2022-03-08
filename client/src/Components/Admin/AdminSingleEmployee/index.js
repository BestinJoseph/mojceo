import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import AuthorizedTests from './AuthorizedTests'
import PersonalSection from './PersonalSection'

const AdminSingleEmployee = () => {

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item md={4}>
                    <Typography variant="body1" sx={{fontWeight:'bold',}}>Employee Personal Details</Typography>
                    <PersonalSection />
                </Grid>
                <Grid item md={4}>
                    <Typography variant="body1" sx={{fontWeight:'bold',}}>Authorized Duties</Typography>
                    <AuthorizedTests />
                </Grid>
                <Grid item md={4}>
                    <Typography variant="body1" sx={{fontWeight:'bold',}}>Other Informations</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AdminSingleEmployee
