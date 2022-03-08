import { Box, Chip, Stack, Typography } from '@mui/material'
import React from 'react'

const AdminTestInformation = () => {
    return (
        <Box sx={{mt:2}}>
            <Typography variant="body1">ASTM 56 / 56M</Typography>
            <Typography variant="body1">2017 Verson</Typography>
            <Box sx={{mt:2}}>
                <Typography variant="h6" sx={{fontWeight:'bold', mb:1}}>Authorized Technicians</Typography>
                <Stack spacing={1} direction="row">
                    <Chip label="Amiullah Mohammed" />
                    <Chip label="Ravi Shankar" />
                    <Chip label="Senthil Krishnan" />
                </Stack>
            </Box>
        </Box>
    )
}

export default AdminTestInformation
