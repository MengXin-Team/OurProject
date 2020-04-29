import hotSearchRouters from './hotSearch';
import realTimeBroadcastRouters from './realTimeBroadcast';
import epidemicMapRouters from './epidemicMap';
import diseaseKnowledgeRouters from './diseaseKnowledge';
import homePage from './homePage';
const routes = [
  ...homePage,
  hotSearchRouters,
  realTimeBroadcastRouters,
  epidemicMapRouters,
  diseaseKnowledgeRouters
]
export {routes};