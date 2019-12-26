import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cloro-botella',
  templateUrl: './cloro-botella.page.html',
  styleUrls: ['./cloro-botella.page.scss'],
})
export class CloroBotellaPage implements OnInit {

  public botella_form: FormGroup;

  // final value to display
  public botella_str_1 = "";
  public botella_str_2 = "";
  public botella_str_3 = "";

  public botella_val: number;

  constructor() { }

  ngOnInit() {
    this.botella_form = new FormGroup({
      densidad: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.min(0.001)
      ])),
      tamano: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.min(0.001)
      ]))
    })
  }

  onSubmit(
    values: {
      densidad: number;
      tamano: number;
    }) {
    console.log('botella submit button clicked.');
    console.log(values);

    this.botella_val = (
      // g/mL * L * 1000mL/1L = grams
      values.densidad * values.tamano * 1000
    );

    this.botella_str_1 = this.botella_val.toFixed(0) + " gramos llena";
    this.botella_str_2 = (this.botella_val/2).toFixed(0) + " gramos en la mitad";
    this.botella_str_3 = (this.botella_val/4).toFixed(0) + " gramos en el cuarto";
  }

}
