import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BombandoComponent } from './bombando.component';

describe('BombandoComponent', () => {
  let component: BombandoComponent;
  let fixture: ComponentFixture<BombandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BombandoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BombandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
