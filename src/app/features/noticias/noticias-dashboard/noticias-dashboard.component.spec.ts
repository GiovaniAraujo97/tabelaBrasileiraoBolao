import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasDashboardComponent } from './noticias-dashboard.component';

describe('NoticiasDashboardComponent', () => {
  let component: NoticiasDashboardComponent;
  let fixture: ComponentFixture<NoticiasDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticiasDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
