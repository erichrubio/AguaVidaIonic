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
  public botella_value_1 = "";
  public botella_value_2 = "";
  public botella_value_3 = "";

  constructor() { }

  ngOnInit() {
    this.botella_form = new FormGroup({
      densidad: new FormControl(null, Validators.required),
      tamano: new FormControl(null, Validators.required)
    })
  }

  onSubmit(
    values: {
      densidad: number;
      tamano: number;
    }) {
    console.log('botella submit button clicked.');
    console.log(values);

    let r = (
      // g/mL * L * 1000mL/1L = grams
      values.densidad * values.tamano * 1000
    );

    this.botella_value_1 = r.toFixed(0) + " gramos llena";
    this.botella_value_2 = (r/2).toFixed(0) + " gramos en la mitad";
    this.botella_value_3 = (r/4).toFixed(0) + " gramos en el cuarto";
  }

}
