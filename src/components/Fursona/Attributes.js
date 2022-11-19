import { Paper, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function Attributes() {
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <b>Attributes</b>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography variant="body2">Fuerza</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2">45</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body2">Fuerza</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2">45</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body2">Fuerza</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2">45</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body2">Fuerza</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2">45</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body2">Fuerza</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2">45</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
