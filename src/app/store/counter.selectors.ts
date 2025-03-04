import {createSelector} from "@ngrx/store";

export const selectCount = (state:any)=>state.counter;
export const selectDoubleCount = createSelector(selectCount,(state)=>state*2);
