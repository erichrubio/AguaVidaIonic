import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { PesoAutoPage } from './peso-auto.page';

describe('PesoAutoPage', () => {
  let component: PesoAutoPage;
  let fixture: ComponentFixture<PesoAutoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesoAutoPage ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PesoAutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
