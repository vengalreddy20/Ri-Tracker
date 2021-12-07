import React,{useContext} from 'react'
import { Container } from '@mui/material'
import { Card, DatePicker, Space } from 'antd';
import{UnorderedListOutlined } from '@ant-design/icons'
import "./Timesheet.css"
import myContext from '../../Context'
import {PlusCircleOutlined ,CopyOutlined,SaveOutlined,DownOutlined} from '@ant-design/icons'
import { Menu, Dropdown, Button } from "antd";



const menu = (
    <Menu >
      <Menu.Item key="1" >
        Copy activities only
      </Menu.Item>
      <Menu.Item key="2">
        Copy activities and time
      </Menu.Item>
      
    </Menu>
  );

function Timesheet() {
    const context=useContext(myContext)

    return (
            <Container className={context.state.collapsed ? 'timesheetWidthCollapsed' :'timesheetWidth'}>
            <div className="header">
                <h1 style={{marginTop:"7rem"}}>Timesheet</h1>
                <div style={{marginTop:"7rem"}}>
                  <UnorderedListOutlined  style={{fontSize:"1.6rem",marginRight:"1.2rem",border:"1px solid grey",padding:"7px"}} />
                  <Space direction="vertical" >
                    <DatePicker style={{fontSize:"1.9rem",padding:"9px"}} />
                  </Space>
                </div>
            </div>
            
            <div className="table-container">
                <table>
                    <thead className="table-head">
                        <tr>
                           <th className="project-title" align="left">Projects</th>
                           <th align="left">Mo, Dec6</th>
                           <th align="left">Tu, Dec7</th>
                           <th align="left">We, Dec8</th>
                           <th align="left">Th, Dec9</th>
                           <th align="left">Fr, Dec10</th>
                           <th align="left">Sa, Dec11</th>
                           <th align="left">Su, Dec12</th>
                           <th align="left">Total:</th>


                        </tr>
                       
                    </thead>
                    <tbody className="table-body">
                        <tr>
                            <td><a href="#">amazon</a></td>
                            <td><input className="inputSize" /></td>
                            <td><input className="inputSize"  /></td>
                            <td><input className="inputSize"  /></td>
                            <td><input className="inputSize"  /></td>
                            <td><input className="inputSize"  /></td>
                            <td><input className="inputSize"  /></td>
                            <td><input className="inputSize"  /></td>
                            <td><div>
                                <span>00:00:00</span></div></td>

                        </tr>
                        <tr>
                            <td><a href="#" >amazon</a></td>
                            <td><input className="inputSize" /></td>
                            <td><input className="inputSize"  /></td>
                            <td><input className="inputSize"  /></td>
                            <td><input className="inputSize"  /></td>
                            <td><input className="inputSize"  /></td>
                            <td><input className="inputSize"  /></td>
                            <td><input className="inputSize"  /></td>
                            <td><div>
                                <span>00:00:00</span></div></td>

                        </tr>

                    </tbody>
                    <tbody>
                       <tr>
                            <td><a href="#" >Select project</a></td>
                            <td><input className="inputSize" /></td>
                            <td><input className="inputSize"  /></td>
                            <td><input className="inputSize"  /></td>
                            <td><input className="inputSize"  /></td>
                            <td><input className="inputSize"  /></td>
                            <td><input className="inputSize"  /></td>
                            <td><input className="inputSize"  /></td>
                            <td><div>
                                <span>00:00:00</span></div></td>

                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="button-container">
                <button><PlusCircleOutlined  style={{color:"#03A9F4",fontSize:"1.2rem"}}/><span>Add new row</span></button>
                <button> <CopyOutlined style={{fontSize:"1.2rem"}} /><span>Copy last week</span></button>
                {/* <Dropdown overlay={menu} style={{paddingBottom:"0.5rem"}}>
                <Button >
                <CopyOutlined style={{fontSize:"1.2rem"}} /><span>Copy last week</span><DownOutlined />
                </Button>
               </Dropdown> */}
                <button><SaveOutlined style={{fontSize:"1.2rem"}} /><span>Save as templete</span></button>
            </div>


            </Container>
    )
}

export default Timesheet
