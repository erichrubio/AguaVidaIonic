import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { RapidezAutoPage } from './rapidez-auto.page';

describe('RapidezAutoPage', () => {
  let component: RapidezAutoPage;
  let fixture: ComponentFixture<RapidezAutoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapidezAutoPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RapidezAutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
