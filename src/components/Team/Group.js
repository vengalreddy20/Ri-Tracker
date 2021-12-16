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
import SortIcon from '@mui/icons-material/Sort';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './team.css'


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

export default function CustomizedTables() {
    const [groupData,setGroupData] = useState([])
    const [sortType,setSortType] = useState('asc')

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


      // const sorted = groupData.sort()
      
   const sorted = groupData.sort( (a,b) => {
     const isReversed = (sortType === 'asc') ? 1 :-1
     return isReversed * a.name.localeCompare(b.name)
   })
      
     
  return (
    <TableContainer component={Paper} >
      <Table  aria-label="customized table">
        <TableHead className="groups-row-border">
          <TableRow>
            <StyledTableCell style ={{border:1}}>Groups</StyledTableCell>
            {/* <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell> */}
            {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
          </TableRow>
          <TableRow>
          <StyledTableCell align='left'> Name <span><ArrowDropUpIcon className="arrow-dropup" onClick={() => {setSortType('asc')}}/></span><span><ArrowDropDownIcon className='arrow-dropdown' onClick={() => {setSortType('desc')}}/></span>
          </StyledTableCell>
          <StyledTableCell className="access">Access</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>  
        {
            sorted.map((items) => (
            <StyledTableRow key={items.name}>
              <StyledTableCell component="th" scope="row">
                {items.name}
              </StyledTableCell>
              <StyledTableCell align="center">{items.projects}</StyledTableCell>
            </StyledTableRow>
          ))} 
           
                        
          

        </TableBody>
      </Table>
    </TableContainer>
  );
}