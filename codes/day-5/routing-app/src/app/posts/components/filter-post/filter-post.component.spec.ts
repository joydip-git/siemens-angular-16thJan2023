import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPostComponent } from './filter-post.component';

describe('FilterPostComponent', () => {
  let component: FilterPostComponent;
  let fixture: ComponentFixture<FilterPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
