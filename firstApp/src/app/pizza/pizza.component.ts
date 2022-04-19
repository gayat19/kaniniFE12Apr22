import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

import { Pizza } from '../models/pizza';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
@Input() pizza:any;
@Output() likeEvent = new EventEmitter<number>();
  constructor() { 

  }
  like(val:any){
    this.likeEvent.emit(val);
  }
  ngOnInit(): void {
  }

}
