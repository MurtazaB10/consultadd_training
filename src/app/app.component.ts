import { CurrencyApiService } from './currency-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  input = {
    name: "",
    value: 0
  }
  output = {
    name: "",
    value: 0
  }
  constructor(private data : CurrencyApiService){}
  curr:any = [];
  calc() {
    if(this.input.name === this.output.name){
      this.output.value = this.input.value;
      return;
    }
    this.data.getCurrencyData(this.input.name).subscribe(value => {
      this.curr = value;
      let c = this.output.name;
      this.output.value = this.input.value * this.curr.rates[c];
    });
  }
}
