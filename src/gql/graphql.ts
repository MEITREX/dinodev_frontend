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
  icon?: Maybe<Icon>;
  identifier: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type AchievementProgress = {
  __typename?: 'AchievementProgress';
  achieved: Scalars['Boolean']['output'];
  achievement: Achievement;
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
  visibleToUserIds?: InputMaybe<Array<Scalars['UUID']['input']>>;
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

/**
 * 
 * Input object to create a new sprint.
 */
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
  children: Array<DefaultEvent>;
  eventData: Array<DefaultTemplateField>;
  eventType: DefaultEventType;
  field?: Maybe<TemplateField>;
  id: Scalars['UUID']['output'];
  message: Scalars['String']['output'];
  mostRecentChildTimestamp: Scalars['DateTime']['output'];
  parent?: Maybe<DefaultEvent>;
  projectId?: Maybe<Scalars['UUID']['output']>;
  reactions: Array<Reaction>;
  timestamp: Scalars['DateTime']['output'];
  user?: Maybe<GlobalUser>;
  userId?: Maybe<Scalars['UUID']['output']>;
  visibility: EventVisibility;
  visibleToUserIds: Array<Scalars['UUID']['output']>;
  xpForCurrentUser?: Maybe<Scalars['Int']['output']>;
};


export type DefaultEventFieldArgs = {
  name: Scalars['String']['input'];
};

export type DefaultEventType = EventType & {
  __typename?: 'DefaultEventType';
  defaultVisibility: EventVisibility;
  description?: Maybe<Scalars['String']['output']>;
  eventSchema: DefaultSchemaDefinition;
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
  fields: Array<DefaultFieldSchemaDefinition>;
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
  field?: Maybe<TemplateField>;
  id: Scalars['UUID']['output'];
  message: Scalars['String']['output'];
  mostRecentChildTimestamp: Scalars['DateTime']['output'];
  parent?: Maybe<Event>;
  projectId?: Maybe<Scalars['UUID']['output']>;
  reactions: Array<Reaction>;
  timestamp: Scalars['DateTime']['output'];
  user?: Maybe<GlobalUser>;
  userId?: Maybe<Scalars['UUID']['output']>;
  visibility: EventVisibility;
  visibleToUserIds: Array<Scalars['UUID']['output']>;
  xpForCurrentUser?: Maybe<Scalars['Int']['output']>;
};


