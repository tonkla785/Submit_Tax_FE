import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filing-type',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './filing-type.component.html',
  styleUrl: './filing-type.component.css',
})
export class FilingTypeComponent {
   @Output() filingChange = new EventEmitter<any>();
  @Input() valid: boolean | null | undefined;

  typeFiling: string | undefined;
  surcharge: number | undefined;
  penalty: number | undefined;

  typeFilingData = [
    { key: '0', label: 'Ordinary Filing' },
    { key: '1', label: 'Additional Filing' }
  ];

  onTypeChange(key: string) {
    this.typeFiling = key;

    const selected = this.typeFilingData.find(item => item.key === key);

    if (key === '1') {
      this.surcharge = 0;
      this.penalty = 0;
    } else {
      this.surcharge = undefined;
      this.penalty = undefined;
    }

    this.filingChange.emit({
      key: key,
      label: selected?.label,
      surcharge: this.surcharge,
      penalty: this.penalty,
    });
  }
}
