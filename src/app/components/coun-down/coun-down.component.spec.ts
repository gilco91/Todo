import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounDownComponent } from './coun-down.component';

describe('CounDownComponent', () => {
  let component: CounDownComponent;
  let fixture: ComponentFixture<CounDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
