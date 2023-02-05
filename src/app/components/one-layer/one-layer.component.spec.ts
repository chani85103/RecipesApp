import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneLayerComponent } from './one-layer.component';

describe('OneLayerComponent', () => {
  let component: OneLayerComponent;
  let fixture: ComponentFixture<OneLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneLayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
