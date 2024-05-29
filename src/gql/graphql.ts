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

export type Achievement = {
  __typename?: 'Achievement';
  description: Scalars['String']['output'];
  goal: Scalars['Int']['output'];
  identifier: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type AchievementProgress = {
  __typename?: 'AchievementProgress';
  achievement: Achievement;
  completed: Scalars['Boolean']['output'];
  progress: Scalars['Int']['output'];
};

export enum AllowedDataType {
  Boolean = 'BOOLEAN',
  Double = 'DOUBLE',
  Integer = 'INTEGER',
  String = 'STRING'
}

export enum Animal {
  Ankylosaurus = 'ANKYLOSAURUS',
  Brontosaurus = 'BRONTOSAURUS',
  Dodo = 'DODO',
  GiantSloth = 'GIANT_SLOTH',
  Mammoth = 'MAMMOTH',
  Parasaurolophus = 'PARASAUROLOPHUS',
  Stegosaurus = 'STEGOSAURUS',
  Trex = 'TREX',
  Triceratops = 'TRICERATOPS'
}

export type AnimalVoting = {
  __typename?: 'AnimalVoting';
  animalVotingStates: Array<AnimalVotingState>;
  finished: Scalars['Boolean']['output'];
  votableAnimals: Array<Animal>;
  votingResult?: Maybe<Animal>;
};

export type AnimalVotingState = {
  __typename?: 'AnimalVotingState';
  totalVotes: Scalars['Int']['output'];
  userVotes: Array<Vote>;
  votedFor: Animal;
};

export type BasicUserInfo = {
  __typename?: 'BasicUserInfo';
  avatar?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isAdmin: Scalars['Boolean']['output'];
  username: Scalars['String']['output'];
};

export type CodeRepositorySettings = {
  __typename?: 'CodeRepositorySettings';
  repositories: Array<RepositoryDefinition>;
};

export type CodeRepositorySettingsInput = {
  repositories: Array<RepositoryDefinitionInput>;
};

export type CreateEventInput = {
  eventData: Array<TemplateFieldInput>;
  eventTypeIdentifier: Scalars['String']['input'];
  id?: InputMaybe<Scalars['UUID']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['UUID']['input']>;
  projectId?: InputMaybe<Scalars['UUID']['input']>;
  timestamp: Scalars['DateTime']['input'];
  userId?: InputMaybe<Scalars['UUID']['input']>;
  visibility?: InputMaybe<EventVisibility>;
};

export type CreateEventTypeInput = {
  defaultVisibility: EventVisibility;
  description?: InputMaybe<Scalars['String']['input']>;
  eventSchema: SchemaDefinitionInput;
  identifier: Scalars['String']['input'];
  messageTemplate: Scalars['String']['input'];
};

export type CreateGlobalUserInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
  vcsUserId: Scalars['String']['input'];
};

export type CreateGlobalUserRoleInput = {
  globalPrivileges: Array<GlobalPrivilege>;
  name: Scalars['String']['input'];
};

/** Input type for creating a new issue. */
export type CreateIssueInput = {
  /** Detailed description of the new issue. Can be GitLab-flavored markdown. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Sprint number the issue is associated with, if applicable. */
  sprintNumber?: InputMaybe<Scalars['Int']['input']>;
  /** Name of the state the issue should be initially set to. */
  stateName: Scalars['String']['input'];
  /** Title of the new issue. */
  title: Scalars['String']['input'];
  /** Name of the type the issue should be categorized under. */
  typeName: Scalars['String']['input'];
};

export type CreateProjectInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  projectSettings: ProjectSettingsInput;
  startingSprintNumber?: Scalars['Int']['input'];
};

export type CreateProjectRoleInput = {
  gamifiedName: Scalars['String']['input'];
  name: Scalars['String']['input'];
  projectPrivileges: Array<ProjectPrivilege>;
};

export type CreateSprintInput = {
  animal: Animal;
  customGoldChallengeReward?: InputMaybe<Scalars['String']['input']>;
  endDate: Scalars['DateTime']['input'];
  name: Scalars['String']['input'];
  startDate: Scalars['DateTime']['input'];
  storyPointsPlanned: Scalars['Int']['input'];
};

/**
 * Filter for date values.
 * If multiple filters are specified, they are combined with AND.
 */
