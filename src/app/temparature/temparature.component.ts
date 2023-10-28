import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temparature',
  templateUrl: './temparature.component.html',
  styleUrls: ['./temparature.component.css']
})
export class TemparatureComponent {
  cel: Number = 0;
  fah: Number = 0;

  ngOnInit() {

  }
  
  getCelsius() {
    const newCel = ((Number(this.cel) * (9/5)) + 32);
    this.fah = newCel;
  }

  getFahrenheit() {
    const newFah = ((Number(this.fah) - 32) * (5/9));
    this.cel = newFah;
  }
}
