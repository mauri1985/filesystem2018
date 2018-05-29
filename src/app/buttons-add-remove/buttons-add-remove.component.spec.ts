import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsAddRemoveComponent } from './buttons-add-remove.component';

describe('ButtonsAddRemoveComponent', () => {
  let component: ButtonsAddRemoveComponent;
  let fixture: ComponentFixture<ButtonsAddRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsAddRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsAddRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
