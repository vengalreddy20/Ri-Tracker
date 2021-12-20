import { Container, Card } from '@mui/material'
import React, { useContext, useState,useRef} from 'react'
import { Input, Button } from 'antd'

import myContext from '../../Context'
import "./Client.css"
import axios from 'axios';
import ClientCard from './ClientCard'


const Clients = () => {

  // const[data,setData]=useState({})

  // useEffect(() => {


  //   const fetchdata =async () =>{
  //   const response= await axios.get(`${url}`,{
  //     headers:{
  //       'x-api-key':key

  //     }
  //   })
  //   setData(response.data)
  //   console.log(response.data)

  //   }
  //   fetchdata()

  // }, [])
  const context = useContext(myContext)

  const [clientName, setClientName] = useState("")
  const [clientData, setClientData] = useState([])
  const [searchTerm,setSearchTerm]=useState("")
  const [searchResults,setSearchResults]=useState([])
 
const ref = useRef("")


  const handleChange = (e) => {
    e.preventDefault()
    setClientName(e.target.value)
  }

  const addHandler = () => {
    setClientData(data => [...data, clientName])
   
  }



  const renderClientList = clientData.map((name) => (
    <ClientCard name={name}> </ClientCard>

  ))
  const keyPressed = ({ key }) => {
    
    if (key === "Enter") {
      addHandler()
    }       
    
  }
  const getSearchTerm=(event)=>{
    setSearchTerm(event.target.value)
    if(searchTerm !==""){
      const newClientList=clientData.filter((client)=>{
      return (Object.values(client).join(" ").toLowerCase().includes(searchTerm.toLowerCase()))
      })
      setSearchResults(newClientList)
    }else{
      setSearchResults(clientData)
    }

  }
  return (

    <Container className={context.state.collapsed ? 'clientWidthCollapsed' : 'clientWidth'}>
      <div>
        <h1 className="main-heading">Clients</h1>
      </div>
      <div className="header-part">

        <select className='dropdown'>
          <option className='option'>Show all</option>
          <option>Show active</option>
          <option>Show inactive</option>
          <option>Show invited</option>
        </select>
        <Input ref={ref} type="search" placeholder="search by name" className="searchbar" value={searchTerm} onChange={getSearchTerm} />


        <Input type="search" placeholder="Add by client" className='addtask' onChange={handleChange} onKeyPress={keyPressed} />
        <Button type="primary" className="addbutton" onClick={addHandler} >Add</Button>

      </div>
      <div>
        <h3 className="table-heading">Name</h3>
        <p>{renderClientList}</p>
      </div>




    </Container>
  )
}

export default Clients
