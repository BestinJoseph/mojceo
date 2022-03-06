import { makeStyles } from "@mui/styles";

export default makeStyles((theme)=>({
    signin: {
        height: '100vh',
        display: 'flex',
        alignItems:'center',

        '& .sign_in_container': {
            width: '500px',
            padding: '0 1rem',
            display: 'flex',
            flexDirection:'column',

            '& .sign_in_logo': {
                width: 88,
                height: 100,
                display:'flex',
                alignSelf:'center',
                marginBottom: 25,
            },

            '& .auth_form_container': {
                marginBottom:30,
            }
        }
    }
}))