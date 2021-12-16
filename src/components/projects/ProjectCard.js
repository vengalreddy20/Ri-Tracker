import React,{useState,useContext} from 'react'
import Tasks from './Tasks'
import Access from './Access'
import myContext from '../../Context'
import {Card,Container} from '@mui/material'
import { Tabs, Radio } from 'antd';
const { TabPane } = Tabs;

function ProjectCard() {
    const context=useContext(myContext)
    const [size,setSize] = useState()


    const onChange = e => {
        setSize({ size: e.target.value });
      }
        

    // const [tasks,setTasks] = useState(true)
    // const [access,setAccess] = useState(false)

    // const tasksHandler = () => {
    //     setTasks(true)
    //     setAccess(false)
    // }
    // const accessHandler = () => {
    //     setTasks(false)
    //     setAccess(true)
    // }

    // const [toggleFlag,setToggleFlag] = useState(true)
    // const [groupFlag,setGroupFlag] = useState(false)


    // const toggle = () => {
    //     setToggleFlag(true)
    //     setGroupFlag(false)
    // }

    // const toggle1 = () => {
    //     setToggleFlag(false)
    //     setGroupFlag(true)
    // }



    return (
        
        <Container className={context.state.collapsed ? 'projectWidthCollapsed' :'projectWidth'}>
            <div>
            <h1 className="projects-heading">Project access</h1>
            </div>

            <Tabs defaultActiveKey="1" type="card" size={size} style={{marginTop:'4rem'}}>
            <TabPane tab="TASKS" key="1" className='teams-tab1'>
            <Tasks/>
            </TabPane>
            <TabPane tab="ACCESS" key="2">
            <Access />
            </TabPane> 
            </Tabs>

            {/* <div>
            <button onClick= {tasksHandler}>TASKS</button>
            <button onClick={accessHandler}>Access</button>
            {tasksHandler? <div><Tasks /></div> : accessHandler? <Access /> : ''}
            </div> */}
            {/* <div>
            <button className={toggle ? 'member-styles': 'jh' } onClick={toggle}>
                tasks
            </button>
           
            <button style={{marginLeft:'10px',color:'grey',padding:'5px',width:'80px'}} onClick={toggle1}>
             access
            </button>
            {toggleFlag ? <div><Tasks/></div>: groupFlag ? <Access/>: ''}
            </div> */}
       
        </Container>
    )
}

export default ProjectCard