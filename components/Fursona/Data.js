import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { GiBroadsword } from "react-icons/gi";
import { BsFillLightningChargeFill, BsFillShieldFill } from "react-icons/bs";
import { FaBrain } from "react-icons/fa";
import getLang from "../Language/Lang";
import { motion } from "framer-motion"

export default function Attributes() {
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
