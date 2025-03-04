import {Action, createReducer, on} from "@ngrx/store";
import {decrement, increment} from "./counter.actions";

const initialState = 0;

export const counterReducer = createReducer(initialState,
  on(increment,(state,action:any)=> {
    if(action.type === '[Counter] Increment') {

      return state + action.value
    }
    return state;
  }),
  on(decrement,(state,action:any)=>{
    if(action.type === '[Counter] Decrement'){

        return state - action.value

      }
    return state;

    })
  );

// export function counterReducer(state = initialState, action:CounterActions | Action){
//
//   if(action.type === '[Counter] Increment'){
//     return state + (action as IncrementAction).value;
//   }
//
//   return state;
// }
