/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** An RFC-3339 compliant Full Date Scalar */
  Date: { input: any; output: any; }
  /** A slightly refined version of RFC-3339 compliant DateTime Scalar */
  DateTime: { input: any; output: any; }
  /** 24-hour clock time value string in the format `hh:mm:ss` or `hh:mm:ss.sss`. */
  LocalTime: { input: any; output: any; }
  /** An RFC-3339 compliant Full Time Scalar */
  Time: { input: any; output: any; }
  /** A universally unique identifier compliant UUID Scalar */
  UUID: { input: any; output: any; }
  /** A Url scalar */
  Url: { input: any; output: any; }
};

export type AnimalVote = {
  __typename?: 'AnimalVote';
  user: GlobalUser;
  userId: Scalars['UUID']['output'];
};

export type AnimalVoting = {
  __typename?: 'AnimalVoting';
  animalVotingStates: Array<VotingState>;
  finished: Scalars['Boolean']['output'];
  votableAnimals: Array<Scalars['String']['output']>;
  votingResult?: Maybe<Scalars['String']['output']>;
};

export type CodeRepositorySettings = {
  __typename?: 'CodeRepositorySettings';
  codeRepositoryName: Scalars['String']['output'];
};

export type CodeRepositorySettingsInput = {
  codeRepositoryName: Scalars['String']['input'];
};

export type CreateProjectInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  endDate: Scalars['DateTime']['input'];
  name: Scalars['String']['input'];
  projectSettings: ProjectSettingsInput;
  startDate: Scalars['DateTime']['input'];
};

export type CreateRoleInput = {
  gamifiedName: Scalars['String']['input'];
  name: Scalars['String']['input'];
  permissions: Array<ProjectPrivilege>;
};

export type CreateSprintInput = {
  endDate: Scalars['DateTime']['input'];
  name: Scalars['String']['input'];
  startDate: Scalars['DateTime']['input'];
};

export type CreateUserInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};

/**
 * 
 * Filter for date values.
 * If multiple filters are specified, they are combined with AND.
 */
export type DateTimeFilter = {
  /**
   * 
   * If specified, filters for dates after the specified value.
   */
  after?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * 
   * If specified, filters for dates before the specified value.
   */
  before?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum GlobalPrivilege {
  CreateProject = 'CREATE_PROJECT',
  DeleteUser = 'DELETE_USER',
  GrantRole = 'GRANT_ROLE',
  ReadUserPrivateInfo = 'READ_USER_PRIVATE_INFO',
  UpdateUser = 'UPDATE_USER'
}

export type GlobalPrivilegeDetails = {
  __typename?: 'GlobalPrivilegeDetails';
  description: Scalars['String']['output'];
  id: GlobalPrivilege;
  name: Scalars['String']['output'];
};

export type GlobalUser = {
  __typename?: 'GlobalUser';
  avatar?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  roles: Array<GlobalUserRole>;
  userInProject: UserInProject;
  username: Scalars['String']['output'];
};


export type GlobalUserUserInProjectArgs = {
  projectId: Scalars['UUID']['input'];
};

export type GlobalUserRole = {
  __typename?: 'GlobalUserRole';
  globalPrivileges: Array<GlobalPrivilege>;
  globalPrivilegesDetails: Array<GlobalPrivilegeDetails>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
};

export type ImsSettings = {
  __typename?: 'IMSSettings';
  imsName: Scalars['String']['output'];
};

export type ImsSettingsInput = {
  imsName: Scalars['String']['input'];
};

/**
 * 
 * Filter for integer values.
 * If multiple filters are specified, they are combined with AND.
 */
export type IntFilter = {
  /**
   * 
   * An integer value to match exactly.
   */
  equals?: InputMaybe<Scalars['Int']['input']>;
  /**
   * 
   * If specified, filters for values greater than to the specified value.
   */
  greaterThan?: InputMaybe<Scalars['Int']['input']>;
  /**
   * 
   * If specified, filters for values less than to the specified value.
   */
  lessThan?: InputMaybe<Scalars['Int']['input']>;
};

export type IssueEstimation = {
  __typename?: 'IssueEstimation';
  finalResult?: Maybe<StoryPoints>;
  finished: Scalars['Boolean']['output'];
  issueId: Scalars['UUID']['output'];
  max?: Maybe<StoryPoints>;
  median?: Maybe<StoryPoints>;
  min?: Maybe<StoryPoints>;
  mode?: Maybe<StoryPoints>;
  skipped: Scalars['Boolean']['output'];
  votes: Array<StoryPointVote>;
};

export type IssueEstimations = {
  __typename?: 'IssueEstimations';
  countdown: Scalars['Int']['output'];
  currentIssueEstimation?: Maybe<IssueEstimation>;
  finished: Scalars['Boolean']['output'];
  issueEstimations: Array<IssueEstimation>;
};

export type Meeting = {
  attendees: Array<MeetingAttendee>;
  description?: Maybe<Scalars['String']['output']>;
  end: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  meetingLink: Scalars['String']['output'];
  start: Scalars['DateTime']['output'];
  state: MeetingState;
  title: Scalars['String']['output'];
};

export type MeetingAttendee = {
  __typename?: 'MeetingAttendee';
  role: MeetingRole;
  state: UserState;
  userId: Scalars['UUID']['output'];
};

export enum MeetingRole {
  Attendee = 'ATTENDEE',
  MeetingLeader = 'MEETING_LEADER'
}

export enum MeetingState {
  Active = 'ACTIVE',
  Finished = 'FINISHED',
  Planned = 'PLANNED'
}

export type Mutation = {
  __typename?: 'Mutation';
  /**  projects */
  createProject?: Maybe<Project>;
  deleteProject: Scalars['Boolean']['output'];
  grantRole: GlobalUser;
  mutateProject: ProjectMutation;
  /**  user */
  register?: Maybe<GlobalUser>;
  updateGlobalUserProfile: GlobalUser;
  updateProject?: Maybe<Project>;
};


export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};