export type DateTimeFilter = {
  /** If specified, filters for dates after the specified value. */
  after?: InputMaybe<Scalars['DateTime']['input']>;
  /** If specified, filters for dates before the specified value. */
  before?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DefaultEvent = Event & {
  __typename?: 'DefaultEvent';
  children: Array<Event>;
  eventData: Array<DefaultTemplateField>;
  eventType: EventType;
  id: Scalars['UUID']['output'];
  message: Scalars['String']['output'];
  mostRecentChildTimestamp: Scalars['DateTime']['output'];
  parent?: Maybe<Event>;
  projectId?: Maybe<Scalars['UUID']['output']>;
  timestamp: Scalars['DateTime']['output'];
  user?: Maybe<GlobalUser>;
  userId?: Maybe<Scalars['UUID']['output']>;
  visibility: EventVisibility;
  visibleToUserIds: Array<Scalars['UUID']['output']>;
};

export type DefaultEventType = EventType & {
  __typename?: 'DefaultEventType';
  defaultVisibility: EventVisibility;
  description?: Maybe<Scalars['String']['output']>;
  eventSchema: SchemaDefinition;
  identifier: Scalars['String']['output'];
  messageTemplate: Scalars['String']['output'];
};

export type DefaultFieldSchemaDefinition = FieldSchemaDefinition & {
  __typename?: 'DefaultFieldSchemaDefinition';
  allowedValues?: Maybe<Array<Scalars['String']['output']>>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  required: Scalars['Boolean']['output'];
  type: AllowedDataType;
};

export type DefaultSchemaDefinition = SchemaDefinition & {
  __typename?: 'DefaultSchemaDefinition';
  fields: Array<FieldSchemaDefinition>;
};

export type DefaultTemplateField = TemplateField & {
  __typename?: 'DefaultTemplateField';
  key: Scalars['String']['output'];
  type: AllowedDataType;
  value?: Maybe<Scalars['String']['output']>;
};

export type DefinitionOfDoneConfirmState = {
  checked: Scalars['Boolean']['input'];
  children: Array<DefinitionOfDoneConfirmState>;
  dodText: Scalars['String']['input'];
  reasonIfNotChecked?: InputMaybe<Scalars['String']['input']>;
};

export type DefinitionOfDoneItem = {
  __typename?: 'DefinitionOfDoneItem';
  implies: Array<DefinitionOfDoneItem>;
  required: Scalars['Boolean']['output'];
  text: Scalars['String']['output'];
};

export type DefinitionOfDoneItemInput = {
  implies?: Array<DefinitionOfDoneItemInput>;
  required: Scalars['Boolean']['input'];
  text: Scalars['String']['input'];
};

export type EstimationStats = {
  __typename?: 'EstimationStats';
  max?: Maybe<TShirtSizeEstimation>;
  median?: Maybe<TShirtSizeEstimation>;
  min?: Maybe<TShirtSizeEstimation>;
  mode?: Maybe<TShirtSizeEstimation>;
};

export type EstimationVote = {
  __typename?: 'EstimationVote';
  totalVotes: Scalars['Int']['output'];
  userVotes: Array<Vote>;
  votedFor: TShirtSizeEstimation;
};

export type Event = {
  children: Array<Event>;
  eventData: Array<TemplateField>;
  eventType: EventType;
  id: Scalars['UUID']['output'];
  message: Scalars['String']['output'];
  mostRecentChildTimestamp: Scalars['DateTime']['output'];
  parent?: Maybe<Event>;
  projectId?: Maybe<Scalars['UUID']['output']>;
  timestamp: Scalars['DateTime']['output'];
  user?: Maybe<GlobalUser>;
  userId?: Maybe<Scalars['UUID']['output']>;
  visibility: EventVisibility;
  visibleToUserIds: Array<Scalars['UUID']['output']>;
};

export type EventFilter = {
  eventTypeIdentifier?: InputMaybe<StringFilter>;
  minVisibility?: InputMaybe<EventVisibility>;
  projectId?: InputMaybe<Scalars['UUID']['input']>;
  since?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type EventType = {
  defaultVisibility: EventVisibility;
  description?: Maybe<Scalars['String']['output']>;
  eventSchema: SchemaDefinition;
  identifier: Scalars['String']['output'];
  messageTemplate: Scalars['String']['output'];
};

export enum EventVisibility {
  /** Detail level: visible to all users but only when viewing a specific object, not in the whole list of events. */
  Detail = 'DETAIL',
  /** Only for admins. Not visible to users. */
  Internal = 'INTERNAL',
  /** Only for the user who created the event and users in "visibleToUserIds". */
  Private = 'PRIVATE',
  /** Project detail level: visible to all users */
  Public = 'PUBLIC'
}

export type FieldSchemaDefinition = {
  allowedValues?: Maybe<Array<Scalars['String']['output']>>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  required: Scalars['Boolean']['output'];
  type: AllowedDataType;
};

export type FieldSchemaDefinitionInput = {
  allowedValues?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  required?: Scalars['Boolean']['input'];
  type: AllowedDataType;
};

export enum GlobalPrivilege {
  ChangeRoles = 'CHANGE_ROLES',
  CreateProject = 'CREATE_PROJECT',
  CreateRole = 'CREATE_ROLE',
  DeleteRole = 'DELETE_ROLE',
  DeleteUser = 'DELETE_USER',
  ListUsers = 'LIST_USERS',
  ReadUserPrivateInfo = 'READ_USER_PRIVATE_INFO',
  UpdateRole = 'UPDATE_ROLE',
  UpdateUser = 'UPDATE_USER'
}

export type GlobalUser = {
  __typename?: 'GlobalUser';
  avatar?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  roles: Array<GlobalUserRole>;
  userInProject?: Maybe<UserInProject>;
  userInProjects: Array<UserInProject>;
  username: Scalars['String']['output'];
  vcsUserId: Scalars['String']['output'];
};


export type GlobalUserUserInProjectArgs = {
  projectId: Scalars['UUID']['input'];
};

export type GlobalUserRole = {
  __typename?: 'GlobalUserRole';
  globalPrivileges: Array<GlobalPrivilege>;
  name: Scalars['String']['output'];
};

export type Icon = {
  __typename?: 'Icon';
  mdiIcon?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
};

export type IconInput = {
  mdiIcon?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
};

export type ImsSettings = {
  __typename?: 'ImsSettings';
  effortEstimationFieldName: Scalars['String']['output'];
  imsIcon: Icon;
  imsIssueTemplateId: Scalars['ID']['output'];
  imsName: Scalars['String']['output'];
  imsProjectId: Scalars['ID']['output'];
  imsProjectUrl: Scalars['String']['output'];
  issuePriorities: Array<IssuePriorityConfiguration>;
  issueStates: Array<IssueState>;
  partOfRelationId: Scalars['ID']['output'];
  sprintFieldName: Scalars['String']['output'];
};

export type ImsSettingsInput = {
  effortEstimationFieldName: Scalars['String']['input'];
  imsIcon: IconInput;
  imsIssueTemplateId: Scalars['ID']['input'];
  imsName: Scalars['String']['input'];
  imsProjectId: Scalars['ID']['input'];
  imsProjectUrl: Scalars['String']['input'];
  issuePriorities: Array<IssuePriorityInput>;
  issueStates: Array<IssueStateInput>;
  partOfRelationId: Scalars['ID']['input'];
  sprintFieldName: Scalars['String']['input'];
};

/**
 * Filter for integer values.
 * If multiple filters are specified, they are combined with AND.
 */
export type IntFilter = {
  /** An integer value to match exactly. */
  equals?: InputMaybe<Scalars['Int']['input']>;
  /** If specified, filters for values greater than to the specified value. */
  greaterThan?: InputMaybe<Scalars['Int']['input']>;
  /** If specified, filters for values less than to the specified value. */
  lessThan?: InputMaybe<Scalars['Int']['input']>;
};

/** Represents an issue in a project management system. */
export type Issue = {
  __typename?: 'Issue';
  /** List of user UUIDs representing the assignees of the issue. */
  assigneeIds: Array<Scalars['UUID']['output']>;
  assignees: Array<Maybe<UserInProject>>;
  /** Children issue ids of the issue. */
  childrenIssueIds: Array<Scalars['ID']['output']>;
  /** Detailed description of the issue. Markdown is supported. */
  description?: Maybe<Scalars['String']['output']>;
  /** Effort estimation associated with the issue. If not set, the issue is considered to not have an estimation yet. */
  effortEstimation?: Maybe<TShirtSizeEstimation>;
  /** Unique identifier for the issue. */
  id: Scalars['ID']['output'];
  /** List of events / timeline items of the issue. */
  issueEvents: Array<Event>;
  /** Url to the issue in the issue management system. */
  issueUrl: Scalars['String']['output'];
  /** Labels associated with the issue. */
  labels: Array<Scalars['String']['output']>;
  /** Parent issue id of the issue. */
  parentIssueId?: Maybe<Scalars['ID']['output']>;
  /** Priority of the issue. */
  priority: IssuePriority;
  /** Unique identifier of the project the issue belongs to. */
  projectId: Scalars['UUID']['output'];
  sprint?: Maybe<Sprint>;
  /** Sprint number associated with the issue, if applicable. */
  sprintNumber?: Maybe<Scalars['Int']['output']>;
  /** Current state of the issue. */
  state: IssueState;
  /**
   * Story points associated with the issue. If not set, the issue is considered to not have an estimation yet.
   * Might also be calculated based on the effort estimation.
   */
  storyPoints?: Maybe<Scalars['Int']['output']>;
  /** Title of the issue, providing a brief summary. */
  title: Scalars['String']['output'];
  /** Categorization of the issue by type. */
  type: IssueType;
};

export type IssueEstimation = {
  __typename?: 'IssueEstimation';
  countdownSeconds?: Maybe<Scalars['Int']['output']>;
  estimationStats?: Maybe<EstimationStats>;
  finalResult?: Maybe<TShirtSizeEstimation>;
  finished: Scalars['Boolean']['output'];
  issue?: Maybe<Issue>;
  issueId?: Maybe<Scalars['ID']['output']>;
  planningMeeting: PlanningMeeting;
  votes: Array<EstimationVote>;
};

export type IssueMutation = {
  __typename?: 'IssueMutation';
  assignIssue: Issue;
  changeIssueDescription: Issue;
  changeIssueState: Issue;
  changeIssueTitle: Issue;
  changeIssueType: Issue;
  changeSprint: Issue;
  finishIssue: Issue;
  issueId: Scalars['ID']['output'];
  project: Project;
};


export type IssueMutationAssignIssueArgs = {
  assigneeId?: InputMaybe<Scalars['UUID']['input']>;
};


export type IssueMutationChangeIssueDescriptionArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
};


export type IssueMutationChangeIssueStateArgs = {
  stateName: Scalars['String']['input'];
};


export type IssueMutationChangeIssueTitleArgs = {
  title: Scalars['String']['input'];
};


export type IssueMutationChangeIssueTypeArgs = {
  typeName: Scalars['String']['input'];
};


export type IssueMutationChangeSprintArgs = {
  sprintNumber?: InputMaybe<Scalars['Int']['input']>;
};


export type IssueMutationFinishIssueArgs = {
  dodConfirmStates: Array<DefinitionOfDoneConfirmState>;
  doneStateName?: InputMaybe<Scalars['String']['input']>;
};

/** Enumeration of priorities for issues. */
export enum IssuePriority {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM'
}

export type IssuePriorityConfiguration = {
  __typename?: 'IssuePriorityConfiguration';
  imsPriorityId: Scalars['ID']['output'];
  issuePriority: IssuePriority;
};

export type IssuePriorityInput = {
  imsPriorityId: Scalars['ID']['input'];
  issuePriority: IssuePriority;
};

/** Represents the state of an issue within its lifecycle. */
export type IssueState = {
  __typename?: 'IssueState';
  /** Identifier for the state in an issue management system. */
  imsStateId: Scalars['ID']['output'];
  /** Name of the state. */
  name: Scalars['String']['output'];
  /** Type of the state, categorizing its position in the workflow. */
  type: IssueStateType;
};

export type IssueStateInBoard = {
  __typename?: 'IssueStateInBoard';
  issues: Array<Issue>;
  projectBoard: ProjectBoard;
  state: IssueState;
};

export type IssueStateInput = {
  imsStateId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  type: IssueStateType;
};

/** Enumeration of possible states an issue can be in during its lifecycle. */
export enum IssueStateType {
  Backlog = 'BACKLOG',
  Done = 'DONE',
  DoneSprint = 'DONE_SPRINT',
  InProgress = 'IN_PROGRESS',
  SprintBacklog = 'SPRINT_BACKLOG'
}

/** Defines the type of an issue, such as bug, feature, etc. */
export type IssueType = {
  __typename?: 'IssueType';
  /** Description of what the issue type entails. */
  description?: Maybe<Scalars['String']['output']>;
  /** Path to an icon visually representing the issue type. */
  iconPath?: Maybe<Scalars['String']['output']>;
  /** Name of the issue type. */
  name: Scalars['String']['output'];
};

export type Meeting = {
  active: Scalars['Boolean']['output'];
  attendees: Array<MeetingAttendee>;
  meetingType: MeetingType;
  projectId: Scalars['UUID']['output'];
};

export type MeetingAttendee = {
  __typename?: 'MeetingAttendee';
  role: MeetingRole;
  state: UserState;
  user: GlobalUser;
  userId: Scalars['UUID']['output'];
};

export enum MeetingRole {
  Attendee = 'ATTENDEE',
  MeetingLeader = 'MEETING_LEADER'
}

export enum MeetingType {
  Planning = 'PLANNING',
  Retrospective = 'RETROSPECTIVE',
  Standup = 'STANDUP'
}

export type Mutation = {
  __typename?: 'Mutation';
  /**  event types */
  createEventType: EventType;
  createGlobalUserRole: GlobalUserRole;
  /**  projects */
  createProject: Project;
  deleteEventType: Scalars['Boolean']['output'];
  deleteGlobalUserRole: Scalars['Boolean']['output'];
  deleteProject: Scalars['Boolean']['output'];
  deleteUser: Scalars['Boolean']['output'];
  grantRole: GlobalUser;
  joinProject: UserInProject;
  mutateProject: ProjectMutation;
  /**  user */
  register: GlobalUser;
  revokeRole: GlobalUser;
  updateEventType: EventType;
  updateGlobalUser: GlobalUser;
  updateGlobalUserRole: GlobalUserRole;
  updateProject: Project;
};


export type MutationCreateEventTypeArgs = {
  input: CreateEventTypeInput;
};


export type MutationCreateGlobalUserRoleArgs = {
  input: CreateGlobalUserRoleInput;
};


export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};


export type MutationDeleteEventTypeArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteGlobalUserRoleArgs = {
  name: Scalars['String']['input'];
};


export type MutationDeleteProjectArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationGrantRoleArgs = {
  roleName: Scalars['String']['input'];
  userId: Scalars['UUID']['input'];
};


export type MutationJoinProjectArgs = {
  projectId: Scalars['UUID']['input'];
};


export type MutationMutateProjectArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationRegisterArgs = {
  input: CreateGlobalUserInput;
};


export type MutationRevokeRoleArgs = {
  roleName: Scalars['String']['input'];
  userId: Scalars['UUID']['input'];
};


export type MutationUpdateEventTypeArgs = {
  id: Scalars['String']['input'];
  input: UpdateEventTypeInput;
};


export type MutationUpdateGlobalUserArgs = {
  id: Scalars['UUID']['input'];
  input: UpdateGlobalUserInput;
};


export type MutationUpdateGlobalUserRoleArgs = {
  input: UpdateGlobalUserRoleInput;
  name: Scalars['String']['input'];
};


export type MutationUpdateProjectArgs = {
  id: Scalars['UUID']['input'];
  input: UpdateProjectInput;
};

export type MvelRule = Rule & {
  __typename?: 'MvelRule';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  mvelExpression: Scalars['String']['output'];
  name: Scalars['String']['output'];
  triggerEventType: EventType;
};

export type NameVoting = {
  __typename?: 'NameVoting';
  finished: Scalars['Boolean']['output'];
  nameVotingStates: Array<NameVotingState>;
  votableNames: Array<Scalars['String']['output']>;
  votingResult?: Maybe<Scalars['String']['output']>;
};

export type NameVotingState = {
  __typename?: 'NameVotingState';
  totalVotes: Scalars['Int']['output'];
  userVotes: Array<Vote>;
  votedFor: Scalars['String']['output'];
};

/** Specifies the page size and page number for paginated results. */
export type Pagination = {
  /**
   * The page number, starting at 0.
   * If not specified, the default value is 0.
   * For values greater than 0, the page size must be specified.
   * If this value is larger than the number of pages, an empty page is returned.
   */
  page?: Scalars['Int']['input'];
  /** The number of elements per page. */
  size: Scalars['Int']['input'];
};

/** Return type for information about paginated results. */
export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  /** Whether there is a next page. */
  hasNext: Scalars['Boolean']['output'];
  /** The current page number. */
  page: Scalars['Int']['output'];
  /** The number of elements per page. */
  size: Scalars['Int']['output'];
  /** The total number of elements across all pages. */
  totalElements: Scalars['Int']['output'];
  /** The total number of pages. */
  totalPages: Scalars['Int']['output'];
};

export type PlanningMeeting = Meeting & {
  __typename?: 'PlanningMeeting';
  active: Scalars['Boolean']['output'];
  animalVoting: AnimalVoting;
  attendees: Array<MeetingAttendee>;
  currentPage: PlanningMeetingPage;
  issueEstimation: IssueEstimation;
  /**  inherited from Meeting: */
  meetingType: MeetingType;
  nameVoting: NameVoting;
  planningSettings: PlanningSettings;
  projectId: Scalars['UUID']['output'];
  sprintGoalVoting: SprintGoalVoting;
};

export type PlanningMeetingInput = {
  meetingLeaderId: Scalars['UUID']['input'];
  planningSettings: PlanningSettingsInput;
  title: Scalars['String']['input'];
};

