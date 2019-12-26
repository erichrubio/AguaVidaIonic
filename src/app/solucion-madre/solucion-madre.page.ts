import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-solucion-madre',
  templateUrl: './solucion-madre.page.html',
  styleUrls: ['./solucion-madre.page.scss'],
})
export class SolucionMadrePage implements OnInit {

  public c_solucion_form: FormGroup;

  // final value to display
  public c_solucion_str: string = "";

  public c_solucion_val: number;

  constructor() { }

  ngOnInit() {
    this.c_solucion_form = new FormGroup({
      l_solucion: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.min(0.001)
      ])),
      peso_cloro: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.min(0.001)
      ])),
      p_cloro: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.min(0.001)
      ]))
    })
  }

  onSubmit(
    values: {
      l_solucion: number;
      peso_cloro: number;
      p_cloro: number;
    }) {
    console.log('c_solucion submit button clicked.');
    console.log(values);

    let r1 = (values.peso_cloro * (values.p_cloro / 100)) / values.l_solucion;
    this.c_solucion_val = (r1 * 1000);

    this.c_solucion_str = r1.toFixed(1) + " gramos/Litro o " + Math.round(this.c_solucion_val) + " miligramos/Litro - ppm";
  }

}
