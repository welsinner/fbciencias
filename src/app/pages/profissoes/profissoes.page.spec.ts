import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissoesPage } from './profissoes.page';

describe('ProfissoesPage', () => {
  let component: ProfissoesPage;
  let fixture: ComponentFixture<ProfissoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfissoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfissoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
