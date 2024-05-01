import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenLengthWordsComponent } from './even-length-words.component';

describe('EvenLengthWordsComponent', () => {
  let component: EvenLengthWordsComponent;
  let fixture: ComponentFixture<EvenLengthWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvenLengthWordsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvenLengthWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
