import {
  Dashboard,
  Login,
  ArticleList,
  ArticleEdit,
  Settings,
  NotFound
} from '../views'

export const mainRouter = [
  {
    pathname: '/login',
    component: Login
  }, {
    pathname: '/404',
    component: NotFound
  }
]

export const adminRouter = [
  {
    pathname: '/admin/dashboard',
    component: Dashboard
  }, {
    pathname: '/admin/setting',
    component: Settings
  }, {
    pathname: '/admin/article',
    component: ArticleList,
    exact: true
  }, {
    pathname: '/admin/article/edit/:id',
    component: ArticleEdit
  }
]