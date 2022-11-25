import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Theme from "../../../src/theme";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import ColorChip from "./ColorChip";

function createData(part, hex, rgb) {
  return { part, hex, rgb };
}

export default function ColorsTable() {
  const { t } = useTranslation();

  const rows = [
    createData(
      t("colorPart1"),
      <ColorChip label="45 , 45 , 45" bgcolor="#2D2D2D" color="white" />,
      <ColorChip label="#2D2D2D" bgcolor="#2D2D2D" color="white" />
    ),

    createData(
      t("colorPart2"),
      <ColorChip label="160, 160, 160" bgcolor="#A0A0A0" color="black" />,
      <ColorChip label="#A0A0A0" bgcolor="#A0A0A0" color="black" />
    ),
    createData(
      t("colorPart3"),
      <ColorChip label="247, 247, 247" bgcolor="#F7F7F7" color="black" />,
      <ColorChip label="#F7F7F7" bgcolor="#F7F7F7" color="black" />
    ),
    createData(
      t("colorPart4"),
      <ColorChip label="44, 125, 230" bgcolor="#2C7DE6" color="black" />,
      <ColorChip label="#2C7DE6" bgcolor="#2C7DE6" color="black" />
    ),
    createData(
      t("colorPart5"),
      <ColorChip label="0, 219, 255" bgcolor="#00DBFF" color="black" />,
      <ColorChip label="#00DBFF" bgcolor="#00DBFF" color="black" />
    ),
    createData(
      t("colorPart6"),
      <ColorChip label="240, 161, 156" bgcolor="#F0A19C" color="black" />,
      <ColorChip label="#F0A19C" bgcolor="#F0A19C" color="black" />
    ),
    createData(
      t("colorPart7"),
      <ColorChip label="17, 181, 93" bgcolor="#11B55D" color="black" />,
      <ColorChip label="#11B55D" bgcolor="#11B55D" color="black" />
    ),
    createData(
      t("colorPart8"),
      <ColorChip label="226, 229, 101" bgcolor="#E2E565" color="black" />,
      <ColorChip label="#E2E565" bgcolor="#E2E565" color="black" />
    ),
  ];

  return (
    <TableContainer>
      <Table
        sx={{
          maxWith: "100%",
          minWidth: "100%",
        }}
        size="small"
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="body2">{t("colorParts")}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2">RGB</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2">HEX</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, key) => (
            <TableRow
              key={key}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Typography variant="body2">{row.part}</Typography>
              </TableCell>
              <TableCell>{row.hex}</TableCell>
              <TableCell>{row.rgb}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