export type PlanningMeetingMutation = {
  __typename?: 'PlanningMeetingMutation';
  /**  name voting */
  addName: PlanningMeeting;
  addSprintIssue: PlanningMeeting;
  changePage: PlanningMeeting;
  endAnimalVoting: PlanningMeeting;
  endEstimation: PlanningMeeting;
  endNameVoting: PlanningMeeting;
  finishMeeting: Sprint;
  finishSprintGoalVoting: PlanningMeeting;
  nextIssue: PlanningMeeting;
  project: Project;
  removeSprintIssue: PlanningMeeting;
  restartEstimation: PlanningMeeting;
  setFinalResult: PlanningMeeting;
  /**  todo rename setIssueId or something */
  startCountdown: PlanningMeeting;
  /**  animal voting */
  voteAnimal: PlanningMeeting;
  voteEstimation: PlanningMeeting;
  voteName: PlanningMeeting;
};


export type PlanningMeetingMutationAddNameArgs = {
  name: Scalars['String']['input'];
};


export type PlanningMeetingMutationAddSprintIssueArgs = {
  issueId: Scalars['ID']['input'];
};


export type PlanningMeetingMutationChangePageArgs = {
  page: PlanningMeetingPage;
};


export type PlanningMeetingMutationNextIssueArgs = {
  issueId?: InputMaybe<Scalars['ID']['input']>;
};


export type PlanningMeetingMutationRemoveSprintIssueArgs = {
  issueId: Scalars['ID']['input'];
};


export type PlanningMeetingMutationSetFinalResultArgs = {
  estimation: TShirtSizeEstimation;
};


export type PlanningMeetingMutationStartCountdownArgs = {
  seconds: Scalars['Int']['input'];
};


export type PlanningMeetingMutationVoteAnimalArgs = {
  animal: Animal;
};


export type PlanningMeetingMutationVoteEstimationArgs = {
  estimation: TShirtSizeEstimation;
};


export type PlanningMeetingMutationVoteNameArgs = {
  name: Scalars['String']['input'];
};

export enum PlanningMeetingPage {
  ChooseAnimal = 'CHOOSE_ANIMAL',
  EstimateIssues = 'ESTIMATE_ISSUES',
  Information = 'INFORMATION',
  NameAnimal = 'NAME_ANIMAL',
  SprintGoal = 'SPRINT_GOAL'
}

export type PlanningSettings = {
  __typename?: 'PlanningSettings';
  customGoldChallengeReward?: Maybe<Scalars['String']['output']>;
  sprintDurationDays: Scalars['Int']['output'];
  sprintStartDate: Scalars['DateTime']['output'];
};

export type PlanningSettingsInput = {
  goldChallengeCustomReward?: InputMaybe<Scalars['String']['input']>;
  sprintDurationDays: Scalars['Int']['input'];
  sprintStartDate: Scalars['DateTime']['input'];
};

export type Project = {
  __typename?: 'Project';
  /**  meetings */
  activePlanningMeeting?: Maybe<PlanningMeeting>;
  activeRetrospectiveMeeting?: Maybe<RetrospectiveMeeting>;
  activeStandupMeeting?: Maybe<StandupMeeting>;
  currentSprint?: Maybe<Sprint>;
  currentSprintNumber?: Maybe<Scalars['Int']['output']>;
  currentUser?: Maybe<UserInProject>;
  description?: Maybe<Scalars['String']['output']>;
  /**  events */
  events: Array<Event>;
  id: Scalars['UUID']['output'];
  issue?: Maybe<Issue>;
  /**  issues */
  issues: Array<Issue>;
  name: Scalars['String']['output'];
  previousSprint?: Maybe<Sprint>;
  projectBoard: ProjectBoard;
  projectSettings: ProjectSettings;
  role?: Maybe<ProjectRole>;
  /**  roles */
  roles: Array<ProjectRole>;
  sprints: Array<Sprint>;
  users: Array<UserInProject>;
};


export type ProjectEventsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type ProjectIssueArgs = {
  id: Scalars['UUID']['input'];
};


export type ProjectRoleArgs = {
  name: Scalars['String']['input'];
};

export type ProjectBoard = {
  __typename?: 'ProjectBoard';
  project: Project;
  states: Array<IssueStateInBoard>;
};

export type ProjectDependent = {
  project: Project;
  projectId: Scalars['UUID']['output'];
};

export type ProjectMutation = {
  __typename?: 'ProjectMutation';
  createIssue: Issue;
  createPlanningMeeting: PlanningMeeting;
  createRetrospectiveMeeting: RetrospectiveMeeting;
  createRole: ProjectRole;
  createSprint: Sprint;
  createStandupMeeting: StandupMeeting;
  deleteRole: Scalars['Boolean']['output'];
  joinMeeting: Meeting;
  leaveMeeting?: Maybe<Meeting>;
  mutateIssue: IssueMutation;
  mutatePlanningMeeting: PlanningMeetingMutation;
  mutateRetrospectiveMeeting: RetrospectiveMeetingMutation;
  mutateStandupMeeting: StandupMeetingMutation;
  pingMeeting: Meeting;
  project: Project;
  promoteToMeetingLeader: Meeting;
  updateRole: ProjectRole;
};


export type ProjectMutationCreateIssueArgs = {
  input: CreateIssueInput;
};


export type ProjectMutationCreatePlanningMeetingArgs = {
  input: PlanningMeetingInput;
};


export type ProjectMutationCreateRetrospectiveMeetingArgs = {
  input: RetrospectiveMeetingInput;
};


export type ProjectMutationCreateRoleArgs = {
  input: CreateProjectRoleInput;
};


export type ProjectMutationCreateSprintArgs = {
  input?: InputMaybe<CreateSprintInput>;
};


export type ProjectMutationCreateStandupMeetingArgs = {
  input: StandupMeetingInput;
};


export type ProjectMutationDeleteRoleArgs = {
  name: Scalars['String']['input'];
};


export type ProjectMutationJoinMeetingArgs = {
  type: MeetingType;
};


export type ProjectMutationLeaveMeetingArgs = {
  type: MeetingType;
};


export type ProjectMutationMutateIssueArgs = {
  id: Scalars['ID']['input'];
};


export type ProjectMutationPingMeetingArgs = {
  type: MeetingType;
};


export type ProjectMutationPromoteToMeetingLeaderArgs = {
  type: MeetingType;
  userId: Scalars['UUID']['input'];
};


export type ProjectMutationUpdateRoleArgs = {
  input: UpdateProjectRoleInput;
  name: Scalars['String']['input'];
};

export enum ProjectPrivilege {
  CreateRole = 'CREATE_ROLE',
  CreateShopItem = 'CREATE_SHOP_ITEM',
  CreateSprint = 'CREATE_SPRINT',
  CreateUser = 'CREATE_USER',
  DeleteProject = 'DELETE_PROJECT',
  DeleteRole = 'DELETE_ROLE',
  DeleteShopItem = 'DELETE_SHOP_ITEM',
  DeleteSprint = 'DELETE_SPRINT',
  DeleteUser = 'DELETE_USER',
  ReadProject = 'READ_PROJECT',
  ReadUserPrivateInfo = 'READ_USER_PRIVATE_INFO',
  UpdateProject = 'UPDATE_PROJECT',
  UpdateRole = 'UPDATE_ROLE',
  UpdateShopItem = 'UPDATE_SHOP_ITEM',
  UpdateSprint = 'UPDATE_SPRINT',
  UpdateUser = 'UPDATE_USER'
}

export type ProjectRole = {
  __typename?: 'ProjectRole';
  gamifiedName: Scalars['String']['output'];
  name: Scalars['String']['output'];
  project: Project;
  projectId: Scalars['UUID']['output'];
  projectPrivileges: Array<ProjectPrivilege>;
};

export type ProjectSettings = {
  __typename?: 'ProjectSettings';
  codeRepositorySettings: CodeRepositorySettings;
  definitionOfDone: Array<DefinitionOfDoneItem>;
  imsSettings: ImsSettings;
};

export type ProjectSettingsInput = {
  codeRepositorySettings: CodeRepositorySettingsInput;
  definitionOfDone?: Array<DefinitionOfDoneItemInput>;
  imsSettings: ImsSettingsInput;
};

export type Query = {
  __typename?: 'Query';
  currentUser?: Maybe<GlobalUser>;
  currentUserInfo?: Maybe<BasicUserInfo>;
  eventType?: Maybe<EventType>;
  /**  event types */
  eventTypes: Array<EventType>;
  globalUser?: Maybe<GlobalUser>;
  globalUserRole?: Maybe<GlobalUserRole>;
  /**  roles */
  globalUserRoles: Array<GlobalUserRole>;
  /**  users */
  globalUsers: Array<GlobalUser>;
  project?: Maybe<Project>;
  /**  projects */
  projects: Array<Project>;
};


export type QueryEventTypeArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryGlobalUserArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryGlobalUserRoleArgs = {
  name: Scalars['String']['input'];
};


export type QueryProjectArgs = {
  id: Scalars['UUID']['input'];
};

