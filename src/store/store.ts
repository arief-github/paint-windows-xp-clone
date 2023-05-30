import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import  historyIndex  from "../modules/historyIndex/slice";
import { currentStroke } from "../modules/currentStroke/slice";
import strokes from '../modules/strokes/slice';

export const store = configureStore({
  reducer: {
    historyIndex,
    strokes,
    currentStroke
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger)
})