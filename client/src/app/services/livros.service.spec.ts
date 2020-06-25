import { TestBed } from '@angular/core/testing';
import { LivrosService } from './livros.service';

describe('LivrosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LivrosService = TestBed.inject(LivrosService);
    expect(service).toBeTruthy();
  });
});
