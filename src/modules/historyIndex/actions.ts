import { Stroke } from '../../utils/type';

const UNDO = "UNDO";
const REDO = "REDO";
const END_STROKE = "END_STROKE";

export type HistoryIndexAction = 
    | {
        type: typeof UNDO,
        payload: number
      }
    |
      {
        type: typeof REDO
      }
    | 
      {
        type: typeof END_STROKE
        payload: { stroke: Stroke, historyIndex: number  }
      }

const undo = (undoLimit: number) => {
    return { type: UNDO, payload: undoLimit }
}

const redo = () => {
    return { type: REDO }
}

export { UNDO, undo, REDO, redo, END_STROKE }