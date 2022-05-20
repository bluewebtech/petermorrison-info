import { lazy } from 'react';

const Routes = [
  {
    path: '/',
    name: 'Home',
    desktop: true,
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
    path: '#settings',
    name: 'Settings',
    desktop: false,
  },
  {
    path: '*',
    name: 'NotFound',
    desktop: false,
    component: lazy(() => import(/* webpackChunkName: "notfound" */ 'views/NotFound')),
  },
];

export default Routes;
