import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibaMainComponent } from './fiba-main.component';

describe('FibaMainComponent', () => {
  let component: FibaMainComponent;
  let fixture: ComponentFixture<FibaMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FibaMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FibaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
