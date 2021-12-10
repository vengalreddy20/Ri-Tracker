import React, { useContext, useState } from 'react'
import { Container } from '@mui/material'
import { Card, DatePicker, Input, Space } from 'antd';
import "./Timesheet.css"
import myContext from '../../Context'
import { PlusCircleOutlined, CopyOutlined, SaveOutlined, CloseOutlined } from '@ant-design/icons'
import { NavDropdown } from 'react-bootstrap'
// import { Alert } from 'antd'
import Alert from '@mui/material/Alert';




function Timesheet() {
    const context = useContext(myContext)
    const [inputlist, setInputlist] = useState([{}])
    const [display, setDisplay] = useState(false)

    

    const handleRemoveClick = index => {
        const list = [...inputlist];
        list.splice(index, 1);
        setInputlist(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputlist([...inputlist, {}]);
    };
    const show = () => {

        setDisplay(true)

    }

    const onClose = (e) => {
        console.log(e, 'I was closed.');
    };


    return (
        <Container className={context.state.collapsed ? 'timesheetWidthCollapsed' : 'timesheetWidth'}>
            <div className="header">
                <h1 style={{ marginTop: "7rem" }}>Timesheet</h1>
                <div style={{ marginTop: "7rem" }}>

                    <Space direction="vertical" >
                        <DatePicker style={{ fontSize: "1.9rem", padding: "9px" }} />
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
                    <tbody className="table-body" >
                        {inputlist.map((x, i) => {
                            return (<div><tr>
                                <div>
                                    <td><NavDropdown id="table-body-title" title={'select Project'}>
                                        <NavDropdown.Item href="#/action-1"><Input type="text" placeholder="Find peoject or client" /></NavDropdown.Item>
                                        <NavDropdown.Item href="#/action-1"><div><p>RETAIL FRESHERS</p></div></NavDropdown.Item>
                                        <NavDropdown.Item href="#/action-1"><div><p>RETAIL FRESHERS</p></div></NavDropdown.Item>



                                    </NavDropdown></td></div>
                                <td><input className="inputSize" /></td>
                                <td><input className="inputSize" /></td>
                                <td><input className="inputSize" /></td>
                                <td><input className="inputSize" /></td>
                                <td><input className="inputSize" /></td>
                                <td><input className="inputSize" /></td>
                                <td><input className="inputSize" /></td>
                                <td><div style={{ display: "flex" }}>
                                    <span>00:00:00</span>
                                    {inputlist.length !== 1 ? < button style={{ border: "none", background: "white" }} onClick={() => handleRemoveClick(i)}><CloseOutlined style={{ marginLeft: "7px" }} /></button> : ''}</div></td>


                            </tr>




                            </div>
                            )
                        })}
                        {/* <tr className="table-bottom">
                            <td>
                                <div><span>Total:</span></div>

                            </td>
                            <td>00:00:00</td>
                            <td>00:00:00</td>
                            <td>00:00:00</td>
                            <td>00:00:00</td>
                            <td>00:00:00</td>
                            <td>00:00:00</td>
                            <td>00:00:00</td>
                            <td>00:00:00</td>
                        </tr> */}










                    </tbody>
                </table>
            </div>
            <div className="button-container">
                <button onClick={handleAddClick}><PlusCircleOutlined style={{ color: "#03A9F4", fontSize: "1.2rem" }} /><span>Add new row</span></button>
                <button> <CopyOutlined style={{ fontSize: "1.2rem" }} /><span><select style={{ border: "none", margin: "0px" }}>
                    <option selected value="copy">Copy last weak</option>
                    <option value="copyone">Copy activities only</option>
                    <option value="copytwo">Copy activities and time</option></select> </span></button>

                <button onClick={() => show()}><SaveOutlined style={{ fontSize: "1.2rem" }} /><span>Save as templete</span></button>
            </div>
            <div>
                {/* {display && <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <div style={{background:"#666666", display: "flex", justifyContent: "center", alignItems: "center " }}>
                        <Alert style={{ width: "30%", height: "30vh", position: "absolute", background: "white", textAlign: "start" }}
                            message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
                            type="warning"
                            closable
                            onClose={onClose} />
                            
                    </div>
                </div>}      */}

                {display && <div style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#666666",width:"100%",height:"100vh"}}>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"30%",height:"20%"}}>
                        <h1>Templete</h1>
                        <input type="text" />
                    </div>
                </div> }

            </div>


        </Container>
    )
}

export default Timesheet
