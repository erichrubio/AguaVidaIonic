import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-peso-auto',
  templateUrl: './peso-auto.page.html',
  styleUrls: ['./peso-auto.page.scss'],
})
export class PesoAutoPage implements OnInit {

  public peso_auto_form: FormGroup;

  // final value to display
  public peso_auto_str: string = "";

  public peso_auto_val: number;

  constructor(

  ) { }

  ngOnInit() {
    this.peso_auto_form = new FormGroup({
      t_solucion: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.min(0.001)
      ])),
      caudal: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.min(0.001)
      ])),
      c_reservorio: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.min(0.001)
      ])),
      p_cloro: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.min(0.001)
      ]))
    })
  }

  onSubmit(values: { t_solucion: number; caudal: number; c_reservorio: number; p_cloro: number; }) {
    console.log('peso_auto submit button clicked.');
    console.log(values);

    let c: number = values.caudal;
    let v: number = values.t_solucion;
    let d: number = values.c_reservorio;
    let g: number;
    if (c < 1.38) {
        g = 1;
    } else if (c < 2.75) {
        g = 2;
    } else if (c < 5.50) {
        g = 4;
    } else {
        g = 5;
    }

    let r: number = 0.36 * (v * c * d) / (g * values.p_cloro);
    // kg to grams
    r = r * 1000

    this.peso_auto_val = r;

    let dias = v / (g * 24);

    this.peso_auto_str = "Peso de cloro = " + r.toFixed(0) + " gramos cada " + dias.toFixed(1) + " días";
  }

}
