import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesinfeccionPage } from './desinfeccion.page';

describe('DesinfeccionPage', () => {
  let component: DesinfeccionPage;
  let fixture: ComponentFixture<DesinfeccionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesinfeccionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesinfeccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
