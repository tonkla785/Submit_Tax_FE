import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-year',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css'],
})
export class YearComponent implements OnInit {
  @Output() yearChange = new EventEmitter<any>();

  year: string = '';
  years: { value: string; name: string }[] = [];

  ngOnInit(): void {
    this.startYears(2020);
    this.selectYear();
  }

  onYearChange(event: any) {
    this.year = event.target.value;
    this.yearChange.emit(this.year);
  }

  private startYears(startYear: number): void {
    const currentYear = new Date().getFullYear();
    this.years = [];
    for (let y = startYear; y <= currentYear; y++) {
      this.years.push({ value: y.toString(), name: y.toString() });
    }
  }

  private selectYear(): void {
    const currentYear = new Date().getFullYear();
    this.year = currentYear.toString();
  }

  isDisabled(value: string): boolean {
    const currentYear = new Date().getFullYear();
    return parseInt(value, 10) > currentYear;
  }
}
