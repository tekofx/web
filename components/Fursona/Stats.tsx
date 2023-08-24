import { Paper, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { GiBroadsword } from "react-icons/gi";
import { BsFillLightningChargeFill, BsFillShieldFill } from "react-icons/bs";
import { FaBrain } from "react-icons/fa";
import { motion } from "framer-motion";
export default function Stats() {
  var style = { marginRight: "2%", verticalAlign: "middle" };
  const values = [
    {
      name: "Strength",
      value: 1,
      icon: <GiBroadsword style={style} />,
    },
    {
      name: "Speed",
      value: 4,
      icon: <BsFillLightningChargeFill style={style} />,
    },
    {
      name: "Intelligence",
      value: 2,
      icon: <FaBrain style={style} />,
    },
    {
      name: "Defense",
      value: 3,
      icon: <BsFillShieldFill style={style} />,
    },
  ];

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h2">Stats</Typography>
      <Table size="small">
        {/*  <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography>{t.attributes.title}</Typography>
                        </TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead> */}
        <TableBody>
          {values.map((value, key) => (
            <TableRow
              key={key}
              // @ts-ignore
              component={motion.tr}
              whileHover={{ scale: 1.08 }}
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
