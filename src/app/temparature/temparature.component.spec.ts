import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemparatureComponent } from './temparature.component';

describe('TemparatureComponent', () => {
  let component: TemparatureComponent;
  let fixture: ComponentFixture<TemparatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemparatureComponent]
    });
    fixture = TestBed.createComponent(TemparatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
