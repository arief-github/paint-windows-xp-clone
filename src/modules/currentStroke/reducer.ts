  import { RootState } from "../../utils/type"
  import { Action, beginStroke, updateStroke, setStrokeColor } from './actions';
  import { endStroke } from '../sharedActions';
  
  const initialState: RootState["currentStroke"] = {
    points: [],
    color: "#000"
  }
  
  export const reducer = (
    state: RootState["currentStroke"] = initialState,
    action: Action
  ) => {
    switch (action.type) {
      case beginStroke.toString(): {
        return { ...state, points: [action.payload] }
      }
      case updateStroke.toString(): {
        return {
          ...state,
          points: [...state.points, action.payload]
        }
      }
      case setStrokeColor.toString(): {
        return {
          ...state,
          color: action.payload
        }
      }
      case endStroke.toString(): {
        return {
          ...state,
          points: []
        }
      }
      default:
        return state
    }
  }

  