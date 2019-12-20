import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VrCuadradoPage } from './vr-cuadrado.page';

describe('VrCuadradoPage', () => {
  let component: VrCuadradoPage;
  let fixture: ComponentFixture<VrCuadradoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrCuadradoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VrCuadradoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});