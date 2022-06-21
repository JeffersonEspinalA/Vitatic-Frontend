import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvicesectionComponent } from './advicesection.component';

describe('AdvicesectionComponent', () => {
  let component: AdvicesectionComponent;
  let fixture: ComponentFixture<AdvicesectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvicesectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvicesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
