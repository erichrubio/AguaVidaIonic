import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vr-cilindro',
  templateUrl: './vr-cilindro.page.html',
  styleUrls: ['./vr-cilindro.page.scss'],
})
export class VrCilindroPage implements OnInit {

  public vr_cilindro_form: FormGroup;

  // final value to display
  public vr_cilindro_str: string = "";

  public vr_cilindro_val: number;

  constructor() { }

  ngOnInit() {
    this.vr_cilindro_form = new FormGroup({
      diametro_t: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.min(0.001)
      ])),
      altura_t: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.min(0.001)
      ]))
    })
  }

  onSubmit(
    values: {
      diametro_t: number;
      altura_t: number;
    }) {
    console.log('vr-cilindro submit button clicked.');
    console.log(values);

    let radius = (values.diametro_t / 2);
    let meters = Math.PI * (radius * radius) * values.altura_t;
    console.log(meters);
    this.vr_cilindro_val = meters * 1000;


    this.vr_cilindro_str = this.vr_cilindro_val.toFixed(0) + " litros";
  }

}
