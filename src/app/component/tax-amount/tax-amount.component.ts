import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
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
  @Input() valid: boolean | null | undefined;

  output: string | undefined;
  taxAmount:number | undefined;

  ngOnChanges(data: SimpleChanges) {
    if (data['vatChange'] && this.vatChange !== undefined) {
       const value = this.vatChange ?? 0;
      this.output = value.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }
  }

  onInputChange(data: string) {
    const value = parseFloat(data.replace(/,/g, ''));
    this.taxAmount = !isNaN(value) ? value : 0;
    this.dataVat.emit(value);
  }
}