export type EventFieldArgs = {
  name: Scalars['String']['input'];
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
  emoji?: Maybe<Scalars['String']['output']>;
  knownIcon?: Maybe<KnownIcon>;
  mdiIcon?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type IconInput = {
  emoji?: InputMaybe<Scalars['String']['input']>;
  knownIcon?: InputMaybe<KnownIcon>;
  mdiIcon?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ImsSettings = {
  __typename?: 'ImsSettings';
  effortEstimationFieldName: Scalars['String']['output'];
  imsIcon?: Maybe<Icon>;
  imsIssueTemplateId: Scalars['ID']['output'];
  imsName: Scalars['String']['output'];
  imsProjectId: Scalars['ID']['output'];
  imsProjectUrl: Scalars['String']['output'];
  issuePriorities: Array<IssuePriorityConfiguration>;
  issueStates: Array<IssueState>;
  issueTypes: Array<IssueTypeConfiguration>;
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
  issueTypes: Array<IssueTypeInput>;
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
  commentOnIssue: Issue;
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


export type IssueMutationCommentOnIssueArgs = {
  comment: Scalars['String']['input'];
  optionalParentId?: InputMaybe<Scalars['String']['input']>;
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
  /** Identifier for the issue type in an issue management system. */
  imsTypeId: Scalars['ID']['output'];
  /** Name of the issue type. */
  name: Scalars['String']['output'];
};

export type IssueTypeConfiguration = {
  __typename?: 'IssueTypeConfiguration';
  imsTypeId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type IssueTypeInput = {
  imsTypeId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export enum KnownAsset {
  Bushes_1 = 'BUSHES_1',
  Bushes_2 = 'BUSHES_2',
  Bushes_3 = 'BUSHES_3',
  Cave = 'CAVE',
  Cave_2 = 'CAVE_2',
  FeedingTrough = 'FEEDING_TROUGH',
  Flowers = 'FLOWERS',
  Fountain = 'FOUNTAIN',
  Rock_1 = 'ROCK_1',
  Rock_2 = 'ROCK_2',
  Trees = 'TREES',
  TreeWithRocks = 'TREE_WITH_ROCKS',
  WaterPuddle = 'WATER_PUDDLE'
}

export enum KnownIcon {
  Gropius = 'GROPIUS'
}

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

export type PlaceAssetInput = {
  asset: KnownAsset;
  x: Scalars['Int']['input'];
  y: Scalars['Int']['input'];
};

export type PlacedAsset = {
  __typename?: 'PlacedAsset';
  asset: KnownAsset;
  id: Scalars['UUID']['output'];
  placedBy: UserInProject;
  placedByUserId: Scalars['UUID']['output'];
  x: Scalars['Int']['output'];
  y: Scalars['Int']['output'];
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
  buyAndPlace: PlacedAsset;
  cancelMeeting: Meeting;
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
  postComment: Event;
  project: Project;
  promoteToMeetingLeader: Meeting;
  reactToEvent: Event;
  resetAchievements: Scalars['Boolean']['output'];
  resetUserStats: Scalars['Boolean']['output'];
  updateRole: ProjectRole;
  updateSprint: Sprint;
};


export type ProjectMutationBuyAndPlaceArgs = {
  input: PlaceAssetInput;
};


export type ProjectMutationCancelMeetingArgs = {
  type: MeetingType;
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


export type ProjectMutationPostCommentArgs = {
  comment: Scalars['String']['input'];
  optionalParentEventId?: InputMaybe<Scalars['UUID']['input']>;
};


export type ProjectMutationPromoteToMeetingLeaderArgs = {
  type: MeetingType;
  userId: Scalars['UUID']['input'];
};


export type ProjectMutationReactToEventArgs = {
  eventId: Scalars['UUID']['input'];
  reaction?: Scalars['String']['input'];
};


export type ProjectMutationUpdateRoleArgs = {
  input: UpdateProjectRoleInput;
  name: Scalars['String']['input'];
};


export type ProjectMutationUpdateSprintArgs = {
  input: UpdateSprintInput;
  number: Scalars['Int']['input'];
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
  /**  shop */
  shopItems: Array<ShopItem>;
};


export type QueryEventTypeArgs = {
  id: Scalars['String']['input'];
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

export type Reaction = {
  __typename?: 'Reaction';
  reaction: Scalars['String']['output'];
  user?: Maybe<GlobalUser>;
  userId: Scalars['UUID']['output'];
};

export type RepositoryDefinition = {
  __typename?: 'RepositoryDefinition';
  icon?: Maybe<Icon>;
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type RepositoryDefinitionInput = {
  icon: IconInput;
  name: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type RetrospectiveActivity = {
  __typename?: 'RetrospectiveActivity';
  columns: Array<RetrospectiveColumn>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
};

export type RetrospectiveActivityInput = {
  columns: Array<RetrospectiveColumnInput>;
  name: Scalars['String']['input'];
};

export type RetrospectiveColumn = {
  __typename?: 'RetrospectiveColumn';
  comments: Array<RetrospectiveComment>;
  description: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  title: Scalars['String']['output'];
};

export type RetrospectiveColumnInput = {
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type RetrospectiveComment = {
  __typename?: 'RetrospectiveComment';
  authorId: Scalars['UUID']['output'];
  content: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  thumbsUpBy: Array<Scalars['UUID']['output']>;
};

export type RetrospectiveMeeting = Meeting & {
  __typename?: 'RetrospectiveMeeting';
  active: Scalars['Boolean']['output'];
  activities: Array<RetrospectiveActivity>;
  attendees: Array<MeetingAttendee>;
  baseRewards: Array<KnownAsset>;
  bronzeMedalPoints?: Maybe<Scalars['Float']['output']>;
  bronzeMedalUser?: Maybe<GlobalUser>;
  bronzeMedalUserId?: Maybe<Scalars['UUID']['output']>;
  currentPage: RetrospectiveMeetingPage;
  goldChallengeReward?: Maybe<Animal>;
  goldMedalPoints?: Maybe<Scalars['Float']['output']>;
  goldMedalUser?: Maybe<GlobalUser>;
  goldMedalUserId?: Maybe<Scalars['UUID']['output']>;
  /**  inherited from Meeting: */
  meetingType: MeetingType;
  projectId: Scalars['UUID']['output'];
  silverMedalPoints?: Maybe<Scalars['Float']['output']>;
  silverMedalUser?: Maybe<GlobalUser>;
  silverMedalUserId?: Maybe<Scalars['UUID']['output']>;
  streakRewards: Array<KnownAsset>;
  successRewards: Array<KnownAsset>;
};

export type RetrospectiveMeetingInput = {
  activities: Array<RetrospectiveActivityInput>;
  meetingLeaderId: Scalars['UUID']['input'];
};

export type RetrospectiveMeetingMutation = {
  __typename?: 'RetrospectiveMeetingMutation';
  addComment: RetrospectiveMeeting;
  awardMedals: RetrospectiveMeeting;
  deleteComment: RetrospectiveMeeting;
  editComment: RetrospectiveMeeting;
  finishMeeting: RetrospectiveMeeting;
  project: Project;
  thumbsUpComment: RetrospectiveMeeting;
  updatePage: RetrospectiveMeeting;
};


export type RetrospectiveMeetingMutationAddCommentArgs = {
  columnId: Scalars['UUID']['input'];
  content: Scalars['String']['input'];
};


export type RetrospectiveMeetingMutationDeleteCommentArgs = {
  commentId: Scalars['UUID']['input'];
};


export type RetrospectiveMeetingMutationEditCommentArgs = {
  commentId: Scalars['UUID']['input'];
  content: Scalars['String']['input'];
};


export type RetrospectiveMeetingMutationThumbsUpCommentArgs = {
  commentId: Scalars['UUID']['input'];
};


export type RetrospectiveMeetingMutationUpdatePageArgs = {
  page: RetrospectiveMeetingPage;
};

export enum RetrospectiveMeetingPage {
  Games = 'GAMES',
  Information = 'INFORMATION',
  MedalCeremony = 'MEDAL_CEREMONY',
  SprintResult = 'SPRINT_RESULT'
}

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
  id: Scalars['UUID']['output'];
  image: KnownAsset;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
};

/** Specifies the sort direction, either ascending or descending. */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/**
 * 
 * Represents a sprint in a project.
 */
export type Sprint = {
  __typename?: 'Sprint';
  /**
   * 
   * The animal that represents this sprint.
   */
  animal?: Maybe<Animal>;
  /**
   * 
   * Custom reward for achieving the gold challenge.
   */
  customGoldChallengeReward?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['UUID']['output'];
  /**
   * 
   * Issues that are part of this sprint.
   */
  issues: Array<Issue>;
  /**
   * 
   * The name of the sprint.
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * 
   * The number of the sprint. Starts with 1 and is incremented by 1 for each new sprint.
   */
  number: Scalars['Int']['output'];
  /**
   * 
   * Places assets in the animal enclosure.
   */
  placedAssets: Array<PlacedAsset>;
  /**
   * 
   * The project this sprint belongs to.
   */
  project: Project;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  /**
   * 
   * Stats for this sprint.
   */
  stats: SprintStats;
  /**
   * 
   * The number of story points that are planned for this sprint.
   * This is null for sprints that have been created before using DinoDev.
   */
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

/**
 * 
 * Stats for a sprint.
 */
export type SprintStats = {
  __typename?: 'SprintStats';
  Sprint: Sprint;
  /**
   * 
   * The average number of story points per issue.
   */
  averageStoryPoints: Scalars['Float']['output'];
  /**
   * 
   * Array where each element represents the number of story points left to complete
   * on the corresponding day of the sprint.
   * This can be used to create a burn down chart.
   * This is null if the sprint was not created using DinoDev.
   */
  burnDown?: Maybe<Array<Scalars['Int']['output']>>;
  /**
   * 
   * The number of days that have elapsed in this sprint.
   */
  daysElapsed: Scalars['Int']['output'];
  /**
   * 
   * The number of days left in this sprint.
   */
  daysLeft: Scalars['Int']['output'];
  /**
   * 
   * The number of issues in this sprint.
   */
  issueCount: Scalars['Int']['output'];
  /**
   * 
   * The percentage of story points that have been completed.
   */
  percentageStoryPointsCompleted: Scalars['Float']['output'];
  /**
   * 
   * The percentage of story points that are in progress.
   */
  percentageStoryPointsInProgress: Scalars['Float']['output'];
  /**
   * 
   * The percentage of story points that have not been started.
   */
  percentageStoryPointsNotStarted: Scalars['Float']['output'];
  /**
   * 
   * The percentage of time that has elapsed in this sprint.
   */
  percentageTimeElapsed: Scalars['Float']['output'];
  /**
   * 
   * Array where each element represents the number of story points that have been completed
   * on the corresponding day of the sprint.
   */
  storyPointsByDay: Array<Scalars['Int']['output']>;
  /**
   * 
   * The sprint streak is the number of consecutive sprints that have been successfully completed.
   */
  streak: Scalars['Int']['output'];
  /**
   * 
   * The success state of the sprint.
   */
  successState: SprintSuccessState;
  /**
   * 
   * The number of story points that have been completed.
   */
  totalStoryPoints: Scalars['Int']['output'];
  /**
   * 
   * Stats for each user in this sprint.
   */
  userStats: Array<SprintUserStats>;
  /**
   * 
   * Stats for a specific user in this sprint.
   */
  userStatsByUserId: SprintUserStats;
};


/**
 * 
 * Stats for a sprint.
 */
export type SprintStatsUserStatsByUserIdArgs = {
  userId: Scalars['UUID']['input'];
};

/**
 * 
 * A sprint can have different success states:
 * - IN_PROGRESS: The sprint is currently in progress
 * - UNKNOWN: The success state is unknown
 * - FAILED: The sprint has failed, i.e. not all story points have been completed
 * - SUCCESS: The sprint has been successfully completed
 * - SUCCESS_WITH_GOLD_CHALLENGE: The sprint has been successfully completed and the gold challenge has been achieved
 */
export enum SprintSuccessState {
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Success = 'SUCCESS',
  SuccessWithGoldChallenge = 'SUCCESS_WITH_GOLD_CHALLENGE',
  Unknown = 'UNKNOWN'
}

/**
 * 
 * Stats for a user in a sprint.
 */
export type SprintUserStats = {
  __typename?: 'SprintUserStats';
  /**
   * 
   * The number of story points that have been completed by this user.
   */
  storyPointsCompleted: Scalars['Float']['output'];
  userId: Scalars['UUID']['output'];
};

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
  event: Event;
  meeting?: Maybe<Meeting>;
  planningMeeting?: Maybe<PlanningMeeting>;
  retrospectiveMeeting: RetrospectiveMeeting;
  standupMeeting: StandupMeeting;
};


export type SubscriptionEventArgs = {
  projectId: Scalars['UUID']['input'];
  userId: Scalars['UUID']['input'];
};


export type SubscriptionMeetingArgs = {
  meetingType: MeetingType;
  projectId: Scalars['UUID']['input'];
};


export type SubscriptionPlanningMeetingArgs = {
  projectId: Scalars['UUID']['input'];
};


export type SubscriptionRetrospectiveMeetingArgs = {
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

/**
 * 
 * Input object to update an existing sprint.
 */
export type UpdateSprintInput = {
  animal?: InputMaybe<Animal>;
  customGoldChallengeReward?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  storyPointsPlanned?: InputMaybe<Scalars['Int']['input']>;
};

export type UserInProject = ProjectDependent & {
  __typename?: 'UserInProject';
  achievements: Array<AchievementProgress>;
  currentBadge?: Maybe<Icon>;
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
  bronzeMedals: Scalars['Int']['output'];
  commentsWritten: Scalars['Int']['output'];
  goldMedals: Scalars['Int']['output'];
  issuesCompleted: Scalars['Int']['output'];
  issuesCreated: Scalars['Int']['output'];
  level: Scalars['Int']['output'];
  pullRequestsClosed: Scalars['Int']['output'];
  pullRequestsCreated: Scalars['Int']['output'];
  pullRequestsReviewed: Scalars['Int']['output'];
  reactionsGiven: Scalars['Int']['output'];
  silverMedals: Scalars['Int']['output'];
  totalXp: Scalars['Int']['output'];
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


export type EventsOfProjectQuery = { __typename?: 'Query', project?: { __typename?: 'Project', id: any, events: Array<(
      { __typename?: 'DefaultEvent' }
      & { ' $fragmentRefs'?: { 'EventWithChildrenFragment': EventWithChildrenFragment } }
    )> } | null };

export type EventsOfUserQueryVariables = Exact<{
  userId: Scalars['UUID']['input'];
  projectId: Scalars['UUID']['input'];
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
}>;


export type EventsOfUserQuery = { __typename?: 'Query', globalUser?: { __typename?: 'GlobalUser', userInProject?: { __typename?: 'UserInProject', publicEvents: Array<(
        { __typename?: 'DefaultEvent' }
        & { ' $fragmentRefs'?: { 'EventWithChildrenFragment': EventWithChildrenFragment } }
      )> } | null } | null };

export type LikeEventMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  eventId: Scalars['UUID']['input'];
}>;


export type LikeEventMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', reactToEvent: (
      { __typename?: 'DefaultEvent' }
      & { ' $fragmentRefs'?: { 'BaseEventFragment': BaseEventFragment } }
    ) } };

export type AddUserCommentMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  optionalParentId?: InputMaybe<Scalars['UUID']['input']>;
  message: Scalars['String']['input'];
}>;


export type AddUserCommentMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', postComment: (
      { __typename?: 'DefaultEvent' }
      & { ' $fragmentRefs'?: { 'BaseEventFragment': BaseEventFragment } }
    ) } };

export type NewEventSubscriptionVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  userId: Scalars['UUID']['input'];
}>;


export type NewEventSubscription = { __typename?: 'Subscription', event: (
    { __typename?: 'DefaultEvent' }
    & { ' $fragmentRefs'?: { 'ReducedEventFragment': ReducedEventFragment } }
  ) };

export type ReducedEventFragment = { __typename?: 'DefaultEvent', id: any, timestamp: any, message: string, user?: { __typename?: 'GlobalUser', id: any, username: string, avatar?: string | null } | null, eventType: { __typename?: 'DefaultEventType', identifier: string }, parent?: { __typename?: 'DefaultEvent', userId?: any | null, message: string } | null, issueId?: { __typename?: 'DefaultTemplateField', value?: string | null } | null, issueTitle?: { __typename?: 'DefaultTemplateField', value?: string | null } | null, repositoryName?: { __typename?: 'DefaultTemplateField', value?: string | null } | null, repositoryUrl?: { __typename?: 'DefaultTemplateField', value?: string | null } | null } & { ' $fragmentName'?: 'ReducedEventFragment' };

export type BaseEventFragment = { __typename?: 'DefaultEvent', id: any, timestamp: any, message: string, xpForCurrentUser?: number | null, user?: { __typename?: 'GlobalUser', id: any, username: string, avatar?: string | null } | null, eventType: { __typename?: 'DefaultEventType', identifier: string }, eventData: Array<{ __typename?: 'DefaultTemplateField', key: string, value?: string | null }>, issueId?: { __typename?: 'DefaultTemplateField', value?: string | null } | null, issueTitle?: { __typename?: 'DefaultTemplateField', value?: string | null } | null, repositoryName?: { __typename?: 'DefaultTemplateField', value?: string | null } | null, repositoryUrl?: { __typename?: 'DefaultTemplateField', value?: string | null } | null, reactions: Array<{ __typename?: 'Reaction', userId: any }> } & { ' $fragmentName'?: 'BaseEventFragment' };

export type EventWithChildrenFragment = (
  { __typename?: 'DefaultEvent', children: Array<(
    { __typename?: 'DefaultEvent' }
    & { ' $fragmentRefs'?: { 'BaseEventFragment': BaseEventFragment } }
  )> }
  & { ' $fragmentRefs'?: { 'BaseEventFragment': BaseEventFragment } }
) & { ' $fragmentName'?: 'EventWithChildrenFragment' };

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

export type ProjectBoardFragment = { __typename?: 'ProjectBoard', states: Array<{ __typename?: 'IssueStateInBoard', state: { __typename?: 'IssueState', name: string, type: IssueStateType, imsStateId: string }, issues: Array<{ __typename?: 'Issue', id: string, title: string, issueUrl: string, description?: string | null, labels: Array<string>, storyPoints?: number | null, effortEstimation?: TShirtSizeEstimation | null, priority: IssuePriority, sprintNumber?: number | null, type: { __typename?: 'IssueType', iconPath?: string | null, name: string }, assignees: Array<{ __typename?: 'UserInProject', user: { __typename?: 'GlobalUser', id: any, avatar?: string | null, username: string } } | null> }> }> } & { ' $fragmentName'?: 'ProjectBoardFragment' };

export type BoardQueryQueryVariables = Exact<{
  projectId: Scalars['UUID']['input'];
}>;


export type BoardQueryQuery = { __typename?: 'Query', project?: { __typename?: 'Project', id: any, projectBoard: (
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

export type CreateIssueMutationMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  input: CreateIssueInput;
}>;


export type CreateIssueMutationMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', createIssue: (
      { __typename?: 'Issue' }
      & { ' $fragmentRefs'?: { 'IssueBaseFragment': IssueBaseFragment } }
    ) } };

export type AssignIssueMutationMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  issueId: Scalars['ID']['input'];
  assigneeId: Scalars['UUID']['input'];
}>;


