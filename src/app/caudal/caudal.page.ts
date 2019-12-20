import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-caudal',
  templateUrl: './caudal.page.html',
  styleUrls: ['./caudal.page.scss'],
})
export class CaudalPage implements OnInit {

  public caudal_form: FormGroup;

  // final value to display
  public caudal_value = "";

  constructor(

  ) { }

  ngOnInit() {
    this.caudal_form = new FormGroup({
      balde: new FormControl(null, Validators.required),
      t1: new FormControl(null, Validators.required),
      t2: new FormControl(null, Validators.required),
      t3: new FormControl(null, Validators.required)
    })
  }

  onSubmit(values: { t1: number; t2: number; t3: number; balde: number; }) {
    console.log('Caudal submit button clicked.');
    console.log(values);

    var m = values.balde / ((values.t1 + values.t2 + values.t3) / 3) ;
    console.log(m);

    this.caudal_value = "Caudal = " + m.toFixed(1) + " litros por segundo";
  }

}
