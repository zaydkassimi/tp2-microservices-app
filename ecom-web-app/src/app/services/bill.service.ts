import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Bill } from "../model/bill.model";

@Injectable({ providedIn: 'root' })
export class BillService {
  private host: string = "http://localhost:8888/billing-service";
  constructor(private http: HttpClient) {}
  public getBill(id: number): Observable<Bill> {
    return this.http.get<Bill>(this.host + "/bills/" + id);
  }
}
