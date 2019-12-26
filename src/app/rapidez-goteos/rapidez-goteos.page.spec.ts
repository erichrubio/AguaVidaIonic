import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { RapidezGoteosPage } from './rapidez-goteos.page';

describe('RapidezGoteosPage', () => {
  let component: RapidezGoteosPage;
  let fixture: ComponentFixture<RapidezGoteosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapidezGoteosPage ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RapidezGoteosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onSubmit basic test case should work', () => {
    const page = new RapidezGoteosPage();
    const v = { l_solucion: 150, d_recarga: 7 };
    page.onSubmit(v);
    expect(page.rapidez_goteos_val).toBeCloseTo(
      14.9, 1, 'value should be correct'
    )
    expect(page.rapidez_goteos_str).toBe(
      '14.9 mL cada minuto',
      'label should be correct'
    );
  });
});
