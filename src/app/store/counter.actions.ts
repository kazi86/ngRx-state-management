import {Action, createAction, props} from "@ngrx/store";


export const init = createAction('[Counter] Init');

export const set = createAction('[Counter] Set',props<{value:number}>())

export const increment = createAction('[Counter] Increment',props<{value:number}>())

export const decrement = createAction('[Counter] Decrement',props<{value: number}>())

// export class IncrementAction implements Action{
//   readonly type: string = "[Counter] Increment";
//
//   //defining the data to be dispatched
//   constructor(public value:number) {}
//
// }

// export type CounterActions = IncrementAction;
