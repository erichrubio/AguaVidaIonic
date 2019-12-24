import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-peso-goteos',
  templateUrl: './peso-goteos.page.html',
  styleUrls: ['./peso-goteos.page.scss'],
})
export class PesoGoteosPage implements OnInit {

  public peso_goteos_form: FormGroup;

  // final value to display
  public peso_goteos_str: string = "";

  public peso_goteos_val: number;

  constructor(

  ) { }

  ngOnInit() {
    this.peso_goteos_form = new FormGroup({
      caudal: new FormControl(null, Validators.required),
      c_reservorio: new FormControl(null, Validators.required),
      p_cloro: new FormControl(null, Validators.required),
      dias: new FormControl(null, Validators.required)
    })
  }

  onSubmit(
    values: {
      caudal: number;
      c_reservorio: number;
      p_cloro: number;
      dias: number
    }) {
    console.log('peso_goteos submit button clicked.');
    console.log(values);
    var d = values.dias;

    this.peso_goteos_val = (
      // volume of water in a day (L)
      (values.caudal * 24 * 60 * 60) *
      // desired concentration (mg/L)
      values.c_reservorio *
      // adjust for dias de recarga
      d
    ) /
    (
      // proportion of cloro (changed from percent to proportion)
      (values.p_cloro / 100) *
      // change from mg to gramos
      1000
    );

    let s_dias = "" + d + " dias";
    if(d == 1) { s_dias = "dia" }

    this.peso_goteos_str = "Peso de cloro = " + Math.round(this.peso_goteos_val) + " gramos cada " + s_dias;
  }

}
