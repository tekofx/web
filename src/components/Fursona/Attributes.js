import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { GiBroadsword } from "react-icons/gi";
import { BsFillLightningChargeFill, BsFillShieldFill } from "react-icons/bs";
import { FaBrain } from "react-icons/fa";

export default function Attributes() {
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography>Attributes</Typography>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography variant="body2">
                <GiBroadsword />
                Ataque
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2">1</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body2">
                <BsFillLightningChargeFill />
                Velocidad
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2">4</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body2">
                <FaBrain />
                Inteligencia
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2">2</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body2">
                <BsFillShieldFill />
                Defensa
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2">3</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
