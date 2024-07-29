import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRecommendedComponent } from './top-recommended.component';

describe('TopRecommendedComponent', () => {
  let component: TopRecommendedComponent;
  let fixture: ComponentFixture<TopRecommendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRecommendedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRecommendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
