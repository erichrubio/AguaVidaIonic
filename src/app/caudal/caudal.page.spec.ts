import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaudalPage } from './caudal.page';

describe('CaudalPage', () => {
  let component: CaudalPage;
  let fixture: ComponentFixture<CaudalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaudalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaudalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
