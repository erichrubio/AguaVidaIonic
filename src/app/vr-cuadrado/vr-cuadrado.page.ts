import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vr-cuadrado',
  templateUrl: './vr-cuadrado.page.html',
  styleUrls: ['./vr-cuadrado.page.scss'],
})
export class VrCuadradoPage implements OnInit {

  public vr_cubo_form: FormGroup;

  // final value to display
  public vr_cubo_str: string = "";

  public vr_cubo_val: number;

  constructor() { }

  ngOnInit() {
    this.vr_cubo_form = new FormGroup({
      largo_t: new FormControl(null, Validators.required),
      ancho_t: new FormControl(null, Validators.required),
      altura_t:  new FormControl(null, Validators.required)
    })
  }

  onSubmit(
    values: {
      largo_t: number;
      ancho_t: number;
      altura_t: number;
    }) {
    console.log('vr-cubo submit button clicked.');
    console.log(values);

    let meters = values.largo_t * values.ancho_t * values.altura_t;
    this.vr_cubo_val = meters * 1000;


    this.vr_cubo_str = this.vr_cubo_val.toFixed(0) + " litros";
  }

}
