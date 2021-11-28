import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporationsComponent } from './corporations.component';

describe('CorporationsComponent', () => {
  let component: CorporationsComponent;
  let fixture: ComponentFixture<CorporationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
