import React from 'react'
import { Box, Grid, Paper, Typography } from '@mui/material'
import AdminProjectTests from './AdminProjectTests'
import AdminProjectReports from './AdminProjectReports'

const AdminSingleProject = () => {
    return (
        <Box>
            <Box sx={{dispay:'flex', mb:2}}>
                <Typography variant="h6" sx={{fontWeight:'bold', color:'blueviolet', display:'inline', mr:2}}>KKIA Extension West Side Parking Lot</Typography>
                <Typography variant="body1" sx={{ p:1.25, background:'green', borderRadius:5, display:'inline', fontWeight:'bold', color:'white', }}>Ongoing</Typography>
            </Box>
            <Grid container spacing={2}>
                <Grid item md={4}>
                    <Box>
                        <Typography variant="body1" sx={{mb:.5}}>Location: Riyadh, KSA</Typography>
                        <Typography variant="body1" sx={{mb:.5}}>Department: Material and Geotechnical</Typography>
                        <Typography variant="body1" sx={{mb:.5}}>Consultant: RAMPD</Typography>
                        <Typography variant="body1" sx={{mb:.5}}>Started: 12 Jan, 2021</Typography>
                        <Typography variant="body1" sx={{mb:.5}}>Completed: Progress</Typography>
                    </Box>
                    <Box sx={{mt:3}}>
                        <Typography variant="body1" sx={{mb:1}}>Company Information</Typography>
                        <Box sx={{ml:0}}>
                            <Typography variant="body1" sx={{fontWeight:'bold'}}>El Seif KSA</Typography>
                            <Typography variant="body1">Al Malaz, Riyadh, KSA - 11531</Typography>
                            <Typography variant="body1">Tel #: +966 11 452 789 5632</Typography>
                            <Typography variant="body1">Email: info@el-seif.sa</Typography>
                            <Typography variant="body1">web: www.el-seif.sa</Typography>
                        </Box>
                        <Paper sx={{mt:2, py:2, px:3}}>
                            <Typography variant="h6" sx={{mb:1}}>Contact Persons</Typography>
                            <Box>
                                <Typography variant="body1" sx={{fontWeight:'bold'}}>Eng. Mohamed Basha</Typography>
                                <Typography variant="body1">Project Manager</Typography>
                                <Typography variant="body1">Mobile: +966 05 527 895 632</Typography>
                                <Typography variant="body1">Email: basha@el-seif.sa</Typography>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item md={4}>
                    <AdminProjectTests />
                </Grid>
                <Grid item md={4}>
                    <AdminProjectReports />
                </Grid>
            </Grid>
        </Box>
    )
}

export default AdminSingleProject
