import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputChangeDirective } from '../../util/directive/input-change.directive';

@Component({
  selector: 'app-tax-amount',
  standalone: true,
  imports: [FormsModule, CommonModule, InputChangeDirective],
  templateUrl: './tax-amount.component.html',
  styleUrl: './tax-amount.component.css',
})
export class TaxAmountComponent {
  @Output() dataVat = new EventEmitter<any>();
  @Input() vatChange?: number;
  @Input() valid?: boolean;

  output: string | undefined;
  taxAmount: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['vatChange'] && this.vatChange !== undefined) {
      this.output = this.vatChange.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      this.taxAmount = this.vatChange;
    }
  }

  onInputChange(data: string) {
    const value = parseFloat(data.replace(/,/g, '')) || 0;
    // this.vatInput.emit(value);
  }
}
