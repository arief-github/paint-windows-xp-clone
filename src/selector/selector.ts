import { RootState } from '../utils/type';

const currentStrokeSelector = (state: RootState) => state.currentStroke;
const historyIndexSelector = (state: RootState) => state.historyIndex;
const strokesSelector = (state: RootState) => state.strokes

export { 
    currentStrokeSelector, 
    historyIndexSelector, 
    strokesSelector 
}