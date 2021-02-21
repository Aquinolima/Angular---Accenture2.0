import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciciosDiretivasComponent } from './exercicios-diretivas.component';

describe('ExerciciosDiretivasComponent', () => {
  let component: ExerciciosDiretivasComponent;
  let fixture: ComponentFixture<ExerciciosDiretivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciciosDiretivasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciciosDiretivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
