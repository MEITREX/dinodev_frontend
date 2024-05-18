export const routes = {
  projects: '/project-list',
  register: '/register',
  login: '/login',
  createProject: '/create-project',

  project: (projectId: string) => {
    const mainRoute = `/project/${projectId}`
    return {
      main: mainRoute,
      board: `${mainRoute}/${routes.projectSubRoutes.board}`,
      planning: `${mainRoute}/${routes.projectSubRoutes.planning}`,
      standup: `${mainRoute}/${routes.projectSubRoutes.standup}`,
      retrospective: `${mainRoute}/${routes.projectSubRoutes.retrospective}`,
      team: `${mainRoute}/${routes.projectSubRoutes.team}`,

      livePlanning: `${mainRoute}/${routes.projectSubRoutes.planning}-live`,
      liveStandup: `${mainRoute}/${routes.projectSubRoutes.standup}-live`,
      liveRetrospective: `${mainRoute}/${routes.projectSubRoutes.retrospective}-live`,
      meeting: (meetingId: string) => {
        return `${mainRoute}/${routes.projectSubRoutes.meeting}/${meetingId}`
      },
      issue: (issueId: string) => {
        return `${mainRoute}/issue/${issueId}`
      }

    }
  },

  projectSubRoutes: {
    board: 'board',
    planning: 'planning',
    meeting: 'meeting',
    standup: 'standup',
    retrospective: 'retrospective',
    team: 'team',
  }

}
