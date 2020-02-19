## 开发流程配置

- `customize-cra react-app-rewired` 用于高阶组件
- `less less-loader` less开发配置
- `babel-plugin-import` 按需加载组件代码和样式的babel插件
- `react-loadable` 用于组件按需加载，提高性能
  ```js
    import Loadable from 'react-loadable'
    import Loading from './my-loading-component'

    const LoadableComponent = Loadable({
      loader: () => import('./my-Component'), // 返回的是一个Promise
      loading: Loading
    })

    export default class App extends React.Component {
      render () {
        return <LoadableComponent />>
      }
    }
  ```