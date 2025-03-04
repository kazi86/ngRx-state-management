import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {IncrementAction} from "../store/counter.actions";

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent implements OnInit{

  constructor(private store : Store) {}

  public ngOnInit() {}

  public increment() {

    this.store.dispatch(new IncrementAction(4));

  }

  public decrement(){}

}
