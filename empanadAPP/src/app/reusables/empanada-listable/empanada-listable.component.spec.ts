import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpanadaListableComponent } from './empanada-listable.component';

describe('EmpanadaListableComponent', () => {
  let component: EmpanadaListableComponent;
  let fixture: ComponentFixture<EmpanadaListableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EmpanadaListableComponent]
    });
    fixture = TestBed.createComponent(EmpanadaListableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
