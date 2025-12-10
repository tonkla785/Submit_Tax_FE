import { Component } from '@angular/core';
import { FilingTypeComponent } from '../component/filing-type/filing-type.component';

@Component({
  selector: 'app-input-detail',
  standalone: true,
  imports: [FilingTypeComponent],
  templateUrl: './input-detail.component.html',
  styleUrl: './input-detail.component.css'
})
export class InputDetailComponent {

}
