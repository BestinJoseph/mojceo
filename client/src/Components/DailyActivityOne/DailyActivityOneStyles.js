import { makeStyles } from "@mui/styles";

export default makeStyles((theme)=>({
    dailyactivityone: {
        margin: '0 auto',

        '& .nav_header': {
            background: '#8A2BE2',
            display: 'flex',
            padding: 10,
            color: 'white',
        },

        '& .activity_container': {
            padding: 20,

            '& .activity_lists_container': {
                

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
                        background: '#F7F9FE'
                    }
                }
            }
        }
    }
}))
