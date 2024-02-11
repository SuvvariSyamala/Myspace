import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbookcomponentComponent } from './editbookcomponent.component';

describe('EditbookcomponentComponent', () => {
  let component: EditbookcomponentComponent;
  let fixture: ComponentFixture<EditbookcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditbookcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditbookcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
