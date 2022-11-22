import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldeActuelComponent } from './solde-actuel.component';

describe('SoldeActuelComponent', () => {
  let component: SoldeActuelComponent;
  let fixture: ComponentFixture<SoldeActuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoldeActuelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoldeActuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