export type RepositoryDefinition = {
  __typename?: 'RepositoryDefinition';
  icon: Icon;
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type RepositoryDefinitionInput = {
  icon: IconInput;
  name: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type RetrospectiveMeeting = Meeting & {
  __typename?: 'RetrospectiveMeeting';
  active: Scalars['Boolean']['output'];
  attendees: Array<MeetingAttendee>;
  /**  inherited from Meeting: */
  meetingType: MeetingType;
  projectId: Scalars['UUID']['output'];
};

export type RetrospectiveMeetingInput = {
  projectId: Scalars['UUID']['input'];
  title: Scalars['String']['input'];
};

export type RetrospectiveMeetingMutation = {
  __typename?: 'RetrospectiveMeetingMutation';
  meeting: RetrospectiveMeeting;
};

export type Rule = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  triggerEventType: EventType;
};

export type SchemaDefinition = {
  fields: Array<FieldSchemaDefinition>;
};

export type SchemaDefinitionInput = {
  fields: Array<FieldSchemaDefinitionInput>;
};

export type ShopItem = {
  __typename?: 'ShopItem';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
};

/** Specifies the sort direction, either ascending or descending. */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Sprint = {
  __typename?: 'Sprint';
  animal?: Maybe<Animal>;
  customGoldChallengeReward?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['UUID']['output'];
  issues: Array<Issue>;
  name?: Maybe<Scalars['String']['output']>;
  number: Scalars['Int']['output'];
  project: Project;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  stats: SprintStats;
  storyPointsPlanned?: Maybe<Scalars['Int']['output']>;
};

export type SprintGoalVoting = {
  __typename?: 'SprintGoalVoting';
  finished: Scalars['Boolean']['output'];
  nonSprintIssueIds: Array<Scalars['ID']['output']>;
  nonSprintIssues: Array<Issue>;
  planningMeeting: PlanningMeeting;
  sprintIssueIds: Array<Scalars['ID']['output']>;
  sprintIssues: Array<Issue>;
};

export type SprintStats = {
  __typename?: 'SprintStats';
  Sprint: Sprint;
  averageStoryPoints: Scalars['Float']['output'];
  daysElapsed: Scalars['Int']['output'];
  daysLeft: Scalars['Int']['output'];
  issueCount: Scalars['Int']['output'];
  percentageStoryPointsCompleted: Scalars['Float']['output'];
  percentageStoryPointsInProgress: Scalars['Float']['output'];
  percentageStoryPointsNotStarted: Scalars['Float']['output'];
  percentageTimeElapsed: Scalars['Float']['output'];
  successState: SprintSuccessState;
  totalStoryPoints: Scalars['Int']['output'];
};

export enum SprintSuccessState {
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Success = 'SUCCESS',
  SuccessWithGoldChallenge = 'SUCCESS_WITH_GOLD_CHALLENGE',
  Unknown = 'UNKNOWN'
}

export type StandupMeeting = Meeting & {
  __typename?: 'StandupMeeting';
  active: Scalars['Boolean']['output'];
  attendees: Array<MeetingAttendee>;
  currentAttendee?: Maybe<MeetingAttendee>;
  /**  inherited from Meeting: */
  meetingType: MeetingType;
  order: Array<MeetingAttendee>;
  projectId: Scalars['UUID']['output'];
  standupMeetingSettings: StandupMeetingSettings;
};

export type StandupMeetingInput = {
  meetingLeaderId: Scalars['UUID']['input'];
  standupMeetingSettings?: InputMaybe<StandupMeetingSettingsInput>;
};

export type StandupMeetingMutation = {
  __typename?: 'StandupMeetingMutation';
  changeCurrentAttendee: StandupMeeting;
  finishStandupMeeting: StandupMeeting;
  project: Project;
  startStandupMeeting: StandupMeeting;
};


export type StandupMeetingMutationChangeCurrentAttendeeArgs = {
  attendeeId: Scalars['UUID']['input'];
};

export type StandupMeetingSettings = {
  __typename?: 'StandupMeetingSettings';
  countdownPerAttendee?: Maybe<Scalars['Int']['output']>;
};

export type StandupMeetingSettingsInput = {
  countdownPerAttendee?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * Filter for string values.
 * If multiple filters are specified, they are combined with AND.
 */
export type StringFilter = {
  /** A string value that must be contained in the field that is being filtered. */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** A string value to match exactly. */
  equals?: InputMaybe<Scalars['String']['input']>;
  /** If true, the filter is case-insensitive. */
  ignoreCase?: Scalars['Boolean']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  events: Array<Event>;
  meeting?: Maybe<Meeting>;
  planningMeeting?: Maybe<PlanningMeeting>;
  standupMeeting: StandupMeeting;
};


export type SubscriptionEventsArgs = {
  projectId: Scalars['UUID']['input'];
};


export type SubscriptionMeetingArgs = {
  meetingType: MeetingType;
  projectId: Scalars['UUID']['input'];
};


export type SubscriptionPlanningMeetingArgs = {
  projectId: Scalars['UUID']['input'];
};


export type SubscriptionStandupMeetingArgs = {
  projectId: Scalars['UUID']['input'];
};

/** Enumeration of possible sizes for a T-shirt estimation. */
export enum TShirtSizeEstimation {
  L = 'L',
  M = 'M',
  S = 'S',
  Xl = 'XL',
  Xs = 'XS'
}

export type TemplateField = {
  key: Scalars['String']['output'];
  type: AllowedDataType;
  value?: Maybe<Scalars['String']['output']>;
};

export type TemplateFieldInput = {
  key: Scalars['String']['input'];
  type: AllowedDataType;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateEventTypeInput = {
  defaultVisibility: EventVisibility;
  description?: InputMaybe<Scalars['String']['input']>;
  eventSchema: SchemaDefinitionInput;
  messageTemplate: Scalars['String']['input'];
};

export type UpdateGlobalUserInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
  vcsUserId: Scalars['String']['input'];
};

export type UpdateGlobalUserRoleInput = {
  globalPrivileges: Array<GlobalPrivilege>;
};

export type UpdateProjectInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  projectSettings: ProjectSettingsInput;
};

export type UpdateProjectRoleInput = {
  gamifiedName: Scalars['String']['input'];
  projectPrivileges: Array<ProjectPrivilege>;
};

export type UserInProject = ProjectDependent & {
  __typename?: 'UserInProject';
  achievements: Array<AchievementProgress>;
  project: Project;
  projectId: Scalars['UUID']['output'];
  publicEvents: Array<Event>;
  roles: Array<ProjectRole>;
  user: GlobalUser;
  userId: Scalars['UUID']['output'];
  userStats: UserStats;
};


export type UserInProjectPublicEventsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export enum UserState {
  Away = 'AWAY',
  Offline = 'OFFLINE',
  Online = 'ONLINE'
}

export type UserStats = {
  __typename?: 'UserStats';
  level: Scalars['Int']['output'];
  virtualCurrency: Scalars['Int']['output'];
  xp: Scalars['Int']['output'];
  xpToNextLevel: Scalars['Int']['output'];
};

export type Vote = {
  __typename?: 'Vote';
  user: GlobalUser;
  userId: Scalars['UUID']['output'];
};

export type EventsOfProjectQueryVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
}>;


export type EventsOfProjectQuery = { __typename?: 'Query', project?: { __typename?: 'Project', events: Array<(
      { __typename?: 'DefaultEvent' }
      & { ' $fragmentRefs'?: { 'BaseEventFragment': BaseEventFragment } }
    )> } | null };

export type EventsOfUserQueryVariables = Exact<{
  userId: Scalars['UUID']['input'];
  projectId: Scalars['UUID']['input'];
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
}>;


export type EventsOfUserQuery = { __typename?: 'Query', globalUser?: { __typename?: 'GlobalUser', userInProject?: { __typename?: 'UserInProject', publicEvents: Array<(
        { __typename?: 'DefaultEvent' }
        & { ' $fragmentRefs'?: { 'BaseEventFragment': BaseEventFragment } }
      )> } | null } | null };

export type BaseEventFragment = { __typename?: 'DefaultEvent', id: any, timestamp: any, message: string, user?: { __typename?: 'GlobalUser', id: any, username: string, avatar?: string | null } | null, eventType: { __typename?: 'DefaultEventType', identifier: string }, eventData: Array<{ __typename?: 'DefaultTemplateField', key: string, value?: string | null }> } & { ' $fragmentName'?: 'BaseEventFragment' };

export type BaseGlobalUserFragment = { __typename?: 'GlobalUser', id: any, avatar?: string | null, username: string, roles: Array<{ __typename?: 'GlobalUserRole', name: string, globalPrivileges: Array<GlobalPrivilege> }> } & { ' $fragmentName'?: 'BaseGlobalUserFragment' };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser?: (
    { __typename?: 'GlobalUser' }
    & { ' $fragmentRefs'?: { 'BaseGlobalUserFragment': BaseGlobalUserFragment } }
  ) | null };

export type BasicUserInfoFragment = { __typename?: 'BasicUserInfo', isAdmin: boolean, avatar?: string | null, username: string } & { ' $fragmentName'?: 'BasicUserInfoFragment' };

export type CurrentBasicUserInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentBasicUserInfoQuery = { __typename?: 'Query', currentUserInfo?: (
    { __typename?: 'BasicUserInfo' }
    & { ' $fragmentRefs'?: { 'BasicUserInfoFragment': BasicUserInfoFragment } }
  ) | null };

export type RegisterUserMutationVariables = Exact<{
  input: CreateGlobalUserInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', register: (
    { __typename?: 'GlobalUser' }
    & { ' $fragmentRefs'?: { 'BaseGlobalUserFragment': BaseGlobalUserFragment } }
  ) };

export type UpdateGlobalUserMutationVariables = Exact<{
  userId: Scalars['UUID']['input'];
  input: UpdateGlobalUserInput;
}>;


export type UpdateGlobalUserMutation = { __typename?: 'Mutation', updateGlobalUser: (
    { __typename?: 'GlobalUser' }
    & { ' $fragmentRefs'?: { 'BaseGlobalUserFragment': BaseGlobalUserFragment } }
  ) };

export type ProjectBoardFragment = { __typename?: 'ProjectBoard', states: Array<{ __typename?: 'IssueStateInBoard', state: { __typename?: 'IssueState', name: string, type: IssueStateType, imsStateId: string }, issues: Array<{ __typename?: 'Issue', id: string, title: string, issueUrl: string, description?: string | null, storyPoints?: number | null, effortEstimation?: TShirtSizeEstimation | null, priority: IssuePriority, sprintNumber?: number | null, type: { __typename?: 'IssueType', iconPath?: string | null, name: string }, assignees: Array<{ __typename?: 'UserInProject', user: { __typename?: 'GlobalUser', id: any, avatar?: string | null, username: string } } | null> }> }> } & { ' $fragmentName'?: 'ProjectBoardFragment' };

export type BoardQueryQueryVariables = Exact<{
  projectId: Scalars['UUID']['input'];
}>;


export type BoardQueryQuery = { __typename?: 'Query', project?: { __typename?: 'Project', projectBoard: (
      { __typename?: 'ProjectBoard' }
      & { ' $fragmentRefs'?: { 'ProjectBoardFragment': ProjectBoardFragment } }
    ) } | null };

export type ChangeStateMutationMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  issueId: Scalars['ID']['input'];
  stateName: Scalars['String']['input'];
}>;


export type ChangeStateMutationMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', mutateIssue: { __typename?: 'IssueMutation', changeIssueState: (
        { __typename?: 'Issue' }
        & { ' $fragmentRefs'?: { 'IssueBaseFragment': IssueBaseFragment } }
      ) } } };

export type FinishIssueMutationMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  issueId: Scalars['ID']['input'];
  doneStateName: Scalars['String']['input'];
  dodConfirmStates: Array<DefinitionOfDoneConfirmState> | DefinitionOfDoneConfirmState;
}>;


export type FinishIssueMutationMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', mutateIssue: { __typename?: 'IssueMutation', finishIssue: (
        { __typename?: 'Issue' }
        & { ' $fragmentRefs'?: { 'IssueBaseFragment': IssueBaseFragment } }
      ) } } };

export type AssignIssueMutationMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  issueId: Scalars['ID']['input'];
  assigneeId: Scalars['UUID']['input'];
}>;


export type AssignIssueMutationMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', mutateIssue: { __typename?: 'IssueMutation', assignIssue: (
        { __typename?: 'Issue' }
        & { ' $fragmentRefs'?: { 'IssueBaseFragment': IssueBaseFragment } }
      ) } } };

export type IssueQueryQueryVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  issueId: Scalars['UUID']['input'];
}>;


export type IssueQueryQuery = { __typename?: 'Query', project?: { __typename?: 'Project', issue?: (
      { __typename?: 'Issue' }
      & { ' $fragmentRefs'?: { 'IssueWithEventsFragment': IssueWithEventsFragment } }
    ) | null } | null };

export type IssueBaseFragment = { __typename?: 'Issue', id: string, title: string, issueUrl: string, description?: string | null, storyPoints?: number | null, effortEstimation?: TShirtSizeEstimation | null, priority: IssuePriority, sprintNumber?: number | null, type: { __typename?: 'IssueType', iconPath?: string | null, name: string }, assignees: Array<{ __typename?: 'UserInProject', user: { __typename?: 'GlobalUser', id: any, avatar?: string | null, username: string } } | null> } & { ' $fragmentName'?: 'IssueBaseFragment' };

export type IssueWithEventsFragment = (
  { __typename?: 'Issue', issueEvents: Array<{ __typename?: 'DefaultEvent', id: any, timestamp: any, message: string, user?: { __typename?: 'GlobalUser', id: any, username: string, avatar?: string | null } | null, eventType: { __typename?: 'DefaultEventType', identifier: string }, eventData: Array<{ __typename?: 'DefaultTemplateField', key: string, value?: string | null }> }> }
  & { ' $fragmentRefs'?: { 'IssueBaseFragment': IssueBaseFragment } }
) & { ' $fragmentName'?: 'IssueWithEventsFragment' };

export type JoinMeetingMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  type: MeetingType;
}>;


