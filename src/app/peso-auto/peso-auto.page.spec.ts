import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { PesoAutoPage } from './peso-auto.page';

describe('PesoAutoPage', () => {
  let component: PesoAutoPage;
  let fixture: ComponentFixture<PesoAutoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesoAutoPage ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PesoAutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onSubmit basic test case should work', () => {
    const page = new PesoAutoPage();
    const v = { t_solucion: 150, caudal: 3, c_reservorio: 1.5, p_cloro: 70 };
    page.onSubmit(v);
    expect(page.peso_auto_val).toBeCloseTo(
      868, 0, 'value should be correct'
    )
    expect(page.peso_auto_str).toBe(
      'Peso de cloro = 868 gramos cada 1.6 días',
      'label should be correct'
    );
  });
});
