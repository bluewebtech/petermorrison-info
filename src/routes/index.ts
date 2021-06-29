import { lazy } from 'react';

const Routes = [
  {
    path: '/',
    name: 'Home',
    component: lazy(() => import(/* webpackChunkName: "home" */ 'views/Home')),
  },
  {
    path: '/about',
    name: 'About',
    component: lazy(() => import(/* webpackChunkName: "about" */ 'views/About')),
  },
  {
    path: '/resume',
    name: 'Resume',
    component: lazy(() => import(/* webpackChunkName: "resume" */ 'views/Resume')),
  },
  {
    path: '/hobbies',
    name: 'Hobbies',
    component: lazy(() => import(/* webpackChunkName: "hobbies" */ 'views/Hobbies')),
  },
];

export default Routes;
