
import {createEffect,Actions,ofType} from '@ngrx/effects'
import {tap} from "rxjs";
import {decrement, increment} from "./counter.actions";
import {Injectable} from "@angular/core";

@Injectable()
export class CountEffects{
  public saveCount = createEffect(()=>{

    return this.action$.pipe(ofType(increment,decrement),tap((action:any)=>{
      localStorage.setItem('count',(action.value).toString())
    }));

  },{dispatch : false});

  constructor(public action$ : Actions) {}

}
