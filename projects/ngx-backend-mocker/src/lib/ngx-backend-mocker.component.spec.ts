import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBackendMockerComponent } from './ngx-backend-mocker.component';

describe('NgxBackendMockerComponent', () => {
  let component: NgxBackendMockerComponent;
  let fixture: ComponentFixture<NgxBackendMockerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxBackendMockerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxBackendMockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
