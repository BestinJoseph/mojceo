import React, { useEffect, useState } from 'react'
import { Box, Breadcrumbs, Button, Grid, MenuItem, MenuList, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const AdminLayout = ({children}) => {
    const [page, setPage] = useState('')
    const navigate = useNavigate()
    
    useEffect(() => {
        const navigator = () => {
            if(page) {
                navigate(`/admin/${page}`)
            } else {
                navigate(`/admin`)
            }
        }

        navigator()
    },[page, navigate])

    return (
        <Box>
            <Box sx={{p:'15px 20px', background:'blueviolet', color:'white',}}>
                <Typography variant="body1" sx={{fontWeight:'bold', }}>Admin Dashboard header</Typography>
            </Box>
            <Box >
                <Grid container>
                    <Grid item md={2} sx={{pt:1,}}>
                        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-between', height:'93vh', borderRight:'1px solid blueviolet', }}>
                            <Box>
                                <Typography sx={{pl:2.2, py:2}}>Admin Page</Typography>
                                <MenuList>
                                    <MenuItem sx={ page === 'employees' ? {borderRight: '5px solid blueviolet', background:'#F5F5F5'} : {borderRight:'none'} } onClick={() => setPage('employees')}>
                                        <Typography variant='body1' >Employees</Typography>
                                    </MenuItem>
                                    <MenuItem sx={page === 'projects' ? {borderRight: '5px solid blueviolet', background:'#F5F5F5'} : {borderRight:'none'}} onClick={() => setPage('projects')}>
                                        <Typography variant='body1' >Projects</Typography>
                                    </MenuItem>
                                    <MenuItem sx={page === 'tests' ? {borderRight: '5px solid blueviolet', background:'#F5F5F5'} : {borderRight:'none'}} onClick={() => setPage('tests')}>
                                        <Typography variant='body1'>Tests</Typography>
                                    </MenuItem>
                                    <MenuItem sx={page === 'trackers' ? {borderRight: '5px solid blueviolet', background:'#F5F5F5'} : {borderRight:'none'}} onClick={() => setPage('trackers')}>
                                        <Typography variant='body1'>Daily Trackers</Typography>
                                    </MenuItem>
                                </MenuList>
                            </Box>
                            <Box sx={{pb:3}}>
                                <MenuItem style={{py:3 }} onClick={() => setPage('')}>
                                    <Typography variant="h6" sx={{color:'blueviolet', fontWeight:'bold', }}>Evaluvations</Typography>
                                </MenuItem>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={10} sx={{pt:3}}>
                        <Breadcrumbs sx={{ml:3}}>
                            <Button onClick={() => setPage('')} size="small">Home</Button>
                            <Typography sx={{ml:1.5, textTransform:'uppercase'}}>{page}</Typography>
                        </Breadcrumbs>
                        <Box sx={{mt:2, pl:4}}>
                            {children}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default AdminLayout
