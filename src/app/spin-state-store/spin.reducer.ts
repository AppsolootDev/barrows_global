import { Segment } from './../entity/segments';
import { ActionReducer, createReducer, INIT, on, UPDATE } from "@ngrx/store";
import { resetSegment, resetSpin, setSpin } from './spin.action';

export const initialSpinState: Segment[] = [];

export const spinReducer = createReducer(
  initialSpinState,
  on(setSpin, (state, segment) => {
    const spinStateClone: Segment[] = JSON.parse(JSON.stringify(state));
    if(spinStateClone.length == 0) {
    spinStateClone.push(segment);
    }
    return spinStateClone;
  }),

  on(resetSegment, _ => []),

  on(resetSpin, (state, segment) => {
    const spinStateClone: Segment[] = JSON.parse(JSON.stringify(state));
    const found = spinStateClone.find((entry) => entry.id === segment.id);
      if (found) {
        spinStateClone.splice(spinStateClone.indexOf(found), 1);
      }
      return spinStateClone;
  })
);

export const metaReducerLocalStorage = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return (state, action) => {
    if (action.type === INIT || action.type == UPDATE) {
      const storageValue = localStorage.getItem("state");
      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          localStorage.removeItem("state");
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem("state", JSON.stringify(nextState));
    return nextState;
  };
};
