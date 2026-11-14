import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { BillService } from "../services/bill.service";
import { Bill } from "../model/bill.model";

@Component({
  selector: 'app-bill-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bill-details.component.html'
})
export class BillDetailsComponent implements OnInit {
  bill!: Bill;
  constructor(private route: ActivatedRoute, private billService: BillService) {}
  ngOnInit(): void {
    let id: number = this.route.snapshot.params['id'];
    this.billService.getBill(id).subscribe({
      next: (data: Bill) => { this.bill = data; },
      error: (err) => { console.log(err); }
    });
  }
}
