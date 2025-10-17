import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtilhariaListaComponent } from './artilharia-lista.component';

describe('ArtilhariaListaComponent', () => {
  let component: ArtilhariaListaComponent;
  let fixture: ComponentFixture<ArtilhariaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtilhariaListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtilhariaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
