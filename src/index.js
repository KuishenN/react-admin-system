import React from 'react';
import ReactDOM from 'react-dom'

import App from './App'

import './index.less'

import { mainRouter } from './routers'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'



ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/admin' render={(routerProps) => {
        // 设置权限 需要登陆才能访问admin
        return <App {...routerProps} />
      }}/>
      {
        mainRouter.map(router => {
          return <Route key={router.pathname} path={router.pathname} component={router.component} />
        })
      }
      {/* {exact 完全匹配跳转到admin} */}
      <Redirect to="/admin" from='/' exact />
      <Redirect to="/404" />
    </Switch>
  </Router>,
  document.getElementById('root')
)