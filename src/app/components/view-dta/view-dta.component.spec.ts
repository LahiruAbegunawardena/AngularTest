import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDtaComponent } from './view-dta.component';

describe('ViewDtaComponent', () => {
  let component: ViewDtaComponent;
  let fixture: ComponentFixture<ViewDtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
