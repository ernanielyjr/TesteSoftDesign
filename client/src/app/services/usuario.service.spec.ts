import { TestBed } from "@angular/core/testing";
import { UserService } from "./usuario.service";

describe("UsuarioService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: UserService = TestBed.inject(UserService);
    expect(service).toBeTruthy();
  });
});
