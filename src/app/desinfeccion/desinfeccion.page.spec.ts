import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { DesinfeccionPage } from './desinfeccion.page';

describe('DesinfeccionPage', () => {
  let component: DesinfeccionPage;
  let fixture: ComponentFixture<DesinfeccionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesinfeccionPage ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DesinfeccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
