import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PesoAutoPage } from './peso-auto.page';

describe('PesoAutoPage', () => {
  let component: PesoAutoPage;
  let fixture: ComponentFixture<PesoAutoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesoAutoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PesoAutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
