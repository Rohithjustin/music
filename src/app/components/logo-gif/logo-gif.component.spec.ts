import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoGifComponent } from './logo-gif.component';

describe('LogoGifComponent', () => {
  let component: LogoGifComponent;
  let fixture: ComponentFixture<LogoGifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoGifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
