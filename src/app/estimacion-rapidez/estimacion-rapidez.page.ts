import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-estimacion-rapidez',
  templateUrl: './estimacion-rapidez.page.html',
  styleUrls: ['./estimacion-rapidez.page.scss'],
})
export class EstimacionRapidezPage implements OnInit {

  public estimacion_rapidez_form: FormGroup;

  // final value to display
  public estimacion_str: string = "";

  public estimacion_val: number;

  constructor(

  ) { }

  ngOnInit() {
    this.estimacion_rapidez_form = new FormGroup({
      tamano: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.min(0.001)
      ])),
      segundos: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.min(0.001)
      ]))
    })
  }

  onSubmit(values: { tamano: number; segundos: number; }) {
    console.log('estimacion_rapidez submit button clicked.');
    console.log(values);

    var r = values.tamano / values.segundos * 60;
    console.log(r);
    this.estimacion_val = r;

    this.estimacion_str = "Rapidez de goteo = " + this.estimacion_val.toFixed(1) + " mililitros por minuto";
  }

}
