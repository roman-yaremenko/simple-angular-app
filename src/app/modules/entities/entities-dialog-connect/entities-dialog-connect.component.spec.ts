import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitiesDialogConnectComponent } from './entities-dialog-connect.component';

describe('EntitiesDialogConnectComponent', () => {
  let component: EntitiesDialogConnectComponent;
  let fixture: ComponentFixture<EntitiesDialogConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitiesDialogConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitiesDialogConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
