import {
  Dashboard,
  Login,
  ArticleList,
  ArticleEdit,
  Settings,
  NotFound
} from '../views'

export const mainRoutes = [
  {
    pathname: '/login',
    component: Login
  }, {
    pathname: '/404',
    component: NotFound
  }
]

export const adminRoutes = [
  {
    pathname: '/admin/dashboard',
    component: Dashboard,
    title: '仪表盘',
    isNav: true,
    icon: 'dashboard'
  }, {
    pathname: '/admin/article',
    component: ArticleList,
    title: '文章管理',
    exact: true,
    isNav: true,
    icon: 'unordered-list'
  }, {
    pathname: '/admin/article/edit/:id',
    component: ArticleEdit
  }, {
    pathname: '/admin/settings',
    component: Settings,
    title: '设置',
    isNav: true,
    icon: 'setting'
  }
]