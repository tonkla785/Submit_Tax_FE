import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputChangeDirective } from '../../util/directive/input-change.directive';


@Component({
  selector: 'app-sale-amount',
  standalone: true,
  imports: [FormsModule, CommonModule, InputChangeDirective],
  templateUrl: './sale-amount.component.html',
  styleUrl: './sale-amount.component.css',
})
export class SaleAmountComponent {
  @Output() totalChange = new EventEmitter<any>();

  input: string | undefined;
  saleAmount: number | undefined;

  onTotalChange() {
    this.saleAmount = parseFloat(String(this.input).replace(/,/g, ''));
    this.totalChange.emit(this.saleAmount);
  }
}
