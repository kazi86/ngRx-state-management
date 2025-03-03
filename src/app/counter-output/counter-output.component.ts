import { Component, OnDestroy, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {

  public count$ : Observable<number> =  new Observable();

  constructor(private store : Store<{counter:number}>) {}

  public ngOnInit() {

    this.count$ = this.store.select('counter');

  }
}
