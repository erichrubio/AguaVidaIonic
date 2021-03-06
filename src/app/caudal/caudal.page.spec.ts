import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { CaudalPage } from './caudal.page';

describe('CaudalPage', () => {
  let component: CaudalPage;
  let fixture: ComponentFixture<CaudalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaudalPage ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CaudalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onSubmit all ones case should be one', () => {
    const page = new CaudalPage();
    const v = { t1: 1 , t2: 1, t3: 1, balde: 1 };
    page.onSubmit(v);
    expect(page.caudal_val).toBeCloseTo(
      1, 1, 'all ones should work (val)'
    )
    expect(page.caudal_str).toBe(
      'Caudal = 1.0 litros por segundo',
      'all ones should work (str)'
    );
  });

  it('#onSubmit basic test case should work', () => {
    const page = new CaudalPage();
    const v = { t1: 5 , t2: 6, t3: 9, balde: 20 };
    page.onSubmit(v);
    expect(page.caudal_val).toBeCloseTo(
      3, 1, 'value should be correct'
    )
    expect(page.caudal_str).toBe(
      'Caudal = 3.0 litros por segundo',
      'label should be correct'
    );
  });

  // it('#onSubmit official test values should work', () => {
  //   const page = new CaudalPage();
  //
  //
  //
  // });
});
