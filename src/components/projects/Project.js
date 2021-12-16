import React, { useState, useEffect, useContext } from 'react'
import myContext from '../../Context'
import { Card, Container } from '@mui/material'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StarOutlined, DownOutlined, SearchOutlined, CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Button, Input } from "antd";
import './Project.css'
import ProjecrCard from './ProjectCard';
import { Link } from 'react-router-dom'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';





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

function createData(name, client, tracked, access, favourites, star) {
  return { name, client, tracked, access, favourites, star };
}

const rows = [
  createData('Recruitment', 'Retail HR', '32.56h', '-', 'public'),
  createData('Freshers', 'Retail Freshers', '56.3h', '-', 'public'),

];







function Project() {
  const context = useContext(myContext)

  const [sortType, setSortType] = useState('asc')
  const [userData, setUserData] = useState([])
  const [userSearchData, setUserSearchData] = useState([])
  const [name, setName] = useState()



  useEffect(() => {
    const data = [
      { name: 'Recruitment', client: 'Retail HR', tracked: '32.56h', access: '-', favourites: 'public' },
      { name: 'Freshers', client: 'Retail Freshers', tracked: '56.3h', access: '-', favourites: 'public' },
      { name: 'unsa', client: ' dasa', tracked: '56.3h', access: '-', favourites: 'public' },
      { name: 'fcdfa', client: 'dasa ', tracked: '56.3h', access: '-', favourites: 'public' }

    ];

    setUserData(data)
    setUserSearchData(data)

  }, [])

  const handleSearch = () => {
    // debugger
    const newData = userData
      .filter(x => x.name == (name == '' ? x.name : name))
    // .filter(y => y.profession == (profession == '' ? y.profession : profession))
    setUserSearchData(newData)
  }


  const sorted = userSearchData.sort((a, b) => {
    const isReversed = (sortType === 'asc') ? 1 : -1
    return isReversed * a.name.localeCompare(b.name)

  })


  return (
    <Container className={context.state.collapsed ? 'projectWidthCollapsed' : 'projectWidth'}>
      <div>
        <h1 className='projects-heading'>Projects</h1>
      </div>


      <div className="searchContainer">
        <SearchOutlined className='search-icon' />
        <Input className="search-bar" type="text" placeholder="Project name" onChange={(e) => setName(e.target.value)} />
        <Button  type="primary" onClick={handleSearch}>APPLY FILTER</Button>
      </div>



      <Card><h2 className='projects-subheading'>Projects</h2></Card>
      <TableContainer component={Paper}>
        <Table >
          <TableHead >
            <TableRow >
              <StyledTableCell className='table' >NAME<span><ArrowDropUpIcon className="arrow-dropup" onClick={() => { setSortType('asc') }} /></span><span><ArrowDropDownIcon className='arrow-dropdown' onClick={() => { setSortType('desc') }} /></span></StyledTableCell>
              <StyledTableCell className='table' align="left">CLIENT <span><ArrowDropUpIcon className="arrow-dropup" onClick={() => { setSortType('asc') }} /></span><span><ArrowDropDownIcon className='arrow-dropdown' onClick={() => { setSortType('desc') }} /></span></StyledTableCell>
              <StyledTableCell className='table' align="left">TRACKED</StyledTableCell>
              {/* <StyledTableCell className='table' align="left">ACCESS</StyledTableCell> */}
              {/* <StyledTableCell className='table' align="left">FAVOURITES</StyledTableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {
              userSearchData && userSearchData.length > 0 ?
                userSearchData.map(item => (
                  <StyledTableRow key={item.name}>
                    <Link to='/projectCard'>
                      <StyledTableCell component="th" scope="row" >
                        {item.name}
                      </StyledTableCell>
                    </Link>
                    <StyledTableCell align="left">{item.client}</StyledTableCell>
                    <StyledTableCell align="left">{item.tracked}</StyledTableCell>
                    <StyledTableCell align="left">{item.access}</StyledTableCell>
                    {/* <StyledTableCell align="left">{row.favourites}</StyledTableCell> */}
                  </StyledTableRow>
                ))
                : 'No data'
            }

          </TableBody>
        </Table>
      </TableContainer>

    </Container>


  )
}

export default Project