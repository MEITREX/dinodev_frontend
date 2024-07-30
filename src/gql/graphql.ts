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

/**
 * 
 * All known animals that can be placed in the park.
 * 
 * Frontend supports TREX, TRICERATOPS, DODO, and BRONTOSAURUS.
 */
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

/**
 * 
 * Details about the animal voting.
 */
export type AnimalVoting = {
  __typename?: 'AnimalVoting';
  /**
   * 
   * The voting states for each animal, containing the votes of the users.
   */
  animalVotingStates: Array<AnimalVotingState>;
  /**
   * 
   * If the animal voting is finished.
   */
  finished: Scalars['Boolean']['output'];
  /**
   * 
   * The animals that can be voted for.
   */
  votableAnimals: Array<Animal>;
  /**
   * 
   * If the animal voting is finished, the result of the voting.
   */
  votingResult?: Maybe<Animal>;
};

/**
 * 
 * Holds the votes for an animal.
 */
export type AnimalVotingState = {
  __typename?: 'AnimalVotingState';
  /**
   * 
   * The total number of votes for the animal.
   */
  totalVotes: Scalars['Int']['output'];
  /**
   * 
   * The votes for the animal.
   */
  userVotes: Array<Vote>;
  /**
   * 
   * The animal that is voted for.
   */
  votedFor: Animal;
};

/**
 * 
 * User info from the AuthenticationProvider
 */
export type BasicUserInfo = {
  __typename?: 'BasicUserInfo';
  /**
   * 
   * The avatar of the user. Should be a URL.
   */
  avatar?: Maybe<Scalars['String']['output']>;
  /**
   * 
   * The ID of the user.
   */
  id: Scalars['String']['output'];
  /**
   * 
   * If the user should be treated as an admin.
   */
  isAdmin: Scalars['Boolean']['output'];
  /**
   * 
   * The username of the user.
   */
  username: Scalars['String']['output'];
};

export type CodeRepositorySettings = {
  __typename?: 'CodeRepositorySettings';
  repositories: Array<RepositoryDefinition>;
};

export type CodeRepositorySettingsInput = {
  repositories: Array<RepositoryDefinitionInput>;
};

/**
 * Input for creating an event.
 * Fields are described in the Event interface.
 */
