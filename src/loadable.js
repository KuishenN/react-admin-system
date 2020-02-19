import React, { Component } from 'react'

// 使用高阶组件实现一个简易版的loadable
// 这个问价只是用于解释react-loadable的原理 使用无缝切换
const Loadable = ({
  loader,
  loading: Loading
}) => {
  return class LoadableComponent extends Component {
    state = {
      LoadedComponent: null
    }
    componentDidMount () {
      // 执行componentDidMount的时候执行加载需要的组件
      loader()
        .then(res => {
          this.setState({
            LoadedComponent: res.default
          })
        })
    }
    render() {
      console.log(this.state.LoadedComponent)
      const { LoadedComponent } = this.state
      return (
        <div>
         {
            LoadedComponent ?
            <LoadedComponent />
            :
            <Loading />
         }
        </div>
      )
    }
  }
}


export default Loadable