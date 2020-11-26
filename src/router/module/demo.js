export default [
  {
    path: '/demo',
    name: 'demo',
    redirect: '/demo/list',
    component: () => import(/* webpackChunkName: "list" */ '@/views/list/index'),
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import(/* webpackChunkName: "list" */ '@/views/list/list'),
        meta: {
          needLogin: true,
          savedPosition: true
        }
      },
      {
        path: 'detail',
        name: 'detail',
        component: () => import(/* webpackChunkName: "list" */ '@/views/list/detail'),
        meta: {
          needLogin: true,
        }
      }
    ]
  }
]