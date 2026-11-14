import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../model/product.model";

@Injectable({ providedIn: 'root' })
export class ProductService {
  private host: string = "http://localhost:8888/inventory-service";
  constructor(private http: HttpClient) {}
  public getProducts(): Observable<any> {
    return this.http.get(this.host + "/api/products");
  }
  public getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(this.host + "/api/products/" + id);
  }
}
