import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeTitleComponent } from './anime-title.component';

describe('AnimeTitleComponent', () => {
  let component: AnimeTitleComponent;
  let fixture: ComponentFixture<AnimeTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
