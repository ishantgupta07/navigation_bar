import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviganbarComponent } from './naviganbar.component';

describe('NaviganbarComponent', () => {
  let component: NaviganbarComponent;
  let fixture: ComponentFixture<NaviganbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaviganbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaviganbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
