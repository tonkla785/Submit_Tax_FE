import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputChange]',
  standalone: true,
})
export class InputChangeDirective {
  constructor(private ef: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: any) {
    const input = event.target;
    let value = input.value.replace(/[^0-9.]/g, '');

    if (value.startsWith('0')) {
      value = value.replace(/^0+/, '');
    }

    const parts = value.split('.');
    if (parts.length > 2) {
      value = parts[0] + '.' + parts.slice(1).join('');
    }

    input.value = value;
  }

  @HostListener('focus', ['$event'])
  onFocus(event: any) {
    const input = event.target;
    input.value = input.value.replace(/,/g, '');
  }

  @HostListener('blur', ['$event'])
  onBlur(event: any) {
    const input = event.target;
    let value = input.value.replace(/,/g, '');

    const num = parseFloat(value);

    if (!isNaN(num)) {
      input.value = num.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }
  }
}
