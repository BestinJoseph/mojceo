import { makeStyles } from "@mui/styles";

export default makeStyles((theme)=>({
    dailyactivityone: {
        margin: '0 auto',
        maxWidth: 500,
        minHeight: '99vh',
        border: '1px solid blue',

        '& .nav_header': {
            display: 'flex',
            alignItems: 'center',
            padding: 10,
            color: '#8A2BE2',
            height: 50,
        },

        '& .activity_container': {
            padding: 20,
            marginTop: 10,

            '& .activity_lists_container': {
                marginTop: 30,

                '& .activities_lists': {
                    listStyle: 'none',
                    padding: 0,

                    '& .list_item': {
                        color: '#2f0670',
                        borderBottom: '1px solid #2f0670',
                        // boxShadow: '0.5px 3px 0px #Cacacb',
                        padding: '15px 15px',
                        marginBottom: '7px',
                        // borderRadius: 8,
                        background: '#F7F9FE',

                        '&:last-child': {
                            borderBottom: 'none',
                        }
                    }
                }
            }
        }
    }
}))
