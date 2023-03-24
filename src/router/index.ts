import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';

// import { appRoutes } from './routes';
// import { REDIRECT_MAIN, NOT_FOUND_ROUTE } from './routes/base';
import createRouteGuard from './guard';
import { DEFAULT_LAYOUT } from './routes/base';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // {
    //   path: '/',
    //   redirect: 'login',
    // },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/me',
      name: 'me',
      component: DEFAULT_LAYOUT,
      meta: {
        title: '个人中心',
        keepAlive: false,
        requiresAuth: true,
      },
      children: [
        {
          path: 'userinfo',
          name: 'UserInfo',
          component: () => import('@/views/me/user-info/index.vue'),
          meta: {
            locale: 'menu.system.userinfo',
            requiresAuth: true,
            roles: ['*'],
          },
        },
      ],
    },
    // ...appRoutes,
    // REDIRECT_MAIN,
    // NOT_FOUND_ROUTE,
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

createRouteGuard(router);
export default router;
