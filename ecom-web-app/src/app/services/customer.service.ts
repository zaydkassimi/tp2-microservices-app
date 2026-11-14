import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Customer } from "../model/customer.model";

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private host: string = "http://localhost:8888/customer-service";
  constructor(private http: HttpClient) {}
  public getCustomers(): Observable<any> {
    return this.http.get(this.host + "/api/customers");
  }
  public getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.host + "/api/customers/" + id);
  }
}
