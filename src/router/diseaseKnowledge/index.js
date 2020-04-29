import Main from '../../components/layout/main';
import diseaseKnowledge from '../../modules/diseaseKnowledge/index';

const diseaseKnowledgeRoute = {
  path: '/diseaseKnowledge',
  component: Main,
  redirect: {name: 'diseaseKnowledge'},
  children: [
    {
      name: 'diseaseKnowledge',
      path: '/diseaseKnowledge',
      component: diseaseKnowledge
    }
  ]
}

export default diseaseKnowledgeRoute;