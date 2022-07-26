import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function DataTable(props) {
  return (
    <>
      <div className='container text-center'>
        <div className='row justify-content-center mt-5'>
        <h5>{props.name}</h5>
            <Table aria-label="simple table" style={{ width: "50%",backgroundColor:"lightgrey"}}>
              <TableHead>
                <TableRow>
                  {props.headers.map((item, index) => {
                    return <TableCell key={index}>{item}</TableCell>
                  })}
                </TableRow>
              </TableHead>
              <TableBody style={{backgroundColor:"white"}}>
                {props.data.map((item, index) => {
                  return <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    {item.map((eachItem, index) => {
                      return <TableCell key={index}>{eachItem}</TableCell>;
                    })}
                  </TableRow>
                })
                }
              </TableBody>
            </Table>
        </div>

      </div>
    </>

  );
}

export default DataTable;