import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PesoGoteosPage } from './peso-goteos.page';

describe('PesoGoteosPage', () => {
  let component: PesoGoteosPage;
  let fixture: ComponentFixture<PesoGoteosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesoGoteosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PesoGoteosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
