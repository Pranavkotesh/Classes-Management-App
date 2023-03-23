import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import { TableContainer, TableBody, Grid } from "@mui/material";
function AppTable({ titles, minHeight, color, border, borderBody }) {
  return (
    <TableContainer
      component={Paper}
      sx={{ boxShadow: 0, border: border, mt: 2, mb: 4 }}
    >
      <Table>
        <TableHead>
          <TableRow>
            {titles.map((item) => (
              <TableCell sx={{ color: color || "black" }}>{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody sx={{ border: borderBody }}>
          <TableCell sx={{ border: 0 }}>
            {/* <Grid item xs={12} sx={{ minHeight: minHeight || 130 }}></Grid> */}
          </TableCell>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AppTable;
