import realTimeBroadcast from '../../modules/realTimeBroadcast/index';
import Main from '../../components/layout/main';
const realTimeBroadcastRoutes = {
  path: '/realTimeBroadcast',
  component: Main,
  redirect: {name: 'realTimeBroadcast'},
  children: [
    {
      name: 'realTimeBroadcast',
      path: '/realTimeBroadcast',
      component: realTimeBroadcast
    }
  ]
}
export default realTimeBroadcastRoutes;