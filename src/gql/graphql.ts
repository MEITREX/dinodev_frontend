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
  /** A JSON scalar type */
  JsonObject: { input: any; output: any; }
  /** 24-hour clock time value string in the format `hh:mm:ss` or `hh:mm:ss.sss`. */
  LocalTime: { input: any; output: any; }
  /** An RFC-3339 compliant Full Time Scalar */
  Time: { input: any; output: any; }
  /** A universally unique identifier compliant UUID Scalar */
  UUID: { input: any; output: any; }
  /** A Url scalar */
  Url: { input: any; output: any; }
};

export enum ActionOnEvent {
  None = 'NONE'
}

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

export type EventTypeDto = {
  __typename?: 'EventTypeDto';
  action: ActionOnEvent;
  defaultVisibility: EventVisibility;
  description: Scalars['String']['output'];
  eventSchema: Scalars['JsonObject']['output'];
  identifier: Scalars['String']['output'];
};

export type EventTypeInRuleDto = {
  __typename?: 'EventTypeInRuleDto';
  dataTemplate: Scalars['JsonObject']['output'];
  eventTypeIdentifier: Scalars['String']['output'];
};

export type EventTypeInRuleDtoInput = {
  dataTemplate: Scalars['JsonObject']['input'];
  eventTypeIdentifier: Scalars['String']['input'];
};

export type EventTypeInput = {
  action: ActionOnEvent;
  defaultVisibility: EventVisibility;
  description: Scalars['String']['input'];
  eventSchema: Scalars['JsonObject']['input'];
  identifier: Scalars['String']['input'];
};

export enum EventVisibility {
  Admin = 'ADMIN',
  Game = 'GAME',
  Player = 'PLAYER'
}

export type GameDto = {
  __typename?: 'GameDto';
  additionalData: Scalars['JsonObject']['output'];
  flags: Array<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  players: Array<PlayerDto>;
  scoresAsList: Array<Score>;
};

export type GameEventDto = {
  __typename?: 'GameEventDto';
  childEvents: Array<GameEventDto>;
  data: Scalars['JsonObject']['output'];
  eventType: EventTypeDto;
  game: GameDto;
  gameId: Scalars['UUID']['output'];
  id: Scalars['UUID']['output'];
  mostRecentChildTimestamp: Scalars['DateTime']['output'];
  /**  resolved with schema mapping: */
  parentEvent?: Maybe<GameEventDto>;
  parentEventId?: Maybe<Scalars['UUID']['output']>;
  player?: Maybe<PlayerDto>;
  playerId?: Maybe<Scalars['UUID']['output']>;
  timestamp: Scalars['DateTime']['output'];
  visibility: EventVisibility;
};

export type GameEventInput = {
  data?: Scalars['JsonObject']['input'];
  eventType: Scalars['String']['input'];
  gameId: Scalars['UUID']['input'];
  parentEventId?: InputMaybe<Scalars['UUID']['input']>;
  playerId?: InputMaybe<Scalars['UUID']['input']>;
  visibility: EventVisibility;
};

