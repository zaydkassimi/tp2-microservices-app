import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { CustomerService } from "../services/customer.service";
import { Customer } from "../model/customer.model";

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  constructor(private customerService: CustomerService) {}
  ngOnInit(): void {
    this.customerService.getCustomers().subscribe({
      next: (data: any) => { this.customers = data._embedded.customers; },
      error: (err) => { console.log(err); }
    });
  }
}
