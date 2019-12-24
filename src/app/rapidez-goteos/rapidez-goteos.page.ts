import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rapidez-goteos',
  templateUrl: './rapidez-goteos.page.html',
  styleUrls: ['./rapidez-goteos.page.scss'],
})
export class RapidezGoteosPage implements OnInit {

  public rapidez_goteos_form: FormGroup;

  // final value to display
  public rapidez_goteos_str: string = "";

  public rapidez_goteos_val: number;

  constructor() { }

  ngOnInit() {
    this.rapidez_goteos_form = new FormGroup({
      l_solucion: new FormControl(null, Validators.required),
      d_recarga: new FormControl(null, Validators.required)
    })
  }

  onSubmit(
    values: {
      l_solucion: number;
      d_recarga: number;
    }) {
    console.log('rapidez_goteos submit button clicked.');
    console.log(values);

    this.rapidez_goteos_val = (
      // size of solucion madre (mL)
      (values.l_solucion * 1000) /
      // convert days to minutes (min)
      (values.d_recarga * 24 * 60)
    )

    this.rapidez_goteos_str = this.rapidez_goteos_val.toFixed(1) + " mL cada minuto";
  }

}
