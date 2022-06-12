import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    dailyactivities: {
        margin: '0 auto',
        maxWidth: 500,
        minHeight: '99vh',
        border: '1px solid #767676',

        '& .nav_header': {
            // background: '#8A2BE2',
            display: 'flex',
            padding: '25px 10px',
            color: '#8A2BE2',
        },
    },
    textarea: {
        width: '95.1%',
        height: '500px',
        borderRadius: 4,
        outline: 'none',
        border: '1px solid #767676',
        fontSize: '17px',
        padding: '2% !important',
        display: 'flex',
        margin: '0',
    }
}))