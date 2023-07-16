// nested object types 

type CounterChangePayload = {
  color: string,
  count: number
}

type AssignColorPayload = {
  color: string
}

type InitColorsPayload = {
  playerCount: number,
  id: number
}

type ChangeLifePayload = {
  id: number,
  life: number
}

// Component Prop Types

export type LifeButtonProps = {
  change: number,
  life: number,
  cls?: string,
  dispatch: Function,
  id?: number
};

export type CommonTemplateProps = {
  drawerChildren: React.ReactElement,
  children: React.ReactElement
};

export type DrawerProps = {
  children: React.ReactNode,
  drawerActive?: boolean
}

// Common object types

export type Section = {
  id: number,
  life: number,
  flip: boolean,
  name: string
}

export type CountersObject = {
  [key: string]: number
}

// Reducer types

export type LifeSectionState = {
  colors: string[],
  counters: CountersObject
}

export type LifeSectionsAction =
  | { type: "CHANGE_COUNTER"; payload: CounterChangePayload }
  | { type: "ASSIGN_COLOR"; payload: AssignColorPayload }
  | { type: "INIT_COLORS"; payload: InitColorsPayload };

export type LifetrackerState = {
  sections: Section[],
  startingLife: number,
  playerCount: number,
  multiplayerMode: boolean
}

export type LifeTrackerAction =
  | { type: "RESET_LIFE" }
  | { type: "SET_MULTIPLAYER_MODE"; payload: boolean }
  | { type: "SET_STARTING_LIFE"; payload: number }
  | { type: "SET_PLAYER_COUNT"; payload: number }
  | { type: "CHANGE_LIFE"; payload: ChangeLifePayload }
  