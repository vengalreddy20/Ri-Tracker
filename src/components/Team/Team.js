import React,{useState,useContext} from 'react'
import ColumnGroupingTable from './Table'
import CustomizedTables from './Group'
import myContext from '../../Context'
import {Card,Container} from '@mui/material'
import './team.css'
import { Tabs, Radio } from 'antd';
const { TabPane } = Tabs;




function Team() {
    const context=useContext(myContext)
    const [size,setSize] = useState()


    
    

    const onChange = e => {
        setSize({ size: e.target.value });
      }
        

    return (
        <Container className={context.state.collapsed ? 'projectWidthCollapsed' :'projectWidth'}>

        <div >
            <h1 className='team-heading'>Team</h1>
            {/* <button className={toggle ? 'member-styles': 'jh' } onClick={() => {
                toggle()
            }}>
                MEMBERS
            </button>
           
            <button style={{marginLeft:'10px',color:'grey',padding:'5px',width:'80px'}} onClick={() => {
                toggle1()
            }}>
             GROUPS
            </button>
            {toggleFlag ? <div><ColumnGroupingTable/></div>: groupFlag ? <CustomizedTables/>: ''}
            </div> */}
            <Tabs defaultActiveKey="1" type="card" size={size} style={{marginTop:'4rem'}}>
            <TabPane tab="Members" key="1" className='teams-tab1'>
            <ColumnGroupingTable/>
            </TabPane>
            <TabPane tab="Groups" key="2">
            <CustomizedTables />
            </TabPane> 
            {/* <TabPane tab="Card Tab 3" key="3">
            Content of card tab 3
            </TabPane> */}
            </Tabs>
        </div>
        </Container>
    )
}

export default Team