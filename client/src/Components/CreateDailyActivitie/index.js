import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { Formik, Form, Field, FieldArray } from 'formik'
import { useNavigate, useParams } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'

import useStyles from './CreateDailyActivitieStyles'
import { postActivity, putActivity } from '../../Actions/ActivitiesAction'
import moment from 'moment'

const CreateDailyActivitie = () => {
    const classes = useStyles()
    let initialValues = useRef({project: '', activities: ['']})
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { activities, auth } = useSelector( state => state )
    const [availability, setAvailability] = useState(false)
    const id = useParams()

    useEffect(()=>{
        const UserActivity = () => {
            if (_.isEmpty(id)) {
                const loggedUseData = activities.activities.filter( active => active.fullName.includes(auth.user.firstName) ? active :  false)
                const dateIndex = loggedUseData.findIndex( ind => {
                    return moment(ind.createdAt).format("DD-MM-yyyy") === moment(Date.now()).format("DD-MM-yyyy")
                })
                setAvailability( dateIndex === -1 ? true : false )
            } else {
                const activity = activities.activities.filter( acts => acts._id === id.id)[0]
                
                initialValues.current = {project: activity.project, activities: activity.activities}
                setAvailability( true )
            }
        }
        UserActivity()
    },[activities, auth, id, initialValues])
    
    // console.log(initialValues)

    const handleOnSubmit = (Values, actions) => {
        if ( _.isEmpty(id)) {
            Values.fullName = `${auth.user.firstName} ${auth.user.lastName}`
            Values.department = "material"
            Values.number = 205
            if( availability ) {
                dispatch(postActivity(Values))
                navigate('/dailytracker')
                actions.resetForm()
            }
        } else {
            dispatch(putActivity(id.id, Values))
            navigate(`/${id.id}`)
            actions.resetForm()
        }
    }

    const handleBack = () => {
        navigate('/dailytracker')
    }

    return (
        <Box className={classes.dailyactivities}>
            <Box>
                <Box className={classNames('nav_header')}>
                    <Box sx={{display:'flex', alignItems:'center',  }}>
                        <ArrowBackIcon sx={{ mr: 2, cursor: 'pointer', }} onClick={handleBack}/>
                        <Typography variant='body' sx={{fontWeight:'bold' }}>Daily Tracker Log</Typography>
                    </Box>
                </Box>
                <Box sx={{px:'10%', mt:4}}>
                    {
                        availability ? 
                            <Formik initialValues={initialValues.current} onSubmit={handleOnSubmit}>
                                { ({values}) => (
                                    <Form>
                                    <Box sx={{mb: 3}}>
                                        <Field name="project" type="text" label="Project Name" as={TextField} fullWidth/>
                                    </Box>
                                    <Box sx={{mb: 2}}>
                                        
                                        <FieldArray name="activities" render={ 
                                            arrayHelper => (
                                                <Box>
                                                    <Box sx={{mb: 1, display: 'flex'}}>
                                                        <Typography variant='h6'>My Activities</Typography>
                                                        <Button type="button" onClick={ () => arrayHelper.push('')}>Add</Button>
                                                    </Box>
                                                    {
                                                        values.activities && values.activities.length > 1 ? (
                                                            values.activities.map( (actvity, ind) => (
                                                                <Grid key={ind} container>
                                                                    <Grid item xs={10}>
                                                                        <Field name={`activities.${ind}`} as={TextField}/>
                                                                    </Grid>
                                                                    <Grid item xs={2}>
                                                                        
                                                                    </Grid>
                                                                </Grid>
                                                            ))
                                                        ) : (
                                                            <Field name={`activities.${0}`} as={TextField} type="text"/>
                                                        )
                                                    }
                                                </Box>
                                            )
                                        } />
                                    </Box>
                                    <Button variant="contained" color="success" size="large" type="submit">{ _.isEmpty(id) ? 'Submit' : 'Update' }</Button>
                                </Form>
                                )}
                            </Formik>
                        :
                            <Box>
                                <Typography variant="h6">You already created today's activities Log</Typography>
                            </Box>
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default CreateDailyActivitie
