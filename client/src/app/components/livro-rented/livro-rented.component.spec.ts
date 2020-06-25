import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LivroRentedComponent } from './livro-rented.component';

describe('LivroDescriptionComponent', () => {
  let component: LivroRentedComponent;
  let fixture: ComponentFixture<LivroRentedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LivroRentedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroRentedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
