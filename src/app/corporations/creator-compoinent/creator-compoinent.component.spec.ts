import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorCompoinentComponent } from './creator-compoinent.component';

describe('CreatorCompoinentComponent', () => {
  let component: CreatorCompoinentComponent;
  let fixture: ComponentFixture<CreatorCompoinentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorCompoinentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorCompoinentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
