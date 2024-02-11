import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallbookcomponentComponent } from './getallbookcomponent.component';

describe('GetallbookcomponentComponent', () => {
  let component: GetallbookcomponentComponent;
  let fixture: ComponentFixture<GetallbookcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallbookcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetallbookcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
