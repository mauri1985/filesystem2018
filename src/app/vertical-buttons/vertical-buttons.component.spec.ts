import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalButtonsComponent } from './vertical-buttons.component';

describe('VerticalButtonsComponent', () => {
  let component: VerticalButtonsComponent;
  let fixture: ComponentFixture<VerticalButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
