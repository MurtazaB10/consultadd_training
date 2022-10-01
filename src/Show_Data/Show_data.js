import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Show_data = forwardRef((props, ref) => {
  const [data, setData] = useState([]);
  const [trigger, setTrigger] = useState(true);
  useImperativeHandle(ref, () => ({
    sortByName() {
      function compareNames(a, b) {
        return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
      }
      data.sort(compareNames);
      setData(data);
      setTrigger(!trigger);
    },
    sortByAge() {
      function compareAges(a, b) {
        return a.age > b.age ? 1 : a.age < b.age ? -1 : 0;
      }
      data.sort(compareAges);
      setData(data);
      setTrigger(!trigger);
    },
  }));
  const fetchdata = () => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

export default Show_data;
