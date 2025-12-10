import { Component } from '@angular/core';
import { FilingTypeComponent } from '../component/filing-type/filing-type.component';
import { MonthComponent } from '../component/month/month.component';
import { YearComponent } from '../component/year/year.component';

@Component({
  selector: 'app-input-detail',
  standalone: true,
  imports: [FilingTypeComponent ,MonthComponent ,YearComponent],
  templateUrl: './input-detail.component.html',
  styleUrl: './input-detail.component.css'
})
export class InputDetailComponent {

}
