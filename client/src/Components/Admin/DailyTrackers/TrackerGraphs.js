import React from 'react'
import { Box, Typography } from '@mui/material'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'

const TrackerGraphs = () => {
    const data = [{name: 'Page A', uv: 400, pv: 1800, amt: 2400}, 
    {name: 'Page B', uv: 100, pv: 1500, amt: 500}, 
    {name: 'Page C', uv: 500, pv: 2000, amt: 1500},
    {name: 'Page D', uv: 100, pv: 200, amt: 600}
];

    return (
        <Box sx={{mt:5}}>
            <Typography variant="body1" sx={{fontWeight: 600, mb:2}}>June, 2022</Typography>
            <LineChart width={1200} height={300} data={data}>
                <Line type="monotone" dataKey="pv" stroke="green" />
                <Line type="monotone" dataKey="amt" stroke="red" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </Box>
    )
}

export default TrackerGraphs