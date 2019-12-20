import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolucionMadrePage } from './solucion-madre.page';

describe('SolucionMadrePage', () => {
  let component: SolucionMadrePage;
  let fixture: ComponentFixture<SolucionMadrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolucionMadrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolucionMadrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
