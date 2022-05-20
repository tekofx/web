import { createTheme } from "@material-ui/core";
import { responsiveFontSizes } from "@mui/material";

var Theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#0099b2',
        },
        secondary: {
            main: '#edf069',
        },
        background: {
            default: '#101010',
            paper: '#28272a',
        },
        error: {
            main: '#f0a19c',
        },
        info: {
            main: '#259bf9',
        },
    },
    components: {
        MuiAvatar: {
            variants: [
                {
                    props: { variant: 'logo' },
                    style: {
                        width: '10%',
                        height: 'auto',
                        maxWidth: '10%',
                        maxHeight: '10%',
                    }
                }
            ]
        },


    },
    typography: {
        h1: {
            fontSize: '3.5rem',
            fontWeight: 'bold',
            color: '#fff',
            fontStyle: 'italic',
        },
        h2: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#fff',
            fontStyle: 'italic',

        },
        appBar: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#fff',
            fontStyle: 'italic',
            textDecoration: 'none',
        }
    },

});


Theme = responsiveFontSizes(Theme);

export default Theme;