export type GameInput = {
  name: Scalars['String']['input'];
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

export type Mutation = {
  __typename?: 'Mutation';
  createEvent: GameEventDto;
  createEventType: EventTypeDto;
  createGame: GameDto;
  createPlayerInGame: PlayerDto;
  createRule: RuleDto;
  deleteEventType: Scalars['Boolean']['output'];
  deleteGame: Scalars['Boolean']['output'];
  deletePlayerFromGame: Scalars['Boolean']['output'];
  deleteRule: Scalars['Boolean']['output'];
  updateEventType: EventTypeDto;
  updateGame: GameDto;
  updateRule: RuleDto;
};


export type MutationCreateEventArgs = {
  event: GameEventInput;
  gameId: Scalars['UUID']['input'];
};


export type MutationCreateEventTypeArgs = {
  eventType: EventTypeInput;
};


export type MutationCreateGameArgs = {
  game: GameInput;
};


export type MutationCreatePlayerInGameArgs = {
  gameId: Scalars['UUID']['input'];
  player: PlayerInput;
};


export type MutationCreateRuleArgs = {
  rule: RuleInput;
};


export type MutationDeleteEventTypeArgs = {
  eventTypeId: Scalars['UUID']['input'];
};


export type MutationDeleteGameArgs = {
  gameId: Scalars['UUID']['input'];
};


export type MutationDeletePlayerFromGameArgs = {
  gameId: Scalars['UUID']['input'];
  playerId: Scalars['UUID']['input'];
};


export type MutationDeleteRuleArgs = {
  ruleId: Scalars['UUID']['input'];
};


export type MutationUpdateEventTypeArgs = {
  eventType: EventTypeInput;
  eventTypeId: Scalars['UUID']['input'];
};


export type MutationUpdateGameArgs = {
  game: GameInput;
  gameId: Scalars['UUID']['input'];
};


export type MutationUpdateRuleArgs = {
  rule: RuleInput;
  ruleId: Scalars['UUID']['input'];
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

export type PlayerDto = {
  __typename?: 'PlayerDto';
  additionalData: Scalars['JsonObject']['output'];
  flags: Array<Scalars['String']['output']>;
  game: GameDto;
  name: Scalars['String']['output'];
  scoresAsList: Array<Score>;
  userId: Scalars['UUID']['output'];
};

export type PlayerInput = {
  game: Scalars['UUID']['input'];
  name: Scalars['String']['input'];
  userId: Scalars['UUID']['input'];
};

export type Query = {
  __typename?: 'Query';
  eventType: EventTypeDto;
  eventTypes: Array<EventTypeDto>;
  eventsForGame: Array<GameEventDto>;
  eventsForPlayer: Array<GameEventDto>;
  game: GameDto;
  games: Array<GameDto>;
  player: PlayerDto;
  players: Array<PlayerDto>;
  rule: RuleDto;
  rules: Array<RuleDto>;
};


export type QueryEventTypeArgs = {
  eventTypeId: Scalars['UUID']['input'];
};


export type QueryEventsForGameArgs = {
  gameId: Scalars['UUID']['input'];
  pagination?: InputMaybe<Pagination>;
};


export type QueryEventsForPlayerArgs = {
  gameId: Scalars['UUID']['input'];
  pagination?: InputMaybe<Pagination>;
  playerId: Scalars['UUID']['input'];
};


export type QueryGameArgs = {
  gameId: Scalars['UUID']['input'];
};


export type QueryGamesArgs = {
  userId?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryPlayerArgs = {
  gameId: Scalars['UUID']['input'];
  playerId: Scalars['UUID']['input'];
};


export type QueryPlayersArgs = {
  gameId: Scalars['UUID']['input'];
};


export type QueryRuleArgs = {
  ruleId: Scalars['ID']['input'];
};

export type RuleDto = {
  __typename?: 'RuleDto';
  conditionSchema: Scalars['JsonObject']['output'];
  createEventTypes: Array<EventTypeInRuleDto>;
  id: Scalars['UUID']['output'];
  triggerEventTypes: Array<Scalars['String']['output']>;
};

export type RuleInput = {
  conditionSchema: Scalars['JsonObject']['input'];
  createEventTypes: Array<EventTypeInRuleDtoInput>;
  triggerEventTypes: Array<Scalars['String']['input']>;
};

export type Score = {
  __typename?: 'Score';
  key: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

/**
 * 
 * Specifies the sort direction, either ascending or descending.
 */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
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

export type PseudoLoginQueryVariables = Exact<{
  userId: Scalars['UUID']['input'];
}>;


export type PseudoLoginQuery = { __typename?: 'Query', games: Array<{ __typename?: 'GameDto', id: any, name: string }> };

export type GetGamesQueryVariables = Exact<{
  userId: Scalars['UUID']['input'];
}>;


export type GetGamesQuery = { __typename?: 'Query', games: Array<{ __typename?: 'GameDto', id: any, name: string }> };

export type GetAllRulesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllRulesQuery = { __typename?: 'Query', rules: Array<{ __typename?: 'RuleDto', id: any, triggerEventTypes: Array<string>, createEventTypes: Array<{ __typename?: 'EventTypeInRuleDto', eventTypeIdentifier: string }> }> };


export const PseudoLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"pseudoLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"games"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<PseudoLoginQuery, PseudoLoginQueryVariables>;
export const GetGamesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getGames"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"games"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetGamesQuery, GetGamesQueryVariables>;
export const GetAllRulesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllRules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"triggerEventTypes"}},{"kind":"Field","name":{"kind":"Name","value":"createEventTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventTypeIdentifier"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllRulesQuery, GetAllRulesQueryVariables>;