import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewloanprocessComponent } from './viewloanprocess.component';

describe('ViewloanprocessComponent', () => {
  let component: ViewloanprocessComponent;
  let fixture: ComponentFixture<ViewloanprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewloanprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewloanprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
