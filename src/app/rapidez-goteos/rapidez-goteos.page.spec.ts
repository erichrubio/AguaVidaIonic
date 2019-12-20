import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RapidezGoteosPage } from './rapidez-goteos.page';

describe('RapidezGoteosPage', () => {
  let component: RapidezGoteosPage;
  let fixture: ComponentFixture<RapidezGoteosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapidezGoteosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RapidezGoteosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
