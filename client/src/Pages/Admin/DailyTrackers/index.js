import { Box, Grid, Link, Paper, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import TrackerGraphs from '../../../Components/Admin/DailyTrackers/TrackerGraphs'

import TrackerMenus from '../../../Components/Admin/DailyTrackers/TrackerMenus'


const AdminTrackers = () => {
    const { activities } = useSelector( state => state)

    // console.log(activities)

    return (
        <Box>
            <TrackerMenus />
            <TrackerGraphs />
        </Box>
    )
}

export default AdminTrackers
