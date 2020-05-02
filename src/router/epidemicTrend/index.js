import epidemicTrend from '../../modules/epidemicTrend/index';
import chinaTrend from '../../modules/epidemicTrend/chinaTrend';
import worldTrend from '../../modules/epidemicTrend/worldTrend';
import Main from '../../components/layout/main';
const epidemicTrendRoutes = {
  path: '/epidemicTrend',
  component: Main,
  redirect: {name: 'epidemicTrend'},
  children: [
    {
      name: 'epidemicTrend',
      path: '/epidemicTrend',
      component: epidemicTrend,
      children: [
        
        {
          path:'/chinaTrend',
          component:chinaTrend,
        },
        {
          path:'/worldTrend',
          component:worldTrend,
        }
      ]
    },

  ]
}
export default epidemicTrendRoutes;