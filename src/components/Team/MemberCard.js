import React,{useState} from 'react'
import { PlusCircleOutlined } from '@ant-design/icons'
import styles from "./MemberCard.module.css"

const MemberCard=(props) =>{


    return (
        <div>
            <div>

                <div className={styles.card}>
                    <p>{props.name}</p>
                    <p>vengalreddy@gmail.com</p>
                    <div className={styles.role}>
                    <p><PlusCircleOutlined style={{fontSize:"1.3rem"}}/><span>Role</span></p></div>
                <div className={styles.group}> <p><PlusCircleOutlined style={{fontSize:"1.3rem"}}/><span>Group</span></p></div>  
                       

                </div>

            </div>
            <div>
            
            </div>
        </div>
    )
}

export default MemberCard