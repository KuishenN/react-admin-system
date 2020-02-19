import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import './index.less'
import logo from './logo.png'

const { Header, Content, Sider } = Layout;

export default class Frame extends Component {
  render() {
    const sideRoutes = this.props.adminRoutes.filter(route => route.isNav)
    return (
      <Layout>
      <Header className="header admin-header">
        <div className="logo">
          <img src={logo} alt="REACTADMIN"/>
        </div>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff'}}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            {
              sideRoutes.map(route => {
              return (
                <Menu.Item 
                  key={route.pathname} 
                  path={route.pathname}> 
                  <Icon type={route.icon}/>
                  {route.title} 
                </Menu.Item>)
              })
            }
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
    )
  }
}
