import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileCardComponent } from './file-card.component';

describe('ObjectCardComponent', () => {
  let component: FileCardComponent;
  let fixture: ComponentFixture<FileCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileCardComponent]
    });
    fixture = TestBed.createComponent(FileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
