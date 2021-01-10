import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  result = false;
  count = 0;
  countArray = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleResult(){
    this.result = !this.result;
    this.count++;
    this.countArray.push(this.count);
  }

  getColor(){
    return this.count >= 5 ? 'blue' : 'transparent';
  }

}
