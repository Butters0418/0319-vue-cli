import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/newpage',
    name: '這是新分頁',
    component: () => import('../views/NewPageView.vue'),
    children: [
      {
        path: 'a',
        component: () => import('../views/ComponentA.vue')
      },
      {
        path: 'b',
        component: () => import('../views/ComponentB.vue')
      },
      // 動態路由
      {
        path: 'dynamicrouter/:myId',
        component: () => import('../views/DynamicRouter.vue')
      },
      // 動態路由 props 傳遞
      {
        path: 'dynamicrouterbyporps/:myPropsId',
        component: () => import('../views/DynamicRouterByProps.vue'),
        props: (route) => {
          console.log('route:', route)
          return {
            myPropsId: route.params.myPropsId
          }
        }
      },
      // 具名視圖
      {
        path: 'namedview',
        component: () => import('../views/NamedView.vue'),
        children: [
          {
            path: 'c2a',
            components: {
              left: () => import('../views/ComponentC.vue'),
              right: () => import('../views/ComponentA.vue')
            }
          },
          {
            path: 'a2b',
            components: {
              left: () => import('../views/ComponentA.vue'),
              right: () => import('../views/ComponentB.vue')
            }
          }
        ]
      }
    ]
  },
  // 404
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  },
  // 重新導向，可針對特定路由下設定一起混用
  {
    path: '/newpage/:pathMathch(.*)*',
    redirect: {
      name: 'home'// 可用name 或path
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    console.log(to, from, savedPosition)
    if (to.fullPath.match('newpage')) {
      return {
        top: 0
      }
    }
    return {}
  }
})

export default router
