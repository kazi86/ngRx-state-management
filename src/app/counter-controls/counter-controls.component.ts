import {Component, OnInit} from '@angular/core';

import {Store} from "@ngrx/store";
import {decrement, increment} from "../store/counter.actions";
import {describeResolvedType} from "@angular/compiler-cli/src/ngtsc/partial_evaluator";

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent implements OnInit{

  constructor(private store : Store) {}

  public ngOnInit() {}

  public increment() {

    this.store.dispatch(increment({value : 2}));

  }

  public decrement(){

    this.store.dispatch(decrement({value : 2}));

  }

}
