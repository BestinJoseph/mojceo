/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Box, Breadcrumbs, Button, Grid, MenuItem, MenuList, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import _ from 'lodash'

const AdminLayout = ({children}) => {
    const [page, setPage] = useState('')
    const navigate = useNavigate()
    const {pathname} = useLocation()
    
    useEffect(() => {
        const navigator = () => {
            if(pathname) {
                navigate(`${pathname}`)
            } else {
                navigate(`${pathname}`)
            }
            localStorage.setItem('url', pathname)
        }

        navigator()
        setPage(localStorage.getItem('url').split('/')[2] || 'admin')
    },[page])

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
                                    <MenuItem sx={ page === 'employees' ? {borderRight: '5px solid blueviolet', background:'#F5F5F5'} : {borderRight:'none'} } onClick={() => {setPage('employees'); navigate(`/admin/employees`)}}>
                                        <Typography variant='body1' >Employees</Typography>
                                    </MenuItem>
                                    <MenuItem sx={page === 'projects' ? {borderRight: '5px solid blueviolet', background:'#F5F5F5'} : {borderRight:'none'}} onClick={() => {setPage('projects'); navigate(`/admin/projects`)}}>
                                        <Typography variant='body1' >Projects</Typography>
                                    </MenuItem>
                                    <MenuItem sx={page === 'tests' ? {borderRight: '5px solid blueviolet', background:'#F5F5F5'} : {borderRight:'none'}} onClick={() => {setPage('tests'); navigate(`/admin/tests`)}}>
                                        <Typography variant='body1'>Tests</Typography>
                                    </MenuItem>
                                    <MenuItem sx={page === 'trackers' ? {borderRight: '5px solid blueviolet', background:'#F5F5F5'} : {borderRight:'none'}} onClick={() => {setPage('trackers'); ; navigate(`/admin/trackers`)}}>
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
                            <Button onClick={() => navigate('/admin')} size="small" sx={{fontSize:12, fontWeight:'bold', color:'bluevoilet'}}>Home</Button>
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
