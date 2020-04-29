import hotSearch from '../../modules/hotSearch/index';
import Main from '../../components/layout/main';
const hotSearchRoutes = {
  path: '/hotSearch',
  component: Main,
  redirect: {name: 'hotSearch'},
  children: [
    {
      name: 'hotSearch',
      path: '/hotSearch',
      component: hotSearch
    }
  ]
}
export default hotSearchRoutes;