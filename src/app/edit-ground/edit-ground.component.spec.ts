import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGroundComponent } from './edit-ground.component';

describe('EditGroundComponent', () => {
  let component: EditGroundComponent;
  let fixture: ComponentFixture<EditGroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
