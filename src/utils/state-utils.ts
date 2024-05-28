import { IssueStateType } from '@/gql/graphql'

// collection of utility functions for issue state management

// fragment of IssueState, we only need the type here
type IssueStateWithType = {
  type: IssueStateType
}

export function isMovedOutOfSprint(from: IssueStateWithType, to: IssueStateWithType) {
  return to.type === IssueStateType.Backlog
    && from.type !== IssueStateType.Backlog
}

export function isMovedIntoSprint(from: IssueStateWithType, to: IssueStateWithType) {
  return from.type === IssueStateType.Backlog
    && to.type !== IssueStateType.Backlog
    && to.type !== IssueStateType.Done
}

export function isMovedToDone(from: IssueStateWithType, to: IssueStateWithType) {
  return (to.type === IssueStateType.DoneSprint || to.type === IssueStateType.Done)
    && from.type !== IssueStateType.DoneSprint
    && from.type !== IssueStateType.Done
}

export function isReopened(from: IssueStateWithType, to: IssueStateWithType) {
  return (from.type === IssueStateType.Done || from.type === IssueStateType.DoneSprint)
    && to.type !== IssueStateType.Done
    && to.type !== IssueStateType.DoneSprint
}

export function isMovedToInProgress(from: IssueStateWithType, to: IssueStateWithType) {
  return to.type === IssueStateType.InProgress
    && from.type !== IssueStateType.InProgress
}