export type CreateEventInput = {
  eventData: Array<DataFieldInput>;
  eventTypeIdentifier: Scalars['String']['input'];
  id?: InputMaybe<Scalars['UUID']['input']>;
  /**
   * Message of the event. If not provided, the message template of the event type is used and
   * the eventData is used to fill in the template.
   */
  message?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['UUID']['input']>;
  projectId?: InputMaybe<Scalars['UUID']['input']>;
  timestamp: Scalars['DateTime']['input'];
  userId?: InputMaybe<Scalars['UUID']['input']>;
  /** Visibility of the event. If not provided, the default visibility of the event type is used. */
  visibility?: InputMaybe<EventVisibility>;
  visibleToUserIds?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

/** Input for creating an event type. */
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

/** Represents a field in the data of an event. */
export type DataField = {
  /** Name of the field. */
  key: Scalars['String']['output'];
  /** Type of the field. */
  type: AllowedDataType;
  /** Value of the field, as a string. */
  value?: Maybe<Scalars['String']['output']>;
};

/** Input for creating a data field. */
export type DataFieldInput = {
  key: Scalars['String']['input'];
  type: AllowedDataType;
  value?: InputMaybe<Scalars['String']['input']>;
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

/** Default implementation of the DataField interface. */
export type DefaultDataField = DataField & {
  __typename?: 'DefaultDataField';
  key: Scalars['String']['output'];
  type: AllowedDataType;
  value?: Maybe<Scalars['String']['output']>;
};

/**
 * Implementation of the Event interface.
 * Fields are described in the interface definition.
 */
export type DefaultEvent = Event & {
  __typename?: 'DefaultEvent';
  children: Array<DefaultEvent>;
  eventData: Array<DefaultDataField>;
  eventType: DefaultEventType;
  /**
   * 
   * Get a field by name.
   */
  field?: Maybe<DataField>;
  id: Scalars['UUID']['output'];
  message: Scalars['String']['output'];
  mostRecentChildTimestamp: Scalars['DateTime']['output'];
  parent?: Maybe<DefaultEvent>;
  projectId?: Maybe<Scalars['UUID']['output']>;
  /**
   * 
   * List of reactions on this event.
   */
  reactions: Array<Reaction>;
  timestamp: Scalars['DateTime']['output'];
  /**
   * 
   * The user who is associated with this event.
   */
  user?: Maybe<GlobalUser>;
  userId?: Maybe<Scalars['UUID']['output']>;
  visibility: EventVisibility;
  visibleToUserIds: Array<Scalars['UUID']['output']>;
  /**
   * 
   * How much XP the current user has earned for this event.
   */
  xpForCurrentUser?: Maybe<Scalars['Int']['output']>;
};


/**
 * Implementation of the Event interface.
 * Fields are described in the interface definition.
 */
export type DefaultEventFieldArgs = {
  name: Scalars['String']['input'];
};

/**
 * Implementation of the EventType interface.
 * Fields are described in the interface definition.
 */
export type DefaultEventType = EventType & {
  __typename?: 'DefaultEventType';
  defaultVisibility: EventVisibility;
  description?: Maybe<Scalars['String']['output']>;
  eventSchema: DefaultSchemaDefinition;
  identifier: Scalars['String']['output'];
  messageTemplate: Scalars['String']['output'];
};

/** Default implementation of the FieldSchemaDefinition interface. */
export type DefaultFieldSchemaDefinition = FieldSchemaDefinition & {
  __typename?: 'DefaultFieldSchemaDefinition';
  allowedValues?: Maybe<Array<Scalars['String']['output']>>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  required: Scalars['Boolean']['output'];
  type: AllowedDataType;
};

/** Default implementation of the SchemaDefinition interface. */
export type DefaultSchemaDefinition = SchemaDefinition & {
  __typename?: 'DefaultSchemaDefinition';
  fields: Array<DefaultFieldSchemaDefinition>;
};

/**
 * 
 * Represents an item of the definition of done and with the information if it is checked or not and
 * the reason if it is not checked.
 */
export type DefinitionOfDoneConfirmState = {
  /**
   * 
   * If the item is checked.
   */
  checked: Scalars['Boolean']['input'];
  /**
   * 
   * The child confirm states, containing the child items of the definition of done item.
   */
  children: Array<DefinitionOfDoneConfirmState>;
  /**
   * 
   * Text of the definition of done item.
   */
  dodText: Scalars['String']['input'];
  /**
   * 
   * The reason why the item is not checked.
   * Should be null if the item is checked.
   */
  reasonIfNotChecked?: InputMaybe<Scalars['String']['input']>;
};

/**
 * 
 * A single item of the definition of done that has to be checked or commented on when completing an issue.
 */
export type DefinitionOfDoneItem = {
  __typename?: 'DefinitionOfDoneItem';
  /**
   * 
   * Items that are implied by this item. If this item is checked, all items in this list also need to be checked if they are required.
   */
  implies: Array<DefinitionOfDoneItem>;
  /**
   * 
   * Whether the item is required to be checked. If not, the dialog can be completed without checking this item.
   */
  required: Scalars['Boolean']['output'];
  /**
   * 
   * The text of the item.
   */
  text: Scalars['String']['output'];
};

export type DefinitionOfDoneItemInput = {
  implies?: Array<DefinitionOfDoneItemInput>;
  required: Scalars['Boolean']['input'];
  text: Scalars['String']['input'];
};

/**
 * 
 * Statistics about the estimations.
 */
export type EstimationStats = {
  __typename?: 'EstimationStats';
  max?: Maybe<TShirtSizeEstimation>;
  median?: Maybe<TShirtSizeEstimation>;
  min?: Maybe<TShirtSizeEstimation>;
  mode?: Maybe<TShirtSizeEstimation>;
};

/**
 * 
 * Holds the votes for an estimation.
 */
export type EstimationVote = {
  __typename?: 'EstimationVote';
  totalVotes: Scalars['Int']['output'];
  userVotes: Array<Vote>;
  votedFor: TShirtSizeEstimation;
};

/** Represents an event in the system. */
export type Event = {
  /** List of child events. */
  children: Array<Event>;
  /** Data of the event. */
  eventData: Array<DataField>;
  /** Type of the event. */
  eventType: EventType;
  /**
   * 
   * Get a field by name.
   */
  field?: Maybe<DataField>;
  /** Unique identifier of the event. */
  id: Scalars['UUID']['output'];
  /** Message of the event. */
  message: Scalars['String']['output'];
  /** Timestamp of the most recent child event. */
  mostRecentChildTimestamp: Scalars['DateTime']['output'];
  /** Parent event, if any. */
  parent?: Maybe<Event>;
  /** Id of the project the event belongs to. */
  projectId?: Maybe<Scalars['UUID']['output']>;
  /**
   * 
   * List of reactions on this event.
   */
  reactions: Array<Reaction>;
  /** Timestamp of the event. */
  timestamp: Scalars['DateTime']['output'];
  /**
   * 
   * The user who is associated with this event.
   */
  user?: Maybe<GlobalUser>;
  /** Id of the user who triggered the event. */
  userId?: Maybe<Scalars['UUID']['output']>;
  /** Visibility of the event. */
  visibility: EventVisibility;
  /** List of user ids who can see the event (in addition to the user who triggered the event). */
  visibleToUserIds: Array<Scalars['UUID']['output']>;
  /**
   * 
   * How much XP the current user has earned for this event.
   */
  xpForCurrentUser?: Maybe<Scalars['Int']['output']>;
};


/** Represents an event in the system. */
export type EventFieldArgs = {
  name: Scalars['String']['input'];
};

/** Represents a type of event in the system. */
export type EventType = {
  /** Default of the event type. */
  defaultVisibility: EventVisibility;
  /** Description of the event type. */
  description?: Maybe<Scalars['String']['output']>;
  /** Describes the schema of the event data. */
  eventSchema: SchemaDefinition;
  /** Unique, human readable identifier of the event type. */
  identifier: Scalars['String']['output'];
  /** String template for the message of the event. */
  messageTemplate: Scalars['String']['output'];
};

export enum EventVisibility {
  /** Detail level: visible to all users but only when viewing a specific object, not in the whole list of events. */
  Detail = 'DETAIL',
  /** Internal events. Not visible to users. May be shown to administrators. */
  Internal = 'INTERNAL',
  /** Only for the user who created the event and users in "visibleToUserIds". */
  Private = 'PRIVATE',
  /** Project detail level: visible to all users */
  Public = 'PUBLIC'
}

/** Schema definition for a field in the event data. */
export type FieldSchemaDefinition = {
  /** Allowed values for the field. Set to null if any value is allowed. */
  allowedValues?: Maybe<Array<Scalars['String']['output']>>;
  /** Description of the field. */
  description?: Maybe<Scalars['String']['output']>;
  /** Name of the field. */
  name: Scalars['String']['output'];
  /** Whether the field is required. */
  required: Scalars['Boolean']['output'];
  /** Type of the field. */
  type: AllowedDataType;
};

/** Input for creating and updating a field schema definition. */
export type FieldSchemaDefinitionInput = {
  allowedValues?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  required?: Scalars['Boolean']['input'];
  type: AllowedDataType;
};

/**
 * 
 * Privileges on the global level, i.e., not tied to a specific project.
 * Currently, UPDATE_ROLE and LIST_USERS are not used.
 */
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

/**
 * 
 * Global roles define the permissions of a user on a global level.
 * They are not tied to a specific project.
 * 
 * Currently, there is only a distinction between admins and non-admins.
 */
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

/**
 * 
 * Ims specific settings of a project. Currently, this is tailored to Gropius.
 */
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
  /**
   * 
   * The assignees of this issue.
   */
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
  /**
   * 
   * The sprint that this issue is in.
   */
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

/**
 * 
 * Details about the issue estimation.
 */
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

/**
 * 
 * Mutation type to change issues.
 */
export type IssueMutation = {
  __typename?: 'IssueMutation';
  /**
   * 
   * Assign the issue to the user with the given id.
   */
  assignIssue: Issue;
  /**
   * 
   * Change the description of the issue.
   */
  changeIssueDescription: Issue;
  /**
   * 
   * Change the state of the issue.
   */
  changeIssueState: Issue;
  /**
   * 
   * Change the title of the issue.
   */
  changeIssueTitle: Issue;
  /**
   * 
   * Change the type of the issue.
   */
  changeIssueType: Issue;
  /**
   * 
   * Change the sprint of the issue.
   */
  changeSprint: Issue;
  /**
   * 
   * Add a comment to the issue.
   */
  commentOnIssue: Issue;
  /**
   * 
   * Move an issue to the state with the given name and add a comment to the issue,
   * containing the definition of done confirm states.
   */
  finishIssue: Issue;
  /**
   * 
   * The id of the issue that is being changed.
   */
  issueId: Scalars['String']['output'];
  /**
   * 
   * The project that the issue belongs to.
   */
  project: Project;
};


/**
 * 
 * Mutation type to change issues.
 */
export type IssueMutationAssignIssueArgs = {
  assigneeId?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * 
 * Mutation type to change issues.
 */
export type IssueMutationChangeIssueDescriptionArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
};


/**
 * 
 * Mutation type to change issues.
 */
export type IssueMutationChangeIssueStateArgs = {
  stateName: Scalars['String']['input'];
};


/**
 * 
 * Mutation type to change issues.
 */
export type IssueMutationChangeIssueTitleArgs = {
  title: Scalars['String']['input'];
};


/**
 * 
 * Mutation type to change issues.
 */
export type IssueMutationChangeIssueTypeArgs = {
  typeName: Scalars['String']['input'];
};


/**
 * 
 * Mutation type to change issues.
 */
export type IssueMutationChangeSprintArgs = {
  sprintNumber?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * 
 * Mutation type to change issues.
 */
export type IssueMutationCommentOnIssueArgs = {
  comment: Scalars['String']['input'];
  optionalParentId?: InputMaybe<Scalars['String']['input']>;
};


/**
 * 
 * Mutation type to change issues.
 */
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

/**
 * 
 * Represents a column in a Kanban board.
 */
export type IssueStateInBoard = {
  __typename?: 'IssueStateInBoard';
  /**
   * 
   * The issues in the column.
   */
  issues: Array<Issue>;
  /**
   * 
   * The project board that the column belongs to.
   */
  projectBoard: ProjectBoard;
  /**
   * 
   * The issue state of the column.
   */
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

/**
 * 
 * All known decorations that can be placed in the park.
 * 
 * Note: not all are yet supported by the frontend.
 */
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

/**
 * 
 * Represents a SCRUM meeting.
 */
export type Meeting = {
  /**
   * 
   * If the meeting is currently active.
   */
  active: Scalars['Boolean']['output'];
  /**
   * 
   * The attendees of the meeting.
   * Contains at most one meeting leader.
   */
  attendees: Array<MeetingAttendee>;
  /**
   * 
   * The type of the meeting.
   */
  meetingType: MeetingType;
  /**
   * 
   * The id of the project that the meeting is associated with.
   */
  projectId: Scalars['UUID']['output'];
};

/**
 * 
 * A user that attends a meeting.
 */
export type MeetingAttendee = {
  __typename?: 'MeetingAttendee';
  /**
   * 
   * The role of the user.
   */
  role: MeetingRole;
  /**
   * 
   * The state of the user, e.g. online, offline or away.
   */
  state: UserState;
  /**
   * 
   * The user who is attending the meeting.
   */
  user: GlobalUser;
  /**
   * 
   * The id of the user.
   */
  userId: Scalars['UUID']['output'];
};

/**
 * 
 * The role of the user in a meeting.
 * Can be an attendee or the meeting leader.
 */
export enum MeetingRole {
  Attendee = 'ATTENDEE',
  MeetingLeader = 'MEETING_LEADER'
}

/**
 * 
 * The type of the meeting, which can be a planning, retrospective or standup meeting.
 */
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

/**
 * 
 * Details about the name voting.
 */
export type NameVoting = {
  __typename?: 'NameVoting';
  /**
   * 
   * If the name voting is finished.
   */
  finished: Scalars['Boolean']['output'];
  /**
   * 
   * The voting states for each name, containing the votes of the users.
   */
  nameVotingStates: Array<NameVotingState>;
  /**
   * 
   * The names that can be voted for.
   */
  votableNames: Array<Scalars['String']['output']>;
  /**
   * 
   * If the name voting is finished, the result of the voting.
   */
  votingResult?: Maybe<Scalars['String']['output']>;
};

/**
 * 
 * Holds the votes for a name.
 */
export type NameVotingState = {
  __typename?: 'NameVotingState';
  /**
   * 
   * The total number of votes for the name.
   */
  totalVotes: Scalars['Int']['output'];
  /**
   * 
   * The votes for the name.
   */
  userVotes: Array<Vote>;
  /**
   * 
   * The name that is voted for.
   */
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

/**
 * 
 * The PlanningMeeting represents the SCRUM planning meeting.
 */
export type PlanningMeeting = Meeting & {
  __typename?: 'PlanningMeeting';
  /**
   * 
   * If the meeting is currently active.
   */
  active: Scalars['Boolean']['output'];
  /**
   * 
   * Details about the animal voting.
   */
  animalVoting: AnimalVoting;
  /**
   * 
   * The attendees of the meeting.
   * Contains at most one meeting leader.
   */
  attendees: Array<MeetingAttendee>;
  /**
   * 
   * The current page.
   */
  currentPage: PlanningMeetingPage;
  /**
   * 
   * Details about the current issue estimation.
   */
  issueEstimation: IssueEstimation;
  /**
   * 
   * The type of the meeting, must be PLANNING.
   */
  meetingType: MeetingType;
  /**
   * 
   * Details about the name voting.
   */
  nameVoting: NameVoting;
  /**
   * 
   * The settings of the planning meeting.
   */
  planningSettings: PlanningSettings;
  /**
   * 
   * The id of the project that the meeting is associated with.
   */
  projectId: Scalars['UUID']['output'];
  /**
   * 
   * Details about the sprint goal voting.
   */
  sprintGoalVoting: SprintGoalVoting;
};

export type PlanningMeetingInput = {
  meetingLeaderId: Scalars['UUID']['input'];
  planningSettings: PlanningSettingsInput;
};

/**
 * 
 * Wrapper type for all operations on the planning meeting.
 */
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
  startCountdown: PlanningMeeting;
  /**  animal voting */
  voteAnimal: PlanningMeeting;
  voteEstimation: PlanningMeeting;
  voteName: PlanningMeeting;
};


/**
 * 
 * Wrapper type for all operations on the planning meeting.
 */
export type PlanningMeetingMutationAddNameArgs = {
  name: Scalars['String']['input'];
};


/**
 * 
 * Wrapper type for all operations on the planning meeting.
 */
export type PlanningMeetingMutationAddSprintIssueArgs = {
  issueId: Scalars['String']['input'];
};


/**
 * 
 * Wrapper type for all operations on the planning meeting.
 */
export type PlanningMeetingMutationChangePageArgs = {
  page: PlanningMeetingPage;
};


/**
 * 
 * Wrapper type for all operations on the planning meeting.
 */
export type PlanningMeetingMutationNextIssueArgs = {
  issueId?: InputMaybe<Scalars['String']['input']>;
};


/**
 * 
 * Wrapper type for all operations on the planning meeting.
 */
export type PlanningMeetingMutationRemoveSprintIssueArgs = {
  issueId: Scalars['String']['input'];
};


/**
 * 
 * Wrapper type for all operations on the planning meeting.
 */
export type PlanningMeetingMutationSetFinalResultArgs = {
  assignUserIds?: Array<Scalars['UUID']['input']>;
  estimation: TShirtSizeEstimation;
};


/**
 * 
 * Wrapper type for all operations on the planning meeting.
 */
export type PlanningMeetingMutationStartCountdownArgs = {
  seconds: Scalars['Int']['input'];
};


/**
 * 
 * Wrapper type for all operations on the planning meeting.
 */
export type PlanningMeetingMutationVoteAnimalArgs = {
  animal: Animal;
};


/**
 * 
 * Wrapper type for all operations on the planning meeting.
 */
export type PlanningMeetingMutationVoteEstimationArgs = {
  estimation: TShirtSizeEstimation;
};


/**
 * 
 * Wrapper type for all operations on the planning meeting.
 */
export type PlanningMeetingMutationVoteNameArgs = {
  name: Scalars['String']['input'];
};

/**
 * 
 * The pages of the planning meeting.
 */
export enum PlanningMeetingPage {
  ChooseAnimal = 'CHOOSE_ANIMAL',
  EstimateIssues = 'ESTIMATE_ISSUES',
  Information = 'INFORMATION',
  NameAnimal = 'NAME_ANIMAL',
  SprintGoal = 'SPRINT_GOAL'
}

/**
 * 
 * The settings of the planning meeting.
 */
export type PlanningSettings = {
  __typename?: 'PlanningSettings';
  /**
   * 
   * A custom reward for the gold challenge. (currently not used)
   */
  customGoldChallengeReward?: Maybe<Scalars['String']['output']>;
  /**
   * 
   * The duration of the sprint in days.
   */
  sprintDurationDays?: Maybe<Scalars['Int']['output']>;
  /**
   * 
   * The start date of the sprint.
   */
  sprintStartDate: Scalars['DateTime']['output'];
};

export type PlanningSettingsInput = {
  goldChallengeCustomReward?: InputMaybe<Scalars['String']['input']>;
  sprintDurationDays: Scalars['Int']['input'];
  sprintStartDate: Scalars['DateTime']['input'];
};

export type Project = {
  __typename?: 'Project';
  /**
   * 
   * Returns the planning meeting of the project if one is active, otherwise null.
   */
  activePlanningMeeting?: Maybe<PlanningMeeting>;
  /**
   * 
   * Returns the retrospective meeting of the project if one is active, otherwise null.
   */
  activeRetrospectiveMeeting?: Maybe<RetrospectiveMeeting>;
  /**
   * 
   * Returns the standup meeting of the project if one is active, otherwise null.
   */
  activeStandupMeeting?: Maybe<StandupMeeting>;
  /**
   * 
   * The current sprint of the project. Returns null if no sprint is active.
   */
  currentSprint?: Maybe<Sprint>;
  /**
   * 
   * The number of the current sprint. Returns null if no sprint is active.
   */
  currentSprintNumber?: Maybe<Scalars['Int']['output']>;
  /**
   * 
   * Return the currently logged in user in the project, defined by the JWT token.
   */
  currentUser?: Maybe<UserInProject>;
  /**
   * 
   * Description of the project.
   */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * 
   *     Returns the events of the project.
   * 
   *     NOTE: This also triggers the synchronization of Gropius events.
   */
  events: Array<Event>;
  /**
   * 
   * Unique identifier of the project. (This is not the same ID as the one in the IMS.)
   */
  id: Scalars['UUID']['output'];
  /**
   * 
   * Returns the issue with the given ID.
   */
  issue?: Maybe<Issue>;
  /**
   * 
   * Returns the issues of the project.
   */
  issues: Array<Issue>;
  /**
   * 
   * Name of the project.
   */
  name: Scalars['String']['output'];
  /**
   * 
   * The previous sprint of the project. Returns null if no sprint is active.
   */
  previousSprint?: Maybe<Sprint>;
  /**
   * 
   * Groups the issues of the project by their state, representing a Kanban board.
   */
  projectBoard: ProjectBoard;
  /**
   * 
   * Project settings.
   */
  projectSettings: ProjectSettings;
  /**
   * 
   * Returns the role with the given name.
   */
  role?: Maybe<ProjectRole>;
  /**
   * 
   * Returns all project roles.
   */
  roles: Array<ProjectRole>;
  /**
   * 
   * Returns the shop items of the project.
   */
  shopItems: Array<ShopItem>;
  /**
   * 
   * All sprints of the project.
   */
  sprints: Array<Sprint>;
  /**
   * 
   * Returns the users of the project.
   */
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

/**
 * 
 * Represents a Kanban board.
 */
export type ProjectBoard = {
  __typename?: 'ProjectBoard';
  /**
   * 
   * The project that the board belongs to.
   */
  project: Project;
  /**
   * 
   * Ordered list of states in the board.
   */
  states: Array<IssueStateInBoard>;
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

/**
 * 
 * Privileges on the project level.
 * 
 * NOTE: This is NOT implemented yet. These are just suggestions.
 * Future work is needed to implement project-level privileges.
 */
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

/**
 * 
 * Roles are used to define the permissions of a user in a project.
 * A user can have multiple roles in a project.
 * 
 * NOTE: Project-level privileges/roles are NOT implemented yet.
 * While the general framework is in place, an actual differentiation
 * between roles has yet to be implemented.
 */
export type ProjectRole = {
  __typename?: 'ProjectRole';
  gamifiedName: Scalars['String']['output'];
  name: Scalars['String']['output'];
  project: Project;
  projectId: Scalars['UUID']['output'];
  projectPrivileges: Array<ProjectPrivilege>;
};

/**
 * 
 * Settings of a project.
 */
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

/** Definition of the schema of the event data. */
export type SchemaDefinition = {
  /** List of fields in the schema. */
  fields: Array<FieldSchemaDefinition>;
};

/** Input for creating and updating a schema definition. */
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

/**
 * 
 * Details about the sprint goal voting.
 */
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

/** Input for updating an event type. */
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

export type UserInProject = {
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

/**
 * 
 * The state of the user in a meeting.
 * Can be online, offline or away.
 * Away is currently not used.
 */
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

/**
 * 
 * Represents a vote for a name or animal.
 */
export type Vote = {
  __typename?: 'Vote';
  /**
   * 
   * The user who voted.
   */
  user: GlobalUser;
  /**
   * 
   * The id of the user who voted.
   */
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

export type ReducedEventFragment = { __typename?: 'DefaultEvent', id: any, timestamp: any, message: string, user?: { __typename?: 'GlobalUser', id: any, username: string, avatar?: string | null } | null, eventType: { __typename?: 'DefaultEventType', identifier: string }, parent?: { __typename?: 'DefaultEvent', userId?: any | null, message: string } | null, issueId?: { __typename?: 'DefaultDataField', value?: string | null } | null, issueTitle?: { __typename?: 'DefaultDataField', value?: string | null } | null, repositoryName?: { __typename?: 'DefaultDataField', value?: string | null } | null, repositoryUrl?: { __typename?: 'DefaultDataField', value?: string | null } | null } & { ' $fragmentName'?: 'ReducedEventFragment' };

export type BaseEventFragment = { __typename?: 'DefaultEvent', id: any, timestamp: any, message: string, xpForCurrentUser?: number | null, user?: { __typename?: 'GlobalUser', id: any, username: string, avatar?: string | null } | null, eventType: { __typename?: 'DefaultEventType', identifier: string }, eventData: Array<{ __typename?: 'DefaultDataField', key: string, value?: string | null }>, issueId?: { __typename?: 'DefaultDataField', value?: string | null } | null, issueTitle?: { __typename?: 'DefaultDataField', value?: string | null } | null, repositoryName?: { __typename?: 'DefaultDataField', value?: string | null } | null, repositoryUrl?: { __typename?: 'DefaultDataField', value?: string | null } | null, reactions: Array<{ __typename?: 'Reaction', userId: any }> } & { ' $fragmentName'?: 'BaseEventFragment' };

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
  issueId?: InputMaybe<Scalars['String']['input']>;
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
  assignUserIds: Array<Scalars['UUID']['input']> | Scalars['UUID']['input'];
}>;


export type SetFinalResultMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', mutatePlanningMeeting: { __typename?: 'PlanningMeetingMutation', setFinalResult: (
        { __typename?: 'PlanningMeeting' }
        & { ' $fragmentRefs'?: { 'DefaultPlanningMeetingFragment': DefaultPlanningMeetingFragment } }
      ) } } };

export type AddSprintIssueMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  issueId: Scalars['String']['input'];
}>;


export type AddSprintIssueMutation = { __typename?: 'Mutation', mutateProject: { __typename?: 'ProjectMutation', mutatePlanningMeeting: { __typename?: 'PlanningMeetingMutation', addSprintIssue: (
        { __typename?: 'PlanningMeeting' }
        & { ' $fragmentRefs'?: { 'DefaultPlanningMeetingFragment': DefaultPlanningMeetingFragment } }
      ) } } };

export type RemoveSprintIssueMutationVariables = Exact<{
  projectId: Scalars['UUID']['input'];
  issueId: Scalars['String']['input'];
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
  { __typename?: 'RetrospectiveMeeting', bronzeMedalPoints?: number | null, silverMedalPoints?: number | null, goldMedalPoints?: number | null, currentPage: RetrospectiveMeetingPage, goldChallengeReward?: Animal | null, streakRewards: Array<KnownAsset>, baseRewards: Array<KnownAsset>, bronzeMedalUser?: { __typename?: 'GlobalUser', id: any, username: string, avatar?: string | null } | null, silverMedalUser?: { __typename?: 'GlobalUser', id: any, username: string, avatar?: string | null } | null, goldMedalUser?: { __typename?: 'GlobalUser', id: any, username: string, avatar?: string | null } | null, activities: Array<{ __typename?: 'RetrospectiveActivity', columns: Array<{ __typename?: 'RetrospectiveColumn', id: any, title: string, description: string, comments: Array<{ __typename?: 'RetrospectiveComment', id: any, content: string, authorId: any, thumbsUpBy: Array<any> }> }> }> }
  & { ' $fragmentRefs'?: { 'DefaultMeeting_RetrospectiveMeeting_Fragment': DefaultMeeting_RetrospectiveMeeting_Fragment } }
) & { ' $fragmentName'?: 'DefaultRetrospectiveMeetingFragment' };

export type ShopQueryVariables = Exact<{
  projectId: Scalars['UUID']['input'];
}>;


export type ShopQuery = { __typename?: 'Query', project?: { __typename?: 'Project', shopItems: Array<(
      { __typename?: 'ShopItem' }
      & { ' $fragmentRefs'?: { 'ShopItemFragment': ShopItemFragment } }
    )> } | null };

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
export const DefaultRetrospectiveMeetingFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RetrospectiveMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"goldChallengeReward"}},{"kind":"Field","name":{"kind":"Name","value":"streakRewards"}},{"kind":"Field","name":{"kind":"Name","value":"baseRewards"}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"columns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"thumbsUpBy"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<DefaultRetrospectiveMeetingFragment, unknown>;
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
export const NextIssueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NextIssue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutatePlanningMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nextIssue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"issueId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultPlanningMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultPlanningMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlanningMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"animalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableAnimals"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"animalVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nameVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableNames"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"nameVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueEstimation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"countdownSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"estimationStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"median"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"finalResult"}},{"kind":"Field","name":{"kind":"Name","value":"issueId"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sprintGoalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"nonSprintIssueIds"}},{"kind":"Field","name":{"kind":"Name","value":"sprintIssueIds"}}]}}]}}]} as unknown as DocumentNode<NextIssueMutation, NextIssueMutationVariables>;
export const StartCountdownDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"StartCountdown"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"seconds"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutatePlanningMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCountdown"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"seconds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"seconds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultPlanningMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultPlanningMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlanningMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"animalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableAnimals"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"animalVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nameVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableNames"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"nameVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueEstimation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"countdownSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"estimationStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"median"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"finalResult"}},{"kind":"Field","name":{"kind":"Name","value":"issueId"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sprintGoalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"nonSprintIssueIds"}},{"kind":"Field","name":{"kind":"Name","value":"sprintIssueIds"}}]}}]}}]} as unknown as DocumentNode<StartCountdownMutation, StartCountdownMutationVariables>;
export const EndEstimationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EndEstimation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutatePlanningMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endEstimation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultPlanningMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultPlanningMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlanningMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"animalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableAnimals"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"animalVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nameVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableNames"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"nameVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueEstimation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"countdownSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"estimationStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"median"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"finalResult"}},{"kind":"Field","name":{"kind":"Name","value":"issueId"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sprintGoalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"nonSprintIssueIds"}},{"kind":"Field","name":{"kind":"Name","value":"sprintIssueIds"}}]}}]}}]} as unknown as DocumentNode<EndEstimationMutation, EndEstimationMutationVariables>;
export const SetFinalResultDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetFinalResult"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"estimation"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TShirtSizeEstimation"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"assignUserIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutatePlanningMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setFinalResult"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"estimation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"estimation"}}},{"kind":"Argument","name":{"kind":"Name","value":"assignUserIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"assignUserIds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultPlanningMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultPlanningMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlanningMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"animalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableAnimals"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"animalVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nameVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableNames"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"nameVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueEstimation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"countdownSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"estimationStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"median"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"finalResult"}},{"kind":"Field","name":{"kind":"Name","value":"issueId"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sprintGoalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"nonSprintIssueIds"}},{"kind":"Field","name":{"kind":"Name","value":"sprintIssueIds"}}]}}]}}]} as unknown as DocumentNode<SetFinalResultMutation, SetFinalResultMutationVariables>;
export const AddSprintIssueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddSprintIssue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutatePlanningMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addSprintIssue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"issueId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultPlanningMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultPlanningMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlanningMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"animalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableAnimals"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"animalVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nameVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableNames"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"nameVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueEstimation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"countdownSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"estimationStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"median"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"finalResult"}},{"kind":"Field","name":{"kind":"Name","value":"issueId"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sprintGoalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"nonSprintIssueIds"}},{"kind":"Field","name":{"kind":"Name","value":"sprintIssueIds"}}]}}]}}]} as unknown as DocumentNode<AddSprintIssueMutation, AddSprintIssueMutationVariables>;
export const RemoveSprintIssueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveSprintIssue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutatePlanningMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeSprintIssue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"issueId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultPlanningMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultPlanningMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlanningMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"animalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableAnimals"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"animalVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nameVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableNames"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"nameVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueEstimation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"countdownSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"estimationStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"median"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"finalResult"}},{"kind":"Field","name":{"kind":"Name","value":"issueId"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sprintGoalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"nonSprintIssueIds"}},{"kind":"Field","name":{"kind":"Name","value":"sprintIssueIds"}}]}}]}}]} as unknown as DocumentNode<RemoveSprintIssueMutation, RemoveSprintIssueMutationVariables>;
export const FinishMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FinishMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutatePlanningMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finishMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultSprint"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultSprint"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Sprint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"storyPointsPlanned"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalStoryPoints"}},{"kind":"Field","name":{"kind":"Name","value":"percentageStoryPointsCompleted"}},{"kind":"Field","name":{"kind":"Name","value":"percentageStoryPointsInProgress"}},{"kind":"Field","name":{"kind":"Name","value":"percentageTimeElapsed"}},{"kind":"Field","name":{"kind":"Name","value":"daysLeft"}},{"kind":"Field","name":{"kind":"Name","value":"averageStoryPoints"}},{"kind":"Field","name":{"kind":"Name","value":"successState"}},{"kind":"Field","name":{"kind":"Name","value":"burnDown"}},{"kind":"Field","name":{"kind":"Name","value":"streak"}}]}},{"kind":"Field","name":{"kind":"Name","value":"placedAssets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"}},{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"animal"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}}]} as unknown as DocumentNode<FinishMeetingMutation, FinishMeetingMutationVariables>;
export const PlanningMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"PlanningMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"planningMeeting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultPlanningMeeting"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultPlanningMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlanningMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"animalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableAnimals"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"animalVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nameVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"votableNames"}},{"kind":"Field","name":{"kind":"Name","value":"votingResult"}},{"kind":"Field","name":{"kind":"Name","value":"nameVotingStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueEstimation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"countdownSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"estimationStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"median"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"finalResult"}},{"kind":"Field","name":{"kind":"Name","value":"issueId"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"votedFor"}},{"kind":"Field","name":{"kind":"Name","value":"userVotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sprintGoalVoting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finished"}},{"kind":"Field","name":{"kind":"Name","value":"nonSprintIssueIds"}},{"kind":"Field","name":{"kind":"Name","value":"sprintIssueIds"}}]}}]}}]} as unknown as DocumentNode<PlanningMeetingSubscription, PlanningMeetingSubscriptionVariables>;
export const ProjectMainQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProjectMainQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectMain"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectMain"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"currentSprintNumber"}},{"kind":"Field","name":{"kind":"Name","value":"projectSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imsSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imsName"}},{"kind":"Field","name":{"kind":"Name","value":"imsIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imsProjectUrl"}},{"kind":"Field","name":{"kind":"Name","value":"issueStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"codeRepositorySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repositories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mdiIcon"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"definitionOfDone"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","name":{"kind":"Name","value":"implies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","name":{"kind":"Name","value":"implies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProjectMainQueryQuery, ProjectMainQueryQueryVariables>;
export const AllProjectsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllProjectsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectPrivileges"}}]}}]}}]}}]} as unknown as DocumentNode<AllProjectsQueryQuery, AllProjectsQueryQueryVariables>;
export const CreateProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProjectInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectMain"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectMain"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"currentSprintNumber"}},{"kind":"Field","name":{"kind":"Name","value":"projectSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imsSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imsName"}},{"kind":"Field","name":{"kind":"Name","value":"imsIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imsProjectUrl"}},{"kind":"Field","name":{"kind":"Name","value":"issueStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"codeRepositorySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repositories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mdiIcon"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"definitionOfDone"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","name":{"kind":"Name","value":"implies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","name":{"kind":"Name","value":"implies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateProjectMutation, CreateProjectMutationVariables>;
export const UpdateProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProjectInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectMain"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectMain"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"currentSprintNumber"}},{"kind":"Field","name":{"kind":"Name","value":"projectSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imsSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imsName"}},{"kind":"Field","name":{"kind":"Name","value":"imsIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imsProjectUrl"}},{"kind":"Field","name":{"kind":"Name","value":"issueStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"codeRepositorySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repositories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mdiIcon"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"definitionOfDone"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","name":{"kind":"Name","value":"implies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","name":{"kind":"Name","value":"implies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"required"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateProjectMutation, UpdateProjectMutationVariables>;
export const DeleteProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}]}]}}]} as unknown as DocumentNode<DeleteProjectMutation, DeleteProjectMutationVariables>;
export const ChangeRetrospectiveMeetingPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangeRetrospectiveMeetingPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RetrospectiveMeetingPage"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateRetrospectiveMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RetrospectiveMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"goldChallengeReward"}},{"kind":"Field","name":{"kind":"Name","value":"streakRewards"}},{"kind":"Field","name":{"kind":"Name","value":"baseRewards"}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"columns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"thumbsUpBy"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ChangeRetrospectiveMeetingPageMutation, ChangeRetrospectiveMeetingPageMutationVariables>;
export const AddCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"columnId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateRetrospectiveMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columnId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"columnId"}}},{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RetrospectiveMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"goldChallengeReward"}},{"kind":"Field","name":{"kind":"Name","value":"streakRewards"}},{"kind":"Field","name":{"kind":"Name","value":"baseRewards"}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"columns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"thumbsUpBy"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AddCommentMutation, AddCommentMutationVariables>;
export const EditCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateRetrospectiveMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"commentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RetrospectiveMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"goldChallengeReward"}},{"kind":"Field","name":{"kind":"Name","value":"streakRewards"}},{"kind":"Field","name":{"kind":"Name","value":"baseRewards"}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"columns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"thumbsUpBy"}}]}}]}}]}}]}}]} as unknown as DocumentNode<EditCommentMutation, EditCommentMutationVariables>;
export const DeleteCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateRetrospectiveMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"commentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RetrospectiveMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"goldChallengeReward"}},{"kind":"Field","name":{"kind":"Name","value":"streakRewards"}},{"kind":"Field","name":{"kind":"Name","value":"baseRewards"}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"columns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"thumbsUpBy"}}]}}]}}]}}]}}]} as unknown as DocumentNode<DeleteCommentMutation, DeleteCommentMutationVariables>;
export const ThumbsUpCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ThumbsUpComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateRetrospectiveMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thumbsUpComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"commentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RetrospectiveMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"goldChallengeReward"}},{"kind":"Field","name":{"kind":"Name","value":"streakRewards"}},{"kind":"Field","name":{"kind":"Name","value":"baseRewards"}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"columns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"thumbsUpBy"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ThumbsUpCommentMutation, ThumbsUpCommentMutationVariables>;
export const FinishRetroMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FinishRetroMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateRetrospectiveMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finishMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RetrospectiveMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"goldChallengeReward"}},{"kind":"Field","name":{"kind":"Name","value":"streakRewards"}},{"kind":"Field","name":{"kind":"Name","value":"baseRewards"}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"columns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"thumbsUpBy"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FinishRetroMeetingMutation, FinishRetroMeetingMutationVariables>;
export const AwardMedalsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AwardMedals"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateRetrospectiveMeeting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"awardMedals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RetrospectiveMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"goldChallengeReward"}},{"kind":"Field","name":{"kind":"Name","value":"streakRewards"}},{"kind":"Field","name":{"kind":"Name","value":"baseRewards"}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"columns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"thumbsUpBy"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AwardMedalsMutation, AwardMedalsMutationVariables>;
export const CreateRetrospectiveMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRetrospectiveMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RetrospectiveMeetingInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRetrospectiveMeeting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RetrospectiveMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"goldChallengeReward"}},{"kind":"Field","name":{"kind":"Name","value":"streakRewards"}},{"kind":"Field","name":{"kind":"Name","value":"baseRewards"}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"columns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"thumbsUpBy"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateRetrospectiveMeetingMutation, CreateRetrospectiveMeetingMutationVariables>;
export const RetrospectiveMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"RetrospectiveMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"retrospectiveMeeting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Meeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingType"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultRetrospectiveMeeting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RetrospectiveMeeting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bronzeMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"silverMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"goldMedalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"goldChallengeReward"}},{"kind":"Field","name":{"kind":"Name","value":"streakRewards"}},{"kind":"Field","name":{"kind":"Name","value":"baseRewards"}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"columns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"thumbsUpBy"}}]}}]}}]}}]}}]} as unknown as DocumentNode<RetrospectiveMeetingSubscription, RetrospectiveMeetingSubscriptionVariables>;
export const ShopDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Shop"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shopItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShopItem"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShopItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShopItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]} as unknown as DocumentNode<ShopQuery, ShopQueryVariables>;
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