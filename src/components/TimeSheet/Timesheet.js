import React, { useContext, useState } from 'react'
import { Container, Button } from '@mui/material'
import {DatePicker, Input, Space } from 'antd';
import "./Timesheet.css"
import myContext from '../../Context'
import { PlusCircleOutlined, CopyOutlined, SaveOutlined, CloseOutlined } from '@ant-design/icons'

import DropDown from './DropDown';
import TempleteCard from './TempleteCard';

import { Modal, } from 'antd';





function Timesheet(props) {
    const context = useContext(myContext)
    const [inputlist, setInputlist] = useState([{}])
    const [timeOne, setTimeOne] = useState()
    const [timeTwo, setTimeTwo] = useState()
    const [timeThree, setTimeThree] = useState()
    const [timeFour, setTimeFour] = useState()
    const [timeFive, setTimeFive] = useState()
    const [timeSix, setTimeSix] = useState()
    const [timeSeven, setTimeSeven] = useState()
    const [name, setName] = useState("")
    const [selectedItems, setSelectedItems] = useState({})
    const [templetes, setTempletes] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleChangeOne = (e) => {
        e.preventDefault()
        setTimeOne(e.target.value)
        console.log(e);
    }
    const getTimeOne = (e) => {
        e.preventDefault();
        var num = timeOne;
        var rhours = Math.floor(num / 60);
        var minutes = (num / 60 - rhours) * 60;
        var rminutes = Math.round(minutes);
        num = `${rhours} : ${rminutes}:00`;
        console.log("num", num)
        setTimeOne(num)
    }
    const handleChangeTwo = (e) => {
        e.preventDefault()
        setTimeTwo(e.target.value)
        console.log(e);
    }
    const getTimeTwo = (e) => {
        e.preventDefault();
        var num = timeTwo;
        var rhours = Math.floor(num / 60);
        var minutes = (num / 60 - rhours) * 60;
        var rminutes = Math.round(minutes);
        num = `${rhours} : ${rminutes}:00`;
        console.log("num", num)
        setTimeTwo(num)
    }
    const handleChangeThree = (e) => {
        e.preventDefault()
        setTimeThree(e.target.value)
        console.log(e);
    }
    const getTimeThree = (e) => {
        e.preventDefault();
        var num = timeThree;
        var rhours = Math.floor(num / 60);
        var minutes = (num / 60 - rhours) * 60;
        var rminutes = Math.round(minutes);
        num = `${rhours} : ${rminutes}:00`;
        console.log("num", num)
        setTimeThree(num)
    }
    const handleChangeFour = (e) => {
        e.preventDefault()
        setTimeFour(e.target.value)
        console.log(e);
    }
    const getTimeFour = (e) => {
        e.preventDefault();
        var num = timeFour;
        var rhours = Math.floor(num / 60);
        var minutes = (num / 60 - rhours) * 60;
        var rminutes = Math.round(minutes);
        num = `${rhours} : ${rminutes}:00`;
        console.log("num", num)
        setTimeFour(num)
    }
    const handleChangeFive = (e) => {
        e.preventDefault()
        setTimeFive(e.target.value)
        console.log(e);
    }
    const getTimeOneFive = (e) => {
        e.preventDefault();
        var num = timeFive;
        var rhours = Math.floor(num / 60);
        var minutes = (num / 60 - rhours) * 60;
        var rminutes = Math.round(minutes);
        num = `${rhours} : ${rminutes}:00`;
        console.log("num", num)
        setTimeFive(num)
    }
    const handleChangeSix = (e) => {
        e.preventDefault()
        setTimeSix(e.target.value)
        console.log(e);
    }
    const getTimeSix = (e) => {
        e.preventDefault();
        var num = timeSix;
        var rhours = Math.floor(num / 60);
        var minutes = (num / 60 - rhours) * 60;
        var rminutes = Math.round(minutes);
        num = `${rhours} : ${rminutes}:00`;
        console.log("num", num)
        setTimeSix(num)
    }
    const handleChangeSeven = (e) => {
        e.preventDefault()
        setTimeSeven(e.target.value)
        console.log(e);
    }
    const getTimeSeven = (e) => {
        e.preventDefault();
        var num = timeSeven;
        var rhours = Math.floor(num / 60);
        var minutes = (num / 60 - rhours) * 60;
        var rminutes = Math.round(minutes);
        num = `${rhours} : ${rminutes}:00`;
        console.log("num", num)
        setTimeSeven(num)
    }



    const handleRemoveClick = index => {
        const list = [...inputlist];
        list.splice(index, 1);
        setInputlist(list);
    };


    // handle click event of the Add button
    const handleAddClick = () => {
        setInputlist([...inputlist, {}]);
    };
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setName("")
    };


    const getData = (e) => {
        e.preventDefault()
        setTempletes(templetes => [...templetes, name])
        setName("")
        setIsModalVisible(false)



    }
    const getFilteredProjects = (name) => {
        const removedItems = { ...selectedItems };
        delete removedItems[name];
        const removedItemsList = Object.values(removedItems);
        return props.projects.filter(item => {
            return !removedItemsList.includes(item.id);
        });
    }

    const getValue = (name) => {
        return selectedItems[name];
    }

    const selectItem = (name, value) => {
        setSelectedItems({

            ...selectedItems,
            [name]: value
        });
    };
    const handleRemoveTemplete= index => {
        const list = [...templetes];
        list.splice(index, 1);
        setTempletes(list);
    };

    const renderTempleteList = templetes.map((name, i) => (
        <TempleteCard name={name} handleRemoveTemplete={handleRemoveTemplete}> </TempleteCard>

    ))
   



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
                        {inputlist.map((i) => {
                            return (<div><tr>
                                <div>
                                    <td><DropDown

                                        selectItem={selectItem ? handleAddClick : ""}
                                        meals={getFilteredProjects()}
                                        value={getValue()}
                                    /></td></div>

                                <td onDoubleClick={getTimeOne}><input type="text" className="inputSize" value={timeOne ? timeOne : ''} onChange={handleChangeOne} /></td>
                                <td onDoubleClick={getTimeTwo}><input type="text" className="inputSize" value={timeTwo ? timeTwo : ''} onChange={handleChangeTwo} /></td>
                                <td onDoubleClick={getTimeThree}><input type="text" className="inputSize" value={timeThree ? timeThree : ''} onChange={handleChangeThree} /></td>
                                <td onDoubleClick={getTimeFour}><input type="text" className="inputSize" value={timeFour ? timeFour : ''} onChange={handleChangeFour} /></td>
                                <td onDoubleClick={getTimeOneFive}><input type="text" className="inputSize" value={timeFive ? timeFive : ''} onChange={handleChangeFive} /></td>
                                <td className="back" onDoubleClick={getTimeSix}><input type="text" className="inputSize" value={timeSix ? timeSix : ''} onChange={handleChangeSix} /></td>
                                <td className="back" onDoubleClick={getTimeSeven}><input type="text" className="inputSize" value={timeSeven ? timeSeven : ''} onChange={handleChangeSeven} /></td>

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
                {/* <button> <CopyOutlined style={{ fontSize: "1.2rem" }} /><span><select style={{ border: "none", margin: "0px" }}>
                    <option selected value="copy">Copy last weak</option>
                    <option value="copyone">Copy activities only</option>
                    <option value="copytwo">Copy activities and time</option></select> </span></button> */}

                <button onClick={showModal}><SaveOutlined style={{ fontSize: "1.2rem" }} /><span>Save as templete</span></button>
            </div>
            
            
            
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
                                <Button key="submit" type="primary" onClick={getData}  >
                                    Save
                                </Button>,

                            ]}
                        >
                            <h5 className='templete-heading'>Create Templete</h5>
                            <Input type="text" placeholder="Templete name" value={name} onChange={(e) => setName(e.target.value)} />

                        </Modal>
                    </div>}
              </div>
            <div>

            </div>
            {templetes.length>0 ?
             <div className="templeteContainer">
                <h5>Templetes</h5>
                {renderTempleteList}
            </div>: <></>}




        </Container>
    )
}

export default Timesheet
