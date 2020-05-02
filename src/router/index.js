import hotSearchRouters from './hotSearch';
import epidemicTrendRouters from './epidemicTrend';
import epidemicMapRouters from './epidemicMap';
import diseaseKnowledgeRouters from './diseaseKnowledge';
import homePage from './homePage';
const routes = [
  ...homePage,
  hotSearchRouters,
  epidemicTrendRouters,
  epidemicMapRouters,
  diseaseKnowledgeRouters
]
export {routes};