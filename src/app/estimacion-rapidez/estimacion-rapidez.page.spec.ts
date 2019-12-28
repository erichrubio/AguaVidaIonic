import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { EstimacionRapidezPage } from './estimacion-rapidez.page';

describe('EstimacionRapidezPage', () => {
  let component: EstimacionRapidezPage;
  let fixture: ComponentFixture<EstimacionRapidezPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimacionRapidezPage ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(EstimacionRapidezPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onSubmit basic test case should work', () => {
    const page = new EstimacionRapidezPage();
    const v = { tamano: 600, segundos: 160 };
    page.onSubmit(v);
    expect(page.estimacion_val).toBeCloseTo(
      225, 1, 'value should be correct'
    )
    expect(page.estimacion_str).toBe(
      'Rapidez de goteo = 225.0 mililitros por minuto',
      'label should be correct'
    );
  });

});
