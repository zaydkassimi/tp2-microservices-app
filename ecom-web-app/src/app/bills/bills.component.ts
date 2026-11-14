import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-bills',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './bills.component.html'
})
export class BillsComponent {
  billIds: number[] = [1, 2, 3];
}
