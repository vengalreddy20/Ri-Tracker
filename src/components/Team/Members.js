import React, { useState, useEffect } from 'react';

import { Container } from '@mui/material'
import { Input } from 'antd';

import './team.css'
import { Button,Modal } from "antd";
import MemberCard from './MemberCard';







const Members=()=> {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [email,setEmail]=useState("")
  const [membersData,setMembersData]=useState([])
    
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setName("")
    };




  const [userData, setUserData] = useState([])
  const [userSearchData, setUserSearchData] = useState([])
  const [name, setName] = useState()

  useEffect(() => {
    const data = [
      { name: 'Recruitment', email: 'Retail HR', role: '32.56h', group: '-' },
      { name: 'Freshers', email: 'Retail Freshers', role: '56.3h', group: '-' },
      { name: 'unsa', email: ' dasa', role: '56.3h', group: '-' },
      { name: 'fcdfa', email: 'dasa ', role: '56.3h', group: '-' }

    ];

    setUserData(data)
    setUserSearchData(data)

  }, [])

  const handleSearch = () => {
    // debugger
    const newData = userData
      .filter(x => x.name == (name == '' ? x.name : name))
    // .filter(y => y.email == (email == '' ? y.email : email))
    // .filter(y => y.profession == (profession == '' ? y.profession : profession))
    setUserSearchData(newData)
  }
  const addHandler = () => {
    setMembersData(membersData => [...membersData, email])
    setEmail("")
    setIsModalVisible(false)
  }
 

  const renderMembersList = membersData.map((name) => (
    <MemberCard name={name}> </MemberCard>

))
const keyPressed = ({ key }) => {
    
  if (key === "Enter") {
    addHandler()
  }       
  
}



  return (
    <Container className="memberContainer" >

      <div className='top-container'>
        <div>
          <select className='members-dropdown'>
            <option className='option'>Show all</option>
            <option>Show active</option>
            <option>Show inactive</option>
            <option>Show invited</option>
          </select>

          <Input type="search" placeholder="search by name or email" className="members-searchbar" onChange={(e) => setName(e.target.value)} />
          <Button type="primary" onClick={handleSearch}>APPLY FILTER</Button>
        </div>
        <div>
          <Button type="primary" onClick={showModal}>ADD NEW MEMBER</Button>
        </div>
      </div>
      
      <div className='membersContainer'>
        <h6>Members</h6>
        <div className='membersData'> 
          <p>Name</p>
          <p>Email</p>
          <p>Role</p>
          <p>Group</p>
        </div>
       
        </div>
      <p>{ renderMembersList}</p>

        {isModalVisible &&
                    <div>


                        <Modal
                            visible={isModalVisible}
                            onCancel={handleCancel}
                            footer={[
                                <Button key="back" onClick={handleCancel} >
                                    Cancel
                                </Button>,
                                <Button key="submit" type="primary" onClick={addHandler}   >
                                    Add
                                </Button>,

                            ]}
                        >
                            <h5 className='templete-heading'>Add member by Email</h5>
                            <Input type="text" placeholder="add new member by email address" value={email} onChange={(e)=>setEmail(e.target.value)} onKeyPress={keyPressed} />

                        </Modal>
                    </div>}
      

      {/* <Paper sx={{ width: '90%' }}>
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
                userSearchData && userSearchData.length > 0 ?
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
                  : ''
              }

            </TableBody>
          </Table>
        </TableContainer>

      </Paper>
      <div>
      {isModalVisible &&
                    <div>


                        <Modal
                            visible={isModalVisible}
                            onCancel={handleCancel}
                            footer={[
                                <Button key="back" onClick={handleCancel} >
                                    Cancel
                                </Button>,
                                <Button key="submit" type="primary"   >
                                    Add
                                </Button>,

                            ]}
                        >
                            <h5 className='templete-heading'>Add member by Email</h5>
                            <Input type="text" placeholder="add new member by email address" />

                        </Modal>
                    </div>}
      </div> */}
    </Container>
  );
}
export default Members
