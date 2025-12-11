import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputChangeDirective } from '../../util/directive/input-change.directive';

@Component({
  selector: 'app-surcharge',
  standalone: true,
  imports: [FormsModule, CommonModule, InputChangeDirective],
  templateUrl: './surcharge.component.html',
  styleUrl: './surcharge.component.css',
})
export class SurchargeComponent {
  @Input() surChargeData?: number;
  surcharge: number | undefined;
  output: string | undefined;

  ngOnChanges(data: SimpleChanges) {
    if (data['surChargeData'] && this.surChargeData !== undefined) {
      const value = this.surChargeData ?? 0;
      this.output = value.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }
  }
}
