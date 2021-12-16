import { useEffect } from "react";
import {Input,Button,Card,CircularProgress} from "@mui/material";

import {useState} from "react";
import styles from "./login.module.css";

const Login = (props) =>{
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState(false);
    const[loading,setLoading]=useState(false);
    const[isloggedin,setIsloggedIn]=useState(false);
    
     useEffect(()=>{
        if(isloggedin){
            props.history.replace("/timesheet")
        }
    },[isloggedin]);
    const login =()=>{
        if(!email.length || !password.length){
            return setError(true);
        }
        setError(false);
        setLoading(true);
        setTimeout(function(){
            setLoading(false)
            setIsloggedIn(true)
        },3000)
        
        
        
    }
    return(
        <div className={styles.login}>
            <Card className={styles.logindetails}> 
                <Input type="email" placeholder="enter email address" value={email} onChange={(e)=>setEmail(e.target.value)}  />
                <Input type="password" placeholder="enter password" value={password} onChange={(e)=>setPassword(e.target.value)}  />
                {error && <p style={{color:"red", padding:10}}>enter all inputs</p>}
                <Button onClick={login} variant="contained" disabled={loading}> {loading ? <CircularProgress size={20} /> :'Login'}</Button>

            </Card>
        </div>

    )
}
export default Login;