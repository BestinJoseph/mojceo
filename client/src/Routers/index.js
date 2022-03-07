import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import Layout from '../Components/Layout'

import {NotFound} from '../Components'
import AdminHome from '../Components/Admin/AdminHome'
import CreateDailyActivitie from '../Components/CreateDailyActivitie'
import DailyActivities from '../Components/DailyActivities'
import DailyActivityOne from '../Components/DailyActivityOne'
import Evaluvation from '../Components/Evaluvation'
import Home from '../Components/Home'
import Profile from '../Components/Profile'
import SignIn from '../Components/SignIn'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
//Admin Components
import AdminRoute from './AdminRoute'
import AdminProjects from '../Components/Admin/AdminProjects'
import AdminTests from '../Components/Admin/AdminTests'
import AdminTrackers from '../Components/Admin/AdminTrackers'
import AdminEmployees from '../Components/Admin/AdminEmployees'
import AdminSingleEmployee from '../Components/Admin/AdminSingleEmployee'
import AdminEmployeeHome from '../Components/Admin/AdminEmployeeHome'

const Routers = () => {
    return (
        <Box sx={{m:'auto',}}>
            <Router>
                <Routes>
                    <Route exact path="/admin" element={<AdminRoute><AdminHome /></AdminRoute>}>
                        <Route exact path="employees" element={<AdminEmployees />} />
                        <Route exact path="employees/:id" element={<AdminSingleEmployee />} />
                        <Route exact path="one" element={<AdminSingleEmployee />} />
                        <Route exact path="projects" element={<AdminProjects />} />
                        
                        <Route exact path="trackers" element={<AdminTrackers />} />
                        <Route exact index element={<AdminEmployees />} />
                    </Route>
                    <Route exact path="/admin/tests" element={<AdminRoute><AdminTests /></AdminRoute>} />
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
