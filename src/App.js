import React, { Component } from 'react'

import { Route, Switch, Redirect }  from 'react-router-dom'
import { adminRouter } from './routers'

// 配置内嵌路由
class App extends Component {
  render() {
    return (
      <div>
        <div>这里是公共的部分</div>
        <Switch>
          {
            adminRouter.map(route => {
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
      </div>
    )
  }
}

export default App
