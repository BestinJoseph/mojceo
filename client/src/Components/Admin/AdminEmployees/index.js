import { Box, Card, CardActions, CardContent, Grid, Typography, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminEmployees = () => {
    const employees = [{name:'Bestin Joseph', desigination:'Application Developer'}, {name:'Mohammed Basha', desigination:'Manager of Collection Department'}]
    const navigate = useNavigate()

    const handleView = () => {
        navigate(`/admin/employees/${1234}`)
    }

    return (
        <Box>
            <Grid container spacing={2}>
                {
                    employees.map( (emp, index) => (
                        <Grid item md={2} key={index}>
                            <Card>
                                <CardContent>
                                    <Typography variant='body2' gutterBottom>Joined: 12 Mar, 2012</Typography>
                                    <Typography variant='body1' sx={{color:'blueviolet', mb:2}}>{emp.desigination}</Typography>
                                    <Typography variant='h5' sx={{fontWeight:'bold', }}>{emp.name}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={handleView}>View</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
            
        </Box>
    )
}

export default AdminEmployees
