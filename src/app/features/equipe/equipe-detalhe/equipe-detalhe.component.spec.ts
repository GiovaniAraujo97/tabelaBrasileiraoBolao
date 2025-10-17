import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeDetalheComponent } from './equipe-detalhe.component';

describe('EquipeDetalheComponent', () => {
  let component: EquipeDetalheComponent;
  let fixture: ComponentFixture<EquipeDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipeDetalheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipeDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
