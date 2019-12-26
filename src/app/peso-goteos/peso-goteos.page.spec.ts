import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { PesoGoteosPage } from './peso-goteos.page';

describe('PesoGoteosPage', () => {
  let component: PesoGoteosPage;
  let fixture: ComponentFixture<PesoGoteosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesoGoteosPage ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PesoGoteosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onSubmit basic test case should work', () => {
    const page = new PesoGoteosPage();
    const v = { caudal: 3, c_reservorio: 2, p_cloro: 70, dias: 1 };
    page.onSubmit(v);
    expect(page.peso_goteos_val).toBeCloseTo(
      740.6, 1, 'value should be correct'
    )
    expect(page.peso_goteos_str).toBe(
      'Peso de cloro = 741 gramos cada día',
      'label should be correct'
    );
  });

  it('#onSubmit one-week test case should work', () => {
    const page = new PesoGoteosPage();
    const v = { caudal: 3, c_reservorio: 2, p_cloro: 70, dias: 7 };
    page.onSubmit(v);
    expect(page.peso_goteos_val).toBeCloseTo(
      5184.2, 0, 'value should be correct'
    )
    expect(page.peso_goteos_str).toBe(
      'Peso de cloro = 5184 gramos cada 7 días',
      'label should be correct'
    );
  });
});
