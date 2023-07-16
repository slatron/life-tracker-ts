import { Section, LifetrackerState, LifeTrackerAction } from "../types"

export const MULTIPLAYER_MODE = false
export const STARTING_LIFE = 20
export const STARTING_PLAYERS = 2

export const initSections = ({playerCount, startingLife, multiplayerMode}: {playerCount: number, startingLife: number, multiplayerMode: boolean}) : Section[] => {
  return Array.from(new Array(playerCount), (x,i) => {
    return {
      id: i + 1,
      life: startingLife,
      flip: multiplayerMode && (i < (playerCount / 2)),
      name: `Player ${i + 1}`
    }    
  })
}

export const initialState = {
  multiplayerMode: false,
  startingLife: 20,
  playerCount: STARTING_PLAYERS,
  sections: initSections({
    playerCount: STARTING_PLAYERS,
    startingLife: STARTING_LIFE,
    multiplayerMode: MULTIPLAYER_MODE
  })
}

export const reducer = (state: LifetrackerState, action: LifeTrackerAction) => {
  switch (action.type) {
    case 'RESET_LIFE': {
      state.sections.forEach(s => s.life = state.startingLife)
      return {...state,
        sections: [...state.sections]
      };
    }
    case 'SET_MULTIPLAYER_MODE': {
      state.sections.forEach(s => s.flip = action.payload && ((s.id - 1) < (state.playerCount / 2)))
      return {...state,
        multiplayerMode: action.payload,
        sections: [...state.sections]
      };
    }
    case 'SET_STARTING_LIFE': {
      return {...state,
        startingLife: action.payload,
        sections: initSections({
          playerCount: state.playerCount,
          startingLife: action.payload,
          multiplayerMode: state.multiplayerMode
        })
      };
    }
    case 'SET_PLAYER_COUNT': {
      return {...state,
        playerCount: action.payload,
        sections: initSections({
          playerCount: action.payload,
          startingLife: state.startingLife,
          multiplayerMode: state.multiplayerMode
        })
      };
    }
    case 'CHANGE_LIFE': {
      const {id, life} = action.payload
      const section = state.sections.find(s => s.id === id)
      if (section) section.life = life
      return {...state,
        sections: [...state.sections]
      };
    }
    
  }
  return state
}
