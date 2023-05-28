import { AnyAction, createAction } from '@reduxjs/toolkit';
import { Point } from '../../utils/type';

export type Action = 
| AnyAction
| ReturnType<typeof beginStroke>
| ReturnType<typeof updateStroke>
| ReturnType<typeof setStrokeColor>

const beginStroke = createAction<Point>("BEGIN_STROKE");
const updateStroke = createAction<Point>("UPDATE_STROKE");
const setStrokeColor = createAction<string>("SET_STROKE_COLOR");

export { beginStroke, updateStroke, setStrokeColor };