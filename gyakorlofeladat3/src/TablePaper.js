import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

export const TablePaper = ({ equipments }) => {
  return (
    <Paper elevation={5} sx={{ marginBottom: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Equipment</TableCell>
            <TableCell>Taken by</TableCell>
            <TableCell>Subject</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {equipments.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell>{item.equipment}</TableCell>
                <TableCell>{item.takenBy}</TableCell>
                <TableCell>{item.subject}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};
