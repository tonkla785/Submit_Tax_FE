import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputChangeDirective } from '../../util/directive/input-change.directive';

@Component({
  selector: 'app-penalty',
  standalone: true,
  imports: [FormsModule, CommonModule, InputChangeDirective],
  templateUrl: './penalty.component.html',
  styleUrl: './penalty.component.css',
})
export class PenaltyComponent {
  @Input() penaltyData?: number;
  penalty: number | undefined;
  output: string | undefined;

  ngOnChanges(data: SimpleChanges) {
    if (data['penaltyData'] && this.penaltyData !== undefined) {
      const value = this.penaltyData ?? 0;
      this.output = value.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }
  }
}
