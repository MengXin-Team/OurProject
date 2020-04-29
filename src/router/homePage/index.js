import homePage from '../../modules/homePage/index';
import Main from '../../components/layout/main';
const homeRoutes = [
  {
    path: '/',
    redirect: '/homePage'
  },
  {
  path: '/homePage',
  component: Main,
  redirect: {name: 'homePage'},
  children: [
    {
      name: 'homePage',
      path: '/homePage',
      component: homePage
    }
  ]
}]
export default homeRoutes;