export type AssignIssueMutationMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', mutateIssue: { __typename?: 'IssueMutation', assignIssue: (
        { __typename?: 'Issue' }
        & { ' $fragmentRefs'?: { 'IssueBaseFragment': IssueBaseFragment } }
      ) } } };

export type CommentOnIssueMutationMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  issueId: Scalars['ID']['input'];
  message: Scalars['String']['input'];
  optionalParentId?: InputMaybe<Scalars['String']['input']>;
}>;


export type CommentOnIssueMutationMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', mutateIssue: { __typename?: 'IssueMutation', commentOnIssue: (
        { __typename?: 'Issue' }
        & { ' $fragmentRefs'?: { 'IssueBaseFragment': IssueBaseFragment } }
      ) } } };

export type IssueQueryQueryVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  issueId: Scalars['UUID']['input'];
}>;


export type IssueQueryQuery = { __typename?: 'Query', project?: { __typename?: 'Project', id: any, issue?: (
      { __typename?: 'Issue' }
      & { ' $fragmentRefs'?: { 'IssueWithEventsFragment': IssueWithEventsFragment } }
    ) | null } | null };

export type IssueBaseFragment = { __typename?: 'Issue', id: string, title: string, issueUrl: string, description?: string | null, storyPoints?: number | null, effortEstimation?: TShirtSizeEstimation | null, priority: IssuePriority, sprintNumber?: number | null, labels: Array<string>, type: { __typename?: 'IssueType', iconPath?: string | null, name: string }, assignees: Array<{ __typename?: 'UserInProject', user: { __typename?: 'GlobalUser', id: any, avatar?: string | null, username: string } } | null> } & { ' $fragmentName'?: 'IssueBaseFragment' };

export type IssueWithEventsFragment = (
  { __typename?: 'Issue', issueEvents: Array<(
    { __typename?: 'DefaultEvent' }
    & { ' $fragmentRefs'?: { 'EventWithChildrenFragment': EventWithChildrenFragment } }
  )> }
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

export type CancelMeetingMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  type: MeetingType;
}>;


export type CancelMeetingMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', cancelMeeting: (
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

