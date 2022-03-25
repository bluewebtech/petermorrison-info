import { lazy } from 'react';

const Routes = [
  {
    path: '/',
    name: 'Home',
    desktop: false,
    component: lazy(() => import(/* webpackChunkName: "home" */ 'views/Home')),
  },
  {
    path: '/about',
    name: 'About',
    desktop: true,
    component: lazy(() => import(/* webpackChunkName: "about" */ 'views/About')),
  },
  {
    path: '/resume',
    name: 'Resume',
    desktop: true,
    component: lazy(() => import(/* webpackChunkName: "resume" */ 'views/Resume')),
  },
  {
    path: '/hobbies',
    name: 'Hobbies',
    desktop: true,
    component: lazy(() => import(/* webpackChunkName: "hobbies" */ 'views/Hobbies')),
  },
  {
    path: '/settings',
    name: 'Settings',
    desktop: false,
    component: lazy(() => import(/* webpackChunkName: "hobbies" */ 'views/Hobbies')),
  },
];

export default Routes;
