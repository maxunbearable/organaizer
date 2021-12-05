import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganaizerComponent } from './organaizer.component';

describe('OrganaizerComponent', () => {
  let component: OrganaizerComponent;
  let fixture: ComponentFixture<OrganaizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganaizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganaizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
