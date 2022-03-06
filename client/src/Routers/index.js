import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import Layout from '../Components/Layout'

import {NotFound} from '../Components'
import CreateDailyActivitie from '../Components/CreateDailyActivitie'
import DailyActivities from '../Components/DailyActivities'
import DailyActivityOne from '../Components/DailyActivityOne'
import Evaluvation from '../Components/Evaluvation'
import Home from '../Components/Home'
import Profile from '../Components/Profile'
import SignIn from '../Components/SignIn'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const Routers = () => {
    return (
        <Box sx={{m:'auto', maxWidth: 500,}}>
            <Router>
                <Routes>
                    <Route exact path="/signin" element={<PublicRoute><SignIn /></PublicRoute>} />
                    <Route path="/create" element={<PrivateRoute><CreateDailyActivitie /></PrivateRoute>} />
                    <Route path="/:_id" element={<PrivateRoute><DailyActivityOne /></PrivateRoute>} exact />
                    <Route path="/edit/:id" element={<PrivateRoute><CreateDailyActivitie /></PrivateRoute>} exact />
                    <Route path="/dailytracker" element={<PrivateRoute><DailyActivities /></PrivateRoute>} exact />
                    <Route path="/evaluvation" element={<PrivateRoute><Evaluvation /></PrivateRoute>} exact />
                    <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} exact />
                    <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} exact />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Router>
        </Box>
    )
}

export default Routers