export type MutationDeleteProjectArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationGrantRoleArgs = {
  roleId: Scalars['UUID']['input'];
  userId: Scalars['UUID']['input'];
};


export type MutationMutateProjectArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationRegisterArgs = {
  input: CreateUserInput;
};


export type MutationUpdateGlobalUserProfileArgs = {
  id: Scalars['UUID']['input'];
  input: UpdateUserInput;
};


export type MutationUpdateProjectArgs = {
  id: Scalars['UUID']['input'];
  input: UpdateProjectInput;
};

export type NameVoting = {
  __typename?: 'NameVoting';
  finished: Scalars['Boolean']['output'];
  nameVotingStates: Array<VotingState>;
  votableNames: Array<Scalars['String']['output']>;
  votingResult?: Maybe<Scalars['String']['output']>;
};

/**
 * 
 * Specifies the page size and page number for paginated results.
 */
export type Pagination = {
  /**
   * 
   * The page number, starting at 0.
   * If not specified, the default value is 0.
   * For values greater than 0, the page size must be specified.
   * If this value is larger than the number of pages, an empty page is returned.
   */
  page?: Scalars['Int']['input'];
  /**
   * 
   * The number of elements per page.
   */
  size: Scalars['Int']['input'];
};

/**
 * 
 * Return type for information about paginated results.
 */
export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  /**
   * 
   * Whether there is a next page.
   */
  hasNext: Scalars['Boolean']['output'];
  /**
   * 
   * The current page number.
   */
  page: Scalars['Int']['output'];
  /**
   * 
   * The number of elements per page.
   */
  size: Scalars['Int']['output'];
  /**
   * 
   * The total number of elements across all pages.
   */
  totalElements: Scalars['Int']['output'];
  /**
   * 
   * The total number of pages.
   */
  totalPages: Scalars['Int']['output'];
};

export type PlanningMeeting = Meeting & {
  __typename?: 'PlanningMeeting';
  animalVoting: AnimalVoting;
  attendees: Array<MeetingAttendee>;
  currentPage: PlanningMeetingPage;
  description?: Maybe<Scalars['String']['output']>;
  end: Scalars['DateTime']['output'];
  /**  inherited from Meeting: */
  id: Scalars['UUID']['output'];
  issueEstimation: IssueEstimation;
  meetingLink: Scalars['String']['output'];
  nameVoting: NameVoting;
  nextPageAllowed: Scalars['Boolean']['output'];
  planningSettings: PlanningSettings;
  sprintGoalVoting: SprintGoalVoting;
  start: Scalars['DateTime']['output'];
  state: MeetingState;
  title: Scalars['String']['output'];
};

export type PlanningMeetingInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  end: Scalars['DateTime']['input'];
  planningSettings: PlanningSettingsInput;
  start: Scalars['DateTime']['input'];
  title: Scalars['String']['input'];
};

