import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { CloroBotellaPage } from './cloro-botella.page';

describe('CloroBotellaPage', () => {
  let component: CloroBotellaPage;
  let fixture: ComponentFixture<CloroBotellaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloroBotellaPage ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CloroBotellaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
