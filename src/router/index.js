import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
Vue.use(Router)

/* function to add breadcrumbs to a view */
const setBreadcrumbParams = to => {
  const breadcrumbParams = {
    userInfo: sessionStorage.getItem('userInfo'),
    randomStr: sessionStorage.getItem('randomStr')
  }
  to.matched.forEach(e => {
    for (const param in breadcrumbParams) {
      if (e.meta.breadcrumbParam === param) {
        to.params[e.meta.breadcrumbParam] = breadcrumbParams[param]
      }
    }
  })
}

const route = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        breadcrumbTextKey: 'home'
      }
    }
  ]
})

route.beforeEach((to, from, next) => {
  next()
  setBreadcrumbParams(to)
})

export default route
