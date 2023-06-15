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
export default function Stats() {
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
        <Paper sx={{ p: 2 }}>

            <Typography variant="h2" >
                Stats
            </Typography>
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
        </Paper>
    );
}
