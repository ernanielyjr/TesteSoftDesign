import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const URL = "../assets/data.json";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(URL);
  }
}
