import React from "react";
import { Grid } from "@mui/material";
import { useState } from "react";
import { Dialog } from "@mui/material";
import Slide from "@mui/material/Slide";
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Reference(props) {
    const [open, setOpen] = useState(false);

    var width = props.width || "100%"

    const toggleOpen = () => {
        setOpen(!open);
    };
    return (
        <>
            <img
                src={props.img}
                alt=""
                width={width}
                onClick={toggleOpen}
            />
            <Dialog TransitionComponent={Transition} open={open} PaperProps={{
                style: {
                    backgroundColor: 'transparent',
                },
            }}>
                <img src={props.img} style={{ maxHeight: "100vh", maxWidth: "100%", margin: "auto" }} alt="" onClick={toggleOpen} />
            </Dialog>
        </>
    );
}