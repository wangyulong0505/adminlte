import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    name: 'login',
    meta: { title: '登录页', icon: 'login', affix: true }
  },
  {
    path: '/layout/topnav',
    component: () => import('@/views/layout/top-nav.vue'),
    name: 'topnav',
    meta: { title: 'top-nav', icon: 'navigation', affix: true }
  },
  {
    path: '/layout/topnavsidebar',
    component: () => import('@/views/layout/top-nav-sidebar.vue'),
    name: 'topnavsidebar',
    meta: { title: 'top-nav-sidebar', icon: 'navigation', affix: true }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children:[
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      },
      {
        path: 'widgets',
        component: () => import('@/views/widgets/index'),
        name: 'Widgets',
        meta: { title: '组件', icon: 'widgets', affix: true }
      }
    ]
  },
  {
    path: '/ui',
    component: Layout,
    redirect: '/ui/general',
    alwaysShow: true,
    name: 'UI',
    meta: { title: 'UI', icon: 'ui' },
    children: [
      {
        path: 'general',
        component: () => import('@/views/ui/general'),
        name: 'general',
        meta: { title: 'General' }
      },
      {
        path: 'icons',
        component: () => import('@/views/ui/icons'),
        name: 'icons',
        meta: { title: 'Inons' }
      },
      {
        path: 'buttons',
        component: () => import('@/views/ui/buttons'),
        name: 'buttons',
        meta: { title: 'Buttons' }
      },
      {
        path: 'sliders',
        component: () => import('@/views/ui/sliders'),
        name: 'sliders',
        meta: { title: 'Slider' }
      }
    ]
  },
  {
    path: '/charts',
    component: Layout,
    redirect: '/charts/charts',
    alwaysShow: true,
    name: 'Charts',
    meta: { title: 'UI', icon: 'ui' },
    children: [
      {
        path: 'charts',
        component: () => import('@/views/charts/charts'),
        name: 'charts',
        meta: { title: 'Charts' }
      },
      {
        path: 'flot',
        component: () => import('@/views/charts/flot'),
        name: 'flot',
        meta: { title: 'Inons' }
      },
      {
        path: 'inline',
        component: () => import('@/views/charts/inline'),
        name: 'inline',
        meta: { title: 'Inline' }
      }
    ]
  },
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
