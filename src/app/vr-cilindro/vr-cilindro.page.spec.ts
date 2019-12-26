import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { VrCilindroPage } from './vr-cilindro.page';

describe('VrCilindroPage', () => {
  let component: VrCilindroPage;
  let fixture: ComponentFixture<VrCilindroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrCilindroPage ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(VrCilindroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onSubmit basic test case should work', () => {
    const page = new VrCilindroPage();
    const v = { diametro_t: 8, altura_t: 9 };
    page.onSubmit(v);
    expect(page.vr_cilindro_val).toBeCloseTo(
      452389, 0, 'value should be correct'
    )
    expect(page.vr_cilindro_str).toBe(
      '452389 litros',
      'label should be correct'
    );
  });
});
