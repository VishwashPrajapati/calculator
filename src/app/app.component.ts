import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  readyForNewNum = true;
  oldvalue = "";
  operator = "";
  value = '0';
  calvalue = [
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, "=", "c", "/"]
  ];





  getnumber(num) {
    console.warn(num);
    if (Number(num)) {
      if (this.readyForNewNum)
        this.value = '' + num;
      else
        this.value += '' + num;
      this.readyForNewNum = false
    }
    else if (!Number(num) && num === "c") {
      this.value = '0';
      this.readyForNewNum = true
    }
    else if (num === "=") {
      if (this.operator === 'x')
        this.value = '' + (parseInt(this.oldvalue) * parseInt(this.value));
      else if (this.operator === '-')
        this.value = '' + (parseInt(this.oldvalue) - parseInt(this.value));
      else if (this.operator === '+')
        this.value = '' + (parseInt(this.oldvalue) + parseInt(this.value));
      else if (this.operator === '/')
        this.value = '' + (parseInt(this.oldvalue) / parseInt(this.value));
      this.readyForNewNum = true;
    }
    else {
      this.readyForNewNum = true
      this.operator = num;
      this.oldvalue = this.value;
    }
  }





  // getnumber(symbol) {
  //   console.log(symbol);
  //   if (Number(symbol)) {
  //     console.log('is a number');
  //     if (this.readyForNewNum)
  //       this.value = '' + symbol;
  //     else
  //       this.value += '' + symbol;
  //     this.readyForNewNum = false;
  //   }
  //   else if (symbol === 'c') {
  //     this.value = '0';
  //     this.readyForNewNum = true;
  //   }
  //   else if (symbol === '=') {
  //     if (this.operator === 'x')
  //       this.value = '' + (parseInt(this.oldvalue) * parseInt(this.value));
  //     else if (this.operator === '-')
  //       this.value = '' + (parseInt(this.oldvalue) - parseInt(this.value));
  //     else if (this.operator === '+')
  //       this.value = '' + (parseInt(this.oldvalue) + parseInt(this.value));
  //     else if (this.operator === '/')
  //       this.value = '' + (parseInt(this.oldvalue) / parseInt(this.value));
  //     this.readyForNewNum = true;
  //   }
  //   else { // operator
  //     this.readyForNewNum = true;
  //     this.oldvalue = this.value;
  //     this.operator = symbol;
  //   }
  // }

}


