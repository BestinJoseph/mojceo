import { Box, Grid, Link, Paper, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'


const TrackerMenus = () => {
    const { activities } = useSelector( state => state)

    // console.log(activities)

    return (
        <Box>
            <Grid container spacing={1} sx={{pr:4}}>
                <Grid item md={2}>
                    <Paper sx={{py:1, px:2}}>
                        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb:1}}>
                            <Typography variant="h6">Activities</Typography>
                            <Typography variant='body1'>+5%</Typography>
                        </Box>
                        <Typography variant="h4" sx={{mb:1, fontWeight: 600, color: 'green'}}>500</Typography>
                        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Link>see all activities</Link>
                            <Typography>Icon</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item md={2}>
                    <Paper sx={{py:1, px:2}}>
                        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb:1}}>
                            <Typography variant="h6">Employees</Typography>
                            <Typography variant='body1'>+8%</Typography>
                        </Box>
                        <Typography variant="h4" sx={{mb:1, fontWeight: 600, color: 'purple'}}>250</Typography>
                        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Link>see all activities</Link>
                            <Typography>Icon</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item md={2}>
                    <Paper sx={{py:1, px:2}}>
                        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb:1}}>
                            <Typography variant="h6">Project</Typography>
                            <Typography variant='body1'>-17%</Typography>
                        </Box>
                        <Typography variant="h4" sx={{mb:1, fontWeight: 600, color: 'purple'}}>10</Typography>
                        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Link>see all activities</Link>
                            <Typography>Icon</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item md={2}>
                    <Paper sx={{py:1, px:2}}>
                        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb:1}}>
                            <Typography variant="h6">Client</Typography>
                            <Typography variant='body1'>-15%</Typography>
                        </Box>
                        <Typography variant="h4" sx={{mb:1, fontWeight: 600, color: 'purple'}}>20</Typography>
                        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Link>see all activities</Link>
                            <Typography>Icon</Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default TrackerMenus
