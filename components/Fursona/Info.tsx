import { Paper, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { GiBroadsword } from "react-icons/gi";
import { BsFillLightningChargeFill, BsFillShieldFill } from "react-icons/bs";
import { FaBrain } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Info() {
  var style = { marginRight: "2%", verticalAlign: "middle" };
  const values = [
    {
      name: "Species",
      value: "Arctic Fox",
      icon: <GiBroadsword style={style} />,
    },
    {
      name: "Gender",
      value: "Male",
      icon: <BsFillLightningChargeFill style={style} />,
    },
    {
      name: "Height",
      value: "1.80 m",
      icon: <FaBrain style={style} />,
    },
    {
      name: "Birthdate",
      value: "22/09",
      icon: <BsFillShieldFill style={style} />,
    },
    {
      name: "Personality",
      value: "Positive, shy, cheerful",
      icon: <BsFillShieldFill style={style} />,
    },
  ];

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h2">Info</Typography>

      <Table size="small">
        {/* <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography>Info</Typography>
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
    </Paper>
  );
}
