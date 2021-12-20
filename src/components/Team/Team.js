import React, { useState, useContext } from 'react'
import Members from './Members'
import Group from './Group'
import myContext from '../../Context'
import { Container } from '@mui/material'
import './team.css'
import { Tabs, Radio } from 'antd';
const { TabPane } = Tabs;




function Team() {
    const context = useContext(myContext)
    



    return (
        <Container className={context.state.collapsed ? 'projectWidthCollapsed' : 'projectWidth'}>

            <div >
                <div>
                    <h1 className='team-heading'>Team</h1>
                </div>

                <Tabs defaultActiveKey="1" type="card" className="tabContainer">
                    <TabPane tab="Members" key="1">
                        <Members />
                    </TabPane>
                    <TabPane tab="Groups" key="2">
                        <Group />
                    </TabPane>

                </Tabs>
            </div>
        </Container>
    )
}

export default Team