export type ProjectMainFragment = { __typename?: 'Project', id: any, name: string, description?: string | null, currentSprintNumber?: number | null, projectSettings: { __typename?: 'ProjectSettings', imsSettings: { __typename?: 'ImsSettings', imsName: string, imsProjectUrl: string, imsIcon?: { __typename?: 'Icon', path?: string | null } | null, issueStates: Array<{ __typename?: 'IssueState', name: string, type: IssueStateType }>, issueTypes: Array<{ __typename?: 'IssueTypeConfiguration', name: string }> }, codeRepositorySettings: { __typename?: 'CodeRepositorySettings', repositories: Array<{ __typename?: 'RepositoryDefinition', name: string, url: string, icon?: { __typename?: 'Icon', mdiIcon?: string | null } | null }> }, definitionOfDone: Array<{ __typename?: 'DefinitionOfDoneItem', text: string, required: boolean, implies: Array<{ __typename?: 'DefinitionOfDoneItem', text: string, required: boolean, implies: Array<{ __typename?: 'DefinitionOfDoneItem', text: string, required: boolean }> }> }> } } & { ' $fragmentName'?: 'ProjectMainFragment' };

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

export type ChangeRetrospectiveMeetingPageMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  page: RetrospectiveMeetingPage;
}>;


export type ChangeRetrospectiveMeetingPageMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', mutateRetrospectiveMeeting: { __typename?: 'RetrospectiveMeetingMutation', updatePage: (
        { __typename?: 'RetrospectiveMeeting' }
        & { ' $fragmentRefs'?: { 'DefaultRetrospectiveMeetingFragment': DefaultRetrospectiveMeetingFragment } }
      ) } } };

export type AddCommentMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  columnId: Scalars['UUID']['input'];
  content: Scalars['String']['input'];
}>;


export type AddCommentMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', mutateRetrospectiveMeeting: { __typename?: 'RetrospectiveMeetingMutation', addComment: (
        { __typename?: 'RetrospectiveMeeting' }
        & { ' $fragmentRefs'?: { 'DefaultRetrospectiveMeetingFragment': DefaultRetrospectiveMeetingFragment } }
      ) } } };

export type EditCommentMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  commentId: Scalars['UUID']['input'];
  content: Scalars['String']['input'];
}>;


export type EditCommentMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', mutateRetrospectiveMeeting: { __typename?: 'RetrospectiveMeetingMutation', editComment: (
        { __typename?: 'RetrospectiveMeeting' }
        & { ' $fragmentRefs'?: { 'DefaultRetrospectiveMeetingFragment': DefaultRetrospectiveMeetingFragment } }
      ) } } };

export type DeleteCommentMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  commentId: Scalars['UUID']['input'];
}>;


export type DeleteCommentMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', mutateRetrospectiveMeeting: { __typename?: 'RetrospectiveMeetingMutation', deleteComment: (
        { __typename?: 'RetrospectiveMeeting' }
        & { ' $fragmentRefs'?: { 'DefaultRetrospectiveMeetingFragment': DefaultRetrospectiveMeetingFragment } }
      ) } } };

export type ThumbsUpCommentMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  commentId: Scalars['UUID']['input'];
}>;


export type ThumbsUpCommentMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', mutateRetrospectiveMeeting: { __typename?: 'RetrospectiveMeetingMutation', thumbsUpComment: (
        { __typename?: 'RetrospectiveMeeting' }
        & { ' $fragmentRefs'?: { 'DefaultRetrospectiveMeetingFragment': DefaultRetrospectiveMeetingFragment } }
      ) } } };

export type FinishRetroMeetingMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
}>;


export type FinishRetroMeetingMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', mutateRetrospectiveMeeting: { __typename?: 'RetrospectiveMeetingMutation', finishMeeting: (
        { __typename?: 'RetrospectiveMeeting' }
        & { ' $fragmentRefs'?: { 'DefaultRetrospectiveMeetingFragment': DefaultRetrospectiveMeetingFragment } }
      ) } } };

export type AwardMedalsMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
}>;


export type AwardMedalsMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', mutateRetrospectiveMeeting: { __typename?: 'RetrospectiveMeetingMutation', awardMedals: (
        { __typename?: 'RetrospectiveMeeting' }
        & { ' $fragmentRefs'?: { 'DefaultRetrospectiveMeetingFragment': DefaultRetrospectiveMeetingFragment } }
      ) } } };

export type CreateRetrospectiveMeetingMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  input: RetrospectiveMeetingInput;
}>;


export type CreateRetrospectiveMeetingMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', createRetrospectiveMeeting: (
      { __typename?: 'RetrospectiveMeeting' }
      & { ' $fragmentRefs'?: { 'DefaultRetrospectiveMeetingFragment': DefaultRetrospectiveMeetingFragment } }
    ) } };

export type RetrospectiveMeetingSubscriptionVariables = Exact<{
  projectId: Scalars['UUID']['input'];
}>;


export type RetrospectiveMeetingSubscription = { __typename?: 'Subscription', retrospectiveMeeting: (
    { __typename?: 'RetrospectiveMeeting' }
    & { ' $fragmentRefs'?: { 'DefaultRetrospectiveMeetingFragment': DefaultRetrospectiveMeetingFragment } }
  ) };

export type DefaultRetrospectiveMeetingFragment = (
  { __typename?: 'RetrospectiveMeeting', bronzeMedalPoints?: number | null, silverMedalPoints?: number | null, goldMedalPoints?: number | null, currentPage: RetrospectiveMeetingPage, goldChallengeReward?: Animal | null, bronzeMedalUser?: { __typename?: 'GlobalUser', id: any, username: string, avatar?: string | null } | null, silverMedalUser?: { __typename?: 'GlobalUser', id: any, username: string, avatar?: string | null } | null, goldMedalUser?: { __typename?: 'GlobalUser', id: any, username: string, avatar?: string | null } | null, activities: Array<{ __typename?: 'RetrospectiveActivity', columns: Array<{ __typename?: 'RetrospectiveColumn', id: any, title: string, description: string, comments: Array<{ __typename?: 'RetrospectiveComment', id: any, content: string, authorId: any, thumbsUpBy: Array<any> }> }> }> }
  & { ' $fragmentRefs'?: { 'DefaultMeeting_RetrospectiveMeeting_Fragment': DefaultMeeting_RetrospectiveMeeting_Fragment } }
) & { ' $fragmentName'?: 'DefaultRetrospectiveMeetingFragment' };

export type ShopQueryVariables = Exact<{ [key: string]: never; }>;


export type ShopQuery = { __typename?: 'Query', shopItems: Array<(
    { __typename?: 'ShopItem' }
    & { ' $fragmentRefs'?: { 'ShopItemFragment': ShopItemFragment } }
  )> };

export type BuyAndPlaceMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  input: PlaceAssetInput;
}>;


export type BuyAndPlaceMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', buyAndPlace: { __typename?: 'PlacedAsset', id: any } } };

export type ShopItemFragment = { __typename?: 'ShopItem', id: any, name: string, image: KnownAsset, price: number } & { ' $fragmentName'?: 'ShopItemFragment' };

export type SprintQueryVariables = Exact<{
  projectId: Scalars['UUID']['input'];
}>;


export type SprintQuery = { __typename?: 'Query', project?: { __typename?: 'Project', id: any, currentSprint?: (
      { __typename?: 'Sprint' }
      & { ' $fragmentRefs'?: { 'DefaultSprintFragment': DefaultSprintFragment } }
    ) | null } | null };

export type PreviousSprintQueryVariables = Exact<{
  projectId: Scalars['UUID']['input'];
}>;


export type PreviousSprintQuery = { __typename?: 'Query', project?: { __typename?: 'Project', id: any, previousSprint?: (
      { __typename?: 'Sprint' }
      & { ' $fragmentRefs'?: { 'DefaultSprintFragment': DefaultSprintFragment } }
    ) | null } | null };

export type SprintsQueryVariables = Exact<{
  projectId: Scalars['UUID']['input'];
}>;


export type SprintsQuery = { __typename?: 'Query', project?: { __typename?: 'Project', id: any, sprints: Array<(
      { __typename?: 'Sprint' }
      & { ' $fragmentRefs'?: { 'DefaultSprintFragment': DefaultSprintFragment } }
    )> } | null };

