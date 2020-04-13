import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const createRouter = [
  {
    path: '/',
    name: 'homePage',
    component: () => import('@/views/homePage')
  },
  {
    path: '/family',
    redirect: '/family/poorReason',
    name: '贫困户基本信息',
    component: () => import('@/views/family/index'),
    children: [{
      path: 'familyInfo',
      name: '家庭成员信息',
      component: () => import('@/views/family/familyinfo')
    }, {
      path: 'poorReason',
      name: '贫困原因',
      component: () => import('@/views/family/poorReason')
    }]
  },
  {
    path: '/lifeProduction',
    redirect: '/lifeProduction/life',
    name: '生活生产条件',
    component: () => import('@/views/lifeProduction/index'),
    children: [{
      path: 'life',
      name: '生活条件',
      component: () => import('@/views/lifeProduction/life')
    }, {
      path: 'production',
      name: '生产条件',
      component: () => import('@/views/lifeProduction/production')
    }]
  },
  {
    path: '/relocate',
    name: '异地搬迁信息',
    component: () => import('@/views/relocate')
  },
  {
    path: '/helpObject',
    name: '帮扶结算信息',
    component: () => import('@/views/helpObject')
  },
  {
    path: '/measures',
    name: '帮扶措施',
    component: () => import('@/views/measures')
  }
]

const router = new Router({
  routes: createRouter
})

router.beforeEach((to, from, next) => {
  // console.log(from, 'from');
  // console.log(to, 'to');
  setTimeout(() => {
    next()
  }, 200);
})

export default router