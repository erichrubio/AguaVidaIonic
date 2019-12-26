import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { CloroBotellaPage } from './cloro-botella.page';

describe('CloroBotellaPage', () => {
  let component: CloroBotellaPage;
  let fixture: ComponentFixture<CloroBotellaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloroBotellaPage ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CloroBotellaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onSubmit basic test case should work', () => {
    const page = new CloroBotellaPage();
    const v = { densidad: 1.5, tamano: 0.6 };
    page.onSubmit(v);
    expect(page.botella_val).toBeCloseTo(
      900, 1, 'value should be correct'
    )
    expect(page.botella_str_1).toBe(
      '900 gramos llena',
      'label should be correct'
    );
  });
});