export type PlanningMeetingMutation = {
  __typename?: 'PlanningMeetingMutation';
  addSprintIssue: PlanningMeeting;
  changePage: PlanningMeeting;
  finishMeeting: Sprint;
  id: Scalars['UUID']['output'];
  nextPage: PlanningMeeting;
  removeSprintIssue: PlanningMeeting;
  setFinalResult: PlanningMeeting;
  setStoryPointLimit: PlanningMeeting;
  skipIssue: PlanningMeeting;
  startCountdown: PlanningMeeting;
  voteAnimal: PlanningMeeting;
  voteName: PlanningMeeting;
  voteStoryPoints: PlanningMeeting;
};


export type PlanningMeetingMutationAddSprintIssueArgs = {
  issueId: Scalars['UUID']['input'];
};


export type PlanningMeetingMutationChangePageArgs = {
  page: PlanningMeetingPage;
};


export type PlanningMeetingMutationRemoveSprintIssueArgs = {
  issueId: Scalars['UUID']['input'];
};


export type PlanningMeetingMutationSetFinalResultArgs = {
  storyPoints: StoryPoints;
};


export type PlanningMeetingMutationSetStoryPointLimitArgs = {
  limit: Scalars['Int']['input'];
};


export type PlanningMeetingMutationVoteAnimalArgs = {
  animal: Scalars['String']['input'];
  userId: Scalars['UUID']['input'];
};


export type PlanningMeetingMutationVoteNameArgs = {
  name: Scalars['String']['input'];
  userId: Scalars['UUID']['input'];
};


export type PlanningMeetingMutationVoteStoryPointsArgs = {
  storyPoints: StoryPoints;
  userId: Scalars['UUID']['input'];
};

export enum PlanningMeetingPage {
  ChooseAnimal = 'CHOOSE_ANIMAL',
  Configuration = 'CONFIGURATION',
  EstimateAnimal = 'ESTIMATE_ANIMAL',
  NameAnimal = 'NAME_ANIMAL'
}

export type PlanningSettings = {
  __typename?: 'PlanningSettings';
  sprintDurationDays: Scalars['Int']['output'];
  sprintStartDate: Scalars['DateTime']['output'];
};

export type PlanningSettingsInput = {
  sprintDurationDays: Scalars['Int']['input'];
  sprintStartDate: Scalars['DateTime']['input'];
};

export type PrivateUserInfo = {
  __typename?: 'PrivateUserInfo';
  level: Scalars['Int']['output'];
  stats: UserStats;
  xp: Scalars['Int']['output'];
};

export type Project = {
  __typename?: 'Project';
  activeMeetings: Array<Meeting>;
  activePlanningMeeting?: Maybe<PlanningMeeting>;
  currentSprint?: Maybe<Sprint>;
  currentUser?: Maybe<UserInProject>;
  description?: Maybe<Scalars['String']['output']>;
  endDate: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  meeting?: Maybe<Meeting>;
  /**  meetings */
  meetings: Array<Meeting>;
  name: Scalars['String']['output'];
  planningMeetings: Array<PlanningMeeting>;
  previousSprint?: Maybe<Sprint>;
  projectSettings: ProjectSettings;
  role?: Maybe<UserRoleInProject>;
  /**  roles */
  roles: Array<UserRoleInProject>;
  sprints: Array<Sprint>;
  startDate: Scalars['DateTime']['output'];
  users: Array<UserInProject>;
};


export type ProjectMeetingArgs = {
  id: Scalars['UUID']['input'];
};


export type ProjectMeetingsArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ProjectRoleArgs = {
  id: Scalars['UUID']['input'];
};

export type ProjectMutation = {
  __typename?: 'ProjectMutation';
  createPlanningMeeting: PlanningMeeting;
  createRole: UserRoleInProject;
  createSprint: Sprint;
  deleteRole: Scalars['Boolean']['output'];
  finishMeeting: Meeting;
  id: Scalars['UUID']['output'];
  joinMeeting: Meeting;
  leaveMeeting: Meeting;
  mutatePlanningMeeting: PlanningMeetingMutation;
  pingMeeting: Meeting;
  promoteToMeetingLeader: Meeting;
  startMeeting: Meeting;
  updatePlanningMeeting: PlanningMeeting;
  updateRole: UserRoleInProject;
};


export type ProjectMutationCreatePlanningMeetingArgs = {
  input: PlanningMeetingInput;
};


export type ProjectMutationCreateRoleArgs = {
  input: CreateRoleInput;
};


export type ProjectMutationCreateSprintArgs = {
  input?: InputMaybe<CreateSprintInput>;
};


export type ProjectMutationDeleteRoleArgs = {
  id: Scalars['UUID']['input'];
};


