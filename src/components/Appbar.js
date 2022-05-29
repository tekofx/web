import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Logo from '../img/logo.png';
import { FaDeviantart, FaGithub, FaTwitter, FaMastodon, Fa500Px, FaInstagram } from 'react-icons/fa';
import { ThemeProvider } from '@mui/material';
import Theme from '../Theme';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';


const ResponsiveAppBar = () => {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const { t, i18n } = useTranslation();
    const pages = [{ "page": t('pageHome'), "navigate": "/home" }, { "page": t('pageProjects'), "navigate": "/projects" }, { "page": t('pageGallery'), "navigate": "/gallery" }, { "page": t('pageAbout'), "navigate": "/about" }];


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const changeLanguageHandler = (value) => {
        const languageValue = value
        i18n.changeLanguage(languageValue);
    }

    return (
        <ThemeProvider theme={Theme}>
            <AppBar position="sticky">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        {/*Mobile Menu*/}

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none', md: 'none', lg: "none" } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', sm: 'none', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page.page} onClick={function (event) {
                                        handleCloseNavMenu();
                                        navigate(page.navigate);
                                    }}>
                                        {page.page}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        {/*Desktop Menu*/}
                        <Avatar src={Logo} />

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page.page}
                                    onClick={function (event) {
                                        handleCloseNavMenu();
                                        navigate(page.navigate);
                                    }}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page.page}
                                </Button>
                            ))}

                        </Box>
                        <Box>
                            <IconButton target="_blank" href="https://twitter.com/teko_fx">
                                <FaTwitter />
                            </IconButton>
                            <IconButton target="_blank" href="https://meow.social/web/@teko">
                                <FaMastodon />
                            </IconButton>
                            <IconButton target="_blank" href="https://github.com/tekofx">
                                <FaGithub />
                            </IconButton>
                        </Box>

                        <Box>
                            <Button onClick={() => changeLanguageHandler('es')}>ESP</Button>
                            <Button onClick={() => changeLanguageHandler('en')}>ENG</Button>


                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
};
export default ResponsiveAppBar;
