import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDetailsComponent } from './form-details.component';

describe('FormDetailsComponent', () => {
  let component: FormDetailsComponent;
  let fixture: ComponentFixture<FormDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
