import { makeStyles } from "@mui/styles";

export default makeStyles((theme)=>({
    signin: {
        // width: 500,
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '& .sign_in_container': {
            // border: '1px solid pink',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

            '& .sign_in_logo': {
                textAlign: 'center',
                marginBottom: '3rem',
                width: '5.5rem',
                height: '6rem',
            },

            '& .auth_form_container': {
                // border: '1px solid blue',
                width: '80vw',
                display: 'flex',
                displayDirection: 'row',
                marginBottom: '2rem',
                
            }
        }
    }
}))