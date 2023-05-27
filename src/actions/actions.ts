import { Point } from '../utils/type';

const BEGIN_STROKE = "BEGIN_STROKE";
const UPDATE_STROKE = "UPDATE_STROKE";
const SET_STROKE_COLOR = "SET_STROKE_COLOR";


export type Action = |
 { 
    type: typeof BEGIN_STROKE,
    payload: Point
 } |
 {
    type: typeof UPDATE_STROKE,
    payload: Point
 } | 
 {
   type: typeof SET_STROKE_COLOR,
   payload: string
 }

 const beginStroke = (x: number, y: number) => {
    return { type: BEGIN_STROKE, payload: { x, y } }
 }

 const updateStroke = (x: number, y: number) => {
    return { type: UPDATE_STROKE, payload: { x, y } }
 }

 const setStrokeColor = (color: string) => {
   return {
      type: SET_STROKE_COLOR,
      payload: color
   }
 }


 export { 
   BEGIN_STROKE, 
   UPDATE_STROKE, 
   SET_STROKE_COLOR,
   beginStroke, 
   updateStroke, 
   setStrokeColor,
};