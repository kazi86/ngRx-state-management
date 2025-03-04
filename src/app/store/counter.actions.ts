import {Action, createAction, props} from "@ngrx/store";

// export const increment = createAction('[Counter] Increment',props<{value:number}>())

export class IncrementAction implements Action{
  readonly type: string = "[Counter] Increment";

  //defining the data to be dispatched
  constructor(public value:number) {}

}

export type CounterActions = IncrementAction;
