import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-total-amount',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './total-amount.component.html',
  styleUrl: './total-amount.component.css',
})
export class TotalAmountComponent {
  totalAmount: number | undefined;
}
