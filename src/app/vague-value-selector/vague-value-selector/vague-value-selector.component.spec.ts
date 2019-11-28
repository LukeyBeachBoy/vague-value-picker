import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VagueValueSelectorComponent } from './vague-value-selector.component';

describe('VagueValueSelectorComponent', () => {
  let component: VagueValueSelectorComponent;
  let fixture: ComponentFixture<VagueValueSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VagueValueSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VagueValueSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
