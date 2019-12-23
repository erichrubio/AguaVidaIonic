import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { PesoGoteosPage } from './peso-goteos.page';

describe('PesoGoteosPage', () => {
  let component: PesoGoteosPage;
  let fixture: ComponentFixture<PesoGoteosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesoGoteosPage ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PesoGoteosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
