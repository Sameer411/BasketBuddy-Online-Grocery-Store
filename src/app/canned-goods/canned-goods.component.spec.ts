import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CannedGoodsComponent } from './canned-goods.component';

describe('CannedGoodsComponent', () => {
  let component: CannedGoodsComponent;
  let fixture: ComponentFixture<CannedGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CannedGoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CannedGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
