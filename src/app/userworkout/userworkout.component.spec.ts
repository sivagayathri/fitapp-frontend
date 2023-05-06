import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserworkoutComponent } from './userworkout.component';

describe('UserworkoutComponent', () => {
  let component: UserworkoutComponent;
  let fixture: ComponentFixture<UserworkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserworkoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserworkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
