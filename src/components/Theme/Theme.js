import { createTheme } from "@material-ui/core";

const Theme = createTheme({
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
        }
    }
});

export default Theme;