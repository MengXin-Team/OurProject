import Main from '../../components/layout/main'
import epidemicMap from '../../modules/epidemicMap/index';
import fuJianMap from '../../modules/epidemicMap/fuJianMap';
import chinaMap from '../../modules/epidemicMap/chinaMap';
import worldMap from '../../modules/epidemicMap/worldMap';
const epidemicMapRoutes = 
  {
    path: '/epidemicMap',
    component: Main,
    redirect: {name: 'epidemicMap'},
    children: [
      {
        name: 'epidemicMap',
        path: '/epidemicMap',
        component: epidemicMap,
        children: [
          {
            path: '/fuJianMap',
            component: fuJianMap,
          },
          {
            path:'/chinaMap',
            component:chinaMap,
          },
          {
            path:'/worldMap',
            component:worldMap,
          }
        ]
      },

    ]
  }

export default epidemicMapRoutes;