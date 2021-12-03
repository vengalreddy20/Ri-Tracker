

import './App.css';
import React,{useContext,Component} from 'react'
import Project from './components/projects/Project';
import {Route,Routes } from 'react-router-dom';
import SiderDemo from './components/slider/Slider';
import Team from './components/Team/Team';
import Clients from './components/Clients/Clients';
import myContext from './Context';

export class App extends Component {
  static contextType=myContext
  constructor(props) {
    super(props)
  
    this.state = {
       name:'varun',
       collapsed:true
    }
  }

  handleClick=()=>{
    this.setState({
      name:'ajay'
    })
  }
  
  setContextState = (obj) => {
		console.log('setContextState function', obj);
		this.setState({ ...obj }, () =>
			console.log('Callback for setState', this.state)
		);
	};

  render() {
    return (
      <myContext.Provider 
      value={{
        state:this.state,
        update:this.handleClick,
      setContextState:this.setContextState,
      }}
      >
      
      <div>
         
      <SiderDemo />
    
      <Routes>
       <>
       <Route path="/project" element={<Project/>} />
       <Route path="/clients" element={<Clients />} />
       <Route path="/team" element={<Team />} />
       </>
     
      </Routes>
      </div>
      </myContext.Provider>

    )
  }
}

export default App
