import { Routes } from '@angular/router';
import { CustomersComponent } from "./customers/customers.component";
import { ProductsComponent } from "./products/products.component";
import { BillsComponent } from "./bills/bills.component";
import { BillDetailsComponent } from "./bill-details/bill-details.component";

export const routes: Routes = [
  { path: "customers", component: CustomersComponent },
  { path: "products", component: ProductsComponent },
  { path: "bills", component: BillsComponent },
  { path: "bill-details/:id", component: BillDetailsComponent },
  { path: "", redirectTo: "/customers", pathMatch: "full" }
];
