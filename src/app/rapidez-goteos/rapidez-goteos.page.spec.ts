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
});