export type ProjectMutationFinishMeetingArgs = {
  id: Scalars['UUID']['input'];
};


export type ProjectMutationJoinMeetingArgs = {
  id: Scalars['UUID']['input'];
};


export type ProjectMutationLeaveMeetingArgs = {
  id: Scalars['UUID']['input'];
};


export type ProjectMutationMutatePlanningMeetingArgs = {
  id: Scalars['UUID']['input'];
};


export type ProjectMutationPingMeetingArgs = {
  id: Scalars['UUID']['input'];
};


export type ProjectMutationPromoteToMeetingLeaderArgs = {
  meetingId: Scalars['UUID']['input'];
  userId: Scalars['UUID']['input'];
};


export type ProjectMutationStartMeetingArgs = {
  id: Scalars['UUID']['input'];
};


export type ProjectMutationUpdatePlanningMeetingArgs = {
  id: Scalars['UUID']['input'];
  input: PlanningMeetingInput;
};


export type ProjectMutationUpdateRoleArgs = {
  id: Scalars['UUID']['input'];
  input: UpdateRoleInput;
};

export enum ProjectPrivilege {
  CreateRole = 'CREATE_ROLE',
  CreateShopItem = 'CREATE_SHOP_ITEM',
  CreateSprint = 'CREATE_SPRINT',
  CreateUser = 'CREATE_USER',
  DeleteRole = 'DELETE_ROLE',
  DeleteShopItem = 'DELETE_SHOP_ITEM',
  DeleteSprint = 'DELETE_SPRINT',
  DeleteUser = 'DELETE_USER',
  UpdateRole = 'UPDATE_ROLE',
  UpdateShopItem = 'UPDATE_SHOP_ITEM',
  UpdateSprint = 'UPDATE_SPRINT',
  UpdateUser = 'UPDATE_USER'
}

export type ProjectPrivilegeDetails = {
  __typename?: 'ProjectPrivilegeDetails';
  description: Scalars['String']['output'];
  id: ProjectPrivilege;
  name: Scalars['String']['output'];
};

export type ProjectSettings = {
  __typename?: 'ProjectSettings';
  codeRepositorySettings: CodeRepositorySettings;
  imsSettings: ImsSettings;
};

export type ProjectSettingsInput = {
  codeRepositorySettings: CodeRepositorySettingsInput;
  imsSettings: ImsSettingsInput;
};

export type Query = {
  __typename?: 'Query';
  currentUser?: Maybe<GlobalUser>;
  globalUser?: Maybe<GlobalUser>;
  /**  roles */
  globalUserRoles: Array<GlobalUserRole>;
  /**  users */
  globalUsers: Array<GlobalUser>;
  project?: Maybe<Project>;
  /**  projects */
  projects: Array<Project>;
};


export type QueryGlobalUserArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryProjectArgs = {
  id: Scalars['UUID']['input'];
};

export type ShopItem = {
  __typename?: 'ShopItem';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
};

/**
 * 
 * Specifies the sort direction, either ascending or descending.
 */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Sprint = {
  __typename?: 'Sprint';
  active: Scalars['Boolean']['output'];
  endDate: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  project: Project;
  startDate: Scalars['DateTime']['output'];
};

export type SprintGoalVoting = {
  __typename?: 'SprintGoalVoting';
  capacity: Scalars['Int']['output'];
  finished: Scalars['Boolean']['output'];
  /**  backlog issues added by the IMS service */
  sprintIssueIds: Array<Scalars['UUID']['output']>;
  storyPointLimit: Scalars['Int']['output'];
};

export type StoryPointVote = {
  __typename?: 'StoryPointVote';
  storyPoints: StoryPoints;
  user: GlobalUser;
  userId: Scalars['UUID']['output'];
};

export enum StoryPoints {
  Eight = 'EIGHT',
  Five = 'FIVE',
  NoVote = 'NO_VOTE',
  One = 'ONE',
  Thirteen = 'THIRTEEN',
  Three = 'THREE',
  Two = 'TWO',
  Zero = 'ZERO'
}

/**
 * 
 * Filter for string values.
 * If multiple filters are specified, they are combined with AND.
 */
