import { lazy } from 'react';

const Home = lazy(() => import('views/Home'));
const About = lazy(() => import('views/About'));
const Resume = lazy(() => import('views/Resume'));
const Hobbies = lazy(() => import('views/Hobbies'));

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
