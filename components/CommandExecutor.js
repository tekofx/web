import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { blue } from '@mui/material/colors';
import { TextField, ListItemButton } from '@mui/material';
import HomeIcon from "@mui/icons-material/Home";
import CollectionsIcon from "@mui/icons-material/Collections";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PetsIcon from "@mui/icons-material/Pets";
import InfoIcon from "@mui/icons-material/Info";
import { useHotkeys } from "react-hotkeys-hook";
import { useState } from 'react';
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";
import Cookies from "universal-cookie";

import { useRouter } from 'next/router';
function SimpleDialog(props) {
    const { i18n } = useTranslation();
    const router = useRouter();


    const [open, setOpen] = useState(false)
    useHotkeys('ctrl+k', () => setOpen(!open), [open])
    const [selectedIndex, setSelectedIndex] = useState(0);


    const commands = [
        {
            title: "Home", description: "Go to Home page", icon: <HomeIcon />, action: function () { router.push("home") }
        },
        {
            title: "Gallery", description: "Go to Gallery page", icon: <CollectionsIcon />, action: function () { router.push("gallery") }
        },
        {
            title: "Fursona", description: "Go to Fursona page", icon: <PetsIcon />, action: function () { router.push("fursona") }
        },
        {
            title: "Projects", description: "Go to projects page", icon: <AccountTreeIcon />, action: function () { router.push("projects") }
        },
        {
            title: "About", description: "Go to About page", icon: <InfoIcon />, action: function () { router.push("about") }
        },
        {
            title: "English", description: "Change Language to English", icon: <LanguageIcon />, action: function () {

                const cookies = new Cookies();
                cookies.set("lang", "en");
                i18n.changeLanguage("en")
            }
        },
        {
            title: "Spanish", description: "Change Language to Spanish", icon: <LanguageIcon />, action: function () {
                const cookies = new Cookies();
                cookies.set("lang", "es");
                i18n.changeLanguage("es");
            }
        }

    ]

    function onCommandClicked(command, index) {
        setSelectedIndex(index)
        console.log("Clicked command " + command.title)
        command.action();
        setOpen(false)
    }


    const handleListItemClick = (key) => {
        if (selectedIndex > 0 && key === "up") {
            setSelectedIndex(selectedIndex - 1)

        }
        if (selectedIndex < commands.length - 1 && key === "down") {
            setSelectedIndex(selectedIndex + 1)

        }
    };

    const handleEnter = () => {

        var command = commands[selectedIndex];
        console.log(command)
        command.action();
        setOpen(false)


    }

    useHotkeys('up', () => handleListItemClick("up"), [selectedIndex])
    useHotkeys('down', () => handleListItemClick("down"), [selectedIndex])
    useHotkeys("enter", () => handleEnter(selectedIndex), [selectedIndex])


    return (
        <Dialog open={open} fullWidth="xl">
            <DialogTitle>Command Executor</DialogTitle>
            <TextField variant='standard' sx={{ width: "80%" }} />

            <List sx={{ pt: 0 }}>
                {commands.map((command, index) => (
                    <ListItem onClick={() => onCommandClicked(command, index)} key={index}>
                        <ListItemButton
                            selected={selectedIndex === index}
                        >

                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                    {command.icon}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={command.title} secondary={command.description} />
                        </ListItemButton>
                    </ListItem>
                ))}


            </List>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo(props) {

    return (
        <div>

            <SimpleDialog
                open={props.open}
            />
        </div>
    );
}