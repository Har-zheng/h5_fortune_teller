import Vue from 'vue'
import Router from 'vue-router'
import PhotoPage from './views/PhotoPage/index.vue'
import Page from './views/Frame/index'


Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Page,
      redirect: {
        name: 'PhotoPage'
      },
      children: [{
          path: '/PhotoPage',
          name: 'PhotoPage',
          component: PhotoPage,
        },
        {
          path: '/analysis',
          name: 'analysis',
          component: () => import('./views/AnalysisPage/index.vue'),
        },
        {
          path: '/analysisnew',
          name: 'analysisnew',
          component: () => import('./views/Analysis/index.vue'),
        },
        {
          path: '/report',
          name: 'report',
          component: () => import('./views/report/index.vue')
        },
        {
          path: '/facereport',
          name: 'facereport',
          component: () => import('./views/FaceReport/index.vue')
        },
        {
          path: '/faceStart',
          name: 'faceStart',
          component: () => import('./views/FaceStart/index.vue')
        },
      ]
    },
    {
      path: '/friend',
      name: 'friend',
      component: () => import('./views/FriendHelp/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/AnalysisPage/index.vue')
    }
  ]
})