export type StringFilter = {
  /**
   * 
   * A string value that must be contained in the field that is being filtered.
   */
  contains?: InputMaybe<Scalars['String']['input']>;
  /**
   * 
   * A string value to match exactly.
   */
  equals?: InputMaybe<Scalars['String']['input']>;
  /**
   * 
   * If true, the filter is case-insensitive.
   */
  ignoreCase?: Scalars['Boolean']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  animalVotingUpdated: PlanningMeeting;
  issueEstimationUpdated: PlanningMeeting;
  meetingAttendeesChanged: Array<MeetingAttendee>;
  meetingFinished: Meeting;
  meetingStarted: Meeting;
  nameVotingUpdated: PlanningMeeting;
  planningMeetingPageChanged: PlanningMeetingPage;
  planningMeetingUpdated: PlanningMeeting;
  sprintGoalVotingUpdated: PlanningMeeting;
};


export type SubscriptionAnimalVotingUpdatedArgs = {
  meetingId: Scalars['UUID']['input'];
};


export type SubscriptionIssueEstimationUpdatedArgs = {
  meetingId: Scalars['UUID']['input'];
};


export type SubscriptionMeetingAttendeesChangedArgs = {
  projectId: Scalars['UUID']['input'];
};


export type SubscriptionMeetingFinishedArgs = {
  projectId: Scalars['UUID']['input'];
};


export type SubscriptionMeetingStartedArgs = {
  projectId: Scalars['UUID']['input'];
};


export type SubscriptionNameVotingUpdatedArgs = {
  meetingId: Scalars['UUID']['input'];
};


export type SubscriptionPlanningMeetingPageChangedArgs = {
  meetingId: Scalars['UUID']['input'];
};


export type SubscriptionPlanningMeetingUpdatedArgs = {
  meetingId: Scalars['UUID']['input'];
};


export type SubscriptionSprintGoalVotingUpdatedArgs = {
  meetingId: Scalars['UUID']['input'];
};

export type UpdateProjectInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  endDate: Scalars['DateTime']['input'];
  name: Scalars['String']['input'];
  projectSettings: ProjectSettingsInput;
  startDate: Scalars['DateTime']['input'];
};

export type UpdateRoleInput = {
  gamifiedName: Scalars['String']['input'];
  name: Scalars['String']['input'];
  permissions: Array<ProjectPrivilege>;
};

export type UpdateUserInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};

export type UserInProject = {
  __typename?: 'UserInProject';
  privateInfo: PrivateUserInfo;
  project: Project;
  projectId: Scalars['UUID']['output'];
  roles: Array<UserRoleInProject>;
  user: GlobalUser;
  userId: Scalars['UUID']['output'];
};

export type UserRoleInProject = {
  __typename?: 'UserRoleInProject';
  gamifiedName: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  project: Project;
  projectId: Scalars['UUID']['output'];
  projectPrivileges: Array<ProjectPrivilege>;
  projectPrivilegesDetails: Array<ProjectPrivilegeDetails>;
};

export enum UserState {
  Away = 'AWAY',
  Offline = 'OFFLINE',
  Online = 'ONLINE'
}

export type UserStats = {
  __typename?: 'UserStats';
  commits: Scalars['Int']['output'];
  hoursWorked: Scalars['Int']['output'];
  issuesClosed: Scalars['Int']['output'];
  issuesCreated: Scalars['Int']['output'];
  project: Project;
  storyPoints: Scalars['Int']['output'];
  user: GlobalUser;
};

export type VotingState = {
  __typename?: 'VotingState';
  totalVotes: Scalars['Int']['output'];
  /**  todo animal type */
  userVotes: Array<AnimalVote>;
  votedFor: Scalars['String']['output'];
};

export type BaseGlobalUserFragment = { __typename?: 'GlobalUser', id: any, avatar?: string | null, username: string, roles: Array<{ __typename?: 'GlobalUserRole', id: any, name: string, globalPrivileges: Array<GlobalPrivilege> }> } & { ' $fragmentName'?: 'BaseGlobalUserFragment' };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser?: (
    { __typename?: 'GlobalUser' }
    & { ' $fragmentRefs'?: { 'BaseGlobalUserFragment': BaseGlobalUserFragment } }
  ) | null };

export type ProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', id: any, name: string, description?: string | null, startDate: any, endDate: any }> };

export const BaseGlobalUserFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseGlobalUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GlobalUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"globalPrivileges"}}]}}]}}]} as unknown as DocumentNode<BaseGlobalUserFragment, unknown>;
export const CurrentUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseGlobalUser"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseGlobalUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GlobalUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"globalPrivileges"}}]}}]}}]} as unknown as DocumentNode<CurrentUserQuery, CurrentUserQueryVariables>;
export const ProjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}}]}}]} as unknown as DocumentNode<ProjectsQuery, ProjectsQueryVariables>;