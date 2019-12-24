import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-desinfeccion',
  templateUrl: './desinfeccion.page.html',
  styleUrls: ['./desinfeccion.page.scss'],
})
export class DesinfeccionPage implements OnInit {

  public desinfeccion_form: FormGroup;

  // final value to display
  public desinfeccion_str: string = "";

  public desinfeccion_val: number;

  constructor() { }

  ngOnInit() {
    this.desinfeccion_form = new FormGroup({
      v_reservorio: new FormControl(null, Validators.required),
      c_reservorio: new FormControl(null, Validators.required),
      p_cloro:  new FormControl(null, Validators.required)
    })
  }

  onSubmit(
    values: {
      v_reservorio: number;
      c_reservorio: number;
      p_cloro: number;
    }) {
    console.log('desinfeccion submit button clicked.');
    console.log(values);

    this.desinfeccion_val = (
      // liters * (mg/L) * 1g/1000mg = grams
      (values.v_reservorio * values.c_reservorio / 1000) /
      // change percent to decimal (no units)
      (values.p_cloro / 100)
    );

    this.desinfeccion_str = this.desinfeccion_val.toFixed(1) + " gramos";
  }

}
