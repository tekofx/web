import { createTheme } from "@material-ui/core";

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
            main: '#101010',
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
        fontFamily: [
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
        ].join(','),

        appBar: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#fff',
            fontStyle: 'italic',
            textDecoration: 'none',
        },
        colorSquareText: {
            textAlign: 'center',
            fontSize: '1.5rem',
        }
    },

});


/* These atrributes overrides the top attributes*/
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
        paddingBottom: '1rem',
        paddingTop: '1rem',
    },
};

Theme.typography.h2 = {
    fontSize: '2.0rem',
    paddingBottom: '0.3rem',
    paddingTop: '0.3rem',

    '@media (min-width:600px)': {
        fontSize: '2.5rem',
        paddingBottom: '0.5rem',
        paddingTop: '0.5rem',
    },
    [Theme.breakpoints.up('md')]: {
        fontSize: '3rem',
        paddingBottom: '0.7rem',
        paddingTop: '0.7rem',
    },
};

Theme.typography.body1 = {
    fontSize: '0.8rem',
    textAlign: 'justify',


    '@media (min-width:600px)': {
        fontSize: '1rem',
    },
    [Theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
    },
};



//Theme = responsiveFontSizes(Theme);

export default Theme;