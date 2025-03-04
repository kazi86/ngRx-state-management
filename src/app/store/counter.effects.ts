
import {createEffect,Actions,ofType} from '@ngrx/effects'
import {of, switchMap, tap, withLatestFrom} from "rxjs";
import {decrement, increment, set} from "./counter.actions";
import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {selectCount} from "./counter.selectors";

@Injectable()
export class CountEffects{

  public load = createEffect(()=>{

    return this.action$.pipe(ofType(set),switchMap(()=>{

      const savedCount = localStorage.getItem('count');

      if(savedCount){
        return of(set({value : +savedCount}))
      }

      return of(set({value : 0}))

    }));

  },);

  public saveCount = createEffect(()=>{

    return this.action$.pipe(
      ofType(increment,decrement),
      withLatestFrom(this.store.select(selectCount)),
      tap(([action,count])=>{
      localStorage.setItem('count',count.toString())
    }));

  },{dispatch : false});

  constructor(public action$ : Actions, public store: Store) {}

}
