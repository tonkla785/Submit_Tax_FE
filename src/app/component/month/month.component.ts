import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-month',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css'],
})
export class MonthComponent implements OnInit {
  @Output() monthChange = new EventEmitter<any>();

  month: string = '';

  months = [
    { value: '01', name: 'January' },
    { value: '02', name: 'February' },
    { value: '03', name: 'March' },
    { value: '04', name: 'April' },
    { value: '05', name: 'May' },
    { value: '06', name: 'June' },
    { value: '07', name: 'July' },
    { value: '08', name: 'August' },
    { value: '09', name: 'September' },
    { value: '10', name: 'October' },
    { value: '11', name: 'November' },
    { value: '12', name: 'December' },
  ];

  ngOnInit(): void {
    this.setDefaultMonth();
  }

  onMonthChange(event: any) {
    const value = event.target.value;
    const selectedMonth = this.months.find((m) => m.value === value);

    this.monthChange.emit(selectedMonth?.name);
  }

  private setDefaultMonth(): void {
    const currentMonth = new Date().getMonth() + 1;
    this.month = currentMonth < 10 ? `0${currentMonth}` : `${currentMonth}`;
  }

  isDisabled(value: string): boolean {
    const currentMonth = new Date().getMonth() + 1;
    return parseInt(value, 10) > currentMonth;
  }
}
