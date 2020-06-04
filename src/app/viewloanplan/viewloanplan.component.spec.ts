import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewloanplanComponent } from './viewloanplan.component';

describe('ViewloanplanComponent', () => {
  let component: ViewloanplanComponent;
  let fixture: ComponentFixture<ViewloanplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewloanplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewloanplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
