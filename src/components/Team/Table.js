import  React,{useState,useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import axios from 'axios'
import './team.css'
import {Button } from "antd";

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'email', label: 'Email', minWidth: 100 },
  {
    id: 'role',
    label: 'Role',
    minWidth: 80,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'group',
    label: 'Group',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  }
];

// function createData(name, Email, Role, Group) {
//   return { name, Email, Role, Group };
// }

// const rows = [
//   createData('(not joined yet)', 'ansha@theretailinsights.com', <button>Admin</button>,''),
//   createData('Chandra Shekar MV', 'chandrashekar@theretailinsights.com', '', <button>Recruitment</button>),
//   createData('NS Nagarjuna Naidu', 'nagarjuna@theretailinsights.com','', <button>Recruitment</button>),
//   createData('Santhoshk N7', 'santhoshk.n7@gmail.com', <button>Owner</button>, ''),
//   createData('(not joined yet)', 'shahid@theretailinsights.com', '', <button>Freshers</button>),
//   createData('Sravan Kumar Reddy (you)', 'sravan@theretailinsights.com', '', <button>Freshers</button>),
//   createData('vengala reddy', 'vengalareddy@theretailinsights.com','', <button>Freshers</button>)
// ];


const menu = (
    <Menu>
      <Menu.Item key="0" style={{background:'lightgray'}}>
        <a href="#">Show all</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">Show active</a>
      </Menu.Item>
      <Menu.Item key="3">Show inactive</Menu.Item>
      <Menu.Item key="4">Show invited</Menu.Item>
      
    </Menu>
  );

  // <select>
  //   <option>Show all</option>
  //   <option>SHow active</option>
  //   <option>Show inactive</option>
  //   <option>Show all</option>
  // </select>

export default function ColumnGroupingTable() {
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);



  const [userData,setUserData] = useState([])
    const [userSearchData,setUserSearchData] = useState([])
    const [name,setName] = useState()

    useEffect(() => {
      const data = [
          {name:'Recruitment', email:'Retail HR', role:'32.56h', group: '-'},
          {name:'Freshers', email:'Retail Freshers', role:'56.3h',group: '-'},
         {name:'unsa', email:' dasa', role:'56.3h', group:'-'},
          {name:'fcdfa',email: 'dasa ', role:'56.3h',group: '-'}
        
        ];
        
        setUserData(data)
        setUserSearchData(data)

  },[])

    const handleSearch =() => {
      // debugger
      const newData = userData
      .filter(x => x.name == (name== '' ? x.name : name))
      // .filter(y => y.email == (email == '' ? y.email : email))
      // .filter(y => y.profession == (profession == '' ? y.profession : profession))
      setUserSearchData(newData)
  }
  

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  // const menuHandler = (e) => {
  //  <div className='members-dropdown'>
  //   <option className='option'>Show all</option>
  //   <option>Show active</option>
  //   <option>Show inactive</option>
  //   <option>Show all</option>
  //   </div>  

  // }


//   useEffect(() => {
//     var config = {
//     method: 'get',
//     url: 'https://api.clockify.me/api/v1/workspaces/6192513371e028522c62bc50/projects',
//     headers: { 
//       'x-api-key': 'NjYzMzNhZjMtZGQ4Ny00NGNiLTliYjMtZDdkNjQ2ZjFlOTY0'
//     }
//   };
  
//   axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
//   },[])


  return (
      <>
    {/* <button style={{marginTop:'1rem',marginLeft:'7rem',width:'90px',padding:'5px'}}>Show All  */}
    <select className='members-dropdown'>
    <option className='option'>Show all</option>
    <option>Show active</option>
    <option>Show inactive</option>
    <option>Show invited</option>
  </select>
    {/* <Dropdown overlay={menu} trigger={['click']} >
    <a className="ant-dropdown-link" onSelect={menuHandler}>
        <DownOutlined style={{marginLeft:'5px',color:'black'}}/>
        <ArrowDropDownIcon style={{marginLeft:'5px',color:'black'}}/>
    </a>
    </Dropdown> */}
    {/* </button> */}
    <input type = "search" placeholder="search by name or email" className="members-searchbar"     onChange ={(e) => setName(e.target.value)}/>
    <Button style={{marginLeft:"10rem"}} type="primary" onClick = {handleSearch}>APPLY FILTER</Button>

    <Paper sx={{ width: '90%' }}>
      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow>
              <TableCell align="end" colSpan={5}>
                Members
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>

            {
            userSearchData && userSearchData.length>0 ?
             userSearchData
              // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                )
              })
            :''
            }
            
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
    </>
  );
}
