import { RootState } from "../../utils/type";

const strokesLengthSelector = (state: RootState) => state.strokes.length;
const strokesSelector = (state: RootState) => state.strokes; 

export { strokesLengthSelector, strokesSelector };