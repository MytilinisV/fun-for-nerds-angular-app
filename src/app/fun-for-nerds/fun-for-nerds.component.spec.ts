import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunForNerdsComponent } from './fun-for-nerds.component';

describe('FunForNerdsComponent', () => {
  let component: FunForNerdsComponent;
  let fixture: ComponentFixture<FunForNerdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunForNerdsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FunForNerdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
