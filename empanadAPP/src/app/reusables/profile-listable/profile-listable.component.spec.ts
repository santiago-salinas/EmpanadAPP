import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileListableComponent } from './profile-listable.component';

describe('ProfileListableComponent', () => {
  let component: ProfileListableComponent;
  let fixture: ComponentFixture<ProfileListableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileListableComponent]
    });
    fixture = TestBed.createComponent(ProfileListableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