export type DefaultSprintFragment = { __typename?: 'Sprint', id: any, startDate?: any | null, endDate?: any | null, storyPointsPlanned?: number | null, name?: string | null, animal?: Animal | null, number: number, stats: { __typename?: 'SprintStats', totalStoryPoints: number, percentageStoryPointsCompleted: number, percentageStoryPointsInProgress: number, percentageTimeElapsed: number, daysLeft: number, averageStoryPoints: number, successState: SprintSuccessState, burnDown?: Array<number> | null, streak: number }, placedAssets: Array<{ __typename?: 'PlacedAsset', asset: KnownAsset, x: number, y: number }> } & { ' $fragmentName'?: 'DefaultSprintFragment' };

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

export type UserStatsFragment = { __typename?: 'UserStats', xp: number, level: number, xpToNextLevel: number, totalXp: number, bronzeMedals: number, silverMedals: number, goldMedals: number, virtualCurrency: number, commentsWritten: number, issuesCompleted: number, issuesCreated: number, pullRequestsClosed: number, pullRequestsCreated: number, pullRequestsReviewed: number, reactionsGiven: number } & { ' $fragmentName'?: 'UserStatsFragment' };

export type UserInProjectFragment = { __typename?: 'UserInProject', user: { __typename?: 'GlobalUser', id: any, username: string, avatar?: string | null }, roles: Array<{ __typename?: 'ProjectRole', gamifiedName: string, name: string, projectPrivileges: Array<ProjectPrivilege> }>, achievements: Array<{ __typename?: 'AchievementProgress', progress: number, achieved: boolean, achievement: { __typename?: 'Achievement', name: string, description: string, goal: number, icon?: { __typename?: 'Icon', emoji?: string | null } | null } }>, userStats: { __typename?: 'UserStats', level: number, goldMedals: number, silverMedals: number, bronzeMedals: number }, currentBadge?: { __typename?: 'Icon', emoji?: string | null } | null } & { ' $fragmentName'?: 'UserInProjectFragment' };

export type UserInProjectQueryQueryVariables = Exact<{
  projectId: Scalars['UUID']['input'];
}>;


export type UserInProjectQueryQuery = { __typename?: 'Query', project?: { __typename?: 'Project', id: any, currentUser?: (
      { __typename?: 'UserInProject' }
      & { ' $fragmentRefs'?: { 'UserInProjectFragment': UserInProjectFragment } }
    ) | null } | null };

export type UserStatsQueryQueryVariables = Exact<{
  projectId: Scalars['UUID']['input'];
}>;


export type UserStatsQueryQuery = { __typename?: 'Query', project?: { __typename?: 'Project', id: any, currentUser?: { __typename?: 'UserInProject', userStats: (
        { __typename?: 'UserStats' }
        & { ' $fragmentRefs'?: { 'UserStatsFragment': UserStatsFragment } }
      ) } | null } | null };

export type AllUsersInProjectQueryQueryVariables = Exact<{
  projectId: Scalars['UUID']['input'];
}>;