export type JoinMeetingMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', joinMeeting: (
      { __typename?: 'PlanningMeeting' }
      & { ' $fragmentRefs'?: { 'DefaultMeeting_PlanningMeeting_Fragment': DefaultMeeting_PlanningMeeting_Fragment } }
    ) | (
      { __typename?: 'RetrospectiveMeeting' }
      & { ' $fragmentRefs'?: { 'DefaultMeeting_RetrospectiveMeeting_Fragment': DefaultMeeting_RetrospectiveMeeting_Fragment } }
    ) | (
      { __typename?: 'StandupMeeting' }
      & { ' $fragmentRefs'?: { 'DefaultMeeting_StandupMeeting_Fragment': DefaultMeeting_StandupMeeting_Fragment } }
    ) } };

export type LeaveMeetingMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  type: MeetingType;
}>;


export type LeaveMeetingMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', leaveMeeting?: (
      { __typename?: 'PlanningMeeting' }
      & { ' $fragmentRefs'?: { 'DefaultMeeting_PlanningMeeting_Fragment': DefaultMeeting_PlanningMeeting_Fragment } }
    ) | (
      { __typename?: 'RetrospectiveMeeting' }
      & { ' $fragmentRefs'?: { 'DefaultMeeting_RetrospectiveMeeting_Fragment': DefaultMeeting_RetrospectiveMeeting_Fragment } }
    ) | (
      { __typename?: 'StandupMeeting' }
      & { ' $fragmentRefs'?: { 'DefaultMeeting_StandupMeeting_Fragment': DefaultMeeting_StandupMeeting_Fragment } }
    ) | null } };

export type PromoteToMeetingLeaderMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  type: MeetingType;
  userId: Scalars['UUID']['input'];
}>;


export type PromoteToMeetingLeaderMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', promoteToMeetingLeader: (
      { __typename?: 'PlanningMeeting' }
      & { ' $fragmentRefs'?: { 'DefaultMeeting_PlanningMeeting_Fragment': DefaultMeeting_PlanningMeeting_Fragment } }
    ) | (
      { __typename?: 'RetrospectiveMeeting' }
      & { ' $fragmentRefs'?: { 'DefaultMeeting_RetrospectiveMeeting_Fragment': DefaultMeeting_RetrospectiveMeeting_Fragment } }
    ) | (
      { __typename?: 'StandupMeeting' }
      & { ' $fragmentRefs'?: { 'DefaultMeeting_StandupMeeting_Fragment': DefaultMeeting_StandupMeeting_Fragment } }
    ) } };

type DefaultMeeting_PlanningMeeting_Fragment = { __typename?: 'PlanningMeeting', meetingType: MeetingType, active: boolean, attendees: Array<{ __typename?: 'MeetingAttendee', role: MeetingRole, state: UserState, user: { __typename?: 'GlobalUser', id: any, username: string, avatar?: string | null } }> } & { ' $fragmentName'?: 'DefaultMeeting_PlanningMeeting_Fragment' };

type DefaultMeeting_RetrospectiveMeeting_Fragment = { __typename?: 'RetrospectiveMeeting', meetingType: MeetingType, active: boolean, attendees: Array<{ __typename?: 'MeetingAttendee', role: MeetingRole, state: UserState, user: { __typename?: 'GlobalUser', id: any, username: string, avatar?: string | null } }> } & { ' $fragmentName'?: 'DefaultMeeting_RetrospectiveMeeting_Fragment' };

type DefaultMeeting_StandupMeeting_Fragment = { __typename?: 'StandupMeeting', meetingType: MeetingType, active: boolean, attendees: Array<{ __typename?: 'MeetingAttendee', role: MeetingRole, state: UserState, user: { __typename?: 'GlobalUser', id: any, username: string, avatar?: string | null } }> } & { ' $fragmentName'?: 'DefaultMeeting_StandupMeeting_Fragment' };

export type DefaultMeetingFragment = DefaultMeeting_PlanningMeeting_Fragment | DefaultMeeting_RetrospectiveMeeting_Fragment | DefaultMeeting_StandupMeeting_Fragment;

export type CreatePlanningMeetingMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  input: PlanningMeetingInput;
}>;


export type CreatePlanningMeetingMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', createPlanningMeeting: (
      { __typename?: 'PlanningMeeting' }
      & { ' $fragmentRefs'?: { 'DefaultPlanningMeetingFragment': DefaultPlanningMeetingFragment } }
    ) } };

export type ChangePageMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  page: PlanningMeetingPage;
}>;


export type ChangePageMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', mutatePlanningMeeting: { __typename?: 'PlanningMeetingMutation', changePage: (
        { __typename?: 'PlanningMeeting' }
        & { ' $fragmentRefs'?: { 'DefaultPlanningMeetingFragment': DefaultPlanningMeetingFragment } }
      ) } } };

export type VoteAnimalMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  animal: Animal;
}>;


export type VoteAnimalMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', mutatePlanningMeeting: { __typename?: 'PlanningMeetingMutation', voteAnimal: (
        { __typename?: 'PlanningMeeting' }
        & { ' $fragmentRefs'?: { 'DefaultPlanningMeetingFragment': DefaultPlanningMeetingFragment } }
      ) } } };

export type EndAnimalVotingMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
}>;


export type EndAnimalVotingMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', mutatePlanningMeeting: { __typename?: 'PlanningMeetingMutation', endAnimalVoting: (
        { __typename?: 'PlanningMeeting' }
        & { ' $fragmentRefs'?: { 'DefaultPlanningMeetingFragment': DefaultPlanningMeetingFragment } }
      ) } } };

export type AddNameMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  name: Scalars['String']['input'];
}>;


export type AddNameMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', mutatePlanningMeeting: { __typename?: 'PlanningMeetingMutation', addName: (
        { __typename?: 'PlanningMeeting' }
        & { ' $fragmentRefs'?: { 'DefaultPlanningMeetingFragment': DefaultPlanningMeetingFragment } }
      ) } } };

export type VoteNameMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  name: Scalars['String']['input'];
}>;


export type VoteNameMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', mutatePlanningMeeting: { __typename?: 'PlanningMeetingMutation', voteName: (
        { __typename?: 'PlanningMeeting' }
        & { ' $fragmentRefs'?: { 'DefaultPlanningMeetingFragment': DefaultPlanningMeetingFragment } }
      ) } } };

export type EndNameVotingMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
}>;


export type EndNameVotingMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', mutatePlanningMeeting: { __typename?: 'PlanningMeetingMutation', endNameVoting: (
        { __typename?: 'PlanningMeeting' }
        & { ' $fragmentRefs'?: { 'DefaultPlanningMeetingFragment': DefaultPlanningMeetingFragment } }
      ) } } };

export type VoteEstimationMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  estimation: TShirtSizeEstimation;
}>;


export type VoteEstimationMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', mutatePlanningMeeting: { __typename?: 'PlanningMeetingMutation', voteEstimation: (
        { __typename?: 'PlanningMeeting' }
        & { ' $fragmentRefs'?: { 'DefaultPlanningMeetingFragment': DefaultPlanningMeetingFragment } }
      ) } } };

export type RestartEstimationMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
}>;


export type RestartEstimationMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', mutatePlanningMeeting: { __typename?: 'PlanningMeetingMutation', restartEstimation: (
        { __typename?: 'PlanningMeeting' }
        & { ' $fragmentRefs'?: { 'DefaultPlanningMeetingFragment': DefaultPlanningMeetingFragment } }
      ) } } };

export type NextIssueMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  issueId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type NextIssueMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', mutatePlanningMeeting: { __typename?: 'PlanningMeetingMutation', nextIssue: (
        { __typename?: 'PlanningMeeting' }
        & { ' $fragmentRefs'?: { 'DefaultPlanningMeetingFragment': DefaultPlanningMeetingFragment } }
      ) } } };

export type StartCountdownMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  seconds: Scalars['Int']['input'];
}>;


export type StartCountdownMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', mutatePlanningMeeting: { __typename?: 'PlanningMeetingMutation', startCountdown: (
        { __typename?: 'PlanningMeeting' }
        & { ' $fragmentRefs'?: { 'DefaultPlanningMeetingFragment': DefaultPlanningMeetingFragment } }
      ) } } };

export type EndEstimationMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
}>;


export type EndEstimationMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', mutatePlanningMeeting: { __typename?: 'PlanningMeetingMutation', endEstimation: (
        { __typename?: 'PlanningMeeting' }
        & { ' $fragmentRefs'?: { 'DefaultPlanningMeetingFragment': DefaultPlanningMeetingFragment } }
      ) } } };

export type SetFinalResultMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  estimation: TShirtSizeEstimation;
}>;


export type SetFinalResultMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', mutatePlanningMeeting: { __typename?: 'PlanningMeetingMutation', setFinalResult: (
        { __typename?: 'PlanningMeeting' }
        & { ' $fragmentRefs'?: { 'DefaultPlanningMeetingFragment': DefaultPlanningMeetingFragment } }
      ) } } };

export type AddSprintIssueMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  issueId: Scalars['ID']['input'];
}>;


export type AddSprintIssueMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', mutatePlanningMeeting: { __typename?: 'PlanningMeetingMutation', addSprintIssue: (
        { __typename?: 'PlanningMeeting' }
        & { ' $fragmentRefs'?: { 'DefaultPlanningMeetingFragment': DefaultPlanningMeetingFragment } }
      ) } } };

export type RemoveSprintIssueMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  issueId: Scalars['ID']['input'];
}>;


export type RemoveSprintIssueMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', mutatePlanningMeeting: { __typename?: 'PlanningMeetingMutation', removeSprintIssue: (
        { __typename?: 'PlanningMeeting' }
        & { ' $fragmentRefs'?: { 'DefaultPlanningMeetingFragment': DefaultPlanningMeetingFragment } }
      ) } } };

export type FinishMeetingMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
}>;


export type FinishMeetingMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', mutatePlanningMeeting: { __typename?: 'PlanningMeetingMutation', finishMeeting: (
        { __typename?: 'Sprint' }
        & { ' $fragmentRefs'?: { 'DefaultSprintFragment': DefaultSprintFragment } }
      ) } } };

export type PlanningMeetingSubscriptionVariables = Exact<{
  projectId: Scalars['UUID']['input'];
}>;


export type PlanningMeetingSubscription = { __typename?: 'Subscription', planningMeeting?: (
    { __typename?: 'PlanningMeeting' }
    & { ' $fragmentRefs'?: { 'DefaultPlanningMeetingFragment': DefaultPlanningMeetingFragment } }
  ) | null };

