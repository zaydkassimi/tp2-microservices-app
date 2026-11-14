import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ProductService } from "../services/product.service";
import { Product } from "../model/product.model";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data: any) => { this.products = data._embedded.products; },
      error: (err) => { console.log(err); }
    });
  }
}
