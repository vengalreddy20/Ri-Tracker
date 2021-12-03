import React,{useContext} from 'react'
import myContext from '../../Context'
function Project(props) {
    const context=useContext(myContext)
   const changeContent=()=>{
       console.log("ajay")
       context.update(props.name)
   }
        

   
    return (
        <div>
            
            <h1 style={{margin:"9rem"}}> Project here {context.state.name}</h1>
            <button onClick={changeContent} style={{margin:"10rem"}}>change text</button>
        </div>
       
    )
}

export default Project
