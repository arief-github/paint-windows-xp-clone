  import { RootState } from "../../utils/type"
  import { beginStroke, updateStroke, setStrokeColor } from './actions';
  import { endStroke } from '../sharedActions';
import { createReducer } from "@reduxjs/toolkit";
  
  const initialState: RootState["currentStroke"] = {
    points: [],
    color: "#000"
  }

  export const reducer = createReducer(initialState, (builder) => {
    builder.addCase(beginStroke, (state, action) => {
      state.points = [action.payload]
    })

    builder.addCase(updateStroke, (state, action) => {
      state.points.push(action.payload)
    })

    builder.addCase(setStrokeColor,(state, action) => {
      state.color = action.payload
    })

    builder.addCase(endStroke, (state) => {
      state.points = []
    })
  })

  