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
        <Sider style={{height:"100vh",position:"fixed"}} trigger={null} collapsible collapsed={this.context.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{fontSize:"1.3rem",padding:"10px"}}>
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
          <Header style={{display:"flex",justifyContent:"space-between",alignItems:"center",position:"fixed",top:"0",right:"0",left:"0"}} ><div className="site-layout-background" style={{ fontSize:"30px",color:"blue"}}>
            {React.createElement(this.context.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
            
            </div>
            <div><h1  style={{color:"white",fontSize:"1.5rem"}}>RI-Tracker</h1></div>
            <div style={{display:"flex"}}>
            <p style={{fontSize:"20px",marginLeft:"30px",color:"white",paddingTop:"5px",cursor:"pointer"}}> <QuestionOutlined /></p>
            <p style={{fontSize:"20px",marginLeft:"30px",color:"white",paddingTop:"5px",cursor:"pointer"}}> <BellOutlined  /></p>
            <Avatar style={{marginLeft:"30px",color:"white",marginTop:"20px",cursor:"pointer"}} alt="user" src="./images/user.png"></Avatar>
            </div>
           
          </Header>
          
        </Layout>
        
      </Layout>
    );
  }
}
 export default SiderDemo