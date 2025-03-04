import { Component, OnDestroy, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from "@ngrx/store";
import {selectCount, selectDoubleCount} from "../store/counter.selectors";

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {

  public count$ : Observable<number> =  new Observable();

  public doubleCount$ :Observable<number> = new Observable<number>();

  constructor(private store : Store<{counter:number}>) {}

  public ngOnInit() {

    this.count$ = this.store.select(selectCount);
    this.doubleCount$ = this.store.select(selectDoubleCount);

  }
}
