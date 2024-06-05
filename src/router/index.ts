import { createRouter, createWebHistory } from 'vue-router'
import MainProjectView from '@/views/MainProjectView/MainProjectView.vue'
import IssueBoardView from '@/views/IssueBoardView/IssueBoardView.vue'
import ProfileView from '@/views/ProfileView.vue'
import { routes } from '@/router/routes'
import { useAuth } from '@/service/use-auth'
import CreateProjectView from '@/views/CreateProjectView.vue'
import MainTab from '@/views/MainProjectView/MainTab.vue'
import AllMeetingsView from '@/views/MeetingView/AllMeetingsView.vue'
import PlanningSettingsView from '@/views/MeetingView/PlanningView/PlanningSettingsView.vue'
import { useAppStore } from '@/stores/app-store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: routes.login,
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      alias: '/'
    },
    {
      path: routes.register,
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: routes.projects,
      name: 'projectList',
      component: () => import('../views/AllProjectsView/AllProjectsView.vue')
    },
    {
      path: routes.createProject,
      name: 'createProject',
      component: CreateProjectView
    },
    {
      path: routes.project(':projectId').main,
      name: 'projects',
      props: true,
      component: MainProjectView,
      children: [
        {
          path: '',
          name: 'project',
          component: MainTab,
          alias: 'sprint'
        },
        {
          path: routes.projectSubRoutes.board,
          name: 'board',
          component: IssueBoardView
        },
        {
          path: routes.projectSubRoutes.planning,
          name: 'planning',
          component: PlanningSettingsView
        },
        {
          path: routes.projectSubRoutes.meeting,
          name: 'meeting',
          component: AllMeetingsView,
        },
        {
          path: routes.projectSubRoutes.planningLive,
          name: 'livePlanning',
          component: () => import('@/views/MeetingView/PlanningView/PlanningView.vue')
        },
        {
          path: routes.projectSubRoutes.standup + '-live',
          name: 'liveStandup',
          component: () => import('@/views/MeetingView/StandupView/StandupView.vue')
        },
        {
          path: routes.projectSubRoutes.retrospective + '-live',
          name: 'liveRetrospective',
          component: () => import('@/views/MeetingView/RetrospectiveView/RetrospectiveView.vue')
        },
        {
          path: routes.projectSubRoutes.standup,
          name: 'standup',
          component: () => import('@/views/MeetingView/StandupView/StandupSettingsView.vue')
        },
        {
          path: 'issue/:issueId',
          props: true,
          name: 'issue',
          component: () => import('@/views/IssueBoardView/IssueView.vue')
        },
        {
          path: 'retrospective',
          name: 'retrospective',
          component: () => import('@/views/MeetingView/RetrospectiveView/RetrospectiveView.vue')
        },
        {
          path: 'team',
          name: 'team',
          component: () => import('@/views/TeamView.vue')
        },
        {
          path: 'user/:userId',
          name: 'user',
          props: true,
          component: ProfileView,
        },
        {
          path: 'rules',
          name: 'rules',
          component: () => import('../views/RuleView.vue')
        },
        {
          path: 'store',
          name: 'store',
          component: () => import('../views/StoreView.vue')
        },
        {
          path: 'sprint-stats',
          name: 'sprintStats',
          component: () => import('../views/SprintStatsView.vue')
        }
      ]
    },
  ]
})

// This is a global guard that checks if the user is logged in
// and if the project is selected, if not it redirects to the
// login or projects page.
router.beforeEach((to, from, next) => {
  const auth = useAuth()
  if (!auth.isLoggedIn() && to.path !== '/login') {
    next(routes.login)
  } else if (auth.isLoggedIn() && (to.path === '/login' || to.path === '/')) {
    next(routes.projects)
  } else if (useAppStore().isProjectSelected() && to.path === routes.projects) {
    next(routes.project(useAppStore().getProjectIdOrThrow()).main)
  } else {
    next()
  }
})

useAuth().onLogout(() => {
  router.push(routes.login).then()
})

export default router