export type DefaultPlanningMeetingFragment = (
  { __typename?: 'PlanningMeeting', currentPage: PlanningMeetingPage, animalVoting: { __typename?: 'AnimalVoting', finished: boolean, votableAnimals: Array<Animal>, votingResult?: Animal | null, animalVotingStates: Array<{ __typename?: 'AnimalVotingState', votedFor: Animal, totalVotes: number, userVotes: Array<{ __typename?: 'Vote', user: { __typename?: 'GlobalUser', id: any, username: string } }> }> }, nameVoting: { __typename?: 'NameVoting', finished: boolean, votableNames: Array<string>, votingResult?: string | null, nameVotingStates: Array<{ __typename?: 'NameVotingState', votedFor: string, totalVotes: number, userVotes: Array<{ __typename?: 'Vote', user: { __typename?: 'GlobalUser', id: any, username: string } }> }> }, issueEstimation: { __typename?: 'IssueEstimation', finished: boolean, countdownSeconds?: number | null, finalResult?: TShirtSizeEstimation | null, issueId?: string | null, estimationStats?: { __typename?: 'EstimationStats', max?: TShirtSizeEstimation | null, min?: TShirtSizeEstimation | null, median?: TShirtSizeEstimation | null, mode?: TShirtSizeEstimation | null } | null, votes: Array<{ __typename?: 'EstimationVote', totalVotes: number, votedFor: TShirtSizeEstimation, userVotes: Array<{ __typename?: 'Vote', user: { __typename?: 'GlobalUser', id: any, username: string } }> }> }, sprintGoalVoting: { __typename?: 'SprintGoalVoting', finished: boolean, nonSprintIssueIds: Array<string>, sprintIssueIds: Array<string> } }
  & { ' $fragmentRefs'?: { 'DefaultMeeting_PlanningMeeting_Fragment': DefaultMeeting_PlanningMeeting_Fragment } }
) & { ' $fragmentName'?: 'DefaultPlanningMeetingFragment' };

export type ProjectMainFragment = { __typename?: 'Project', id: any, name: string, description?: string | null, projectSettings: { __typename?: 'ProjectSettings', imsSettings: { __typename?: 'ImsSettings', imsName: string, imsProjectUrl: string, imsIcon: { __typename?: 'Icon', path?: string | null } }, codeRepositorySettings: { __typename?: 'CodeRepositorySettings', repositories: Array<{ __typename?: 'RepositoryDefinition', name: string, url: string, icon: { __typename?: 'Icon', mdiIcon?: string | null } }> }, definitionOfDone: Array<{ __typename?: 'DefinitionOfDoneItem', text: string, required: boolean, implies: Array<{ __typename?: 'DefinitionOfDoneItem', text: string, required: boolean, implies: Array<{ __typename?: 'DefinitionOfDoneItem', text: string, required: boolean }> }> }> } } & { ' $fragmentName'?: 'ProjectMainFragment' };

export type ProjectBaseFragment = { __typename?: 'Project', id: any, name: string, description?: string | null, currentUser?: { __typename?: 'UserInProject', roles: Array<{ __typename?: 'ProjectRole', projectPrivileges: Array<ProjectPrivilege> }> } | null } & { ' $fragmentName'?: 'ProjectBaseFragment' };

export type ProjectMainQueryQueryVariables = Exact<{
  projectId: Scalars['UUID']['input'];
}>;


export type ProjectMainQueryQuery = { __typename?: 'Query', project?: (
    { __typename?: 'Project' }
    & { ' $fragmentRefs'?: { 'ProjectMainFragment': ProjectMainFragment } }
  ) | null };

export type AllProjectsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProjectsQueryQuery = { __typename?: 'Query', projects: Array<(
    { __typename?: 'Project' }
    & { ' $fragmentRefs'?: { 'ProjectBaseFragment': ProjectBaseFragment } }
  )> };

export type CreateProjectMutationVariables = Exact<{
  input: CreateProjectInput;
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject: (
    { __typename?: 'Project' }
    & { ' $fragmentRefs'?: { 'ProjectMainFragment': ProjectMainFragment } }
  ) };

export type UpdateProjectMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  input: UpdateProjectInput;
}>;


export type UpdateProjectMutation = { __typename?: 'Mutation', updateProject: (
    { __typename?: 'Project' }
    & { ' $fragmentRefs'?: { 'ProjectMainFragment': ProjectMainFragment } }
  ) };

export type DeleteProjectMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
}>;


export type DeleteProjectMutation = { __typename?: 'Mutation', deleteProject: boolean };

export type SprintQueryVariables = Exact<{
  projectId: Scalars['UUID']['input'];
}>;


export type SprintQuery = { __typename?: 'Query', project?: { __typename?: 'Project', currentSprint?: (
      { __typename?: 'Sprint' }
      & { ' $fragmentRefs'?: { 'DefaultSprintFragment': DefaultSprintFragment } }
    ) | null } | null };

export type PreviousSprintQueryVariables = Exact<{
  projectId: Scalars['UUID']['input'];
}>;


export type PreviousSprintQuery = { __typename?: 'Query', project?: { __typename?: 'Project', previousSprint?: (
      { __typename?: 'Sprint' }
      & { ' $fragmentRefs'?: { 'DefaultSprintFragment': DefaultSprintFragment } }
    ) | null } | null };

export type SprintsQueryVariables = Exact<{
  projectId: Scalars['UUID']['input'];
}>;


export type SprintsQuery = { __typename?: 'Query', project?: { __typename?: 'Project', sprints: Array<(
      { __typename?: 'Sprint' }
      & { ' $fragmentRefs'?: { 'DefaultSprintFragment': DefaultSprintFragment } }
    )> } | null };

export type DefaultSprintFragment = { __typename?: 'Sprint', id: any, startDate?: any | null, endDate?: any | null, storyPointsPlanned?: number | null, name?: string | null, animal?: Animal | null, number: number, stats: { __typename?: 'SprintStats', totalStoryPoints: number, percentageStoryPointsCompleted: number, percentageStoryPointsInProgress: number, percentageTimeElapsed: number, daysLeft: number, averageStoryPoints: number, successState: SprintSuccessState } } & { ' $fragmentName'?: 'DefaultSprintFragment' };

export type CreateStandupMeetingMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  input: StandupMeetingInput;
}>;


export type CreateStandupMeetingMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', createStandupMeeting: (
      { __typename?: 'StandupMeeting' }
      & { ' $fragmentRefs'?: { 'DefaultStandupMeetingFragment': DefaultStandupMeetingFragment } }
    ) } };

export type StartStandupMeetingMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
}>;


export type StartStandupMeetingMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', mutateStandupMeeting: { __typename?: 'StandupMeetingMutation', startStandupMeeting: (
        { __typename?: 'StandupMeeting' }
        & { ' $fragmentRefs'?: { 'DefaultStandupMeetingFragment': DefaultStandupMeetingFragment } }
      ) } } };

export type ChangeCurrentAttendeeMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  userId: Scalars['UUID']['input'];
}>;


export type ChangeCurrentAttendeeMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', mutateStandupMeeting: { __typename?: 'StandupMeetingMutation', changeCurrentAttendee: (
        { __typename?: 'StandupMeeting' }
        & { ' $fragmentRefs'?: { 'DefaultStandupMeetingFragment': DefaultStandupMeetingFragment } }
      ) } } };

export type FinishStandupMeetingMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
}>;


export type FinishStandupMeetingMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', mutateStandupMeeting: { __typename?: 'StandupMeetingMutation', finishStandupMeeting: (
        { __typename?: 'StandupMeeting' }
        & { ' $fragmentRefs'?: { 'DefaultStandupMeetingFragment': DefaultStandupMeetingFragment } }
      ) } } };

export type StandupMeetingSubscriptionVariables = Exact<{
  projectId: Scalars['UUID']['input'];
}>;


export type StandupMeetingSubscription = { __typename?: 'Subscription', standupMeeting: (
    { __typename?: 'StandupMeeting' }
    & { ' $fragmentRefs'?: { 'DefaultStandupMeetingFragment': DefaultStandupMeetingFragment } }
  ) };

export type DefaultStandupMeetingFragment = (
  { __typename?: 'StandupMeeting', standupMeetingSettings: { __typename?: 'StandupMeetingSettings', countdownPerAttendee?: number | null }, currentAttendee?: { __typename?: 'MeetingAttendee', user: { __typename?: 'GlobalUser', id: any, username: string, avatar?: string | null } } | null, order: Array<{ __typename?: 'MeetingAttendee', user: { __typename?: 'GlobalUser', id: any, username: string, avatar?: string | null } }> }
  & { ' $fragmentRefs'?: { 'DefaultMeeting_StandupMeeting_Fragment': DefaultMeeting_StandupMeeting_Fragment } }
) & { ' $fragmentName'?: 'DefaultStandupMeetingFragment' };

export type UserInProjectFragment = { __typename?: 'UserInProject', user: { __typename?: 'GlobalUser', id: any, username: string, avatar?: string | null }, roles: Array<{ __typename?: 'ProjectRole', gamifiedName: string, name: string, projectPrivileges: Array<ProjectPrivilege> }> } & { ' $fragmentName'?: 'UserInProjectFragment' };

export type UserInProjectQueryQueryVariables = Exact<{
  projectId: Scalars['UUID']['input'];
}>;


export type UserInProjectQueryQuery = { __typename?: 'Query', project?: { __typename?: 'Project', currentUser?: (
      { __typename?: 'UserInProject' }
      & { ' $fragmentRefs'?: { 'UserInProjectFragment': UserInProjectFragment } }
    ) | null } | null };

export type AllUsersInProjectQueryQueryVariables = Exact<{
  projectId: Scalars['UUID']['input'];
}>;


export type AllUsersInProjectQueryQuery = { __typename?: 'Query', project?: { __typename?: 'Project', users: Array<(
      { __typename?: 'UserInProject' }
      & { ' $fragmentRefs'?: { 'UserInProjectFragment': UserInProjectFragment } }
    )> } | null };

export type JoinProjectMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
}>;


export type JoinProjectMutation = { __typename?: 'Mutation', joinProject: (
    { __typename?: 'UserInProject' }
    & { ' $fragmentRefs'?: { 'UserInProjectFragment': UserInProjectFragment } }
  ) };

