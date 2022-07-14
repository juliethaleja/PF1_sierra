import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmaComponent } from './bma.component';

describe('BmaComponent', () => {
  let component: BmaComponent;
  let fixture: ComponentFixture<BmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
