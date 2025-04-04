import { createAction, props } from "@ngrx/store";
import { Segment } from "../entity/segments";


// Define the action to load the game
export const resetSegment = createAction('Clear segment');

export const resetSpin = createAction('Reset Spin',props<Segment>());

export const setSpin = createAction('Set Spin',props<Segment>());
