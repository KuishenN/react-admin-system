import Loadable from 'react-loadable'
import { Loading }  from '../components'

 // 组件直接导入的方式
// import Dashboard from './Dashboard'
// import Login from './Login'
// import ArticleList from './Article'
// import ArticleEdit from './Article/edit'
// import Settings from './Settings'
// import NotFound from './NotFound'


// 组件懒加载的方式实现 实现按需加载， Loadable 本身传递参数劫持，其实就是一个高阶组件
const Dashboard = Loadable({
  loader: () => import('./Dashboard'),
  loading: Loading
})
const Login = Loadable({
  loader: () => import('./Login'),
  loading: Loading
})
const ArticleList = Loadable({
  loader: () => import('./Article'),
  loading: Loading
})
const ArticleEdit = Loadable({
  loader: () => import('./Article/edit'),
  loading: Loading
})
const Settings = Loadable({
  loader: () => import('./Settings'),
  loading: Loading
})
const NotFound = Loadable({
  loader: () => import('./NotFound'),
  loading: Loading
})

export {
  Dashboard,
  Login,
  ArticleList,
  ArticleEdit,
  Settings,
  NotFound
}
