import { Container,Card } from '@mui/material'
import React,{useContext} from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import myContext from '../../Context'
import "./Client.css"


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(name, project,lead, members, days) {
    return { name,project,lead, members, days  };
  }
  
  const rows = [
    createData('Abhishek', 'clockify','Abhishek', 5, 15),
    createData('Bhaskar', 'AWS','Abhishek', 10, '-'),
    createData('Ashok', 'Decathlon','Abhishek', 20, '-'),
   
  ];
  

function Clients() {
    const context=useContext(myContext)
    return (
        <Container className={context.state.collapsed ? 'clientWidthCollapsed' :'clientWidth'}>
             <div>
                <h1 style={{marginTop:"7rem",marginBottom:"4rem"}}>Clients</h1>
            </div>
        <Card><h1 style={{color:"grey",marginLeft:"5px"}}>Clients</h1></Card>

            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className="clientTable">NAME</StyledTableCell>
            <StyledTableCell className="clientTable" align="left">PROJECT</StyledTableCell>
            <StyledTableCell className="clientTable" align="left">LEAD</StyledTableCell>
            <StyledTableCell className="clientTable" align="left">MEMBERS</StyledTableCell>
            <StyledTableCell className="clientTable" align="left">DAYS</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.project}</StyledTableCell>
              <StyledTableCell align="left">{row.lead}</StyledTableCell>
              <StyledTableCell align="left">{row.members}</StyledTableCell>
              <StyledTableCell align="left">{row.days}</StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </Container>
    )
}

export default Clients
