import React, { Component } from 'react'

import { Button } from 'antd'

const withApp = (WrappedComponent) =>  {
  // WrappedComponent react中camel的语法组件中不支持
  return class WithApp extends Component {
    render () {
      return (
        <>
          <WrappedComponent />
          <div>高阶组件的测试</div>
        </>
      )
    }
  }
}

@withApp
class App extends Component {
  render() {
    return (
      <div>
        {11111}
        app <Button type="primary">111</Button>
      </div>
    )
  }
}

export default App
