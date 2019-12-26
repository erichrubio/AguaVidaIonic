import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { DesinfeccionPage } from './desinfeccion.page';

describe('DesinfeccionPage', () => {
  let component: DesinfeccionPage;
  let fixture: ComponentFixture<DesinfeccionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesinfeccionPage ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DesinfeccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onSubmit basic test case should work', () => {
    const page = new DesinfeccionPage();
    const v = { v_reservorio: 2000, c_reservorio: 5, p_cloro: 70 };
    page.onSubmit(v);
    expect(page.desinfeccion_val).toBeCloseTo(
      14.3, 1, 'value should be correct'
    )
    expect(page.desinfeccion_str).toBe(
      '14.3 gramos',
      'label should be correct'
    );
  });
});
