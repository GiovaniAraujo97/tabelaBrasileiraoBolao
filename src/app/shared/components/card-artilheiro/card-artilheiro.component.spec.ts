import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardArtilheiroComponent } from './card-artilheiro.component';

describe('CardArtilheiroComponent', () => {
  let component: CardArtilheiroComponent;
  let fixture: ComponentFixture<CardArtilheiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardArtilheiroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardArtilheiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
