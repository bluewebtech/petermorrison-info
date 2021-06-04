import { lazy } from 'react';

const Home = lazy(() => import(/* webpackChunkName: "home" */ 'views/Home'));
const About = lazy(() => import(/* webpackChunkName: "about" */ 'views/About'));
const Resume = lazy(() => import(/* webpackChunkName: "resume" */ 'views/Resume'));
const Hobbies = lazy(() => import(/* webpackChunkName: "hobbies" */ 'views/Hobbies'));

const Routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/resume',
    component: Resume,
  },
  {
    path: '/hobbies',
    component: Hobbies,
  },
];

export default Routes;