export const BaseEventFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseEvent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DefaultEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identifier"}}]}},{"kind":"Field","name":{"kind":"Name","value":"eventData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<BaseEventFragment, unknown>;
export const BaseGlobalUserFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseGlobalUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GlobalUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"globalPrivileges"}}]}}]}}]} as unknown as DocumentNode<BaseGlobalUserFragment, unknown>;
export const BasicUserInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BasicUserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BasicUserInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]} as unknown as DocumentNode<BasicUserInfoFragment, unknown>;
export const ProjectBoardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectBoard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectBoard"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"states"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"state"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"imsStateId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"issues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"issueUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"storyPoints"}},{"kind":"Field","name":{"kind":"Name","value":"effortEstimation"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"sprintNumber"}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iconPath"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProjectBoardFragment, unknown>;
export const IssueBaseFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssueBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Issue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"issueUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"storyPoints"}},{"kind":"Field","name":{"kind":"Name","value":"effortEstimation"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"sprintNumber"}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iconPath"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<IssueBaseFragment, unknown>;
export const IssueWithEventsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssueWithEvents"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Issue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssueBase"}},{"kind":"Field","name":{"kind":"Name","value":"issueEvents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identifier"}}]}},{"kind":"Field","name":{"kind":"Name","value":"eventData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssueBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Issue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"issueUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"storyPoints"}},{"kind":"Field","name":{"kind":"Name","value":"effortEstimation"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"sprintNumber"}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iconPath"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<IssueWithEventsFragment, unknown>;
export const DefaultMeetingFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<DefaultMeetingFragment, unknown>;
export const DefaultPlanningMeetingFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultPlanningMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlanningMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"animalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableAnimals"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"animalVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nameVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableNames"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"nameVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueEstimation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"countdownSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"estimationStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"median"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"finalResult"}},{"kind":"Field","name":{"kind":"Name","value":"issueId"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sprintGoalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"nonSprintIssueIds"}},{"kind":"Field","name":{"kind":"Name","value":"sprintIssueIds"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<DefaultPlanningMeetingFragment, unknown>;
export const ProjectMainFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectMain"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"projectSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imsSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imsName"}},{"kind":"Field","name":{"kind":"Name","value":"imsIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imsProjectUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"codeRepositorySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repositories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mdiIcon"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"definitionOfDone"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","name":{"kind":"Name","value":"implies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","name":{"kind":"Name","value":"implies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProjectMainFragment, unknown>;
export const ProjectBaseFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectPrivileges"}}]}}]}}]}}]} as unknown as DocumentNode<ProjectBaseFragment, unknown>;
export const DefaultSprintFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultSprint"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Sprint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"storyPointsPlanned"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalStoryPoints"}},{"kind":"Field","name":{"kind":"Name","value":"percentageStoryPointsCompleted"}},{"kind":"Field","name":{"kind":"Name","value":"percentageStoryPointsInProgress"}},{"kind":"Field","name":{"kind":"Name","value":"percentageTimeElapsed"}},{"kind":"Field","name":{"kind":"Name","value":"daysLeft"}},{"kind":"Field","name":{"kind":"Name","value":"averageStoryPoints"}},{"kind":"Field","name":{"kind":"Name","value":"successState"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"animal"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}}]} as unknown as DocumentNode<DefaultSprintFragment, unknown>;
export const DefaultStandupMeetingFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultStandupMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StandupMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"standupMeetingSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countdownPerAttendee"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAttendee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<DefaultStandupMeetingFragment, unknown>;
export const UserInProjectFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInProject"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserInProject"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gamifiedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projectPrivileges"}}]}}]}}]} as unknown as DocumentNode<UserInProjectFragment, unknown>;
export const EventsOfProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EventsOfProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"size"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseEvent"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseEvent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DefaultEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identifier"}}]}},{"kind":"Field","name":{"kind":"Name","value":"eventData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<EventsOfProjectQuery, EventsOfProjectQueryVariables>;
export const EventsOfUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EventsOfUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"globalUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userInProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicEvents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"size"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseEvent"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseEvent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DefaultEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identifier"}}]}},{"kind":"Field","name":{"kind":"Name","value":"eventData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<EventsOfUserQuery, EventsOfUserQueryVariables>;
export const CurrentUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseGlobalUser"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseGlobalUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GlobalUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"globalPrivileges"}}]}}]}}]} as unknown as DocumentNode<CurrentUserQuery, CurrentUserQueryVariables>;
export const CurrentBasicUserInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CurrentBasicUserInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentUserInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BasicUserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BasicUserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BasicUserInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]} as unknown as DocumentNode<CurrentBasicUserInfoQuery, CurrentBasicUserInfoQueryVariables>;
export const RegisterUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"registerUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateGlobalUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseGlobalUser"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseGlobalUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GlobalUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"globalPrivileges"}}]}}]}}]} as unknown as DocumentNode<RegisterUserMutation, RegisterUserMutationVariables>;
export const UpdateGlobalUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateGlobalUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateGlobalUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateGlobalUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseGlobalUser"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseGlobalUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GlobalUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"globalPrivileges"}}]}}]}}]} as unknown as DocumentNode<UpdateGlobalUserMutation, UpdateGlobalUserMutationVariables>;
export const BoardQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BoardQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectBoard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectBoard"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectBoard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectBoard"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"states"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"state"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"imsStateId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"issues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"issueUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"storyPoints"}},{"kind":"Field","name":{"kind":"Name","value":"effortEstimation"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"sprintNumber"}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iconPath"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<BoardQueryQuery, BoardQueryQueryVariables>;
export const ChangeStateMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangeStateMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stateName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateIssue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeIssueState"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"stateName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stateName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssueBase"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssueBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Issue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"issueUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"storyPoints"}},{"kind":"Field","name":{"kind":"Name","value":"effortEstimation"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"sprintNumber"}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iconPath"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<ChangeStateMutationMutation, ChangeStateMutationMutationVariables>;
export const FinishIssueMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FinishIssueMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"doneStateName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dodConfirmStates"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DefinitionOfDoneConfirmState"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateIssue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finishIssue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"doneStateName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"doneStateName"}}},{"kind":"Argument","name":{"kind":"Name","value":"dodConfirmStates"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dodConfirmStates"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssueBase"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssueBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Issue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"issueUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"storyPoints"}},{"kind":"Field","name":{"kind":"Name","value":"effortEstimation"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"sprintNumber"}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iconPath"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<FinishIssueMutationMutation, FinishIssueMutationMutationVariables>;
export const AssignIssueMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AssignIssueMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"assigneeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateIssue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assignIssue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"assigneeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"assigneeId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssueBase"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssueBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Issue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"issueUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"storyPoints"}},{"kind":"Field","name":{"kind":"Name","value":"effortEstimation"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"sprintNumber"}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iconPath"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<AssignIssueMutationMutation, AssignIssueMutationMutationVariables>;
export const IssueQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IssueQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"issue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssueWithEvents"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssueBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Issue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"issueUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"storyPoints"}},{"kind":"Field","name":{"kind":"Name","value":"effortEstimation"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"sprintNumber"}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iconPath"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssueWithEvents"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Issue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssueBase"}},{"kind":"Field","name":{"kind":"Name","value":"issueEvents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identifier"}}]}},{"kind":"Field","name":{"kind":"Name","value":"eventData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<IssueQueryQuery, IssueQueryQueryVariables>;
export const JoinMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"JoinMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MeetingType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"joinMeeting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<JoinMeetingMutation, JoinMeetingMutationVariables>;
export const LeaveMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LeaveMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MeetingType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leaveMeeting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<LeaveMeetingMutation, LeaveMeetingMutationVariables>;
export const PromoteToMeetingLeaderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PromoteToMeetingLeader"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MeetingType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"promoteToMeetingLeader"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<PromoteToMeetingLeaderMutation, PromoteToMeetingLeaderMutationVariables>;
export const CreatePlanningMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePlanningMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PlanningMeetingInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPlanningMeeting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultPlanningMeeting"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultPlanningMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlanningMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"animalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableAnimals"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"animalVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nameVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableNames"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"nameVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueEstimation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"countdownSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"estimationStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"median"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"finalResult"}},{"kind":"Field","name":{"kind":"Name","value":"issueId"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sprintGoalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"nonSprintIssueIds"}},{"kind":"Field","name":{"kind":"Name","value":"sprintIssueIds"}}]}}]}}]} as unknown as DocumentNode<CreatePlanningMeetingMutation, CreatePlanningMeetingMutationVariables>;
export const ChangePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangePage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PlanningMeetingPage"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutatePlanningMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changePage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultPlanningMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultPlanningMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlanningMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"animalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableAnimals"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"animalVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nameVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableNames"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"nameVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueEstimation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"countdownSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"estimationStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"median"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"finalResult"}},{"kind":"Field","name":{"kind":"Name","value":"issueId"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sprintGoalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"nonSprintIssueIds"}},{"kind":"Field","name":{"kind":"Name","value":"sprintIssueIds"}}]}}]}}]} as unknown as DocumentNode<ChangePageMutation, ChangePageMutationVariables>;
export const VoteAnimalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VoteAnimal"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"animal"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Animal"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutatePlanningMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteAnimal"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"animal"},"value":{"kind":"Variable","name":{"kind":"Name","value":"animal"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultPlanningMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultPlanningMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlanningMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"animalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableAnimals"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"animalVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nameVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableNames"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"nameVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueEstimation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"countdownSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"estimationStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"median"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"finalResult"}},{"kind":"Field","name":{"kind":"Name","value":"issueId"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sprintGoalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"nonSprintIssueIds"}},{"kind":"Field","name":{"kind":"Name","value":"sprintIssueIds"}}]}}]}}]} as unknown as DocumentNode<VoteAnimalMutation, VoteAnimalMutationVariables>;
export const EndAnimalVotingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EndAnimalVoting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutatePlanningMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endAnimalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultPlanningMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultPlanningMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlanningMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"animalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableAnimals"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"animalVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nameVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableNames"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"nameVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueEstimation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"countdownSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"estimationStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"median"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"finalResult"}},{"kind":"Field","name":{"kind":"Name","value":"issueId"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sprintGoalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"nonSprintIssueIds"}},{"kind":"Field","name":{"kind":"Name","value":"sprintIssueIds"}}]}}]}}]} as unknown as DocumentNode<EndAnimalVotingMutation, EndAnimalVotingMutationVariables>;
export const AddNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutatePlanningMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultPlanningMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultPlanningMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlanningMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"animalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableAnimals"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"animalVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nameVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableNames"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"nameVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueEstimation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"countdownSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"estimationStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"median"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"finalResult"}},{"kind":"Field","name":{"kind":"Name","value":"issueId"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sprintGoalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"nonSprintIssueIds"}},{"kind":"Field","name":{"kind":"Name","value":"sprintIssueIds"}}]}}]}}]} as unknown as DocumentNode<AddNameMutation, AddNameMutationVariables>;
export const VoteNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VoteName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutatePlanningMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultPlanningMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultPlanningMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlanningMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"animalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableAnimals"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"animalVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nameVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableNames"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"nameVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueEstimation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"countdownSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"estimationStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"median"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"finalResult"}},{"kind":"Field","name":{"kind":"Name","value":"issueId"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sprintGoalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"nonSprintIssueIds"}},{"kind":"Field","name":{"kind":"Name","value":"sprintIssueIds"}}]}}]}}]} as unknown as DocumentNode<VoteNameMutation, VoteNameMutationVariables>;
export const EndNameVotingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EndNameVoting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutatePlanningMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endNameVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultPlanningMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultPlanningMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlanningMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"animalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableAnimals"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"animalVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nameVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableNames"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"nameVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueEstimation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"countdownSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"estimationStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"median"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"finalResult"}},{"kind":"Field","name":{"kind":"Name","value":"issueId"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sprintGoalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"nonSprintIssueIds"}},{"kind":"Field","name":{"kind":"Name","value":"sprintIssueIds"}}]}}]}}]} as unknown as DocumentNode<EndNameVotingMutation, EndNameVotingMutationVariables>;
export const VoteEstimationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VoteEstimation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"estimation"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TShirtSizeEstimation"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutatePlanningMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteEstimation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"estimation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"estimation"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultPlanningMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultPlanningMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlanningMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"animalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableAnimals"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"animalVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nameVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableNames"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"nameVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueEstimation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"countdownSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"estimationStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"median"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"finalResult"}},{"kind":"Field","name":{"kind":"Name","value":"issueId"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sprintGoalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"nonSprintIssueIds"}},{"kind":"Field","name":{"kind":"Name","value":"sprintIssueIds"}}]}}]}}]} as unknown as DocumentNode<VoteEstimationMutation, VoteEstimationMutationVariables>;
export const RestartEstimationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RestartEstimation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutatePlanningMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"restartEstimation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultPlanningMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultPlanningMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlanningMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"animalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableAnimals"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"animalVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nameVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableNames"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"nameVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueEstimation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"countdownSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"estimationStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"median"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"finalResult"}},{"kind":"Field","name":{"kind":"Name","value":"issueId"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sprintGoalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"nonSprintIssueIds"}},{"kind":"Field","name":{"kind":"Name","value":"sprintIssueIds"}}]}}]}}]} as unknown as DocumentNode<RestartEstimationMutation, RestartEstimationMutationVariables>;
export const NextIssueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NextIssue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutatePlanningMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nextIssue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"issueId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultPlanningMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultPlanningMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlanningMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"animalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableAnimals"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"animalVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nameVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableNames"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"nameVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueEstimation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"countdownSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"estimationStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"median"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"finalResult"}},{"kind":"Field","name":{"kind":"Name","value":"issueId"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sprintGoalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"nonSprintIssueIds"}},{"kind":"Field","name":{"kind":"Name","value":"sprintIssueIds"}}]}}]}}]} as unknown as DocumentNode<NextIssueMutation, NextIssueMutationVariables>;
export const StartCountdownDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"StartCountdown"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"seconds"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutatePlanningMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCountdown"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"seconds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"seconds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultPlanningMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultPlanningMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlanningMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"animalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableAnimals"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"animalVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nameVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableNames"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"nameVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueEstimation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"countdownSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"estimationStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"median"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"finalResult"}},{"kind":"Field","name":{"kind":"Name","value":"issueId"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sprintGoalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"nonSprintIssueIds"}},{"kind":"Field","name":{"kind":"Name","value":"sprintIssueIds"}}]}}]}}]} as unknown as DocumentNode<StartCountdownMutation, StartCountdownMutationVariables>;
export const EndEstimationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EndEstimation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutatePlanningMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endEstimation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultPlanningMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultPlanningMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlanningMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"animalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableAnimals"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"animalVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nameVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableNames"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"nameVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueEstimation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"countdownSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"estimationStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"median"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"finalResult"}},{"kind":"Field","name":{"kind":"Name","value":"issueId"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sprintGoalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"nonSprintIssueIds"}},{"kind":"Field","name":{"kind":"Name","value":"sprintIssueIds"}}]}}]}}]} as unknown as DocumentNode<EndEstimationMutation, EndEstimationMutationVariables>;
export const SetFinalResultDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetFinalResult"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"estimation"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TShirtSizeEstimation"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutatePlanningMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setFinalResult"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"estimation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"estimation"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultPlanningMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultPlanningMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlanningMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"animalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableAnimals"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"animalVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nameVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableNames"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"nameVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueEstimation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"countdownSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"estimationStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"median"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"finalResult"}},{"kind":"Field","name":{"kind":"Name","value":"issueId"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sprintGoalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"nonSprintIssueIds"}},{"kind":"Field","name":{"kind":"Name","value":"sprintIssueIds"}}]}}]}}]} as unknown as DocumentNode<SetFinalResultMutation, SetFinalResultMutationVariables>;
export const AddSprintIssueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddSprintIssue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutatePlanningMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addSprintIssue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"issueId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultPlanningMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultPlanningMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlanningMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"animalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableAnimals"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"animalVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nameVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableNames"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"nameVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueEstimation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"countdownSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"estimationStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"median"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"finalResult"}},{"kind":"Field","name":{"kind":"Name","value":"issueId"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sprintGoalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"nonSprintIssueIds"}},{"kind":"Field","name":{"kind":"Name","value":"sprintIssueIds"}}]}}]}}]} as unknown as DocumentNode<AddSprintIssueMutation, AddSprintIssueMutationVariables>;
export const RemoveSprintIssueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveSprintIssue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutatePlanningMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeSprintIssue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"issueId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultPlanningMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultPlanningMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlanningMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"animalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableAnimals"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"animalVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nameVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableNames"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"nameVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueEstimation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"countdownSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"estimationStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"median"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"finalResult"}},{"kind":"Field","name":{"kind":"Name","value":"issueId"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sprintGoalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"nonSprintIssueIds"}},{"kind":"Field","name":{"kind":"Name","value":"sprintIssueIds"}}]}}]}}]} as unknown as DocumentNode<RemoveSprintIssueMutation, RemoveSprintIssueMutationVariables>;
export const FinishMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FinishMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutatePlanningMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finishMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultSprint"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultSprint"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Sprint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"storyPointsPlanned"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalStoryPoints"}},{"kind":"Field","name":{"kind":"Name","value":"percentageStoryPointsCompleted"}},{"kind":"Field","name":{"kind":"Name","value":"percentageStoryPointsInProgress"}},{"kind":"Field","name":{"kind":"Name","value":"percentageTimeElapsed"}},{"kind":"Field","name":{"kind":"Name","value":"daysLeft"}},{"kind":"Field","name":{"kind":"Name","value":"averageStoryPoints"}},{"kind":"Field","name":{"kind":"Name","value":"successState"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"animal"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}}]} as unknown as DocumentNode<FinishMeetingMutation, FinishMeetingMutationVariables>;
export const PlanningMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"PlanningMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"planningMeeting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultPlanningMeeting"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultPlanningMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlanningMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"animalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableAnimals"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"animalVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nameVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableNames"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"nameVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueEstimation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"countdownSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"estimationStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"median"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"finalResult"}},{"kind":"Field","name":{"kind":"Name","value":"issueId"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sprintGoalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"nonSprintIssueIds"}},{"kind":"Field","name":{"kind":"Name","value":"sprintIssueIds"}}]}}]}}]} as unknown as DocumentNode<PlanningMeetingSubscription, PlanningMeetingSubscriptionVariables>;
export const ProjectMainQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProjectMainQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectMain"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectMain"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"projectSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imsSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imsName"}},{"kind":"Field","name":{"kind":"Name","value":"imsIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imsProjectUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"codeRepositorySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repositories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mdiIcon"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"definitionOfDone"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","name":{"kind":"Name","value":"implies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","name":{"kind":"Name","value":"implies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProjectMainQueryQuery, ProjectMainQueryQueryVariables>;
export const AllProjectsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllProjectsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectPrivileges"}}]}}]}}]}}]} as unknown as DocumentNode<AllProjectsQueryQuery, AllProjectsQueryQueryVariables>;
export const CreateProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProjectInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectMain"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectMain"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"projectSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imsSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imsName"}},{"kind":"Field","name":{"kind":"Name","value":"imsIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imsProjectUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"codeRepositorySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repositories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mdiIcon"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"definitionOfDone"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","name":{"kind":"Name","value":"implies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","name":{"kind":"Name","value":"implies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateProjectMutation, CreateProjectMutationVariables>;
export const UpdateProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProjectInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectMain"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectMain"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"projectSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imsSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imsName"}},{"kind":"Field","name":{"kind":"Name","value":"imsIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imsProjectUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"codeRepositorySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repositories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mdiIcon"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"definitionOfDone"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","name":{"kind":"Name","value":"implies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","name":{"kind":"Name","value":"implies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateProjectMutation, UpdateProjectMutationVariables>;
export const DeleteProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}]}]}}]} as unknown as DocumentNode<DeleteProjectMutation, DeleteProjectMutationVariables>;
export const SprintDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Sprint"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentSprint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultSprint"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultSprint"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Sprint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"storyPointsPlanned"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalStoryPoints"}},{"kind":"Field","name":{"kind":"Name","value":"percentageStoryPointsCompleted"}},{"kind":"Field","name":{"kind":"Name","value":"percentageStoryPointsInProgress"}},{"kind":"Field","name":{"kind":"Name","value":"percentageTimeElapsed"}},{"kind":"Field","name":{"kind":"Name","value":"daysLeft"}},{"kind":"Field","name":{"kind":"Name","value":"averageStoryPoints"}},{"kind":"Field","name":{"kind":"Name","value":"successState"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"animal"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}}]} as unknown as DocumentNode<SprintQuery, SprintQueryVariables>;
export const PreviousSprintDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PreviousSprint"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"previousSprint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultSprint"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultSprint"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Sprint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"storyPointsPlanned"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalStoryPoints"}},{"kind":"Field","name":{"kind":"Name","value":"percentageStoryPointsCompleted"}},{"kind":"Field","name":{"kind":"Name","value":"percentageStoryPointsInProgress"}},{"kind":"Field","name":{"kind":"Name","value":"percentageTimeElapsed"}},{"kind":"Field","name":{"kind":"Name","value":"daysLeft"}},{"kind":"Field","name":{"kind":"Name","value":"averageStoryPoints"}},{"kind":"Field","name":{"kind":"Name","value":"successState"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"animal"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}}]} as unknown as DocumentNode<PreviousSprintQuery, PreviousSprintQueryVariables>;
export const SprintsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Sprints"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sprints"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultSprint"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultSprint"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Sprint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"storyPointsPlanned"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalStoryPoints"}},{"kind":"Field","name":{"kind":"Name","value":"percentageStoryPointsCompleted"}},{"kind":"Field","name":{"kind":"Name","value":"percentageStoryPointsInProgress"}},{"kind":"Field","name":{"kind":"Name","value":"percentageTimeElapsed"}},{"kind":"Field","name":{"kind":"Name","value":"daysLeft"}},{"kind":"Field","name":{"kind":"Name","value":"averageStoryPoints"}},{"kind":"Field","name":{"kind":"Name","value":"successState"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"animal"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}}]} as unknown as DocumentNode<SprintsQuery, SprintsQueryVariables>;
export const CreateStandupMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateStandupMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"StandupMeetingInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createStandupMeeting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultStandupMeeting"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultStandupMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StandupMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"standupMeetingSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countdownPerAttendee"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAttendee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<CreateStandupMeetingMutation, CreateStandupMeetingMutationVariables>;
export const StartStandupMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"StartStandupMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateStandupMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startStandupMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultStandupMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultStandupMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StandupMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"standupMeetingSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countdownPerAttendee"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAttendee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<StartStandupMeetingMutation, StartStandupMeetingMutationVariables>;
export const ChangeCurrentAttendeeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangeCurrentAttendee"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateStandupMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeCurrentAttendee"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"attendeeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultStandupMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultStandupMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StandupMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"standupMeetingSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countdownPerAttendee"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAttendee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<ChangeCurrentAttendeeMutation, ChangeCurrentAttendeeMutationVariables>;
export const FinishStandupMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FinishStandupMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateStandupMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finishStandupMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultStandupMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultStandupMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StandupMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"standupMeetingSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countdownPerAttendee"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAttendee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<FinishStandupMeetingMutation, FinishStandupMeetingMutationVariables>;
export const StandupMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"StandupMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"standupMeeting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultStandupMeeting"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultStandupMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StandupMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"standupMeetingSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countdownPerAttendee"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAttendee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<StandupMeetingSubscription, StandupMeetingSubscriptionVariables>;
export const UserInProjectQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserInProjectQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInProject"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInProject"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserInProject"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gamifiedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projectPrivileges"}}]}}]}}]} as unknown as DocumentNode<UserInProjectQueryQuery, UserInProjectQueryQueryVariables>;
export const AllUsersInProjectQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllUsersInProjectQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInProject"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInProject"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserInProject"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gamifiedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projectPrivileges"}}]}}]}}]} as unknown as DocumentNode<AllUsersInProjectQueryQuery, AllUsersInProjectQueryQueryVariables>;
export const JoinProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"JoinProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"joinProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInProject"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInProject"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserInProject"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gamifiedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projectPrivileges"}}]}}]}}]} as unknown as DocumentNode<JoinProjectMutation, JoinProjectMutationVariables>;