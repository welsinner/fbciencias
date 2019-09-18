import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncerramentoPage } from './encerramento.page';

describe('EncerramentoPage', () => {
  let component: EncerramentoPage;
  let fixture: ComponentFixture<EncerramentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncerramentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncerramentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
