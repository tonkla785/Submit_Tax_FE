import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() valid: boolean | null | undefined;

  input: string | undefined;
  saleAmount: number | undefined;

  onTotalChange() {
    const value = parseFloat(String(this.input).replace(/,/g, ''));
    this.saleAmount = !isNaN(value) ? value : 0;
    this.totalChange.emit(this.saleAmount);
  }
}
