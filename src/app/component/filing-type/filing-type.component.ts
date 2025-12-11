import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filing-type',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filing-type.component.html',
  styleUrl: './filing-type.component.css',
})
export class FilingTypeComponent {
  @Output() filingChange = new EventEmitter<any>();
  typeFiling: string = '';
  surcharge: number | undefined;
  penalty: number | undefined;

  onTypeChange(value: string) {
    this.typeFiling = value;
    if (value === '1') {
      this.surcharge = 0;
      this.penalty = 0;
    } else {
      this.surcharge = undefined;
      this.penalty = undefined;
    }

    this.filingChange.emit({
      typeFiling: this.typeFiling,
      surcharge: this.surcharge,
      penalty: this.penalty,
    });
  }
}
