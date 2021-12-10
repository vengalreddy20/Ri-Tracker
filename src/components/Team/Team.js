import { Container } from '@mui/material'
import React,{useContext} from 'react'
import myContext from '../../Context'
import "./team.css"



function Team() {
    const context=useContext(myContext)
    return (
        <Container className={context.state.collapsed ? 'teamWidthCollapsed' :'teamWidth'}>
             <h1 style={{marginTop:"7rem"}}>Team</h1>
    
        </Container>
    )
}

export default Team
