import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceStagiereComponent } from './espace-stagiere.component';

describe('EspaceStagiereComponent', () => {
  let component: EspaceStagiereComponent;
  let fixture: ComponentFixture<EspaceStagiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceStagiereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaceStagiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
