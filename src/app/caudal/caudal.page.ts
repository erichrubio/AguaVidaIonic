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
  public caudal_str: string = "";

  public caudal_val: number;

  constructor(

  ) { }

  ngOnInit() {
    this.caudal_form = new FormGroup({
      balde: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.min(0.001)
      ])),
      t1: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.min(0.001)
      ])),
      t2: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.min(0.001)
      ])),
      t3: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.min(0.001)
      ]))
    })
  }

  onSubmit(values: { t1: number; t2: number; t3: number; balde: number; }) {
    console.log('Caudal submit button clicked.');
    console.log(values);

    var m = values.balde / ((values.t1 + values.t2 + values.t3) / 3) ;
    console.log(m);
    this.caudal_val = m;

    this.caudal_str = "Caudal = " + this.caudal_val.toFixed(1) + " litros por segundo";
  }

}
