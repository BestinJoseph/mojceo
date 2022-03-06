import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import EditIcon from '@mui/icons-material/Edit'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

import useStyles from './DailyActivitiesStyles'
import classNames from 'classnames'

const DailyActivities = () => {
    const classes = useStyles()
    const { activities: {activities}, auth } = useSelector( state => state )
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        activities && activities.length >= 1 && auth.user.firstName && setData( prev => {
            return activities.filter( act => act.fullName.toLowerCase().trim() === auth.user.firstName.toLowerCase() )
        })
    },[setData, activities, auth])

    const handleHome = () => {
        navigate('/create')
    }

    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    }

    const handleBackBtn = () => {
        navigate('/')
    }

    return (
        <Box className={classes.dailyactivities} sx={{position: 'relative', maxWidth:500,}}>
            <Box sx={{position: 'fixed', top:0, display:'block', width:'inherit', }}>
                <Box className={classNames('nav_header')}>
                    <Box sx={{display:'flex', alignItems:'center',  }}>
                        <ArrowBackIosNewIcon sx={{pr:1, cursor:'pointer', }} onClick={()=> handleBackBtn() } />
                        <Typography variant="body1" sx={{fontWeight:'bold' }}>Daily Tracker Log</Typography>
                    </Box>
                    
                </Box>
            </Box>
            <Box className={classNames('dailyactivities_list_container')} sx={{mt:8,}}>
                <ul className={classNames('daily_lists')}>
                    {
                        data && data.map( (da, i) => (
                            <li key={i} className={classNames('daily_lists_item')}>
                                <Link to={`/${da._id}`} className={classNames('daily_lists_item_link')}>
                                    <Typography variant="body1" >{ moment(da.createdAt).format("Do MMM, YYYY")}, activities</Typography>
                                </Link>
                                {
                                    moment(da.createdAt).format('DD-MM-yyyy') === moment(Date.now()).format('DD-MM-yyyy') ? <EditIcon onClick={ () => handleEdit(da._id) } /> : null
                                }
                            </li>
                        ))
                    }
                </ul>
            </Box>
            <Box sx={{position:'fixed', bottom:25, width:'inherit', textAlign:'right', right:15}}>
                <AddIcon onClick={handleHome} sx={{fontSize:'40px', cursor: 'pointer', p:.5, background:'blueviolet', color:'white', borderRadius:10}}/>
            </Box>
        </Box>
    )
}

export default DailyActivities
