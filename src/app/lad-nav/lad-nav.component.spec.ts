import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LadNavComponent } from './lad-nav.component';

describe('LadNavComponent', () => {
  let component: LadNavComponent;
  let fixture: ComponentFixture<LadNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LadNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LadNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
