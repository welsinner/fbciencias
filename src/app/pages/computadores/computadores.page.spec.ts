import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputadoresPage } from './computadores.page';

describe('ComputadoresPage', () => {
  let component: ComputadoresPage;
  let fixture: ComponentFixture<ComputadoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputadoresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
