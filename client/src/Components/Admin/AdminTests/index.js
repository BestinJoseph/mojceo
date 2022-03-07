import React from 'react'
import { Box, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material'

const AdminTests = () => {
    const tests = [{name:'Seieve Analysis', standard:'ASTM 56 / 56 C'}, {name:'FDT Nuclear', standard:'ASTM 156 / 156 C'}]

    return (
        <Box>
            <Box>
                <Typography variant="body1" sx={{fontWeight:'bold',}}>Test Lists</Typography>
            </Box>
            <Grid container sx={{mt:1}} spacing={2}>
                {
                    tests.map( (test, index) => (
                        <Grid item md={2} key={index}>
                            <Card>
                                <CardContent>
                                    <Typography variant='body2' gutterBottom>Joined: 12 Mar, 2012</Typography>
                                    <Typography variant='body1' sx={{color:'blueviolet', mb:2}}>{test.standard}</Typography>
                                    <Typography variant='h5' sx={{fontWeight:'bold', }}>{test.name}</Typography>
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

export default AdminTests
