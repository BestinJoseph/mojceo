import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

const AdminProjects = () => {
    const projects = [{name:'KAIA Extension', company:'Saudi Binladin Group'}, {name:'Aura Bridge', company:'El Seif'}]
    return (
        <Box>
            <Box>
                <Typography variant="body1">Projects Lists</Typography>
            </Box>
            <Grid container sx={{mt:1}} spacing={2}>
                {
                    projects.map( (proj, index) => (
                        <Grid item md={2} key={index}>
                            <Card>
                                <CardContent>
                                    <Typography variant='body2' gutterBottom>Started: 12 Mar, 2020</Typography>
                                    <Typography variant='body1' sx={{mb:2, fontWeight:'bold',}}>{proj.company}</Typography>
                                    <Typography variant='h5' sx={{fontWeight:'bold', color:'blueviolet',}}>{proj.name}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button >View</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default AdminProjects
