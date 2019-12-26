import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { VrCuadradoPage } from './vr-cuadrado.page';

describe('VrCuadradoPage', () => {
  let component: VrCuadradoPage;
  let fixture: ComponentFixture<VrCuadradoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrCuadradoPage ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(VrCuadradoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onSubmit basic test case should work', () => {
    const page = new VrCuadradoPage();
    const v = { largo_t: 2, ancho_t: 3, altura_t: 4 };
    page.onSubmit(v);
    expect(page.vr_cubo_val).toBeCloseTo(
      24000, 0, 'value should be correct'
    )
    expect(page.vr_cubo_str).toBe(
      '24000 litros',
      'label should be correct'
    );
  });
});
