import React, {useState,useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
//   '&:last-child td, &:last-child': {
//     border: 0,
//   },
}));

// function createData(name, access) {
//   return { name,access};
// }

// const rows = [
//   createData('Freshers','Sravan Kumar Reddy, Vengala Reddy'),
//   createData('Recruitment','Chandra Sekhar MV,NS Nagarjuna Naidu'),
// ];

export default function Access() {
    const [groupData,setGroupData] = useState([])

    useEffect(() => {
        var config = {
        method: 'get',
        url: 'https://api.clockify.me/api/v1/workspaces/6192513371e028522c62bc50/projects',
        headers: { 
          'x-api-key': 'NjYzMzNhZjMtZGQ4Ny00NGNiLTliYjMtZDdkNjQ2ZjFlOTY0'
        }
      };
   
      axios(config)
      .then((res) => {setGroupData(res.data)
        
      })
      .catch(function (error) {
        console.log(error);
      });
      },[])
      
     
  return (
      <>
      <div>
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>  
              <TableCell align="end" colSpan={5}>
                Users
              </TableCell>
            </TableRow>
            {/* <StyledTableCell style={{border:1}}>Groups</StyledTableCell> */}
            {/* <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell> */}
            {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
        
          <TableRow>
          <StyledTableCell align='left'>Name</StyledTableCell>
          <StyledTableCell className="access">Access</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>  
        {
            groupData.map((items) => (
            <StyledTableRow key={items.name}>
              <StyledTableCell component="th" scope="row">
                {items.name}
              </StyledTableCell>
              <StyledTableCell align="center">{items.access}</StyledTableCell>
            </StyledTableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
    </div>
    <div style={{marginTop:'2rem'}}>
        <TableContainer component={Paper} >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>  
              <TableCell align="end" colSpan={5}>
                Groups
              </TableCell>
            </TableRow>
            {/* <StyledTableCell style={{border:1}}>Groups</StyledTableCell> */}
            {/* <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell> */}
            {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
        
          <TableRow>
          <StyledTableCell align='left'>Name</StyledTableCell>
          <StyledTableCell align="right" style={{marginLeft:'13rem'}}>Access</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>  
        {
            groupData.map((items) => (
            <StyledTableRow key={items.name}>
              <StyledTableCell component="th" scope="row">
                {items.name}
              </StyledTableCell>
              <StyledTableCell align="center">{items.access}</StyledTableCell>
            </StyledTableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
    
  );
}