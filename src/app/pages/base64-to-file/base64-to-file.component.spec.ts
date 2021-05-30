import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Base64ToFileComponent } from './base64-to-file.component';

describe('Base64ToFileComponent', () => {
  let component: Base64ToFileComponent;
  let fixture: ComponentFixture<Base64ToFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Base64ToFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Base64ToFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
