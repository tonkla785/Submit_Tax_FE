import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputChangeDirective } from '../../util/directive/input-change.directive';

@Component({
  selector: 'app-total-amount',
  standalone: true,
  imports: [FormsModule, CommonModule, InputChangeDirective],
  templateUrl: './total-amount.component.html',
  styleUrl: './total-amount.component.css',
})
export class TotalAmountComponent {
  @Input() totalData?: number;
  totalAmount: number | undefined;
  output: string | undefined;

  ngOnChanges(data: SimpleChanges) {
    if (data['totalData'] && this.totalData !== undefined) {
      const value = this.totalData ?? 0;
      this.output = value.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }
  }
}
