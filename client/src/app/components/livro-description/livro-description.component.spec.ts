import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LivroDescriptionComponent } from './livro-description.component';

describe('LivroDescriptionComponent', () => {
  let component: LivroDescriptionComponent;
  let fixture: ComponentFixture<LivroDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LivroDescriptionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
