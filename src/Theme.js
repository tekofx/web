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
        },
        p: {
            color: '#fff',
            textAlign: 'justify',


        }
    },

});

Theme.typography.h1 = {
    fontSize: '2rem',
    paddingBottom: '0.5rem',
    paddingTop: '0.5rem',
    '@media (min-width:600px)': {
        fontSize: '2.5rem',
        paddingBottom: '0.7rem',
        paddingTop: '0.7rem',
    },
    [Theme.breakpoints.up('md')]: {
        fontSize: '3.5rem',
        paddingBottom: '10rem',
        paddingTop: '1rem',
    },
};

Theme.typography.p = {
    fontSize: '0.8rem',
    '@media (min-width:600px)': {
        fontSize: '1rem',
    },
    [Theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
    },
};



//Theme = responsiveFontSizes(Theme);

export default Theme;