import { createRouter, createWebHistory } from 'vue-router'
import { useAppStore } from '@/stores/appStore'
import MainProjectView from '@/views/MainProjectView/MainProjectView.vue'
import IssueBoardView from '@/views/IssueBoardView.vue'
import MainTab from '@/views/MainProjectView/MainTab.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/rules',
      name: 'rules',
      component: () => import('../views/RuleView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/project',
      name: 'projectList',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/project/:projectId',
      name: 'projects',
      props: true,
      component: MainProjectView,
      children: [
        {
          path: 'sprint',
          name: 'project',
          component: MainTab
        },
        {
          path: 'board',
          name: 'board',
          component: IssueBoardView
        },
        {
          path: 'planning',
          name: 'planning',
          component: () => import('../views/PlanningView/PlanningView.vue')
        }
      ]
    },
  ]
})

// This is a global guard that checks if the user is logged in
// and if the project is selected, if not it redirects to the
// login or projects page.
router.beforeEach((to, from, next) => {
  const store = useAppStore()
  if (!store.isLoggedIn && to.path !== '/login') {
    next('/login')
  } else if (!store.isProjectSelected && to.path !== '/login' && to.path !== '/project') {
    next('/project')
  } else {
    next()
  }
})

export default router
