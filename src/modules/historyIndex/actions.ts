import { AnyAction, createAction } from "@reduxjs/toolkit";

export type Action = | AnyAction | ReturnType<typeof undo> | ReturnType<typeof redo>;

const undo = createAction<number>("UNDO");
const redo = createAction("REDO");

export { undo, redo };