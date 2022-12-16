import { Grid, Paper, Typography, Avatar } from "@mui/material"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { GiBroadsword } from "react-icons/gi";
import { BsFillLightningChargeFill, BsFillShieldFill } from "react-icons/bs";
import { FaBrain } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import getLang from "../Language/Lang";
import { motion } from "framer-motion"
import { MoreTimeOutlined } from "@mui/icons-material";
export default function Info() {
    return (
        <Paper sx={{ paddingLeft: 2, paddingRight: 2 }}>
            <Grid container spacing={2}>

                <Grid item xs={12} lg={12}>
                    <Typography align="center" variant="h3">
                        Teko Fresnes Xaiden
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} order={{ xs: 1, lg: 2 }}>
                    <Avatar
                        style={{ alignSelf: "center" }}
                        alt="Remy Sharp"
                        src={process.env.PUBLIC_URL + "img/avatar.jpg"}
                        sx={{
                            width: "80%",
                            height: "auto",
                            marginLeft: "10%",
                            marginRigth: "10%",
                            marginBottom: "5%",
                        }}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={5}
                    lg={4}
                    order={{ xs: 2, lg: 1 }}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <Data />
                </Grid>

                <Grid
                    item
                    xs={12}
                    md={3}
                    lg={4}
                    order={{ xs: 5, lg: 5 }}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <Attributes />
                </Grid>

            </Grid>
        </Paper>)
}

function Attributes() {
    const t = getLang().fursona;
    var style = { marginRight: "2%", verticalAlign: "middle" };
    const values = [
        {
            name: t.attributes.strength,
            value: 1,
            icon: <GiBroadsword style={style} />,
        },
        {
            name: t.attributes.speed,
            value: 4,
            icon: <BsFillLightningChargeFill style={style} />,
        },
        {
            name: t.attributes.intelligence,
            value: 2,
            icon: <FaBrain style={style} />,
        },
        {
            name: t.attributes.defense,
            value: 3,
            icon: <BsFillShieldFill style={style} />,
        },
    ];

    return (
        <Table size="small" >
            <TableHead>
                <TableRow>
                    <TableCell>
                        <Typography>{t.attributes.title}</Typography>
                    </TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {values.map((value, key) => (
                    <TableRow key={key} component={motion.tr}
                        whileHover={{ scale: 1.080 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                        <TableCell>
                            <Typography variant="body1">
                                {value.icon}
                                {value.name}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="body1">{value.value}</Typography>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}


function Data() {
    const t = getLang().fursona;
    var style = { marginRight: "2%", verticalAlign: "middle" };
    const values = [
        {
            name: t.species.title,
            value: t.species.value,
            icon: <GiBroadsword style={style} />,
        },
        {
            name: t.gender.title,
            value: t.gender.value,
            icon: <BsFillLightningChargeFill style={style} />,
        },
        {
            name: t.height,
            value: "1.80 m",
            icon: <FaBrain style={style} />,
        },
        {
            name: t.birth,
            value: "22/09",
            icon: <BsFillShieldFill style={style} />,
        },
        {
            name: t.personality.title,
            value: t.personality.value,
            icon: <BsFillShieldFill style={style} />,
        },
    ];

    return (
        <Table size="small" >
            <TableHead>
                <TableRow>
                    <TableCell>
                        <Typography>Info</Typography>
                    </TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {values.map((value, key) => (
                    <TableRow key={key} component={motion.tr}
                        whileHover={{ scale: 1.080 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                        <TableCell>
                            <Typography variant="body1">
                                <b>{value.name}</b>
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="body1">{value.value}</Typography>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
