import React, { Component } from 'react'

import { Route, Switch, Redirect }  from 'react-router-dom'
import { adminRoutes } from './routers'

import { Frame } from './components'

// 配置内嵌路由
class App extends Component {
  render() {
    return (
      <Frame adminRoutes={adminRoutes}>
        <Switch>
          {
            adminRoutes.map(route => {
              return (
                <Route
                  key={route.pathname} 
                  path={route.pathname} 
                  exact={route.exact}
                  render={(routerProps) => {
                return <route.component {...routerProps} />
              }} />)
            })
          }
          {/* 用于判断当时admin时跳转的主页路径 */}
          <Redirect to="/admin/dashboard" from="/admin" exact />
          <Redirect to="/404" />
        </Switch> 
      </Frame>
    )
  }
}

export default App
