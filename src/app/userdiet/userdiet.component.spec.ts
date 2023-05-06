import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdietComponent } from './userdiet.component';

describe('UserdietComponent', () => {
  let component: UserdietComponent;
  let fixture: ComponentFixture<UserdietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdietComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserdietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
