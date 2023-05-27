import { RootState } from "../../utils/type";
import { Action, END_STROKE } from './actions';

export const reducer = (
    state: RootState["strokes"] = [],
    action: Action
) => {
    switch (action.type) {
        case END_STROKE: {
          const { historyIndex, stroke } = action.payload
          if (!stroke.points.length) {
            return state
          }
          return [...state.slice(0, state.length - historyIndex), stroke]
        }
        default:
          return state
      }
}