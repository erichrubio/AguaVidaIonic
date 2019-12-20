import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CloroBotellaPage } from './cloro-botella.page';

describe('CloroBotellaPage', () => {
  let component: CloroBotellaPage;
  let fixture: ComponentFixture<CloroBotellaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloroBotellaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CloroBotellaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
