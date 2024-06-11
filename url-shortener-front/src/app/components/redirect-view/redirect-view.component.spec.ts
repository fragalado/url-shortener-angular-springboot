import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectViewComponent } from './redirect-view.component';

describe('RedirectViewComponent', () => {
  let component: RedirectViewComponent;
  let fixture: ComponentFixture<RedirectViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedirectViewComponent]
    });
    fixture = TestBed.createComponent(RedirectViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
