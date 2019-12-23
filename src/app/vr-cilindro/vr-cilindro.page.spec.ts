import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { VrCilindroPage } from './vr-cilindro.page';

describe('VrCilindroPage', () => {
  let component: VrCilindroPage;
  let fixture: ComponentFixture<VrCilindroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrCilindroPage ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(VrCilindroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
