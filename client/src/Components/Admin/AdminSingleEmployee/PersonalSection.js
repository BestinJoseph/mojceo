import { Box, Chip, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const PersonalSection = () => {
    const profilePic = ''

    return (
        <Box sx={{mt:3}}>
            <Grid container>
                <Grid item md={5}>
                    <Paper sx={{width:175, height:200}}>
                        <img src={profilePic} alt="profile pic" />
                    </Paper>
                </Grid>
                <Grid item md={7}>
                    <Box>
                        <Typography variant="h6" sx={{pb:1, fontWeight:'bold', }}>Bestin Joseph</Typography>
                        <Typography variant="body1" sx={{fontWeight:'bold', color:'blueviolet'}}>Developer</Typography>
                        <Typography variant="body2">Iqama: 2323250775</Typography>
                        <Typography variant="body2">Emp. ID: 205</Typography>
                        <Typography variant="body2">bestin@ojce.com</Typography>
                        <Typography variant="body2">Mobile: +966 57 288 0203</Typography>
                        <Typography variant="body2">Nationality: INDIAN</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Box>
                <Box sx={{mt:3}}>
                    <Typography variant="body1" sx={{pb:1, fontWeight:'bold', }}>Educational Qualification</Typography>
                    <Typography variant="body1" sx={{fontWeight:'bold', color:'blueviolet'}}>M Sc. Biotechnology</Typography>
                </Box>
                <Box sx={{mt:3}}>
                    <Typography variant="body1" sx={{pb:1, fontWeight:'bold', }}>Certifications Courses</Typography>
                    <Typography variant="body1" sx={{fontWeight:'bold', color:'blueviolet'}}>Diploma in Web Development</Typography>
                </Box>
                <Box sx={{mt:3}}>
                    <Typography variant="body1" sx={{pb:1, fontWeight:'bold', }}>Certificated In</Typography>
                    <Stack direction="row" spacing={1} sx={{mb:1}}>
                        <Chip label="ASTM 56/56M"/>
                        <Chip label="ASTM 31/31M"/>
                        <Chip label="ASTM 172"/>
                        <Chip label="ASTM 89/89M"/>
                    </Stack>
                    <Stack direction="row" spacing={1} >
                        <Chip label="ISO 17025:2017"/>
                    </Stack>
                </Box>
                <Box sx={{mt:3}}>
                    <Typography variant="body1" sx={{pb:1, fontWeight:'bold', }}>Permanent Address</Typography>
                    <Typography variant="body2" sx={{}}>Koovarivillai, Mekkamandap PO, KK Dist, Tamil Nadu, India - 629166</Typography>
                </Box>
                <Box sx={{mt:3}}>
                    <Typography variant="body1" sx={{pb:1, fontWeight:'bold', }}>Professional Experiences</Typography>
                    <Typography variant="body2" sx={{}}>In MOJCEO: 9 Years</Typography>
                    <Typography variant="body2" sx={{}}>In Other: 5 Years</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default PersonalSection
