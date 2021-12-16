import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Avatar, Layout, Menu } from 'antd';
import myContext from '../../Context';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  TeamOutlined,
  FieldTimeOutlined ,
  ProjectOutlined,
  BellOutlined,
  QuestionOutlined 
} from '@ant-design/icons';
import styles from './slider.module.css'

const { Header, Sider } = Layout;

class SiderDemo extends React.Component {
    static contextType=myContext
  
  toggle = () => {
        
    this.context.setContextState({
      collapsed: !this.context.state.collapsed,
    });
  };
   
    

  render() {
    return (
      <Layout>
        <Sider className={styles.sidebar} trigger={null} collapsible collapsed={this.context.state.collapsed}>
          <div className="logo" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} style={{fontSize:"1.3rem",padding:"10px"}}>
            <Menu.Item style={{marginTop:"70px"}} key="1" icon={< FieldTimeOutlined style={{fontSize:"25px"}}/>}>
            <Link to="/">Time Sheet</Link>
            </Menu.Item>
            <Menu.Item style={{marginTop:"20px"}} key="2" icon={<ProjectOutlined style={{fontSize:"25px"}} />}>
             <Link to="/project"> Projects </Link>
            </Menu.Item>
            <Menu.Item style={{marginTop:"20px"}} key="3" icon={<UserOutlined style={{fontSize:"25px"}} />}>
             <Link to="/clients"> Clients</Link>            </Menu.Item>
            <Menu.Item style={{marginTop:"20px"}} key="4" icon={<TeamOutlined style={{fontSize:"25px"}} />}>
            <Link to="/team"> Team</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className={styles.header}><div className={styles.menu}>
            {React.createElement(this.context.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
            
            </div>
            <div><h1 className={styles.mainHeading}>RI-Tracker</h1></div>
            
            <div className={styles.headerRight}>
           
            <p style={{fontSize:"25px",marginLeft:"2rem",color:"grey",paddingTop:"5px",cursor:"pointer"}}> <BellOutlined  /></p>
            <Avatar style={{marginLeft:"2rem",color:"grey",marginTop:"1.8rem",cursor:"pointer"}} alt="user" src="./images/user.png"></Avatar>
            </div>
           
          </Header>
          
        </Layout>
        
      </Layout>
    );
  }
}
 export default SiderDemo