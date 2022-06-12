import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    dailyactivities: {
        // textAlign: 'center',
        // background: 'blue',
        margin: '0 auto',
        minHeight: '99vh',
        border: '1px solid blue',
        maxWidth: 500,

        '& .nav_header': {
            // background: '#8A2BE2',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '25px 10px',
            color: '#8A2BE2',
        },

        '& .dailyactivities_list_container': {
            padding: '25px 25px 0 25px',

            '& .daily_lists': {
                listStyle: 'none',
                paddingLeft: 0,
                margin: 0,

                '& .daily_lists_item': {
                    marginBottom: 10,
                    // cursor: 'pointer',
                    // border: '.5px solid #2f0670',
                    boxShadow: '0px 0px 5px #Cacacb',
                    padding: '20px',
                    borderRadius: 5,
                    display: 'flex',
                    justifyContent: 'space-between',

                    '& .daily_lists_item_link': {
                        textDecoration: 'none',
                        color: 'black',
                        fontWeight:'bold',
                    },

                    // '&:hover': {
                    //     boderBottom: '1px solid orange',
                    //     // boxShadow: '5px 10px #888888',
                    //     background: '#Efe8fd',
                    // }
                },
            }
        }
    }
}))