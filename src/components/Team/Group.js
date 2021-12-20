import React, {useState,useEffect} from 'react';
import { Container} from '@mui/material';
import  styles from './group.module.css'
import { Input,Button } from 'antd';
import GroupCard from './GroupCard';





 const Group=()=> {
   
    const [sortType,setSortType] = useState('asc')
    const[name,setName]=useState("")
    const[groups,setGroups]=useState([])

    // useEffect(() => {
    //     var config = {
    //     method: 'get',
    //     url: 'https://api.clockify.me/api/v1/workspaces/6192513371e028522c62bc50/projects',
    //     headers: { 
    //       'x-api-key': 'NjYzMzNhZjMtZGQ4Ny00NGNiLTliYjMtZDdkNjQ2ZjFlOTY0'
    //     }
    //   };
   
    //   axios(config)
    //   .then((res) => {setGroupData(res.data)
        
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    //   },[])


      // const sorted = groupData.sort()
      
  //  const sorted = groups.sort( (a,b) => {
  //    const isReversed = (sortType === 'asc') ? 1 :-1
  //    return isReversed * a.name.localeCompare(b.name)
  //  })
   const addHandler = () => {
    setGroups(groups => [...groups, name])
    setName("")
  }

  const handleRemoveGroup= index => {
    const list = [...groups];
    list.splice(index, 1);
    setGroups(list);
};
  const renderGroupList = groups.map((name) => (
    <GroupCard name={name} handleRemoveGroup={handleRemoveGroup}> </GroupCard>

))
const keyPressed = ({ key }) => {
    
  if (key === "Enter") {
    addHandler()
  }       
  
}
      
     
  return (
    <Container>
      <div className={styles.inputContainer} >
        <Input className={styles.input} type="text" placeholder="Add new user group" value={name}  onChange={(e)=>setName(e.target.value)} onKeyPress={keyPressed} />
        <Button type="primary" onClick={addHandler}>Add</Button>
      </div>
      <div className={styles.groupContainer}>
        <h6>Groups</h6>
        <div className={styles.groupData}> 
          <p>Name</p>
          <p>Acess</p>
        </div>
       
        </div>
       <p> {renderGroupList}</p>

    </Container>
    
  )
}
export default Group;