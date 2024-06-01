import { IssueStateType } from '@/gql/graphql'

export function getEmojisForStateType(type: IssueStateType) {
  switch (type) {
    case IssueStateType.Backlog:
      return '📥'
    case IssueStateType.SprintBacklog:
      return '📦'
    case IssueStateType.InProgress:
      return '🚀'
    case IssueStateType.Done:
      return '✅'
    case IssueStateType.DoneSprint:
      return '☑️'
  }
}
