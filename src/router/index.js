import hotSearchRouters from './hotSearch';
import epidemicTrendRouters from './epidemicTrend';
import epidemicMapRouters from './epidemicMap';
import diseaseKnowledgeRouters from './diseaseKnowledge';
import homePage from './homePage';
import realTimeBroadcastRouters from './realTimeBroadcast';
const routes = [
  ...homePage,
  realTimeBroadcastRouters,
  hotSearchRouters,
  epidemicTrendRouters,
  epidemicMapRouters,
  diseaseKnowledgeRouters
]
export {routes};