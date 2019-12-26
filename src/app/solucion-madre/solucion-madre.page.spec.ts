import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { SolucionMadrePage } from './solucion-madre.page';

describe('SolucionMadrePage', () => {
  let component: SolucionMadrePage;
  let fixture: ComponentFixture<SolucionMadrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolucionMadrePage ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SolucionMadrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onSubmit basic test case should work', () => {
    const page = new SolucionMadrePage();
    const v = { l_solucion: 150, peso_cloro: 120, p_cloro: 70 };
    page.onSubmit(v);
    expect(page.c_solucion_val).toBeCloseTo(
      560, 0, 'value should be correct'
    )
    expect(page.c_solucion_str).toBe(
      '0.6 gramos/Litro o 560 miligramos/Litro - ppm',
      'label should be correct'
    );
  });
});