export type AllUsersInProjectQueryQuery = { __typename?: 'Query', project?: { __typename?: 'Project', id: any, users: Array<(
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

export const ReducedEventFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReducedEvent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DefaultEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identifier"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"issueId"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"issueId","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"issueTitle"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"issueTitle","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"repositoryName"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"repositoryName","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"repositoryUrl"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"repositoryUrl","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<ReducedEventFragment, unknown>;
export const BaseGlobalUserFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseGlobalUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GlobalUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"globalPrivileges"}}]}}]}}]} as unknown as DocumentNode<BaseGlobalUserFragment, unknown>;
export const BasicUserInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BasicUserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BasicUserInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]} as unknown as DocumentNode<BasicUserInfoFragment, unknown>;
export const ProjectBoardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectBoard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectBoard"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"states"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"state"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"imsStateId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"issues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"issueUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"labels"}},{"kind":"Field","name":{"kind":"Name","value":"storyPoints"}},{"kind":"Field","name":{"kind":"Name","value":"effortEstimation"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"sprintNumber"}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iconPath"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProjectBoardFragment, unknown>;
export const IssueBaseFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssueBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Issue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"issueUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"storyPoints"}},{"kind":"Field","name":{"kind":"Name","value":"effortEstimation"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"sprintNumber"}},{"kind":"Field","name":{"kind":"Name","value":"labels"}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iconPath"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<IssueBaseFragment, unknown>;
export const BaseEventFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseEvent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DefaultEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identifier"}}]}},{"kind":"Field","name":{"kind":"Name","value":"eventData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"issueId"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"issueId","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"issueTitle"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"issueTitle","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"repositoryName"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"repositoryName","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"repositoryUrl"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"repositoryUrl","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"xpForCurrentUser"}}]}}]} as unknown as DocumentNode<BaseEventFragment, unknown>;
export const EventWithChildrenFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EventWithChildren"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DefaultEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseEvent"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseEvent"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseEvent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DefaultEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identifier"}}]}},{"kind":"Field","name":{"kind":"Name","value":"eventData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"issueId"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"issueId","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"issueTitle"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"issueTitle","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"repositoryName"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"repositoryName","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"repositoryUrl"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"repositoryUrl","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"xpForCurrentUser"}}]}}]} as unknown as DocumentNode<EventWithChildrenFragment, unknown>;
export const IssueWithEventsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssueWithEvents"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Issue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssueBase"}},{"kind":"Field","name":{"kind":"Name","value":"issueEvents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EventWithChildren"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseEvent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DefaultEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identifier"}}]}},{"kind":"Field","name":{"kind":"Name","value":"eventData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"issueId"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"issueId","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"issueTitle"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"issueTitle","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"repositoryName"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"repositoryName","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"repositoryUrl"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"repositoryUrl","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"xpForCurrentUser"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssueBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Issue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"issueUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"storyPoints"}},{"kind":"Field","name":{"kind":"Name","value":"effortEstimation"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"sprintNumber"}},{"kind":"Field","name":{"kind":"Name","value":"labels"}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iconPath"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EventWithChildren"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DefaultEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseEvent"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseEvent"}}]}}]}}]} as unknown as DocumentNode<IssueWithEventsFragment, unknown>;
export const DefaultMeetingFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<DefaultMeetingFragment, unknown>;
export const DefaultPlanningMeetingFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultPlanningMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlanningMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"animalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableAnimals"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"animalVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nameVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableNames"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"nameVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueEstimation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"countdownSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"estimationStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"median"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"finalResult"}},{"kind":"Field","name":{"kind":"Name","value":"issueId"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sprintGoalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"nonSprintIssueIds"}},{"kind":"Field","name":{"kind":"Name","value":"sprintIssueIds"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<DefaultPlanningMeetingFragment, unknown>;
export const ProjectMainFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectMain"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"currentSprintNumber"}},{"kind":"Field","name":{"kind":"Name","value":"projectSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imsSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imsName"}},{"kind":"Field","name":{"kind":"Name","value":"imsIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imsProjectUrl"}},{"kind":"Field","name":{"kind":"Name","value":"issueStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"codeRepositorySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repositories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mdiIcon"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"definitionOfDone"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","name":{"kind":"Name","value":"implies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","name":{"kind":"Name","value":"implies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProjectMainFragment, unknown>;
export const ProjectBaseFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectPrivileges"}}]}}]}}]}}]} as unknown as DocumentNode<ProjectBaseFragment, unknown>;
export const DefaultRetrospectiveMeetingFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RetrospectiveMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"goldChallengeReward"}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"columns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"thumbsUpBy"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<DefaultRetrospectiveMeetingFragment, unknown>;
export const ShopItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShopItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShopItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]} as unknown as DocumentNode<ShopItemFragment, unknown>;
export const DefaultSprintFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultSprint"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Sprint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"storyPointsPlanned"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalStoryPoints"}},{"kind":"Field","name":{"kind":"Name","value":"percentageStoryPointsCompleted"}},{"kind":"Field","name":{"kind":"Name","value":"percentageStoryPointsInProgress"}},{"kind":"Field","name":{"kind":"Name","value":"percentageTimeElapsed"}},{"kind":"Field","name":{"kind":"Name","value":"daysLeft"}},{"kind":"Field","name":{"kind":"Name","value":"averageStoryPoints"}},{"kind":"Field","name":{"kind":"Name","value":"successState"}},{"kind":"Field","name":{"kind":"Name","value":"burnDown"}},{"kind":"Field","name":{"kind":"Name","value":"streak"}}]}},{"kind":"Field","name":{"kind":"Name","value":"placedAssets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"}},{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"animal"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}}]} as unknown as DocumentNode<DefaultSprintFragment, unknown>;
export const DefaultStandupMeetingFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultStandupMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StandupMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"standupMeetingSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countdownPerAttendee"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAttendee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<DefaultStandupMeetingFragment, unknown>;
export const UserStatsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserStats"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserStats"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"xp"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"xpToNextLevel"}},{"kind":"Field","name":{"kind":"Name","value":"totalXp"}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedals"}},{"kind":"Field","name":{"kind":"Name","value":"silverMedals"}},{"kind":"Field","name":{"kind":"Name","value":"goldMedals"}},{"kind":"Field","name":{"kind":"Name","value":"virtualCurrency"}},{"kind":"Field","name":{"kind":"Name","value":"commentsWritten"}},{"kind":"Field","name":{"kind":"Name","value":"issuesCompleted"}},{"kind":"Field","name":{"kind":"Name","value":"issuesCreated"}},{"kind":"Field","name":{"kind":"Name","value":"pullRequestsClosed"}},{"kind":"Field","name":{"kind":"Name","value":"pullRequestsCreated"}},{"kind":"Field","name":{"kind":"Name","value":"pullRequestsReviewed"}},{"kind":"Field","name":{"kind":"Name","value":"reactionsGiven"}}]}}]} as unknown as DocumentNode<UserStatsFragment, unknown>;
export const UserInProjectFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInProject"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserInProject"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gamifiedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projectPrivileges"}}]}},{"kind":"Field","name":{"kind":"Name","value":"achievements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"achievement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"goal"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emoji"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"progress"}},{"kind":"Field","name":{"kind":"Name","value":"achieved"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"goldMedals"}},{"kind":"Field","name":{"kind":"Name","value":"silverMedals"}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedals"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentBadge"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emoji"}}]}}]}}]} as unknown as DocumentNode<UserInProjectFragment, unknown>;
export const EventsOfProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EventsOfProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"events"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"size"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EventWithChildren"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseEvent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DefaultEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identifier"}}]}},{"kind":"Field","name":{"kind":"Name","value":"eventData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"issueId"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"issueId","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"issueTitle"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"issueTitle","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"repositoryName"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"repositoryName","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"repositoryUrl"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"repositoryUrl","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"xpForCurrentUser"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EventWithChildren"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DefaultEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseEvent"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseEvent"}}]}}]}}]} as unknown as DocumentNode<EventsOfProjectQuery, EventsOfProjectQueryVariables>;
export const EventsOfUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EventsOfUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"globalUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userInProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicEvents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"size"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EventWithChildren"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseEvent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DefaultEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identifier"}}]}},{"kind":"Field","name":{"kind":"Name","value":"eventData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"issueId"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"issueId","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"issueTitle"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"issueTitle","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"repositoryName"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"repositoryName","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"repositoryUrl"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"repositoryUrl","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"xpForCurrentUser"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EventWithChildren"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DefaultEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseEvent"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseEvent"}}]}}]}}]} as unknown as DocumentNode<EventsOfUserQuery, EventsOfUserQueryVariables>;
export const LikeEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LikeEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reactToEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"eventId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseEvent"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseEvent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DefaultEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identifier"}}]}},{"kind":"Field","name":{"kind":"Name","value":"eventData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"issueId"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"issueId","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"issueTitle"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"issueTitle","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"repositoryName"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"repositoryName","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"repositoryUrl"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"repositoryUrl","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"xpForCurrentUser"}}]}}]} as unknown as DocumentNode<LikeEventMutation, LikeEventMutationVariables>;
export const AddUserCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddUserComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"optionalParentId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"message"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"optionalParentEventId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"optionalParentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"comment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"message"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseEvent"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseEvent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DefaultEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identifier"}}]}},{"kind":"Field","name":{"kind":"Name","value":"eventData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"issueId"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"issueId","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"issueTitle"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"issueTitle","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"repositoryName"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"repositoryName","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"repositoryUrl"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"repositoryUrl","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"xpForCurrentUser"}}]}}]} as unknown as DocumentNode<AddUserCommentMutation, AddUserCommentMutationVariables>;
export const NewEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"NewEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReducedEvent"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReducedEvent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DefaultEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identifier"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"issueId"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"issueId","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"issueTitle"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"issueTitle","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"repositoryName"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"repositoryName","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"repositoryUrl"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"repositoryUrl","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<NewEventSubscription, NewEventSubscriptionVariables>;
export const CurrentUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseGlobalUser"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseGlobalUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GlobalUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"globalPrivileges"}}]}}]}}]} as unknown as DocumentNode<CurrentUserQuery, CurrentUserQueryVariables>;
export const CurrentBasicUserInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CurrentBasicUserInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentUserInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BasicUserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BasicUserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BasicUserInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]} as unknown as DocumentNode<CurrentBasicUserInfoQuery, CurrentBasicUserInfoQueryVariables>;
export const RegisterUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"registerUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateGlobalUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseGlobalUser"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseGlobalUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GlobalUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"globalPrivileges"}}]}}]}}]} as unknown as DocumentNode<RegisterUserMutation, RegisterUserMutationVariables>;
export const UpdateGlobalUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateGlobalUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateGlobalUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateGlobalUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseGlobalUser"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseGlobalUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GlobalUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"globalPrivileges"}}]}}]}}]} as unknown as DocumentNode<UpdateGlobalUserMutation, UpdateGlobalUserMutationVariables>;
export const BoardQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BoardQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"projectBoard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectBoard"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectBoard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectBoard"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"states"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"state"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"imsStateId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"issues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"issueUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"labels"}},{"kind":"Field","name":{"kind":"Name","value":"storyPoints"}},{"kind":"Field","name":{"kind":"Name","value":"effortEstimation"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"sprintNumber"}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iconPath"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<BoardQueryQuery, BoardQueryQueryVariables>;
export const ChangeStateMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangeStateMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stateName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateIssue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeIssueState"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"stateName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stateName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssueBase"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssueBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Issue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"issueUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"storyPoints"}},{"kind":"Field","name":{"kind":"Name","value":"effortEstimation"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"sprintNumber"}},{"kind":"Field","name":{"kind":"Name","value":"labels"}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iconPath"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<ChangeStateMutationMutation, ChangeStateMutationMutationVariables>;
export const FinishIssueMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FinishIssueMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"doneStateName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dodConfirmStates"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DefinitionOfDoneConfirmState"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateIssue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finishIssue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"doneStateName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"doneStateName"}}},{"kind":"Argument","name":{"kind":"Name","value":"dodConfirmStates"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dodConfirmStates"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssueBase"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssueBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Issue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"issueUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"storyPoints"}},{"kind":"Field","name":{"kind":"Name","value":"effortEstimation"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"sprintNumber"}},{"kind":"Field","name":{"kind":"Name","value":"labels"}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iconPath"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<FinishIssueMutationMutation, FinishIssueMutationMutationVariables>;
export const CreateIssueMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateIssueMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateIssueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createIssue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssueBase"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssueBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Issue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"issueUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"storyPoints"}},{"kind":"Field","name":{"kind":"Name","value":"effortEstimation"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"sprintNumber"}},{"kind":"Field","name":{"kind":"Name","value":"labels"}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iconPath"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<CreateIssueMutationMutation, CreateIssueMutationMutationVariables>;
export const AssignIssueMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AssignIssueMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"assigneeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateIssue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assignIssue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"assigneeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"assigneeId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssueBase"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssueBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Issue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"issueUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"storyPoints"}},{"kind":"Field","name":{"kind":"Name","value":"effortEstimation"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"sprintNumber"}},{"kind":"Field","name":{"kind":"Name","value":"labels"}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iconPath"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<AssignIssueMutationMutation, AssignIssueMutationMutationVariables>;
export const CommentOnIssueMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CommentOnIssueMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"message"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"optionalParentId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateIssue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commentOnIssue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"comment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"message"}}},{"kind":"Argument","name":{"kind":"Name","value":"optionalParentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"optionalParentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssueBase"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssueBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Issue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"issueUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"storyPoints"}},{"kind":"Field","name":{"kind":"Name","value":"effortEstimation"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"sprintNumber"}},{"kind":"Field","name":{"kind":"Name","value":"labels"}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iconPath"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<CommentOnIssueMutationMutation, CommentOnIssueMutationMutationVariables>;
export const IssueQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IssueQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"issue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssueWithEvents"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssueBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Issue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"issueUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"storyPoints"}},{"kind":"Field","name":{"kind":"Name","value":"effortEstimation"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"sprintNumber"}},{"kind":"Field","name":{"kind":"Name","value":"labels"}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iconPath"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseEvent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DefaultEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identifier"}}]}},{"kind":"Field","name":{"kind":"Name","value":"eventData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"issueId"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"issueId","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"issueTitle"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"issueTitle","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"repositoryName"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"repositoryName","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"repositoryUrl"},"name":{"kind":"Name","value":"field"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"repositoryUrl","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"xpForCurrentUser"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EventWithChildren"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DefaultEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseEvent"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseEvent"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssueWithEvents"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Issue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssueBase"}},{"kind":"Field","name":{"kind":"Name","value":"issueEvents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EventWithChildren"}}]}}]}}]} as unknown as DocumentNode<IssueQueryQuery, IssueQueryQueryVariables>;
export const JoinMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"JoinMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MeetingType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"joinMeeting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<JoinMeetingMutation, JoinMeetingMutationVariables>;
export const LeaveMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LeaveMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MeetingType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leaveMeeting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<LeaveMeetingMutation, LeaveMeetingMutationVariables>;
export const PromoteToMeetingLeaderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PromoteToMeetingLeader"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MeetingType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"promoteToMeetingLeader"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<PromoteToMeetingLeaderMutation, PromoteToMeetingLeaderMutationVariables>;
export const CancelMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CancelMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MeetingType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cancelMeeting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<CancelMeetingMutation, CancelMeetingMutationVariables>;
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
export const FinishMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FinishMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutatePlanningMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finishMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultSprint"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultSprint"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Sprint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"storyPointsPlanned"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalStoryPoints"}},{"kind":"Field","name":{"kind":"Name","value":"percentageStoryPointsCompleted"}},{"kind":"Field","name":{"kind":"Name","value":"percentageStoryPointsInProgress"}},{"kind":"Field","name":{"kind":"Name","value":"percentageTimeElapsed"}},{"kind":"Field","name":{"kind":"Name","value":"daysLeft"}},{"kind":"Field","name":{"kind":"Name","value":"averageStoryPoints"}},{"kind":"Field","name":{"kind":"Name","value":"successState"}},{"kind":"Field","name":{"kind":"Name","value":"burnDown"}},{"kind":"Field","name":{"kind":"Name","value":"streak"}}]}},{"kind":"Field","name":{"kind":"Name","value":"placedAssets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"}},{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"animal"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}}]} as unknown as DocumentNode<FinishMeetingMutation, FinishMeetingMutationVariables>;
export const PlanningMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"PlanningMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"planningMeeting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultPlanningMeeting"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultPlanningMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlanningMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"animalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableAnimals"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"animalVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nameVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableNames"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"nameVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueEstimation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"countdownSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"estimationStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"median"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"finalResult"}},{"kind":"Field","name":{"kind":"Name","value":"issueId"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sprintGoalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"nonSprintIssueIds"}},{"kind":"Field","name":{"kind":"Name","value":"sprintIssueIds"}}]}}]}}]} as unknown as DocumentNode<PlanningMeetingSubscription, PlanningMeetingSubscriptionVariables>;
export const ProjectMainQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProjectMainQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectMain"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectMain"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"currentSprintNumber"}},{"kind":"Field","name":{"kind":"Name","value":"projectSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imsSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imsName"}},{"kind":"Field","name":{"kind":"Name","value":"imsIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imsProjectUrl"}},{"kind":"Field","name":{"kind":"Name","value":"issueStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"codeRepositorySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repositories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mdiIcon"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"definitionOfDone"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","name":{"kind":"Name","value":"implies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","name":{"kind":"Name","value":"implies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProjectMainQueryQuery, ProjectMainQueryQueryVariables>;
export const AllProjectsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllProjectsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectPrivileges"}}]}}]}}]}}]} as unknown as DocumentNode<AllProjectsQueryQuery, AllProjectsQueryQueryVariables>;
export const CreateProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProjectInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectMain"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectMain"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"currentSprintNumber"}},{"kind":"Field","name":{"kind":"Name","value":"projectSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imsSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imsName"}},{"kind":"Field","name":{"kind":"Name","value":"imsIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imsProjectUrl"}},{"kind":"Field","name":{"kind":"Name","value":"issueStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"codeRepositorySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repositories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mdiIcon"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"definitionOfDone"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","name":{"kind":"Name","value":"implies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","name":{"kind":"Name","value":"implies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateProjectMutation, CreateProjectMutationVariables>;
export const UpdateProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProjectInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectMain"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectMain"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"currentSprintNumber"}},{"kind":"Field","name":{"kind":"Name","value":"projectSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imsSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imsName"}},{"kind":"Field","name":{"kind":"Name","value":"imsIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imsProjectUrl"}},{"kind":"Field","name":{"kind":"Name","value":"issueStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"codeRepositorySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repositories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mdiIcon"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"definitionOfDone"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","name":{"kind":"Name","value":"implies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","name":{"kind":"Name","value":"implies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateProjectMutation, UpdateProjectMutationVariables>;
export const DeleteProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}]}]}}]} as unknown as DocumentNode<DeleteProjectMutation, DeleteProjectMutationVariables>;
export const ChangeRetrospectiveMeetingPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangeRetrospectiveMeetingPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RetrospectiveMeetingPage"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateRetrospectiveMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RetrospectiveMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"goldChallengeReward"}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"columns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"thumbsUpBy"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ChangeRetrospectiveMeetingPageMutation, ChangeRetrospectiveMeetingPageMutationVariables>;
export const AddCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"columnId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateRetrospectiveMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columnId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"columnId"}}},{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RetrospectiveMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"goldChallengeReward"}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"columns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"thumbsUpBy"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AddCommentMutation, AddCommentMutationVariables>;
export const EditCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateRetrospectiveMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"commentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RetrospectiveMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"goldChallengeReward"}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"columns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"thumbsUpBy"}}]}}]}}]}}]}}]} as unknown as DocumentNode<EditCommentMutation, EditCommentMutationVariables>;
export const DeleteCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateRetrospectiveMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"commentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RetrospectiveMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"goldChallengeReward"}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"columns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"thumbsUpBy"}}]}}]}}]}}]}}]} as unknown as DocumentNode<DeleteCommentMutation, DeleteCommentMutationVariables>;
export const ThumbsUpCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ThumbsUpComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateRetrospectiveMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thumbsUpComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"commentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RetrospectiveMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"goldChallengeReward"}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"columns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"thumbsUpBy"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ThumbsUpCommentMutation, ThumbsUpCommentMutationVariables>;
export const FinishRetroMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FinishRetroMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateRetrospectiveMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finishMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RetrospectiveMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"goldChallengeReward"}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"columns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"thumbsUpBy"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FinishRetroMeetingMutation, FinishRetroMeetingMutationVariables>;
export const AwardMedalsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AwardMedals"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateRetrospectiveMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"awardMedals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RetrospectiveMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"goldChallengeReward"}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"columns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"thumbsUpBy"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AwardMedalsMutation, AwardMedalsMutationVariables>;
export const CreateRetrospectiveMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRetrospectiveMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RetrospectiveMeetingInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRetrospectiveMeeting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RetrospectiveMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"goldChallengeReward"}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"columns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"thumbsUpBy"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateRetrospectiveMeetingMutation, CreateRetrospectiveMeetingMutationVariables>;
export const RetrospectiveMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"RetrospectiveMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"retrospectiveMeeting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RetrospectiveMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"goldChallengeReward"}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"columns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"thumbsUpBy"}}]}}]}}]}}]}}]} as unknown as DocumentNode<RetrospectiveMeetingSubscription, RetrospectiveMeetingSubscriptionVariables>;
export const ShopDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Shop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shopItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShopItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShopItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShopItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]} as unknown as DocumentNode<ShopQuery, ShopQueryVariables>;
export const BuyAndPlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"BuyAndPlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PlaceAssetInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"buyAndPlace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<BuyAndPlaceMutation, BuyAndPlaceMutationVariables>;
export const SprintDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Sprint"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"currentSprint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultSprint"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultSprint"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Sprint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"storyPointsPlanned"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalStoryPoints"}},{"kind":"Field","name":{"kind":"Name","value":"percentageStoryPointsCompleted"}},{"kind":"Field","name":{"kind":"Name","value":"percentageStoryPointsInProgress"}},{"kind":"Field","name":{"kind":"Name","value":"percentageTimeElapsed"}},{"kind":"Field","name":{"kind":"Name","value":"daysLeft"}},{"kind":"Field","name":{"kind":"Name","value":"averageStoryPoints"}},{"kind":"Field","name":{"kind":"Name","value":"successState"}},{"kind":"Field","name":{"kind":"Name","value":"burnDown"}},{"kind":"Field","name":{"kind":"Name","value":"streak"}}]}},{"kind":"Field","name":{"kind":"Name","value":"placedAssets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"}},{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"animal"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}}]} as unknown as DocumentNode<SprintQuery, SprintQueryVariables>;
export const PreviousSprintDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PreviousSprint"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"previousSprint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultSprint"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultSprint"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Sprint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"storyPointsPlanned"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalStoryPoints"}},{"kind":"Field","name":{"kind":"Name","value":"percentageStoryPointsCompleted"}},{"kind":"Field","name":{"kind":"Name","value":"percentageStoryPointsInProgress"}},{"kind":"Field","name":{"kind":"Name","value":"percentageTimeElapsed"}},{"kind":"Field","name":{"kind":"Name","value":"daysLeft"}},{"kind":"Field","name":{"kind":"Name","value":"averageStoryPoints"}},{"kind":"Field","name":{"kind":"Name","value":"successState"}},{"kind":"Field","name":{"kind":"Name","value":"burnDown"}},{"kind":"Field","name":{"kind":"Name","value":"streak"}}]}},{"kind":"Field","name":{"kind":"Name","value":"placedAssets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"}},{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"animal"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}}]} as unknown as DocumentNode<PreviousSprintQuery, PreviousSprintQueryVariables>;
export const SprintsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Sprints"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sprints"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultSprint"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultSprint"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Sprint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"storyPointsPlanned"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalStoryPoints"}},{"kind":"Field","name":{"kind":"Name","value":"percentageStoryPointsCompleted"}},{"kind":"Field","name":{"kind":"Name","value":"percentageStoryPointsInProgress"}},{"kind":"Field","name":{"kind":"Name","value":"percentageTimeElapsed"}},{"kind":"Field","name":{"kind":"Name","value":"daysLeft"}},{"kind":"Field","name":{"kind":"Name","value":"averageStoryPoints"}},{"kind":"Field","name":{"kind":"Name","value":"successState"}},{"kind":"Field","name":{"kind":"Name","value":"burnDown"}},{"kind":"Field","name":{"kind":"Name","value":"streak"}}]}},{"kind":"Field","name":{"kind":"Name","value":"placedAssets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"}},{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"animal"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}}]} as unknown as DocumentNode<SprintsQuery, SprintsQueryVariables>;
export const CreateStandupMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateStandupMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"StandupMeetingInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createStandupMeeting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultStandupMeeting"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultStandupMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StandupMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"standupMeetingSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countdownPerAttendee"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAttendee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<CreateStandupMeetingMutation, CreateStandupMeetingMutationVariables>;
export const StartStandupMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"StartStandupMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateStandupMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startStandupMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultStandupMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultStandupMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StandupMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"standupMeetingSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countdownPerAttendee"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAttendee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<StartStandupMeetingMutation, StartStandupMeetingMutationVariables>;
export const ChangeCurrentAttendeeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangeCurrentAttendee"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateStandupMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeCurrentAttendee"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"attendeeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultStandupMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultStandupMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StandupMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"standupMeetingSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countdownPerAttendee"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAttendee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<ChangeCurrentAttendeeMutation, ChangeCurrentAttendeeMutationVariables>;
export const FinishStandupMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FinishStandupMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateStandupMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finishStandupMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultStandupMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultStandupMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StandupMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"standupMeetingSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countdownPerAttendee"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAttendee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<FinishStandupMeetingMutation, FinishStandupMeetingMutationVariables>;
export const StandupMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"StandupMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"standupMeeting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultStandupMeeting"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultStandupMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StandupMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"standupMeetingSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countdownPerAttendee"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAttendee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<StandupMeetingSubscription, StandupMeetingSubscriptionVariables>;
export const UserInProjectQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserInProjectQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInProject"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInProject"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserInProject"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gamifiedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projectPrivileges"}}]}},{"kind":"Field","name":{"kind":"Name","value":"achievements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"achievement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"goal"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emoji"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"progress"}},{"kind":"Field","name":{"kind":"Name","value":"achieved"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"goldMedals"}},{"kind":"Field","name":{"kind":"Name","value":"silverMedals"}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedals"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentBadge"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emoji"}}]}}]}}]} as unknown as DocumentNode<UserInProjectQueryQuery, UserInProjectQueryQueryVariables>;
export const UserStatsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserStatsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserStats"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserStats"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserStats"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"xp"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"xpToNextLevel"}},{"kind":"Field","name":{"kind":"Name","value":"totalXp"}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedals"}},{"kind":"Field","name":{"kind":"Name","value":"silverMedals"}},{"kind":"Field","name":{"kind":"Name","value":"goldMedals"}},{"kind":"Field","name":{"kind":"Name","value":"virtualCurrency"}},{"kind":"Field","name":{"kind":"Name","value":"commentsWritten"}},{"kind":"Field","name":{"kind":"Name","value":"issuesCompleted"}},{"kind":"Field","name":{"kind":"Name","value":"issuesCreated"}},{"kind":"Field","name":{"kind":"Name","value":"pullRequestsClosed"}},{"kind":"Field","name":{"kind":"Name","value":"pullRequestsCreated"}},{"kind":"Field","name":{"kind":"Name","value":"pullRequestsReviewed"}},{"kind":"Field","name":{"kind":"Name","value":"reactionsGiven"}}]}}]} as unknown as DocumentNode<UserStatsQueryQuery, UserStatsQueryQueryVariables>;
export const AllUsersInProjectQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllUsersInProjectQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInProject"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInProject"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserInProject"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gamifiedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projectPrivileges"}}]}},{"kind":"Field","name":{"kind":"Name","value":"achievements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"achievement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"goal"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emoji"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"progress"}},{"kind":"Field","name":{"kind":"Name","value":"achieved"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"goldMedals"}},{"kind":"Field","name":{"kind":"Name","value":"silverMedals"}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedals"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentBadge"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emoji"}}]}}]}}]} as unknown as DocumentNode<AllUsersInProjectQueryQuery, AllUsersInProjectQueryQueryVariables>;
export const JoinProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"JoinProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"joinProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInProject"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInProject"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserInProject"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gamifiedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projectPrivileges"}}]}},{"kind":"Field","name":{"kind":"Name","value":"achievements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"achievement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"goal"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emoji"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"progress"}},{"kind":"Field","name":{"kind":"Name","value":"achieved"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"goldMedals"}},{"kind":"Field","name":{"kind":"Name","value":"silverMedals"}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedals"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentBadge"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emoji"}}]}}]}}]} as unknown as DocumentNode<JoinProjectMutation, JoinProjectMutationVariables>;